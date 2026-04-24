
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, CreditCard, Truck, Lock, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Section from '../components/Section';
import Button from '../components/Button';
import api from '../lib/api';
import toast from 'react-hot-toast';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const CheckoutWrapper = styled.div`
  padding: 120px 0 80px;
  background: #f8f9fa;
  min-height: 90vh;
  background-image: radial-gradient(circle at 90% 10%, rgba(201, 168, 76, 0.05) 0%, transparent 60%);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  animation: ${fadeIn} 0.6s ease-out;
  @media (min-width: 1024px) {
    grid-template-columns: 1.2fr 0.8fr;
  }
`;

const FormCard = styled.div`
  background: white;
  padding: 40px;
  border-radius: 32px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.05);

  h2 { 
    font-size: 1.8rem; 
    font-weight: 900; 
    color: #0b1a33; 
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    gap: 15px;
    letter-spacing: -0.5px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
  label { 
    display: block; 
    margin-bottom: 8px; 
    font-weight: 800; 
    color: #0b1a33; 
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    opacity: 0.6;
  }
  input, textarea {
    width: 100%;
    padding: 15px 20px;
    border: 2px solid #f0f2f5;
    border-radius: 18px;
    font-family: inherit;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: #f8f9fa;
    color: #0b1a33;
    font-weight: 600;
    &:focus {
      outline: none;
      border-color: #C9A84C;
      background: white;
      box-shadow: 0 10px 30px rgba(201, 168, 76, 0.1);
    }
    &::placeholder { color: #ccc; font-weight: 400; }
  }
`;

const OrderSummary = styled.div`
  background: #0b1a33;
  padding: 45px;
  border-radius: 40px;
  color: white;
  height: fit-content;
  position: sticky;
  top: 120px;
  box-shadow: 0 40px 80px rgba(11, 26, 51, 0.3);

  h3 { 
    font-size: 1.8rem; 
    font-weight: 900; 
    margin-bottom: 35px;
    color: #C9A84C;
  }
`;

const ItemSmall = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  .name { 
    font-weight: 700; 
    font-size: 1rem;
    span { opacity: 0.5; margin-left: 10px; font-weight: 400; }
  }
  .price { font-weight: 900; color: white; }
`;

const TotalBox = styled.div`
  margin-top: 35px;
  .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
    opacity: 0.6;
    font-weight: 600;
    font-size: 0.95rem;
  }
  .grand-total {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid rgba(255,255,255,0.1);
    font-size: 2.2rem;
    font-weight: 900;
    color: #C9A84C;
    letter-spacing: -1px;
  }
`;

const PaymentMethod = styled.div`
  margin-top: 40px;
  background: rgba(255,255,255,0.03);
  padding: 30px;
  border-radius: 24px;
  border: 1px solid rgba(201, 168, 76, 0.2);
  
  .title {
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 900;
    margin-bottom: 12px;
    color: #C9A84C;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  p { font-size: 0.9rem; opacity: 0.5; line-height: 1.6; font-weight: 500; }
`;

const Checkout = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: ''
  });

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    const userProfile = localStorage.getItem('user_profile');
    
    if (!token) {
      toast.error('Please login to complete your purchase');
      navigate('/login?redirect=checkout');
      return;
    }

    if (userProfile) {
      try {
        const user = JSON.parse(userProfile);
        setFormData(prev => ({
          ...prev,
          name: user.name || '',
          email: user.email || '',
          phone: user.phone || ''
        }));
      } catch (err) {
        console.error("Invalid user profile in localStorage", err);
      }
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (cart.length === 0) return;
    
    setLoading(true);
    try {
      const orderData = {
        customerName: formData.name,
        customerEmail: formData.email,
        customerPhone: formData.phone,
        shippingAddress: `${formData.address}, ${formData.city} - ${formData.pincode}`,
        items: cart,
        totalAmount: cartTotal
      };

      const res = await api.post('/orders', orderData);
      if (res.data.success) {
        clearCart();
        navigate(`/order-success/${res.data.order.orderNumber}`);
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.error || 'Failed to place order');
    } finally {
      setLoading(false);
    }
  };

  return (
    <CheckoutWrapper>
      <Section>
        <div style={{ marginBottom: '40px' }}>
          <button onClick={() => navigate('/cart')} style={{ background: 'none', border: 'none', color: '#0b1a33', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 900, cursor: 'pointer', opacity: 0.6 }}>
            <ArrowLeft size={20} /> RETURN TO CART
          </button>
        </div>

        <Grid>
          <div>
            <FormCard>
              <h2><Truck size={32} color="#C9A84C" /> Shipping Logistics</h2>
              <form onSubmit={handleSubmit}>
                <FormGroup>
                  <label>Consignee Name</label>
                  <input required type="text" placeholder="Full name of recipient" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </FormGroup>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                  <FormGroup>
                    <label>Digital Contact</label>
                    <input required type="email" placeholder="email@tarkshya.in" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </FormGroup>
                  <FormGroup>
                    <label>Secure Phone</label>
                    <input required type="tel" placeholder="+91 00000 00000" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </FormGroup>
                </div>
                <FormGroup>
                  <label>Destination Address</label>
                  <textarea required rows={4} placeholder="Detailed building, street and landmark info" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />
                </FormGroup>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                  <FormGroup>
                    <label>Urban Center</label>
                    <input required type="text" placeholder="City / District" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
                  </FormGroup>
                  <FormGroup>
                    <label>Postal Zone</label>
                    <input required type="text" placeholder="6-digit PIN" value={formData.pincode} onChange={e => setFormData({...formData, pincode: e.target.value})} />
                  </FormGroup>
                </div>
              </form>
            </FormCard>
          </div>

          <OrderSummary>
            <h3>Manifest Summary</h3>
            {cart.map(item => (
              <ItemSmall key={item.productId}>
                <div className="name">{item.name} <span>x {item.quantity}</span></div>
                <div className="price">₹{item.price * item.quantity}</div>
              </ItemSmall>
            ))}

            <TotalBox>
              <div className="row">
                <span>Items Subtotal</span>
                <span>₹{cartTotal}</span>
              </div>
              <div className="row">
                <span>Secure Logistics</span>
                <span style={{ color: '#C9A84C' }}>COMPLIMENTARY</span>
              </div>
              <div className="grand-total">
                <span>Total</span>
                <span>₹{cartTotal}</span>
              </div>
            </TotalBox>

            <PaymentMethod>
              <div className="title"><CreditCard size={20} /> Verified COD</div>
              <p>Payment will be collected upon successful delivery of your Smart Safety IDs. No upfront payment required.</p>
            </PaymentMethod>

            <Button 
              onClick={handleSubmit}
              disabled={loading || cart.length === 0}
              style={{ 
                width: '100%', 
                marginTop: '45px', 
                background: '#C9A84C', 
                color: '#0b1a33', 
                height: '70px', 
                fontSize: '1.3rem',
                borderRadius: '24px',
                boxShadow: '0 15px 30px rgba(201, 168, 76, 0.3)'
              }}
            >
              {loading ? 'SECURING ORDER...' : 'FINALIZE SHIPMENT'} <ChevronRight size={24} style={{ marginLeft: '10px' }} />
            </Button>

            <div style={{ marginTop: '35px', display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center', opacity: 0.4, fontSize: '0.85rem', fontWeight: 600 }}>
              <ShieldCheck size={18} /> END-TO-END ENCRYPTED TRANSACTION
            </div>
          </OrderSummary>
        </Grid>
      </Section>
    </CheckoutWrapper>
  );
};

export default Checkout;
