const fs = require('fs');
const https = require('https');
const path = require('path');

const booksData = JSON.parse(fs.readFileSync('amazon_detailed_books.json', 'utf8'));

const targetDir = path.join(__dirname, 'public', 'covers', 'amazon_highres');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function downloadHighResCovers() {
  console.log(`Downloading ${booksData.length} high-res Amazon cover images...`);
  
  for (const b of booksData) {
    if (!b.imgUrl) continue;
    const filename = `${b.asin}.jpg`;
    const destPath = path.join(targetDir, filename);
    const file = fs.createWriteStream(destPath);

    await new Promise((resolve) => {
      https.get(b.imgUrl, (res) => {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Saved ${filename} (${b.asin})`);
          b.localCoverPath = `/covers/amazon_highres/${filename}`;
          resolve();
        });
      }).on('error', err => {
        console.error(`Failed ${b.asin}:`, err.message);
        b.localCoverPath = b.imgUrl;
        resolve();
      });
    });
  }

  fs.writeFileSync('amazon_detailed_books_synced.json', JSON.stringify(booksData, null, 2));
  console.log('Saved amazon_detailed_books_synced.json');
}

downloadHighResCovers();
