const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcPath = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\bef8b80f-4be3-4cb1-86c5-752bd6cd1797\\premium_casual_tshirt_1788578577286.png';
const baseAssetsDir = path.join(__dirname, 'src', 'assets', 'collections');
const sizes = [1920, 1200, 800, 600];

async function main() {
  if (!fs.existsSync(srcPath)) {
    console.error('Source image not found at', srcPath);
    process.exit(1);
  }

  const mainPath = path.join(baseAssetsDir, 'oversized-tshirts.webp');
  await sharp(srcPath)
    .webp({ quality: 90 })
    .toFile(mainPath);

  for (const width of sizes) {
    const responsivePath = path.join(baseAssetsDir, `oversized-tshirts-${width}.webp`);
    await sharp(srcPath)
      .resize(width, null, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(responsivePath);
  }

  console.log('SUCCESS: Oversized/T-Shirts collection image updated to classic casual premium aesthetic!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
