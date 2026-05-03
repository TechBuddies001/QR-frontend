import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { 
    ArrowLeft, CheckCircle2, Shield, Zap, Smartphone, Bell, Users, 
    ShieldAlert, AlertTriangle, Scan, Activity, ShieldCheck, Lock, 
    ChevronRight, ChevronLeft, Award, Cpu, ShoppingCart, Play
} from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import api from '../lib/api';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';

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
  display: flex;
  overflow-x: auto;
  gap: 30px;
  padding: 20px 0 40px;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  scroll-behavior: smooth;
  
  & > * {
    flex: 0 0 350px;
  }

  @media (max-width: 768px) {
    & > * {
      flex: 0 0 280px;
    }
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
  padding: 0 10px;
  
  .nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 35px;
    height: 35px;
    background: white;
    border: 1px solid #ddd;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    color: #333;
    transition: all 0.3s ease;

    &:hover {
      background: #f8f8f8;
      transform: translateY(-50%) scale(1.1);
    }

    &.prev { left: -15px; }
    &.next { right: -15px; }

    @media (max-width: 1024px) {
       display: none;
    }
  }
`;

const CapabilityCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.06);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #f0f0f0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }

  .img-wrapper {
    height: 200px;
    background: #f8f9fa;
    img { width: 100%; height: 100%; object-fit: cover; }
  }

  .content {
    padding: 20px;
    text-align: left;
    h4 { font-size: 1.1rem; font-weight: 800; color: #000; margin-bottom: 10px; text-transform: uppercase; }
    p { font-size: 0.9rem; color: #666; line-height: 1.5; margin: 0; }
  }
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.06);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
`;

const ProductImageContainer = styled.div`
  position: relative;
  height: 200px;
  background: #f8f9fa;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const FeatureBanner = styled.div`
  background: #B51B2E;
  color: white;
  font-weight: 700;
  font-size: 0.7rem;
  padding: 4px 8px;
  position: absolute;
  top: 10px;
  left: 10px;
  text-transform: uppercase;
  z-index: 2;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 10px 0;
`;

const FeatureTag = styled.span`
  background: #004085;
  color: white;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductInfo = styled.div`
  h4 {
    margin: 10px 0;
    font-size: 1.1rem;
    font-weight: 800;
    color: #000;
    text-transform: uppercase;
  }
`;

const PriceSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
  .current { font-size: 1.5rem; font-weight: 900; color: #B51B2E; }
  .old { font-size: 0.9rem; color: #999; text-decoration: line-through; }
`;

const DiscountText = styled.div`
  color: #27ae60;
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: auto;
  
  .view-btn {
    flex: 1;
    background: #B51B2E;
    color: white;
    text-align: center;
    padding: 12px;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 0.85rem;
    transition: all 0.3s;
    &:hover { background: #941525; }
  }
  
  .cart-btn {
    width: 48px;
    height: 48px;
    background: #B51B2E;
    color: white;
    border: none;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
    &:hover { background: #941525; }
  }
`;

const SectionTitleWrapper = styled.div`
  text-align: left;
  margin-bottom: 40px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;

  h2 {
    font-size: 2rem;
    font-weight: 900;
    color: #000;
    margin-bottom: 15px;
    letter-spacing: -0.5px;
    display: flex;
    align-items: center;
    gap: 15px;
    text-transform: uppercase;
    
    &::before {
      content: '';
      width: 5px;
      height: 32px;
      background: #B51B2E;
      border-radius: 1px;
    }
  }
  
  p {
    max-width: 900px;
    color: #444;
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
  }
`;

const HowItWorksSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 0;

  @media (min-width: 1024px) {
    grid-template-columns: 1.2fr 0.8fr;
  }

  .video-box {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    aspect-ratio: 16/9;
    background: #000;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    
    img { width: 100%; height: 100%; object-fit: cover; opacity: 0.8; }
    
    .play-btn {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80px;
      height: 80px;
      background: #B51B2E;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 0 20px rgba(181, 27, 46, 0.4);
    }
  }

  .content-box {
    h3 { font-size: 2.2rem; font-weight: 900; color: #B51B2E; margin-bottom: 20px; text-transform: uppercase; }
    p { font-size: 1.1rem; line-height: 1.8; color: #333; margin-bottom: 30px; }
  }
`;

const ProductGrid = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 25px;
  padding: 10px 0 40px;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  scroll-behavior: smooth;
  
  & > * {
    flex: 0 0 320px;
  }

  @media (max-width: 768px) {
    & > * {
      flex: 0 0 280px;
    }
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
  const { language } = useLanguage();
  const t = translations[language].categoryDetails;
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiUrl = window.location.hostname === 'localhost' ? 'http://localhost:5001' : '';

  const scrollRefs = {
    prevention: React.useRef(null),
    emergency: React.useRef(null),
    tracking: React.useRef(null),
    products: React.useRef(null)
  };

  const handleScroll = (ref, dir) => {
    if (ref.current) {
      const scrollAmount = 400;
      ref.current.scrollBy({ left: dir === 'next' ? scrollAmount : -scrollAmount, behavior: 'smooth' });
    }
  };

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
         <p style={{ marginTop: '25px', fontWeight: 800, letterSpacing: '3px', fontSize: '1.2rem' }}>{t.initializing}</p>
      </div>
    </div>
  );

  if (!data) return <div style={{ padding: '150px 20px', textAlign: 'center', fontSize: '1.5rem', fontWeight: 800, color: '#0b1a33' }}>{t.notFound}</div>;

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
          {language === 'hi' ? (data.description_hi || data.description) : (data.description)}
        </DescriptionText>
      </Header>

      {/* Prevention Section */}
      {data.preventionHeading && (
        <Section bg="transparent">
          <SectionTitleWrapper>
            <h2>{renderTitle(language === 'hi' ? (data.preventionHeading_hi || data.preventionHeading) : data.preventionHeading)}</h2>
            <p>{language === 'hi' ? (data.preventionText_hi || data.preventionText) : data.preventionText}</p>
          </SectionTitleWrapper>
          <CarouselWrapper>
            <button className="nav-btn prev" onClick={() => handleScroll(scrollRefs.prevention, 'prev')}><ChevronLeft /></button>
            <CapabilityGrid ref={scrollRefs.prevention}>
              {data.preventionCards.map((card, i) => (
                <CapabilityCard key={i}>
                  <div className="img-wrapper">
                    <img src={card.image ? `${apiUrl}${card.image}` : "/assets/car_qr_tag_mockup_1776107740073.png"} alt={card.title} />
                  </div>
                  <div className="content">
                    <h4>{language === 'hi' ? (card.title_hi || card.title) : card.title}</h4>
                    <p>{language === 'hi' ? (card.text_hi || card.text) : card.text}</p>
                  </div>
                </CapabilityCard>
              ))}
            </CapabilityGrid>
            <button className="nav-btn next" onClick={() => handleScroll(scrollRefs.prevention, 'next')}><ChevronRight /></button>
          </CarouselWrapper>
        </Section>
      )}

      {/* Emergency Section */}
      {data.emergencyHeading && (
        <Section bg="#ffffff">
          <SectionTitleWrapper>
            <h2>{renderTitle(language === 'hi' ? (data.emergencyHeading_hi || data.emergencyHeading) : data.emergencyHeading)}</h2>
            <p>{language === 'hi' ? (data.emergencyText_hi || data.emergencyText) : data.emergencyText}</p>
          </SectionTitleWrapper>
          <CarouselWrapper>
            <button className="nav-btn prev" onClick={() => handleScroll(scrollRefs.emergency, 'prev')}><ChevronLeft /></button>
            <CapabilityGrid ref={scrollRefs.emergency}>
              {data.emergencyCards.map((card, i) => (
                <CapabilityCard key={i}>
                  <div className="img-wrapper">
                    <img src={card.image ? `${apiUrl}${card.image}` : "/assets/car_qr_tag_mockup_1776107740073.png"} alt={card.title} />
                  </div>
                  <div className="content">
                    <h4>{language === 'hi' ? (card.title_hi || card.title) : card.title}</h4>
                    <p>{language === 'hi' ? (card.text_hi || card.text) : card.text}</p>
                  </div>
                </CapabilityCard>
              ))}
            </CapabilityGrid>
            <button className="nav-btn next" onClick={() => handleScroll(scrollRefs.emergency, 'next')}><ChevronRight /></button>
          </CarouselWrapper>
        </Section>
      )}

      {/* How It Works Section */}
      {(data.howItWorksHeading || data.howItWorksText) && (
        <Section bg="#f8f9fa">
          <HowItWorksSection>
            <div className="video-box">
              <img src="/assets/car_qr_tag_mockup_1776107740073.png" alt="How it works" />
              <div className="play-btn">
                <Play size={40} fill="white" />
              </div>
            </div>
            <div className="content-box">
              <h3>{language === 'hi' ? (data.howItWorksHeading_hi || data.howItWorksHeading) : data.howItWorksHeading}</h3>
              <p>{language === 'hi' ? (data.howItWorksText_hi || data.howItWorksText) : data.howItWorksText}</p>
              <Button as="a" href="#" style={{ background: '#B51B2E', borderColor: '#B51B2E' }}>DISCOVER MORE</Button>
            </div>
          </HowItWorksSection>
        </Section>
      )}

      {/* Tracking / Smart Card Section */}
      {data.trackingHeading && (
        <Section bg="#fdfdfd">
          <SectionTitleWrapper>
            <h2>{renderTitle(language === 'hi' ? (data.trackingHeading_hi || data.trackingHeading) : data.trackingHeading)}</h2>
            <p>{language === 'hi' ? (data.trackingText_hi || data.trackingText) : data.trackingText}</p>
          </SectionTitleWrapper>
          <CarouselWrapper>
            <button className="nav-btn prev" onClick={() => handleScroll(scrollRefs.tracking, 'prev')}><ChevronLeft /></button>
            <CapabilityGrid ref={scrollRefs.tracking}>
              {data.trackingCards.map((card, i) => (
                <CapabilityCard key={i}>
                  <div className="img-wrapper">
                    <img src={card.image ? `${apiUrl}${card.image}` : "/assets/car_qr_tag_mockup_1776107740073.png"} alt={card.title} />
                  </div>
                  <div className="content">
                    <h4>{language === 'hi' ? (card.title_hi || card.title) : card.title}</h4>
                    <p>{language === 'hi' ? (card.text_hi || card.text) : card.text}</p>
                  </div>
                </CapabilityCard>
              ))}
            </CapabilityGrid>
            <button className="nav-btn next" onClick={() => handleScroll(scrollRefs.tracking, 'next')}><ChevronRight /></button>
          </CarouselWrapper>
        </Section>
      )}

       {/* Products Section */}
      {data.products && data.products.length > 0 && (
        <Section bg="#fdfdfd">
           <SectionTitleWrapper>
                <h2>{t.relatedProducts}</h2>
                <p>{t.productsDesc}</p>
            </SectionTitleWrapper>
            <CarouselWrapper>
              <button className="nav-btn prev" onClick={() => handleScroll(scrollRefs.products, 'prev')}><ChevronLeft /></button>
              <ProductGrid ref={scrollRefs.products}>
                {data.products.map(product => {
                  const photos = typeof product.photos === 'string' ? JSON.parse(product.photos || "[]") : (product.photos || []);
                  const dynamicData = typeof product.dynamicData === 'string' ? JSON.parse(product.dynamicData || "[]") : (product.dynamicData || []);
                  const mainPhoto = photos[0] ? (photos[0].startsWith('http') ? photos[0] : `${apiUrl}${photos[0]}`) : "/assets/car_qr_tag_mockup_1776107740073.png";
                  
                  return (
                    <ProductCard key={product.id}>
                      <ProductImageContainer>
                        <img src={mainPhoto} alt={product.name} />
                        <FeatureBanner>Features</FeatureBanner>
                      </ProductImageContainer>
                      
                      <FeatureGrid>
                        {dynamicData.slice(0, 4).map((feat, idx) => (
                          <FeatureTag key={idx} title={feat.value}>{feat.label}</FeatureTag>
                        ))}
                      </FeatureGrid>

                      <ProductInfo>
                        <h4>{language === 'hi' ? (product.name_hi || product.name) : product.name}</h4>
                      </ProductInfo>

                      <PriceSection>
                        <span className="current">₹{product.mrp}</span>
                        <span className="old">₹{Math.round(product.mrp * 1.5)}</span>
                      </PriceSection>

                      <DiscountText>40% OFF* (Pack of 3)</DiscountText>

                      <ActionButtons>
                        <Link to={`/product/${product.id}`} className="view-btn">View Details</Link>
                        <button className="cart-btn" title="Add to Cart">
                          <ShoppingCart size={20} />
                        </button>
                      </ActionButtons>
                    </ProductCard>
                  );
                })}
              </ProductGrid>
              <button className="nav-btn next" onClick={() => handleScroll(scrollRefs.products, 'next')}><ChevronRight /></button>
            </CarouselWrapper>
        </Section>
      )}

      <Section bg="#ffffff">
        <ContentGrid>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <div style={{ width: '40px', height: '3px', background: '#C9A84C', borderRadius: '2px' }}></div>
                <span style={{ fontSize: '0.9rem', fontWeight: 900, color: '#C9A84C', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{t.precisionSecurity}</span>
            </div>
            <h2 style={{ fontSize: '3.2rem', fontWeight: 900, color: '#0b1a33', marginBottom: '40px', letterSpacing: '-1.5px', lineHeight: 1.1 }}>
              {t.advancedProtocols.split(' ')[0]} <span style={{color: '#C9A84C'}}>{t.advancedProtocols.split(' ').slice(1).join(' ')}</span>
            </h2>
            
            <CapabilityGrid style={{ marginTop: 0 }}>
              {data.features.map((feature, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '15px', background: '#f8f9fa', padding: '20px', borderRadius: '16px' }}>
                  <div style={{ color: '#C9A84C' }}>
                    <ShieldCheck size={24} />
                  </div>
                  <h4 style={{ margin: 0, fontWeight: 700, color: '#0b1a33', fontSize: '1rem' }}>
                    {language === 'hi' ? (feature.name_hi || feature.name || feature) : (feature.name || feature)}
                  </h4>
                </div>
              ))}
            </CapabilityGrid>

            {data.features.length === 0 && (
              <p style={{ color: '#777', padding: '30px', background: '#f8f9fa', borderRadius: '16px', borderLeft: '4px solid #C9A84C' }}>
                {t.standardProtocols}
              </p>
            )}

            <WhyChooseCard>
              <h3><Award size={28} /> {t.strategicProtection}</h3>
              <p>{language === 'hi' ? (data.benefits_hi || data.benefits) : data.benefits}</p>
            </WhyChooseCard>
          </div>

          <ImageWrapper>
            <div className="image-container">
              <img src={data.heroImage ? `${apiUrl}${data.heroImage}` : '/assets/car_qr_tag_mockup_1776107740073.png'} alt={data.name} />
              <div style={{ position: 'absolute', bottom: '30px', right: '-30px', background: 'white', padding: '20px 30px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '15px' }}>
                 <div style={{ color: '#27ae60', background: '#eafaf1', padding: '10px', borderRadius: '12px' }}><CheckCircle2 size={28} /></div>
                 <div>
                    <div style={{ fontSize: '1rem', fontWeight: 900, color: '#0b1a33' }}>{t.verifiedSecurity}</div>
                    <div style={{ fontSize: '0.7rem', color: '#888', fontWeight: 800, marginTop: '2px' }}>{t.certifiedHardware}</div>
                 </div>
              </div>
            </div>

            <div className="stats">
              <div className="stat-item">
                <div className="value">99.9%</div>
                <div className="label">{t.stats.scanRate}</div>
              </div>
              <div className="stat-item">
                <div className="value">&lt;2s</div>
                <div className="label">{t.stats.alertSpeed}</div>
              </div>
              <div className="stat-item">
                <div className="value">AES-256</div>
                <div className="label">{t.stats.encryption}</div>
              </div>
            </div>
          </ImageWrapper>
        </ContentGrid>
      </Section>
    </div>
  );
};

export default CategoryDetails;
