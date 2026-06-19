import React from 'react';
import styled, { keyframes } from 'styled-components';
import { 
    ArrowRight, Truck, Building2, Award, Shield, 
    CheckCircle2, TrendingUp, Globe, FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

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

const HeroSection = styled.section`
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
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const CaseStudyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 50px;
`;

const CaseStudyCard = styled.div`
  background: white;
  border-radius: 32px;
  border: 1px solid #eee;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 30px 60px rgba(0,0,0,0.1);
    border-color: #C9A84C;

    .card-image img {
      transform: scale(1.05);
    }
  }

  .card-image {
    height: 250px;
    background: #f0f4f8;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 80px;
      height: 80px;
      color: rgba(11, 26, 51, 0.1);
      transition: all 0.5s ease;
    }

    .industry-badge {
      position: absolute;
      top: 20px;
      left: 20px;
      background: #C9A84C;
      color: #0b1a33;
      padding: 8px 16px;
      border-radius: 30px;
      font-size: 0.8rem;
      font-weight: 800;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  }

  &:hover .card-image svg {
    color: #C9A84C;
    transform: scale(1.1);
  }

  .card-content {
    padding: 40px;

    h3 {
      font-size: 1.8rem;
      font-weight: 900;
      margin-bottom: 20px;
      color: #0b1a33;
    }

    p {
      font-size: 1.1rem;
      color: #666;
      line-height: 1.7;
      margin-bottom: 30px;
    }

    .metrics {
      display: flex;
      gap: 20px;
      margin-bottom: 30px;
      padding-bottom: 30px;
      border-bottom: 1px solid #eee;

      .metric {
        flex: 1;
        
        .value {
          font-size: 1.5rem;
          font-weight: 900;
          color: #C9A84C;
          margin-bottom: 5px;
        }
        
        .label {
          font-size: 0.8rem;
          font-weight: 700;
          color: #999;
          text-transform: uppercase;
        }
      }
    }

    .read-more {
      color: #0b1a33;
      font-weight: 800;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: all 0.3s;

      &:hover {
        color: #C9A84C;
        gap: 15px;
      }
    }
  }
`;

const CTASection = styled.section`
  background: #0b1a33;
  padding: 100px 20px;
  text-align: center;
  color: white;

  h2 {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 20px;
    span { color: #C9A84C; }
  }

  p {
    font-size: 1.2rem;
    color: rgba(255,255,255,0.7);
    margin-bottom: 40px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const CaseStudies = () => {
  const cases = [
    {
      id: 1,
      industry: "Logistics & Fleet",
      title: "Securing 50,000+ Vehicles with Smart QR",
      description: "How a top logistics company eliminated manual entry and improved emergency response times using Tarkshya's proprietary vehicle tags.",
      icon: <Truck />,
      metrics: [
        { value: "50k+", label: "Vehicles Secured" },
        { value: "40%", label: "Faster Response" }
      ]
    },
    {
      id: 2,
      industry: "Corporate & Govt",
      title: "Modernizing Employee Identity",
      description: "A Fortune 500 company deployed Tarkshya's secure medical & emergency clusters for seamless privacy-first identity management.",
      icon: <Building2 />,
      metrics: [
        { value: "100%", label: "Privacy Compliance" },
        { value: "12k+", label: "Employees" }
      ]
    },
    {
      id: 3,
      industry: "FMCG",
      title: "Defeating Counterfeit Products",
      description: "An FMCG giant implemented our unit-level tracking and blockchain-secure identity validation to build consumer trust.",
      icon: <Shield />,
      metrics: [
        { value: "99%", label: "Counterfeit Drop" },
        { value: "2M+", label: "Scans/Month" }
      ]
    },
    {
      id: 4,
      industry: "Education",
      title: "Campus Safety & Student IDs",
      description: "A prominent university network integrated Smart Student IDs with instant parent alerts and bus fleet tracking protocols.",
      icon: <Award />,
      metrics: [
        { value: "25k+", label: "Students Protected" },
        { value: "24/7", label: "Real-time Alerts" }
      ]
    }
  ];

  return (
    <PageWrapper>
      <HeroSection>
        <div className="content">
          <h1>Enterprise <span>Case Studies</span></h1>
          <p>Discover how leading organizations leverage Tarkshya's Smart QR ecosystem to secure their assets, personnel, and brand identity.</p>
        </div>
      </HeroSection>

      <Section bg="light">
        <Container>
          <CaseStudyGrid>
            {cases.map((study) => (
              <CaseStudyCard key={study.id}>
                <div className="card-image">
                  <span className="industry-badge">{study.industry}</span>
                  {study.icon}
                </div>
                <div className="card-content">
                  <h3>{study.title}</h3>
                  <p>{study.description}</p>
                  <div className="metrics">
                    {study.metrics.map((metric, i) => (
                      <div className="metric" key={i}>
                        <div className="value">{metric.value}</div>
                        <div className="label">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="read-more">
                    READ FULL STORY <ArrowRight size={18} />
                  </Link>
                </div>
              </CaseStudyCard>
            ))}
          </CaseStudyGrid>
        </Container>
      </Section>

      <CTASection>
        <Container>
          <h2>Ready to <span>Transform</span> Your Enterprise?</h2>
          <p>Schedule a strategy session with our experts to discuss your custom requirements and implementation roadmap.</p>
          <Button as={Link} to="/contact" variant="primary" style={{ padding: '18px 50px', fontSize: '1rem', background: '#C9A84C', color: '#0b1a33' }}>
            BOOK STRATEGY SESSION
          </Button>
        </Container>
      </CTASection>
    </PageWrapper>
  );
};

export default CaseStudies;
