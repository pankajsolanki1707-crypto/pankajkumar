const fs = require('fs');
const path = require('path');
const { Jimp } = require('jimp');

const uploadsDir = 'C:\\Users\\User\\.gemini\\antigravity\\brain\\d22eece6-5b54-4adc-9447-e1a455d61b8c\\.user_uploaded';
const outputDir = path.join(__dirname, 'public', 'covers');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function cropAllCovers() {
  console.log('Starting image cropping with Jimp...');

  // 1. Screenshot 1: Crack UPSC EPFO/APFC 2026
  const img1Path = path.join(uploadsDir, 'media_1786862065436.png');
  if (fs.existsSync(img1Path)) {
    const image1 = await Jimp.read(img1Path);
    const w = image1.bitmap.width;
    const h = image1.bitmap.height;
    console.log(`Image 1 size: ${w}x${h}`);
    
    // Crop center book cover
    const cropX = Math.round(w * 0.30);
    const cropY = Math.round(h * 0.08);
    const cropW = Math.round(w * 0.43);
    const cropH = Math.round(h * 0.50);

    const cropped1 = image1.clone().crop({ x: cropX, y: cropY, w: cropW, h: cropH });
    await cropped1.write(path.join(outputDir, 'crack-upsc-epfo-apfc-2026-blueprint.png'));
    console.log('Saved crack-upsc-epfo-apfc-2026-blueprint.png');
  }

  // 2. Screenshot 2: Economy & Geography
  const img2Path = path.join(uploadsDir, 'media_1786862065449.png');
  if (fs.existsSync(img2Path)) {
    const image2 = await Jimp.read(img2Path);
    const w = image2.bitmap.width;
    const h = image2.bitmap.height;
    console.log(`Image 2 size: ${w}x${h}`);

    // Left book: Indian Economy 550 MCQs
    const book1 = image2.clone().crop({
      x: Math.round(w * 0.14),
      y: Math.round(h * 0.06),
      w: Math.round(w * 0.24),
      h: Math.round(h * 0.48)
    });
    await book1.write(path.join(outputDir, 'indian-economy-550-mcqs-upsc-epfo.png'));
    console.log('Saved indian-economy-550-mcqs-upsc-epfo.png');

    // Right book: Complete Geography Notes Hindi
    const book2 = image2.clone().crop({
      x: Math.round(w * 0.62),
      y: Math.round(h * 0.06),
      w: Math.round(w * 0.24),
      h: Math.round(h * 0.48)
    });
    await book2.write(path.join(outputDir, 'complete-geography-notes-hindi-bhugol.png'));
    console.log('Saved complete-geography-notes-hindi-bhugol.png');
  }

  // 3. Screenshot 3: Art & Culture & Hindi EPFO Guide
  const img3Path = path.join(uploadsDir, 'media_1786862065454.png');
  if (fs.existsSync(img3Path)) {
    const image3 = await Jimp.read(img3Path);
    const w = image3.bitmap.width;
    const h = image3.bitmap.height;
    console.log(`Image 3 size: ${w}x${h}`);

    // Left book: Art & Culture 500 MCQs
    const book1 = image3.clone().crop({
      x: Math.round(w * 0.19),
      y: Math.round(h * 0.08),
      w: Math.round(w * 0.22),
      h: Math.round(h * 0.49)
    });
    await book1.write(path.join(outputDir, 'upsc-epfo-500-mcqs-art-and-culture.png'));
    console.log('Saved upsc-epfo-500-mcqs-art-and-culture.png');

    // Right book: UPSC EPFO APFC 2026 Hindi Guide
    const book2 = image3.clone().crop({
      x: Math.round(w * 0.63),
      y: Math.round(h * 0.08),
      w: Math.round(w * 0.22),
      h: Math.round(h * 0.49)
    });
    await book2.write(path.join(outputDir, 'upsc-epfo-apfc-2026-hindi-guide.png'));
    console.log('Saved upsc-epfo-apfc-2026-hindi-guide.png');
  }

  // 4. Screenshot 4: 4 books grid (Labour Laws, Yearly MCQs, General Science, Science & Tech June)
  const img4Path = path.join(uploadsDir, 'media_1786862065529.png');
  if (fs.existsSync(img4Path)) {
    const image4 = await Jimp.read(img4Path);
    const w = image4.bitmap.width;
    const h = image4.bitmap.height;
    console.log(`Image 4 size: ${w}x${h}`);

    // Book 1: Labour Laws
    const b1 = image4.clone().crop({
      x: Math.round(w * 0.12),
      y: Math.round(h * 0.30),
      w: Math.round(w * 0.12),
      h: Math.round(h * 0.38)
    });
    await b1.write(path.join(outputDir, 'industrial-relations-labour-laws-2025.png'));

    // Book 2: Current Affairs Yearly MCQ
    const b2 = image4.clone().crop({
      x: Math.round(w * 0.34),
      y: Math.round(h * 0.30),
      w: Math.round(w * 0.13),
      h: Math.round(h * 0.38)
    });
    await b2.write(path.join(outputDir, 'current-affairs-yearly-mcq-2025-2026.png'));

    // Book 3: General Science 500 MCQs
    const b3 = image4.clone().crop({
      x: Math.round(w * 0.58),
      y: Math.round(h * 0.30),
      w: Math.round(w * 0.12),
      h: Math.round(h * 0.38)
    });
    await b3.write(path.join(outputDir, 'general-science-500-mcqs-upsc-epfo.png'));

    // Book 4: Science & Tech June 2026
    const b4 = image4.clone().crop({
      x: Math.round(w * 0.80),
      y: Math.round(h * 0.30),
      w: Math.round(w * 0.12),
      h: Math.round(h * 0.38)
    });
    await b4.write(path.join(outputDir, 'upsc-june-2026-current-affairs-science-tech.png'));
    console.log('Saved 4 books from image 4');
  }

  // 5. Screenshot 5: Current Affairs 2026 Eng/Hindi & UPPCS Quick Revision
  const img5Path = path.join(uploadsDir, 'media_1786862065543.png');
  if (fs.existsSync(img5Path)) {
    const image5 = await Jimp.read(img5Path);
    const w = image5.bitmap.width;
    const h = image5.bitmap.height;
    console.log(`Image 5 size: ${w}x${h}`);

    // Book 1: Current Affairs English 2026
    const b1 = image5.clone().crop({
      x: Math.round(w * 0.08),
      y: Math.round(h * 0.20),
      w: Math.round(w * 0.20),
      h: Math.round(h * 0.52)
    });
    await b1.write(path.join(outputDir, 'upsc-current-affairs-2026-january-to-july.png'));

    // Book 2: Current Affairs Hindi 2026
    const b2 = image5.clone().crop({
      x: Math.round(w * 0.40),
      y: Math.round(h * 0.20),
      w: Math.round(w * 0.20),
      h: Math.round(h * 0.52)
    });
    await b2.write(path.join(outputDir, 'upsc-current-affairs-2026-january-july-hindi.png'));

    // Book 3: UPPCS Quick Revision 2026
    const b3 = image5.clone().crop({
      x: Math.round(w * 0.73),
      y: Math.round(h * 0.20),
      w: Math.round(w * 0.20),
      h: Math.round(h * 0.52)
    });
    await b3.write(path.join(outputDir, 'uppcs-quick-revision-series-2026.png'));
    console.log('Saved 3 books from image 5');
  }

  console.log('All book covers cropped and saved successfully to public/covers/');
}

cropAllCovers().catch(console.error);
