import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { ChevronLeft, ShieldCheck, Zap, PhoneCall, PhoneForwarded, Scan, BadgeCheck } from 'lucide-react';

const Container = styled.div`
  padding: 120px 20px 80px;
  max-width: 900px;
  margin: 0 auto;
  min-height: 80vh;
  animation: fadeIn 0.5s ease-out;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #64748b;
  text-decoration: none;
  font-weight: 700;
  margin-bottom: 40px;
  padding: 10px 20px;
  background: white;
  border-radius: 100px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  
  &:hover {
    color: #C9A84C;
    transform: translateX(-5px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  }
`;

const HeaderBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;

  .icon-circle {
    width: 80px;
    height: 80px;
    background: #0b1a33;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #C9A84C;
    box-shadow: 0 10px 25px rgba(11, 26, 51, 0.2);
    flex-shrink: 0;
  }

  h1 {
    font-size: 3.5rem;
    color: #0b1a33;
    margin: 0;
    line-height: 1.1;
    font-weight: 900;
    letter-spacing: -1px;

    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }
`;

const ContentCard = styled.div`
  background: white;
  padding: 50px;
  border-radius: 30px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.04);
  border: 1px solid #f1f5f9;
  
  @media (max-width: 768px) {
    padding: 30px;
  }

  p {
    font-size: 1.15rem;
    line-height: 1.8;
    color: #475569;
    margin-bottom: 25px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .highlight {
    color: #0b1a33;
    font-weight: 700;
  }
`;

const servicesInfo = {
  'instant-call-masking': {
    title: 'Instant Call Masking',
    icon: <PhoneForwarded size={40} strokeWidth={1.5} />,
    desc: 'Protect your identity with our instant call masking technology. When someone scans your QR code, they can call you without ever seeing your real phone number. This ensures 100% privacy while maintaining perfect communication.'
  },
  'qr-security': {
    title: 'Advanced QR Security',
    icon: <Scan size={40} strokeWidth={1.5} />,
    desc: 'Our QR codes are backed by military-grade encryption and security protocols. Each scan is verified and logged to ensure maximum safety for your vehicles, pets, and personal items.'
  },
  'emergency-helplines': {
    title: 'Emergency Helplines',
    icon: <PhoneCall size={40} strokeWidth={1.5} />,
    desc: 'In case of an emergency, our smart tags provide instant access to local helplines, police, and ambulance services, ensuring help is always just one scan away.'
  },
  'data-privacy': {
    title: '100% Data Privacy',
    icon: <ShieldCheck size={40} strokeWidth={1.5} />,
    desc: 'Your data belongs to you. We employ strict data protection policies and state-of-the-art encryption to guarantee your personal information remains completely confidential and secure.'
  },
  'verified': {
    title: 'Verified Profiles',
    icon: <BadgeCheck size={40} strokeWidth={1.5} />,
    desc: 'Every V-Kawach user profile is thoroughly verified to build a trusted community. This prevents misuse and ensures that alerts and communications are always genuine.'
  },
  'instant-alerts': {
    title: 'Instant WhatsApp Alerts',
    icon: <Zap size={40} strokeWidth={1.5} />,
    desc: 'Receive immediate notifications via WhatsApp the moment your QR tag is scanned. Stay updated in real-time about the location and status of your valuables.'
  }
};

export default function ServiceDetails() {
  const { id } = useParams();
  const service = servicesInfo[id] || { 
    title: id.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '), 
    icon: <ShieldCheck size={40} strokeWidth={1.5} />,
    desc: 'Detailed information about this specific service will be updated shortly.' 
  };

  return (
    <Container>
      <BackButton to="/">
        <ChevronLeft size={20} /> Back to Home
      </BackButton>
      
      <HeaderBox>
        <div className="icon-circle">{service.icon}</div>
        <h1>{service.title}</h1>
      </HeaderBox>

      <ContentCard>
        <p className="highlight">Experience unmatched security and reliability with V-Kawach.</p>
        <p>{service.desc}</p>
        <p>At V-Kawach, we prioritize your safety and privacy above all else. Our dedicated systems work 24/7 to provide you with seamless, innovative security solutions that integrate effortlessly into your daily life. Rest easy knowing that you, your loved ones, and your assets are protected by next-generation technology.</p>
      </ContentCard>
    </Container>
  );
}
