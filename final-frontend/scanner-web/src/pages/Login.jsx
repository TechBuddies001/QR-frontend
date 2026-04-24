import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Mail, Lock, LogIn, CheckCircle2, Car, Bell, Cloud } from 'lucide-react';
import Button from '../components/Button';
import api from '../lib/api';
import toast from 'react-hot-toast';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const AuthPage = styled.div`
  min-height: 100vh;
  display: flex;
  background: #0b1a33;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const LeftPanel = styled.div`
  flex: 1.2;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 140px 10% 80px;
  background: linear-gradient(135deg, #0b1a33 0%, #112240 100%);
  border-right: 1px solid rgba(255,255,255,0.05);

  &::before, &::after {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    filter: blur(120px);
    z-index: 0;
    opacity: 0.3;
  }
  &::before {
    background: radial-gradient(circle, rgba(201, 168, 76, 0.5) 0%, rgba(0,0,0,0) 70%);
    top: -200px;
    left: -200px;
    animation: ${float} 10s ease-in-out infinite;
  }
  &::after {
    background: radial-gradient(circle, rgba(26, 58, 109, 0.8) 0%, rgba(0,0,0,0) 70%);
    bottom: -200px;
    right: -200px;
    animation: ${float} 12s ease-in-out infinite reverse;
  }

  > * { position: relative; z-index: 1; }

  h1 {
    font-size: 3.8rem;
    font-weight: 900;
    color: white;
    line-height: 1.1;
    margin-bottom: 25px;
    letter-spacing: -1.5px;
    span { color: #C9A84C; }
  }

  p.subtitle {
    font-size: 1.2rem;
    color: rgba(255,255,255,0.7);
    margin-bottom: 60px;
    max-width: 90%;
    line-height: 1.6;
  }
`;

const FeatureList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 15px;
    background: rgba(255,255,255,0.02);
    padding: 20px;
    border-radius: 20px;
    border: 1px solid rgba(255,255,255,0.05);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255,255,255,0.05);
      transform: translateY(-5px);
      border-color: rgba(201, 168, 76, 0.3);
    }

    .icon {
      background: rgba(201, 168, 76, 0.1);
      color: #C9A84C;
      padding: 12px;
      border-radius: 14px;
    }

    .text {
      h4 { color: white; font-size: 1.05rem; font-weight: 700; margin-bottom: 4px; }
      p { color: rgba(255,255,255,0.5); font-size: 0.85rem; line-height: 1.4; }
    }
  }
`;

const RightPanel = styled.div`
  flex: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 140px 40px 80px;
  background: white;
  position: relative;
`;

const AuthCard = styled.div`
  width: 100%;
  max-width: 480px;
  background: transparent;
  padding: 40px;

  h2 {
    font-size: 2.2rem;
    color: #0b1a33;
    margin-bottom: 10px;
    font-weight: 900;
    letter-spacing: -0.5px;
  }
  
  p.desc {
    color: #666;
    font-size: 1rem;
    margin-bottom: 50px;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 30px;
  
  label {
    display: block;
    font-size: 0.8rem;
    font-weight: 800;
    color: #444;
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  
  .input-wrapper {
    position: relative;
    
    input {
      width: 100%;
      padding: 18px 15px 18px 55px;
      border-radius: 16px;
      border: 2px solid #f0f2f5;
      background: #f9fafb;
      color: #0b1a33;
      font-size: 1rem;
      font-weight: 600;
      transition: all 0.3s ease;
      
      &:focus {
        border-color: ${({ theme }) => theme.colors.gold};
        background: white;
        box-shadow: 0 0 20px rgba(201, 168, 76, 0.1);
        outline: none;
      }

      &::placeholder {
        color: #bbb;
        font-weight: 400;
      }
    }
    
    svg {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      color: #999;
      transition: all 0.3s ease;
    }

    input:focus + svg, input:focus ~ svg {
      color: ${({ theme }) => theme.colors.gold};
    }
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const res = await api.post('/auth/login', formData);
      const { token, role, user, admin } = res.data;
      
      localStorage.setItem('admin_token', token);
      localStorage.setItem('user_role', role);
      localStorage.setItem('user_profile', JSON.stringify(role === 'admin' ? admin : user));
      
      toast.success('Login successful!');

      if (role === 'admin') {
        window.location.href = '/admin/dashboard';
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthPage>
      <LeftPanel>
        <h1>Secure Your <span>Ecosystem</span></h1>
        <p className="subtitle">Join India's most advanced vehicle and personal security network. One platform to monitor, track, and protect everything that matters.</p>
        
        <FeatureList>
          <div className="feature-item">
            <div className="icon"><Shield size={24} /></div>
            <div className="text">
              <h4>Bank-Grade Security</h4>
              <p>256-bit encryption for all your personal data</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="icon"><Car size={24} /></div>
            <div className="text">
              <h4>Fleet Protection</h4>
              <p>Real-time vehicle status and driver safety</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="icon"><Bell size={24} /></div>
            <div className="text">
              <h4>Instant Alerts</h4>
              <p>Emergency notifications via SMS and calls</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="icon"><Cloud size={24} /></div>
            <div className="text">
              <h4>Cloud Backup</h4>
              <p>Never lose your critical security records</p>
            </div>
          </div>
        </FeatureList>
      </LeftPanel>

      <RightPanel>
        <AuthCard>
          <h2>Welcome Back</h2>
          <p className="desc">Enter your credentials to access your dashboard.</p>

          {error && (
            <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '15px', borderRadius: '16px', marginBottom: '25px', fontSize: '0.85rem', fontWeight: 600, border: '1px solid rgba(239, 68, 68, 0.2)', textAlign: 'center' }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <InputGroup>
              <label>Email Address</label>
              <div className="input-wrapper">
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  value={formData.email} 
                  onChange={e => setFormData({...formData, email: e.target.value})} 
                  autoComplete="email"
                  required 
                />
                <Mail size={22} />
              </div>
            </InputGroup>
            
            <InputGroup>
              <label>Password</label>
              <div className="input-wrapper">
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  value={formData.password} 
                  onChange={e => setFormData({...formData, password: e.target.value})} 
                  autoComplete="current-password"
                  required 
                />
                <Lock size={22} />
              </div>
            </InputGroup>
            
            <Button type="submit" disabled={loading} style={{ width: '100%', padding: '20px', marginTop: '10px', background: '#C9A84C', color: '#0b1a33', borderRadius: '16px', fontSize: '1.1rem', fontWeight: 900, opacity: loading ? 0.7 : 1, boxShadow: '0 10px 30px rgba(201, 168, 76, 0.2)' }}>
              {loading ? 'AUTHENTICATING...' : (
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                  ACCESS PORTAL <LogIn size={22} />
                </span>
              )}
            </Button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '0.95rem', color: '#666' }}>
            Don't have an account? <Link to="/signup" style={{ color: '#0b1a33', fontWeight: 800, textDecoration: 'none' }}>Register Now</Link>
          </div>
        </AuthCard>
      </RightPanel>
    </AuthPage>
  );
};

export default Login;
