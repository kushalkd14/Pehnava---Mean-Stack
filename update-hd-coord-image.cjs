const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const https = require('https');

const baseAssetsDir = path.join(__dirname, 'src', 'assets', 'collections');

// High Definition 4K/HD fashion image for Co-Ord sets (Matching floral tunic & palazzo set)
const hdCoordUrl = 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1600&auto=format&fit=crop';

const sizes = [1920, 1200, 800, 600];

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
  console.log('Downloading High-Definition 1080p/4K Co-Ord set fashion image...');
  const inputBuffer = await downloadBuffer(hdCoordUrl);

  const mainPath = path.join(baseAssetsDir, 'coord-sets.webp');
  await sharp(inputBuffer)
    .webp({ quality: 92 })
    .toFile(mainPath);

  for (const width of sizes) {
    const responsivePath = path.join(baseAssetsDir, `coord-sets-${width}.webp`);
    await sharp(inputBuffer)
      .resize(width, null, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 90 })
      .toFile(responsivePath);
  }

  console.log('SUCCESS: Ultra-HD sharp Co-Ord set image deployed!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
