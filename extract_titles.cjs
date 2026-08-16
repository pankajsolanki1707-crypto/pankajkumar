const fs = require('fs');

const html = fs.readFileSync('amazon_raw.html', 'utf8');

// Amazon store pages embed JSON data in <script type="a-state"> or data attributes or product cards
const titles = [];

// Try regex for alt tags or product titles
const titleRegex = /alt="([^"]*EXAMWAVE[^"]*|[^"]*UPSC[^"]*|[^"]*EPFO[^"]*|[^"]*MCQ[^"]*|[^"]*Current Affairs[^"]*|[^"]*Revision[^"]*|[^"]*Notes[^"]*)"/gi;
let match;
const foundTitles = new Set();
while ((match = titleRegex.exec(html)) !== null) {
  const t = match[1].trim();
  if (t.length > 5 && !t.includes('Amazon') && !t.includes('Logo')) {
    foundTitles.add(t);
  }
}

// Search for JSON blocks in raw HTML
const jsonBlockRegex = /"title":"([^"]+)"/g;
while ((match = jsonBlockRegex.exec(html)) !== null) {
  const t = match[1].trim();
  if (t.length > 5 && !t.includes('Amazon')) {
    foundTitles.add(t);
  }
}

console.log(`Extracted ${foundTitles.size} titles from Amazon Store Page:`);
Array.from(foundTitles).forEach((t, i) => console.log(`${i + 1}. ${t}`));
fs.writeFileSync('amazon_extracted_titles.json', JSON.stringify(Array.from(foundTitles), null, 2));
