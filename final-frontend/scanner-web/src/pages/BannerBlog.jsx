import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { ArrowLeft, Calendar, User, Clock, ShieldCheck, Tag, Heart } from 'lucide-react';
import Section from '../components/Section';
import Button from '../components/Button';
import api from '../lib/api';
import { useLanguage } from '../context/LanguageContext';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(25px); }
  to { opacity: 1; transform: translateY(0); }
`;

const BlogHeader = styled.div`
  background: linear-gradient(135deg, #0b1a33 0%, #1a2a44 100%);
  padding: 180px 0 100px;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-image: ${props => props.$bgImage ? `url(${props.$bgImage})` : 'none'};
    background-size: cover;
    background-position: center;
    opacity: 0.2;
    filter: blur(4px);
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0; height: 120px;
    background: linear-gradient(to top, #fcfcfc 0%, transparent 100%);
    z-index: 2;
  }
`;

const HeaderContent = styled.div`
  position: relative;
  z-index: 3;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #C9A84C;
  text-decoration: none;
  font-weight: 800;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 30px;
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
    transform: translateX(-5px);
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
  letter-spacing: -1.5px;
  margin-bottom: 25px;
  line-height: 1.15;
  animation: ${fadeIn} 0.8s ease-out;

  .dim {
    display: block;
    font-size: 1.25rem;
    font-weight: 800;
    color: #C9A84C;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 15px;
  }

  .highlight {
    background: linear-gradient(to right, #ffffff, #f2d06b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
    .dim { font-size: 1rem; }
  }
`;

const MetaRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 30px;
  animation: ${fadeIn} 1s ease-out 0.2s both;

  span {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  svg {
    color: #C9A84C;
  }
`;

const BlogContainer = styled.div`
  max-width: 850px;
  margin: -50px auto 100px;
  position: relative;
  z-index: 10;
  padding: 0 20px;
`;

const ArticleCard = styled.div`
  background: white;
  border-radius: 32px;
  padding: 50px 60px;
  box-shadow: 0 30px 60px rgba(11, 26, 51, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.04);
  animation: ${fadeIn} 1s ease-out 0.3s both;

  @media (max-width: 768px) {
    padding: 35px 25px;
    border-radius: 24px;
  }
`;

const IntroText = styled.p`
  font-size: 1.25rem;
  line-height: 1.7;
  color: #334155;
  font-weight: 500;
  margin-bottom: 40px;
  border-left: 4px solid #C9A84C;
  padding-left: 20px;
`;

const ArticleBody = styled.div`
  font-size: 1.1rem;
  line-height: 1.85;
  color: #334155;

  p {
    margin-bottom: 25px;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 900;
    color: #0b1a33;
    margin: 45px 0 20px;
    letter-spacing: -0.5px;
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 800;
    color: #0b1a33;
    margin: 35px 0 15px;
  }

  ul, ol {
    margin-bottom: 25px;
    padding-left: 20px;
  }

  li {
    margin-bottom: 10px;
  }

  strong {
    color: #0b1a33;
    font-weight: 700;
  }

  img {
    max-width: 100%;
    border-radius: 16px;
    margin: 30px 0;
    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  }
`;

const SidebarCTA = styled.div`
  background: linear-gradient(135deg, #0b1a33 0%, #1a2a44 100%);
  color: white;
  border-radius: 24px;
  padding: 40px;
  text-align: center;
  margin-top: 60px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 45px rgba(11, 26, 51, 0.15);

  h3 {
    font-size: 1.6rem;
    font-weight: 800;
    margin-bottom: 15px;
    color: #C9A84C;
  }

  p {
    opacity: 0.8;
    font-size: 0.95rem;
    margin-bottom: 25px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const BannerBlog = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const [banner, setBanner] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiUrl = window.location.hostname === 'localhost' ? 'http://localhost:5001' : '';

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await api.get('/public/settings');
        const listStr = response.data.settings?.heroBannersList;
        if (listStr) {
          const banners = JSON.parse(listStr);
          const found = banners.find(b => b.id === id);
          setBanner(found);
        }
      } catch (err) {
        console.error('Failed to load banner details:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchBanners();
  }, [id]);

  if (loading) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0b1a33', color: 'white' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '40px', height: '40px', border: '4px solid #C9A84C', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 20px' }}></div>
          <p style={{ fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>Loading Article...</p>
        </div>
        <style>{`
          @keyframes spin { to { transform: rotate(360deg); } }
        `}</style>
      </div>
    );
  }

  if (!banner) {
    return (
      <div style={{ padding: '180px 20px', textAlign: 'center', minHeight: '60vh' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#0b1a33' }}>Article Not Found</h2>
        <p style={{ color: '#666', marginTop: '10px' }}>The requested article does not exist or has been removed.</p>
        <Button as={Link} to="/" variant="primary" style={{ marginTop: '30px' }}>Back to Home</Button>
      </div>
    );
  }

  const bgImage = banner.imageUrl ? (banner.imageUrl.startsWith('http') ? banner.imageUrl : `${apiUrl}${banner.imageUrl}`) : null;

  // Premium default content if admin has not provided specific blogContent
  const defaultBlogContent = `
    <h2>The Digital Security Revolution</h2>
    <p>In today's fast-paced world, security and privacy are no longer luxuries — they are basic necessities. Traditional security mechanisms, like printing phone numbers on car windshields or pet collars, carry high privacy risks, expose personal contact information to unwanted calls, and fail to provide real-time updates.</p>
    
    <p><strong>V-KAWACH</strong> offers a revolutionary next-generation Smart QR Safety system. Designed by <strong>Tarkshya Solution</strong>, this ecosystem integrates smart hardware tags with cloud communication to secure your assets, pets, and family members.</p>
    
    <h2>How V-KAWACH Protects Your Privacy</h2>
    <p>At the core of the V-KAWACH security protocol is <strong>Call Masking Technology</strong>. When someone scans your QR sticker (e.g. on a wrongly parked vehicle), they can call you instantly without ever seeing your actual phone number. The call is bridged through our secure private telephony servers.</p>
    
    <h3>Key Benefits of the V-KAWACH Protocol:</h3>
    <ul>
      <li><strong>100% Privacy Protection:</strong> Hides your identity and mobile number.</li>
      <li><strong>No App Needed:</strong> The finder can scan and connect directly from any web browser.</li>
      <li><strong>Instant Notifications:</strong> Receive WhatsApp, SMS, and email alerts immediately when scanned.</li>
      <li><strong>Emergency Helplines:</strong> Embedded dialers for Police (100) and Ambulance (108) on the landing page.</li>
      <li><strong>Live Location Sharing:</strong> Tapping a button lets the finder share their GPS location via WhatsApp.</li>
    </ul>

    <h2>Universally Compatible Safety Ecosystems</h2>
    <p>Our safety IDs are tailored for every critical asset in your household:</p>
    <p><strong>Vehicle Safety Stickers:</strong> Perfect for crowded parking areas and highway emergencies. Avoid roadside conflicts by keeping communication anonymous.</p>
    <p><strong>Smart Pet Tags:</strong> Ensure your lost pets return home safely. Finders can scan the collar tag, view pet details, and contact you instantly.</p>
    <p><strong>Kid's & Elderly Safety Cards:</strong> Provide security cards for school children and elderly parents to ensure prompt help during unexpected emergencies.</p>
  `;

  return (
    <div style={{ background: '#fcfcfc', minHeight: '100vh' }}>
      <BlogHeader $bgImage={bgImage}>
        <HeaderContent>
          <BackLink to="/"><ArrowLeft size={16} /> Back to Home</BackLink>
          <Title>
            <span className="dim">{banner.taglineDim}</span>
            <span className="highlight">{banner.taglineHighlight}</span>
          </Title>
          <MetaRow>
            <span><User size={16} /> Tarkshya Security Expert</span>
            <span><Calendar size={16} /> May 25, 2026</span>
            <span><Clock size={16} /> 4 min read</span>
            <span><ShieldCheck size={16} /> Verified Protocol</span>
          </MetaRow>
        </HeaderContent>
      </BlogHeader>

      <BlogContainer>
        <ArticleCard>
          <IntroText>{banner.subtext}</IntroText>
          <ArticleBody dangerouslySetInnerHTML={{ __html: banner.blogContent || defaultBlogContent }} />
          
          <SidebarCTA>
            <h3>Get Your V-KAWACH Safety ID Today</h3>
            <p>Protect your family, vehicles, and high-value assets with India's most advanced privacy-first security network.</p>
            <Button as={Link} to="/smart-qr" variant="primary" style={{ background: '#C9A84C', color: '#0b1a33', border: 'none', padding: '15px 40px' }}>
              BROWSE PRODUCTS
            </Button>
          </SidebarCTA>
        </ArticleCard>
      </BlogContainer>
    </div>
  );
};

export default BannerBlog;
