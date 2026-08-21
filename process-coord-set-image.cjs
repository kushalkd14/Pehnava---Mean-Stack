const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcPath = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\b27a8cc4-db87-4671-8e56-e473d762d491\\media__1787342394747.png';
const baseAssetsDir = path.join(__dirname, 'src', 'assets', 'collections');

const sizes = [1920, 1200, 800, 600];

async function main() {
  if (!fs.existsSync(srcPath)) {
    console.error('Source image not found at', srcPath);
    process.exit(1);
  }

  const mainPath = path.join(baseAssetsDir, 'coord-sets.webp');
  await sharp(srcPath)
    .webp({ quality: 90 })
    .toFile(mainPath);

  for (const width of sizes) {
    const responsivePath = path.join(baseAssetsDir, `coord-sets-${width}.webp`);
    await sharp(srcPath)
      .resize(width, null, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(responsivePath);
  }

  console.log('SUCCESS: Co-Ord Set image successfully updated from user attachment!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
