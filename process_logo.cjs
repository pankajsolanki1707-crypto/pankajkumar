const fs = require('fs');
const path = require('path');
const { Jimp } = require('jimp');

const logoSource = 'C:\\Users\\User\\.gemini\\antigravity\\brain\\d22eece6-5b54-4adc-9447-e1a455d61b8c\\.user_uploaded\\media_1786866480338.png';
const publicDir = path.join(__dirname, 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

async function processLogo() {
  console.log('Processing official Go Pustak logo...');

  if (fs.existsSync(logoSource)) {
    const img = await Jimp.read(logoSource);
    const w = img.bitmap.width;
    const h = img.bitmap.height;

    // Crop the central circular logo badge from the black bounding box
    const cropped = img.clone().crop({
      x: Math.round(w * 0.16),
      y: Math.round(h * 0.02),
      w: Math.round(w * 0.70),
      h: Math.round(h * 0.95)
    });

    const targetPath = path.join(publicDir, 'go-pustak-logo.png');
    await cropped.write(targetPath);
    console.log(`Saved high-quality logo to ${targetPath}`);

    // Copy original full file as well
    fs.copyFileSync(logoSource, path.join(publicDir, 'go-pustak-logo-raw.png'));
  } else {
    console.error('Logo source file not found!');
  }
}

processLogo().catch(console.error);
