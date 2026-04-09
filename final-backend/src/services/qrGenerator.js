const QRCode = require('qrcode');
const path = require('path');
const { createCanvas, loadImage, registerFont } = require('canvas');
const fs = require('fs');
const { qrDir } = require('../middleware/upload');

// Register Custom Font for Linux/Railway environment
try {
  const fontPath = path.join(__dirname, '..', 'assets', 'fonts', 'Arial.ttf');
  if (fs.existsSync(fontPath)) {
    registerFont(fontPath, { family: 'CustomArial' });
    console.log('Successfully registered custom Arial font');
  }
} catch (e) {
  console.error('Font registration failed:', e.message);
}

/**
 * Generate branded QR code with different designs
 * Support for Standard vertical tag and New Circle design
 */
const generateQRCode = async (tagCode, designType = 'standard', sponsor = null, assetType = 'employee') => {
  const baseUrl = process.env.PUBLIC_TAG_BASE_URL || (process.env.NODE_ENV === 'production' ? 'https://q-rscanner-mu.vercel.app/tag' : 'http://localhost:3000/tag');
  const publicUrl = `${baseUrl}/${tagCode}`;
  const fileName = `qr_${designType}_${tagCode}.png`;
  const filePath = path.join(qrDir, fileName);

  if (designType === 'circle') {
    return await generateCircleQRCode(tagCode, publicUrl, filePath, fileName, sponsor, assetType);
  } else if (designType === 'landscape') {
    return await generateLandscapeQRCode(tagCode, publicUrl, filePath, fileName, sponsor, assetType);
  }

  // DEFAULT: Standard Vertical Design
  const canvasWidth = 1200;
  const topMargin = 600; // Increased to clear physical tag slots (~50.8mm)
  const canvasHeight = 1800 + topMargin;
  
  const qrSize = 540;
  const qrBuffer = await QRCode.toBuffer(publicUrl, { errorCorrectionLevel: 'H', margin: 1, width: qrSize });
  const qrImage = await loadImage(qrBuffer);

  let logoImage = null;
  try {
    const logoRelPath = path.join(__dirname, '..', '..', 'public', 'images', 'new_logo.png');
    if (fs.existsSync(logoRelPath)) logoImage = await loadImage(logoRelPath);
  } catch (err) { }

  let sLogoImage = null;
  if (sponsor && sponsor.logo) {
    try {
      const sponsorLogoPath = path.join(__dirname, '..', '..', sponsor.logo);
      if (fs.existsSync(sponsorLogoPath)) sLogoImage = await loadImage(sponsorLogoPath);
    } catch (e) { }
  }

  const renderCtx = (ctx) => {
    // Fill background with white for the non-header area
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    const bgDepth = 650;
    const bgGradient = ctx.createLinearGradient(0, 0, 0, topMargin + bgDepth);
    bgGradient.addColorStop(0, '#002e8a');
    bgGradient.addColorStop(1, '#001a52');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, canvasWidth, topMargin + bgDepth);

    const sepGradient = ctx.createLinearGradient(0, topMargin + bgDepth, 0, topMargin + bgDepth + 20);
    sepGradient.addColorStop(0, '#737373');
    sepGradient.addColorStop(0.3, '#d4d4d4');
    sepGradient.addColorStop(1, '#f5f5f5');
    ctx.fillStyle = sepGradient;
    ctx.fillRect(0, topMargin + bgDepth, canvasWidth, 20);

    ctx.fillStyle = '#f9fafb';
    ctx.fillRect(0, topMargin + bgDepth + 20, canvasWidth, 1480 - (bgDepth + 20));

    const redGradient = ctx.createLinearGradient(0, topMargin + 1480, 0, topMargin + 1800);
    redGradient.addColorStop(0, '#b31919');
    redGradient.addColorStop(1, '#7a0a0a');
    ctx.fillStyle = redGradient;
    ctx.fillRect(0, topMargin + 1480, canvasWidth, 320);

    if (logoImage) {
      const logoWidth = 240;
      const logoAspect = logoImage.height / logoImage.width;
      const logoHeight = logoWidth * logoAspect;
      ctx.drawImage(logoImage, (canvasWidth - logoWidth) / 2, topMargin + 50, logoWidth, logoHeight);
    }

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 100px "CustomArial"';
    ctx.textAlign = 'center';
    ctx.fillText('V-KAWACH', canvasWidth / 2, topMargin + 420);

    ctx.font = 'bold 36px "CustomArial"';
    ctx.letterSpacing = "8px";
    ctx.globalAlpha = 0.8;
    ctx.fillText('SECURING YOUR WORLD', canvasWidth / 2, topMargin + 490);

    ctx.font = 'bold 58px "CustomArial"';
    ctx.letterSpacing = "10px";
    ctx.globalAlpha = 1.0;
    const safetyLabelStd = assetType === 'pet' ? 'PET SAFETY' : 
                          (assetType === 'person' ? 'PERSONAL SAFETY' : 
                          (assetType === 'vehicle' ? 'VEHICLE SAFETY' : 
                          (assetType === 'student' ? 'STUDENT SAFETY' : 'EMPLOYEE SAFETY')));
    ctx.fillText(safetyLabelStd, canvasWidth / 2, topMargin + 570);
    ctx.globalAlpha = 1.0;
    ctx.letterSpacing = "0px";

    ctx.fillStyle = '#000000';
    ctx.font = 'bold 36px "CustomArial"';
    ctx.letterSpacing = "12px";
    ctx.fillText(`${assetType.toUpperCase()} ID: ${tagCode}`, canvasWidth / 2, topMargin + 730);
    ctx.letterSpacing = "0px";

    ctx.shadowColor = 'rgba(0, 0, 0, 0.25)';
    ctx.shadowBlur = 40;
    ctx.fillStyle = '#ffffff';

    const boxSize = 640;
    const boxX = (canvasWidth - boxSize) / 2;
    const boxY = topMargin + 760;
    const radius = 40;

    ctx.beginPath();
    ctx.roundRect(boxX, boxY, boxSize, boxSize, radius);
    ctx.fill();

    ctx.shadowColor = 'transparent';
    ctx.drawImage(qrImage, (canvasWidth - qrSize) / 2, boxY + (boxSize - qrSize) / 2, qrSize, qrSize);

    if (sLogoImage) {
      const sLogoWidth = 140;
      const sLogoAspect = sLogoImage.height / sLogoImage.width;
      const sLogoHeight = sLogoWidth * sLogoAspect;
      ctx.fillStyle = '#94a3b8';
      ctx.font = 'bold 20px "CustomArial"';
      ctx.fillText('SPONSORED BY', canvasWidth / 2, boxY + boxSize + 30);
      ctx.drawImage(sLogoImage, (canvasWidth - sLogoWidth) / 2, boxY + boxSize + 50, sLogoWidth, sLogoHeight);
    }

    ctx.fillStyle = '#002e8a';
    ctx.font = 'bold 24px "CustomArial"';
    ctx.fillText('A PRODUCT OF TARKSHYA SOLUTION', canvasWidth / 2, topMargin + 1440);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 85px "CustomArial"';
    ctx.fillText('SCAN IN EMERGENCY', canvasWidth / 2, topMargin + 1615);

    ctx.font = 'bold 42px "CustomArial"';
    ctx.fillText('FOR IMMEDIATE HELP & ALERTS', canvasWidth / 2, topMargin + 1705);
  };

  // PNG Generate
  const canvas = createCanvas(canvasWidth, canvasHeight);
  renderCtx(canvas.getContext('2d'));
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(filePath, buffer);

  // SVG Full Template
  const svgCanvas = createCanvas(canvasWidth, canvasHeight, 'svg');
  renderCtx(svgCanvas.getContext('2d'));
  const svgBuffer = svgCanvas.toBuffer();
  const svgFileName = `qr_${designType}_${tagCode}.svg`;
  fs.writeFileSync(path.join(qrDir, svgFileName), svgBuffer);

  return {
    filePath,
    fileName,
    base64: `data:image/png;base64,${buffer.toString('base64')}`,
    publicUrl,
    qrImageUrl: `/uploads/qrcodes/${fileName}`,
    qrSvgUrl: `/uploads/qrcodes/${svgFileName}`,
  };
};

/**
 * Generate Circle Branded QR Code
 */
async function generateCircleQRCode(tagCode, publicUrl, filePath, fileName, sponsor = null, assetType = 'vehicle') {
  const size = 1200;
  const centerX = size / 2;
  const centerY = size / 2;

  const qrSize = 300;
  const qrBuffer = await QRCode.toBuffer(publicUrl, {
    errorCorrectionLevel: 'H', margin: 1, width: qrSize, color: { dark: '#000000', light: '#ffffff' }
  });
  const qrImage = await loadImage(qrBuffer);

  let logoImage = null;
  try {
    const logoRelPath = path.join(__dirname, '..', '..', 'public', 'images', 'new_logo.png');
    if (fs.existsSync(logoRelPath)) logoImage = await loadImage(logoRelPath);
  } catch (err) { }

  let sLogoImage = null;
  if (sponsor && sponsor.logo) {
    try {
      const sponsorLogoPath = path.join(__dirname, '..', '..', sponsor.logo);
      if (fs.existsSync(sponsorLogoPath)) sLogoImage = await loadImage(sponsorLogoPath);
    } catch (e) { }
  }

  const renderCtx = (ctx) => {
    ctx.beginPath();
    ctx.arc(centerX, centerY, size / 2 - 5, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#f1f5f9';
    ctx.stroke();

    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, centerY, size / 2 - 10, Math.PI, 2 * Math.PI);
    ctx.lineTo(centerX + size / 2, 480);
    ctx.lineTo(centerX - size / 2, 480);
    ctx.closePath();
    ctx.clip();

    const blueGrad = ctx.createLinearGradient(0, 0, 0, 480);
    blueGrad.addColorStop(0, '#003399');
    blueGrad.addColorStop(1, '#001a52');
    ctx.fillStyle = blueGrad;
    ctx.fillRect(0, 0, size, 480);
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(0, 920);
    ctx.lineTo(size, 920);
    ctx.lineTo(size, size);
    ctx.lineTo(0, size);
    ctx.closePath();
    ctx.clip();

    ctx.beginPath();
    ctx.arc(centerX, centerY, size / 2 - 10, 0, Math.PI * 2);
    const redGrad = ctx.createLinearGradient(0, 920, 0, size);
    redGrad.addColorStop(0, '#cc0000');
    redGrad.addColorStop(1, '#880000');
    ctx.fillStyle = redGrad;
    ctx.fill();
    ctx.restore();

    if (logoImage) {
      const logoWidth = 180;
      const logoAspect = logoImage.height / logoImage.width;
      const logoHeight = logoWidth * logoAspect;
      ctx.drawImage(logoImage, centerX - logoWidth / 2, 40, logoWidth, logoHeight);
    }

    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.font = 'bold 90px "CustomArial"';
    ctx.fillText('V-KAWACH', centerX, 360);

    ctx.font = 'bold 28px "CustomArial"';
    ctx.letterSpacing = "6px";
    ctx.globalAlpha = 0.8;
    ctx.fillText('SECURING YOUR WORLD', centerX, 410);

    ctx.font = 'bold 38px "CustomArial"';
    ctx.letterSpacing = "8px";
    ctx.globalAlpha = 1.0;
    const safetyLabel = assetType === 'pet' ? 'PET SAFETY' : 
                       (assetType === 'person' ? 'PERSONAL SAFETY' : 
                       (assetType === 'vehicle' ? 'VEHICLE SAFETY' : 
                       (assetType === 'student' ? 'STUDENT SAFETY' : 'EMPLOYEE SAFETY')));
    ctx.fillText(safetyLabel, centerX, 455);
    ctx.globalAlpha = 1.0;
    ctx.letterSpacing = "0px";

    ctx.fillStyle = '#000000';
    ctx.font = 'bold 22px "CustomArial"';
    ctx.letterSpacing = "10px";
    ctx.fillText(`${assetType.toUpperCase()} ID: ${tagCode}`, centerX, 525);
    ctx.letterSpacing = "0px";

    const qrTop = 550;
    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
    ctx.shadowBlur = 30;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.roundRect(centerX - qrSize / 2 - 10, qrTop - 10, qrSize + 20, qrSize + 20, 25);
    ctx.fill();
    ctx.restore();
    
    ctx.drawImage(qrImage, centerX - qrSize / 2, qrTop, qrSize, qrSize);

    if (sLogoImage) {
      const sLogoWidth = 140;
      const sLogoAspect = sLogoImage.height / sLogoImage.width;
      const sLogoHeight = sLogoWidth * sLogoAspect;
      ctx.fillStyle = '#94a3b8';
      ctx.font = 'bold 20px "CustomArial"';
      ctx.fillText('POWERED BY', centerX, 830);
      ctx.drawImage(sLogoImage, centerX - sLogoWidth / 2, 840, sLogoWidth, sLogoHeight);
    }

    ctx.fillStyle = '#002e8a';
    ctx.font = 'bold 22px "CustomArial"';
    ctx.fillText('A PRODUCT OF TARKSHYA SOLUTION', centerX, sponsor ? 895 : 885);

    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.font = 'bold 60px "CustomArial"';
    ctx.fillText('SCAN IN EMERGENCY', centerX, 1030);

    ctx.font = 'bold 30px "CustomArial"';
    ctx.fillText('FOR IMMEDIATE HELP & ALERTS', centerX, 1085);
  };

  // PNG
  const canvas = createCanvas(size, size);
  renderCtx(canvas.getContext('2d'));
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(filePath, buffer);

  // SVG
  const svgCanvas = createCanvas(size, size, 'svg');
  renderCtx(svgCanvas.getContext('2d'));
  const svgBuffer = svgCanvas.toBuffer();
  const svgFileName = `qr_circle_${tagCode}.svg`;
  fs.writeFileSync(path.join(qrDir, svgFileName), svgBuffer);

  return {
    filePath,
    fileName,
    base64: `data:image/png;base64,${buffer.toString('base64')}`,
    publicUrl,
    qrImageUrl: `/uploads/qrcodes/${fileName}`,
    qrSvgUrl: `/uploads/qrcodes/${svgFileName}`,
  };
}

/**
 * LANDSCAPE (Exact Credit Card Size: 3.37 x 2.125 inches)
 */
const generateLandscapeQRCode = async (tagCode, publicUrl, filePath, fileName, sponsor, assetType) => {
  const canvasWidth = 1011;
  const canvasHeight = 638;

  const qrSize = 280;
  const qrBuffer = await QRCode.toBuffer(publicUrl, {
    errorCorrectionLevel: 'H', margin: 1, width: qrSize, color: { dark: '#000000', light: '#ffffff' }
  });
  const qrImage = await loadImage(qrBuffer);

  let logoImage = null;
  try {
    const logoRelPath = path.join(__dirname, '..', '..', 'public', 'images', 'new_logo.png');
    if (fs.existsSync(logoRelPath)) logoImage = await loadImage(logoRelPath);
  } catch (err) { }

  const renderCtx = (ctx) => {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    const blueWidth = 400;
    const blueHeight = 540;
    const blueGrad = ctx.createLinearGradient(0, 0, 0, blueHeight);
    blueGrad.addColorStop(0, '#002e8a');
    blueGrad.addColorStop(1, '#001a52');
    ctx.fillStyle = blueGrad;
    ctx.fillRect(0, 0, blueWidth, blueHeight);

    const redHeight = 98;
    const redGrad = ctx.createLinearGradient(0, canvasHeight - redHeight, 0, canvasHeight);
    redGrad.addColorStop(0, '#cc0000');
    redGrad.addColorStop(1, '#880000');
    ctx.fillStyle = redGrad;
    ctx.fillRect(0, canvasHeight - redHeight, canvasWidth, redHeight);

    if (logoImage) {
      const logoWidth = 140;
      const logoAspect = logoImage.height / logoImage.width;
      const logoHeight = logoWidth * logoAspect;
      ctx.drawImage(logoImage, (blueWidth - logoWidth) / 2, 35, logoWidth, logoHeight);
    }

    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.font = 'bold 70px "CustomArial"';
    ctx.fillText('V-KAWACH', blueWidth / 2, 280);

    ctx.font = 'bold 24px "CustomArial"';
    ctx.letterSpacing = "6px";
    ctx.globalAlpha = 0.8;
    ctx.fillText('SECURING YOUR WORLD', blueWidth / 2, 335);

    ctx.font = 'bold 36px "CustomArial"';
    ctx.letterSpacing = "8px";
    ctx.globalAlpha = 1.0;
    const safetyLabel = assetType === 'pet' ? 'PET SAFETY' : 
                       (assetType === 'person' ? 'PERSONAL SAFETY' : 
                       (assetType === 'vehicle' ? 'VEHICLE SAFETY' : 
                       (assetType === 'student' ? 'STUDENT SAFETY' : 'EMPLOYEE SAFETY')));
    ctx.fillText(safetyLabel, blueWidth / 2, 400);
    ctx.globalAlpha = 1.0;
    ctx.letterSpacing = "0px";

    ctx.fillStyle = '#cbd5e1';
    ctx.fillRect(0, blueHeight - 2, blueWidth, 2);

    const rightAreaX = blueWidth;
    const rightAreaWidth = canvasWidth - blueWidth;
    
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 24px "CustomArial"';
    ctx.letterSpacing = "8px";
    ctx.fillText(`${assetType.toUpperCase()} ID: ${tagCode}`, rightAreaX + rightAreaWidth/2, 60);

    const qrBoxSize = 340;
    const qrBoxX = rightAreaX + (rightAreaWidth - qrBoxSize) / 2;
    const qrBoxY = 110;
    
    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
    ctx.shadowBlur = 30;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.roundRect(qrBoxX, qrBoxY, qrBoxSize, qrBoxSize, 30);
    ctx.fill();
    ctx.restore();

    ctx.drawImage(qrImage, qrBoxX + (qrBoxSize - qrSize)/2, qrBoxY + (qrBoxSize - qrSize)/2, qrSize, qrSize);

    ctx.fillStyle = '#002e8a';
    ctx.font = 'bold 22px "CustomArial"';
    ctx.fillText('A PRODUCT OF TARKSHYA SOLUTION', rightAreaX + rightAreaWidth/2, 475);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 50px "CustomArial"';
    ctx.fillText('SCAN IN EMERGENCY', canvasWidth / 2, canvasHeight - 52);
    
    ctx.font = 'bold 24px "CustomArial"';
    ctx.fillText('FOR IMMEDIATE HELP & ALERTS', canvasWidth / 2, canvasHeight - 12);
    ctx.letterSpacing = "0px";
  };

  // PNG
  const canvas = createCanvas(canvasWidth, canvasHeight);
  renderCtx(canvas.getContext('2d'));
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(filePath, buffer);

  // SVG Full Template
  const svgCanvas = createCanvas(canvasWidth, canvasHeight, 'svg');
  renderCtx(svgCanvas.getContext('2d'));
  const svgBuffer = svgCanvas.toBuffer();
  const svgFileName = `qr_landscape_${tagCode}.svg`;
  fs.writeFileSync(path.join(qrDir, svgFileName), svgBuffer);

  return {
    filePath,
    fileName,
    base64: `data:image/png;base64,${buffer.toString('base64')}`,
    publicUrl,
    qrImageUrl: `/uploads/qrcodes/${fileName}`,
    qrSvgUrl: `/uploads/qrcodes/${svgFileName}`,
  };
}

module.exports = { generateQRCode };
