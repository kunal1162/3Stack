import React from 'react';

/**
 * Renders verified Schema.org JSON-LD structured data.
 */
export function JsonLd({ schema }) {
  if (!schema) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://3stack.tech/#organization',
    name: '3STACK',
    alternateName: ['3STACK Technologies', '3Stack Tech'],
    url: 'https://3stack.tech',
    logo: 'https://3stack.tech/images/3stack-logo.png',
    image: 'https://3stack.tech/images/og-image.jpg',
    description:
      '3STACK is a modern technology and digital solutions company providing web development, custom software engineering, digital marketing, SEO, business workflow automation, cloud infrastructure, and AutoCAD 2D drafting.',
    email: '3stacktech@gmail.com',
    sameAs: ['https://www.instagram.com/3stacktechnologies'],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: '3stacktech@gmail.com',
        availableLanguage: ['en'],
      },
    ],
    knowsAbout: [
      'Web Design',
      'Website Development',
      'UI/UX Design',
      'Custom Software Development',
      'Business Workflow Automation',
      'Search Engine Optimization (SEO)',
      'Digital Marketing',
      'AutoCAD 2D Drafting',
      'Cloud Infrastructure Hosting',
    ],
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://3stack.tech/#website',
    name: '3STACK',
    url: 'https://3stack.tech',
    description:
      '3STACK — Build, Grow & Automate. Modern websites, software solutions, digital marketing, and business automation systems.',
    publisher: {
      '@id': 'https://3stack.tech/#organization',
    },
    inLanguage: 'en-US',
  };
}

export function getBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getFaqPageSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.detailedAnswer || faq.answer || faq.shortAnswer,
      },
    })),
  };
}

export function getServiceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${service.canonicalUrl}#service`,
    name: service.title,
    serviceType: service.shortTitle || service.title,
    description: service.summary || service.metaDescription,
    provider: {
      '@id': 'https://3stack.tech/#organization',
    },
    url: service.canonicalUrl,
    image: `https://3stack.tech${service.imageSrc}`,
    areaServed: {
      '@type': 'Country',
      name: 'Global',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.title} Capabilities`,
      itemListElement: (service.deliverables || []).map((del, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: del,
        },
      })),
    },
  };
}

export default JsonLd;
