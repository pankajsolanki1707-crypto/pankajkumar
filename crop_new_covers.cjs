const fs = require('fs');
const path = require('path');
const { Jimp } = require('jimp');

const uploadsDir = 'C:\\Users\\User\\.gemini\\antigravity\\brain\\d22eece6-5b54-4adc-9447-e1a455d61b8c\\.user_uploaded';
const outputDir = path.join(__dirname, 'public', 'covers');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function cropNewCovers() {
  console.log('Cropping 15 new book covers...');

  // 1. Computer Awareness 200 MCQs (media_1786862432682.png)
  const img1Path = path.join(uploadsDir, 'media_1786862432682.png');
  if (fs.existsSync(img1Path)) {
    const img1 = await Jimp.read(img1Path);
    const w = img1.bitmap.width;
    const h = img1.bitmap.height;
    const cropped = img1.clone().crop({
      x: Math.round(w * 0.20),
      y: Math.round(h * 0.05),
      w: Math.round(w * 0.58),
      h: Math.round(h * 0.50)
    });
    await cropped.write(path.join(outputDir, 'computer-awareness-200-mcqs-hindi.png'));
    console.log('Saved computer-awareness-200-mcqs-hindi.png');
  }

  // 2. Screenshot 2 (media_1786862432692.png)
  // Mock Tests 10, General Science RRB, Static GK Part 3, EPFO 500+ Hindi
  const img2Path = path.join(uploadsDir, 'media_1786862432692.png');
  if (fs.existsSync(img2Path)) {
    const img2 = await Jimp.read(img2Path);
    const w = img2.bitmap.width;
    const h = img2.bitmap.height;

    // 1st: EPFO Full Length 10 Mock Tests
    const b1 = img2.clone().crop({
      x: Math.round(w * 0.07),
      y: Math.round(h * 0.15),
      w: Math.round(w * 0.18),
      h: Math.round(h * 0.44)
    });
    await b1.write(path.join(outputDir, 'upsc-epfo-2025-10-full-length-mock-tests.png'));

    // 2nd: General Science 500+ RRB JE
    const b2 = img2.clone().crop({
      x: Math.round(w * 0.32),
      y: Math.round(h * 0.15),
      w: Math.round(w * 0.18),
      h: Math.round(h * 0.44)
    });
    await b2.write(path.join(outputDir, 'general-science-500-mcqs-rrb-je.png'));

    // 3rd: Static GK Part 3
    const b3 = img2.clone().crop({
      x: Math.round(w * 0.56),
      y: Math.round(h * 0.15),
      w: Math.round(w * 0.18),
      h: Math.round(h * 0.44)
    });
    await b3.write(path.join(outputDir, 'static-gk-mcq-part-3-1000-questions.png'));

    // 4th: EPFO 500+ Hindi
    const b4 = img2.clone().crop({
      x: Math.round(w * 0.81),
      y: Math.round(h * 0.15),
      w: Math.round(w * 0.18),
      h: Math.round(h * 0.44)
    });
    await b4.write(path.join(outputDir, 'upsc-epfo-500-mcqs-hindi.png'));
    console.log('Saved 4 books from screenshot 2');
  }

  // 3. Screenshot 3 (media_1786862432699.png)
  // Polity 650 MCQs, Current Affairs 2000+ Hindi, Modern History RRB, 100 EPFO Hindi
  const img3Path = path.join(uploadsDir, 'media_1786862432699.png');
  if (fs.existsSync(img3Path)) {
    const img3 = await Jimp.read(img3Path);
    const w = img3.bitmap.width;
    const h = img3.bitmap.height;

    // 1st: Polity MCQ Bank 650
    const b1 = img3.clone().crop({
      x: Math.round(w * 0.06),
      y: Math.round(h * 0.20),
      w: Math.round(w * 0.18),
      h: Math.round(h * 0.45)
    });
    await b1.write(path.join(outputDir, 'polity-mcq-bank-650-upsc.png'));

    // 2nd: Current Affairs 2000+ Hindi
    const b2 = img3.clone().crop({
      x: Math.round(w * 0.32),
      y: Math.round(h * 0.20),
      w: Math.round(w * 0.18),
      h: Math.round(h * 0.45)
    });
    await b2.write(path.join(outputDir, 'current-affairs-2000-mcqs-hindi-2026.png'));

    // 3rd: Modern History RRB JE
    const b3 = img3.clone().crop({
      x: Math.round(w * 0.57),
      y: Math.round(h * 0.20),
      w: Math.round(w * 0.18),
      h: Math.round(h * 0.45)
    });
    await b3.write(path.join(outputDir, 'modern-history-1000-mcqs-rrb-je.png'));

    // 4th: 100 High Quality EPFO Hindi
    const b4 = img3.clone().crop({
      x: Math.round(w * 0.82),
      y: Math.round(h * 0.20),
      w: Math.round(w * 0.18),
      h: Math.round(h * 0.45)
    });
    await b4.write(path.join(outputDir, '100-epfo-hindi-mcqs.png'));
    console.log('Saved 4 books from screenshot 3');
  }

  // 4. Screenshot 4 (media_1786862432705.png)
  // Samanya Vigyan RRB Hindi, Mock Test I, Mock Test II, Govt Schemes Special
  const img4Path = path.join(uploadsDir, 'media_1786862432705.png');
  if (fs.existsSync(img4Path)) {
    const img4 = await Jimp.read(img4Path);
    const w = img4.bitmap.width;
    const h = img4.bitmap.height;

    // 1st: Samanya Vigyan 500+ Hindi RRB
    const b1 = img4.clone().crop({
      x: Math.round(w * 0.06),
      y: Math.round(h * 0.12),
      w: Math.round(w * 0.18),
      h: Math.round(h * 0.45)
    });
    await b1.write(path.join(outputDir, 'samanya-vigyan-500-mcqs-hindi.png'));

    // 2nd: EPFO Mock Test I
    const b2 = img4.clone().crop({
      x: Math.round(w * 0.31),
      y: Math.round(h * 0.12),
      w: Math.round(w * 0.18),
      h: Math.round(h * 0.45)
    });
    await b2.write(path.join(outputDir, 'upsc-epfo-mock-test-1.png'));

    // 3rd: EPFO Mock Test II
    const b3 = img4.clone().crop({
      x: Math.round(w * 0.56),
      y: Math.round(h * 0.12),
      w: Math.round(w * 0.18),
      h: Math.round(h * 0.45)
    });
    await b3.write(path.join(outputDir, 'upsc-epfo-mock-test-2.png'));

    // 4th: Government Schemes Special
    const b4 = img4.clone().crop({
      x: Math.round(w * 0.79),
      y: Math.round(h * 0.12),
      w: Math.round(w * 0.18),
      h: Math.round(h * 0.45)
    });
    await b4.write(path.join(outputDir, 'upsc-epfo-government-schemes.png'));
    console.log('Saved 4 books from screenshot 4');
  }

  // 5. Screenshot 5 (media_1786862432771.png)
  // General Accounting Principles, Adhunik Bharat Hindi 500 MCQs
  const img5Path = path.join(uploadsDir, 'media_1786862432771.png');
  if (fs.existsSync(img5Path)) {
    const img5 = await Jimp.read(img5Path);
    const w = img5.bitmap.width;
    const h = img5.bitmap.height;

    // 1st: General Accounting Principles
    const b1 = img5.clone().crop({
      x: Math.round(w * 0.12),
      y: Math.round(h * 0.08),
      w: Math.round(w * 0.24),
      h: Math.round(h * 0.49)
    });
    await b1.write(path.join(outputDir, 'general-accounting-principles-upsc-epfo.png'));

    // 2nd: Adhunik Bharat 500 MCQs Hindi
    const b2 = img5.clone().crop({
      x: Math.round(w * 0.54),
      y: Math.round(h * 0.08),
      w: Math.round(w * 0.24),
      h: Math.round(h * 0.49)
    });
    await b2.write(path.join(outputDir, 'adhunik-bharat-500-mcqs-hindi.png'));
    console.log('Saved 2 books from screenshot 5');
  }

  console.log('All 15 new covers cropped cleanly!');
}

cropNewCovers().catch(console.error);
