import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const srcImagePath = 'C:/Users/DELL/.gemini/antigravity-ide/brain/e4924361-cd16-4caa-a0e9-947302126331/.user_uploaded/media_1789536989939.jpg';

async function processLogo() {
  const image = sharp(srcImagePath);
  const { width, height } = await image.metadata();

  // 1. Get raw buffer to analyze exact bounds
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

  // Let's find tight bounds for the whole logo and for the symbol
  let logoMinX = width, logoMaxX = 0, logoMinY = height, logoMaxY = 0;
  let symMinX = width, symMaxX = 0, symMinY = height, symMaxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * info.channels;
      const r = data[idx], g = data[idx+1], b = data[idx+2];

      // Logo threshold (anything brighter than background)
      if (r > 35 || g > 40 || b > 65) {
        if (x < logoMinX) logoMinX = x;
        if (x > logoMaxX) logoMaxX = x;
        if (y < logoMinY) logoMinY = y;
        if (y > logoMaxY) logoMaxY = y;
      }

      // Symbol threshold (green emblem)
      if (g > 65 && g > r * 1.3 && y < 470) {
        if (x < symMinX) symMinX = x;
        if (x > symMaxX) symMaxX = x;
        if (y < symMinY) symMinY = y;
        if (y > symMaxY) symMaxY = y;
      }
    }
  }

  console.log('Logo bounds:', { logoMinX, logoMaxX, logoMinY, logoMaxY, w: logoMaxX - logoMinX, h: logoMaxY - logoMinY });
  console.log('Symbol bounds:', { symMinX, symMaxX, symMinY, symMaxY, w: symMaxX - symMinX, h: symMaxY - symMinY });

  // Add padding
  const pad = 24;
  const cropX = Math.max(0, logoMinX - pad);
  const cropY = Math.max(0, logoMinY - pad);
  const cropW = Math.min(width - cropX, (logoMaxX - logoMinX) + pad * 2);
  const cropH = Math.min(height - cropY, (logoMaxY - logoMinY) + pad * 2);

  // Extract cropped full logo with transparent background
  // For transparent background, we can calculate alpha based on distance from dark background color
  const croppedRaw = await sharp(srcImagePath)
    .extract({ left: cropX, top: cropY, width: cropW, height: cropH })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const cData = croppedRaw.data;
  const cInfo = croppedRaw.info;
  const rgbaData = Buffer.alloc(cInfo.width * cInfo.height * 4);

  for (let y = 0; y < cInfo.height; y++) {
    for (let x = 0; x < cInfo.width; x++) {
      const srcIdx = (y * cInfo.width + x) * cInfo.channels;
      const destIdx = (y * cInfo.width + x) * 4;

      const r = cData[srcIdx];
      const g = cData[srcIdx+1];
      const b = cData[srcIdx+2];

      // Estimated background at this position
      const bgR = 5, bgG = 16, bgB = 40;

      // Color difference from background
      const diffR = Math.max(0, r - bgR);
      const diffG = Math.max(0, g - bgG);
      const diffB = Math.max(0, b - bgB);

      // Max channel excess or luminance above background
      const maxDiff = Math.max(diffR, diffG, diffB);
      
      let alpha = 0;
      if (maxDiff > 8) {
        alpha = Math.min(255, Math.round((maxDiff - 8) * (255 / 45)));
      }

      if (alpha > 0) {
        // Un-multiply / adjust foreground colors to avoid dark fringe
        const aNorm = alpha / 255;
        const outR = Math.min(255, Math.round(Math.max(0, r - bgR * (1 - aNorm)) / aNorm));
        const outG = Math.min(255, Math.round(Math.max(0, g - bgG * (1 - aNorm)) / aNorm));
        const outB = Math.min(255, Math.round(Math.max(0, b - bgB * (1 - aNorm)) / aNorm));

        rgbaData[destIdx] = outR;
        rgbaData[destIdx+1] = outG;
        rgbaData[destIdx+2] = outB;
        rgbaData[destIdx+3] = alpha;
      } else {
        rgbaData[destIdx] = 0;
        rgbaData[destIdx+1] = 0;
        rgbaData[destIdx+2] = 0;
        rgbaData[destIdx+3] = 0;
      }
    }
  }

  // Save transparent cropped logo
  await sharp(rgbaData, { raw: { width: cInfo.width, height: cInfo.height, channels: 4 } })
    .png()
    .toFile('public/images/3stack-logo.png');

  await sharp(rgbaData, { raw: { width: cInfo.width, height: cInfo.height, channels: 4 } })
    .webp({ quality: 95 })
    .toFile('public/images/3stack-logo.webp');

  await sharp(rgbaData, { raw: { width: cInfo.width, height: cInfo.height, channels: 4 } })
    .png()
    .toFile('public/images/3stack-logo-stacked.png');

  await sharp(rgbaData, { raw: { width: cInfo.width, height: cInfo.height, channels: 4 } })
    .webp({ quality: 95 })
    .toFile('public/images/3stack-logo-stacked.webp');

  console.log('Saved 3stack-logo.png, 3stack-logo.webp');

  // Also copy to dist/images if dist exists
  if (fs.existsSync('dist/images')) {
    fs.copyFileSync('public/images/3stack-logo.png', 'dist/images/3stack-logo.png');
    fs.copyFileSync('public/images/3stack-logo.webp', 'dist/images/3stack-logo.webp');
    fs.copyFileSync('public/images/3stack-logo-stacked.png', 'dist/images/3stack-logo-stacked.png');
    fs.copyFileSync('public/images/3stack-logo-stacked.webp', 'dist/images/3stack-logo-stacked.webp');
  }

  // Now create the Symbol/Icon for Favicon and Apple Touch Icon
  // Tight crop around the symbol
  const symPad = 16;
  const sCropX = Math.max(0, symMinX - symPad);
  const sCropY = Math.max(0, symMinY - symPad);
  const sCropW = Math.min(width - sCropX, (symMaxX - symMinX) + symPad * 2);
  const sCropH = Math.min(height - sCropY, (symMaxY - symMinY) + symPad * 2);

  // Make it square
  const sSize = Math.max(sCropW, sCropH);
  const sCenterX = sCropX + sCropW / 2;
  const sCenterY = sCropY + sCropH / 2;
  const squareLeft = Math.max(0, Math.round(sCenterX - sSize / 2));
  const squareTop = Math.max(0, Math.round(sCenterY - sSize / 2));

  const symRaw = await sharp(srcImagePath)
    .extract({ left: squareLeft, top: squareTop, width: sSize, height: sSize })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const sData = symRaw.data;
  const sInfo = symRaw.info;
  const symRgba = Buffer.alloc(sInfo.width * sInfo.height * 4);

  for (let y = 0; y < sInfo.height; y++) {
    for (let x = 0; x < sInfo.width; x++) {
      const srcIdx = (y * sInfo.width + x) * sInfo.channels;
      const destIdx = (y * sInfo.width + x) * 4;

      const r = sData[srcIdx];
      const g = sData[srcIdx+1];
      const b = sData[srcIdx+2];

      const bgR = 5, bgG = 16, bgB = 40;
      const diffG = Math.max(0, g - bgG);
      const diffR = Math.max(0, r - bgR);
      const diffB = Math.max(0, b - bgB);
      const maxDiff = Math.max(diffG, diffR, diffB);

      let alpha = 0;
      if (maxDiff > 8) {
        alpha = Math.min(255, Math.round((maxDiff - 8) * (255 / 40)));
      }

      if (alpha > 0) {
        const aNorm = alpha / 255;
        symRgba[destIdx] = Math.min(255, Math.round(Math.max(0, r - bgR * (1 - aNorm)) / aNorm));
        symRgba[destIdx+1] = Math.min(255, Math.round(Math.max(0, g - bgG * (1 - aNorm)) / aNorm));
        symRgba[destIdx+2] = Math.min(255, Math.round(Math.max(0, b - bgB * (1 - aNorm)) / aNorm));
        symRgba[destIdx+3] = alpha;
      } else {
        symRgba[destIdx] = 0;
        symRgba[destIdx+1] = 0;
        symRgba[destIdx+2] = 0;
        symRgba[destIdx+3] = 0;
      }
    }
  }

  // Save symbol PNG
  await sharp(symRgba, { raw: { width: sInfo.width, height: sInfo.height, channels: 4 } })
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile('public/images/3stack-symbol.png');

  // Apple touch icon (with dark background #040C18 or rounded squircle matching brand)
  await sharp(symRgba, { raw: { width: sInfo.width, height: sInfo.height, channels: 4 } })
    .resize(140, 140, { fit: 'contain' })
    .extend({
      top: 20,
      bottom: 20,
      left: 20,
      right: 20,
      background: { r: 4, g: 12, b: 24, alpha: 1 }
    })
    .png()
    .toFile('public/apple-touch-icon.png');

  // Favicon PNG 32x32 and 16x16
  const fav32 = await sharp(symRgba, { raw: { width: sInfo.width, height: sInfo.height, channels: 4 } })
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  fs.writeFileSync('public/favicon-32x32.png', fav32);

  // Favicon SVG with clean base64 data uri
  const base64Fav = fav32.toString('base64');
  const faviconSvg = `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="6" fill="#040C18"/>
  <image width="26" height="26" x="3" y="3" href="data:image/png;base64,${base64Fav}"/>
</svg>
`;
  fs.writeFileSync('public/favicon.svg', faviconSvg);

  console.log('Favicon and apple-touch-icon generated successfully!');
}

processLogo().catch(console.error);
