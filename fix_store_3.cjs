const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'assets', 'gallery', 'store_pic_3.jpeg');
const outputPath = path.join(__dirname, 'src', 'assets', 'store', 'real-store-03.webp');
const galleryPath = path.join(__dirname, 'src', 'assets', 'gallery', 'real-store-03.webp');

async function fix() {
  const metadata = await sharp(inputPath).metadata();

  // Extract from 42% height down to 100% height to show the trial room doors, customers, and suit racks
  await sharp(inputPath)
    .rotate()
    .extract({
      left: 0,
      top: Math.floor(metadata.height * 0.45),
      width: metadata.width,
      height: Math.floor(metadata.height * 0.54)
    })
    .webp({ quality: 90 })
    .toFile(outputPath);

  await sharp(outputPath).toFile(galleryPath);

  console.log('Fixed real-store-03.webp with lower focal crop!');
}

fix().catch(err => console.error(err));
