
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { CheckCircle, Package, ArrowLeft, Share2, Download, ShieldCheck } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';

const popIn = keyframes`
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
`;

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const SuccessWrapper = styled.div`
  padding: 140px 0 100px;
  text-align: center;
  min-height: 90vh;
  background: #f8f9fa;
  background-image: 
    radial-gradient(circle at 10% 20%, rgba(39, 174, 96, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 90% 80%, rgba(201, 168, 76, 0.03) 0%, transparent 50%);
`;

const Card = styled.div`
  max-width: 700px;
  margin: 0 auto;
  background: white;
  padding: 80px 50px;
  border-radius: 48px;
  box-shadow: 0 40px 100px rgba(0,0,0,0.06);
  position: relative;
  overflow: hidden;
  animation: ${popIn} 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 8px;
    background: linear-gradient(90deg, #27ae60, #2ecc71);
  }
`;

const IconContainer = styled.div`
  width: 120px;
  height: 120px;
  background: #f0fdf4;
  color: #27ae60;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 40px;
  animation: ${float} 3s ease-in-out infinite;
  box-shadow: 0 20px 40px rgba(39, 174, 96, 0.1);
`;

const OrderIdBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #0b1a33;
  color: #C9A84C;
  padding: 10px 25px;
  border-radius: 100px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 900;
  font-size: 1.2rem;
  margin-bottom: 40px;
  box-shadow: 0 10px 20px rgba(11, 26, 51, 0.2);
`;

const NextStepCard = styled.div`
  background: #fcfdfe;
  border: 2px dashed #e0e6ed;
  padding: 35px;
  border-radius: 32px;
  margin-bottom: 50px;
  text-align: left;
  
  h4 { 
    color: #0b1a33; 
    font-size: 1.2rem; 
    font-weight: 800; 
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .step {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
    font-size: 0.95rem;
    color: #555;
    font-weight: 600;
    &:last-child { margin-bottom: 0; }
    span { color: #C9A84C; font-weight: 900; }
  }
`;

const OrderSuccess = () => {
  const { orderNumber } = useParams();

  return (
    <SuccessWrapper>
      <Section>
        <Card>
          <IconContainer>
            <CheckCircle size={60} strokeWidth={3} />
          </IconContainer>
          
          <h1 style={{ fontSize: '3rem', fontWeight: 900, color: '#0b1a33', marginBottom: '15px', letterSpacing: '-1px' }}>
            Mission <span style={{color: '#27ae60'}}>Accomplished</span>
          </h1>
          <p style={{ color: '#666', fontSize: '1.2rem', marginBottom: '30px', fontWeight: 500 }}>
            Your Smart Safety ecosystem has been successfully provisioned.
          </p>

          <OrderIdBadge>
            #{orderNumber}
          </OrderIdBadge>
          
          <NextStepCard>
            <h4><Package size={24} color="#C9A84C" /> Fulfillment Protocol</h4>
            <div className="step"><span>01</span> Verification call from Jiyo India HQ within 4 hours.</div>
            <div className="step"><span>02</span> QR Tag laser engraving and quality assurance.</div>
            <div className="step"><span>03</span> Dispatch via priority secure logistics.</div>
          </NextStepCard>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <Button as={Link} to="/" variant="secondary" style={{ height: '60px', borderRadius: '18px' }}>
              <ArrowLeft size={20} style={{ marginRight: '10px' }} /> RETURN HOME
            </Button>
            <Button as={Link} to="/dashboard" style={{ height: '60px', borderRadius: '18px', background: '#C9A84C', color: '#0b1a33' }}>
              PROCEED TO DASHBOARD <Share2 size={20} style={{ marginLeft: '10px' }} />
            </Button>
          </div>

          <div style={{ marginTop: '50px', borderTop: '1px solid #eee', paddingTop: '30px', display: 'flex', justifyContent: 'center', gap: '30px', opacity: 0.5 }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', fontWeight: 700 }}>
                <ShieldCheck size={16} /> 100% SECURE
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', fontWeight: 700 }}>
                <Download size={16} /> DOWNLOAD INVOICE
             </div>
          </div>
        </Card>
      </Section>
    </SuccessWrapper>
  );
};

export default OrderSuccess;
