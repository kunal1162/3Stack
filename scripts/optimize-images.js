import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = path.resolve('public/images');

async function processImages() {
  console.log('Optimizing images in:', imagesDir);
  const files = fs.readdirSync(imagesDir);

  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    const ext = path.extname(file).toLowerCase();

    if (ext === '.jpg' || ext === '.png') {
      const baseName = path.basename(file, ext);
      const webpPath = path.join(imagesDir, `${baseName}.webp`);

      const fileStat = fs.statSync(filePath);
      console.log(`Processing ${file} (${Math.round(fileStat.size / 1024)} KB)...`);

      let pipeline = sharp(filePath);
      if (ext === '.jpg') {
        await pipeline
          .webp({ quality: 82, effort: 6 })
          .toFile(webpPath);
      } else if (ext === '.png') {
        await pipeline
          .webp({ quality: 88, lossless: false, effort: 6 })
          .toFile(webpPath);
      }

      const webpStat = fs.statSync(webpPath);
      console.log(` -> Created ${baseName}.webp (${Math.round(webpStat.size / 1024)} KB) [${Math.round((1 - webpStat.size / fileStat.size) * 100)}% smaller]`);
    }
  }

  // Generate 1200x630 OpenGraph / Twitter branded share card if not present
  const ogCardPath = path.join(imagesDir, 'og-image.jpg');
  console.log('Generating branded OG share card...');

  const svgBanner = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="bgGlow" cx="70%" cy="30%" r="70%">
        <stop offset="0%" stop-color="#00C79E" stop-opacity="0.25"/>
        <stop offset="50%" stop-color="#05101A" stop-opacity="0.8"/>
        <stop offset="100%" stop-color="#03080F" stop-opacity="1"/>
      </radialGradient>
      <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#00C79E"/>
        <stop offset="100%" stop-color="#00D9F5"/>
      </linearGradient>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
      </pattern>
    </defs>
    
    <!-- Background -->
    <rect width="1200" height="630" fill="#03080F"/>
    <rect width="1200" height="630" fill="url(#bgGlow)"/>
    <rect width="1200" height="630" fill="url(#grid)"/>

    <!-- Decorative Top Status Bar -->
    <rect x="80" y="70" width="8" height="8" rx="4" fill="#00C79E"/>
    <text x="100" y="78" fill="#00C79E" font-family="'Segoe UI', Roboto, sans-serif" font-size="14" font-weight="700" letter-spacing="3">// 3STACK TECHNOLOGIES</text>

    <!-- Main Title -->
    <text x="80" y="190" fill="#FFFFFF" font-family="'Segoe UI', Roboto, sans-serif" font-size="64" font-weight="800" letter-spacing="-1">BUILD. <tspan fill="url(#accentGrad)">GROW.</tspan> AUTOMATE.</text>
    
    <!-- Subtitle -->
    <text x="80" y="250" fill="#94A3B8" font-family="'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="500">
      Modern Websites • Software Solutions • Digital Marketing • Business Automation
    </text>

    <!-- Pillars / Capabilities tags -->
    <g transform="translate(80, 320)">
      <rect x="0" y="0" width="220" height="44" rx="8" fill="rgba(0,199,158,0.12)" stroke="rgba(0,199,158,0.4)" stroke-width="1"/>
      <text x="110" y="28" fill="#00C79E" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="600" text-anchor="middle">WEB &amp; APP DESIGN</text>

      <rect x="235" y="0" width="240" height="44" rx="8" fill="rgba(0,217,245,0.12)" stroke="rgba(0,217,245,0.4)" stroke-width="1"/>
      <text x="355" y="28" fill="#00D9F5" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="600" text-anchor="middle">CUSTOM SOFTWARE</text>

      <rect x="490" y="0" width="240" height="44" rx="8" fill="rgba(59,130,246,0.12)" stroke="rgba(59,130,246,0.4)" stroke-width="1"/>
      <text x="610" y="28" fill="#60A5FA" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="600" text-anchor="middle">DIGITAL MARKETING &amp; SEO</text>

      <rect x="745" y="0" width="230" height="44" rx="8" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.4)" stroke-width="1"/>
      <text x="860" y="28" fill="#34D399" font-family="'Segoe UI', Roboto, sans-serif" font-size="15" font-weight="600" text-anchor="middle">WORKFLOW AUTOMATION</text>
    </g>

    <!-- Footer Trust Strip -->
    <line x1="80" y1="520" x2="1120" y2="520" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
    <text x="80" y="565" fill="#64748B" font-family="'Segoe UI', Roboto, sans-serif" font-size="16">3stack.tech</text>
    <text x="1120" y="565" fill="#00C79E" font-family="'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="600" text-anchor="end">Practical Technology For Real Business Growth →</text>
  </svg>
  `;

  await sharp(Buffer.from(svgBanner))
    .jpeg({ quality: 90 })
    .toFile(ogCardPath);

  console.log('OG image created successfully at:', ogCardPath);
}

processImages().catch((err) => {
  console.error('Error optimizing images:', err);
  process.exit(1);
});
