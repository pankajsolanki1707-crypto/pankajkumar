const https = require('https');

const url = 'https://www.amazon.in/stores/EXAMWAVE-EXPERT/author/B0FWYH2RLP/allbooks?ref=ap_rdr&shoppingPortalEnabled=true';

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
    'Cache-Control': 'no-cache'
  }
};

https.get(url, options, (res) => {
  let data = '';
  console.log('Status code:', res.statusCode);
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Data length:', data.length);
    // Find all media-amazon image URLs
    const imgRegex = /https:\/\/m\.media-amazon\.com\/images\/I\/[A-Za-z0-9%_\-]+\.(?:jpg|png)/g;
    const matches = Array.from(new Set(data.match(imgRegex) || []));
    console.log('Found amazon images:', matches.length);
    matches.slice(0, 30).forEach(img => console.log(img));
  });
}).on('error', err => {
  console.error('Error:', err.message);
});
