
import React from 'react';
import styled from 'styled-components';
import { Shield, Building2, Users, Truck, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const PageWrapper = styled.div`
  background: white;
`;

const B2BHero = styled.section`
  background: #0b1a33;
  padding: 120px 20px;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(201, 168, 76, 0.1) 0%, transparent 70%);
  }

  .content {
    max-width: 900px;
    margin: 0 auto;
    position: relative;
    z-index: 1;

    h1 {
      font-size: 3.5rem;
      font-weight: 900;
      margin-bottom: 25px;
      line-height: 1.1;
      span { color: #C9A84C; }
    }

    p {
      font-size: 1.25rem;
      color: #999;
      margin-bottom: 40px;
      line-height: 1.6;
    }
  }
`;

const Section = styled.section`
  padding: 100px 20px;
  background: ${props => props.bg === 'light' ? '#f8fafc' : 'white'};
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 60px;
  h2 {
    font-size: 2.8rem;
    font-weight: 900;
    color: #0b1a33;
    margin-bottom: 15px;
    span { color: #C9A84C; }
  }
  p { font-size: 1.1rem; color: #666; max-width: 700px; margin: 0 auto; }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: -60px;
  position: relative;
  z-index: 2;
`;

const StatCard = styled.div`
  background: white;
  padding: 40px;
  border-radius: 24px;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
  border: 1px solid #eee;

  .icon {
    width: 60px;
    height: 60px;
    background: #f8fafc;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    color: #C9A84C;
  }

  h3 { font-size: 2.2rem; font-weight: 900; color: #0b1a33; margin-bottom: 5px; }
  p { font-size: 0.95rem; color: #666; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
`;

const SolutionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  margin-bottom: 100px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
  }

  &.reverse {
    direction: rtl;
    .text-content { direction: ltr; }
  }

  .image-box {
    border-radius: 40px;
    overflow: hidden;
    box-shadow: 0 40px 80px rgba(0,0,0,0.1);
    img { width: 100%; height: auto; display: block; }
  }

  .text-content {
    h3 { font-size: 2.2rem; font-weight: 900; color: #0b1a33; margin-bottom: 25px; }
    p { font-size: 1.1rem; color: #555; line-height: 1.8; margin-bottom: 30px; }
    ul {
      list-style: none;
      padding: 0;
      margin-bottom: 40px;
      li {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 1rem;
        font-weight: 600;
        color: #333;
        margin-bottom: 15px;
        svg { color: #C9A84C; flex-shrink: 0; }
      }
    }
  }
`;

const CTASection = styled.section`
  background: #0b1a33;
  padding: 100px 20px;
  text-align: center;
  color: white;
  
  h2 { font-size: 3rem; font-weight: 900; margin-bottom: 20px; }
  p { font-size: 1.2rem; color: #999; margin-bottom: 40px; }
`;

const B2BSolutions = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <PageWrapper>
      <B2BHero>
        <div className="content">
          <h1>Enterprise-Grade <span>Safety Solutions</span></h1>
          <p>Scale your security infrastructure with V-KAWACH. Smart QR ecosystems designed for corporate offices, educational institutions, and logistics fleets.</p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <Button as="a" href="#contact" variant="primary" style={{ padding: '15px 40px' }}>CONSULT AN EXPERT</Button>
            <Button as={Link} to="/smart-qr" variant="outline" style={{ padding: '15px 40px', color: 'white', borderColor: 'white' }}>VIEW PRODUCTS</Button>
          </div>
        </div>
      </B2BHero>

      <Container>
        <StatsGrid>
          <StatCard>
            <div className="icon"><Building2 size={30} /></div>
            <h3>500+</h3>
            <p>Enterprises Trusted</p>
          </StatCard>
          <StatCard>
            <div className="icon"><Users size={30} /></div>
            <h3>100k+</h3>
            <p>Employees Secured</p>
          </StatCard>
          <StatCard>
            <div className="icon"><Truck size={30} /></div>
            <h3>50k+</h3>
            <p>Fleet Vehicles Tagged</p>
          </StatCard>
        </StatsGrid>
      </Container>

      <Section>
        <Container>
          <SolutionGrid>
            <div className="image-box">
              <img src="/assets/v-kawach-id.jpg" alt="Corporate ID Solutions" />
            </div>
            <div className="text-content">
              <h3>Corporate & School ID Ecosystems</h3>
              <p>Modernize your identity management with Smart QR ID cards. In case of a medical emergency or accident, authorized personnel can instantly access emergency contacts and critical health info while maintaining total privacy.</p>
              <ul>
                <li><CheckCircle2 size={20} /> Instant Emergency Contact Access</li>
                <li><CheckCircle2 size={20} /> Privacy-First Call Masking Integration</li>
                <li><CheckCircle2 size={20} /> Digital Medical Profile Linkage</li>
                <li><CheckCircle2 size={20} /> Zero-App Requirement for Response</li>
              </ul>
              <Button variant="outline">LEARN MORE <ArrowRight size={18} style={{ marginLeft: '10px' }} /></Button>
            </div>
          </SolutionGrid>

          <SolutionGrid className="reverse">
            <div className="image-box">
              <img src="/assets/v-kawach-car.jpg" alt="Fleet Management" />
            </div>
            <div className="text-content">
              <h3>Fleet Safety & Communication</h3>
              <p>Managing a large fleet of vehicles? V-KAWACH Smart QR Stickers enable seamless communication between the public and your drivers during parking issues or emergencies, without ever exposing the driver's mobile number.</p>
              <ul>
                <li><CheckCircle2 size={20} /> 100% Anonymous Communication</li>
                <li><CheckCircle2 size={20} /> Centralized Fleet Dashboard</li>
                <li><CheckCircle2 size={20} /> Real-time Incident Alerts</li>
                <li><CheckCircle2 size={20} /> Weatherproof Industrial Grade Tags</li>
              </ul>
              <Button variant="outline">REQUEST CASE STUDY <ArrowRight size={18} style={{ marginLeft: '10px' }} /></Button>
            </div>
          </SolutionGrid>
        </Container>
      </Section>

      <Section bg="light">
        <Container>
          <SectionTitle>
            <h2>Strategic <span>Deployment</span> Process</h2>
            <p>How we help you scale your safety infrastructure across your organization</p>
          </SectionTitle>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <img src="/assets/v-kawach-steps.jpg" alt="V-Kawach Steps" style={{ width: '100%', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} />
          </div>
        </Container>
      </Section>

      <CTASection id="contact">
        <h2>Ready to Secure Your <span>Organization?</span></h2>
        <p>Get in touch with our B2B experts for a customized security consultation.</p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <Button variant="primary" style={{ padding: '15px 50px', background: '#C9A84C', color: '#0b1a33' }}>
            <MessageSquare size={20} style={{ marginRight: '10px' }} /> CONTACT SALES
          </Button>
          <Button style={{ padding: '15px 50px', borderColor: 'white', color: 'white' }} variant="outline">DOWNLOAD BROCHURE</Button>
        </div>
      </CTASection>
    </PageWrapper>
  );
};

export default B2BSolutions;
