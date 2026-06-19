const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/tag/[tagCode]/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace hex codes with corresponding brand classes
content = content.replace(/\[#061B44\]/g, 'navy');
content = content.replace(/\[#04122E\]/g, 'navy-dark');
content = content.replace(/\[#16A34A\]/g, 'brand-green');
content = content.replace(/\[#15803D\]/g, 'brand-green-dark');
content = content.replace(/\[#F97316\]/g, 'brand-orange');
content = content.replace(/\[#EA580C\]/g, 'brand-orange-dark');
content = content.replace(/\[#DC2626\]/g, 'brand-red');
content = content.replace(/\[#B91C1C\]/g, 'brand-red-dark');
content = content.replace(/\[#2563EB\]/g, 'brand-blue');
content = content.replace(/\[#1D4ED8\]/g, 'brand-blue-dark');
content = content.replace(/\[#F8FAFC\]/g, 'brand-bg');
content = content.replace(/\[#F5B700\]/g, 'gold');

fs.writeFileSync(filePath, content);
console.log("Colors fixed.");
