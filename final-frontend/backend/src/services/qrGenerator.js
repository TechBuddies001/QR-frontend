const QRCode = require('qrcode');
const path = require('path');
const { createCanvas, loadImage, registerFont } = require('canvas');
const fs = require('fs');
const { qrDir } = require('../middleware/upload');
const prisma = require('../lib/prisma');

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
 * Fetch QR Design Configuration from Database
 */
async function getQRConfig() {
  try {
    const config = await prisma.setting.findUnique({ where: { key: 'qr_design_config' } });
    return config ? JSON.parse(config.value) : { centerText: 'K-V', centerColor: '#002e8a' };
  } catch (e) {
    return { centerText: 'K-V', centerColor: '#002e8a' };
  }
}

/**
 * Generate branded QR code with different designs
 * Support for Standard vertical tag, New Circle design, and Minimal (Raw QR)
 */
const generateQRCode = async (tagCode, designType = 'standard', sponsor = null, assetType = 'employee', customAssetType = null) => {
  const baseUrl = assetType === 'product' 
    ? (process.env.PUBLIC_PRODUCT_BASE_URL || (process.env.NODE_ENV === 'production' ? 'https://tarkshyasolution.in/verify' : 'http://localhost:3000/verify'))
    : (process.env.PUBLIC_TAG_BASE_URL || (process.env.NODE_ENV === 'production' ? 'https://tarkshyasolution.in/tag' : 'http://localhost:3000/tag'));
  
  const publicUrl = `${baseUrl}/${tagCode}`;
  const fileName = `qr_${designType}_${tagCode}.png`;
  const filePath = path.join(qrDir, fileName);

  const config = await getQRConfig();

  if (designType === 'minimal') {
    return await generateMinimalQRCode(tagCode, publicUrl, filePath, fileName, config);
  } else if (designType === 'circle') {
    return await generateCircleQRCode(tagCode, publicUrl, filePath, fileName, sponsor, assetType, customAssetType, config);
  } else if (designType === 'landscape') {
    return await generateLandscapeQRCode(tagCode, publicUrl, filePath, fileName, sponsor, assetType, customAssetType, config);
  } else if (designType === 'raw') {
    const qrBuffer = await QRCode.toBuffer(publicUrl, { 
      errorCorrectionLevel: 'H', 
      margin: 1, 
      width: 1024,
      color: { dark: '#000000', light: '#ffffff' }
    });
    fs.writeFileSync(filePath, qrBuffer);
    return {
      filePath,
      fileName,
      qrImageUrl: `/uploads/qrcodes/${fileName}`,
    };
  }

  // DEFAULT: Standard Vertical Design
  const canvasWidth = 630;
  const canvasHeight = 1004;
  const logoTop = 155; 
  
  const qrSize = 220;
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
    // 1. White Background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // 2. Blue Header
    const blueHeight = 480;
    const bgGradient = ctx.createLinearGradient(0, 0, 0, blueHeight);
    bgGradient.addColorStop(0, '#002e8a');
    bgGradient.addColorStop(1, '#001a52');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, canvasWidth, blueHeight);

    // 3. Divider
    const sepGradient = ctx.createLinearGradient(0, blueHeight, 0, blueHeight + 8);
    sepGradient.addColorStop(0, '#737373');
    sepGradient.addColorStop(0.3, '#d4d4d4');
    sepGradient.addColorStop(1, '#f5f5f5');
    ctx.fillStyle = sepGradient;
    ctx.fillRect(0, blueHeight, canvasWidth, 8);

    // 4. Branding
    if (logoImage) {
      const logoWidth = 115;
      const logoAspect = logoImage.height / logoImage.width;
      const logoHeight = logoWidth * logoAspect;
      ctx.drawImage(logoImage, (canvasWidth - logoWidth) / 2, logoTop, logoWidth, logoHeight);
      
      const textStartY = logoTop + logoHeight + 20;

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 48px "CustomArial"';
      ctx.textAlign = 'center';
      ctx.fillText('V-KAWACH', canvasWidth / 2, textStartY + 45);

      ctx.font = 'bold 16px "CustomArial"';
      ctx.letterSpacing = "3px";
      ctx.globalAlpha = 0.8;
      ctx.fillText('SECURING YOUR WORLD', canvasWidth / 2, textStartY + 80);

      ctx.font = 'bold 26px "CustomArial"';
      ctx.letterSpacing = "4px";
      ctx.globalAlpha = 1.0;
      
      let safetyLabelStd = assetType === 'pet' ? 'PET SAFETY' : 
                            (assetType === 'person' ? 'PERSONAL SAFETY' : 
                            (assetType === 'vehicle' ? 'VEHICLE SAFETY' : 
                            (assetType === 'student' ? 'STUDENT SAFETY' : 
                            (assetType === 'product' ? 'PRODUCT SAFETY' : 'EMPLOYEE SAFETY'))));
      
      if (assetType === 'other' && customAssetType) {
        safetyLabelStd = `${customAssetType.toUpperCase()} SAFETY`;
      } else if (assetType === 'other') {
        safetyLabelStd = 'ASSET SAFETY';
      }

      ctx.fillText(safetyLabelStd, canvasWidth / 2, textStartY + 120);
    }
    ctx.globalAlpha = 1.0;
    ctx.letterSpacing = "0px";

    // 5. ID Text
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 18px "CustomArial"';
    ctx.letterSpacing = "5px";
    const idPrefix = (assetType === 'other' && customAssetType) ? customAssetType : assetType;
    ctx.fillText(`${idPrefix.toUpperCase()} ID: ${tagCode}`, canvasWidth / 2, blueHeight + 40);
    ctx.letterSpacing = "0px";

    // 6. QR Box & Image
    const boxSize = 280;
    const boxX = (canvasWidth - boxSize) / 2;
    const boxY = blueHeight + 70;
    
    ctx.save();
    ctx.shadowColor = 'rgba(0, 0, 0, 0.15)';
    ctx.shadowBlur = 20;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.roundRect(boxX, boxY, boxSize, boxSize, 20);
    ctx.fill();
    ctx.restore();

    ctx.drawImage(qrImage, (canvasWidth - qrSize) / 2, boxY + (boxSize - qrSize) / 2, qrSize, qrSize);

    // DRAW CENTER LOGO/TEXT if config exists
    if (config.centerText) {
      drawCenterText(ctx, (canvasWidth / 2), boxY + (boxSize / 2), 45, config);
    }

    // 7. Footer
    const redHeight = 145;
    const redY = canvasHeight - redHeight;
    const redGradient = ctx.createLinearGradient(0, redY, 0, canvasHeight);
    redGradient.addColorStop(0, '#b31919');
    redGradient.addColorStop(1, '#7a0a0a');
    ctx.fillStyle = redGradient;
    ctx.fillRect(0, redY, canvasWidth, redHeight);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 42px "CustomArial"';
    ctx.fillText('SCAN IN EMERGENCY', canvasWidth / 2, redY + 65);

    ctx.font = 'bold 20px "CustomArial"';
    ctx.fillText('FOR IMMEDIATE HELP & ALERTS', canvasWidth / 2, redY + 105);

    // 8. Sponsored Text
    if (sLogoImage) {
      const sLogoWidth = 60;
      const sLogoAspect = sLogoImage.height / sLogoImage.width;
      const sLogoHeight = sLogoWidth * sLogoAspect;
      ctx.fillStyle = '#94a3b8';
      ctx.font = 'bold 10px "CustomArial"';
      ctx.fillText('SPONSORED BY', canvasWidth / 2, boxY + boxSize + 20);
      ctx.drawImage(sLogoImage, (canvasWidth - sLogoWidth) / 2, boxY + boxSize + 27, sLogoWidth, sLogoHeight);
    } else {
      ctx.fillStyle = '#002e8a';
      ctx.font = 'bold 12px "CustomArial"';
      ctx.fillText('A PRODUCT OF TARKSHYA SOLUTION', canvasWidth / 2, redY - 15);
    }
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
 * Generate Minimal QR Code (Raw QR only for FMCG etc)
 */
async function generateMinimalQRCode(tagCode, publicUrl, filePath, fileName, config) {
  const size = 500;
  const qrBuffer = await QRCode.toBuffer(publicUrl, { errorCorrectionLevel: 'H', margin: 1, width: size });
  const qrImage = await loadImage(qrBuffer);

  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(qrImage, 0, 0, size, size);

  if (config.centerText) {
    drawCenterText(ctx, size / 2, size / 2, size * 0.18, config);
  }

  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(filePath, buffer);

  const svgCanvas = createCanvas(size, size, 'svg');
  const svgCtx = svgCanvas.getContext('2d');
  svgCtx.drawImage(qrImage, 0, 0, size, size);
  if (config.centerText) drawCenterText(svgCtx, size / 2, size / 2, size * 0.18, config);
  const svgFileName = `qr_minimal_${tagCode}.svg`;
  fs.writeFileSync(path.join(qrDir, svgFileName), svgCanvas.toBuffer());

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
 * Helper to draw text in the center of the QR
 */
function drawCenterText(ctx, x, y, size, config) {
  const text = config.centerText || 'K-V';
  const padding = size * 0.2;
  
  ctx.font = `bold ${size}px "CustomArial"`;
  const metrics = ctx.measureText(text);
  const textWidth = metrics.width;
  const textHeight = size;

  // Draw background white box
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(x - textWidth/2 - padding, y - textHeight/2 - padding, textWidth + padding*2, textHeight + padding*2);

  // Draw text
  ctx.fillStyle = config.centerColor || '#002e8a';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, x, y);
}

/**
 * Generate Circle Branded QR Code
 */
async function generateCircleQRCode(tagCode, publicUrl, filePath, fileName, sponsor, assetType, customAssetType, config) {
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
    ctx.clearRect(0, 0, size, size);
    ctx.beginPath();
    ctx.arc(centerX, centerY, size / 2 - 10, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();

    ctx.save();
    ctx.beginPath();
    ctx.arc(centerX, centerY, size / 2 - 10, 0, Math.PI * 2);
    ctx.clip();

    // Blue Section
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

    // Red Section
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
    
    let safetyLabel = assetType === 'pet' ? 'PET SAFETY' : 
                       (assetType === 'person' ? 'PERSONAL SAFETY' : 
                       (assetType === 'vehicle' ? 'VEHICLE SAFETY' : 
                       (assetType === 'student' ? 'STUDENT SAFETY' : 
                       (assetType === 'product' ? 'PRODUCT SAFETY' : 'EMPLOYEE SAFETY'))));
    
    if (assetType === 'other' && customAssetType) {
      safetyLabel = `${customAssetType.toUpperCase()} SAFETY`;
    } else if (assetType === 'other') {
      safetyLabel = 'ASSET SAFETY';
    }

    ctx.fillText(safetyLabel, centerX, 455);
    ctx.globalAlpha = 1.0;
    ctx.letterSpacing = "0px";

    ctx.fillStyle = '#000000';
    ctx.font = 'bold 22px "CustomArial"';
    ctx.letterSpacing = "10px";
    const idPrefix = (assetType === 'other' && customAssetType) ? customAssetType : assetType;
    ctx.fillText(`${idPrefix.toUpperCase()} ID: ${tagCode}`, centerX, 525);
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

    // Center Logo
    if (config.centerText) {
      drawCenterText(ctx, centerX, qrTop + (qrSize / 2), 60, config);
    }

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

    ctx.restore();
  };

  const canvas = createCanvas(size, size);
  renderCtx(canvas.getContext('2d'));
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(filePath, buffer);

  const svgCanvas = createCanvas(size, size, 'svg');
  renderCtx(svgCanvas.getContext('2d'));
  const svgFileName = `qr_circle_${tagCode}.svg`;
  fs.writeFileSync(path.join(qrDir, svgFileName), svgCanvas.toBuffer());

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
 * LANDSCAPE Design
 */
async function generateLandscapeQRCode(tagCode, publicUrl, filePath, fileName, sponsor, assetType, customAssetType, config) {
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
    
    let safetyLabel = assetType === 'pet' ? 'PET SAFETY' : 
                       (assetType === 'person' ? 'PERSONAL SAFETY' : 
                       (assetType === 'vehicle' ? 'VEHICLE SAFETY' : 
                       (assetType === 'student' ? 'STUDENT SAFETY' : 
                       (assetType === 'product' ? 'PRODUCT SAFETY' : 'EMPLOYEE SAFETY'))));
    
    if (assetType === 'other' && customAssetType) {
      safetyLabel = `${customAssetType.toUpperCase()} SAFETY`;
    } else if (assetType === 'other') {
      safetyLabel = 'ASSET SAFETY';
    }

    ctx.fillText(safetyLabel, blueWidth / 2, 400);
    ctx.globalAlpha = 1.0;
    ctx.letterSpacing = "0px";

    const rightAreaX = blueWidth;
    const rightAreaWidth = canvasWidth - blueWidth;
    
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 24px "CustomArial"';
    ctx.letterSpacing = "8px";
    const idPrefix = (assetType === 'other' && customAssetType) ? customAssetType : assetType;
    ctx.fillText(`${idPrefix.toUpperCase()} ID: ${tagCode}`, rightAreaX + rightAreaWidth/2, 60);

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

    if (config.centerText) {
      drawCenterText(ctx, qrBoxX + (qrBoxSize / 2), qrBoxY + (qrBoxSize / 2), 60, config);
    }

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

  const canvas = createCanvas(canvasWidth, canvasHeight);
  renderCtx(canvas.getContext('2d'));
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(filePath, buffer);

  const svgCanvas = createCanvas(canvasWidth, canvasHeight, 'svg');
  renderCtx(svgCanvas.getContext('2d'));
  const svgFileName = `qr_landscape_${tagCode}.svg`;
  fs.writeFileSync(path.join(qrDir, svgFileName), svgCanvas.toBuffer());

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
