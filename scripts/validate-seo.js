import fs from 'fs';
import path from 'path';

console.log('--- Starting Comprehensive SEO & Schema Verification ---');

const filesToTest = [
  'dist/index.html',
  'dist/services/web-design-development/index.html',
  'dist/services/digital-marketing-seo/index.html',
  'dist/services/business-automation/index.html',
  'dist/services/software-development/index.html',
  'dist/services/autocad-designs/index.html',
  'dist/services/cloud-solutions/index.html',
  'dist/404.html',
];

let allValid = true;

for (const relPath of filesToTest) {
  const fullPath = path.resolve(relPath);
  if (!fs.existsSync(fullPath)) {
    console.error(`MISSING: ${relPath}`);
    allValid = false;
    continue;
  }

  const content = fs.readFileSync(fullPath, 'utf8');

  // Title check
  const titleMatch = content.match(/<title>(.*?)<\/title>/);
  const title = titleMatch ? titleMatch[1] : null;

  // Description check
  const descMatch = content.match(/<meta\s+name="description"\s+content="(.*?)"\s*\/?>/);
  const desc = descMatch ? descMatch[1] : null;

  // Canonical check
  const canonicalMatch = content.match(/<link\s+rel="canonical"\s+href="(.*?)"\s*\/?>/);
  const canonical = canonicalMatch ? canonicalMatch[1] : null;

  // H1 check
  const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() : null;

  console.log(`\nChecking: ${relPath}`);
  console.log(`  Title: ${title || 'MISSING'}`);
  console.log(`  Description: ${desc ? desc.substring(0, 70) + '...' : 'MISSING'}`);
  console.log(`  Canonical: ${canonical || 'NONE'}`);
  console.log(`  H1: ${h1 ? h1.substring(0, 70) + '...' : 'MISSING'}`);

  // Validate JSON-LD
  const jsonLdRegex = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let jsonMatch;
  let schemaCount = 0;

  while ((jsonMatch = jsonLdRegex.exec(content)) !== null) {
    schemaCount++;
    try {
      const parsed = JSON.parse(jsonMatch[1]);
      const type = parsed['@type'] || (parsed['@graph'] ? `@graph (${parsed['@graph'].length} items)` : 'Unknown');
      console.log(`  Schema #${schemaCount}: Valid ${type}`);
    } catch (err) {
      console.error(`  Schema #${schemaCount}: PARSE ERROR: ${err.message}`);
      allValid = false;
    }
  }

  if (schemaCount === 0 && relPath !== 'dist/404.html') {
    console.warn(`  WARNING: No JSON-LD found in ${relPath}`);
  }
}

// Check sitemap
console.log('\nChecking: dist/sitemap.xml');
const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
const urlMatches = sitemap.match(/<loc>(.*?)<\/loc>/g) || [];
console.log(`  Total Sitemap URLs: ${urlMatches.length}`);
urlMatches.forEach((loc) => console.log(`    ${loc.replace(/<\/?loc>/g, '')}`));

// Check robots.txt
console.log('\nChecking: dist/robots.txt');
const robots = fs.readFileSync('dist/robots.txt', 'utf8');
if (robots.includes('User-agent: *') && robots.includes('Sitemap:')) {
  console.log('  robots.txt format is valid.');
} else {
  console.error('  robots.txt is invalid!');
  allValid = false;
}

if (allValid) {
  console.log('\n✓ ALL SEO, METADATA, AND SCHEMA VALIDATION CHECKS PASSED!');
} else {
  console.error('\n✕ Some validation checks failed.');
  process.exit(1);
}
