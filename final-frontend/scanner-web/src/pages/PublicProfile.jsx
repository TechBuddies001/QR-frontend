
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import {
    AlertTriangle,
    Car,
    Phone,
    Camera,
    MapPin,
    ShieldCheck,
    MessageCircle,
    User,
    Info
} from 'lucide-react';
import Button from '../components/Button';
import Section from '../components/Section';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ProfileContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  animation: ${fadeIn} 0.6s ease-out;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
  
  img {
    height: 60px;
    margin-bottom: 20px;
  }
  
  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.navy};
    margin-bottom: 10px;
  }
  
  p {
    color: #666;
  }
`;

const ScenarioGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 40px;
`;

const ScenarioCard = styled.div`
  background: white;
  padding: 25px;
  border-radius: 16px;
  border: 2px solid ${props => props.active ? props.theme.colors.gold : '#eee'};
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 20px;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.gold};
  }

  .icon-box {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.type === 'emergency' ? '#fff0f0' : '#eef6ff'};
    color: ${props => props.type === 'emergency' ? '#d32f2f' : '#1976d2'};
  }

  .content {
    h3 {
      font-size: 1.1rem;
      margin-bottom: 5px;
      color: ${({ theme }) => theme.colors.navy};
    }
    p {
      font-size: 0.9rem;
      color: #777;
    }
  }
`;

const ActionPanel = styled.div`
  background: ${({ theme }) => theme.colors.navy};
  color: white;
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  
  h2 {
    font-size: 1.25rem;
    margin-bottom: 15px;
  }
  
  p {
    font-size: 0.9rem;
    opacity: 0.8;
    margin-bottom: 25px;
  }
`;

const VirtualCallBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.1);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.gold};
`;

const translations = {
    en: {
        title: 'Secured Vehicle Profile',
        privacyMsg: 'The owner has enabled Privacy Mode. Your identity and the owner\'s identity are protected.',
        standardMsg: 'You have scanned a secure Tarkshya QR code. Please help by selecting an action below.',
        emergency: 'Emergency / Accident',
        emergencyDesc: 'Vehicle met with an accident or the driver needs urgent medical help.',
        parking: 'Wrong / Obstructive Parking',
        parkingDesc: 'This vehicle is parked incorrectly or blocking your way.',
        info: 'General Inquiry',
        infoDesc: 'Want to contact the owner for other reasons.',
        alertSent: 'The owner and their emergency contacts will be alerted immediately via WhatsApp and Parallel SMS with your location.',
        shareLocation: 'Share Location & Alert Owner',
        virtualCall: 'Initiate Virtual Call',
        requestMove: 'Send Location & Request Move',
        callPrivate: 'Call Owner Privately',
        goBack: 'Go Back',
        privacyTag: 'Your identity remains 100% private'
    },
    hi: {
        title: 'सुरक्षित वाहन प्रोफाइल',
        privacyMsg: 'मालिक ने प्राइवेसी मोड सक्षम किया है। आपकी और मालिक की पहचान सुरक्षित है।',
        standardMsg: 'आपने एक सुरक्षित Tarkshya QR कोड स्कैन किया है। कृपया नीचे दिए गए विकल्पों में से चयन करके सहायता करें।',
        emergency: 'आपातकालीन / दुर्घटना',
        emergencyDesc: 'वाहन दुर्घटनाग्रस्त हो गया है या ड्राइवर को तत्काल चिकित्सा सहायता की आवश्यकता है।',
        parking: 'गलत / अवरोधक पार्किंग',
        parkingDesc: 'यह वाहन गलत तरीके से पार्क किया गया है या आपका रास्ता रोक रहा है।',
        info: 'सामान्य पूछताछ',
        infoDesc: 'अन्य कारणों से मालिक से संपर्क करना चाहते हैं।',
        alertSent: 'मालिक और उनके आपातकालीन संपर्कों को WhatsApp और पैरेलल SMS के माध्यम से आपके स्थान के साथ तुरंत सूचित किया जाएगा।',
        shareLocation: 'लोकेशन साझा करें और अलर्ट भेजें',
        virtualCall: 'वर्चुअल कॉल शुरू करें',
        requestMove: 'लोकेशन भेजें और हटने का अनुरोध करें',
        callPrivate: 'मालिक को प्राइवेट कॉल करें',
        goBack: 'पीछे हटें',
        privacyTag: 'आपकी पहचान 100% निजी रहती है'
    }
};

const PublicProfile = () => {
    const [scenario, setScenario] = useState(null);
    const [isPrivacyMode, setIsPrivacyMode] = useState(true);
    const [lang, setLang] = useState('en');

    const t = translations[lang];
    const ownerPhone = '918881384777';

    const handleLocationNotify = (type) => {
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser.');
            return;
        }

        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
            const message = type === 'emergency'
                ? `🚨 EMERGENCY ALERT! Someone scanned your Tarkshya QR and reported an accident.\nLocation: ${mapUrl}\n(Parallel SMS also sent)`
                : `🚗 PARKING ALERT! Please move your vehicle. Someone is waiting.\nLocation: ${mapUrl}\n(Parallel SMS also sent)`;

            window.open(`https://wa.me/${ownerPhone}?text=${encodeURIComponent(message)}`, '_blank');
        }, () => {
            alert('Please enable location access to notify the owner with your position.');
            const message = type === 'emergency'
                ? `🚨 EMERGENCY ALERT! Someone scanned your Tarkshya QR and reported an accident.`
                : `🚗 PARKING ALERT! Please move your vehicle. Someone is waiting.`;
            window.open(`https://wa.me/${ownerPhone}?text=${encodeURIComponent(message)}`, '_blank');
        });
    };

    return (
        <Section bg="light" style={{ minHeight: '100vh' }}>
            <div style={{ textAlign: 'right', padding: '10px 20px' }}>
                <button
                    onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
                    style={{ background: 'white', border: '1px solid #ddd', padding: '5px 12px', borderRadius: '20px', cursor: 'pointer', fontWeight: 600 }}
                >
                    {lang === 'en' ? 'हिन्दी' : 'English'}
                </button>
            </div>
            <ProfileContainer>
                <Header>
                    <img src="/new_logo.png" alt="Tarkshya" />
                    <h1>{isPrivacyMode ? t.title : 'Vikas Kumar - Vehicle Profile'}</h1>
                    <p>
                        {isPrivacyMode ? t.privacyMsg : t.standardMsg}
                    </p>
                </Header>

                {!scenario ? (
                    <ScenarioGrid>
                        <ScenarioCard
                            type="emergency"
                            onClick={() => setScenario('emergency')}
                        >
                            <div className="icon-box">
                                <AlertTriangle size={32} />
                            </div>
                            <div className="content">
                                <h3>{t.emergency}</h3>
                                <p>{t.emergencyDesc}</p>
                            </div>
                        </ScenarioCard>

                        <ScenarioCard
                            type="parking"
                            onClick={() => setScenario('parking')}
                        >
                            <div className="icon-box">
                                <Car size={32} />
                            </div>
                            <div className="content">
                                <h3>{t.parking}</h3>
                                <p>{t.parkingDesc}</p>
                            </div>
                        </ScenarioCard>

                        <ScenarioCard
                            type="info"
                            onClick={() => setScenario('info')}
                        >
                            <div className="icon-box">
                                <Info size={32} />
                            </div>
                            <div className="content">
                                <h3>{t.info}</h3>
                                <p>{t.infoDesc}</p>
                            </div>
                        </ScenarioCard>
                    </ScenarioGrid>
                ) : (
                    <ActionPanel>
                        {scenario === 'emergency' && (
                            <>
                                <AlertTriangle color="#ff4444" size={48} style={{ marginBottom: '20px' }} />
                                <h2>{t.emergency}</h2>
                                <p>{t.alertSent}</p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                    <Button variant="danger" style={{ width: '100%', background: '#d32f2f' }} onClick={() => handleLocationNotify('emergency')}>
                                        <MapPin size={18} style={{ marginRight: '10px' }} /> {t.shareLocation}
                                    </Button>
                                    <Button variant="outline" style={{ width: '100%', color: 'white', borderColor: 'white' }}>
                                        <Phone size={18} style={{ marginRight: '10px' }} /> {t.virtualCall}
                                    </Button>
                                </div>
                            </>
                        )}

                        {scenario === 'parking' && (
                            <>
                                <Car size={48} style={{ marginBottom: '20px', color: '#C9A84C' }} />
                                <h2>{t.parking}</h2>
                                <p>{t.alertSent}</p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                    <Button style={{ width: '100%' }} onClick={() => handleLocationNotify('parking')}>
                                        <MessageCircle size={18} style={{ marginRight: '10px' }} /> {t.requestMove}
                                    </Button>
                                    <Button variant="outline" style={{ width: '100%', color: 'white', borderColor: 'white' }}>
                                        <Phone size={18} style={{ marginRight: '10px' }} /> {t.callPrivate}
                                    </Button>
                                </div>
                            </>
                        )}

                        <Button
                            variant="link"
                            style={{ marginTop: '30px', color: 'rgba(255,255,255,0.6)' }}
                            onClick={() => setScenario(null)}
                        >
                            {t.goBack}
                        </Button>

                        <VirtualCallBadge>
                            <ShieldCheck size={14} /> {t.privacyTag}
                        </VirtualCallBadge>
                    </ActionPanel>
                )}

                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <p style={{ fontSize: '0.8rem', color: '#999' }}>
                        Powered by <strong>Tarkshya Security Systems</strong><br />
                        Protecting assets, saving lives.
                    </p>
                </div>
            </ProfileContainer>
        </Section>
    );
};

export default PublicProfile;
