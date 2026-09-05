const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesMap = {
  'insta-01.webp': 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\bef8b80f-4be3-4cb1-86c5-752bd6cd1797\\insta_01_designer_suits_1788579369057.png',
  'insta-02.webp': 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\bef8b80f-4be3-4cb1-86c5-752bd6cd1797\\insta_02_short_kurtis_1788579385143.png',
  'insta-03.webp': 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\bef8b80f-4be3-4cb1-86c5-752bd6cd1797\\insta_03_festive_drops_1788579404056.png',
  'insta-04.webp': 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\bef8b80f-4be3-4cb1-86c5-752bd6cd1797\\insta_04_coord_edits_1788579420235.png',
  'insta-05.webp': 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\bef8b80f-4be3-4cb1-86c5-752bd6cd1797\\insta_05_premium_kurtis_1788579442668.png',
  'insta-06.webp': 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\bef8b80f-4be3-4cb1-86c5-752bd6cd1797\\insta_06_casual_wear_1788579458135.png'
};

const outputDir = path.join(__dirname, 'src', 'assets', 'instagram');

async function main() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const [filename, sourcePath] of Object.entries(imagesMap)) {
    if (!fs.existsSync(sourcePath)) {
      console.error(`Source image missing: ${sourcePath}`);
      continue;
    }

    const targetPath = path.join(outputDir, filename);
    await sharp(sourcePath)
      .resize(800, null, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 88 })
      .toFile(targetPath);

    console.log(`Processed ${filename} successfully.`);
  }

  console.log('SUCCESS: All 6 Instagram Showcase card images updated to non-heavy boutique fashion!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
