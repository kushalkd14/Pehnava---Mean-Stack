const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\8ec730b1-3be4-42ef-af5b-4750124dd55b';
const projectStoreDir = path.join(__dirname, 'src', 'assets', 'store');
const projectCustomerDir = path.join(__dirname, 'src', 'assets', 'customers');
const projectGalleryDir = path.join(__dirname, 'src', 'assets', 'gallery');

const imageTasks = [
  {
    src: path.join(srcDir, 'gallery_store_03_1788542131584.png'),
    destName: 'store-04',
    targetDirs: [projectStoreDir, projectGalleryDir]
  },
  {
    src: path.join(srcDir, 'gallery_store_04_1788542194465.png'),
    destName: 'store-05',
    targetDirs: [projectStoreDir, projectGalleryDir]
  },
  {
    src: path.join(srcDir, 'gallery_customer_03_1788542150663.png'),
    destName: 'customer-03',
    targetDirs: [projectCustomerDir, projectGalleryDir]
  },
  {
    src: path.join(srcDir, 'gallery_customer_04_1788542170229.png'),
    destName: 'customer-05',
    targetDirs: [projectCustomerDir, projectGalleryDir]
  }
];

const sizes = [1920, 1200, 800, 600];

async function processImage(task) {
  if (!fs.existsSync(task.src)) {
    console.error('Source missing:', task.src);
    return;
  }
  const inputBuffer = fs.readFileSync(task.src);

  for (const dir of task.targetDirs) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const mainPath = path.join(dir, `${task.destName}.webp`);
    await sharp(inputBuffer).webp({ quality: 90 }).toFile(mainPath);

    for (const width of sizes) {
      const respPath = path.join(dir, `${task.destName}-${width}.webp`);
      await sharp(inputBuffer)
        .resize(width, null, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(respPath);
    }
    console.log(`Processed ${task.destName} to ${dir}`);
  }
}

async function main() {
  for (const task of imageTasks) {
    await processImage(task);
  }
  console.log('All gallery images processed successfully!');
}

main();
