import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import {
  Globe, FileText, Type, CreditCard, MapPin, Wifi, Smartphone, Share2,
  Download, CheckCircle, QrCode, BarChart3, RefreshCw, Shield, TrendingUp,
  Users, Building2, ChevronDown, ChevronUp, ArrowRight
} from 'lucide-react';
import QRCodeStyling from 'qr-code-styling';

/* ── animations ── */
const fadeUp = keyframes`from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}`;

/* ── Hero ── */
const HeroWrap = styled.section`
  background: linear-gradient(135deg, #0b1a33 0%, #1a3560 50%, #0b2a55 100%);
  padding: 80px 20px 60px;
  text-align: center;
  color: white;
`;
const HeroTag = styled.div`
  display: inline-flex; align-items: center; gap: 8px;
  background: rgba(201,168,76,0.15); border: 1px solid rgba(201,168,76,0.35);
  color: #C9A84C; padding: 6px 18px; border-radius: 50px;
  font-size: .82rem; font-weight: 700; letter-spacing: 1px;
  text-transform: uppercase; margin-bottom: 22px;
`;
const HeroTitle = styled.h1`
  font-size: clamp(1.9rem,4.5vw,3.2rem); font-weight: 900; line-height: 1.2;
  margin-bottom: 14px; color: white;
  span { color: #C9A84C; }
`;
const HeroSub = styled.p`
  font-size: 1.05rem; opacity: .8; max-width: 660px; margin: 0 auto 40px; line-height: 1.7;
`;

/* ── QR Generator card ── */
const GenCard = styled.div`
  background: white; border-radius: 24px;
  max-width: 960px; margin: 0 auto;
  box-shadow: 0 30px 80px rgba(0,0,0,0.2);
  overflow: hidden;
  animation: ${fadeUp} .6s ease both;
`;

const TabBar = styled.div`
  display: flex; overflow-x: auto; border-bottom: 1px solid #eee;
  padding: 0 20px;
  &::-webkit-scrollbar { height: 0; }
`;
const Tab = styled.button`
  display: flex; align-items: center; gap: 7px;
  padding: 16px 18px; border: none; background: none; cursor: pointer;
  font-weight: 700; font-size: .88rem; white-space: nowrap;
  color: ${p => p.active ? '#0b1a33' : '#888'};
  border-bottom: 2px solid ${p => p.active ? '#C9A84C' : 'transparent'};
  transition: all .2s;
  svg { width: 15px; height: 15px; }
  &:hover { color: #0b1a33; }
`;

const GenBody = styled.div`
  display: grid; grid-template-columns: 1fr 280px; min-height: 340px;
  @media(max-width:700px){ grid-template-columns:1fr; }
`;
const GenLeft = styled.div`
  padding: 32px; border-right: 1px solid #f0f0f0;
  @media(max-width:700px){ border-right: none; border-bottom: 1px solid #f0f0f0; }
`;
const Label = styled.label`
  display: block; font-weight: 700; font-size: .9rem; color: #333; margin-bottom: 8px;
`;
const Input = styled.input`
  width: 100%; padding: 13px 16px; border: 1.5px solid #ddd; border-radius: 10px;
  font-size: .95rem; outline: none; transition: border .2s; box-sizing: border-box;
  &:focus { border-color: #C9A84C; }
`;
const TextArea = styled.textarea`
  width: 100%; padding: 13px 16px; border: 1.5px solid #ddd; border-radius: 10px;
  font-size: .95rem; outline: none; transition: border .2s; box-sizing: border-box;
  resize: vertical; min-height: 100px;
  &:focus { border-color: #C9A84C; }
`;
const ColorRow = styled.div`
  display: flex; gap: 16px; margin-top: 20px; flex-wrap: wrap;
  label { font-size: .85rem; font-weight: 700; color: #555; }
  input[type=color]{ width: 48px; height: 36px; border: 1.5px solid #ddd; border-radius: 8px; cursor: pointer; }
`;

const GenRight = styled.div`
  padding: 28px; display: flex; flex-direction: column; align-items: center; justify-content: space-between;
`;
const QrPreview = styled.div`
  width: 180px; height: 180px; border: 1.5px dashed #ddd; border-radius: 16px;
  display: flex; align-items: center; justify-content: center; overflow: hidden;
  canvas, img { width: 100%; height: 100%; object-fit: contain; }
`;
const DownloadBtn = styled.button`
  width: 100%; margin-top: 18px; padding: 13px;
  background: ${p => p.disabled ? '#eee' : '#C9A84C'};
  color: ${p => p.disabled ? '#999' : '#0b1a33'};
  border: none; border-radius: 10px; font-weight: 800; font-size: .95rem;
  cursor: ${p => p.disabled ? 'not-allowed' : 'pointer'};
  transition: all .2s; display: flex; align-items: center; justify-content: center; gap: 8px;
  &:hover:not(:disabled) { background: #b8943c; }
`;

/* ── Steps ── */
const StepsSection = styled.section`
  background: linear-gradient(135deg, #0b1a33 0%, #1a3560 100%);
  padding: 90px 20px; color: white;
`;
const StepsTitle = styled.div`
  text-align: center; margin-bottom: 60px;
  h2 { font-size: clamp(1.7rem,3.5vw,2.4rem); font-weight: 900; margin-bottom: 10px; color: white; }
  p { opacity: .75; font-size: 1rem; }
`;
const StepCard = styled.div`
  background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px; padding: 36px 32px 36px 40px; max-width: 840px; margin: 0 auto 20px;
  display: grid; grid-template-columns: 100px 1fr; gap: 40px; align-items: center;
  @media(max-width:600px){ grid-template-columns:1fr; gap:20px; }
`;
const StepNum = styled.div`
  font-size: 3rem; font-weight: 900; color: rgba(201,168,76,0.3);
  line-height: 1;
  span { display: block; font-size: 1rem; color: #C9A84C; font-weight: 700; }
`;
const StepInfo = styled.div`
  h3 { font-size: 1.25rem; font-weight: 800; margin-bottom: 8px; }
  p { opacity: .75; line-height: 1.7; font-size: .95rem; }
`;
const StepVisual = styled.div`
  display: flex; gap: 10px; flex-wrap: wrap; margin-top: 14px;
`;
const Chip = styled.div`
  background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15);
  border-radius: 8px; padding: 6px 12px; font-size: .78rem; font-weight: 700;
  display: flex; align-items: center; gap: 6px;
  svg { width: 13px; height: 13px; color: #C9A84C; }
`;

/* ── How QR works (Accordion) ── */
const AccSection = styled.section`
  padding: 90px 20px; background: #f9f9f9;
`;
const AccWrap = styled.div`
  max-width: 1100px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start;
  @media(max-width:768px){ grid-template-columns:1fr; }
`;
const AccList = styled.div``;
const AccItem = styled.div`
  border-bottom: 1px solid #eee; overflow: hidden;
`;
const AccHead = styled.button`
  width: 100%; text-align: left; background: none; border: none; padding: 20px 0;
  font-weight: 800; font-size: 1rem; color: #0b1a33; cursor: pointer;
  display: flex; justify-content: space-between; align-items: center;
  svg { color: #C9A84C; flex-shrink: 0; }
`;
const AccBody = styled.div`
  max-height: ${p => p.open ? '200px' : '0'}; overflow: hidden;
  transition: max-height .35s ease;
  p { padding-bottom: 18px; color: #555; line-height: 1.7; font-size: .95rem; }
`;
const AccImg = styled.div`
  border-radius: 24px; overflow: hidden; background: #eee;
  height: 340px; display: flex; align-items: center; justify-content: center;
  img { width: 100%; height: 100%; object-fit: cover; }
`;

/* ── Why B2B ── */
const WhySection = styled.section`
  padding: 90px 20px; background: white;
`;
const WhyGrid = styled.div`
  max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr; gap: 60px;
`;
const WhyRow = styled.div`
  display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: center;
  @media(max-width:768px){ grid-template-columns:1fr; }
  &.reverse { @media(min-width:769px){ direction: rtl; > * { direction: ltr; } } }
`;
const WhyText = styled.div`
  h3 { font-size: 1.5rem; font-weight: 900; color: #0b1a33; margin-bottom: 14px; }
  p { color: #555; line-height: 1.8; font-size: .98rem; }
`;
const WhyVisual = styled.div`
  background: linear-gradient(135deg, #0b1a33 0%, #1a3560 100%);
  border-radius: 24px; height: 260px; display: flex; align-items: center;
  justify-content: center; position: relative; overflow: hidden;
  .floating-card {
    background: white; border-radius: 14px; padding: 12px 18px;
    font-size: .85rem; font-weight: 700; color: #0b1a33;
    position: absolute; box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    display: flex; align-items: center; gap: 8px;
    svg { color: #C9A84C; }
  }
`;

/* ── Use Cases ── */
const UseCasesSection = styled.section`
  padding: 90px 20px; background: #f9f9f9;
`;
const UseCaseGrid = styled.div`
  max-width: 1200px; margin: 0 auto;
  display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px;
`;
const UseCaseCard = styled.div`
  background: white; border-radius: 20px; padding: 30px;
  border: 1px solid #eee; box-shadow: 0 2px 16px rgba(0,0,0,0.04);
  transition: all .3s;
  &:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); }
  .icon { width: 52px; height: 52px; background: rgba(201,168,76,0.1); border-radius: 14px;
    display: flex; align-items: center; justify-content: center; margin-bottom: 18px;
    svg { color: #C9A84C; }
  }
  h3 { font-size: 1.05rem; font-weight: 800; color: #0b1a33; margin-bottom: 8px; }
  p { font-size: .88rem; color: #666; line-height: 1.6; }
`;

/* ── CTA ── */
const CTASection = styled.section`
  background: linear-gradient(135deg, #0b1a33 0%, #1a3560 100%);
  padding: 80px 20px; text-align: center;
  h2 { font-size: clamp(1.7rem,3.5vw,2.4rem); font-weight: 900; color: white; margin-bottom: 14px;
    span { color: #C9A84C; }
  }
  p { color: rgba(255,255,255,.75); font-size: 1.02rem; max-width: 520px; margin: 0 auto 36px; line-height: 1.7; }
`;
const CTABtns = styled.div`
  display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;
`;
const PrimaryBtn = styled(Link)`
  display: inline-flex; align-items: center; gap: 10px;
  background: #C9A84C; color: #0b1a33; padding: 15px 36px; border-radius: 50px;
  font-weight: 800; font-size: 1rem; text-decoration: none; transition: all .3s;
  &:hover { transform: translateY(-3px); box-shadow: 0 14px 40px rgba(201,168,76,.4); }
`;
const SecBtn = styled.a`
  display: inline-flex; align-items: center; gap: 10px;
  background: transparent; color: white; padding: 15px 36px; border-radius: 50px;
  font-weight: 800; font-size: 1rem; text-decoration: none; border: 2px solid rgba(255,255,255,.3);
  transition: all .3s;
  &:hover { border-color: #C9A84C; color: #C9A84C; }
`;

const SectionTitle = styled.div`
  text-align: center; margin-bottom: 60px;
  h2 { font-size: clamp(1.7rem,3.5vw,2.4rem); font-weight: 900; color: #0b1a33;
    span { color: #C9A84C; }
  }
  p { color: #777; font-size: 1rem; max-width: 600px; margin: 14px auto 0; line-height: 1.7; }
`;

/* ══════════════════════════════════════
   QR Generator Logic
══════════════════════════════════════ */
const QR_TYPES = [
  { id: 'url',     label: 'Website URL',   icon: <Globe size={15}/> },
  { id: 'text',    label: 'Text',          icon: <Type size={15}/> },
  { id: 'vcard',   label: 'Business Card', icon: <CreditCard size={15}/> },
  { id: 'maps',    label: 'Google Maps',   icon: <MapPin size={15}/> },
  { id: 'wifi',    label: 'WiFi',          icon: <Wifi size={15}/> },
  { id: 'app',     label: 'App Download',  icon: <Smartphone size={15}/> },
  { id: 'social',  label: 'Social',        icon: <Share2 size={15}/> },
];

const ACC_ITEMS = [
  { q: 'Turn paper into instant access', a: 'Add V-Kawach QR codes to your print marketing materials to transform static materials into gateways for engagement, registrations, or even sales. Your target audience can scan and immediately access offers, sign-up forms, product demos, or shopping pages.' },
  { q: 'Never lose another business card', a: 'Replace printed business cards with a smart QR code that links to a dynamic digital profile — update your contact info anytime without reprinting.' },
  { q: 'Bridge offline to online in one scan', a: 'QR codes provide the fastest link between offline print collaterals and online content. With a simple scan, users can instantly view product details, videos, menus, brochures, or instructions.' },
  { q: 'Turn scanners into lifelong customers', a: 'QR codes can do more than just engage — use them to generate leads and nurture ongoing relationships. Enable customers to sign up for newsletters or participate in loyalty programs with one scan.' },
];

const USE_CASES = [
  { icon: <Building2 size={24}/>, title: 'Fleet & Asset Management', desc: 'Tag every vehicle and asset with V-Kawach QR — track, protect, and manage your entire fleet from one dashboard.' },
  { icon: <BarChart3 size={24}/>, title: 'Inventory Tracking', desc: 'Scan to instantly pull up product details, stock levels, and logistics — eliminate manual errors.' },
  { icon: <Users size={24}/>, title: 'Employee Identity', desc: 'Smart ID cards with embedded QR for instant verification, attendance, and access control.' },
  { icon: <Shield size={24}/>, title: 'Security Sealing', desc: 'Anti-tamper QR seals for packages, documents, and products — know instantly if something was opened.' },
  { icon: <TrendingUp size={24}/>, title: 'Marketing Campaigns', desc: 'Track scans, locations, and conversion rates for every campaign in real time from your B2B dashboard.' },
  { icon: <RefreshCw size={24}/>, title: 'Dynamic Updates', desc: 'Change the destination URL or content behind any QR code anytime — no reprinting needed.' },
];

/* ── QR Generator Component ── */
const DesignBar = styled.div`
  display: flex; gap: 12px; overflow-x: auto; padding: 16px 20px;
  border-bottom: 1px solid #eee; background: #fdfdfd;
  &::-webkit-scrollbar { height: 4px; }
  &::-webkit-scrollbar-thumb { background: #ddd; border-radius: 4px; }
`;
const DesignThumb = styled.button`
  border: 2px solid ${p => p.active ? '#C9A84C' : 'transparent'};
  background: white; border-radius: 12px; padding: 8px;
  cursor: pointer; transition: all .2s; min-width: 72px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  display: flex; flex-direction: column; align-items: center; gap: 6px;
  &:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); border-color: #C9A84C; }
  span { font-size: 0.75rem; font-weight: 700; color: #555; }
  .preview {
    width: 48px; height: 48px; border-radius: 8px; border: 1px solid #eee;
    display: flex; align-items: center; justify-content: center;
  }
`;

const QR_DESIGNS = [
  { id: 'standard', name: 'Standard', options: { dotsOptions: { type: 'square', color: '#000000' }, cornersSquareOptions: { type: 'square', color: '#000000' }, cornersDotOptions: { type: 'square', color: '#000000' }, backgroundOptions: { color: '#ffffff' } } },
  { id: 'rounded', name: 'Rounded', options: { dotsOptions: { type: 'rounded', color: '#cc3333' }, cornersSquareOptions: { type: 'extra-rounded', color: '#cc3333' }, cornersDotOptions: { type: 'dot', color: '#cc3333' }, backgroundOptions: { color: '#ffffff' } } },
  { id: 'dots', name: 'Dots', options: { dotsOptions: { type: 'dots', color: '#5b2b82' }, cornersSquareOptions: { type: 'dot', color: '#5b2b82' }, cornersDotOptions: { type: 'dot', color: '#5b2b82' }, backgroundOptions: { color: '#ffffff' } } },
  { id: 'classy', name: 'Premium', options: { dotsOptions: { type: 'classy', color: '#0b1a33' }, cornersSquareOptions: { type: 'extra-rounded', color: '#C9A84C' }, cornersDotOptions: { type: 'dot', color: '#C9A84C' }, backgroundOptions: { color: '#ffffff' } } },
  { id: 'modern', name: 'Modern', options: { dotsOptions: { type: 'extra-rounded', color: '#008080' }, cornersSquareOptions: { type: 'dot', color: '#008080' }, cornersDotOptions: { type: 'square', color: '#008080' }, backgroundOptions: { color: '#f0fcfc' } } }
];

const QRGenerator = () => {
  const [activeTab, setActiveTab] = useState('url');
  const [content, setContent]     = useState('');
  const [vcardData, setVcardData] = useState({
    firstName: '', lastName: '', company: '', title: '', phone: '', email: '', website: ''
  });
  const [activeDesign, setActiveDesign] = useState(QR_DESIGNS[0]);
  const [fg, setFg] = useState(activeDesign.options.dotsOptions.color);
  const [bg, setBg] = useState(activeDesign.options.backgroundOptions.color);
  const qrRef = useRef(null);
  const qrCode = useRef(null);

  useEffect(() => {
    qrCode.current = new QRCodeStyling({
      width: 180, height: 180, margin: 5,
      data: content || "https://tarkshyasolution.in",
      ...activeDesign.options
    });
    if (qrRef.current) {
      qrRef.current.innerHTML = '';
      qrCode.current.append(qrRef.current);
    }
  }, []);

  useEffect(() => {
    if (qrCode.current) {
      let dataToEncode = content;
      if (activeTab === 'vcard') {
        if (!vcardData.firstName && !vcardData.phone && !vcardData.email) {
          dataToEncode = '';
        } else {
          dataToEncode = `BEGIN:VCARD\nVERSION:3.0\nN:${vcardData.lastName};${vcardData.firstName};;;\nFN:${vcardData.firstName} ${vcardData.lastName}\nORG:${vcardData.company}\nTITLE:${vcardData.title}\nTEL;TYPE=WORK,VOICE:${vcardData.phone}\nEMAIL:${vcardData.email}\nURL:${vcardData.website}\nEND:VCARD`;
        }
      }
      
      const options = { ...activeDesign.options, data: dataToEncode || "https://tarkshyasolution.in" };
      options.dotsOptions = { ...options.dotsOptions, color: fg };
      options.backgroundOptions = { ...options.backgroundOptions, color: bg };
      if (activeDesign.id !== 'classy') {
        options.cornersSquareOptions = { ...options.cornersSquareOptions, color: fg };
        options.cornersDotOptions = { ...options.cornersDotOptions, color: fg };
      }
      qrCode.current.update(options);
    }
  }, [content, activeDesign, fg, bg, activeTab, vcardData]);

  const handleDesignSelect = (design) => {
    setActiveDesign(design);
    setFg(design.options.dotsOptions.color);
    setBg(design.options.backgroundOptions.color);
  };

  const getPlaceholder = () => {
    const map = {
      url:    'https://tarkshyasolution.in',
      text:   'Enter your message here...',
      vcard:  'Full Name, Phone, Email, Company',
      maps:   'Enter address or coordinates',
      wifi:   'SSID:MyWifi,Password:1234,Type:WPA',
      app:    'Android or iOS app store URL',
      social: 'https://instagram.com/yourpage',
    };
    return map[activeTab] || 'Enter content here';
  };

  const handleDownload = () => {
    let hasContent = content;
    if (activeTab === 'vcard') {
      hasContent = vcardData.firstName || vcardData.phone || vcardData.email;
    }
    if (!hasContent) return;
    qrCode.current.download({ name: 'tarkshya-qr', extension: 'png' });
  };

  return (
    <GenCard>
      <TabBar>
        {QR_TYPES.map(t => (
          <Tab key={t.id} active={activeTab === t.id} onClick={() => { setActiveTab(t.id); setContent(''); }}>
            {t.icon} {t.label}
          </Tab>
        ))}
      </TabBar>
      <DesignBar>
        {QR_DESIGNS.map(d => (
          <DesignThumb key={d.id} active={activeDesign.id === d.id} onClick={() => handleDesignSelect(d)}>
            <div className="preview" style={{ background: d.options.backgroundOptions.color }}>
              <div style={{ width: '24px', height: '24px', background: d.options.dotsOptions.color, borderRadius: d.options.dotsOptions.type === 'dots' || d.options.dotsOptions.type === 'rounded' ? '50%' : '4px' }}></div>
            </div>
            <span>{d.name}</span>
          </DesignThumb>
        ))}
      </DesignBar>
      <GenBody>
        <GenLeft>
          <Label>Enter {QR_TYPES.find(t => t.id === activeTab)?.label} Content</Label>
          {activeTab === 'vcard' ? (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <Input placeholder="First Name" value={vcardData.firstName} onChange={e => setVcardData({...vcardData, firstName: e.target.value})} />
              <Input placeholder="Last Name" value={vcardData.lastName} onChange={e => setVcardData({...vcardData, lastName: e.target.value})} />
              <Input placeholder="Company" value={vcardData.company} onChange={e => setVcardData({...vcardData, company: e.target.value})} />
              <Input placeholder="Job Title" value={vcardData.title} onChange={e => setVcardData({...vcardData, title: e.target.value})} />
              <Input placeholder="Phone Number" value={vcardData.phone} onChange={e => setVcardData({...vcardData, phone: e.target.value})} />
              <Input placeholder="Email" value={vcardData.email} onChange={e => setVcardData({...vcardData, email: e.target.value})} />
              <Input placeholder="Website" style={{ gridColumn: 'span 2' }} value={vcardData.website} onChange={e => setVcardData({...vcardData, website: e.target.value})} />
            </div>
          ) : activeTab === 'text' ? (
            <TextArea placeholder={getPlaceholder()} value={content} onChange={e => setContent(e.target.value)} />
          ) : (
            <Input placeholder={getPlaceholder()} value={content} onChange={e => setContent(e.target.value)} />
          )}
          <ColorRow>
            <div>
              <label>QR Color</label><br/>
              <input type="color" value={fg} onChange={e => setFg(e.target.value)} />
            </div>
            <div>
              <label>Background</label><br/>
              <input type="color" value={bg} onChange={e => setBg(e.target.value)} />
            </div>
          </ColorRow>
        </GenLeft>
        <GenRight>
          <QrPreview ref={qrRef} style={{ opacity: (activeTab === 'vcard' ? (vcardData.firstName || vcardData.phone || vcardData.email) : content) ? 1 : 0.4 }}></QrPreview>
          <DownloadBtn disabled={activeTab === 'vcard' ? (!vcardData.firstName && !vcardData.phone && !vcardData.email) : !content} onClick={handleDownload}>
            <Download size={16} /> Download QR Code
          </DownloadBtn>
        </GenRight>
      </GenBody>
    </GenCard>
  );
};

/* ── Accordion ── */
const Accordion = () => {
  const [open, setOpen] = useState(0);
  return (
    <AccList>
      {ACC_ITEMS.map((item, i) => (
        <AccItem key={i}>
          <AccHead onClick={() => setOpen(open === i ? -1 : i)}>
            {item.q}
            {open === i ? <ChevronUp size={18}/> : <ChevronDown size={18}/>}
          </AccHead>
          <AccBody open={open === i}>
            <p>{item.a}</p>
          </AccBody>
        </AccItem>
      ))}
    </AccList>
  );
};

/* ── Main Page ── */
const B2BSolutions = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
  <>
    {/* Hero */}
    <HeroWrap>
      <HeroTag><QrCode size={14}/> B2B Solutions</HeroTag>
      <HeroTitle>
        {t.b2bNew?.title || 'QR Code Generator for'}<br/><span>{t.b2bNew?.titleHighlight || 'Businesses & Enterprises'}</span>
      </HeroTitle>
      <HeroSub>
        Generate smart V-Kawach QR codes for 25+ use cases — turn every print touchpoint into a
        trackable, secure engagement channel. Manage everything from one dashboard.
      </HeroSub>
      <QRGenerator />
    </HeroWrap>

    {/* Steps */}
    <StepsSection>
      <StepsTitle>
        <h2>How to Create a QR Code in 3 Steps?</h2>
        <p>Follow 3 simple steps to make a V-Kawach QR Code for your business</p>
      </StepsTitle>

      <StepCard>
        <StepNum><span>Step</span>01</StepNum>
        <StepInfo>
          <h3>Select QR Code Type</h3>
          <p>Select a QR Code type based on your specific use case — Website, Business Card, Fleet Tag, Asset Label, and more.</p>
          <StepVisual>
            <Chip><Globe size={13}/>Website URL</Chip>
            <Chip><MapPin size={13}/>Maps</Chip>
            <Chip><FileText size={13}/>Document</Chip>
            <Chip><Smartphone size={13}/>App</Chip>
          </StepVisual>
        </StepInfo>
      </StepCard>

      <StepCard>
        <StepNum><span>Step</span>02</StepNum>
        <StepInfo>
          <h3>Enter Content</h3>
          <p>Add required content like Website URL, text, contact info, WiFi credentials, and more. Customize the colors to match your brand.</p>
          <StepVisual>
            <Chip><CheckCircle size={13}/>URL / Text / vCard</Chip>
            <Chip><CheckCircle size={13}/>Custom Colors</Chip>
          </StepVisual>
        </StepInfo>
      </StepCard>

      <StepCard>
        <StepNum><span>Step</span>03</StepNum>
        <StepInfo>
          <h3>Check & Download</h3>
          <p>Scan and test your Static QR Code. Download the image as a high-resolution PNG — ready for print or digital use.</p>
          <StepVisual>
            <Chip><Download size={13}/>Download PNG</Chip>
            <Chip><CheckCircle size={13}/>Scan to Test</Chip>
          </StepVisual>
        </StepInfo>
      </StepCard>
    </StepsSection>

    {/* How QR works */}
    <AccSection>
      <SectionTitle>
        <h2>How do QR Codes work <span>their magic?</span></h2>
        <p>Incorporating QR codes into print collateral can streamline operations, enhance customer interaction, and drive growth across industries.</p>
      </SectionTitle>
      <AccWrap>
        <Accordion />
        <AccImg>
          <img src="/cloud_monitoring_hero.jpg" alt="QR in action" />
        </AccImg>
      </AccWrap>
    </AccSection>

    {/* Why B2B */}
    <WhySection>
      <SectionTitle>
        <h2>Why create QR Codes? <span>Big wins, small effort.</span></h2>
        <p>Stop leaving money on the table — make every print collateral work harder for your business.</p>
      </SectionTitle>
      <WhyGrid>
        <WhyRow>
          <WhyText>
            <h3>Turn static print into a sales machine</h3>
            <p>Add V-Kawach QR codes to your print marketing materials to transform static materials into gateways for engagement, registrations, or even sales. Your target audience can scan and immediately access offers, sign-up forms, product demos, or shopping pages, and more.</p>
          </WhyText>
          <WhyVisual>
            <div className="floating-card" style={{top:'20px',right:'20px'}}><TrendingUp size={16}/> +200% Engagement Rate</div>
            <div className="floating-card" style={{bottom:'20px',left:'20px'}}><BarChart3 size={16}/> ₹36,125 Revenue Tracked</div>
            <QrCode size={80} color="rgba(201,168,76,0.3)" />
          </WhyVisual>
        </WhyRow>

        <WhyRow className="reverse">
          <WhyText>
            <h3>Bridge offline to online in one scan</h3>
            <p>QR codes provide the fastest link between offline print collaterals and online content. With a simple scan, users can instantly view product details, videos, menus, brochures, or instructions. This eliminates friction and improves the offline-to-online experience.</p>
          </WhyText>
          <WhyVisual>
            <div className="floating-card" style={{top:'20px',left:'20px'}}><Smartphone size={16}/> Product Details</div>
            <div className="floating-card" style={{bottom:'20px',right:'20px'}}><Globe size={16}/> Product Videos</div>
            <QrCode size={80} color="rgba(201,168,76,0.3)" />
          </WhyVisual>
        </WhyRow>

        <WhyRow>
          <WhyText>
            <h3>Turn scanners into lifelong customers</h3>
            <p>QR codes can do more than just engage — use them to generate leads and nurture ongoing relationships. Enable customers to sign up for newsletters, download apps, or participate in loyalty programs with one scan, so you can keep re-engaging your audience long after the initial campaign is over.</p>
          </WhyText>
          <WhyVisual>
            <div className="floating-card" style={{top:'20px',right:'20px'}}><Users size={16}/> App Downloads</div>
            <div className="floating-card" style={{bottom:'20px',left:'20px'}}><RefreshCw size={16}/> Newsletters</div>
            <QrCode size={80} color="rgba(201,168,76,0.3)" />
          </WhyVisual>
        </WhyRow>
      </WhyGrid>
    </WhySection>

    {/* Use Cases */}
    <UseCasesSection>
      <SectionTitle>
        <h2>V-Kawach B2B <span>Use Cases</span></h2>
        <p>From fleet management to marketing campaigns — one platform, unlimited possibilities.</p>
      </SectionTitle>
      <UseCaseGrid>
        {USE_CASES.map((c, i) => (
          <UseCaseCard key={i}>
            <div className="icon">{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </UseCaseCard>
        ))}
      </UseCaseGrid>
    </UseCasesSection>

    {/* CTA */}
    <CTASection>
      <h2>Ready to unlock the power of <span>Smart QR?</span></h2>
      <p>Join 1000+ Indian businesses using V-Kawach QR codes to protect assets, engage customers, and grow faster.</p>
      <CTABtns>
        <PrimaryBtn to="/contact"><ArrowRight size={16}/> Get a Free Demo</PrimaryBtn>
        <SecBtn href="tel:+919412300716">📞 Call: +91 94123 00716</SecBtn>
      </CTABtns>
    </CTASection>
  </>
  );
};

export default B2BSolutions;
