
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';

import Layout from './components/Layout';
import Home from './pages/Home';
import SmartQR from './pages/SmartQR';
import CloudMonitoring from './pages/CloudMonitoring';
import GPSTracking from './pages/GPSTracking';
import SocialInitiative from './pages/SocialInitiative';

import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import PublicProfile from './pages/PublicProfile';
import CategoryDetails from './pages/CategoryDetails';
import ProductDetails from './pages/ProductDetails';
import ScrollToTop from './components/ScrollToTop';

import { CartProvider } from './context/CartContext';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CartProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="smart-qr" element={<SmartQR />} />
              <Route path="cloud-monitoring" element={<CloudMonitoring />} />
              <Route path="gps-tracking" element={<GPSTracking />} />
              <Route path="social-initiative" element={<SocialInitiative />} />
              <Route path="category/:id" element={<CategoryDetails />} />
              <Route path="product/:id" element={<ProductDetails />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="order-success/:orderNumber" element={<OrderSuccess />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/scan/:id" element={<PublicProfile />} />
          </Routes>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
