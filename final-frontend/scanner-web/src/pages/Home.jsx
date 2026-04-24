
import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';
import styled, { keyframes } from 'styled-components';
import { 
    Shield, 
    Smartphone, 
    Bell, 
    Lock, 
    Activity, 
    Users, 
    Zap, 
    Scan, 
    ShieldAlert, 
    ArrowRight,
    MapPin,
    Eye,
    CheckCircle2,
    Car,
    Bike,
    Baby,
    Dog,
    DoorOpen,
    CreditCard,
    Briefcase,
    AlertTriangle,
    Navigation,
    PhoneCall,
    Volume2,
    History,
    ShoppingCart,
    ShieldCheck
} from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';
import api from '../lib/api';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const HeroSection = styled.section`
  min-height: 65vh;
  background-color: #0b1a33;
  background-image: 
    radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0);
  background-size: 40px 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 100px;
  padding-bottom: 40px;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 70% 50%, rgba(201, 168, 76, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const HeroContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 30px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Tagline = styled.h1`
  font-size: 2.5rem;
  line-height: 1.1;
  margin-bottom: 20px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -1px;
  
  .dim {
    display: block;
    color: white;
  }

  .highlight {
    color: #C9A84C;
    display: block;
    font-size: 3.5rem;
    margin-top: 5px;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
    .highlight {
      font-size: 4.5rem;
    }
  }
`;

const Subtext = styled.p`
  font-size: 1.1rem;
  opacity: 0.7;
  margin-bottom: 30px;
  max-width: 500px;
  line-height: 1.6;
`;

const HeroImage = styled.div`
  position: relative;
  max-width: 70%;
  margin: 0 auto;
  @media (min-width: 1024px) { margin: 0 0 0 auto; }
  img {
    width: 100%;
    border-radius: 30px;
    box-shadow: 0 50px 100px rgba(0,0,0,0.5);
    border: 1px solid rgba(255,255,255,0.1);
  }
`;

const ActionButton = styled(Link)`
  background-color: ${props => props.variant === 'outline' ? 'transparent' : '#C9A84C'};
  color: ${props => props.variant === 'outline' ? 'white' : '#0b1a33'};
  border: 2px solid ${props => props.variant === 'outline' ? 'white' : '#C9A84C'};
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 800;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-3px);
    background-color: ${props => props.variant === 'outline' ? 'white' : '#B08D35'};
    color: #0b1a33;
  }
`;

// --- New Sections ---

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 60px;
  h2 {
    font-size: 2.5rem;
    color: #0b1a33;
    font-weight: 800;
    text-transform: uppercase;
    span { color: #C9A84C; }
  }
  p { color: #666; margin-top: 10px; font-size: 1.1rem; }
  .line {
    width: 80px;
    height: 4px;
    background: #C9A84C;
    margin: 20px auto;
  }
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const CategoryCard = styled(Link)`
  background: white;
  border: 1px solid #eee;
  padding: 30px 20px;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    transform: translateY(-10px);
    border-color: #C9A84C;
    box-shadow: 0 15px 30px rgba(0,0,0,0.05);
    .icon-box { background: #0b1a33; color: #C9A84C; }
  }
  .icon-box {
    width: 70px;
    height: 70px;
    background: #f8f9fa;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    color: #0b1a33;
    transition: all 0.3s ease;
  }
  h3 { font-size: 0.9rem; font-weight: 800; text-transform: uppercase; color: #0b1a33; }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ModernProductCard = styled.div`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid #eee;
  transition: all 0.4s ease;
  position: relative;
  &:hover {
    transform: translateY(-12px);
    border-color: #C9A84C;
    box-shadow: 0 30px 60px rgba(11, 26, 51, 0.1);
  }
  .badge {
    position: absolute;
    top: 20px;
    right: 20px;
    background: #0b1a33;
    color: #C9A84C;
    padding: 6px 12px;
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 700;
    z-index: 2;
  }
  .img-box {
    height: 250px;
    background: #f8f9fa;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    img { max-width: 80%; max-height: 80%; object-fit: contain; }
  }
  .content {
    padding: 25px;
    h3 { font-size: 1.25rem; font-weight: 800; color: #0b1a33; margin-bottom: 8px; }
    .features {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin-bottom: 20px;
      span {
        font-size: 0.7rem;
        background: #f0f2f5;
        color: #0b1a33;
        padding: 4px 8px;
        border-radius: 4px;
        font-weight: 600;
        text-align: center;
      }
    }
    .price-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price {
        font-size: 1.4rem;
        font-weight: 900;
        color: #0b1a33;
        span { font-size: 0.9rem; color: #999; text-decoration: line-through; margin-left: 5px; }
      }
      .discount { color: #2ecc71; font-weight: 700; font-size: 0.85rem; }
    }
  }
  .footer {
    padding: 0 25px 25px;
    display: flex;
    gap: 10px;
    button { flex: 1; }
  }
`;

const CircularServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 30px;
  max-width: 1100px;
  margin: 0 auto;
`;

const ServiceItem = styled.div`
  text-align: center;
  .circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: white;
    border: 2px solid #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 15px;
    color: #0b1a33;
    transition: all 0.3s ease;
    box-shadow: 0 10px 20px rgba(0,0,0,0.03);
    &:hover {
      border-color: #C9A84C;
      color: #C9A84C;
      transform: scale(1.1);
      box-shadow: 0 15px 30px rgba(201, 168, 76, 0.2);
    }
  }
  span { font-size: 0.8rem; font-weight: 700; text-transform: uppercase; color: #0b1a33; }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureBox = styled.div`
  background: white;
  padding: 30px 20px;
  border-radius: 20px;
  border: 1px solid #eee;
  text-align: center;
  transition: all 0.3s ease;
  &:hover {
    border-color: #C9A84C;
    background: #0b1a33;
    h4 { color: #C9A84C; }
    .icon { color: white; transform: rotateY(360deg); }
  }
  .icon { font-size: 2.5rem; color: #0b1a33; margin-bottom: 15px; transition: all 0.6s ease; }
  h4 { font-size: 0.85rem; font-weight: 800; text-transform: uppercase; color: #0b1a33; }
`;

const AboutContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  h2 { font-size: 2.5rem; color: #0b1a33; font-weight: 900; margin-bottom: 30px; }
  p { font-size: 1.1rem; line-height: 1.8; color: #555; margin-bottom: 40px; }
  .stats {
    display: flex;
    justify-content: center;
    gap: 60px;
    flex-wrap: wrap;
    .stat-item {
      h3 { font-size: 2.5rem; color: #C9A84C; font-weight: 900; }
      span { font-size: 0.9rem; text-transform: uppercase; font-weight: 700; color: #0b1a33; }
    }
  }
`;

const getIcon = (name) => {
  const icons = {
    'ShieldAlert': <ShieldAlert size={32} />,
    'AlertTriangle': <AlertTriangle size={32} />,
    'Users': <Users size={32} />,
    'Scan': <Scan size={32} />,
    'Zap': <Zap size={32} />,
    'Bell': <Bell size={32} />,
    'ShieldCheck': <ShieldCheck size={32} />,
    'Activity': <Activity size={32} />,
    'Smartphone': <Smartphone size={32} />,
    'Lock': <Lock size={32} />
  };
  return icons[name] || <Shield size={32} />;
};

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [securityFeatures, setSecurityFeatures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiUrl, setApiUrl] = useState('');

  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (e, product) => {
    e.preventDefault();
    e.stopPropagation();

    const token = localStorage.getItem('admin_token');
    if (!token) {
      toast.error('Please login to add items to your cart.', {
        icon: '🔒',
        style: {
          borderRadius: '100px',
          background: '#0b1a33',
          color: '#fff',
        },
      });
      navigate(`/login?returnUrl=${encodeURIComponent(window.location.pathname)}`);
      return;
    }

    addToCart(product);
    toast.success(`${product.name} added to cart!`, {
      icon: '🛒',
      style: {
        borderRadius: '100px',
        background: '#0b1a33',
        color: '#fff',
      },
    });
  };

  useEffect(() => {
    setApiUrl(window.location.hostname === 'localhost' ? 'http://localhost:5001' : '');
    const fetchData = async () => {
      try {
        const results = await Promise.allSettled([
          api.get('/categories'),
          api.get('/products?type=SAFETY'),
          api.get('/public/settings')
        ]);
        
        if (results[0].status === 'fulfilled') {
          setCategories(results[0].value.data?.categories || []);
        }
        if (results[1].status === 'fulfilled') {
          setProducts(results[1].value.data?.products || []);
        }
        if (results[2].status === 'fulfilled') {
          try {
            const parsed = JSON.parse(results[2].value.data?.settings?.homeSecurityFeatures || "[]");
            if (parsed.length > 0) setSecurityFeatures(parsed);
          } catch(e) {}
        }
      } catch (err) {
        console.error('Failed to fetch home data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <HeroSection>
        <HeroContainer>
          <div>
            <Tagline>
              <span className="dim">The Next Evolution of</span>
              <span className="highlight">Smart Safety</span>
            </Tagline>
            <Subtext>
              Tarkshya provides a high-security ecosystem that protects your vehicle, family, and property through advanced QR-based communication.
            </Subtext>
            <div style={{ display: 'flex', gap: '15px' }}>
              <ActionButton to="/smart-qr">GET STARTED</ActionButton>
              <ActionButton to="/watch-demo" variant="outline">WATCH DEMO</ActionButton>
            </div>
          </div>
          <HeroImage>
            <img src="/assets/car_qr_tag_mockup_1776107740073.png" alt="Tarkshya Smart Tag" />
          </HeroImage>
        </HeroContainer>
      </HeroSection>

      <Section bg="light">
        <SectionTitle>
          <h2>Top <span>Categories</span></h2>
          <p>Explore our wide range of safety solutions for all your needs</p>
          <div className="line" />
        </SectionTitle>
        <CategoryGrid>
          {categories.map((cat) => (
            <CategoryCard key={cat.id} to={`/category/${cat.id}`}>
              <div className="icon-box">{getIcon(cat.icon)}</div>
              <h3>{cat.name}</h3>
            </CategoryCard>
          ))}
          {categories.length === 0 && !loading && (
            <p style={{ textAlign: 'center', gridColumn: '1/-1', color: '#999', padding: '40px' }}>No categories found. Manage them in Admin Panel.</p>
          )}
        </CategoryGrid>
      </Section>

      <Section bg="white">
        <SectionTitle>
          <h2>Smart <span>Safety IDs</span></h2>
          <p>Next-Gen Emergency QR Ecosystem for People & Property</p>
          <div className="line" />
        </SectionTitle>
        <ProductGrid>
          {products.map((prod) => {
             const photos = typeof prod.photos === 'string' ? JSON.parse(prod.photos || "[]") : (prod.photos || []);
             const dynamicData = typeof prod.dynamicData === 'string' ? JSON.parse(prod.dynamicData || "[]") : (prod.dynamicData || []);
             const features = dynamicData.slice(0, 4);
             return (
              <ModernProductCard key={prod.id}>
                {prod.isCounterfeit && <div className="badge" style={{background: '#e74c3c'}}>RECALLED</div>}
                <Link to={`/product/${prod.id}`} className="img-box">
                  <img src={photos[0] ? `${apiUrl}${photos[0]}` : "/assets/car_qr_tag_mockup_1776107740073.png"} alt={prod.name} />
                </Link>
                <div className="content">
                  <h3>{prod.name}</h3>
                  <div className="features">
                    {features.map((f, i) => <span key={i}>{f.label.toUpperCase()}</span>)}
                    {features.length === 0 && (
                      <>
                        <span>SMART QR</span>
                        <span>PRIVACY</span>
                      </>
                    )}
                  </div>
                  <div className="price-row">
                    <div className="price">₹{prod.mrp || 0} <span>₹{Math.round((prod.mrp || 0) * 1.5)}</span></div>
                    <div className="discount">33% OFF</div>
                  </div>
                </div>
                <div className="footer">
                  <ActionButton to={`/product/${prod.id}`} style={{ padding: '10px 15px' }}>VIEW DETAILS</ActionButton>
                  <Button variant="secondary" style={{ padding: '10px 15px' }} onClick={(e) => handleAddToCart(e, prod)}>
                    <ShoppingCart size={18} />
                  </Button>
                </div>
              </ModernProductCard>
             );
          })}
        </ProductGrid>
      </Section>

      <Section bg="light">
        <SectionTitle>
          <h2>Key <span>Services</span></h2>
          <p>Tarkshya keeps journeys safe with advanced monitoring & alerts</p>
          <div className="line" />
        </SectionTitle>
        <CircularServiceGrid>
          <ServiceItem>
            <div className="circle"><MapPin size={40} /></div>
            <span>Find Location</span>
          </ServiceItem>
          <ServiceItem>
            <div className="circle"><Navigation size={40} /></div>
            <span>Route Tracking</span>
          </ServiceItem>
          <ServiceItem>
            <div className="circle"><Activity size={40} /></div>
            <span>Crash Detection</span>
          </ServiceItem>
          <ServiceItem>
            <div className="circle"><Zap size={40} /></div>
            <span>Overspeed Alert</span>
          </ServiceItem>
          <ServiceItem>
            <div className="circle"><Users size={40} /></div>
            <span>Family Control</span>
          </ServiceItem>
          <ServiceItem>
            <div className="circle"><PhoneCall size={40} /></div>
            <span>Helplines</span>
          </ServiceItem>
        </CircularServiceGrid>
      </Section>

      <Section bg="white">
        <SectionTitle>
          <h2>Security <span>Features</span></h2>
          <p>Advanced technology to keep you and your loved ones secure</p>
          <div className="line" />
        </SectionTitle>
        <FeaturesGrid>
          {securityFeatures.length > 0 ? (
            securityFeatures.map((feat, idx) => {
              const IconComponent = Icons[feat.icon] || Icons.Shield;
              return (
                <FeatureBox key={idx}>
                  <div className="icon"><IconComponent /></div>
                  <h4>{feat.title}</h4>
                </FeatureBox>
              );
            })
          ) : (
            <>
              <FeatureBox>
                <div className="icon"><Icons.Lock /></div>
                <h4>Data Privacy</h4>
              </FeatureBox>
              <FeatureBox>
                <div className="icon"><Icons.PhoneCall /></div>
                <h4>Call Masking</h4>
              </FeatureBox>
              <FeatureBox>
                <div className="icon"><Icons.Smartphone /></div>
                <h4>App Support</h4>
              </FeatureBox>
              <FeatureBox>
                <div className="icon"><Icons.Volume2 /></div>
                <h4>Audio Alerts</h4>
              </FeatureBox>
              <FeatureBox>
                <div className="icon"><Icons.Scan /></div>
                <h4>QR Security</h4>
              </FeatureBox>
              <FeatureBox>
                <div className="icon"><Icons.CheckCircle2 /></div>
                <h4>Verified</h4>
              </FeatureBox>
            </>
          )}
        </FeaturesGrid>
      </Section>

      <Section bg="light">
        <AboutContent>
          <h2>About <span>Tarkshya Solution</span></h2>
          <p>
            At Tarkshya — A Product by Jiyo India, we are pioneers in safety QR technology since 2014. 
            We are dedicated to enhancing road safety and security through innovative solutions. 
            Our goal is to streamline safety protocols, ensuring that users can operate confidently while 
            prioritizing the well-being of their loved ones. We believe in creating a safer tomorrow 
            through cutting-edge technology and user-centric design.
          </p>
          <div className="stats">
            <div className="stat-item">
              <h3>10k+</h3>
              <span>Active Users</span>
            </div>
            <div className="stat-item">
              <h3>50k+</h3>
              <span>Scans Protected</span>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <span>Cloud Monitoring</span>
            </div>
          </div>
        </AboutContent>
      </Section>
    </>
  );
};

export default Home;
