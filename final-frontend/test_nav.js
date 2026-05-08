const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Listen to console logs
  page.on('console', msg => console.log(`[Browser Console ${msg.type()}] ${msg.text()}`));
  page.on('pageerror', error => console.log(`[Browser PageError] ${error.message}`));

  console.log("Navigating to dashboard...");
  
  // Set localStorage to bypass login
  await page.goto('http://localhost:3001/admin/login');
  await page.evaluate(() => {
    localStorage.setItem('admin_token', 'test-token');
    localStorage.setItem('admin_user', JSON.stringify({role: 'superadmin', name: 'Admin', permissions: []}));
  });

  await page.goto('http://localhost:3001/admin/dashboard');
  await page.waitForTimeout(2000);
  
  console.log("Current URL:", page.url());
  console.log("Clicking on 'Tags' link...");
  
  // Click on Tags link in sidebar
  await page.click('text=Tags');
  await page.waitForTimeout(2000);
  
  console.log("Current URL after click:", page.url());
  
  console.log("Clicking on 'Users' link...");
  await page.click('text=Users');
  await page.waitForTimeout(2000);
  
  console.log("Current URL after click:", page.url());

  await browser.close();
})();
