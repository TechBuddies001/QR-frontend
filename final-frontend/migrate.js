const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const prettier = require('prettier');

const inputDir = path.join(__dirname, 'html_templates');
const appDir = path.join(__dirname, 'src', 'app');
const componentsDir = path.join(__dirname, 'src', 'components');

fs.mkdirSync(appDir, { recursive: true });
fs.mkdirSync(componentsDir, { recursive: true });

const mappings = {
  'admin_login_v3.html': 'admin/login',
  'admin_dashboard_v3.html': 'admin/dashboard',
  'generate_qr_v3.html': 'admin/qr/generate',
  'tag_management_v3.html': 'admin/tags',
  'per_tag_scan_view_v3.html': 'admin/tags/[tagId]',
  'scan_history_v3.html': 'admin/scans',
  'call_logs_v3.html': 'admin/calls',
  'sms_logs_v3.html': 'admin/sms',
  'plans_packs_v3.html': 'admin/plans',
  'subscriptions_v3.html': 'admin/subscriptions',
  'sponsor_management_v3.html': 'admin/sponsors',
  'settings_v3.html': 'admin/settings',
  'public_landing_page_v3.html': 'public-landing',
};

function htmlToJsx(html) {
  if (!html) return '';
  return html
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/tabindex=/g, 'tabIndex=')
    .replace(/viewbox=/gi, 'viewBox=')
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/fill-rule=/gi, 'fillRule=')
    .replace(/clip-rule=/gi, 'clipRule=')
    .replace(/stroke-dasharray=/gi, 'strokeDasharray=')
    .replace(/stroke-dashoffset=/gi, 'strokeDashoffset=')
    .replace(/onclick="[^"]*"/gi, '')
    .replace(/onsubmit="[^"]*"/gi, '')
    .replace(/<input([^>]*?)(?<!\/)>/g, '<input$1 />')
    .replace(/<img([^>]*?)(?<!\/)>/g, '<img$1 />')
    .replace(/<hr([^>]*?)(?<!\/)>/g, '<hr$1 />')
    .replace(/<br([^>]*?)(?<!\/)>/g, '<br$1 />')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/style="([^"]*)"/g, function(match, styles) {
      // Very basic style converter, usually enough for background-image
      let reactStyles = {};
      styles.split(';').forEach(s => {
        if (!s.trim()) return;
        const [key, val] = s.split(':');
        if (key && val) {
          const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
          reactStyles[camelKey] = val.trim();
        }
      });
      return `style={${JSON.stringify(reactStyles)}}`;
    });
}

async function run() {
  // Extract Shared Layout from admin_dashboard_v3
  const dashboardHtml = fs.readFileSync(path.join(inputDir, 'admin_dashboard_v3.html'), 'utf-8');
  const $dashboard = cheerio.load(dashboardHtml);
  
  const sidebarHtml = htmlToJsx($dashboard.html($dashboard('aside')));
  const headerHtml = htmlToJsx($dashboard.html($dashboard('header')));

  const sidebarComp = `export default function Sidebar() { return ( ${sidebarHtml} ) }`;
  const headerComp = `export default function Header() { return ( ${headerHtml} ) }`;
  
  fs.writeFileSync(path.join(componentsDir, 'Sidebar.tsx'), await prettier.format(sidebarComp, { parser: 'babel-ts' }));
  fs.writeFileSync(path.join(componentsDir, 'Header.tsx'), await prettier.format(headerComp, { parser: 'babel-ts' }));

  // Create general Admin Layout wrapper
  const adminLayout = `
    import Sidebar from '@/components/Sidebar';
    import Header from '@/components/Header';

    export default function AdminLayout({ children }: { children: React.ReactNode }) {
      return (
        <div className="flex min-h-screen bg-[#f8f9fc] dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 font-display">
          <Sidebar />
          <main className="flex-1 ml-64 p-8">
            <Header />
            {children}
          </main>
        </div>
      );
    }
  `;
  const adminLayoutPath = path.join(appDir, 'admin');
  fs.mkdirSync(adminLayoutPath, { recursive: true });
  fs.writeFileSync(path.join(adminLayoutPath, 'layout.tsx'), await prettier.format(adminLayout, { parser: 'babel-ts' }));

  for (const [filename, routePath] of Object.entries(mappings)) {
    const fullPath = path.join(inputDir, filename);
    if (!fs.existsSync(fullPath)) continue;

    console.log('Processing', filename, '->', routePath);
    
    const html = fs.readFileSync(fullPath, 'utf-8');
    const $ = cheerio.load(html);
    
    let contentHtml = '';
    
    if (routePath.startsWith('admin/') && routePath !== 'admin/login') {
      // Admin pages share layout
      // Extract content from <main>, excluding <header>
      $('header').remove();
      contentHtml = htmlToJsx($('main').html());
    } else {
      // Standalone pages
      contentHtml = htmlToJsx($('body').html());
      
      // Standalone layout wrapper if needed
      if (routePath === 'admin/login') {
        const bodyClass = $('body').attr('class');
        contentHtml = `<div className="${bodyClass}">${contentHtml}</div>`;
      }
    }

    const pageContent = `
      export default function Page() {
        return (
          <>
            ${contentHtml}
          </>
        )
      }
    `;

    const destDir = path.join(appDir, routePath);
    fs.mkdirSync(destDir, { recursive: true });
    
    try {
      const formatted = await prettier.format(pageContent, { parser: 'babel-ts' });
      fs.writeFileSync(path.join(destDir, 'page.tsx'), formatted);
    } catch (e) {
      console.log('Prettier failed on', routePath, e.message);
      fs.writeFileSync(path.join(destDir, 'page.tsx'), pageContent); // raw fallback
    }
  }
}

run().catch(console.error);
