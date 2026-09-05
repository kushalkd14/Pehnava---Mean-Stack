const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'assets', 'gallery');
const storeDir = path.join(__dirname, 'src', 'assets', 'store');
const galleryDir = path.join(__dirname, 'src', 'assets', 'gallery');

async function processRealImages() {
  // 1. store_pic_1.jpeg: 9:20 ratio with top ~35% ceiling. Crop top 30% out!
  const img1Path = path.join(srcDir, 'store_pic_1.jpeg');
  if (fs.existsSync(img1Path)) {
    const meta1 = await sharp(img1Path).metadata();
    const cropped1 = await sharp(img1Path)
      .rotate()
      .extract({
        left: 0,
        top: Math.floor(meta1.height * 0.28), // Skip ceiling
        width: meta1.width,
        height: Math.floor(meta1.height * 0.72) // Keep shelves, counter & customers
      })
      .webp({ quality: 90 })
      .toBuffer();

    fs.writeFileSync(path.join(storeDir, 'real-store-01.webp'), cropped1);
    fs.writeFileSync(path.join(galleryDir, 'real-store-01.webp'), cropped1);
    console.log('Processed real-store-01.webp (ceiling cropped out)');
  }

  // 2. store_pic_2.jpeg: Crop top 25% ceiling out!
  const img2Path = path.join(srcDir, 'store_pic_2.jpeg');
  if (fs.existsSync(img2Path)) {
    const meta2 = await sharp(img2Path).metadata();
    const cropped2 = await sharp(img2Path)
      .rotate()
      .extract({
        left: 0,
        top: Math.floor(meta2.height * 0.22),
        width: meta2.width,
        height: Math.floor(meta2.height * 0.78)
      })
      .webp({ quality: 90 })
      .toBuffer();

    fs.writeFileSync(path.join(storeDir, 'real-store-02.webp'), cropped2);
    fs.writeFileSync(path.join(galleryDir, 'real-store-02.webp'), cropped2);
    console.log('Processed real-store-02.webp (ceiling cropped out)');
  }

  // 3. store_pic_3.jpeg: Crop top 42% ceiling out!
  const img3Path = path.join(srcDir, 'store_pic_3.jpeg');
  if (fs.existsSync(img3Path)) {
    const meta3 = await sharp(img3Path).metadata();
    const cropped3 = await sharp(img3Path)
      .rotate()
      .extract({
        left: 0,
        top: Math.floor(meta3.height * 0.42),
        width: meta3.width,
        height: Math.floor(meta3.height * 0.58)
      })
      .webp({ quality: 90 })
      .toBuffer();

    fs.writeFileSync(path.join(storeDir, 'real-store-03.webp'), cropped3);
    fs.writeFileSync(path.join(galleryDir, 'real-store-03.webp'), cropped3);
    console.log('Processed real-store-03.webp (ceiling cropped out)');
  }

  // 4. staff_image.PNG: Clean staff team image!
  const staffPath = path.join(srcDir, 'staff_image.PNG');
  if (fs.existsSync(staffPath)) {
    const staffBuf = await sharp(staffPath).rotate().webp({ quality: 90 }).toBuffer();
    fs.writeFileSync(path.join(storeDir, 'real-staff-01.webp'), staffBuf);
    fs.writeFileSync(path.join(galleryDir, 'real-staff-01.webp'), staffBuf);
    console.log('Processed real-staff-01.webp');
  }
}

processRealImages().catch(err => console.error(err));
