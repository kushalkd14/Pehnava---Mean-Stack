const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\aaf8f384-05eb-457d-85c7-afd2d3eac8d4';
const collectionsDir = path.join(__dirname, 'src', 'assets', 'collections');

const images = [
  { file: 'short_kurti_sample_1_1788852334397.png', name: 'short-kurti-sample-1' },
  { file: 'casual_suit_sample_1_1788852355474.png', name: 'casual-suit-sample-1' },
  { file: 'fancy_suit_sample_1_1788852372786.png', name: 'fancy-suit-sample-1' },
  { file: 'festive_suit_sample_1_1788852389800.png', name: 'festive-suit-sample-1' },
];

const sizes = [1920, 1200, 800, 600];

async function processImage(inputPath, baseName) {
  const mainPath = path.join(collectionsDir, `${baseName}.webp`);
  await sharp(inputPath)
    .webp({ quality: 85 })
    .toFile(mainPath);
  console.log(`Created ${mainPath}`);

  for (const width of sizes) {
    const responsivePath = path.join(collectionsDir, `${baseName}-${width}.webp`);
    await sharp(inputPath)
      .resize(width, null, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(responsivePath);
    console.log(`Created ${responsivePath}`);
  }
}

async function run() {
  for (const item of images) {
    const fullPath = path.join(brainDir, item.file);
    if (fs.existsSync(fullPath)) {
      console.log(`Processing ${item.file} as ${item.name}...`);
      await processImage(fullPath, item.name);
    }
  }
  console.log('Finished processing batch 2 images!');
}

run().catch(console.error);
