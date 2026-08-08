
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
import B2BSolutions from './pages/B2BSolutions';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import PublicProfile from './pages/PublicProfile';
import CategoryDetails from './pages/CategoryDetails';
import ProductDetails from './pages/ProductDetails';
import ScrollToTop from './components/ScrollToTop';
import BannerBlog from './pages/BannerBlog';
import ServiceDetails from './pages/ServiceDetails';
import ContactUs from './pages/ContactUs';
import CaseStudies from './pages/CaseStudies';
import Emergency from './pages/Emergency';

import { CartProvider } from './context/CartContext';
import { LanguageProvider } from './context/LanguageContext';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <LanguageProvider>
        <CartProvider>
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="smart-qr" element={<SmartQR />} />
                <Route path="cloud-monitoring" element={
                  <div style={{ minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '60px 20px', background: 'linear-gradient(135deg, #0a0a1a 0%, #0d1b2a 50%, #1a1a2e 100%)' }}>
                    <div style={{ marginBottom: '24px', width: '90px', height: '90px', borderRadius: '50%', background: 'linear-gradient(135deg, #f59e0b, #ef4444)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 40px rgba(245,158,11,0.4)' }}>
                      <svg width="44" height="44" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
                    </div>
                    <div style={{ display: 'inline-block', background: 'linear-gradient(90deg, #f59e0b, #ef4444)', color: '#fff', fontSize: '11px', fontWeight: '800', padding: '4px 14px', borderRadius: '20px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '20px' }}>Coming Soon</div>
                    <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: '900', color: '#fff', marginBottom: '16px', lineHeight: 1.2 }}>Cloud Monitoring</h1>
                    <p style={{ fontSize: '16px', color: '#94a3b8', maxWidth: '480px', lineHeight: 1.7, marginBottom: '36px' }}>
                      We're building something powerful. Our Cloud Monitoring suite for real-time asset surveillance, alerts & analytics is launching very soon. Stay tuned!
                    </p>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                      {['Real-time Alerts', 'Asset Tracking', 'Cloud Dashboard', 'AI Analytics'].map(f => (
                        <span key={f} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: '#cbd5e1', fontSize: '13px', fontWeight: '600', padding: '8px 16px', borderRadius: '30px' }}>{f}</span>
                      ))}
                    </div>
                  </div>
                } />

                <Route path="gps-tracking" element={<GPSTracking />} />
                <Route path="social-initiative" element={<SocialInitiative />} />
                <Route path="b2b-solutions" element={<B2BSolutions />} />
                <Route path="category/:id" element={<CategoryDetails />} />
                <Route path="product/:id" element={<ProductDetails />} />
                <Route path="service/:id" element={<ServiceDetails />} />
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="order-success/:orderNumber" element={<OrderSuccess />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="contact" element={<ContactUs />} />
                <Route path="case-studies" element={<CaseStudies />} />
                <Route path="emergency" element={<Emergency />} />
              </Route>
              <Route path="/dashboard" element={<UserDashboard />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/scan/:id" element={<PublicProfile />} />
              <Route path="/san/:id" element={<PublicProfile />} />
              <Route path="/tag/:id" element={<PublicProfile />} />
              <Route path="/banner/:id" element={<BannerBlog />} />
              <Route path="*" element={<div style={{ padding: '100px', textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>Page Not Found (404)</div>} />
            </Routes>
            <Chatbot />
          </Router>
        </CartProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
