const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function updateLogo() {
  const logoSrc = path.join(__dirname, 'assets', 'logo', 'logo.jpg');
  if (!fs.existsSync(logoSrc)) {
    console.error('assets/logo/logo.jpg not found!');
    return;
  }

  const srcLogoDir = path.join(__dirname, 'src', 'assets', 'logo');
  if (!fs.existsSync(srcLogoDir)) {
    fs.mkdirSync(srcLogoDir, { recursive: true });
  }

  // 1. Copy original jpg to src/assets/logo/logo.jpg
  fs.copyFileSync(logoSrc, path.join(srcLogoDir, 'logo.jpg'));

  // 2. Convert to PNG & WebP in public/ and src/assets/logo/
  await sharp(logoSrc).png().toFile(path.join(__dirname, 'public', 'pehnava-logo.png'));
  await sharp(logoSrc).webp({ quality: 90 }).toFile(path.join(__dirname, 'public', 'pehnava-logo.webp'));
  await sharp(logoSrc).webp({ quality: 90 }).toFile(path.join(srcLogoDir, 'logo.webp'));

  console.log('SUCCESS: Logo updated across public/ and src/assets/logo/!');
}

updateLogo().catch(console.error);
