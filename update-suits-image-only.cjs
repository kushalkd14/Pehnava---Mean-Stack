const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcPath = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\bef8b80f-4be3-4cb1-86c5-752bd6cd1797\\decent_printed_designer_suit_1788578724182.png';
const baseAssetsDir = path.join(__dirname, 'src', 'assets', 'collections');
const sizes = [1920, 1200, 800, 600];
const targetNames = ['heavy-fancy-suits', 'suits-01'];

async function main() {
  if (!fs.existsSync(srcPath)) {
    console.error('Source image not found at', srcPath);
    process.exit(1);
  }

  for (const name of targetNames) {
    const mainPath = path.join(baseAssetsDir, `${name}.webp`);
    await sharp(srcPath)
      .webp({ quality: 90 })
      .toFile(mainPath);

    for (const width of sizes) {
      const responsivePath = path.join(baseAssetsDir, `${name}-${width}.webp`);
      await sharp(srcPath)
        .resize(width, null, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(responsivePath);
    }
  }

  console.log('SUCCESS: Heavy Fancy Suits / suits-01 collection images updated to decent printed designer suit set!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
