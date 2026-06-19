const { createCanvas, loadImage } = require('canvas');
const path = require('path');

async function run() {
  const logoPath = path.join(__dirname, '..', 'scanner-web', 'src', 'assets', 'new_logo.png');
  const img = await loadImage(logoPath);
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  const imgData = ctx.getImageData(0, 0, img.width, img.height);
  const data = imgData.data;

  // Let's print some color frequencies
  const colors = {};
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i+1];
    const b = data[i+2];
    const a = data[i+3];
    if (a < 50) continue; // transparent

    // round color to nearest 10 for clustering
    const rR = Math.round(r / 15) * 15;
    const gR = Math.round(g / 15) * 15;
    const bR = Math.round(b / 15) * 15;
    const key = `${rR},${gR},${bR}`;
    colors[key] = (colors[key] || 0) + 1;
  }

  const sorted = Object.entries(colors).sort((a, b) => b[1] - a[1]);
  console.log('Top colors (R,G,B rounded):', sorted.slice(0, 20));
}

run().catch(console.error);
