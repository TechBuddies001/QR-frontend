const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const srcDir = path.join(__dirname, '../frontend');
const destDir = path.join(__dirname, 'src/app');

function processHtml(htmlContent, fullPath) {
    const dom = new JSDOM(htmlContent);
    const document = dom.window.document;
    
    let body = document.body;
    let head = document.head;
    if (!body) return null;
    
    let headReactNodes = '';
    let scriptTags = '';
    let cssLinks = '';
    
    if (head) {
        const links = head.querySelectorAll('link');
        links.forEach(l => { cssLinks += l.outerHTML + '\n'; });
        
        const styles = head.querySelectorAll('style');
        styles.forEach(s => { cssLinks += s.outerHTML + '\n'; });
        
        const scripts = head.querySelectorAll('script');
        let scriptIndex = 0;
        scripts.forEach(s => {
            if (s.src) {
                scriptTags += `<Script src="${s.src}" strategy="beforeInteractive" />\n`;
            } else {
                scriptTags += `<Script id="inline-script-${scriptIndex++}" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: \`${s.innerHTML.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />\n`;
            }
        });
    }
    
    let bodyClass = body.getAttribute('class') || '';
    
    let bodyHtml = body.innerHTML;
    bodyHtml = bodyHtml.replace(/href="([^"]+)\.html"/g, 'href="/$1"');
    bodyHtml = bodyHtml.replace(/window\.location\.href='([^']+)\.html'/g, "window.location.href='/$1'");
    
    bodyHtml = bodyHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$');
    cssLinks = cssLinks.replace(/`/g, '\\`').replace(/\$/g, '\\$');

    let safeOutput = `
import React from 'react';
import Script from 'next/script';

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: \`${cssLinks}\` }} />
      ${scriptTags}
      <div className="${bodyClass}" style={{minHeight: '100vh', width: '100%'}} dangerouslySetInnerHTML={{ __html: \`${bodyHtml}\` }} />
    </>
  );
}
`;
    return safeOutput;
}

function traverseAndProcess(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (item === 'node_modules' || item === '.git') continue;

        if (stat.isDirectory()) {
            traverseAndProcess(fullPath);
        } else if (fullPath.endsWith('.html')) {
            const content = fs.readFileSync(fullPath, 'utf8');
            const jsxCode = processHtml(content, fullPath);
            if (!jsxCode) continue;
            
            let relPathStr = path.relative(srcDir, fullPath);
            let routeDir = destDir;
            
            if (relPathStr === 'index.html') {
                routeDir = destDir;
            } else {
                let nameWithoutExt = relPathStr.replace('.html', '');
                routeDir = path.join(destDir, nameWithoutExt);
                fs.mkdirSync(routeDir, { recursive: true });
            }
            
            const outFilePath = path.join(routeDir, 'page.tsx');
            fs.writeFileSync(outFilePath, jsxCode, 'utf8');
            console.log('Created route:', outFilePath);
        }
    }
}

traverseAndProcess(srcDir);
