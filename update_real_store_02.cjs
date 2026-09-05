const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcImage = `C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\4e974a02-8e98-4254-b738-af312eeab5bc\\curated_bandhani_racks_1788622815919.png`;
const targetStoreDir = path.join(__dirname, 'src', 'assets', 'store');
const targetGalleryDir = path.join(__dirname, 'src', 'assets', 'gallery');

const sizes = [1920, 1200, 800, 600];

async function run() {
  if (!fs.existsSync(srcImage)) {
    console.error('File not found:', srcImage);
    return;
  }
  const buf = fs.readFileSync(srcImage);

  for (const dir of [targetStoreDir, targetGalleryDir]) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    await sharp(buf).webp({ quality: 90 }).toFile(path.join(dir, `real-store-02.webp`));

    for (const w of sizes) {
      await sharp(buf)
        .resize(w, null, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(path.join(dir, `real-store-02-${w}.webp`));
    }
  }
  console.log(`Processed real-store-02 successfully`);
}

run();
