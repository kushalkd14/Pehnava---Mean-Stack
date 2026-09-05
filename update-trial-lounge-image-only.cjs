const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcPath = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\bef8b80f-4be3-4cb1-86c5-752bd6cd1797\\private_trial_lounge_1788579263110.png';
const baseAssetsDir = path.join(__dirname, 'src', 'assets', 'store');
const sizes = [1920, 1200, 800, 600];

async function main() {
  if (!fs.existsSync(srcPath)) {
    console.error('Source image not found at', srcPath);
    process.exit(1);
  }

  const mainPath = path.join(baseAssetsDir, 'store-02.webp');
  await sharp(srcPath)
    .webp({ quality: 90 })
    .toFile(mainPath);

  for (const width of sizes) {
    const responsivePath = path.join(baseAssetsDir, `store-02-${width}.webp`);
    await sharp(srcPath)
      .resize(width, null, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(responsivePath);
  }

  console.log('SUCCESS: Private Trial Lounge image updated to elegant VIP fitting room & lounge interior!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
