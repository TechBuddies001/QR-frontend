import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { 
    ArrowLeft, ShoppingCart, Shield, Zap, Smartphone, CheckCircle2, 
    Info, Star, Package, ShieldCheck, ChevronRight, Activity, Award, Lock
} from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import api from '../lib/api';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const ProductHeader = styled.div`
  background: linear-gradient(135deg, #0b1a33 0%, #1a2a44 100%);
  padding: 60px 0 100px;
  color: white;
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

const Breadcrumbs = styled.div`
  margin-bottom: 40px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: rgba(255,255,255,0.6);
  position: relative;
  z-index: 10;
  
  a { 
    color: white; 
    text-decoration: none; 
    transition: color 0.3s;
    &:hover { color: #C9A84C; }
  }
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  align-items: start;
  position: relative;
  z-index: 10;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ImageGallery = styled.div`
  animation: ${fadeIn} 0.8s ease-out;

  .main-img-wrapper {
    position: relative;
    border-radius: 32px;
    background: white;
    padding: 30px;
    box-shadow: 0 40px 80px rgba(0,0,0,0.2);
    margin-bottom: 25px;

    &::after {
      content: '';
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      border-radius: 32px;
      box-shadow: inset 0 0 0 1px rgba(0,0,0,0.05);
      pointer-events: none;
    }
  }

  .main-img {
    width: 100%;
    height: 400px;
    object-fit: contain;
    transition: transform 0.5s ease;
    &:hover { transform: scale(1.05); }
  }

  .thumbs {
    display: flex;
    gap: 15px;
    overflow-x: auto;
    padding-bottom: 10px;

    img {
      width: 90px;
      height: 90px;
      object-fit: cover;
      border-radius: 16px;
      border: 2px solid transparent;
      background: rgba(255,255,255,0.1);
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        border-color: #C9A84C;
        transform: translateY(-5px);
      }
    }
  }
`;

const ProductInfo = styled.div`
  animation: ${fadeIn} 0.8s ease-out 0.2s both;

  .badge {
    display: inline-block;
    background: rgba(201, 168, 76, 0.2);
    color: #C9A84C;
    padding: 8px 16px;
    border-radius: 100px;
    font-size: 0.8rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }

  h1 { 
    font-size: 3.5rem; 
    color: white; 
    font-weight: 900; 
    margin-bottom: 15px; 
    line-height: 1.1;
    letter-spacing: -1px;
  }

  .reviews {
    display: flex;
    align-items: center;
    gap: 10px;
    color: rgba(255,255,255,0.8);
    font-size: 0.9rem;
    margin-bottom: 30px;
    .stars { color: #C9A84C; display: flex; gap: 2px; }
  }

  .price-card {
    background: rgba(255,255,255,0.03);
    backdrop-filter: blur(20px);
    padding: 35px;
    border-radius: 28px;
    border: 1px solid rgba(255,255,255,0.05);
    margin-bottom: 30px;
  }
`;

const PriceRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 20px;
  margin-bottom: 20px;
  
  .current { 
    font-size: 3rem; 
    font-weight: 900; 
    color: white; 
  }
  .old { 
    font-size: 1.4rem; 
    color: rgba(255,255,255,0.4); 
    text-decoration: line-through; 
  }
  .discount { 
    background: #27ae60;
    color: white;
    padding: 6px 12px;
    border-radius: 8px;
    font-weight: 800; 
    font-size: 0.9rem;
  }
`;

const SpecGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 30px;
  padding-top: 25px;
  border-top: 1px solid rgba(255,255,255,0.1);

  .spec-item {
    display: flex;
    align-items: center;
    gap: 10px;
    color: white;

    .icon {
      color: #C9A84C;
    }
    .text {
      display: flex;
      flex-direction: column;
      .label { font-size: 0.75rem; color: rgba(255,255,255,0.5); text-transform: uppercase; font-weight: 700; }
      .value { font-size: 1rem; font-weight: 800; }
    }
  }
`;

const ContentSection = styled.div`
  background: #fcfcfc;
  padding: 80px 0;
`;

const TabSection = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  .tabs {
    display: flex;
    gap: 40px;
    border-bottom: 2px solid rgba(0,0,0,0.05);
    margin-bottom: 50px;
    justify-content: center;

    button {
      background: none;
      border: none;
      padding: 20px 0;
      font-size: 1.2rem;
      font-weight: 900;
      color: #999;
      cursor: pointer;
      position: relative;
      text-transform: uppercase;
      letter-spacing: 1px;
      transition: color 0.3s;

      &:hover { color: #0b1a33; }

      &.active {
        color: #0b1a33;
        &::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 3px;
          background: #C9A84C;
          border-radius: 3px 3px 0 0;
        }
      }
    }
  }
`;

const FeatureList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;

  .feature-card {
    background: white;
    padding: 30px;
    border-radius: 20px;
    border: 1px solid rgba(0,0,0,0.03);
    box-shadow: 0 10px 30px rgba(0,0,0,0.02);
    display: flex;
    align-items: flex-start;
    gap: 15px;

    .icon-box {
      width: 48px;
      height: 48px;
      background: #f8f9fa;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #C9A84C;
      flex-shrink: 0;
    }

    h4 { font-size: 1.1rem; font-weight: 800; color: #0b1a33; margin-bottom: 5px; }
    p { font-size: 0.95rem; color: #666; line-height: 1.5; }
  }
`;

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [activeTab, setActiveTab] = useState('features');
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [apiUrl, setApiUrl] = useState('');

  const handleAddToCart = () => {
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
      window.location.href = '/login?redirect=/product/' + id;
      return;
    }

    if (product) {
      addToCart(product);
      toast.success(`${product.name} added to cart!`, {
        icon: '🛒',
        style: {
          borderRadius: '100px',
          background: '#0b1a33',
          color: '#fff',
        },
      });
    }
  };

  useEffect(() => {
    setApiUrl(window.location.hostname === 'localhost' ? 'http://localhost:5001' : '');
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products/${id}`);
        // FIX: access product from res.data instead of res directly
        const found = res.data?.product;
        if (found) {
          found.photos = typeof found.photos === 'string' ? JSON.parse(found.photos || "[]") : (found.photos || []);
          found.dynamicData = typeof found.dynamicData === 'string' ? JSON.parse(found.dynamicData || "[]") : (found.dynamicData || []);
          setProduct(found);
        }
      } catch (err) {
        console.error('Failed to fetch product details:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0b1a33', color: 'white' }}>
      <div style={{ textAlign: 'center' }}>
         <Activity size={50} className="animate-pulse" color="#C9A84C" />
         <p style={{ marginTop: '25px', fontWeight: 800, letterSpacing: '3px', fontSize: '1.2rem' }}>FETCHING SPECIFICATIONS</p>
      </div>
    </div>
  );

  if (!product) return (
    <div style={{ padding: '150px 20px', textAlign: 'center', fontSize: '1.5rem', fontWeight: 800, color: '#0b1a33' }}>
      Product not found in Database.
    </div>
  );

  const getSpecValue = (label) => {
    const spec = product.dynamicData.find(d => d.label.toLowerCase() === label.toLowerCase());
    return spec ? spec.value : 'N/A';
  };

  return (
    <>
      <ProductHeader>
        <Section bg="transparent">
          <Breadcrumbs>
            <Link to="/">Ecosystem</Link> / <Link to="/products">Hardware</Link> / <span style={{ color: '#C9A84C' }}>{product.name}</span>
          </Breadcrumbs>
          
          <MainGrid>
            <ImageGallery>
              <div className="main-img-wrapper">
                <img 
                  src={product.photos[0] ? `${apiUrl}${product.photos[0]}` : "/assets/car_qr_tag_mockup_1776107740073.png"} 
                  alt={product.name} 
                  className="main-img" 
                />
              </div>
              <div className="thumbs">
                {product.photos.filter(img => img).length > 0 ? (
                  product.photos.filter(img => img).map((img, i) => (
                    <img key={i} src={`${apiUrl}${img}`} alt="thumb" />
                  ))
                ) : (
                  <img src="/assets/car_qr_tag_mockup_1776107740073.png" alt="thumb fallback" />
                )}
              </div>
            </ImageGallery>

            <ProductInfo>
              <div className="badge">{product.type === 'SAFETY' ? 'Security Hardware' : 'FMCG Module'}</div>
              <h1>{product.name}</h1>
              
              <div className="reviews">
                <div className="stars">
                  <Star fill="#C9A84C" size={16} />
                  <Star fill="#C9A84C" size={16} />
                  <Star fill="#C9A84C" size={16} />
                  <Star fill="#C9A84C" size={16} />
                  <Star fill="#C9A84C" size={16} />
                </div>
                <span>4.9/5 (128+ Verifications)</span>
              </div>

              <div className="price-card">
                <PriceRow>
                  <span className="current">₹{product.mrp || 0}</span>
                  <span className="old">₹{Math.round((product.mrp || 0) * 1.5)}</span>
                  <span className="discount">SPECIAL OFFER</span>
                </PriceRow>

                <SpecGrid>
                   {product.dynamicData.slice(0, 4).map((spec, i) => (
                     <div className="spec-item" key={i}>
                        <ShieldCheck size={24} className="icon" />
                        <div className="text">
                          <span className="label">{spec.label}</span>
                          <span className="value">{spec.value}</span>
                        </div>
                     </div>
                   ))}
                   {product.dynamicData.length === 0 && (
                     <>
                      <div className="spec-item">
                        <ShieldCheck size={24} className="icon" />
                        <div className="text"><span className="label">Encryption</span><span className="value">AES-256</span></div>
                      </div>
                      <div className="spec-item">
                        <Activity size={24} className="icon" />
                        <div className="text"><span className="label">Performance</span><span className="value">High Speed</span></div>
                      </div>
                     </>
                   )}
                </SpecGrid>

                <Button 
                  size="large" 
                  style={{ width: '100%', height: '60px', fontSize: '1.2rem', borderRadius: '16px', boxShadow: '0 20px 40px rgba(201, 168, 76, 0.3)' }} 
                  onClick={handleAddToCart}
                >
                  SECURE THIS MODULE <ShoppingCart size={24} style={{ marginLeft: '12px' }} />
                </Button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', fontWeight: 600 }}>
                <Shield size={18} /> Verified Tarkshya Security Hardware. Ships in 24 Hours.
              </div>
            </ProductInfo>
          </MainGrid>
        </Section>
      </ProductHeader>

      <ContentSection>
        <Section bg="transparent">
          <TabSection>
            <div className="tabs">
              <button className={activeTab === 'features' ? 'active' : ''} onClick={() => setActiveTab('features')}>Module Features</button>
              <button className={activeTab === 'description' ? 'active' : ''} onClick={() => setActiveTab('description')}>Technical Details</button>
            </div>

            {activeTab === 'description' && (
              <div style={{ background: 'white', padding: '50px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.02)', border: '1px solid rgba(0,0,0,0.03)' }}>
                <h3 style={{ fontSize: '1.8rem', color: '#0b1a33', fontWeight: 900, marginBottom: '20px' }}>Ecosystem Integration</h3>
                <p style={{ lineHeight: 1.8, color: '#555', fontSize: '1.15rem' }}>
                  {product.description || "This advanced Tarkshya security module integrates seamlessly into your digital ecosystem. Designed with military-grade precision, it provides instant verification and tracking capabilities to ensure maximum safety for your assets and loved ones."}
                </p>
                <div style={{ marginTop: '30px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                  <div style={{ background: '#f8f9fa', padding: '15px 25px', borderRadius: '12px', fontWeight: 700, color: '#0b1a33' }}><Award size={18} style={{ display: 'inline', marginRight: '10px', color: '#C9A84C' }}/> ISO Certified</div>
                  <div style={{ background: '#f8f9fa', padding: '15px 25px', borderRadius: '12px', fontWeight: 700, color: '#0b1a33' }}><Smartphone size={18} style={{ display: 'inline', marginRight: '10px', color: '#C9A84C' }}/> App Compatible</div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <FeatureList>
                 {product.dynamicData.map((spec, i) => (
                   <div className="feature-card" key={i}>
                     <div className="icon-box"><Zap size={24} /></div>
                     <div>
                       <h4>{spec.label}</h4>
                       <p>{spec.value}</p>
                     </div>
                   </div>
                 ))}
                 {product.dynamicData.length === 0 && (
                   <>
                    <div className="feature-card">
                      <div className="icon-box"><ShieldCheck size={24} /></div>
                      <div>
                        <h4>Smart QR Protocol</h4>
                        <p>High-quality smart sticker with instant scan detection.</p>
                      </div>
                    </div>
                    <div className="feature-card">
                      <div className="icon-box"><Lock size={24} /></div>
                      <div>
                        <h4>Privacy Masking</h4>
                        <p>Call and message masking to protect your personal details.</p>
                      </div>
                    </div>
                    <div className="feature-card">
                      <div className="icon-box"><Activity size={24} /></div>
                      <div>
                        <h4>Live Notifications</h4>
                        <p>Real-time alerts directly to your mobile ecosystem.</p>
                      </div>
                    </div>
                   </>
                 )}
              </FeatureList>
            )}
          </TabSection>
        </Section>
      </ContentSection>
    </>
  );
};

export default ProductDetails;
