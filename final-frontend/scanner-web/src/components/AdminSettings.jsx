import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import toast from 'react-hot-toast';
import api from '../lib/api';

const SettingsCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  margin-bottom: 30px;

  h3 {
    margin-bottom: 20px;
    font-size: 1.25rem;
    color: #0b1a33;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #333;
    font-size: 0.9rem;
  }

  input {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: #C9A84C;
      box-shadow: 0 0 0 2px rgba(201, 168, 76, 0.2);
    }
  }
`;

const Button = styled.button`
  background: #C9A84C;
  color: #0b1a33;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s;

  &:hover {
    background: #b5953e;
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const AdminSettings = () => {
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [keys, setKeys] = useState({
    RAZORPAY_KEY_ID: '',
    RAZORPAY_KEY_SECRET: ''
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await api.get('/settings'); // Requires admin token
        if (res.data.settings) {
          setKeys({
            RAZORPAY_KEY_ID: res.data.settings.RAZORPAY_KEY_ID || '',
            RAZORPAY_KEY_SECRET: res.data.settings.RAZORPAY_KEY_SECRET || ''
          });
        }
      } catch (err) {
        console.error(err);
        toast.error('Failed to load settings');
      } finally {
        setFetching(false);
      }
    };
    fetchSettings();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.put('/settings', keys);
      toast.success('Settings saved successfully');
    } catch (err) {
      console.error(err);
      toast.error('Failed to save settings');
    } finally {
      setLoading(false);
    }
  };

  if (fetching) return <p>Loading settings...</p>;

  return (
    <div>
      <SettingsCard>
        <h3>Payment Gateway Settings (Razorpay)</h3>
        <form onSubmit={handleSave}>
          <FormGroup>
            <label>Razorpay Key ID</label>
            <input 
              type="text" 
              value={keys.RAZORPAY_KEY_ID} 
              onChange={e => setKeys({...keys, RAZORPAY_KEY_ID: e.target.value})} 
              placeholder="rzp_test_..."
              required
            />
          </FormGroup>
          <FormGroup>
            <label>Razorpay Key Secret</label>
            <input 
              type="password" 
              value={keys.RAZORPAY_KEY_SECRET} 
              onChange={e => setKeys({...keys, RAZORPAY_KEY_SECRET: e.target.value})} 
              placeholder="Secret Key"
              required
            />
          </FormGroup>
          <Button type="submit" disabled={loading}>
            {loading ? 'Saving...' : 'Save Payment Settings'}
          </Button>
        </form>
      </SettingsCard>
    </div>
  );
};

export default AdminSettings;
