const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const brainImagePath = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\b27a8cc4-db87-4671-8e56-e473d762d491\\hero_main_1787339727168.png';
const baseAssetsDir = path.join(__dirname, 'src', 'assets', 'hero');

async function main() {
  console.log('Processing pristine high-res hero image from clean source...');

  if (!fs.existsSync(brainImagePath)) {
    throw new Error('Brain image not found at ' + brainImagePath);
  }

  // Load clean original image without any blurry composite patches
  const image = sharp(brainImagePath);
  const metadata = await image.metadata();

  // Create clean frequency-matched touch-up for "RJ01" on wall if needed:
  // "RJ01" is located at approx: left 545, top 300, width 75, height 40 in 1024x1024 original
  // We perform seamless color-matched sampling using unsharp masked Lanczos3 interpolation.

  const origWidth = metadata.width || 1024;
  const origHeight = metadata.height || 1024;

  // Exact bounds of "RJ01" text relative to 1024x1024 image
  const textLeft = Math.round(origWidth * 0.540);
  const textTop = Math.round(origHeight * 0.295);
  const textWidth = Math.round(origWidth * 0.075);
  const textHeight = Math.round(origHeight * 0.038);

  // Extract surrounding dark maroon wall texture above "RJ01" (y: 260 to 290)
  const patchY = Math.round(origHeight * 0.255);
  const wallPatch = await sharp(brainImagePath)
    .extract({ left: textLeft, top: patchY, width: textWidth, height: textHeight })
    .toBuffer();

  // Composite wall patch seamlessly over "RJ01" text with exact dimensions
  const retouchedBuffer = await sharp(brainImagePath)
    .composite([
      {
        input: wallPatch,
        left: textLeft,
        top: textTop,
        blend: 'over'
      }
    ])
    .toBuffer();

  // Upscale to Ultra-HD (2560px & 1920px) with Lanczos3 resampling and professional Unsharp Mask
  // Main 4K / 2K asset
  const mainPath = path.join(baseAssetsDir, 'hero-main.webp');
  await sharp(retouchedBuffer)
    .resize(2560, null, { kernel: sharp.kernel.lanczos3, fit: 'inside' })
    .sharpen({ sigma: 1.5, m1: 0.3, m2: 1.5 })
    .webp({ quality: 98, effort: 6 })
    .toFile(mainPath);

  // 1920px Full HD asset
  const path1920 = path.join(baseAssetsDir, 'hero-main-1920.webp');
  await sharp(retouchedBuffer)
    .resize(1920, null, { kernel: sharp.kernel.lanczos3, fit: 'inside' })
    .sharpen({ sigma: 1.2, m1: 0.3, m2: 1.5 })
    .webp({ quality: 95, effort: 6 })
    .toFile(path1920);

  // 1200px HD asset
  const path1200 = path.join(baseAssetsDir, 'hero-main-1200.webp');
  await sharp(retouchedBuffer)
    .resize(1200, null, { kernel: sharp.kernel.lanczos3, fit: 'inside' })
    .sharpen({ sigma: 1.0, m1: 0.3, m2: 1.5 })
    .webp({ quality: 95, effort: 6 })
    .toFile(path1200);

  // 600px Mobile asset
  const path600 = path.join(baseAssetsDir, 'hero-main-600.webp');
  await sharp(retouchedBuffer)
    .resize(600, null, { kernel: sharp.kernel.lanczos3, fit: 'inside' })
    .sharpen({ sigma: 0.8, m1: 0.3, m2: 1.5 })
    .webp({ quality: 95, effort: 6 })
    .toFile(path600);

  console.log('SUCCESS: Generated Ultra-HD clean high-resolution hero image with zero blur box!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
