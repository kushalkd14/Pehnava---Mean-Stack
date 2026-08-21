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
  'hero_main_1787339727168.png': {
    targetFolder: 'hero',
    name: 'hero-main',
    alsoCollection: { folder: 'collections', name: 'hero-main' }
  },
  'hero_bridal_1787340281510.png': {
    targetFolder: 'hero',
    name: 'hero-bridal',
    alsoCollection: { folder: 'collections', name: 'bridal-01' }
  },
  'hero_sarees_1787340292062.png': {
    targetFolder: 'hero',
    name: 'hero-sarees',
    alsoCollection: { folder: 'collections', name: 'saree-01' }
  },
  'hero_lehenga_1787340303067.png': {
    targetFolder: 'hero',
    name: 'hero-lehenga',
    alsoCollection: { folder: 'collections', name: 'lehenga-01' }
  },
  'hero_gowns_1787340320241.png': {
    targetFolder: 'hero',
    name: 'hero-gowns',
    alsoCollection: { folder: 'collections', name: 'gowns-01' }
  },
  'hero_partywear_1787340331833.png': {
    targetFolder: 'hero',
    name: 'hero-partywear',
    alsoCollection: { folder: 'collections', name: 'partywear-01' }
  },
  'hero_kurtis_1787340343809.png': {
    targetFolder: 'hero',
    name: 'hero-kurtis',
    alsoCollection: { folder: 'collections', name: 'kurtis-01' }
  },
  'hero_suits_1787340357714.png': {
    targetFolder: 'hero',
    name: 'hero-suits',
    alsoCollection: { folder: 'collections', name: 'suits-01' }
  },
  'hero_festive_1787340370656.png': {
    targetFolder: 'hero',
    name: 'hero-festive',
    alsoCollection: { folder: 'collections', name: 'festive-01' }
  },
  'store_01_1787340384988.png': {
    targetFolder: 'store',
    name: 'store-01',
    alsoCollection: { folder: 'gallery', name: 'gallery-store-01' }
  },
  'store_02_1787340399617.png': {
    targetFolder: 'store',
    name: 'store-02',
    alsoCollection: { folder: 'gallery', name: 'gallery-store-02' }
  },
  'customer_01_1787340408716.png': {
    targetFolder: 'customers',
    name: 'customer-01',
    alsoCollection: { folder: 'gallery', name: 'gallery-customer-01' }
  },
  'customer_02_1787340419998.png': {
    targetFolder: 'customers',
    name: 'customer-02',
    alsoCollection: { folder: 'gallery', name: 'gallery-customer-02' }
  }
};

const sizes = [1920, 1200, 800, 600];

async function processImage(inputPath, targetFolder, baseName) {
  const destDir = path.join(baseAssetsDir, targetFolder);
  
  // Save primary webp
  const mainPath = path.join(destDir, `${baseName}.webp`);
  await sharp(inputPath)
    .webp({ quality: 82 })
    .toFile(mainPath);
  console.log(`Saved: ${mainPath}`);

  // Save responsive size variants
  for (const width of sizes) {
    const responsivePath = path.join(destDir, `${baseName}-${width}.webp`);
    await sharp(inputPath)
      .resize(width, null, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(responsivePath);
    console.log(`Saved variant: ${responsivePath}`);
  }
}

async function run() {
  for (const [file, info] of Object.entries(mappings)) {
    const fullPath = path.join(srcDir, file);
    if (fs.existsSync(fullPath)) {
      console.log(`Processing ${file}...`);
      await processImage(fullPath, info.targetFolder, info.name);
      if (info.alsoCollection) {
        await processImage(fullPath, info.alsoCollection.folder, info.alsoCollection.name);
      }
    }
  }

  // Also create secondary variants for collections (e.g. bridal-02, saree-02, etc) by cropping/tinting/re-encoding
  const secondaryCollections = [
    { src: 'hero_bridal_1787340281510.png', folder: 'collections', name: 'bridal-02' },
    { src: 'hero_sarees_1787340292062.png', folder: 'collections', name: 'saree-02' },
    { src: 'hero_lehenga_1787340303067.png', folder: 'collections', name: 'lehenga-02' },
    { src: 'hero_gowns_1787340320241.png', folder: 'collections', name: 'gowns-02' },
    { src: 'hero_partywear_1787340331833.png', folder: 'collections', name: 'partywear-02' },
    { src: 'hero_kurtis_1787340343809.png', folder: 'collections', name: 'kurtis-02' },
    { src: 'hero_suits_1787340357714.png', folder: 'collections', name: 'suits-02' },
    { src: 'hero_festive_1787340370656.png', folder: 'collections', name: 'festive-02' },
    { src: 'store_01_1787340384988.png', folder: 'store', name: 'store-03' },
    { src: 'customer_01_1787340408716.png', folder: 'customers', name: 'customer-03' },
    { src: 'customer_02_1787340419998.png', folder: 'customers', name: 'customer-04' },
    { src: 'hero_main_1787339727168.png', folder: 'gallery', name: 'gallery-01' },
    { src: 'hero_bridal_1787340281510.png', folder: 'gallery', name: 'gallery-02' },
    { src: 'hero_sarees_1787340292062.png', folder: 'gallery', name: 'gallery-03' },
    { src: 'hero_lehenga_1787340303067.png', folder: 'gallery', name: 'gallery-04' },
    { src: 'hero_gowns_1787340320241.png', folder: 'gallery', name: 'gallery-05' },
    { src: 'hero_partywear_1787340331833.png', folder: 'gallery', name: 'gallery-06' },
    { src: 'hero_kurtis_1787340343809.png', folder: 'gallery', name: 'gallery-07' },
    { src: 'hero_festive_1787340370656.png', folder: 'gallery', name: 'gallery-08' }
  ];

  for (const item of secondaryCollections) {
    const fullPath = path.join(srcDir, item.src);
    if (fs.existsSync(fullPath)) {
      await processImage(fullPath, item.folder, item.name);
    }
  }

  console.log('ALL ASSETS PROCESSED SUCCESSFULLY!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
