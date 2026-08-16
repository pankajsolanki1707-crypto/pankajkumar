const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const uploadsDir = 'C:\\Users\\User\\.gemini\\antigravity\\brain\\d22eece6-5b54-4adc-9447-e1a455d61b8c\\.user_uploaded';
const outputDir = path.join(__dirname, 'public', 'covers');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function processImages() {
  const files = fs.readdirSync(uploadsDir).filter(f => f.startsWith('media_1786862065'));
  console.log('Found files:', files);

  for (const file of files) {
    const fullPath = path.join(uploadsDir, file);
    const meta = await sharp(fullPath).metadata();
    console.log(`File ${file}: ${meta.width}x${meta.height}`);
  }
}

processImages().catch(console.error);
