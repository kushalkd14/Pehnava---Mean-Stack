const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\8ec730b1-3be4-42ef-af5b-4750124dd55b';
const targetDir = path.join(__dirname, 'src', 'assets', 'gallery');

const tasks = [
  { src: path.join(srcDir, 'gallery_daily_01_1788542486254.png'), name: 'daily-suit-01' },
  { src: path.join(srcDir, 'gallery_ethnic_02_1788542508186.png'), name: 'bandhani-suit-01' },
];

async function main() {
  for (const task of tasks) {
    if (!fs.existsSync(task.src)) continue;
    await sharp(task.src).resize(1200).webp({ quality: 85 }).toFile(path.join(targetDir, `${task.name}.webp`));
    console.log(`Processed ${task.name}`);
  }
}

main();
