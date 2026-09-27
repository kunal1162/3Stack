import React from 'react';
import { Helmet } from 'react-helmet-async';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
  type?: 'website' | 'article' | 'profile';
  breadcrumbs?: BreadcrumbItem[];
  noindex?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ 
  title, 
  description, 
  keywords,
  canonicalUrl,
  ogImage = 'https://3stack.in/3stack-logo.png',
  schema,
  type = 'website',
  breadcrumbs,
  noindex = false
}) => {
  // Prevent duplicate branding in title
  const siteTitle = title.includes('3Stack') ? title : `${title} | 3Stack`;
  
  // Dynamically resolve canonical URL for SEO indexing targeting 3stack.in
  const baseUrl = 'https://3stack.in';
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const cleanPath = currentPath === '/' ? '' : currentPath.replace(/\/+$/, '');
  const finalCanonicalUrl = canonicalUrl || `${baseUrl}${cleanPath}`;
  const isHomePage = currentPath === '' || currentPath === '/';

  // Primary Organization Schema with branded alternate names for AEO/Knowledge Graph
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    'name': '3Stack',
    'alternateName': ['3 Stack', '3Stack Agency', '3Stack IT Agency', '3Stack Digital Agency'],
    'legalName': '3Stack IT Agency',
    'url': baseUrl,
    'logo': `${baseUrl}/3stack-logo.png`,
    'description': '3Stack provides high-performance web development, digital growth marketing, and intelligent business automation solutions.',
    'email': '3stacktech@gmail.com',
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+91-8306099337',
      'contactType': 'customer service',
      'email': '3stacktech@gmail.com',
      'availableLanguage': ['English', 'Hindi']
    },
    'sameAs': [
      'https://www.facebook.com/share/1FFHZrXkja/',
      'https://instagram.com/3stacktech',
      'https://wa.me/918306099337'
    ]
  };

  // LocalBusiness Schema for verified NAP & Local SEO
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}/#localbusiness`,
    'name': '3Stack',
    'alternateName': ['3 Stack', '3Stack IT Agency'],
    'image': `${baseUrl}/3stack-logo.png`,
    'url': baseUrl,
    'telephone': '+91-8306099337',
    'email': '3stacktech@gmail.com',
    'priceRange': '$$',
    'openingHours': 'Mo-Fr 09:00-18:00',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Jaipur',
      'addressLocality': 'Jaipur',
      'addressRegion': 'Rajasthan',
      'postalCode': '302012',
      'addressCountry': 'IN'
    },
    'parentOrganization': {
      '@id': `${baseUrl}/#organization`
    }
  };

  // WebSite Schema (Homepage sitelinks searchbox)
  const websiteSchema = isHomePage ? {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    'name': '3Stack',
    'alternateName': '3 Stack',
    'url': baseUrl,
    'description': '3Stack provides high-performance web development, digital growth marketing, and intelligent business automation solutions.',
    'publisher': {
      '@id': `${baseUrl}/#organization`
    },
    'potentialAction': {
      '@type': 'SearchAction',
      'target': `${baseUrl}/services/{search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  } : null;

  // BreadcrumbList Schema
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, idx) => ({
      '@type': 'ListItem',
      'position': idx + 1,
      'name': item.name,
      'item': item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`
    }))
  } : null;

  // Combine schemas cleanly
  const allSchemas: Record<string, unknown>[] = [orgSchema, localBusinessSchema];
  if (websiteSchema) allSchemas.push(websiteSchema);
  if (breadcrumbSchema) allSchemas.push(breadcrumbSchema);

  if (schema) {
    if (Array.isArray(schema)) {
      allSchemas.push(...schema);
    } else {
      allSchemas.push(schema);
    }
  }

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name='description' content={description} />
      {keywords && <meta name='keywords' content={keywords} />}
      <meta name='robots' content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      
      {/* OpenGraph tags */}
      <meta property='og:title' content={siteTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={ogImage} />
      <meta property='og:type' content={type} />
      <meta property='og:url' content={finalCanonicalUrl} />
      <meta property='og:site_name' content="3Stack" />
      
      {/* Twitter tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={siteTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={ogImage} />
      <meta name='twitter:site' content="@3stacktech" />

      {/* Canonical URL */}
      <link rel='canonical' href={finalCanonicalUrl} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(allSchemas)}
      </script>
    </Helmet>
  );
};
