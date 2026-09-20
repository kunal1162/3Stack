import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  schema?: Record<string, any> | Record<string, any>[];
  type?: 'website' | 'article' | 'profile';
}

export const SEOHead: React.FC<SEOHeadProps> = ({ 
  title, 
  description, 
  keywords,
  canonicalUrl,
  ogImage = 'https://3stack.in/3stack-logo.png',
  schema,
  type = 'website'
}) => {
  const siteTitle = title.includes('3Stack') ? title : `${title} | 3Stack IT Agency`;
  
  // Dynamically resolve canonical URL for SEO indexing
  const baseUrl = 'https://3stack.in';
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
  const finalCanonicalUrl = canonicalUrl || `${baseUrl}${currentPath}`;

  // Organization Schema (always present)
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': '3Stack IT Agency',
    'url': baseUrl,
    'logo': `${baseUrl}/3stack-logo.png`,
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+91-8306099337',
      'contactType': 'customer service'
    },
    'sameAs': [
      'https://www.facebook.com/share/1FFHZrXkja/',
      'https://instagram.com/3stacktech'
    ]
  };

  // LocalBusiness Schema (always present for local SEO)
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': '3Stack IT Agency',
    'image': `${baseUrl}/3stack-logo.png`,
    '@id': baseUrl,
    'url': baseUrl,
    'telephone': '+918306099337',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Jaipur',
      'addressLocality': 'Jaipur',
      'addressRegion': 'Rajasthan',
      'postalCode': '302012',
      'addressCountry': 'IN'
    }
  };

  // WebSite Schema (Domain Entity Authority)
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': '3Stack IT Agency',
    'url': baseUrl,
    'description': 'Premium Web & App Development and AI-Driven Digital Marketing Agency in Jaipur.',
    'publisher': {
      '@id': baseUrl
    }
  };

  // Combine default schemas with any page-specific schemas passed as props
  const allSchemas: Record<string, any>[] = [orgSchema, localBusinessSchema, websiteSchema];
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
      
      {/* OpenGraph tags */}
      <meta property='og:title' content={siteTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={ogImage} />
      <meta property='og:type' content={type} />
      <meta property='og:url' content={finalCanonicalUrl} />
      <meta property='og:site_name' content="3Stack IT Agency" />
      
      {/* Twitter tags */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={siteTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={ogImage} />
      <meta name='twitter:site' content="@3stacktech" />

      {/* Canonical URL */}
      <link rel='canonical' href={finalCanonicalUrl} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(allSchemas) }} />
    </Helmet>
  );
};
