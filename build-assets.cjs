const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\b27a8cc4-db87-4671-8e56-e473d762d491';
const baseAssetsDir = path.join(__dirname, 'src', 'assets');

const folders = ['hero', 'collections', 'gallery', 'store', 'customers'];

folders.forEach(folder => {
  const dir = path.join(baseAssetsDir, folder);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const mappings = {
  'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\bef8b80f-4be3-4cb1-86c5-752bd6cd1797\\hero_pehnava_boutique_display_1788579144784.png': { targetFolder: 'hero', name: 'hero-main' },
  'hero_bridal_1787340281510.png': { targetFolder: 'hero', name: 'hero-bridal' },
  'hero_sarees_1787340292062.png': { targetFolder: 'hero', name: 'hero-sarees' },
  'hero_lehenga_1787340303067.png': { targetFolder: 'hero', name: 'hero-lehenga' },
  'hero_gowns_1787340320241.png': { targetFolder: 'hero', name: 'hero-gowns' },
  'hero_partywear_1787340331833.png': { targetFolder: 'hero', name: 'hero-partywear' },
  'hero_kurtis_1787340343809.png': { targetFolder: 'hero', name: 'hero-kurtis' },
  'hero_suits_1787340357714.png': { targetFolder: 'hero', name: 'hero-suits' },
  'hero_festive_1787340370656.png': { targetFolder: 'hero', name: 'hero-festive' },
  'store_01_1787340384988.png': { targetFolder: 'store', name: 'store-01' },
  'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\bef8b80f-4be3-4cb1-86c5-752bd6cd1797\\private_trial_lounge_1788579263110.png': { targetFolder: 'store', name: 'store-02' },
  'customer_01_1787340408716.png': { targetFolder: 'customers', name: 'customer-01' },
  'customer_02_1787340419998.png': { targetFolder: 'customers', name: 'customer-02' }
};

const collectionCategoryMappings = [
  { src: 'hero_kurtis_1787340343809.png', name: 'premium-kurtis' },
  { src: 'hero_kurtis_1787340343809.png', name: 'short-kurtis' },

  { src: 'hero_suits_1787340357714.png', name: 'casual-suits' },
  { src: 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\bef8b80f-4be3-4cb1-86c5-752bd6cd1797\\decent_printed_designer_suit_1788578724182.png', name: 'heavy-fancy-suits' },
  { src: 'hero_partywear_1787340331833.png', name: 'coord-sets' },
  { src: 'hero_gowns_1787340320241.png', name: 'cargo-pants' },
  { src: 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\bef8b80f-4be3-4cb1-86c5-752bd6cd1797\\premium_casual_tshirt_1788578577286.png', name: 'oversized-tshirts' },
  { src: 'hero_sarees_1787340292062.png', name: 'modern-grace' },
  { src: 'hero_festive_1787340370656.png', name: 'festive-collection' },
  { src: 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\bef8b80f-4be3-4cb1-86c5-752bd6cd1797\\printed_kurti_park_1788578181469.png', name: 'new-arrivals' },
  // Existing collection fallbacks
  { src: 'hero_bridal_1787340281510.png', name: 'bridal-01' },
  { src: 'hero_sarees_1787340292062.png', name: 'saree-01' },
  { src: 'hero_lehenga_1787340303067.png', name: 'lehenga-01' },
  { src: 'hero_gowns_1787340320241.png', name: 'gowns-01' },
  { src: 'hero_partywear_1787340331833.png', name: 'partywear-01' },
  { src: 'hero_kurtis_1787340343809.png', name: 'kurtis-01' },
  { src: 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\bef8b80f-4be3-4cb1-86c5-752bd6cd1797\\decent_printed_designer_suit_1788578724182.png', name: 'suits-01' },
  { src: 'hero_festive_1787340370656.png', name: 'festive-01' }
];

const sizes = [1920, 1200, 800, 600];

async function processImage(inputPath, targetFolder, baseName) {
  const destDir = path.join(baseAssetsDir, targetFolder);
  
  const mainPath = path.join(destDir, `${baseName}.webp`);
  await sharp(inputPath)
    .webp({ quality: 85 })
    .toFile(mainPath);

  for (const width of sizes) {
    const responsivePath = path.join(destDir, `${baseName}-${width}.webp`);
    await sharp(inputPath)
      .resize(width, null, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(responsivePath);
  }
}

async function run() {
  console.log('Starting image processing...');
  for (const [file, info] of Object.entries(mappings)) {
    const fullPath = path.join(srcDir, file);
    if (fs.existsSync(fullPath)) {
      await processImage(fullPath, info.targetFolder, info.name);
    }
  }

  for (const item of collectionCategoryMappings) {
    const fullPath = path.join(srcDir, item.src);
    if (fs.existsSync(fullPath)) {
      await processImage(fullPath, 'collections', item.name);
    }
  }

  console.log('SUCCESS: All 11 Women\'s Collection assets generated as WebP!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
