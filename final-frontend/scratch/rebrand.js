const fs = require('fs');
const path = require('path');

const directories = [
  path.join(__dirname, '../mobile-app'),
  path.join(__dirname, '../src')
];

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Global branding replacements
  content = content.replace(/V-KAWACH/g, 'Nek Insan');
  content = content.replace(/V-Kawach/g, 'Nek Insan');
  content = content.replace(/Tarkshya Solution/g, 'Nek Insan');
  content = content.replace(/Tarkshya Protocol/g, 'Nek Insan System');
  
  // Theme changes
  content = content.replace(/theme\.colors\.gold/g, 'theme.colors.primary');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated', filePath);
  }
}

function processDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.expo' || file === '.next') continue;
    
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      replaceInFile(fullPath);
    }
  }
}

for (const dir of directories) {
  processDir(dir);
}

// Special case: replace V-KAWACH in App.js directly
replaceInFile(path.join(__dirname, '../mobile-app/App.js'));
