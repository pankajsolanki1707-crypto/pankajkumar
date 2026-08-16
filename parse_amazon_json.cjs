const fs = require('fs');

const html = fs.readFileSync('amazon_raw.html', 'utf8');

// Find all ASINs (B0...) and nearby text/title
const asinRegex = /"asin":"(B0[A-Z0-9]{8})"/g;
const asins = new Set();
let match;
while ((match = asinRegex.exec(html)) !== null) {
  asins.add(match[1]);
}

console.log(`Found ${asins.size} ASINs on Amazon Author Page:`, Array.from(asins));

// Look for image-to-title mappings in JSON objects
const items = [];
const itemRegex = /\{"asin":"(B0[A-Z0-9]{8})"[^}]*\}/g;
while ((match = itemRegex.exec(html)) !== null) {
  try {
    const obj = JSON.parse(match[0]);
    items.push(obj);
  } catch (e) {
    // partial JSON
  }
}

console.log(`Extracted ${items.length} structured product JSON objects.`);
fs.writeFileSync('amazon_items.json', JSON.stringify(items, null, 2));

// Search for any book titles in raw HTML around media-amazon URLs
const imgToTitle = [];
const imgContextRegex = /(https:\/\/m\.media-amazon\.com\/images\/I\/[A-Za-z0-9%_\-]+\.jpg)[^>]*?alt="([^"]+)"/g;
while ((match = imgContextRegex.exec(html)) !== null) {
  imgToTitle.push({ img: match[1], title: match[2] });
}
console.log(`Found ${imgToTitle.length} img-to-title pairs:`);
imgToTitle.forEach(it => console.log(it.title, '-->', it.img));
