const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function makeCircularLogo() {
  const logoSrc = path.join(__dirname, 'assets', 'logo', 'logo.jpg');
  if (!fs.existsSync(logoSrc)) {
    console.error('assets/logo/logo.jpg not found!');
    return;
  }

  const metadata = await sharp(logoSrc).metadata();
  const width = metadata.width || 400;
  const height = metadata.height || 400;
  const size = Math.min(width, height);

  // SVG mask for a perfect circle
  const circleMask = Buffer.from(
    `<svg width="${size}" height="${size}">
      <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#000" />
    </svg>`
  );

  // Process image: resize to square size, apply circle mask as composite
  const circularImageBuffer = await sharp(logoSrc)
    .resize(size, size, { fit: 'cover' })
    .composite([{
      input: circleMask,
      blend: 'dest-in'
    }])
    .png()
    .toBuffer();

  const srcLogoDir = path.join(__dirname, 'src', 'assets', 'logo');
  if (!fs.existsSync(srcLogoDir)) {
    fs.mkdirSync(srcLogoDir, { recursive: true });
  }

  // Save to public and src/assets/logo
  await sharp(circularImageBuffer).png().toFile(path.join(__dirname, 'public', 'pehnava-logo.png'));
  await sharp(circularImageBuffer).webp({ quality: 95 }).toFile(path.join(__dirname, 'public', 'pehnava-logo.webp'));
  await sharp(circularImageBuffer).webp({ quality: 95 }).toFile(path.join(srcLogoDir, 'logo.webp'));

  console.log('SUCCESS: Perfect circular logo generated across public/ and src/assets/logo/!');
}

makeCircularLogo().catch(console.error);
