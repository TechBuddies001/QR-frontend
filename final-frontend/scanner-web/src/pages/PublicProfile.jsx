import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import {
    Shield, Phone, MessageCircle, AlertTriangle, MapPin, ShieldAlert,
    Crosshair, Car, Lock, CheckCircle, Globe, Activity, CircleParking, Megaphone, User, QrCode, Crown
} from 'lucide-react';
import api from '../lib/api';
import toast from 'react-hot-toast';
import { translations } from '../utils/translations';

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
  background: #0B1A33 url('/hero_bg.jpg') center/cover no-repeat;
  color: white;
  padding: 16px 20px;
  position: relative;
  overflow: hidden;
  text-align: center;
  padding-bottom: 50px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  
  /* Dark overlay to make text readable */
  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(11, 26, 51, 0.7);
    z-index: 1;
  }
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
    height: 45px;
    margin-bottom: 10px;
  }
  
  h1 {
    font-size: 1.8rem;
    font-weight: 900;
    color: white;
    margin-bottom: 4px;
    letter-spacing: 1px;
  }
  
  h2 {
    font-size: 1rem;
    color: #C9A84C;
    font-weight: 800;
    letter-spacing: 5px;
    margin-bottom: 8px;
  }
  
  .subtitle {
    font-size: 0.85rem;
    color: rgba(255,255,255,0.9);
    margin-bottom: 10px;
  }
  
  .features {
    font-size: 0.75rem;
    color: rgba(255,255,255,0.7);
    margin-bottom: 12px;
    display: flex;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  
  .asset-id {
    background: #202c45;
    border: 1px solid rgba(255,255,255,0.1);
    display: inline-block;
    padding: 6px 18px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: white;
  }
  
  .protected {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 0.75rem;
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
      text-align: center;
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
  position: relative;
  
  .icon-wrapper {
    margin-bottom: 10px;
    svg { color: ${props => props.color || '#ef4444'}; width: 28px; height: 28px; }
  }
  
  h4 {
    font-size: 0.8rem;
    font-weight: 900;
    color: ${props => props.textColor || '#ef4444'};
    margin-bottom: 4px;
    padding-right: 15px;
  }
  
  p {
    font-size: 0.7rem;
    color: #666;
    font-weight: 500;
    padding-right: 15px;
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

const InfoBox = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 15px;
  display: flex;
  gap: 12px;
  margin-bottom: 25px;
  
  svg { color: #10B981; flex-shrink: 0; margin-top: 2px; }
  
  .text {
    p {
      font-size: 0.75rem;
      color: #333;
      font-weight: 500;
      margin-bottom: 4px;
    }
    a {
      font-size: 0.7rem;
      color: #3b82f6;
      font-weight: 600;
      text-decoration: none;
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: fadeIn 0.3s ease;
`;

const ModalContent = styled.div`
  background: white;
  width: 100%;
  max-width: 340px;
  border-radius: 24px;
  padding: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
`;

const ModalTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 800;
  color: #0B1A33;
  margin-bottom: 8px;
`;

const ModalInput = styled.input`
  width: 100%;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 12px 15px;
  font-size: 1rem;
  font-weight: 600;
  color: #0B1A33;
  margin-bottom: 15px;
  outline: none;
  font-family: 'Outfit', sans-serif;
  
  &:focus {
    border-color: #0B1A33;
  }
`;

const ModalButton = styled.button`
  width: 100%;
  background: #0B1A33;
  color: white;
  border: none;
  padding: 14px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-family: 'Outfit', sans-serif;
  
  &:disabled {
    background: #94a3b8;
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
    const [isDummy, setIsDummy] = useState(false);
    const [activateData, setActivateData] = useState({
        ownerName: '',
        ownerPhone: '',
        emergencyContact: '',
        password: '',
        assetType: 'vehicle',
        assetNumber: ''
    });
    const [activating, setActivating] = useState(false);

    const t = translations[lang]?.publicProfile || translations.en.publicProfile;

    useEffect(() => {
        const savedPhone = localStorage.getItem('scannerPhone');
        if (savedPhone) {
            setModalPhone(savedPhone);
        }
    }, []);

    const cleanId = id ? id.replace(/^(VH-|TS-|PT-|PS-|OT-)\1+/, '$1') : id;

    const verifyProduct = async () => {
        try {
            const response = await api.get(`/public/tag/${cleanId}`);
            if (response.data.isDummy) {
                setIsDummy(true);
                setProduct(response.data.tag);
            } else {
                setIsDummy(false);
                setProduct(response.data.tag);
            }
        } catch (err) {
            console.error(err);
            toast.error("Tag not found or invalid.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        verifyProduct();
    }, [id]);

    const handleActivateSubmit = async (e) => {
        e.preventDefault();
        if (!activateData.ownerName || !activateData.ownerPhone || !activateData.password) {
            toast.error("Name, Phone Number and Password are required.");
            return;
        }
        setActivating(true);
        try {
            await api.post(`/public/tag/${cleanId}/activate`, activateData);
            toast.success("Tag activated successfully!");
            setIsDummy(false);
            verifyProduct();
        } catch (err) {
            toast.error(err.response?.data?.error || "Activation failed. Please try again.");
        } finally {
            setActivating(false);
        }
    };

    const handleAction = async (type) => {
        setPendingAction(type);
        setCallReadyUrl(null);
        
        const savedPhone = localStorage.getItem('scannerPhone');
        if (savedPhone && savedPhone.length >= 10) {
            // Auto execute if we already have it saved
            executeAction(type, savedPhone);
        } else {
            // Prompt user with modal
            setShowPhoneModal(true);
        }
    };

    const executeAction = async (type, phoneToUse) => {
        setActionLoading(true);
        try {
            if (type === 'call') {
                const res = await api.post(`/public/tag/${id}/call`, { scannerPhone: phoneToUse });
                if (res.data.success && res.data.exophone) {
                    setCallReadyUrl(`tel:${res.data.exophone}`);
                    if (!showPhoneModal) {
                        setShowPhoneModal(true);
                    }
                }
            } else if (type === 'whatsapp') {
                const res = await api.post(`/public/tag/${id}/whatsapp-session`, { scannerPhone: phoneToUse });
                
                let targetPhone = res.data.companyWhatsapp || res.data.directPhone;
                
                if (targetPhone) {
                    // Remove + if it exists
                    targetPhone = targetPhone.replace('+', '');
                    // For company whatsapp, we can prefill a message with the tag ID to ensure context
                    let text = `Hi, I scanned ${id}. `;
                    if (!res.data.masked) text = `Hi, I found your item (${id}). `;
                    
                    window.location.href = `https://wa.me/${targetPhone}?text=${encodeURIComponent(text)}`;
                } else {
                    toast.error("Could not initiate WhatsApp session.");
                }
                setShowPhoneModal(false);
                
            } else if (type === 'parking') {
                const msgType = 'Parking Alert';
                
                let lat, lng;
                if (navigator.geolocation) {
                    try {
                        const pos = await new Promise((resolve, reject) => {
                            navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 5000 });
                        });
                        lat = pos.coords.latitude;
                        lng = pos.coords.longitude;
                    } catch (e) {
                        console.warn("Location not available");
                    }
                }

                await api.post(`/public/tag/${id}/alert`, { 
                    scannerPhone: phoneToUse,
                    lat,
                    lng,
                    city: msgType
                });
                toast.success("Alert sent successfully. The owner has been notified.");
                setShowPhoneModal(false);
            } else if (type === 'sos') {
                await api.post(`/public/tag/${id}/emergency`, { scannerPhone: phoneToUse });
                toast.success("Emergency SOS triggered! The emergency contacts have been notified.");
                setShowPhoneModal(false);
            }
        } catch (err) {
            toast.error(err.response?.data?.error || "Action failed. Please try again.");
            console.error(err);
            setShowPhoneModal(false);
        } finally {
            setActionLoading(false);
        }
    };

    const handleModalSubmit = (e) => {
        e.preventDefault();
        if (!modalPhone || modalPhone.length < 10) {
            toast.error("Valid 10-digit mobile number is required.");
            return;
        }
        localStorage.setItem('scannerPhone', modalPhone);
        executeAction(pendingAction, modalPhone);
    };

    if (loading) return null;

    return (
        <PageWrapper>
            {showPhoneModal && (
                <ModalOverlay>
                    <ModalContent>
                        <div style={{ textAlign: 'right', marginBottom: '-10px', position: 'relative', zIndex: 10 }}>
                            <button onClick={() => setShowPhoneModal(false)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#999' }}>&times;</button>
                        </div>
                        
                        {!callReadyUrl ? (
                            <form onSubmit={handleModalSubmit}>
                                <ModalTitle>Security Check</ModalTitle>
                                <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '15px' }}>
                                    To connect securely via Call Masking, please verify your mobile number. (One-time only)
                                </p>
                                <ModalInput 
                                    type="tel" 
                                    placeholder="Enter 10-digit mobile number" 
                                    value={modalPhone} 
                                    onChange={e => setModalPhone(e.target.value)} 
                                    maxLength={15} 
                                />
                                <ModalButton type="submit" disabled={actionLoading}>
                                    {actionLoading ? 'Connecting securely...' : 'Proceed'}
                                </ModalButton>
                            </form>
                        ) : (
                            <div style={{ textAlign: 'center', padding: '10px 0' }}>
                                <div style={{ background: 'rgba(16, 185, 129, 0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px' }}>
                                    <Phone color="#10B981" size={30} />
                                </div>
                                <ModalTitle style={{ color: '#0B1A33' }}>Ready to Connect</ModalTitle>
                                <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '20px' }}>
                                    Your call is securely routed. The owner's personal number remains hidden.
                                </p>
                                <a href={callReadyUrl} style={{ textDecoration: 'none' }} onClick={() => setShowPhoneModal(false)}>
                                    <ModalButton type="button" style={{ background: '#10B981' }}>
                                        Tap to Call Owner
                                    </ModalButton>
                                </a>
                            </div>
                        )}
                    </ModalContent>
                </ModalOverlay>
            )}

            <TopHeader>
                <TopControls>
                    <ScanVerified>
                        <QrCode className="icon" size={16} />
                        <div className="text">{t.scanVerified}<br/><span>{t.verified}</span></div>
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
                    <p className="subtitle">{t.smartSecurity}</p>
                    <div className="features">
                        <span>{t.badges.split(" • ")[0]}</span> • <span>{t.badges.split(" • ")[1]}</span> • <span>{t.badges.split(" • ")[2]}</span> • <span>{t.badges.split(" • ")[3]}</span>
                    </div>
                    <div className="asset-id">{t.assetId}: {id?.toUpperCase() || 'TS-9RQQB3'}</div>
                    <div className="protected">
                        <CheckCircle size={14} /> {t.protectedBy}
                    </div>
                </BrandSection>
            </TopHeader>

            <MainCard>
                {isDummy ? (
                    <div style={{ padding: '10px 0' }}>
                        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                            <div style={{ background: 'rgba(201, 168, 76, 0.1)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px' }}>
                                <Shield color="#C9A84C" size={32} />
                            </div>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0B1A33', marginBottom: '8px' }}>Activate Your V-Kawach Tag</h3>
                            <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: 1.5 }}>
                                This safety tag is unassigned. Fill out your details below to activate and link this QR sticker to your vehicle/asset.
                            </p>
                        </div>

                        <form onSubmit={handleActivateSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <div>
                                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0B1A33', display: 'block', marginBottom: '5px' }}>Owner Full Name *</label>
                                <ModalInput 
                                    type="text" 
                                    placeholder="Enter your full name" 
                                    value={activateData.ownerName} 
                                    onChange={e => setActivateData({ ...activateData, ownerName: e.target.value })} 
                                    required 
                                />
                            </div>

                            <div>
                                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0B1A33', display: 'block', marginBottom: '5px' }}>Mobile Number *</label>
                                <ModalInput 
                                    type="tel" 
                                    placeholder="10-digit mobile number" 
                                    value={activateData.ownerPhone} 
                                    onChange={e => setActivateData({ ...activateData, ownerPhone: e.target.value })} 
                                    required 
                                />
                            </div>

                            <div>
                                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0B1A33', display: 'block', marginBottom: '5px' }}>Emergency Contact Number (Optional)</label>
                                <ModalInput 
                                    type="tel" 
                                    placeholder="Family / Friend contact" 
                                    value={activateData.emergencyContact} 
                                    onChange={e => setActivateData({ ...activateData, emergencyContact: e.target.value })} 
                                />
                            </div>

                            <div>
                                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0B1A33', display: 'block', marginBottom: '5px' }}>Vehicle / Registration Number (Optional)</label>
                                <ModalInput 
                                    type="text" 
                                    placeholder="e.g. MH02AB1234" 
                                    value={activateData.assetNumber} 
                                    onChange={e => setActivateData({ ...activateData, assetNumber: e.target.value })} 
                                />
                            </div>

                            <div>
                                <label style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0B1A33', display: 'block', marginBottom: '5px' }}>Account Password *</label>
                                <ModalInput 
                                    type="password" 
                                    placeholder="Create password for account" 
                                    value={activateData.password} 
                                    onChange={e => setActivateData({ ...activateData, password: e.target.value })} 
                                    required 
                                />
                            </div>

                            <ModalButton type="submit" disabled={activating} style={{ background: '#0B1A33', marginTop: '10px' }}>
                                {activating ? 'Activating Tag...' : 'Activate & Lock Tag'}
                            </ModalButton>
                        </form>
                    </div>
                ) : (
                    <>
                        <OwnerProfile>
                            <div className="left">
                                <div className="avatar">
                                    <User size={32} />
                                    <div className="check"><CheckCircle size={10} /></div>
                                </div>
                                <div className="info">
                                    <h3>{product?.ownerName || 'Vehicle Owner'}</h3>
                                    <div className="badges">
                                        <div><CheckCircle size={12} /> {t.verifiedOwner}</div>
                                        <div><Shield size={12} /> {t.vehicleProtected}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="right-badge">
                                <Shield size={20} />
                                <span>{t.verifiedOwner.split(" ")[0]}<br/>{t.verifiedOwner.split(" ").slice(1).join(" ")}</span>
                            </div>
                        </OwnerProfile>

                <ActionButtons>
                    <PrimaryButton bg="#16a34a" shadow="rgba(22, 163, 74, 0.3)" onClick={() => handleAction('call')}>
                        <div className="icon-bg" style={{background: 'white'}}><Phone color="#16a34a" fill="#16a34a" size={24} /></div>
                        <div className="content">
                            <h4>{t.contactOwnerTitle}</h4>
                            <p>{t.contactOwnerSub}</p>
                            <span className="sub">{t.primaryOption}</span>
                        </div>
                        <div style={{ paddingRight: '10px' }}>&gt;</div>
                    </PrimaryButton>

                    <PrimaryButton bg="#16a34a" shadow="rgba(22, 163, 74, 0.3)" onClick={() => handleAction('whatsapp')}>
                        <div className="icon-bg" style={{background: 'white'}}><MessageCircle color="#16a34a" fill="#16a34a" size={24} /></div>
                        <div className="content">
                            <h4>{t.chatWhatsappTitle}</h4>
                            <p>{t.chatWhatsappSub}</p>
                        </div>
                        <div className="premium-badge"><Crown size={12} /> {t.premium}</div>
                        <div style={{ paddingRight: '10px' }}>&gt;</div>
                    </PrimaryButton>

                    <PrimaryButton bg="#f97316" shadow="rgba(249, 115, 22, 0.3)" onClick={() => handleAction('parking')}>
                        <div className="icon-bg" style={{background: 'white'}}><CircleParking color="#f97316" fill="#f97316" size={24} /></div>
                        <div className="content">
                            <h4>{t.parkingTitle}</h4>
                            <p>{t.parkingSub}</p>
                        </div>
                        <div style={{ paddingRight: '10px' }}>&gt;</div>
                    </PrimaryButton>
                </ActionButtons>

                <SectionHeader>
                    <div className="title">
                        <ShieldAlert size={18} />
                        <h3>{t.emergencyOptions}</h3>
                    </div>
                    <div className="expand">{t.tapToExpand}</div>
                </SectionHeader>

                <EmergencyGrid>
                    <EmergencyCard color="#ef4444" textColor="#ef4444" onClick={() => handleAction('sos')}>
                        <div className="icon-wrapper" style={{fontSize: '28px'}}>🚨</div>
                        <h4>{t.sosEmergency}</h4>
                        <p>{t.immediateHelp}</p>
                        <div style={{ textAlign: 'right', color: '#ef4444', fontWeight: 'bold', position: 'absolute', right: '15px', bottom: '15px' }}>&gt;</div>
                    </EmergencyCard>
                    
                    <EmergencyCard color="#3b82f6" textColor="#1d4ed8" onClick={() => handleAction('sos')}>
                        <div className="icon-wrapper" style={{background: 'rgba(59, 130, 246, 0.1)', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%'}}>
                            <MapPin fill="#3b82f6" color="white" size={24} />
                        </div>
                        <h4>{t.shareLocation}</h4>
                        <p>{t.shareLocationSub}</p>
                        <span className="premium"><Crown size={10} style={{display:'inline', marginRight:'2px'}}/> {t.premium}</span>
                        <div style={{ textAlign: 'right', color: '#1d4ed8', fontWeight: 'bold', position: 'absolute', right: '15px', bottom: '15px' }}>&gt;</div>
                    </EmergencyCard>
                    
                    <EmergencyCard color="#4f46e5" textColor="#0B1A33" onClick={() => window.location.href='tel:112'}>
                        <div className="icon-wrapper" style={{fontSize: '28px'}}>👮</div>
                        <h4>{t.policeTitle}</h4>
                        <p>{t.policeSub}<br/><strong>112</strong></p>
                        <div style={{ textAlign: 'right', color: '#0B1A33', fontWeight: 'bold', position: 'absolute', right: '15px', bottom: '15px' }}>&gt;</div>
                    </EmergencyCard>
                    
                    <EmergencyCard color="#ef4444" textColor="#0B1A33" onClick={() => window.location.href='tel:108'}>
                        <div className="icon-wrapper" style={{fontSize: '28px'}}>🚑</div>
                        <h4>{t.ambulanceTitle}</h4>
                        <p>{t.ambulanceSub}<br/><strong>108</strong></p>
                        <div style={{ textAlign: 'right', color: '#0B1A33', fontWeight: 'bold', position: 'absolute', right: '15px', bottom: '15px' }}>&gt;</div>
                    </EmergencyCard>
                </EmergencyGrid>

                <FamilyNotify>
                    <div className="left">
                        <Globe size={18} />
                        <span>{t.familyNotified}</span>
                    </div>
                    <div className="premium"><Crown size={12} /> {t.premium}</div>
                </FamilyNotify>

                <SectionHeader>
                    <div className="title">
                        <Car size={18} color="#0B1A33" />
                        <h3>{t.vehicleDetails}</h3>
                    </div>
                </SectionHeader>

                <DetailsGrid>
                    <div className="item">
                        <div className="label">{t.vehicleType}</div>
                        <div className="value">{product?.vehicleType || 'Car'}</div>
                    </div>
                    <div className="item">
                        <div className="label">{t.registrationNo}</div>
                        <div className="value">{product?.registrationNo || 'VH-M****F1'}</div>
                    </div>
                    <div className="item">
                        <div className="label">{t.color}</div>
                        <div className="value">{product?.color || 'N/A'}</div>
                    </div>
                    <div className="item">
                        <div className="label">{t.registrationState}</div>
                        <div className="value">{product?.registrationState || 'N/A'}</div>
                    </div>
                    <div className="item">
                        <div className="label">{t.model}</div>
                        <div className="value">{product?.model || 'N/A'}</div>
                    </div>
                    <div className="item">
                        <div className="label">{t.year}</div>
                        <div className="value">{product?.year || 'N/A'}</div>
                    </div>
                </DetailsGrid>

                <PrivacyBanner>
                    <Lock size={20} />
                    <div className="text">
                        <p>{t.privacyProtected}<br/>{t.ownerWillSee}</p>
                    </div>
                    <div className="link">{t.learnMore}</div>
                </PrivacyBanner>

                <FooterStats>
                    <div className="stat">
                        <Shield />
                        <span>{t.endToEnd}<br/>{t.encrypted}</span>
                    </div>
                    <div className="stat">
                        <Lock />
                        <span>{t.privacy}<br/>{t.protected}</span>
                    </div>
                    <div className="stat">
                        <Globe />
                        <span>{t.secure}<br/>{t.network}</span>
                    </div>
                    <div className="stat">
                        <Activity />
                        <span>{t.managedBy}<br/>{t.tarkshyaProtocol}</span>
                    </div>
                </FooterStats>
                    </>
                )}
            </MainCard>

            <BottomFooter>
                <Shield size={12} style={{display:'inline', marginRight: '4px'}}/> 
                © 2024 <span>V-Kawach</span> | Powered by Tarkshya Solution
            </BottomFooter>
        </PageWrapper>
    );
}
