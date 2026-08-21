const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const https = require('https');

const baseAssetsDir = path.join(__dirname, 'src', 'assets', 'collections');

if (!fs.existsSync(baseAssetsDir)) {
  fs.mkdirSync(baseAssetsDir, { recursive: true });
}

// Map each category to an accurate image URL or local file
const categoryImageSources = {
  'premium-kurtis': 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop',
  'short-kurtis': 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop',
  'cotton-collection': 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop',
  'casual-suits': 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1000&auto=format&fit=crop',
  'heavy-fancy-suits': 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\b27a8cc4-db87-4671-8e56-e473d762d491\\hero_suits_1787340357714.png',
  'coord-sets': 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
  'cargo-pants': 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop',
  'oversized-tshirts': 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000&auto=format&fit=crop',
  'modern-grace': 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop',
  'festive-collection': 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\b27a8cc4-db87-4671-8e56-e473d762d491\\hero_festive_1787340370656.png',
  'new-arrivals': 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\b27a8cc4-db87-4671-8e56-e473d762d491\\hero_bridal_1787340281510.png'
};

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

async function processCategory(name, source) {
  try {
    let inputBuffer;
    if (source.startsWith('http')) {
      console.log(`Downloading URL for category: ${name}...`);
      inputBuffer = await downloadBuffer(source);
    } else {
      console.log(`Reading local file for category: ${name}...`);
      if (fs.existsSync(source)) {
        inputBuffer = fs.readFileSync(source);
      } else {
        console.error(`Local file not found for ${name}: ${source}`);
        return;
      }
    }

    const mainPath = path.join(baseAssetsDir, `${name}.webp`);
    await sharp(inputBuffer)
      .webp({ quality: 88 })
      .toFile(mainPath);

    for (const width of sizes) {
      const responsivePath = path.join(baseAssetsDir, `${name}-${width}.webp`);
      await sharp(inputBuffer)
        .resize(width, null, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(responsivePath);
    }
    console.log(`SUCCESS: Category ${name} processed!`);
  } catch (err) {
    console.error(`ERROR processing ${name}:`, err.message);
  }
}

async function main() {
  for (const [name, source] of Object.entries(categoryImageSources)) {
    await processCategory(name, source);
  }
  console.log('Finished updating category images!');
}

main();
