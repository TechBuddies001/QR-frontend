const fs = require('fs');

const transformColors = (file) => {
    let content = fs.readFileSync(file, 'utf8');

    // Backgrounds
    content = content.replace(/bg-\[#f4f6f8\]/g, 'bg-[#040D1F]');
    content = content.replace(/bg-white/g, 'bg-[#0B1A33]');
    content = content.replace(/bg-gray-50/g, 'bg-[#0B1A33]');
    content = content.replace(/bg-\[#f0f0f0\]/g, 'bg-white/5');
    content = content.replace(/bg-\[#f0fdf4\]/g, 'bg-[#C9A84C]/10');
    content = content.replace(/bg-\[#eef6ff\]/g, 'bg-white/5');
    
    // Text colors
    content = content.replace(/text-\[#0B1A33\]/g, 'text-white');
    content = content.replace(/text-\[#10B981\]/g, 'text-[#C9A84C]');
    content = content.replace(/text-\[#166534\]/g, 'text-[#C9A84C]');
    content = content.replace(/text-gray-700/g, 'text-gray-200');
    content = content.replace(/text-gray-600/g, 'text-gray-300');
    content = content.replace(/text-gray-500/g, 'text-gray-400');
    content = content.replace(/text-\[#3b82f6\]/g, 'text-blue-400');
    content = content.replace(/text-\[#8b5cf6\]/g, 'text-[#C9A84C]');
    content = content.replace(/text-\[#4f46e5\]/g, 'text-[#C9A84C]');
    
    // Borders
    content = content.replace(/border-gray-100/g, 'border-white/10');
    content = content.replace(/border-gray-200/g, 'border-white/10');
    content = content.replace(/border-\[#bbf7d0\]/g, 'border-[#C9A84C]/20');
    content = content.replace(/border-\[#d0e3ff\]/g, 'border-white/10');
    
    // Action Buttons
    content = content.replace(/bg-\[#16a34a\]/g, 'bg-[#112240]');
    content = content.replace(/shadow-\[0_4px_15px_rgba\(22,163,74,0\.3\)\]/g, 'border border-[#203659]');
    
    content = content.replace(/bg-\[#25D366\]/g, 'bg-[#112240]');
    content = content.replace(/shadow-\[0_4px_15px_rgba\(37,211,102,0\.3\)\]/g, 'border border-[#203659]');
    
    content = content.replace(/bg-\[#ef4444\]/g, 'bg-[#112240]');
    content = content.replace(/shadow-\[0_4px_15px_rgba\(239,68,68,0\.3\)\]/g, 'border border-[#203659]');
    
    content = content.replace(/bg-\[#f97316\]/g, 'bg-[#112240]');
    content = content.replace(/shadow-\[0_4px_15px_rgba\(249,115,22,0\.3\)\]/g, 'border border-[#203659]');

    // Other specific elements
    content = content.replace(/bg-\[#10B981\]/g, 'bg-[#C9A84C]');
    content = content.replace(/bg-\[#8b5cf6\]/g, 'bg-[#C9A84C]');
    content = content.replace(/text-blue-600/g, 'text-[#C9A84C]');
    content = content.replace(/border-white/g, 'border-[#0B1A33]');

    fs.writeFileSync(file, content);
};

transformColors('src/app/scan/[productCode]/page.tsx');
transformColors('src/app/tag/[tagCode]/page.tsx');
console.log('Transformed colors!');
