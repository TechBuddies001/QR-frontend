import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Mail, Phone, MapPin } from 'lucide-react';
import Button from '../components/Button';

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 60px 20px;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1.5fr;
  }
`;

const ContactInfo = styled.div`
  h2 {
    color: ${({ theme }) => theme.colors.navy};
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  p {
    color: #666;
    margin-bottom: 40px;
    line-height: 1.6;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 25px;
  
  .icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(201, 168, 76, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.gold};
    flex-shrink: 0;
  }
  
  .details {
    h4 {
      margin: 0 0 5px 0;
      color: ${({ theme }) => theme.colors.navy};
      font-size: 1.1rem;
    }
    
    p {
      margin: 0;
      color: #666;
      font-size: 0.95rem;
    }
    
    a {
      color: #666;
      text-decoration: none;
      &:hover {
        color: ${({ theme }) => theme.colors.gold};
      }
    }
  }
`;

const FormWrapper = styled.div`
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.05);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.navy};
  font-size: 0.9rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
    box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.1);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
    box-shadow: 0 0 0 3px rgba(201, 168, 76, 0.1);
  }
`;

const SuccessMessage = styled.div`
  background: #e8f5e9;
  color: #2e7d32;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-weight: 500;
  text-align: center;
`;

const ErrorMessage = styled.div`
  background: #ffebee;
  color: #c62828;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-weight: 500;
  text-align: center;
`;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      await axios.post('/api/leads/public', formData);
      setStatus('success');
      setFormData({ name: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error("Error submitting contact form:", err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <PageWrapper>
      <Content>
        <Container>
          <ContactInfo>
            <h2>Get In Touch</h2>
            <p>Have questions about our Smart QR tags or enterprise security solutions? Fill out the form, and our team will get back to you shortly.</p>
            
            <InfoItem>
              <div className="icon"><Phone size={20} /></div>
              <div className="details">
                <h4>Phone / WhatsApp</h4>
                <p><a href="tel:+919412300716">+91 94123 00716</a></p>
              </div>
            </InfoItem>
            
            <InfoItem>
              <div className="icon"><Mail size={20} /></div>
              <div className="details">
                <h4>Email</h4>
                <p><a href="mailto:Info@tarkshyasolution.in">Info@tarkshyasolution.in</a></p>
              </div>
            </InfoItem>
            
          </ContactInfo>
          
          <FormWrapper>
            {status === 'success' && <SuccessMessage>Thank you! Your message has been sent successfully. We will contact you soon.</SuccessMessage>}
            {status === 'error' && <ErrorMessage>Something went wrong. Please try again or contact us directly via phone.</ErrorMessage>}
            
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Full Name</Label>
                <Input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="John Doe" 
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                />
              </FormGroup>
              
              <FormGroup>
                <Label>Phone Number</Label>
                <Input 
                  type="tel" 
                  name="phone" 
                  required 
                  placeholder="+91 00000 00000" 
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                />
              </FormGroup>
              
              <FormGroup>
                <Label>Message / Inquiry Details</Label>
                <TextArea 
                  name="message" 
                  required 
                  placeholder="How can we help you today?" 
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                />
              </FormGroup>
              
              <Button 
                type="submit" 
                variant="primary" 
                style={{ width: '100%', padding: '15px' }}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </FormWrapper>
        </Container>
      </Content>
    </PageWrapper>
  );
};

export default ContactUs;
