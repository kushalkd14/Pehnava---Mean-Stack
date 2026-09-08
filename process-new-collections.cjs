const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const brainDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\aaf8f384-05eb-457d-85c7-afd2d3eac8d4';
const collectionsDir = path.join(__dirname, 'src', 'assets', 'collections');

const newImages = [
  { file: 'anarkali_suit_collection_1788849770685.png', name: 'anarkali-suits' },
  { file: 'straight_kurti_collection_1788850025592.png', name: 'straight-kurtis' },
  { file: 'aline_suit_collection_1788850525614.png', name: 'aline-suits' },
  { file: 'bottom_wear_collection_1788850557197.png', name: 'bottom-wear' },
  { file: 'baggy_tshirt_collection_1788850585519.png', name: 'baggy-tshirts' },
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
  for (const item of newImages) {
    const fullPath = path.join(brainDir, item.file);
    if (fs.existsSync(fullPath)) {
      console.log(`Processing ${item.file} as ${item.name}...`);
      await processImage(fullPath, item.name);
    } else {
      console.error(`File not found: ${fullPath}`);
    }
  }
  console.log('Finished processing collection images!');
}

run().catch(console.error);
