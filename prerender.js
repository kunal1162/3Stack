import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8');
const { render } = await import('./dist/server/entry-server.js');

// Determine routes to prerender
const routesToPrerender = fs
  .readdirSync(toAbsolute('src/pages'))
  .map((file) => {
    const name = file.replace(/\.tsx$/, '').toLowerCase();
    return name === 'home' ? '/' : `/${name}`;
  });
  
const extraRoutes = [
  '/services/web-development',
  '/services/app-development',
  '/services/digital-marketing',
  '/services/business-automation',
  '/services/web-design',
  '/services/autocad'
];

// Clean up some routes that are dynamic or not real pages
let routes = [...routesToPrerender, ...extraRoutes].filter(r => 
  !r.includes('blogdetail') && 
  !r.includes('servicedetails') &&
  !r.includes('notfound') &&
  !r.includes('.css')
);

// Map components to actual route paths
routes = routes.map(r => {
  if (r === '/faqpage') return '/faq';
  if (r === '/privacypolicy') return '/privacy';
  if (r === '/work') return '/portfolio';
  return r;
});

(async () => {
  for (const url of routes) {
    const helmetContext = {};
    const appHtml = render(url, helmetContext);
    const { html } = appHtml;

    const { helmet } = helmetContext;
    let headTags = '';
    if (helmet) {
      headTags = `
        ${helmet.title.toString()}
        ${helmet.priority.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${helmet.script.toString()}
      `;
    }

    const htmlRendered = template
      .replace('<!--app-head-->', headTags)
      .replace('<!--app-html-->', html);

    const filePath = `dist${url === '/' ? '/index' : url}.html`;
    const dest = toAbsolute(filePath);
    
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.writeFileSync(dest, htmlRendered);
    console.log('Pre-rendered:', filePath);
  }

  // Generate Sitemap
  const baseUrl = 'https://3stack.in';
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(url => `  <url>
    <loc>${baseUrl}${url === '/' ? '' : url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(toAbsolute('dist/sitemap.xml'), sitemapXml);
  console.log('Generated sitemap.xml');
})();
