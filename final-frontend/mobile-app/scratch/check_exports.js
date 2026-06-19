const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'node_modules', 'lucide-react-native', 'dist', 'cjs', 'lucide-react-native.js');
if (!fs.existsSync(filePath)) {
  console.error('File not found:', filePath);
  process.exit(1);
}

const content = fs.readFileSync(filePath, 'utf8');

// The icons we import in DashboardScreen:
const dashboardIcons = [
  'Menu',
  'ShoppingCart',
  'Bell',
  'QrCode',
  'Shield',
  'Plus',
  'ArrowRight',
  'ClipboardList',
  'Zap',
  'MapPin',
  'Play',
  'Gift',
  'ShoppingBag',
  'PhoneCall',
  'TriangleAlert',
  'LogOut',
  'User',
  'ShieldCheck',
  'CircleQuestionMark',
  'Car'
];

// The icons we import in VisitorTagScreen:
const visitorIcons = [
  'Shield',
  'Phone',
  'TriangleAlert',
  'Car',
  'Info',
  'MapPin',
  'User',
  'ShieldCheck',
  'BellRing'
];

const allIcons = Array.from(new Set([...dashboardIcons, ...visitorIcons]));

console.log('Checking icons...');
for (const icon of allIcons) {
  const pattern = new RegExp(`exports\\.${icon}\\s*=`, 'i');
  const exists = pattern.test(content);
  console.log(`- ${icon}: ${exists ? 'OK' : 'MISSING'}`);
}
