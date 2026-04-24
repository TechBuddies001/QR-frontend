
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight, Minus, Plus, ShoppingCart, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Section from '../components/Section';
import Button from '../components/Button';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const CartWrapper = styled.div`
  padding: 120px 0 80px;
  min-height: 90vh;
  background: #f8f9fa;
  background-image: radial-gradient(circle at 10% 20%, rgba(11, 26, 51, 0.03) 0%, transparent 80%);
`;

const PageHeader = styled.div`
  margin-bottom: 50px;
  animation: ${fadeIn} 0.6s ease-out;
  h1 { 
    font-size: 3rem; 
    font-weight: 900; 
    color: #0b1a33; 
    margin-bottom: 10px;
    letter-spacing: -1px;
  }
  .breadcrumb {
    display: flex;
    gap: 10px;
    color: #999;
    font-size: 0.9rem;
    font-weight: 600;
    span.active { color: #C9A84C; }
  }
`;

const CartGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  animation: ${fadeIn} 0.8s ease-out;
  @media (min-width: 1024px) {
    grid-template-columns: 1.8fr 1fr;
  }
`;

const CartItems = styled.div`
  background: white;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0,0,0,0.03);
  border: 1px solid rgba(0,0,0,0.04);
`;

const ItemRow = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 40px;
  border-bottom: 1px solid rgba(0,0,0,0.03);
  transition: all 0.3s ease;
  &:last-child { border-bottom: none; }
  &:hover { background: #fafbfc; }

  .img-box {
    width: 140px;
    height: 140px;
    background: white;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.04);
    img { width: 100%; height: 100%; object-fit: cover; }
  }

  .info {
    flex: 1;
    h4 { margin: 0 0 12px; color: #0b1a33; font-size: 1.4rem; font-weight: 800; letter-spacing: -0.5px; }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.75rem;
      background: rgba(39, 174, 96, 0.1);
      color: #27ae60;
      padding: 6px 12px;
      border-radius: 100px;
      font-weight: 800;
      letter-spacing: 0.5px;
    }
  }

  .qty-control {
    display: flex;
    align-items: center;
    gap: 15px;
    background: #f1f3f5;
    padding: 10px 20px;
    border-radius: 100px;
    
    button {
      background: white;
      border: none;
      color: #0b1a33;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      box-shadow: 0 2px 5px rgba(0,0,0,0.05);
      &:hover { color: #C9A84C; transform: scale(1.1); }
      &:disabled { opacity: 0.3; cursor: not-allowed; transform: none; }
    }
    
    span { font-weight: 900; min-width: 30px; text-align: center; font-size: 1.1rem; }
  }

  .price { 
    font-weight: 900; 
    color: #0b1a33; 
    font-size: 1.5rem; 
    text-align: right;
    min-width: 120px;
  }

  .remove {
    background: transparent;
    color: #ff4d4d;
    border: 2px solid #ffe5e5;
    width: 45px;
    height: 45px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-left: 10px;
    &:hover { background: #ff4d4d; color: white; border-color: #ff4d4d; transform: scale(1.05) rotate(5deg); }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 25px;
    .img-box { width: 100px; height: 100px; }
    .info { min-width: 150px; }
    .qty-control { margin-right: auto; }
  }
`;

const Summary = styled.div`
  background: linear-gradient(145deg, #0b1a33 0%, #112240 100%);
  border-radius: 32px;
  padding: 45px;
  height: fit-content;
  color: white;
  position: sticky;
  top: 120px;
  box-shadow: 0 30px 60px rgba(11, 26, 51, 0.2);
  border: 1px solid rgba(255,255,255,0.05);
  
  h3 { 
    margin-bottom: 35px; 
    color: white; 
    font-size: 1.6rem; 
    font-weight: 900;
    display: flex;
    align-items: center;
    gap: 12px;
    letter-spacing: -0.5px;
  }
  
  .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 22px;
    font-weight: 600;
    font-size: 1.05rem;
    color: rgba(255,255,255,0.7);
    
    &.total {
      margin-top: 35px;
      padding-top: 35px;
      border-top: 1px dashed rgba(255,255,255,0.2);
      color: #C9A84C;
      font-weight: 900;
      font-size: 2rem;
      align-items: center;
    }
  }

  .protection {
    margin-top: 40px;
    background: rgba(0,0,0,0.2);
    padding: 25px;
    border-radius: 24px;
    display: flex;
    gap: 15px;
    align-items: center;
    font-size: 0.85rem;
    line-height: 1.5;
    color: rgba(255,255,255,0.6);
    border: 1px solid rgba(255,255,255,0.03);
    svg { flex-shrink: 0; color: #C9A84C; }
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 100px 20px;
  max-width: 600px;
  margin: 0 auto;
  animation: ${fadeIn} 0.8s ease-out;

  .icon-glow {
    width: 150px;
    height: 150px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 40px;
    color: #C9A84C;
    position: relative;
    box-shadow: 0 20px 40px rgba(0,0,0,0.05);
    &::after {
      content: '';
      position: absolute;
      width: 100%; height: 100%;
      border: 2px dashed #C9A84C;
      border-radius: 50%;
      animation: rotate 20s linear infinite;
    }
  }

  @keyframes rotate { from { transform: rotate(0); } to { transform: rotate(360deg); } }

  h2 { font-size: 2.5rem; font-weight: 900; color: #0b1a33; margin-bottom: 15px; }
  p { color: #666; font-size: 1.1rem; line-height: 1.6; margin-bottom: 40px; }
`;

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const apiUrl = window.location.hostname === 'localhost' ? 'http://localhost:5001' : '';

  const handleProceed = () => {
    navigate('/checkout');
  };

  if (cart.length === 0) {
    return (
      <CartWrapper>
        <EmptyState>
          <div className="icon-glow">
            <ShoppingBag size={60} />
          </div>
          <h2>Your Cart is Empty</h2>
          <p>It looks like you haven't added any Smart Safety IDs to your cart yet. Protect your world today.</p>
          <Button as={Link} to="/" size="large">EXPLORE SMART TAGS</Button>
        </EmptyState>
      </CartWrapper>
    );
  }

  return (
    <CartWrapper>
      <Section>
        <PageHeader>
          <div className="breadcrumb">SHOPPING <span>/</span> <span className="active">CART</span></div>
          <h1>Shopping Cart</h1>
        </PageHeader>

        <CartGrid>
          <CartItems>
            {cart.map((item) => (
              <ItemRow key={item.productId}>
                <div className="img-box">
                  <img src={item.image ? `${apiUrl}${item.image}` : "/assets/car_qr_tag_mockup_1776107740073.png"} alt={item.name} />
                </div>
                <div className="info">
                  <h4>{item.name}</h4>
                  <div className="badge"><ShieldCheck size={14} /> SECURE QR ID</div>
                </div>
                <div className="qty-control">
                  <button onClick={() => updateQuantity(item.productId, item.quantity - 1)} disabled={item.quantity <= 1}>
                    <Minus size={18} />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.productId, item.quantity + 1)}>
                    <Plus size={18} />
                  </button>
                </div>
                <div className="price">₹{item.price * item.quantity}</div>
                <button className="remove" onClick={() => removeFromCart(item.productId)}>
                  <Trash2 size={18} />
                </button>
              </ItemRow>
            ))}
          </CartItems>

          <Summary>
            <h3><ShoppingCart /> Order Summary</h3>
            <div className="row">
              <span>Subtotal</span>
              <span>₹{cartTotal}</span>
            </div>
            <div className="row">
              <span>Shipping</span>
              <span style={{ color: '#C9A84C' }}>FREE</span>
            </div>
            <div className="row">
              <span>Platform Fee</span>
              <span>₹0.00</span>
            </div>
            <div className="row total">
              <span>Total</span>
              <span>₹{cartTotal}</span>
            </div>
            
            <button onClick={handleProceed} style={{ width: '100%', marginTop: '35px', padding: '22px', fontSize: '1.1rem', borderRadius: '20px', background: 'linear-gradient(135deg, #C9A84C 0%, #D4B86A 100%)', color: '#0b1a33', boxShadow: '0 15px 30px rgba(201,168,76,0.2)', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 900, transition: 'all 0.3s ease' }}>
              PROCEED TO CHECKOUT <ArrowRight size={22} style={{ marginLeft: '12px' }} />
            </button>

            <div className="protection">
              <ShieldCheck size={40} />
              <p>Your purchase is protected by Tarkshya Security Protocol. 100% data privacy guaranteed.</p>
            </div>
          </Summary>
        </CartGrid>
      </Section>
    </CartWrapper>
  );
};

export default Cart;
