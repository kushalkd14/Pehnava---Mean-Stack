const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const brainImagePath = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\b27a8cc4-db87-4671-8e56-e473d762d491\\hero_main_1787339727168.png';
const baseAssetsDir = path.join(__dirname, 'src', 'assets', 'hero');

const sizes = [1920, 1200, 600];

async function main() {
  console.log('Inspecting preview image dimensions...');
  const metadata = await sharp(brainImagePath).metadata();
  console.log(`Original image size: ${metadata.width}x${metadata.height}`);

  // Let's create a retouched composite to blend out "RJ01" on the gold wall lettering
  // "Pehnava RJ01" text is located around center-top wall behind mannequin (around 52%-62% X, 36%-44% Y)
  // We composite a smooth patch of the dark maroon wall texture over the "RJ01" characters.

  // First create a clean maroon patch matching the exact wall background color
  const patchWidth = Math.round(metadata.width * 0.12);
  const patchHeight = Math.round(metadata.height * 0.08);

  // Extract a clean background wall sample right next to the text (from x: 42%, y: 38%)
  const sampleX = Math.round(metadata.width * 0.42);
  const sampleY = Math.round(metadata.height * 0.38);

  const sampleBuffer = await sharp(brainImagePath)
    .extract({ left: sampleX, top: sampleY, width: patchWidth, height: patchHeight })
    .blur(5)
    .toBuffer();

  // Overlay target: right side of Pehnava text where RJ01 is positioned (approx x: 57%, y: 36%)
  const overlayX = Math.round(metadata.width * 0.565);
  const overlayY = Math.round(metadata.height * 0.355);

  const retouchedBuffer = await sharp(brainImagePath)
    .composite([
      {
        input: sampleBuffer,
        left: overlayX,
        top: overlayY,
        blend: 'over'
      }
    ])
    .sharpen({ sigma: 1, m1: 0.5, m2: 2 })
    .toBuffer();

  // Save as main WebP and responsive sizes
  const mainPath = path.join(baseAssetsDir, 'hero-main.webp');
  await sharp(retouchedBuffer)
    .webp({ quality: 98 })
    .toFile(mainPath);

  for (const width of sizes) {
    const responsivePath = path.join(baseAssetsDir, `hero-main-${width}.webp`);
    await sharp(retouchedBuffer)
      .resize(width, null, { fit: 'inside', withoutEnlargement: false })
      .webp({ quality: 95 })
      .toFile(responsivePath);
  }

  console.log('SUCCESS: Retouched wall branding to "Pehnava" (removed RJ01) and deployed WebP assets!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
