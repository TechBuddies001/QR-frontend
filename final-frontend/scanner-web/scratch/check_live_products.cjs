const axios = require('axios');

async function checkProducts() {
    try {
        const response = await axios.get('https://tarkshyasolution.in/api/products?type=SAFETY');
        console.log('Products:', JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.error('Error fetching products:', error.message);
    }
}

checkProducts();
