const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcPath = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\bef8b80f-4be3-4cb1-86c5-752bd6cd1797\\hero_pehnava_boutique_display_1788579144784.png';
const baseAssetsDir = path.join(__dirname, 'src', 'assets', 'hero');
const sizes = [1920, 1200, 800, 600];

async function main() {
  if (!fs.existsSync(srcPath)) {
    console.error('Source image not found at', srcPath);
    process.exit(1);
  }

  const mainPath = path.join(baseAssetsDir, 'hero-main.webp');
  await sharp(srcPath)
    .webp({ quality: 92 })
    .toFile(mainPath);

  for (const width of sizes) {
    const responsivePath = path.join(baseAssetsDir, `hero-main-${width}.webp`);
    await sharp(srcPath)
      .resize(width, null, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 88 })
      .toFile(responsivePath);
  }

  console.log('SUCCESS: Hero main background image updated to premium boutique display of kurtis, co-ords & casual suits!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
