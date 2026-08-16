const fs = require('fs');
const https = require('https');
const path = require('path');

const asins = [
  'B0FVYBLR27', 'B0G1TVKL7J', 'B0FWRQ657W', 'B0GRMXQ5KT',
  'B0FV3PR2DM', 'B0FTGFK4LR', 'B0H94V5DHV', 'B0G15CJGH8',
  'B0FXLQ6WM6', 'B0GRC4JY5R', 'B0FV8X2MLB', 'B0FW3TPFWZ',
  'B0G2CFSVKK', 'B0FVS7PP8Q', 'B0G2MPT7YS', 'B0H7661MLV'
];

const results = [];

const fetchAsin = (asin) => {
  return new Promise((resolve) => {
    const url = `https://www.amazon.in/dp/${asin}`;
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9'
      }
    };

    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // Extract title
        let title = '';
        const titleMatch = data.match(/<span id="productTitle"[^>]*>\s*([^<]+)\s*<\/span>/i) || data.match(/<title>\s*([^<]+)\s*<\/title>/i);
        if (titleMatch) {
          title = titleMatch[1].replace(/Amazon.in:[^:]*:/, '').replace(/: Kindle Edition.*/, '').trim();
        }

        // Extract high-res image URL
        let imgUrl = '';
        const imgMatch = data.match(/https:\/\/m\.media-amazon\.com\/images\/I\/([A-Za-z0-9%_\-]+)\.(?:jpg|png)/i);
        if (imgMatch) {
          const baseId = imgMatch[1].split('.')[0];
          imgUrl = `https://m.media-amazon.com/images/I/${baseId}.jpg`;
        }

        // Extract price
        let price = '99';
        const priceMatch = data.match(/₹\s*([0-9]+(?:\.[0-9]+)?)/);
        if (priceMatch) {
          price = priceMatch[1];
        }

        console.log(`[ASIN ${asin}] Title: "${title}" | Image: ${imgUrl}`);
        resolve({ asin, title, imgUrl, price, amazonUrl: url });
      });
    }).on('error', err => {
      console.error(`Error fetching ASIN ${asin}:`, err.message);
      resolve({ asin, error: err.message });
    });
  });
};

async function main() {
  console.log(`Starting fetch for ${asins.length} Amazon ASINs...`);
  for (const asin of asins) {
    const res = await fetchAsin(asin);
    results.push(res);
    await new Promise(r => setTimeout(r, 600)); // rate limiting
  }

  fs.writeFileSync('amazon_detailed_books.json', JSON.stringify(results, null, 2));
  console.log('Saved amazon_detailed_books.json');
}

main();
