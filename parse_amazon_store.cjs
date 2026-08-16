const fs = require('fs');
const https = require('https');
const path = require('path');

const url = 'https://www.amazon.in/stores/EXAMWAVE-EXPERT/author/B0FWYH2RLP/allbooks?ref=ap_rdr&shoppingPortalEnabled=true';

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9'
  }
};

https.get(url, options, (res) => {
  let html = '';
  res.on('data', chunk => html += chunk);
  res.on('end', () => {
    fs.writeFileSync('amazon_raw.html', html);
    console.log('Saved amazon_raw.html, size:', html.length);

    // Extract product titles and image URLs
    // Amazon store pages embed JSON data or product card HTML
    const bookBlocks = [];
    
    // Look for image URLs ending in .jpg
    const imgRegex = /https:\/\/m\.media-amazon\.com\/images\/I\/([A-Za-z0-9%_\-]+)\.(?:jpg|png)/g;
    let match;
    const images = new Set();
    while ((match = imgRegex.exec(html)) !== null) {
      const baseId = match[1].split('.')[0]; // remove resolution modifiers if any
      const highResUrl = `https://m.media-amazon.com/images/I/${baseId}.jpg`;
      images.add(highResUrl);
    }

    console.log(`Found ${images.size} unique Amazon high-res cover images.`);
    const imgList = Array.from(images);
    fs.writeFileSync('amazon_images.json', JSON.stringify(imgList, null, 2));

    // Download images into public/covers/amazon/
    const targetDir = path.join(__dirname, 'public', 'covers', 'amazon');
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    let downloadedCount = 0;
    imgList.forEach((imgUrl, idx) => {
      const fileName = `cover_${idx + 1}.jpg`;
      const filePath = path.join(targetDir, fileName);
      const file = fs.createWriteStream(filePath);
      
      https.get(imgUrl, (imgRes) => {
        imgRes.pipe(file);
        file.on('finish', () => {
          file.close();
          downloadedCount++;
          console.log(`[${downloadedCount}/${imgList.length}] Saved ${fileName}`);
        });
      }).on('error', err => {
        console.error(`Failed to download ${imgUrl}:`, err.message);
      });
    });
  });
});
