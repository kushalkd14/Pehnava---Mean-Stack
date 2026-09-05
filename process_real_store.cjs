const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcGalleryDir = path.join(__dirname, 'assets', 'gallery');
const targetStoreDir = path.join(__dirname, 'src', 'assets', 'store');
const targetGalleryDir = path.join(__dirname, 'src', 'assets', 'gallery');

const tasks = [
  { src: path.join(srcGalleryDir, 'store_pic_1.jpeg'), name: 'real-store-01' },
  { src: path.join(srcGalleryDir, 'store_pic_2.jpeg'), name: 'real-store-02' },
  { src: path.join(srcGalleryDir, 'store_pic_3.jpeg'), name: 'real-store-03' },
  { src: path.join(srcGalleryDir, 'staff_image.PNG'), name: 'real-staff-01' },
];

const sizes = [1920, 1200, 800, 600];

async function run() {
  for (const task of tasks) {
    if (!fs.existsSync(task.src)) {
      console.error('File not found:', task.src);
      continue;
    }
    const buf = fs.readFileSync(task.src);

    for (const dir of [targetStoreDir, targetGalleryDir]) {
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

      await sharp(buf).webp({ quality: 90 }).toFile(path.join(dir, `${task.name}.webp`));

      for (const w of sizes) {
        await sharp(buf)
          .resize(w, null, { fit: 'inside', withoutEnlargement: true })
          .webp({ quality: 85 })
          .toFile(path.join(dir, `${task.name}-${w}.webp`));
      }
    }
    console.log(`Processed ${task.name}`);
  }
}

run();
