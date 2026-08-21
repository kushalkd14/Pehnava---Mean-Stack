const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const brainImagePath = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\b27a8cc4-db87-4671-8e56-e473d762d491\\hero_main_1787339727168.png';
const baseAssetsDir = path.join(__dirname, 'src', 'assets', 'hero');

const sizes = [1920, 1200, 600];

async function main() {
  console.log('Processing preview boutique store interior image:', brainImagePath);

  if (!fs.existsSync(brainImagePath)) {
    throw new Error('Brain image not found at ' + brainImagePath);
  }

  // Enhance, sharpen & convert preview boutique image to WebP with highest quality (quality: 98)
  const mainPath = path.join(baseAssetsDir, 'hero-main.webp');
  await sharp(brainImagePath)
    .sharpen({ sigma: 1.2, m1: 0.5, m2: 2 })
    .webp({ quality: 98 })
    .toFile(mainPath);

  for (const width of sizes) {
    const responsivePath = path.join(baseAssetsDir, `hero-main-${width}.webp`);
    await sharp(brainImagePath)
      .resize(width, null, { fit: 'inside', withoutEnlargement: false })
      .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
      .webp({ quality: 95 })
      .toFile(responsivePath);
  }

  console.log('SUCCESS: Preview royal boutique store image sharpened & deployed as Ultra-HD WebP!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
