const http = require('http');

const options = {
  hostname: 'localhost',
  port: 5001,
  path: '/api/admin/login',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const req = http.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    const { token } = JSON.parse(data);
    
    // Get product
    const getOptions = {
      hostname: 'localhost',
      port: 5001,
      path: '/api/products/3151e1e2-49cb-4859-bcdd-a76f9e63bb2a',
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
    };
    http.request(getOptions, (res2) => {
      let data2 = '';
      res2.on('data', (c) => data2 += c);
      res2.on('end', () => {
        console.log("Current Product:", JSON.parse(data2).product.categoryId);
      });
    }).end();
  });
});
req.write(JSON.stringify({ email: 'admin@tarkshya.com', password: 'password123' }));
req.end();
