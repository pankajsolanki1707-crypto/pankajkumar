const fs = require('fs');
const path = require('path');
const { Jimp } = require('jimp');

const uploadsDir = 'C:\\Users\\User\\.gemini\\antigravity\\brain\\d22eece6-5b54-4adc-9447-e1a455d61b8c\\.user_uploaded';
const outputDir = path.join(__dirname, 'public', 'covers');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function cropBatch2() {
  console.log('Cropping batch 2 covers...');

  // 1. UPSC EPFO Special Subject Notes English (media_1786862758916.png)
  const img1Path = path.join(uploadsDir, 'media_1786862758916.png');
  if (fs.existsSync(img1Path)) {
    const img1 = await Jimp.read(img1Path);
    await img1.write(path.join(outputDir, 'upsc-epfo-special-subject-notes-pankaj-kumar.png'));
    console.log('Saved upsc-epfo-special-subject-notes-pankaj-kumar.png');
  }

  // 2. Indian Polity MCQ Bank Hindi 650 (media_1786862758918.png)
  const img2Path = path.join(uploadsDir, 'media_1786862758918.png');
  if (fs.existsSync(img2Path)) {
    const img2 = await Jimp.read(img2Path);
    const w = img2.bitmap.width;
    const h = img2.bitmap.height;
    const cropped = img2.clone().crop({
      x: Math.round(w * 0.20),
      y: Math.round(h * 0.05),
      w: Math.round(w * 0.60),
      h: Math.round(h * 0.50)
    });
    await cropped.write(path.join(outputDir, 'polity-mcq-bank-650-hindi.png'));
    console.log('Saved polity-mcq-bank-650-hindi.png');
  }

  // 3. Important Articles of Indian Constitution (media_1786862758925.png)
  const img3Path = path.join(uploadsDir, 'media_1786862758925.png');
  if (fs.existsSync(img3Path)) {
    const img3 = await Jimp.read(img3Path);
    const w = img3.bitmap.width;
    const h = img3.bitmap.height;
    const cropped = img3.clone().crop({
      x: Math.round(w * 0.22),
      y: Math.round(h * 0.08),
      w: Math.round(w * 0.55),
      h: Math.round(h * 0.52)
    });
    await cropped.write(path.join(outputDir, 'important-articles-indian-constitution.png'));
    console.log('Saved important-articles-indian-constitution.png');
  }

  // 4. Indian Economy 500+ Hindi & Modern History 1000 RRB JE (media_1786862758937.png)
  const img4Path = path.join(uploadsDir, 'media_1786862758937.png');
  if (fs.existsSync(img4Path)) {
    const img4 = await Jimp.read(img4Path);
    const w = img4.bitmap.width;
    const h = img4.bitmap.height;

    // Left: Indian Economy Hindi 500+
    const b1 = img4.clone().crop({
      x: Math.round(w * 0.17),
      y: Math.round(h * 0.10),
      w: Math.round(w * 0.28),
      h: Math.round(h * 0.48)
    });
    await b1.write(path.join(outputDir, 'indian-economy-500-mcqs-hindi.png'));

    // Right: RRB JE Modern History & Culture 1000 MCQs
    const b2 = img4.clone().crop({
      x: Math.round(w * 0.60),
      y: Math.round(h * 0.10),
      w: Math.round(w * 0.28),
      h: Math.round(h * 0.48)
    });
    await b2.write(path.join(outputDir, 'rrb-je-modern-history-culture-1000.png'));
    console.log('Saved 2 books from image 4');
  }

  // 5. Audit and Insurance for UPSC EPFO (media_1786862758976.png)
  const img5Path = path.join(uploadsDir, 'media_1786862758976.png');
  if (fs.existsSync(img5Path)) {
    const img5 = await Jimp.read(img5Path);
    const w = img5.bitmap.width;
    const h = img5.bitmap.height;
    const cropped = img5.clone().crop({
      x: Math.round(w * 0.22),
      y: Math.round(h * 0.08),
      w: Math.round(w * 0.55),
      h: Math.round(h * 0.50)
    });
    await cropped.write(path.join(outputDir, 'audit-and-insurance-upsc-epfo.png'));
    console.log('Saved audit-and-insurance-upsc-epfo.png');
  }

  // 6. UPSC EPFO Special Subject Notes Hindi by Akash Kashyap & Pankaj Kumar (media_1786862912548.png)
  const img6Path = path.join(uploadsDir, 'media_1786862912548.png');
  if (fs.existsSync(img6Path)) {
    const img6 = await Jimp.read(img6Path);
    await img6.write(path.join(outputDir, 'upsc-epfo-special-subject-notes-hindi.png'));
    console.log('Saved upsc-epfo-special-subject-notes-hindi.png');
  }

  console.log('Batch 2 cropping completed successfully!');
}

cropBatch2().catch(console.error);
