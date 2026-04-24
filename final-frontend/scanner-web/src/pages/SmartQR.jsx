
import styled from 'styled-components';
import { Smartphone, Shield, PhoneForwarded } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';

const Hero = styled.div`
  background-color: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.white};
  padding: 120px 0 80px;
  text-align: center;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.gold};
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 40px;
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-top: 60px;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Step = styled.div`
  text-align: center;
  padding: 30px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  
  .icon {
    width: 60px;
    height: 60px;
    background: ${({ theme }) => theme.colors.navy};
    color: ${({ theme }) => theme.colors.gold};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  max-width: 600px;
  margin: 40px auto;
  text-align: left;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  font-size: 1.1rem;
  
  svg {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const SmartQR = () => {
    return (
        <>
            <Hero>
                <Content>
                    <Title>Smart QR Identity</Title>
                    <Subtitle>
                        Protect what matters with our advanced QR technology.
                        Vehicles, pets, and loved ones — secured with instant connectivity and privacy.
                    </Subtitle>
                    <Button as="a" href="https://wa.me/918881384777?text=Hi%20Tarkshya%2C%20I%20would%20like%20to%20order%20a%20Smart%20QR%20Identity%20Tag.%20Please%20provide%20details." target="_blank" rel="noopener noreferrer">Get Your Smart ID</Button>
                </Content>
            </Hero>

            <Section>
                <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>How It Works</h2>
                <StepsGrid>
                    <Step>
                        <div className="icon"><Smartphone size={32} /></div>
                        <h3>Scan</h3>
                        <p>Anyone who finds your lost item or vehicle scans the QR code using any smartphone camera.</p>
                    </Step>
                    <Step>
                        <div className="icon"><Shield size={32} /></div>
                        <h3>Connect</h3>
                        <p>They are instantly redirected to a secure page to contact the owner.</p>
                    </Step>
                    <Step>
                        <div className="icon"><PhoneForwarded size={32} /></div>
                        <h3>Call Owner</h3>
                        <p>They can call you immediately. Your number stays private via our call masking technology.</p>
                    </Step>
                </StepsGrid>
            </Section>

            <Section bg="light">
                <h2 style={{ textAlign: 'center' }}>Key Features</h2>
                <FeatureList>
                    <FeatureItem><Shield size={20} /> Call Masking (Privacy Protection)</FeatureItem>
                    <FeatureItem><Shield size={20} /> Instant SMS & WhatsApp Alerts</FeatureItem>
                    <FeatureItem><Shield size={20} /> Emergency Contact Integration</FeatureItem>
                    <FeatureItem><Shield size={20} /> No App Required for Finder</FeatureItem>
                    <FeatureItem><Shield size={20} /> Weatherproof & Durable Tags</FeatureItem>
                </FeatureList>
                <div style={{ textAlign: 'center' }}>
                    <Button as="a" href="https://wa.me/918881384777?text=Hi%20Tarkshya%2C%20I%20would%20like%20to%20order%20a%20Smart%20QR%20Tag.%20Please%20provide%20details." target="_blank" rel="noopener noreferrer">Order Now</Button>
                </div>
            </Section>
        </>
    );
};

export default SmartQR;
