
"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import api from "@/lib/api";
import { 
  Phone, 
  MapPin, 
  User, 
  AlertTriangle, 
  ShieldCheck, 
  Loader2,
  Globe,
  BellRing,
  Shield,
  Info,
  Car,
  Image as ImageIcon,
  CheckCircle2,
  MessageCircle,
  ParkingCircle,
  Siren,
  ChevronDown,
  Lock,
  Network,
  Camera
} from "lucide-react";
import toast from "react-hot-toast";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface ProductData {
  productCode: string;
  ownerName: string;
  ownerPhoto: string | null;
  customMessage: string | null;
  assetType: string;
  assetModel: string | null;
  assetColor: string | null;
  assetNumber: string | null;
  isLost: boolean;
  address: string | null;
  photos: string | null;
  dynamicData: string | null;
  sponsor: any;
}

const translations = {
  en: {
    verifying: "Verifying Security Protocols...",
    tagDeactivated: "Tag Deactivated",
    tagDeactivatedDesc: "This security tag might be inactive or recently removed by the owner.",
    returnHome: "Return to Hub",
    qrScanVerified: "QR SCAN VERIFIED",
    subtitle: "Smart Vehicle Security Identity",
    features: "Parking • Emergency • Privacy • Protection",
    assetId: "ASSET ID",
    protectedByNetwork: "Protected by Tarkshya Security Network",
    verifiedOwner: "Verified Owner",
    vehicleProtected: "Vehicle Protected",
    contactOwnerTitle: "CONTACT VEHICLE OWNER",
    contactOwnerSub: "Call securely (Number Masked)",
    contactOwnerDesc: "Primary option for Parking & General Contact",
    chatWhatsappTitle: "CHAT ON WHATSAPP",
    chatWhatsappSub: "Chat securely (Number Masked)",
    premium: "PREMIUM",
    parkingAlertTitle: "VEHICLE BLOCKING THE WAY?",
    parkingAlertSub: "Send Parking Alert to Owner",
    emergencyOptions: "EMERGENCY OPTIONS",
    tapExpand: "Tap to expand",
    sosEmergency: "SOS EMERGENCY",
    immediateHelp: "Immediate Help",
    shareLocation: "SHARE ACCIDENT LOCATION",
    shareLocationSub: "Share live location with family contacts",
    police: "POLICE",
    callPolice: "Call Police",
    ambulance: "AMBULANCE",
    callAmbulance: "Call Ambulance",
    familyNotified: "Family will be notified in case of emergency.",
    vehicleDetails: "VEHICLE DETAILS",
    vehicleType: "Vehicle Type",
    regNo: "Registration No.",
    model: "Model",
    color: "Color",
    regState: "Registration State",
    year: "Year",
    privacyText1: "Your personal details are protected.",
    privacyText2: "Owner will see only masked contact details.",
    learnMore: "Learn more",
    footerE2E: "END-TO-END ENCRYPTED",
    footerPrivacy: "PRIVACY PROTECTED",
    footerSecure: "SECURE NETWORK",
    footerManaged: "MANAGED BY TARKSHYA PROTOCOL",
    copyright: "© 2026 V-Kawach | Powered by Tarkshya Solution",
    enterMobile: "Enter your mobile number",
    trustText: "Your number is 100% masked and safe.",
    verifyIdentity: "VERIFY IDENTITY",
    cancel: "CANCEL",
    callRedirecting: "Establishing Secure Bridge...",
  },
  hi: {
    verifying: "सुरक्षा प्रोटोकॉल की जांच हो रही है...",
    tagDeactivated: "Tag सक्रिय नहीं है",
    tagDeactivatedDesc: "यह सुरक्षा टैग सक्रिय नहीं है या मालिक द्वारा हटा दिया गया है।",
    returnHome: "मुख्य पृष्ठ पर जाएं",
    qrScanVerified: "QR स्कैन सत्यापित",
    subtitle: "स्मार्ट वाहन सुरक्षा पहचान",
    features: "पार्किंग • आपातकाल • गोपनीयता • सुरक्षा",
    assetId: "एसेट ID",
    protectedByNetwork: "तार्क्ष्य सुरक्षा नेटवर्क द्वारा सुरक्षित",
    verifiedOwner: "सत्यापित मालिक",
    vehicleProtected: "वाहन सुरक्षित",
    contactOwnerTitle: "मालिक से संपर्क करें",
    contactOwnerSub: "सुरक्षित कॉल करें (नंबर गुप्त)",
    contactOwnerDesc: "पार्किंग और सामान्य संपर्क के लिए प्राथमिक विकल्प",
    chatWhatsappTitle: "व्हाट्सएप पर चैट करें",
    chatWhatsappSub: "सुरक्षित चैट करें (नंबर गुप्त)",
    premium: "प्रीमियम",
    parkingAlertTitle: "वाहन रास्ता रोक रहा है?",
    parkingAlertSub: "मालिक को पार्किंग अलर्ट भेजें",
    emergencyOptions: "आपातकालीन विकल्प",
    tapExpand: "विस्तार के लिए टैप करें",
    sosEmergency: "SOS आपातकाल",
    immediateHelp: "तत्काल सहायता",
    shareLocation: "दुर्घटना का स्थान साझा करें",
    shareLocationSub: "परिवार के संपर्कों के साथ लाइव लोकेशन साझा करें",
    police: "पुलिस",
    callPolice: "पुलिस को बुलाएं",
    ambulance: "एम्बुलेंस",
    callAmbulance: "एम्बुलेंस बुलाएं",
    familyNotified: "आपात स्थिति में परिवार को सूचित किया जाएगा।",
    vehicleDetails: "वाहन का विवरण",
    vehicleType: "वाहन का प्रकार",
    regNo: "पंजीकरण संख्या",
    model: "मॉडल",
    color: "रंग",
    regState: "पंजीकरण राज्य",
    year: "वर्ष",
    privacyText1: "आपका व्यक्तिगत विवरण सुरक्षित है।",
    privacyText2: "मालिक केवल मास्क्ड संपर्क विवरण देखेगा।",
    learnMore: "और जानें",
    footerE2E: "एंड-टू-एंड एन्क्रिप्टेड",
    footerPrivacy: "गोपनीयता सुरक्षित",
    footerSecure: "सुरक्षित नेटवर्क",
    footerManaged: "तार्क्ष्य प्रोटोकॉल द्वारा प्रबंधित",
    copyright: "© 2026 V-Kawach | तार्क्ष्य सॉल्यूशन द्वारा संचालित",
    enterMobile: "अपना मोबाइल नंबर दर्ज करें",
    trustText: "आपका नंबर 100% सुरक्षित और गुप्त है।",
    verifyIdentity: "पहचान सत्यापित करें",
    cancel: "रद्द करें",
    callRedirecting: "सुरक्षित कनेक्शन बन रहा है...",
  }
};

export default function PublicTagPage() {
  const params = useParams();
  const productCode = params?.productCode as string;
  const [lang, setLang] = useState<'en' | 'hi'>('en');
  const [loading, setLoading] = useState(true);
  const [tag, setTag] = useState<ProductData | null>(null);
  
  const [showModal, setShowModal] = useState(false);
  const [modalAction, setModalAction] = useState<'call' | 'whatsapp'>('call');
  const [scannerPhone, setScannerPhone] = useState("");
  const [actionLoading, setActionLoading] = useState(false);
  const [exophone, setExophone] = useState("");
  
  const [emergencyExpanded, setEmergencyExpanded] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const fetchTag = async () => {
      try {
        if (!productCode) return;
        const response = await api.get(`/public/tag/${productCode}`);
        setTag(response.data.tag);
      } catch (error: any) {
        toast.error(error.response?.data?.error || "Tag error");
      } finally {
        setLoading(false);
      }
    };
    fetchTag();
  }, [productCode]);

  const handleActionClick = (action: 'call' | 'whatsapp') => {
    setModalAction(action);
    setShowModal(true);
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[6-9]\d{9}$/.test(scannerPhone)) {
      toast.error("Enter valid 10-digit number");
      return;
    }

    setActionLoading(true);
    const toastId = toast.loading("Processing...");
    try {
      if (modalAction === 'call') {
        const response = await api.post(`/public/tag/${productCode}/call`, { scannerPhone });
        if (response.data.success) {
          setExophone(response.data.exophone);
          toast.success("Connected!", { id: toastId });
          if (response.data.exophone) window.location.href = `tel:${response.data.exophone}`;
          setShowModal(false);
        }
      } else {
        await api.post(`/public/tag/${productCode}/alert`, { scannerPhone });
        toast.success("WhatsApp alert sent to owner!", { id: toastId });
        setShowModal(false);
      }
    } catch (error: any) {
      toast.error("Failed to connect", { id: toastId });
    } finally {
      setActionLoading(false);
    }
  };

  const handleParkingAlert = async () => {
    setActionLoading(true);
    const toastId = toast.loading("Sending Parking Alert...");
    try {
      await api.post(`/public/tag/${productCode}/alert`, { scannerPhone: "Parking Alert" });
      toast.success("Parking Alert sent to owner!", { id: toastId });
    } catch (e) {
      toast.error("Failed to send alert", { id: toastId });
    } finally {
      setActionLoading(false);
    }
  };

  const handleSOS = async () => {
    setActionLoading(true);
    try {
      await api.post(`/public/tag/${productCode}/emergency`);
      toast.success("Emergency contacts notified!");
    } catch (e) {
      toast.error("SOS failed");
    } finally {
      setActionLoading(false);
    }
  };

  const maskNumber = (num: string | null) => {
    if (!num) return "N/A";
    if (num.length < 4) return num;
    return num.slice(0, 4) + "****" + num.slice(-2);
  };

  if (loading) {
     return (
       <div className="min-h-screen bg-navy flex flex-col items-center justify-center p-6">
         <div className="size-12 border-4 border-gold border-t-transparent rounded-full animate-spin mb-4" />
         <p className="text-sm font-bold text-white/70 uppercase tracking-widest">{t.verifying}</p>
       </div>
     );
  }

  if (!tag) {
    return (
      <div className="min-h-screen bg-navy flex flex-col items-center justify-center p-8 text-center">
        <div className="size-20 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mb-6">
          <ShieldCheck size={48} />
        </div>
        <h1 className="text-2xl font-black mb-2 uppercase text-white">{t.tagDeactivated}</h1>
        <p className="text-white/60 mb-8">{t.tagDeactivatedDesc}</p>
        <button onClick={() => window.location.href = 'https://tarkshyasolution.in'} className="bg-brand-orange text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-xs shadow-lg">
          {t.returnHome}
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-bg font-sans relative flex flex-col items-center selection:bg-gold/30">
      
      {/* Hero Section */}
      <div className="w-full max-w-lg min-h-[350px] pb-12 h-auto bg-navy rounded-b-[24px] relative z-10 flex flex-col items-center pt-6 px-4 overflow-hidden">
        
        {/* Background Overlay */}
        <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-bl from-blue-500/10 to-transparent pointer-events-none" />

        <div className="w-full relative z-20 flex flex-col items-center text-center">
          {/* Top Bar */}
          <div className="w-full flex justify-between items-start mb-2">
            <div className="flex flex-col items-start">
               <div className="flex items-center gap-1.5 border border-brand-green/50 bg-navy-dark text-brand-green px-2 py-1 rounded-md shadow-sm">
                 <ShieldCheck size={16} className="fill-brand-green/20" />
                 <div className="flex flex-col items-start text-[8px] leading-[10px] font-[700] tracking-wider">
                   <span>QR SCAN</span>
                   <span className="text-brand-green">VERIFIED</span>
                 </div>
               </div>
            </div>
            
            <div className="flex h-8 items-center justify-center rounded-full bg-white/10 p-1 shadow-sm border border-white/10">
              <label className="flex cursor-pointer h-full items-center justify-center rounded-full px-3 has-[:checked]:bg-white has-[:checked]:text-navy text-white/70 text-[10px] font-bold transition-all uppercase">
                <span>HI</span>
                <input className="hidden" name="lang" type="radio" value="hi" checked={lang === 'hi'} onChange={() => setLang('hi')} />
              </label>
              <label className="flex cursor-pointer h-full items-center justify-center rounded-full px-3 has-[:checked]:bg-white has-[:checked]:text-navy text-white/70 text-[10px] font-bold transition-all uppercase">
                <span>EN</span>
                <input className="hidden" name="lang" type="radio" value="en" checked={lang === 'en'} onChange={() => setLang('en')} />
              </label>
            </div>
          </div>

          {/* Logo and Titles */}
          <img src="/images/new_logo.png" alt="V-Kawach Logo" className="h-16 object-contain drop-shadow-lg mb-1" />
          <h1 className="text-[34px] font-[700] text-white tracking-widest mt-1 uppercase leading-tight">V-KAWACH</h1>
          <h2 className="text-[12px] font-[700] text-gold tracking-[0.4em] mb-4">SECURITY</h2>
          
          <p className="text-white/90 text-[15px] font-[600] mb-1">{t.subtitle}</p>
          <p className="text-white/60 text-[11px] mb-3">{t.features}</p>
          
          <div className="bg-navy-dark/80 border border-white/10 px-4 py-1.5 rounded-full text-white/90 font-mono text-[11px] tracking-widest shadow-inner mb-3">
            {t.assetId}: {tag.productCode}
          </div>
          
          <div className="flex items-center gap-1.5 text-brand-green">
            <CheckCircle2 size={12} />
            <span className="text-[10px] text-white/80">{t.protectedByNetwork}</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full max-w-lg px-[16px] relative z-20 flex flex-col gap-[12px] pb-[20px] -mt-[32px]">
        
        {/* Owner Profile Card */}
        <div className="bg-white rounded-[20px] p-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] flex items-center justify-between">
          <div className="flex items-center gap-4">
             <div className="relative">
               <div className="size-[56px] rounded-full bg-slate-100 flex items-center justify-center text-slate-400 overflow-hidden border border-slate-200">
                  {tag.ownerPhoto ? (
                    <img src={`${API_URL.replace(/\/api$/, '')}${tag.ownerPhoto}`} alt="Owner" className="w-full h-full object-cover" />
                  ) : <User className="size-8" />}
               </div>
               <div className="absolute -bottom-1 -right-1 size-[22px] bg-brand-green border-2 border-white rounded-full flex items-center justify-center">
                 <CheckCircle2 size={12} className="text-white" />
               </div>
             </div>
             <div className="flex flex-col">
               <h3 className="text-navy font-[700] text-[18px] leading-tight uppercase">{tag.ownerName}</h3>
               <div className="flex items-center gap-1.5 mt-1">
                 <CheckCircle2 size={12} className="text-brand-green" />
                 <span className="text-[12px] text-brand-green font-[600]">{t.verifiedOwner}</span>
               </div>
               <div className="flex items-center gap-1.5 mt-0.5">
                 <ShieldCheck size={12} className="text-slate-500" />
                 <span className="text-[12px] text-slate-500 font-medium capitalize">
                   {tag.assetType} {tag.customAssetType ? `- ${tag.customAssetType}` : 'Protected'}
                 </span>
               </div>
             </div>
          </div>
          <div className="flex flex-col items-center">
             <div className="bg-blue-50 p-2 rounded-full border border-blue-100 mb-1">
               <Shield className="size-[24px] text-brand-blue fill-brand-blue/20" />
             </div>
             <span className="text-[9px] font-[700] text-navy text-center leading-[1.1] uppercase w-12">{t.verifiedOwner}</span>
          </div>
        </div>

        {/* Media Gallery */}
        {(tag.photos || tag.videos) && (
          <div className="bg-white rounded-[20px] p-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
            <h4 className="text-navy font-[700] text-[15px] mb-3 flex items-center gap-2">
              <Camera size={18} className="text-brand-green" /> Media Gallery
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {tag.photos && JSON.parse(tag.photos).map((photo: string, i: number) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                  <img src={`${API_URL.replace(/\/api$/, '')}${photo}`} alt="Tag Photo" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            {tag.videos && JSON.parse(tag.videos).length > 0 && (
              <div className="mt-3 space-y-3">
                {JSON.parse(tag.videos).map((video: string, i: number) => (
                  <div key={`vid-${i}`} className="rounded-xl overflow-hidden bg-black aspect-video relative">
                    <video controls src={`${API_URL.replace(/\/api$/, '')}${video}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col gap-[12px]">
          {/* Contact Owner */}
          <button 
            onClick={() => handleActionClick('call')} 
            className="w-full min-h-[80px] py-3 bg-brand-green hover:bg-brand-green-dark text-white rounded-[18px] px-4 flex items-center justify-between transition-colors shadow-sm"
          >
             <div className="flex items-center gap-4">
               <div className="bg-white size-[52px] rounded-full flex items-center justify-center shadow-sm">
                 <Phone size={26} className="fill-brand-green text-brand-green" />
               </div>
               <div className="flex flex-col items-start text-left">
                 <span className="font-[700] text-[16px] leading-tight">{t.contactOwnerTitle}</span>
                 <span className="text-white/90 text-[13px] leading-tight mt-1">{t.contactOwnerSub}</span>
                 <div className="bg-white/20 rounded px-1.5 py-0.5 mt-1">
                   <span className="text-white/90 text-[9px] leading-none uppercase">{t.contactOwnerDesc}</span>
                 </div>
               </div>
             </div>
             <ChevronDown size={24} className="text-white/70 -rotate-90" />
          </button>

          {/* Chat on WhatsApp */}
          <button 
            onClick={() => handleActionClick('whatsapp')} 
            className="w-full min-h-[72px] py-3 bg-brand-green/95 hover:bg-brand-green-dark/95 text-white rounded-[18px] px-4 flex items-center justify-between transition-colors shadow-sm"
          >
             <div className="flex items-center gap-4">
               <div className="bg-white size-[44px] rounded-full flex items-center justify-center shadow-sm">
                 <MessageCircle size={26} className="text-brand-green fill-brand-green" />
               </div>
               <div className="flex flex-col items-start text-left">
                 <span className="font-[700] text-[16px] leading-tight">{t.chatWhatsappTitle}</span>
                 <span className="text-white/90 text-[13px] leading-tight mt-1">{t.chatWhatsappSub}</span>
               </div>
             </div>
             <div className="flex items-center gap-2">
               <span className="bg-gold text-navy text-[9px] font-[700] px-2 py-1 rounded-[6px] flex items-center gap-1 shadow-sm uppercase">
                 <Shield size={10} className="fill-navy" /> {t.premium}
               </span>
               <ChevronDown size={24} className="text-white/70 -rotate-90" />
             </div>
          </button>

          {/* Parking Alert */}
          <button 
            onClick={handleParkingAlert} 
            className="w-full min-h-[72px] py-3 bg-brand-orange hover:bg-brand-orange-dark text-white rounded-[18px] px-4 flex items-center justify-between transition-colors shadow-sm"
          >
             <div className="flex items-center gap-4">
               <div className="bg-white/20 size-[44px] rounded-full flex items-center justify-center">
                 <ParkingCircle size={26} className="fill-white text-brand-orange" />
               </div>
               <div className="flex flex-col items-start text-left">
                 <span className="font-[700] text-[16px] leading-tight">{t.parkingAlertTitle}</span>
                 <span className="text-white/90 text-[13px] leading-tight mt-1">{t.parkingAlertSub}</span>
               </div>
             </div>
             <ChevronDown size={24} className="text-white/70 -rotate-90" />
          </button>
        </div>

        {/* Emergency Options Section */}
        <div className="bg-white rounded-[16px] border border-[#E2E8F0] overflow-hidden mt-[8px]">
           <button 
              onClick={() => setEmergencyExpanded(!emergencyExpanded)} 
              className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-50 transition-colors"
           >
             <div className="flex items-center gap-2">
               <ShieldCheck size={20} className="text-brand-red fill-brand-red/20" />
               <h4 className="font-[700] text-navy text-[15px]">{t.emergencyOptions}</h4>
             </div>
             <div className="flex items-center gap-2">
               <span className="text-[11px] text-slate-500 font-medium">{t.tapExpand}</span>
               <ChevronDown size={16} className={`text-slate-400 transition-transform duration-300 ${emergencyExpanded ? 'rotate-180' : ''}`} />
             </div>
           </button>
           
           {emergencyExpanded && (
             <div className="px-4 pb-4 border-t border-[#E2E8F0] pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
               {/* Row 1: SOS & Share Location */}
               <div className="grid grid-cols-2 gap-[12px] mb-[12px]">
                  <button onClick={handleSOS} className="bg-red-50/50 border border-red-100 rounded-[12px] p-3 flex flex-col justify-center hover:bg-red-50 transition-colors relative min-h-[76px]">
                    <div className="flex items-start gap-2 w-full text-left">
                      <Siren size={24} className="text-brand-red fill-brand-red shrink-0" />
                      <div className="flex flex-col flex-1 pr-4">
                        <span className="font-[700] text-[11px] text-brand-red leading-tight">{t.sosEmergency}</span>
                        <span className="text-[10px] text-slate-500 mt-1 leading-tight">{t.immediateHelp}</span>
                      </div>
                    </div>
                    <ChevronDown size={14} className="text-brand-red -rotate-90 absolute right-3 top-1/2 -translate-y-1/2" />
                  </button>

                  <button className="bg-blue-50/50 border border-blue-100 rounded-[12px] p-3 flex flex-col justify-center hover:bg-blue-50 transition-colors relative min-h-[76px]">
                    <div className="flex items-start gap-2 w-full text-left">
                      <MapPin size={24} className="text-brand-blue fill-brand-blue shrink-0" />
                      <div className="flex flex-col flex-1 pr-4 pb-4">
                        <span className="font-[700] text-[11px] text-brand-blue leading-tight">{t.shareLocation}</span>
                        <span className="text-[9px] text-slate-500 mt-1 leading-tight">{t.shareLocationSub}</span>
                      </div>
                    </div>
                    <ChevronDown size={14} className="text-brand-blue -rotate-90 absolute right-3 top-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-2 left-[38px]">
                      <span className="bg-gold text-navy text-[8px] font-[700] px-1.5 py-0.5 rounded-[4px] flex items-center gap-0.5 uppercase">
                        <Shield size={8} className="fill-navy" /> {t.premium}
                      </span>
                    </div>
                  </button>
               </div>

               {/* Row 2: Police & Ambulance */}
               <div className="grid grid-cols-2 gap-[12px] mb-[12px]">
                  <a href="tel:112" className="bg-white border border-slate-200 rounded-[12px] p-3 flex items-center justify-between hover:bg-slate-50 transition-colors no-underline min-h-[64px]">
                    <div className="flex items-center gap-3 text-left">
                      <div className="size-[36px] bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                         <ShieldCheck size={20} className="text-navy fill-navy/20" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-[700] text-[11px] text-brand-blue">{t.police}</span>
                        <span className="text-[10px] text-slate-500 leading-tight">{t.callPolice}</span>
                        <span className="font-[900] text-[13px] text-navy leading-tight mt-0.5">112</span>
                      </div>
                    </div>
                    <ChevronDown size={14} className="text-slate-400 -rotate-90" />
                  </a>

                  <a href="tel:108" className="bg-white border border-slate-200 rounded-[12px] p-3 flex items-center justify-between hover:bg-slate-50 transition-colors no-underline min-h-[64px]">
                    <div className="flex items-center gap-3 text-left">
                      <div className="size-[36px] bg-red-100 rounded-lg flex items-center justify-center shrink-0">
                         <AlertTriangle size={20} className="text-brand-red fill-brand-red/20" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-[700] text-[11px] text-brand-blue">{t.ambulance}</span>
                        <span className="text-[10px] text-slate-500 leading-tight">{t.callAmbulance}</span>
                        <span className="font-[900] text-[13px] text-navy leading-tight mt-0.5">108</span>
                      </div>
                    </div>
                    <ChevronDown size={14} className="text-slate-400 -rotate-90" />
                  </a>
               </div>

               {/* Row 3: Family Alert */}
               <div className="bg-purple-50 border border-purple-100 rounded-[12px] p-3 flex items-center justify-between min-h-[56px]">
                  <div className="flex items-center gap-3">
                     <div className="size-8 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
                       <Network size={16} className="text-purple-600" />
                     </div>
                     <span className="text-[11px] text-slate-700 font-medium">{t.familyNotified}</span>
                  </div>
                  <span className="bg-navy text-white text-[9px] font-[700] px-2 py-1.5 rounded-[6px] flex items-center gap-1 shadow-sm uppercase shrink-0">
                     <Shield size={10} className="fill-white" /> {t.premium}
                  </span>
               </div>
             </div>
           )}
        </div>

        {/* Vehicle Details */}
        <div className="bg-white rounded-[20px] shadow-sm p-[20px] relative overflow-hidden mt-[8px] border border-slate-100">
           <div className="flex items-center gap-2 mb-4 relative z-10">
             <Car size={18} className="text-navy" />
             <h4 className="font-[700] text-navy text-[15px]">{t.vehicleDetails}</h4>
           </div>
           
           <div className="grid grid-cols-3 gap-y-[16px] gap-x-2 relative z-10">
              <div>
                 <p className="text-[11px] text-slate-500 mb-1">{t.vehicleType}</p>
                 <p className="text-[13px] font-[700] text-navy">{tag.assetType || 'N/A'}</p>
              </div>
              <div className="col-span-2">
                 <p className="text-[11px] text-slate-500 mb-1">{t.regNo}</p>
                 <p className="text-[14px] font-[700] text-navy tracking-widest">{maskNumber(tag.assetNumber || tag.productCode)}</p>
              </div>
              <div>
                 <p className="text-[11px] text-slate-500 mb-1">{t.model}</p>
                 <p className="text-[13px] font-[700] text-navy">{tag.assetModel || 'N/A'}</p>
              </div>
              <div>
                 <p className="text-[11px] text-slate-500 mb-1">{t.color}</p>
                 <p className="text-[13px] font-[700] text-navy">{tag.assetColor || 'N/A'}</p>
              </div>
              <div>
                 <p className="text-[11px] text-slate-500 mb-1">{t.regState}</p>
                 <p className="text-[13px] font-[700] text-navy">N/A</p>
              </div>
              <div>
                 <p className="text-[11px] text-slate-500 mb-1">{t.year}</p>
                 <p className="text-[13px] font-[700] text-navy">N/A</p>
              </div>
           </div>
           
           {/* Faint Car Watermark */}
           <Car className="absolute -bottom-6 -right-6 size-48 text-slate-100/50 -rotate-12 pointer-events-none" />
        </div>

        {/* Privacy Notice */}
        <div className="bg-[#ECFDF5] rounded-[16px] p-4 flex items-start gap-3 mt-[8px] border border-[#A7F3D0]/50">
           <Lock size={20} className="text-brand-green mt-0.5 shrink-0" />
           <div className="flex flex-col flex-1">
             <span className="text-[12px] text-slate-700 font-[600] leading-snug">{t.privacyText1}</span>
             <span className="text-[11px] text-slate-500 mt-0.5 leading-snug">{t.privacyText2}</span>
           </div>
           <a href="#" className="text-[11px] text-brand-blue font-[600] hover:underline mt-0.5 shrink-0">{t.learnMore}</a>
        </div>

        {/* Brand Footer Features */}
        <div className="h-[100px] bg-navy rounded-[24px] mt-[12px] px-2 flex flex-col justify-center">
           <div className="grid grid-cols-4 gap-1">
              <div className="flex flex-col items-center text-center gap-2">
                 <ShieldCheck size={20} className="text-white/60" />
                 <span className="text-[8px] text-white/70 font-[600] uppercase leading-tight">{t.footerE2E}</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                 <Lock size={20} className="text-white/60" />
                 <span className="text-[8px] text-white/70 font-[600] uppercase leading-tight">{t.footerPrivacy}</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                 <Network size={20} className="text-white/60" />
                 <span className="text-[8px] text-white/70 font-[600] uppercase leading-tight">{t.footerSecure}</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                 <Globe size={20} className="text-white/60" />
                 <span className="text-[8px] text-white/70 font-[600] uppercase leading-tight">{t.footerManaged}</span>
              </div>
           </div>
        </div>
        
        {/* Copyright Below Footer */}
        <div className="flex items-center justify-center gap-1.5 pt-[12px] pb-[8px]">
           <ShieldCheck size={12} className="text-slate-400" />
           <span className="text-[10px] text-slate-400 font-medium">{t.copyright}</span>
        </div>

      </div>

      {/* Input Modal for Phone Number */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/80 backdrop-blur-sm p-4">
           <div className="bg-white rounded-3xl w-full max-w-sm p-6 shadow-2xl relative animate-in fade-in zoom-in duration-200">
             <div className="flex flex-col items-center text-center mb-6">
                <div className="size-14 rounded-full flex items-center justify-center mb-3 bg-brand-green/10 text-brand-green">
                  {modalAction === 'call' ? <Phone size={28} className="fill-brand-green" /> : <MessageCircle size={28} className="fill-brand-green" />}
                </div>
                <h3 className="text-[18px] font-[900] text-navy uppercase">{t.verifyIdentity}</h3>
                <p className="text-[12px] text-slate-500 mt-1">{t.enterMobile} to securely {modalAction === 'call' ? 'connect' : 'chat'} with the owner.</p>
             </div>
             
             <form onSubmit={handleModalSubmit}>
                <div className="relative mb-6">
                  <input 
                    type="tel"
                    placeholder="Mobile Number"
                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-[16px] py-4 px-4 text-center font-[700] text-navy focus:outline-none focus:border-navy transition-colors text-[18px] tracking-widest"
                    value={scannerPhone}
                    onChange={(e) => setScannerPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    autoFocus
                  />
                  <div className="flex items-center justify-center gap-1 mt-3">
                    <Lock size={12} className="text-brand-green" />
                    <p className="text-[10px] text-center text-slate-500 font-[700] uppercase">{t.trustText}</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button type="button" onClick={() => setShowModal(false)} className="flex-1 py-4 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-[14px] font-[700] text-[12px] uppercase transition-colors">
                    {t.cancel}
                  </button>
                  <button type="submit" disabled={actionLoading} className="flex-[2] py-4 bg-navy hover:bg-navy-dark text-white rounded-[14px] font-[700] text-[12px] uppercase transition-colors flex items-center justify-center gap-2 shadow-lg">
                    {actionLoading ? <Loader2 size={18} className="animate-spin" /> : <ShieldCheck size={18} />}
                    {t.verifyIdentity}
                  </button>
                </div>
             </form>
           </div>
        </div>
      )}

    </div>
  );
}
