const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content.replace(/Nek Insan/gi, 'V-Kawach');
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walk(dir) {
  let list = fs.readdirSync(dir);
  for (let file of list) {
    if (file === 'node_modules' || file === '.next' || file === '.git') continue;
    let filePath = path.resolve(dir, file);
    let stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      walk(filePath);
    } else {
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
        replaceInFile(filePath);
      }
    }
  }
}

walk(path.resolve('./src'));
