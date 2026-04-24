import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { 
    ArrowLeft, CheckCircle2, Shield, Zap, Smartphone, Bell, Users, 
    ShieldAlert, AlertTriangle, Scan, Activity, ShieldCheck, Lock, 
    ChevronRight, Award, Cpu
} from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import api from '../lib/api';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-10px) rotate(2deg); }
  100% { transform: translateY(0) rotate(0); }
`;

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(201, 168, 76, 0.4); }
  70% { box-shadow: 0 0 0 20px rgba(201, 168, 76, 0); }
  100% { box-shadow: 0 0 0 0 rgba(201, 168, 76, 0); }
`;

const Header = styled.div`
  background: linear-gradient(135deg, #0b1a33 0%, #1a2a44 100%);
  padding: 160px 0 100px;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%; left: -50%; width: 200%; height: 200%;
    background: radial-gradient(circle at 50% 50%, rgba(201, 168, 76, 0.05) 0%, transparent 50%);
    animation: ${float} 20s linear infinite;
    pointer-events: none;
  }
`;

const IconCircle = styled.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.05));
  backdrop-filter: blur(20px);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 40px;
  color: #C9A84C;
  border: 1px solid rgba(201, 168, 76, 0.4);
  position: relative;
  animation: ${float} 6s ease-in-out infinite, ${pulseGlow} 3s infinite;
  transform: rotate(45deg);

  > * {
    transform: rotate(-45deg);
  }
`;

const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 900;
  letter-spacing: -2px;
  margin-bottom: 20px;
  line-height: 1.1;
  background: linear-gradient(to right, #ffffff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${fadeIn} 0.8s ease-out;

  span {
    background: linear-gradient(to right, #C9A84C, #F2D06B);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) { font-size: 3rem; }
`;

const DescriptionText = styled.p`
  max-width: 700px;
  margin: 20px auto 0;
  color: rgba(255,255,255,0.8);
  font-size: 1.25rem;
  line-height: 1.7;
  font-weight: 400;
  animation: ${fadeIn} 1s ease-out 0.2s both;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 80px;
  align-items: flex-start;
  @media (min-width: 1024px) {
    grid-template-columns: 1.1fr 0.9fr;
  }
`;

const CapabilityGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-top: 50px;
  @media (min-width: 640px) { grid-template-columns: 1fr 1fr; }
`;

const CapabilityCard = styled.div`
  background: #ffffff;
  padding: 30px;
  border-radius: 24px;
  border: 1px solid rgba(0,0,0,0.05);
  box-shadow: 0 10px 40px rgba(0,0,0,0.04);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 4px;
    background: linear-gradient(90deg, #0b1a33, #C9A84C);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(11, 26, 51, 0.1);
    &::before { transform: scaleX(1); }
  }

  .img-wrapper {
    width: 100%;
    height: 220px;
    border-radius: 16px;
    overflow: hidden;
    position: relative;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }
    
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(11,26,51,0.6) 0%, transparent 100%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  }

  &:hover .img-wrapper img { transform: scale(1.08); }
  &:hover .img-wrapper::after { opacity: 1; }

  .icon-small {
    width: 50px;
    height: 50px;
    background: #f4f6f8;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0b1a33;
    transition: all 0.3s ease;
    position: absolute;
    top: 45px;
    right: 45px;
    z-index: 2;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }

  &:hover .icon-small { background: #C9A84C; color: white; transform: rotate(10deg); }

  h4 { color: #0b1a33; font-weight: 800; font-size: 1.2rem; margin-top: 5px; }
  p { font-size: 0.95rem; color: #555; lineHeight: 1.6; }
`;

const SectionTitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 60px;

  h2 {
    font-size: 2.8rem;
    font-weight: 900;
    color: #0b1a33;
    margin-bottom: 20px;
    letter-spacing: -1px;
    
    span { color: #C9A84C; }
  }
  
  p {
    max-width: 700px;
    margin: 0 auto;
    color: #666;
    font-size: 1.15rem;
    line-height: 1.7;
  }
`;

const WhyChooseCard = styled.div`
  background: linear-gradient(135deg, #0b1a33, #1a2a44);
  color: white;
  padding: 40px;
  border-radius: 32px;
  margin-top: 50px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(11, 26, 51, 0.2);

  h3 { 
    font-size: 1.5rem; 
    font-weight: 900; 
    margin-bottom: 20px; 
    display: flex; 
    align-items: center; 
    gap: 12px;
    color: #C9A84C;
  }
  
  p { opacity: 0.8; line-height: 1.7; font-size: 1.05rem; }

  &::after {
    content: '';
    position: absolute;
    bottom: -20px; right: -20px;
    width: 200px; height: 200px;
    background: radial-gradient(circle, rgba(201, 168, 76, 0.15) 0%, transparent 70%);
  }
`;

const ImageWrapper = styled.div`
  position: sticky;
  top: 120px;
  .image-container {
    position: relative;
    padding: 20px;
    background: white;
    border-radius: 40px;
    box-shadow: 0 40px 80px rgba(0,0,0,0.08);
    
    img { 
      width: 100%; 
      border-radius: 25px; 
      display: block; 
      transition: transform 0.5s ease;
    }
  }

  .stats {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    background: white;
    padding: 30px;
    border-radius: 24px;
    box-shadow: 0 20px 40px rgba(0,0,0,0.05);
    text-align: center;
    border: 1px solid rgba(0,0,0,0.02);
    
    .stat-item {
      .value { font-size: 1.8rem; font-weight: 900; color: #0b1a33; margin-bottom: 5px; }
      .label { font-size: 0.75rem; font-weight: 800; color: #999; text-transform: uppercase; letter-spacing: 1px; }
    }
  }
`;

const getIcon = (name) => {
  const icons = {
    'ShieldAlert': <ShieldAlert size={50} />,
    'AlertTriangle': <AlertTriangle size={50} />,
    'Users': <Users size={50} />,
    'Scan': <Scan size={50} />,
    'Zap': <Zap size={50} />,
    'Bell': <Bell size={50} />,
    'ShieldCheck': <ShieldCheck size={50} />,
    'Activity': <Activity size={50} />,
    'Smartphone': <Smartphone size={50} />,
    'Lock': <Lock size={50} />
  };
  return icons[name] || <Shield size={50} />;
};

const CategoryDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiUrl = window.location.hostname === 'localhost' ? 'http://localhost:5001' : '';

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const all = await api.get('/categories');
        const found = all.data?.categories?.find(c => c.id === id);
        if (found) {
          found.features = typeof found.features === 'string' ? JSON.parse(found.features || "[]") : (found.features || []);
          found.preventionCards = typeof found.preventionCards === 'string' ? JSON.parse(found.preventionCards || "[]") : (found.preventionCards || []);
          found.emergencyCards = typeof found.emergencyCards === 'string' ? JSON.parse(found.emergencyCards || "[]") : (found.emergencyCards || []);
          found.trackingCards = typeof found.trackingCards === 'string' ? JSON.parse(found.trackingCards || "[]") : (found.trackingCards || []);
          setData(found);
        }
      } catch (err) {
        console.error('Failed to fetch category details:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchCategory();
  }, [id]);

  if (loading) return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0b1a33', color: 'white' }}>
      <div style={{ textAlign: 'center' }}>
         <Cpu size={50} className="animate-spin" color="#C9A84C" />
         <p style={{ marginTop: '25px', fontWeight: 800, letterSpacing: '3px', fontSize: '1.2rem' }}>INITIALIZING MODULE</p>
      </div>
    </div>
  );

  if (!data) return <div style={{ padding: '150px 20px', textAlign: 'center', fontSize: '1.5rem', fontWeight: 800, color: '#0b1a33' }}>Module not found in Ecosystem.</div>;

  const renderTitle = (name) => {
    if (!name) return 'Category Details';
    const words = name.split(' ');
    if (words.length === 1) return name;
    return (
      <>
        {words.slice(0, -1).join(' ')} <span>{words[words.length - 1]}</span>
      </>
    );
  };

  return (
    <div style={{ background: '#fcfcfc' }}>
      <Header>
        <IconCircle>
          {getIcon(data.icon)}
        </IconCircle>
        <Title>
          {renderTitle(data.name)}
        </Title>
        <DescriptionText>
          {data.description || 'Advanced security protocols for your peace of mind.'}
        </DescriptionText>
      </Header>

      {/* Prevention Section */}
      {data.preventionHeading && (
        <Section bg="transparent">
          <SectionTitleWrapper>
            <h2>{renderTitle(data.preventionHeading)}</h2>
            <p>{data.preventionText}</p>
          </SectionTitleWrapper>
          <CapabilityGrid>
            {data.preventionCards.map((card, i) => (
              <CapabilityCard key={i}>
                <div className="icon-small">
                   <ShieldCheck size={24} />
                </div>
                <div className="img-wrapper">
                  <img src={card.image ? `${apiUrl}${card.image}` : "/assets/car_qr_tag_mockup_1776107740073.png"} alt={card.title} />
                </div>
                <div>
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </div>
              </CapabilityCard>
            ))}
          </CapabilityGrid>
        </Section>
      )}

      {/* Emergency Section */}
      {data.emergencyHeading && (
        <Section bg="#ffffff">
          <SectionTitleWrapper>
            <h2>{renderTitle(data.emergencyHeading)}</h2>
            <p>{data.emergencyText}</p>
          </SectionTitleWrapper>
          <CapabilityGrid>
            {data.emergencyCards.map((card, i) => (
              <CapabilityCard key={i}>
                <div className="icon-small" style={{ background: '#fff0f0', color: '#e74c3c' }}>
                   <AlertTriangle size={24} />
                </div>
                <div className="img-wrapper">
                  <img src={card.image ? `${apiUrl}${card.image}` : "/assets/car_qr_tag_mockup_1776107740073.png"} alt={card.title} />
                </div>
                <div>
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </div>
              </CapabilityCard>
            ))}
          </CapabilityGrid>
        </Section>
      )}

      {/* How It Works Section */}
      {data.howItWorksHeading && (
        <Section bg="transparent">
          <ContentGrid>
             <div style={{ paddingTop: '20px' }}>
                <h2 style={{ fontSize: '2.8rem', fontWeight: 900, color: '#0b1a33', marginBottom: '25px', letterSpacing: '-1px' }}>
                  {renderTitle(data.howItWorksHeading)}
                </h2>
                <p style={{ color: '#555', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '40px' }}>{data.howItWorksText}</p>
                <Button size="large" style={{ borderRadius: '100px', padding: '15px 40px', fontSize: '1.1rem' }}>DISCOVER MORE</Button>
             </div>
             <div style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.1)' }}>
                {data.videoUrl ? (
                  <iframe width="100%" height="450" src={data.videoUrl.replace('watch?v=', 'embed/')} title="How It Works" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                ) : (
                  <img src="/assets/car_qr_tag_mockup_1776107740073.png" alt="How it works" style={{ width: '100%', height: '450px', objectFit: 'cover' }} />
                )}
             </div>
          </ContentGrid>
        </Section>
      )}

      {/* Tracking Section */}
      {data.trackingHeading && (
        <Section bg="#0b1a33" color="white" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'url(/assets/grid-pattern.svg) center/cover', opacity: 0.05 }}></div>
          <SectionTitleWrapper style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ color: 'white' }}>{renderTitle(data.trackingHeading)}</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>{data.trackingText}</p>
          </SectionTitleWrapper>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', position: 'relative', zIndex: 1 }}>
            {data.trackingCards.map((card, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.03)', padding: '50px 30px', borderRadius: '24px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
              >
                 <div style={{ color: '#C9A84C', marginBottom: '25px', display: 'flex', justifyCenter: 'center' }}>
                    <Smartphone size={48} style={{ margin: '0 auto' }} />
                 </div>
                 <h4 style={{ fontWeight: 800, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'white' }}>{card.title}</h4>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Products Section */}
      {data.products && data.products.length > 0 && (
        <Section bg="#f8f9fa">
           <SectionTitleWrapper>
                <h2>Related <span>Products</span></h2>
                <p>Explore specialized security hardware for this ecosystem module.</p>
            </SectionTitleWrapper>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
              {data.products.map(product => (
                <CapabilityCard key={product.id} as={Link} to={`/product/${product.id}`} style={{ textDecoration: 'none', padding: '0', background: 'white' }}>
                  <div className="img-wrapper" style={{ height: '280px', borderRadius: '24px 24px 0 0' }}>
                    <img src={product.photos ? `${apiUrl}${JSON.parse(product.photos)[0]}` : "/assets/car_qr_tag_mockup_1776107740073.png"} alt={product.name} />
                  </div>
                  <div style={{ padding: '30px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                      <h4 style={{ margin: 0, fontSize: '1.4rem' }}>{product.name}</h4>
                      <div style={{ background: 'rgba(201, 168, 76, 0.1)', color: '#C9A84C', padding: '8px 15px', borderRadius: '100px', fontWeight: 900, fontSize: '1.1rem' }}>₹{product.mrp}</div>
                    </div>
                    <Button style={{ width: '100%', borderRadius: '12px', padding: '15px' }}>VIEW SPECIFICATIONS</Button>
                  </div>
                </CapabilityCard>
              ))}
            </div>
        </Section>
      )}

      <Section bg="#ffffff">
        <ContentGrid>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <div style={{ width: '40px', height: '3px', background: '#C9A84C', borderRadius: '2px' }}></div>
                <span style={{ fontSize: '0.9rem', fontWeight: 900, color: '#C9A84C', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Precision Security</span>
            </div>
            <h2 style={{ fontSize: '3.2rem', fontWeight: 900, color: '#0b1a33', marginBottom: '40px', letterSpacing: '-1.5px', lineHeight: 1.1 }}>
              Advanced <span style={{color: '#C9A84C'}}>Protocols</span>
            </h2>
            
            <CapabilityGrid style={{ marginTop: 0 }}>
              {data.features.map((feature, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '15px', background: '#f8f9fa', padding: '20px', borderRadius: '16px' }}>
                  <div style={{ color: '#C9A84C' }}>
                    <ShieldCheck size={24} />
                  </div>
                  <h4 style={{ margin: 0, fontWeight: 700, color: '#0b1a33', fontSize: '1rem' }}>{feature}</h4>
                </div>
              ))}
            </CapabilityGrid>

            {data.features.length === 0 && (
              <p style={{ color: '#777', padding: '30px', background: '#f8f9fa', borderRadius: '16px', borderLeft: '4px solid #C9A84C' }}>
                Standard Tarkshya security encryption protocols applied. Detailed specifications available on request.
              </p>
            )}

            <WhyChooseCard>
              <h3><Award size={28} /> Strategic Protection</h3>
              <p>{data.benefits || 'High-security QR protection designed for critical infrastructure and personal safety. Powered by Jiyo India encryption.'}</p>
            </WhyChooseCard>
          </div>

          <ImageWrapper>
            <div className="image-container">
              <img src={data.heroImage ? `${apiUrl}${data.heroImage}` : '/assets/car_qr_tag_mockup_1776107740073.png'} alt={data.name} />
              <div style={{ position: 'absolute', bottom: '30px', right: '-30px', background: 'white', padding: '20px 30px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '15px' }}>
                 <div style={{ color: '#27ae60', background: '#eafaf1', padding: '10px', borderRadius: '12px' }}><CheckCircle2 size={28} /></div>
                 <div>
                    <div style={{ fontSize: '1rem', fontWeight: 900, color: '#0b1a33' }}>Verified Security</div>
                    <div style={{ fontSize: '0.7rem', color: '#888', fontWeight: 800, marginTop: '2px' }}>CERTIFIED HARDWARE</div>
                 </div>
              </div>
            </div>

            <div className="stats">
              <div className="stat-item">
                <div className="value">99.9%</div>
                <div className="label">Scan Rate</div>
              </div>
              <div className="stat-item">
                <div className="value">&lt;2s</div>
                <div className="label">Alert Speed</div>
              </div>
              <div className="stat-item">
                <div className="value">AES-256</div>
                <div className="label">Encryption</div>
              </div>
            </div>
          </ImageWrapper>
        </ContentGrid>
      </Section>
    </div>
  );
};

export default CategoryDetails;
