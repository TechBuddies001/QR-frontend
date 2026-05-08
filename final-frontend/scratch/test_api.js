const axios = require('axios');
const jwt = require('jsonwebtoken');

(async () => {
  try {
    const token = jwt.sign({ id: '5e3770fe-26b1-406e-a8cf-481032374a9f', role: 'user' }, 'tarkshya_super_secret_jwt_key_2024');
    const dash = await axios.get('http://localhost:5001/api/user/dashboard', {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log("Orders:", JSON.stringify(dash.data.orders, null, 2));
  } catch (err) {
    console.error("Error:", err.response ? err.response.data : err.message);
  }
})();
