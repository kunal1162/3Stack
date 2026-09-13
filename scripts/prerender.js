import fs from 'fs';
import path from 'path';
import { SERVICES_MAP } from '../src/data/servicesData.js';
import { HOMEPAGE_FAQS } from '../src/data/faqsData.js';

const distDir = path.resolve('dist');

function runPrerender() {
  console.log('--- Starting Multi-Page Pre-rendering for SEO & AEO ---');

  if (!fs.existsSync(distDir)) {
    console.error('dist directory does not exist! Please run vite build first.');
    process.exit(1);
  }

  const baseHtmlPath = path.join(distDir, 'index.html');
  const baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');

  // 1. Generate Dedicated Service Pages
  const services = Object.values(SERVICES_MAP);

  for (const srv of services) {
    const serviceDir = path.join(distDir, 'services', srv.slug);
    fs.mkdirSync(serviceDir, { recursive: true });

    let pageHtml = baseHtml;

    // Replace Title
    pageHtml = pageHtml.replace(
      /<title>.*?<\/title>/,
      `<title>${srv.metaTitle}</title>`
    );

    // Replace Meta Description
    pageHtml = pageHtml.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/,
      `<meta name="description" content="${srv.metaDescription}" />`
    );

    // Replace Canonical
    pageHtml = pageHtml.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/,
      `<link rel="canonical" href="${srv.canonicalUrl}" />`
    );

    // Replace OG Tags
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/,
      `<meta property="og:title" content="${srv.metaTitle}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/,
      `<meta property="og:description" content="${srv.metaDescription}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/,
      `<meta property="og:url" content="${srv.canonicalUrl}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+property="og:image"\s+content=".*?"\s*\/?>/,
      `<meta property="og:image" content="https://3stack.tech${srv.imageSrc}" />`
    );

    // Replace Twitter Tags
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/,
      `<meta name="twitter:title" content="${srv.metaTitle}" />`
    );
    pageHtml = pageHtml.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/,
      `<meta name="twitter:description" content="${srv.metaDescription}" />`
    );

    // Service JSON-LD Schemas
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://3stack.tech/' },
        { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://3stack.tech/#services' },
        { '@type': 'ListItem', position: 3, name: srv.shortTitle || srv.title, item: srv.canonicalUrl },
      ],
    };

    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${srv.canonicalUrl}#service`,
      name: srv.title,
      serviceType: srv.shortTitle || srv.title,
      description: srv.summary,
      provider: { '@id': 'https://3stack.tech/#organization' },
      url: srv.canonicalUrl,
      image: `https://3stack.tech${srv.imageSrc}`,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${srv.title} Deliverables`,
        itemListElement: srv.deliverables.map((d) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: d },
        })),
      },
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: srv.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    };

    const serviceScripts = `
    <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(serviceSchema)}</script>
    <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>
    `;

    pageHtml = pageHtml.replace('</head>', `${serviceScripts}</head>`);

    // In-body fallback content for instant crawler indexability
    const fallbackBody = `
    <div id="root">
      <div class="seo-crawler-only">
        <nav aria-label="Breadcrumb">
          <a href="/">Home</a> / <a href="/#services">Services</a> / <span>${srv.title}</span>
        </nav>
        <header>
          <h1>${srv.title}</h1>
          <p>${srv.summary}</p>
        </header>
        <section>
          <h2>The Challenge &amp; Solution</h2>
          <p><strong>The Challenge:</strong> ${srv.problemSolved}</p>
          <p><strong>Our Solution:</strong> ${srv.summary}</p>
        </section>
        <section>
          <h2>Who This Service Is For</h2>
          <ul>
            ${srv.whoIsItFor.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </section>
        <section>
          <h2>Core Deliverables</h2>
          <ul>
            ${srv.deliverables.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </section>
        <section>
          <h2>5-Step Delivery Process</h2>
          <ol>
            ${srv.processSteps.map((p) => `<li><strong>${p.title}:</strong> ${p.desc}</li>`).join('')}
          </ol>
        </section>
        <section>
          <h2>Frequently Asked Questions</h2>
          ${srv.faqs
            .map(
              (faq) => `
            <div>
              <h3>${faq.question}</h3>
              <p>${faq.answer}</p>
            </div>
          `
            )
            .join('')}
        </section>
        <section>
          <h2>Contact 3STACK</h2>
          <p>Email: <a href="mailto:3stacktech@gmail.com">3stacktech@gmail.com</a></p>
          <p>Instagram: <a href="https://www.instagram.com/3stacktech">@3stacktech</a></p>
        </section>
      </div>
    </div>
    `;

    pageHtml = pageHtml.replace(/<div id="root">[\s\S]*?<\/div>/, fallbackBody);

    const targetFile = path.join(serviceDir, 'index.html');
    fs.writeFileSync(targetFile, pageHtml, 'utf8');
    console.log(`✓ Pre-rendered: /services/${srv.slug}/index.html`);
  }

  // 2. Generate Custom 404 Page
  let notFoundHtml = baseHtml;
  notFoundHtml = notFoundHtml.replace(/<title>.*?<\/title>/, '<title>404 — Page Not Found | 3STACK</title>');
  notFoundHtml = notFoundHtml.replace(
    /<meta\s+name="robots"\s+content=".*?"\s*\/?>/,
    '<meta name="robots" content="noindex, follow" />'
  );
  fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml, 'utf8');
  console.log('✓ Generated custom 404.html');

  console.log('--- Pre-rendering completed successfully! ---');
}

runPrerender();
