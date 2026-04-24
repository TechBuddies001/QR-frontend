import React, { useState } from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Button from '../components/Button';
import { Heart, Users, Target, Send } from 'lucide-react';

const Hero = styled.div`
  background: ${({ theme }) => theme.colors.navy};
  color: white;
  padding: 120px 0 80px;
  text-align: center;
`;

const MissionContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const StatGrid = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 60px 0;
  flex-wrap: wrap;
  gap: 30px;
`;

const Stat = styled.div`
  text-align: center;
  flex: 1;
  min-width: 200px;
  h3 {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.gold};
    margin-bottom: 5px;
  }
  p {
    color: ${({ theme }) => theme.colors.navy};
    font-weight: 700;
  }
`;

const FormContainer = styled.div`
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  margin-top: 60px;
  text-align: left;
  border-top: 5px solid ${({ theme }) => theme.colors.gold};

  h3 {
    margin-bottom: 25px;
    color: ${({ theme }) => theme.colors.navy};
    text-align: center;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #fdfdfd;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #fdfdfd;
  min-height: 120px;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

const SocialInitiative = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: 'I want to join Mission Rakshak'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        const message = `Hi, I want to join Mission Rakshak!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
        const whatsappUrl = `https://wa.me/918881384777?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, '_blank');
        setIsSubmitting(false);
        setStatus({ type: 'success', message: 'Redirecting to WhatsApp...' });
    };

    return (
        <>
            <Hero>
                <MissionContent>
                    <h1 style={{ fontSize: '3rem', color: '#C9A84C' }}>Mission Rakshak</h1>
                    <p style={{ fontSize: '1.2rem', marginTop: '20px', opacity: 0.9 }}>
                        Our commitment to safer roads and connected communities.
                    </p>
                </MissionContent>
            </Hero>

            <Section>
                <MissionContent>
                    <h2>The Story</h2>
                    <p style={{ fontSize: '1.1rem', marginTop: '20px', lineHeight: '1.8' }}>
                        Mission Rakshak was born from a simple realization: in an emergency, every second counts.
                        Too often, accident victims or lost individuals cannot be helped simply because there is no way
                        to contact their family.
                    </p>
                    <p style={{ fontSize: '1.1rem', marginTop: '20px', lineHeight: '1.8' }}>
                        Through Mission Rakshak, we distribute subsidized Smart QR stickers to public transport,
                        elderly citizens, and school children, creating a safety net that spans across the city.
                    </p>

                    <StatGrid>
                        <Stat>
                            <Target size={48} color="#C9A84C" style={{ margin: '0 auto 10px' }} />
                            <h3 style={{ fontSize: '1.5rem' }}>Vision</h3>
                            <p>Impact 10,000+ Lives</p>
                        </Stat>
                        <Stat>
                            <Users size={48} color="#C9A84C" style={{ margin: '0 auto 10px' }} />
                            <h3 style={{ fontSize: '1.2rem' }}>Looking for</h3>
                            <p>NGO Partners</p>
                        </Stat>
                        <Stat>
                            <Heart size={48} color="#C9A84C" style={{ margin: '0 auto 10px' }} />
                            <h3 style={{ fontSize: '1.2rem' }}>Initiative</h3>
                            <p>Our Social Initiative</p>
                        </Stat>
                    </StatGrid>

                    <FormContainer id="join-form">
                        <h3>Become a Rakshak</h3>
                        <form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label>Full Name</Label>
                                <Input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                            </FormGroup>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <FormGroup>
                                    <Label>Email Address</Label>
                                    <Input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="email@example.com" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Phone Number</Label>
                                    <Input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+91 00000 00000" />
                                </FormGroup>
                            </div>
                            <FormGroup>
                                <Label>Message</Label>
                                <TextArea name="message" value={formData.message} onChange={handleChange} placeholder="How would you like to contribute?" />
                            </FormGroup>
                            <Button type="submit" disabled={isSubmitting} style={{ width: '100%', padding: '15px' }}>
                                {isSubmitting ? 'Sending...' : 'Join the Mission'} <Send size={18} style={{ marginLeft: '10px' }} />
                            </Button>
                            {status && (
                                <p style={{
                                    marginTop: '20px',
                                    padding: '10px',
                                    borderRadius: '5px',
                                    textAlign: 'center',
                                    background: status.type === 'success' ? '#e6f7e6' : '#fff0f0',
                                    color: status.type === 'success' ? '#2e7d32' : '#d32f2f'
                                }}>
                                    {status.message}
                                </p>
                            )}
                        </form>
                    </FormContainer>
                </MissionContent>
            </Section>
        </>
    );
};

export default SocialInitiative;
