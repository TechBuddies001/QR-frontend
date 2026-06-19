
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { 
    Shield, Building2, Users, Truck, CheckCircle2, 
    ArrowRight, MessageSquare, Award, BarChart3, 
    Database, Globe, Zap, FileText, QrCode, Search
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const PageWrapper = styled.div`
  background: #fcfcfc;
  color: #0b1a33;
`;

const B2BHero = styled.section`
  background: linear-gradient(135deg, #0b1a33 0%, #1a2a44 100%);
  padding: 160px 20px 100px;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(201, 168, 76, 0.1) 0%, transparent 70%);
    animation: ${float} 10s ease-in-out infinite;
  }

  .content {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    animation: ${fadeIn} 0.8s ease-out;

    h1 {
      color: white;
      font-size: 4.5rem;
      font-weight: 900;
      margin-bottom: 25px;
      line-height: 1.1;
      letter-spacing: -2px;
      span { color: #C9A84C; }
      @media (max-width: 768px) { font-size: 3rem; }
    }

    p {
      font-size: 1.4rem;
      color: rgba(255,255,255,0.7);
      margin-bottom: 50px;
      line-height: 1.6;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

const Section = styled.section`
  padding: 120px 20px;
  background: ${props => props.bg === 'light' ? '#f8fafc' : props.bg === 'dark' ? '#0b1a33' : 'white'};
  color: ${props => props.bg === 'dark' ? 'white' : '#0b1a33'};
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: ${props => props.marginTop || '0'};
`;

const IndustryCard = styled.div`
  background: white;
  padding: 50px;
  border-radius: 32px;
  border: 1px solid #eee;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 30px 60px rgba(0,0,0,0.1);
    border-color: #C9A84C;
  }

  .icon {
    width: 70px;
    height: 70px;
    background: #f8fafc;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #C9A84C;
    margin-bottom: 30px;
    transition: all 0.3s;
  }

  h3 { font-size: 1.8rem; font-weight: 900; margin-bottom: 20px; }
  p { font-size: 1.1rem; color: #666; line-height: 1.7; margin-bottom: 30px; }
`;

const FMCGShowcase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const SpecTable = styled.div`
  flex: 1;
  background: white;
  border-radius: 32px;
  border: 1px solid #eee;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0,0,0,0.05);

  .header {
    background: #0b1a33;
    padding: 30px 40px;
    color: white;
    h3 { font-size: 1.4rem; font-weight: 900; letter-spacing: 1px; text-transform: uppercase; }
    span { color: #C9A84C; font-size: 0.8rem; font-weight: 800; letter-spacing: 2px; }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    tr {
      border-bottom: 1px solid #f0f0f0;
      &:last-child { border: none; }
      th { 
        padding: 25px 40px; 
        text-align: left; 
        font-size: 0.75rem; 
        font-weight: 800; 
        color: #999; 
        text-transform: uppercase; 
        letter-spacing: 1.5px;
        width: 40%;
      }
      td { 
        padding: 25px 40px; 
        font-size: 1.1rem; 
        font-weight: 700; 
        color: #0b1a33;
      }
    }
  }
`;

const FeatureGrid = styled.div`
  flex: 0.8;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const FeatureMiniCard = styled.div`
  background: #f8fafc;
  padding: 30px;
  border-radius: 24px;
  border: 1px solid transparent;
  transition: all 0.3s;

  &:hover {
    background: white;
    border-color: #eee;
    transform: scale(1.05);
  }

  svg { color: #C9A84C; margin-bottom: 15px; }
  h4 { font-size: 1rem; font-weight: 900; margin-bottom: 10px; color: #0b1a33; }
  p { font-size: 0.85rem; color: #666; line-height: 1.6; }
`;

const B2BSolutions = () => {
  return (
    <PageWrapper>
      <B2BHero>
        <div className="content">
          <h1>Enterprise <span>Digital Identity</span></h1>
          <p>Transform your physical assets into intelligent digital endpoints. Secure your products, fleets, and personnel with Tarkshya's proprietary QR ecosystem.</p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Button as={Link} to="/contact" variant="primary" style={{ padding: '18px 50px', fontSize: '0.9rem' }}>PARTNER WITH US</Button>
            <Button as={Link} to="/contact" variant="outline" style={{ padding: '18px 50px', fontSize: '0.9rem' }}>REQUEST DEMO</Button>
          </div>
        </div>
      </B2BHero>

      <Section>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ color: '#C9A84C', fontWeight: 900, letterSpacing: '4px', fontSize: '0.9rem', textTransform: 'uppercase' }}>Industry Verticals</span>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginTop: '10px', letterSpacing: '-1.5px' }}>Tailored For Your <span>Sector</span></h2>
          </div>

          <Grid>
            <IndustryCard>
              <div className="icon"><Truck size={32} /></div>
              <h3>Logistics & Fleet</h3>
              <p>Eliminate manual entry and secure driver privacy. Our tags provide 24/7 incident reporting and call masking for 50k+ vehicles.</p>
              <Link to="#" style={{ color: '#C9A84C', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                LEARN MORE <ArrowRight size={18} />
              </Link>
            </IndustryCard>

            <IndustryCard>
              <div className="icon"><Building2 size={32} /></div>
              <h3>Corporate & Govt</h3>
              <p>Modernize employee IDs with secure medical & emergency clusters. Privacy-first identity management for large-scale organizations.</p>
              <Link to="#" style={{ color: '#C9A84C', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                LEARN MORE <ArrowRight size={18} />
              </Link>
            </IndustryCard>

            <IndustryCard>
              <div className="icon"><Award size={32} /></div>
              <h3>Education</h3>
              <p>Student safety backpacks and IDs with instant parent alerts. Secured protocols for school bus fleets and campus safety.</p>
              <Link to="#" style={{ color: '#C9A84C', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                LEARN MORE <ArrowRight size={18} />
              </Link>
            </IndustryCard>
          </Grid>
        </Container>
      </Section>

      <Section bg="light" id="fmcg">
        <Container>
          <div style={{ marginBottom: '80px' }}>
            <span style={{ color: '#C9A84C', fontWeight: 900, letterSpacing: '4px', fontSize: '0.9rem', textTransform: 'uppercase' }}>FMCG Sector Solution</span>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 900, marginTop: '10px', letterSpacing: '-1.5px' }}>Brand <span>Authenticity</span> & Transparency</h2>
            <p style={{ maxWidth: '800px', fontSize: '1.2rem', color: '#666', marginTop: '20px', lineHeight: 1.8 }}>
              Tarkshya Solution enables FMCG brands to fight counterfeiting and build consumer trust. Our "Merck-style" technical integration provides instant batch verification and supply chain visibility.
            </p>
          </div>

          <FMCGShowcase>
            <SpecTable>
              <div className="header">
                <span>IDENTITY VALIDATION</span>
                <h3>Digital Data Sheet</h3>
              </div>
              <table>
                <tbody>
                  <tr>
                    <th>Protocol</th>
                    <td>Blockchain-Secure Identity</td>
                  </tr>
                  <tr>
                    <th>Batch Tracking</th>
                    <td>Individual Unit Level</td>
                  </tr>
                  <tr>
                    <th>Certifications</th>
                    <td>FSSAI / ISO Linked</td>
                  </tr>
                  <tr>
                    <th>Anti-Counterfeit</th>
                    <td>Tamper-Evident QR Tags</td>
                  </tr>
                  <tr>
                    <th>Analytics</th>
                    <td>Real-time Scan Heatmaps</td>
                  </tr>
                </tbody>
              </table>
            </SpecTable>

            <FeatureGrid>
              <FeatureMiniCard>
                <Zap size={24} />
                <h4>Instant Verify</h4>
                <p>Consumers can verify authenticity in 2 seconds with any smartphone camera.</p>
              </FeatureMiniCard>
              <FeatureMiniCard>
                <FileText size={24} />
                <h4>FSSAI Connect</h4>
                <p>Instant access to regulatory details, lab reports, and technical specifications.</p>
              </FeatureMiniCard>
              <FeatureMiniCard>
                <Database size={24} />
                <h4>Supply Chain</h4>
                <p>Track the journey from factory to shelf with unit-level digital signatures.</p>
              </FeatureMiniCard>
              <FeatureMiniCard>
                <BarChart3 size={24} />
                <h4>Consumer Insights</h4>
                <p>Direct engagement and feedback loops via the authentication landing page.</p>
              </FeatureMiniCard>
            </FeatureGrid>
          </FMCGShowcase>
        </Container>
      </Section>

      <Section bg="dark">
        <Container>
          <div style={{ display: 'flex', flexDirection: 'column', lgDirection: 'row', gap: '80px', alignItems: 'center' }}>
             <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '3.5rem', fontWeight: 900, color: 'white' }}>Global <span>Scale</span>. Precision <span>Security</span>.</h2>
                <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', marginTop: '30px', lineHeight: 1.8 }}>
                   Our ecosystem is built for high-throughput environments. Whether you have 100 employees or 10 million products, Tarkshya provides the infrastructure to secure them all.
                </p>
                <div style={{ marginTop: '50px', display: 'flex', gap: '40px' }}>
                   <div>
                      <div style={{ fontSize: '3rem', fontWeight: 900, color: '#C9A84C' }}>99.9%</div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '2px' }}>Uptime Reliability</div>
                   </div>
                   <div>
                      <div style={{ fontSize: '3rem', fontWeight: 900, color: '#C9A84C' }}>256-Bit</div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 800, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '2px' }}>End-to-End Encryption</div>
                   </div>
                </div>
             </div>
             <div style={{ flex: 0.8, background: 'rgba(255,255,255,0.05)', padding: '50px', borderRadius: '40px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: 900, color: 'white', marginBottom: '30px' }}>Consult with an <span>Expert</span></h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                   <Button as={Link} to="/contact" variant="primary" style={{ background: '#C9A84C', color: '#0b1a33' }}>
                      <MessageSquare size={20} style={{ marginRight: '10px' }} /> BOOK STRATEGY SESSION
                   </Button>
                   <Button as={Link} to="/case-studies" variant="outline">
                      <Globe size={20} style={{ marginRight: '10px' }} /> EXPLORE ENTERPRISE CASE STUDIES
                   </Button>
                </div>
             </div>
          </div>
        </Container>
      </Section>
    </PageWrapper>
  );
};

export default B2BSolutions;
