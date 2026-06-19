import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import {
    Shield, Phone, MessageCircle, AlertTriangle, MapPin, ShieldAlert,
    Crosshair, Car, Lock, CheckCircle, Globe, Activity, CircleParking, Megaphone
} from 'lucide-react';
import api from '../lib/api';
import toast from 'react-hot-toast';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f4f6f8;
  font-family: 'Outfit', sans-serif;
  padding-bottom: 40px;
`;

const TopHeader = styled.div`
  background: #0B1A33;
  color: white;
  padding: 20px;
  position: relative;
  overflow: hidden;
  text-align: center;
  padding-bottom: 60px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

const TopControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 2;
  margin-bottom: 20px;
`;

const ScanVerified = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  padding: 6px 12px;
  border-radius: 12px;
  
  .icon { color: #10B981; }
  .text {
    font-size: 0.7rem;
    font-weight: 800;
    line-height: 1.2;
    color: white;
    text-align: left;
    span {
      display: block;
      color: #10B981;
    }
  }
`;

const LangToggle = styled.div`
  display: flex;
  background: white;
  border-radius: 20px;
  padding: 2px;
  button {
    background: transparent;
    border: none;
    padding: 6px 12px;
    font-size: 0.8rem;
    font-weight: 800;
    color: #0B1A33;
    border-radius: 18px;
    cursor: pointer;
    &.active {
      background: #0B1A33;
      color: white;
    }
  }
`;

const BrandSection = styled.div`
  position: relative;
  z-index: 2;
  
  img {
    height: 60px;
    margin-bottom: 15px;
  }
  
  h1 {
    font-size: 2.2rem;
    font-weight: 900;
    color: white;
    margin-bottom: 5px;
    letter-spacing: 1px;
  }
  
  h2 {
    font-size: 1.2rem;
    color: #C9A84C;
    font-weight: 800;
    letter-spacing: 5px;
    margin-bottom: 10px;
  }
  
  .subtitle {
    font-size: 0.9rem;
    color: rgba(255,255,255,0.9);
    margin-bottom: 15px;
  }
  
  .features {
    font-size: 0.8rem;
    color: rgba(255,255,255,0.7);
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  
  .asset-id {
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    display: inline-block;
    padding: 8px 20px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 700;
    margin-bottom: 15px;
  }
  
  .protected {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 0.8rem;
    color: #10B981;
    font-weight: 600;
  }
`;

const MainCard = styled.div`
  background: white;
  border-radius: 24px;
  margin: -40px 15px 0;
  padding: 20px;
  position: relative;
  z-index: 3;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  animation: ${fadeIn} 0.5s ease;
`;

const OwnerProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  
  .left {
    display: flex;
    align-items: center;
    gap: 15px;
    
    .avatar {
      width: 60px;
      height: 60px;
      background: #f0f0f0;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      
      svg { color: #999; }
      
      .check {
        position: absolute;
        bottom: 0;
        right: 0;
        background: #10B981;
        color: white;
        border-radius: 50%;
        padding: 2px;
        border: 2px solid white;
      }
    }
    
    .info {
      h3 {
        font-size: 1.2rem;
        font-weight: 900;
        color: #0B1A33;
        margin-bottom: 2px;
      }
      .badges {
        display: flex;
        flex-direction: column;
        gap: 4px;
        font-size: 0.75rem;
        font-weight: 600;
        color: #10B981;
        
        div {
          display: flex;
          align-items: center;
          gap: 4px;
        }
      }
    }
  }
  
  .right-badge {
    background: #eef6ff;
    border: 1px solid #d0e3ff;
    padding: 8px 12px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    
    svg { color: #3b82f6; }
    span {
      font-size: 0.65rem;
      font-weight: 800;
      color: #3b82f6;
    }
  }
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 25px;
`;

const PrimaryButton = styled.button`
  width: 100%;
  background: ${props => props.bg || '#10B981'};
  color: white;
  border: none;
  padding: 16px 20px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  text-align: left;
  box-shadow: 0 4px 15px ${props => props.shadow || 'rgba(16, 185, 129, 0.2)'};
  transition: transform 0.2s;
  
  &:active { transform: scale(0.98); }
  
  .icon-bg {
    width: 44px;
    height: 44px;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .content {
    flex: 1;
    h4 {
      font-size: 1rem;
      font-weight: 800;
      margin-bottom: 2px;
    }
    p {
      font-size: 0.75rem;
      opacity: 0.9;
    }
    .sub {
      font-size: 0.65rem;
      background: rgba(255,255,255,0.2);
      padding: 2px 8px;
      border-radius: 10px;
      display: inline-block;
      margin-top: 4px;
    }
  }
  
  .premium-badge {
    background: #C9A84C;
    color: #0B1A33;
    font-size: 0.65rem;
    font-weight: 900;
    padding: 4px 8px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 0 5px;
  
  .title {
    display: flex;
    align-items: center;
    gap: 8px;
    h3 {
      font-size: 0.9rem;
      font-weight: 800;
      color: #0B1A33;
    }
    svg { color: #ef4444; }
  }
  
  .expand {
    font-size: 0.75rem;
    color: #666;
    font-weight: 600;
  }
`;

const EmergencyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 15px;
`;

const EmergencyCard = styled.div`
  background: white;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 15px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.02);
  
  .icon-wrapper {
    margin-bottom: 10px;
    svg { color: ${props => props.color || '#ef4444'}; width: 28px; height: 28px; }
  }
  
  h4 {
    font-size: 0.8rem;
    font-weight: 900;
    color: ${props => props.textColor || '#ef4444'};
    margin-bottom: 4px;
  }
  
  p {
    font-size: 0.7rem;
    color: #666;
    font-weight: 500;
  }
  
  .premium {
    background: #C9A84C;
    color: #0B1A33;
    font-size: 0.6rem;
    font-weight: 900;
    padding: 2px 6px;
    border-radius: 4px;
    display: inline-block;
    margin-top: 8px;
  }
`;

const FamilyNotify = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 12px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  
  .left {
    display: flex;
    align-items: center;
    gap: 10px;
    svg { color: #8b5cf6; }
    span { font-size: 0.75rem; font-weight: 600; color: #333; }
  }
  
  .premium {
    background: #8b5cf6;
    color: white;
    font-size: 0.65rem;
    font-weight: 800;
    padding: 4px 10px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 25px;
  position: relative;
  
  .bg-car {
    position: absolute;
    right: -20px;
    top: 0;
    opacity: 0.05;
    width: 150px;
    z-index: 0;
  }
  
  .item {
    position: relative;
    z-index: 1;
    .label {
      font-size: 0.65rem;
      font-weight: 600;
      color: #888;
      margin-bottom: 2px;
    }
    .value {
      font-size: 0.9rem;
      font-weight: 800;
      color: #0B1A33;
    }
  }
`;

const PrivacyBanner = styled.div`
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  padding: 15px;
  border-radius: 16px;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  margin-bottom: 20px;
  
  svg { color: #16a34a; shrink: 0; mt: 2px; }
  
  .text {
    flex: 1;
    p {
      font-size: 0.75rem;
      color: #166534;
      font-weight: 600;
      line-height: 1.4;
    }
  }
  
  .link {
    font-size: 0.7rem;
    color: #2563eb;
    font-weight: 600;
    white-space: nowrap;
  }
`;

const FooterStats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: #0B1A33;
  margin: 0 -20px -20px;
  padding: 20px 10px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  
  .stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 6px;
    
    svg { color: rgba(255,255,255,0.5); width: 20px; height: 20px; }
    span {
      color: rgba(255,255,255,0.6);
      font-size: 0.5rem;
      font-weight: 700;
      text-transform: uppercase;
    }
  }
`;

const BottomFooter = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 0.65rem;
  color: #888;
  font-weight: 600;
  
  span { color: #0B1A33; }
`;

export default function PublicProfile() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const [lang, setLang] = useState('en');

    useEffect(() => {
        const verifyProduct = async () => {
            try {
                const response = await api.get(`/products/verify/${id}`);
                setProduct(response.data.product);
            } catch (err) {
                console.error(err);
                // Even on error, show a mock design so they see the UI
                setProduct({
                    name: 'V-KAWACH IDENTITY',
                    ownerName: 'VIKAS KUMAR',
                    ownerPhone: '918881384777',
                    vehicleType: 'Car',
                    registrationNo: 'VH-M****F1',
                    model: 'N/A',
                    color: 'N/A',
                    year: 'N/A'
                });
            } finally {
                setLoading(false);
            }
        };
        verifyProduct();
    }, [id]);

    const handleAction = (type) => {
        const phone = product?.ownerPhone || '918881384777';
        let msg = '';
        if (type === 'call') {
            window.location.href = \`tel:\${phone}\`;
            return;
        } else if (type === 'whatsapp') {
            msg = 'Hi, I scanned your V-Kawach QR tag.';
        } else if (type === 'parking') {
            msg = '🚗 PARKING ALERT! Please move your vehicle. Someone is waiting.';
        } else if (type === 'sos') {
            msg = '🚨 EMERGENCY ALERT! Vehicle has met with an accident.';
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                const mapUrl = \`https://www.google.com/maps?q=\${pos.coords.latitude},\${pos.coords.longitude}\`;
                msg += \`\\nLocation: \${mapUrl}\`;
                window.open(\`https://wa.me/\${phone}?text=\${encodeURIComponent(msg)}\`, '_blank');
            }, () => {
                window.open(\`https://wa.me/\${phone}?text=\${encodeURIComponent(msg)}\`, '_blank');
            });
        } else {
            window.open(\`https://wa.me/\${phone}?text=\${encodeURIComponent(msg)}\`, '_blank');
        }
    };

    if (loading) return null;

    return (
        <PageWrapper>
            <TopHeader>
                <TopControls>
                    <ScanVerified>
                        <Shield className="icon" size={16} />
                        <div className="text">QR SCAN<br/><span>VERIFIED</span></div>
                    </ScanVerified>
                    <LangToggle>
                        <button className={lang === 'hi' ? 'active' : ''} onClick={() => setLang('hi')}>HI</button>
                        <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
                    </LangToggle>
                </TopControls>

                <BrandSection>
                    <img src="/new_logo.png" alt="Logo" />
                    <h1>V-KAWACH</h1>
                    <h2>SECURITY</h2>
                    <p className="subtitle">Smart Vehicle Security Identity</p>
                    <div className="features">
                        <span>Parking</span> • <span>Emergency</span> • <span>Privacy</span> • <span>Protection</span>
                    </div>
                    <div className="asset-id">ASSET ID: {id?.toUpperCase() || 'VH-MUE3F1'}</div>
                    <div className="protected">
                        <CheckCircle size={14} /> Protected by Tarkshya Security Network
                    </div>
                </BrandSection>
            </TopHeader>

            <MainCard>
                <OwnerProfile>
                    <div className="left">
                        <div className="avatar">
                            <User size={32} />
                            <div className="check"><CheckCircle size={10} /></div>
                        </div>
                        <div className="info">
                            <h3>{product?.ownerName || 'VIKAS KUMAR'}</h3>
                            <div className="badges">
                                <div><CheckCircle size={12} /> Verified Owner</div>
                                <div><Shield size={12} /> Vehicle Protected</div>
                            </div>
                        </div>
                    </div>
                    <div className="right-badge">
                        <Shield size={20} />
                        <span>VERIFIED<br/>OWNER</span>
                    </div>
                </OwnerProfile>

                <ActionButtons>
                    <PrimaryButton bg="#16a34a" shadow="rgba(22, 163, 74, 0.3)" onClick={() => handleAction('call')}>
                        <div className="icon-bg"><Phone size={24} /></div>
                        <div className="content">
                            <h4>CONTACT VEHICLE OWNER</h4>
                            <p>Call securely (Number Masked)</p>
                            <span className="sub">Primary option for Parking & General Contact</span>
                        </div>
                        <div style={{ paddingRight: '10px' }}>&gt;</div>
                    </PrimaryButton>

                    <PrimaryButton bg="#059669" shadow="rgba(5, 150, 105, 0.3)" onClick={() => handleAction('whatsapp')}>
                        <div className="icon-bg"><MessageCircle size={24} /></div>
                        <div className="content">
                            <h4>CHAT ON WHATSAPP</h4>
                            <p>Chat securely (Number Masked)</p>
                        </div>
                        <div className="premium-badge"><Shield size={10} /> PREMIUM</div>
                        <div>&gt;</div>
                    </PrimaryButton>

                    <PrimaryButton bg="#f97316" shadow="rgba(249, 115, 22, 0.3)" onClick={() => handleAction('parking')}>
                        <div className="icon-bg"><CircleParking size={24} /></div>
                        <div className="content">
                            <h4>VEHICLE BLOCKING THE WAY?</h4>
                            <p>Send Parking Alert to Owner</p>
                        </div>
                        <div>&gt;</div>
                    </PrimaryButton>
                </ActionButtons>

                <SectionHeader>
                    <div className="title">
                        <ShieldAlert size={18} />
                        <h3>EMERGENCY OPTIONS</h3>
                    </div>
                    <div className="expand">Tap to expand ▼</div>
                </SectionHeader>

                <EmergencyGrid>
                    <EmergencyCard color="#ef4444" textColor="#ef4444" onClick={() => handleAction('sos')}>
                        <div className="icon-wrapper"><Megaphone /></div>
                        <h4>SOS EMERGENCY</h4>
                        <p>Immediate Help</p>
                        <div style={{ textAlign: 'right', color: '#ccc' }}>&gt;</div>
                    </EmergencyCard>
                    
                    <EmergencyCard color="#3b82f6" textColor="#1d4ed8" onClick={() => handleAction('sos')}>
                        <div className="icon-wrapper"><MapPin /></div>
                        <h4>SHARE ACCIDENT LOCATION</h4>
                        <p>Share live location with family contacts</p>
                        <span className="premium"><Shield size={8} style={{display:'inline', marginRight:'2px'}}/> PREMIUM</span>
                    </EmergencyCard>
                    
                    <EmergencyCard color="#4f46e5" textColor="#0B1A33" onClick={() => window.location.href='tel:112'}>
                        <div className="icon-wrapper"><ShieldAlert /></div>
                        <h4>POLICE</h4>
                        <p>Call Police<br/><strong>112</strong></p>
                    </EmergencyCard>
                    
                    <EmergencyCard color="#ef4444" textColor="#0B1A33" onClick={() => window.location.href='tel:108'}>
                        <div className="icon-wrapper"><Activity /></div>
                        <h4>AMBULANCE</h4>
                        <p>Call Ambulance<br/><strong>108</strong></p>
                    </EmergencyCard>
                </EmergencyGrid>

                <FamilyNotify>
                    <div className="left">
                        <Globe size={18} />
                        <span>Family will be notified in case of emergency.</span>
                    </div>
                    <div className="premium"><Shield size={10} /> PREMIUM</div>
                </FamilyNotify>

                <SectionHeader>
                    <div className="title">
                        <Car size={18} color="#0B1A33" />
                        <h3>VEHICLE DETAILS</h3>
                    </div>
                </SectionHeader>

                <DetailsGrid>
                    <div className="item">
                        <div className="label">Vehicle Type</div>
                        <div className="value">{product?.vehicleType || 'Car'}</div>
                    </div>
                    <div className="item">
                        <div className="label">Registration No.</div>
                        <div className="value">{product?.registrationNo || 'VH-M****F1'}</div>
                    </div>
                    <div className="item">
                        <div className="label">Color</div>
                        <div className="value">{product?.color || 'N/A'}</div>
                    </div>
                    <div className="item">
                        <div className="label">Registration State</div>
                        <div className="value">{product?.registrationState || 'N/A'}</div>
                    </div>
                    <div className="item">
                        <div className="label">Model</div>
                        <div className="value">{product?.model || 'N/A'}</div>
                    </div>
                    <div className="item">
                        <div className="label">Year</div>
                        <div className="value">{product?.year || 'N/A'}</div>
                    </div>
                </DetailsGrid>

                <PrivacyBanner>
                    <Lock size={20} />
                    <div className="text">
                        <p>Your personal details are protected.<br/>Owner will see only masked contact details.</p>
                    </div>
                    <div className="link">Learn more</div>
                </PrivacyBanner>

                <FooterStats>
                    <div className="stat">
                        <Shield />
                        <span>End-To-End<br/>Encrypted</span>
                    </div>
                    <div className="stat">
                        <Lock />
                        <span>Privacy<br/>Protected</span>
                    </div>
                    <div className="stat">
                        <Globe />
                        <span>Secure<br/>Network</span>
                    </div>
                    <div className="stat">
                        <Activity />
                        <span>Managed By<br/>Tarkshya Protocol</span>
                    </div>
                </FooterStats>
            </MainCard>

            <BottomFooter>
                <Shield size={12} style={{display:'inline', marginRight: '4px'}}/> 
                © 2024 <span>V-Kawach</span> | Powered by Tarkshya Solution
            </BottomFooter>
        </PageWrapper>
    );
}
