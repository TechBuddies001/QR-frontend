import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, Shield, Wrench, Flame, 
  PhoneCall, LifeBuoy, Ambulance, Siren
} from 'lucide-react';
import Button from '../components/Button';

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const HeroSection = styled.section`
  background-color: #0b1a33;
  color: white;
  padding: 80px 20px 120px;
  position: relative;
  overflow: hidden;

  /* Curved bottom */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #f8f9fa;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    transform: scaleX(1.5);
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroText = styled.div`
  flex: 1;
  max-width: 600px;

  h1 {
    font-size: 4rem;
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 900;
    margin-bottom: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    h1 {
      font-size: 3rem;
    }
  }
`;

const HeroGraphic = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .icon-container {
    background: rgba(255, 255, 255, 0.05);
    padding: 40px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    position: relative;
    
    svg {
      color: ${({ theme }) => theme.colors.gold};
    }

    &:nth-child(2) {
      transform: translateY(30px);
      padding: 30px;
      svg {
        color: #fff;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 40px;
  }
`;

const ServicesSection = styled.section`
  padding: 60px 20px 100px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const SectionHeader = styled.div`
  margin-bottom: 60px;

  h2 {
    font-size: 3rem;
    font-family: ${({ theme }) => theme.fonts.display};
    font-weight: 900;
    color: #0b1a33;
    margin-bottom: 15px;

    span {
      color: ${({ theme }) => theme.colors.gold};
    }
  }

  p {
    font-size: 1.1rem;
    color: #555;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    h2 {
      font-size: 2.5rem;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
`;

const ServiceCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 40px 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #eee;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    border-color: ${({ theme }) => theme.colors.gold};
  }

  .icon-wrapper {
    width: 80px;
    height: 80px;
    background: #f8f9fa;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
    color: ${({ theme }) => theme.colors.gold};
    transition: all 0.3s ease;
  }

  &:hover .icon-wrapper {
    background: ${({ theme }) => theme.colors.navy};
    color: white;
  }

  h3 {
    font-size: 1.5rem;
    color: #0b1a33;
    margin-bottom: 15px;
    font-weight: 800;
  }

  p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 30px;
    flex-grow: 1;
  }
`;

const Emergency = () => {
  const services = [
    {
      title: "Medical Help",
      description: "Quick access to Medical Help services whenever you need urgent assistance.",
      icon: <Stethoscope size={40} />,
      link: "/contact"
    },
    {
      title: "Police",
      description: "Quick access to Police services whenever you need urgent assistance.",
      icon: <Shield size={40} />,
      link: "/contact"
    },
    {
      title: "RSA",
      description: "Quick access to RSA services whenever you need urgent assistance.",
      icon: <Wrench size={40} />,
      link: "/contact"
    },
    {
      title: "Fire Station",
      description: "Quick access to Fire Station services whenever you need urgent assistance.",
      icon: <Flame size={40} />,
      link: "/contact"
    },
    {
      title: "Helpline",
      description: "Quick access to Helpline services whenever you need urgent assistance.",
      icon: <PhoneCall size={40} />,
      link: "/contact"
    },
    {
      title: "SOS",
      description: "Quick access to SOS services whenever you need urgent assistance.",
      icon: <LifeBuoy size={40} />,
      link: "/contact"
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <HeroText>
            <h1>Emergency</h1>
            <p>Access immediate medical, police, fire, or roadside support through SOS emergency helplines for professional.</p>
          </HeroText>
          <HeroGraphic>
            <div className="icon-container">
              <Ambulance size={80} />
            </div>
            <div className="icon-container">
              <Siren size={60} />
            </div>
          </HeroGraphic>
        </HeroContent>
      </HeroSection>

      <ServicesSection>
        <SectionHeader>
          <h2><span>Emergency</span> Services</h2>
          <p>Quick access to essential emergency services — because every second counts when it matters most.</p>
        </SectionHeader>

        <Grid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <div className="icon-wrapper">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Button as={Link} to={service.link} variant="primary" style={{ padding: '12px 35px', width: '100%' }}>
                Visit Now
              </Button>
            </ServiceCard>
          ))}
        </Grid>
      </ServicesSection>
    </PageContainer>
  );
};

export default Emergency;
