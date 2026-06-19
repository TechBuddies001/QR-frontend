
import styled from 'styled-components';
import { ShieldCheck, Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/new_logo.png';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.white};
  padding: 80px 0 30px;
  border-top: 1px solid rgba(255,255,255,0.1);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 2fr 1fr 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 20px;

  svg {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const Description = styled.p`
  opacity: 0.7;
  max-width: 350px;
  font-size: 0.95rem;
`;

const Heading = styled.h4`
  color: ${({ theme }) => theme.colors.gold};
  font-size: 1.1rem;
  margin-bottom: 10px;
`;

const LinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FooterLink = styled(Link)`
  opacity: 0.7;
  font-size: 0.95rem;
  
  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.gold};
    padding-left: 5px;
  }
  transition: all 0.3s ease;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  opacity: 0.7;
  font-size: 0.95rem;

  svg {
    color: ${({ theme }) => theme.colors.gold};
    min-width: 18px;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.gold};
      color: ${({ theme }) => theme.colors.navy};
      border-color: ${({ theme }) => theme.colors.gold};
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 40px;
  margin-top: 60px;
  border-top: 1px solid rgba(255,255,255,0.1);
  opacity: 0.5;
  font-size: 0.85rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Column>
          <Logo>
            <img src={logoImg} alt="Tarkshya Solution Logo" style={{ height: '32px', objectFit: 'contain', borderRadius: '4px' }} />
            <div>
              <div style={{ lineHeight: '1' }}>Tarkshya Solution</div>
              <div style={{ fontSize: '0.6rem', fontWeight: 400, opacity: 0.8, marginTop: '2px', letterSpacing: '0.05em', fontFamily: 'sans-serif', textTransform: 'uppercase' }}>Securing your World</div>
            </div>
          </Logo>
          <Description>
            Tarkshya Solution provides cutting-edge digital and physical security ecosystems, protecting what matters most with Indian innovation.
          </Description>
          <Socials>
            <a href="#"><Linkedin size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
          </Socials>
        </Column>

        <Column>
          <Heading>Quick Links</Heading>
          <LinkList>
            <li key="home"><FooterLink to="/">Home</FooterLink></li>
            <li key="smart-qr"><FooterLink to="/smart-qr">Smart QR Safety</FooterLink></li>
            <li key="cloud"><FooterLink to="/cloud-monitoring">Cloud Monitoring</FooterLink></li>
            <li key="gps"><FooterLink to="/gps-tracking">GPS Tracking</FooterLink></li>
            <li key="social"><FooterLink to="/social-initiative">Become a partner</FooterLink></li>
            <li key="contact"><FooterLink to="/contact">Contact Us</FooterLink></li>
          </LinkList>
        </Column>

        <Column>
          <Heading>Contact Us</Heading>
          <ContactItem>
            <Mail size={18} />
            <a href="mailto:Info@tarkshyasolution.in">Info@tarkshyasolution.in</a>
          </ContactItem>
          <ContactItem>
            <Phone size={18} />
            <a href="tel:+919412300716" title="Call Us" style={{ textDecoration: 'none', color: 'inherit' }}>+91 94123 00716</a>
          </ContactItem>
          <ContactItem>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg" style={{ color: '#E8B642', minWidth: '18px' }}><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path></svg>
            <a href="https://wa.me/919412300716" target="_blank" rel="noreferrer" title="Chat on WhatsApp" style={{ textDecoration: 'none', color: 'inherit' }}>WhatsApp Us</a>
          </ContactItem>
        </Column>
      </Container>
      <Copyright>
        &copy; {new Date().getFullYear()} Tarkshya Solution. All rights reserved.
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;
