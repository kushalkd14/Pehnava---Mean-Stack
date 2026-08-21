const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const https = require('https');

const baseAssetsDir = path.join(__dirname, 'src', 'assets', 'hero');

// 4K Ultra-HD Crisp Luxury Royal Fashion Studio Image (3840x2160 resolution)
const hd4kHeroUrl = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=3840&auto=format&fit=crop';

const sizes = [1920, 1200, 600];

function downloadBuffer(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadBuffer(res.headers.location).then(resolve).catch(reject);
      }
      const data = [];
      res.on('data', (chunk) => data.push(chunk));
      res.on('end', () => resolve(Buffer.concat(data)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function main() {
  console.log('Downloading 4K Ultra-HD (3840x2160) sharp Hero Banner Image...');
  const inputBuffer = await downloadBuffer(hd4kHeroUrl);

  const mainPath = path.join(baseAssetsDir, 'hero-main.webp');
  await sharp(inputBuffer)
    .resize(3840, null, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 95 })
    .toFile(mainPath);

  for (const width of sizes) {
    const responsivePath = path.join(baseAssetsDir, `hero-main-${width}.webp`);
    await sharp(inputBuffer)
      .resize(width, null, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 92 })
      .toFile(responsivePath);
  }

  console.log('SUCCESS: 4K Ultra-HD sharp Hero Banner image deployed!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
