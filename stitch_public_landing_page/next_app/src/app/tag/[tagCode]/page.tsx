"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import api from "@/lib/api";
import { 
  Phone, 
  MapPin, 
  User, 
  AlertTriangle, 
  MessageSquare, 
  ShieldCheck, 
  Share2,
  Navigation,
  Loader2,
  ExternalLink,
  RotateCcw,
  Globe,
  BellRing,
  Shield,
  Stethoscope
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import Script from "next/script";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://admin.tarkshyasolution.in';

interface TagData {
  tagCode: string;
  ownerName: string;
  ownerPhoto: string | null;
  customMessage: string | null;
  assetType: string;
  assetModel: string | null;
  assetColor: string | null;
  assetNumber: string | null;
  isLost: boolean;
  address: string | null;
  sponsor: {
    name: string;
    logo: string | null;
    website: string | null;
    description: string | null;
  } | null;
}

const translations = {
  en: {
    verifying: "Verifying Security Protocols...",
    tagDeactivated: "Tag Deactivated",
    tagDeactivatedDesc: "This security tag might be inactive or recently removed by the owner.",
    returnHome: "Return to Hub",
    reportedLost: "Reported Lost - Help Me Home",
    contactOwner: "Contact Owner",
    privacyEnabled: "Privacy Masking Enabled",
    secureRequest: "Secure Connection Request",
    sendAlert: "Send Alert Message",
    verifyingIdentity: "Verify Identity",
    emergencySOS: "Emergency Alert (SOS)",
    helplineTitle: "Direct Helplines",
    police: "Police",
    ambulance: "Ambulance",
    ownersMessage: "Owner's Message",
    securityPerimeter: "Security Perimeter",
    protectedObject: "Protected Asset",
    shareLocation: "Tap to Share Location",
    locationSent: "Location Shared with Admin",
    officialPartner: "Official Branding Partner",
    visitPartner: "Visit Official Partner",
    protectedBy: "Protected by",
    model: "Model",
    color: "Color",
    idNumber: "ID / Number",
    enterMobile: "Enter your mobile number",
    callRedirecting: "Establishing Secure Bridge..."
  },
  hi: {
    verifying: "सुरक्षा प्रोटोकॉल की जांच हो रही है...",
    tagDeactivated: "Tag सक्रिय नहीं है",
    tagDeactivatedDesc: "यह सुरक्षा टैग सक्रिय नहीं है या मालिक द्वारा हटा दिया गया है।",
    returnHome: "मुख्य पृष्ठ पर जाएं",
    reportedLost: "खोया हुआ रिपोर्ट किया गया - मदद करें",
    contactOwner: "मालिक से संपर्क करें",
    privacyEnabled: "गोपनीयता मास्किंग सक्रिय",
    secureRequest: "सुरक्षित कॉल अनुरोध",
    sendAlert: "अलर्ट मैसेज भेजें",
    verifyingIdentity: "पहचान सत्यापित करें",
    emergencySOS: "आपातकालीन अलर्ट (SOS)",
    helplineTitle: "सीधी हेल्पलाइन",
    police: "पुलिस",
    ambulance: "एम्बुलेंस",
    ownersMessage: "मालिक का संदेश",
    securityPerimeter: "सुरक्षा घेरा (पता)",
    protectedObject: "सुरक्षित संपत्ति",
    shareLocation: "लोकेशन साझा करने के लिए टैप करें",
    locationSent: "लोकेशन मालिक को भेज दी गई है",
    officialPartner: "आधिकारिक ब्रांडिंग पार्टनर",
    visitPartner: "पार्टनर वेबसाइट देखें",
    protectedBy: "द्वारा सुरक्षित",
    model: "मॉडल",
    color: "रंग",
    idNumber: "ID / नंबर",
    enterMobile: "अपना मोबाइल नंबर दर्ज करें",
    callRedirecting: "सुरक्षित कनेक्शन बन रहा है..."
  }
};

export default function PublicTagPage() {
  const { tagCode } = useParams();
  const [lang, setLang] = useState<'en' | 'hi'>('hi');
  const [loading, setLoading] = useState(true);
  const [tag, setTag] = useState<TagData | null>(null);
  const [showCallInput, setShowCallInput] = useState(false);
  const [scannerPhone, setScannerPhone] = useState("");
  const [actionLoading, setActionLoading] = useState(false);
  const [locationShared, setLocationShared] = useState(false);
  const [exophone, setExophone] = useState("");

  const t = translations[lang];

  useEffect(() => {
    const fetchTag = async () => {
      try {
        const response = await api.get(`/public/tag/${tagCode}`);
        setTag(response.data.tag);
      } catch (error: any) {
        toast.error(error.response?.data?.error || "Tag error");
      } finally {
        setLoading(false);
      }
    };
    fetchTag();
  }, [tagCode]);

  const handleManualLocationShare = () => {
    if ("geolocation" in navigator) {
      toast.loading("Fetching Location...", { id: 'loc' });
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          await api.post(`/public/tag/${tagCode}/scan`, {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setLocationShared(true);
          toast.success("Location shared securely!", { id: 'loc' });
        } catch (e) {
          toast.error("Share failed", { id: 'loc' });
        }
      }, (err) => {
        toast.error("Permission Denied", { id: 'loc' });
      });
    }
  };

  const handleCallRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[6-9]\d{9}$/.test(scannerPhone)) {
      toast.error("Enter valid 10-digit number");
      return;
    }

    setActionLoading(true);
    const toastId = toast.loading("Connecting...");
    try {
      const response = await api.post(`/public/tag/${tagCode}/call`, { scannerPhone });
      if (response.data.success) {
        setExophone(response.data.exophone);
        toast.success("Connected!", { id: toastId });
        if (response.data.exophone) window.location.href = `tel:${response.data.exophone}`;
      }
    } catch (error: any) {
      toast.error("Failed", { id: toastId });
    } finally {
      setActionLoading(false);
    }
  };

  const handleManualAlert = async () => {
    setActionLoading(true);
    try {
      await api.post(`/public/tag/${tagCode}/alert`, { scannerPhone });
      toast.success("Alert sent to owner via WhatsApp!");
    } catch (e) {
      toast.error("Failed to send alert");
    } finally {
      setActionLoading(false);
    }
  };

  const handleSOS = async () => {
    setActionLoading(true);
    try {
      await api.post(`/public/tag/${tagCode}/emergency`);
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
       <div className="min-h-screen bg-[#050b14] flex items-center justify-center p-6">
         <Loader2 className="w-10 h-10 text-[#c5a059] animate-spin" />
       </div>
     );
  }

  if (!tag) {
    return (
      <div className="min-h-screen bg-[#050b14] flex flex-col items-center justify-center p-8 text-center text-white">
        <ShieldCheck className="w-16 h-16 text-red-500 mb-6" />
        <h1 className="text-2xl font-black mb-2 uppercase">{t.tagDeactivated}</h1>
        <p className="text-slate-400 mb-8">{t.tagDeactivatedDesc}</p>
        <button onClick={() => window.location.href = 'https://tarkshyasolution.in'} className="bg-[#c5a059] text-black px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-xs">
          {t.returnHome}
        </button>
      </div>
    );
  }

  return (
    <>
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <div className="min-h-screen bg-[#050b14] text-white font-sans selection:bg-[#c5a059] pb-20 overflow-x-hidden">
        <Toaster position="top-center" />
        
        {/* Language Toggle */}
        <div className="fixed top-4 right-4 z-50">
          <button 
            onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
            className="bg-[#c5a059] text-black px-4 py-2 rounded-full font-black text-xs flex items-center gap-2 shadow-2xl border border-white/20"
          >
            <Globe className="size-4" />
            {lang === 'en' ? 'हिंदी' : 'English'}
          </button>
        </div>

        {tag.isLost && (
          <div className="bg-red-600 text-white py-3 px-6 flex items-center justify-center gap-3 animate-pulse sticky top-0 z-40">
            <AlertTriangle className="size-5 fill-white text-red-600" />
            <span className="font-black text-xs uppercase tracking-widest">{t.reportedLost}</span>
          </div>
        )}

        {/* Profile Section */}
        <div className="relative h-64 bg-slate-900 overflow-hidden border-b border-[#c5a059]/20">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_50%_120%,rgba(197,160,89,0.3),transparent)]" />
          <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-center translate-y-6">
            <div className="relative group">
               <div className="size-32 bg-white rounded-[2.5rem] p-1.5 shadow-2xl ring-4 ring-[#c5a059]/20 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                 {tag.ownerPhoto ? (
                   <img src={`${API_URL}${tag.ownerPhoto}`} alt={tag.ownerName} className="size-full object-cover rounded-[2.2rem]" />
                 ) : (
                   <div className="size-full bg-slate-100 flex items-center justify-center text-slate-300">
                     <User className="size-16" />
                   </div>
                 )}
               </div>
               <div className="absolute -bottom-2 -right-2 bg-[#c5a059] text-black p-2.5 rounded-2xl shadow-lg ring-4 ring-[#050b14]">
                  <ShieldCheck className="size-5" />
               </div>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto px-6 mt-12 space-y-8">
          
          {/* Asset Details Header */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-black text-white uppercase tracking-tight">{tag.ownerName}</h1>
            <div className="flex flex-wrap justify-center gap-4 py-4 bg-slate-900/50 rounded-3xl border border-[#c5a059]/10 shadow-inner">
               {tag.assetModel && (
                 <div className="px-4 border-r border-slate-800 last:border-none text-center">
                   <p className="text-[10px] text-slate-500 uppercase font-black">{t.model}</p>
                   <p className="text-sm font-bold text-[#c5a059]">{tag.assetModel}</p>
                 </div>
               )}
               {tag.assetColor && (
                 <div className="px-4 border-r border-slate-800 last:border-none text-center">
                   <p className="text-[10px] text-slate-500 uppercase font-black">{t.color}</p>
                   <p className="text-sm font-bold text-[#c5a059]">{tag.assetColor}</p>
                 </div>
               )}
               {(tag.assetNumber || tag.tagCode) && (
                 <div className="px-4 text-center">
                   <p className="text-[10px] text-slate-500 uppercase font-black">{t.idNumber}</p>
                   <p className="text-sm font-bold text-[#c5a059]">{maskNumber(tag.assetNumber || tag.tagCode)}</p>
                 </div>
               )}
            </div>
            <div className="pt-2">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Secure Tag: {tag.tagCode}</span>
            </div>
          </div>

          {/* Actions Section */}
          <div className="space-y-4">
            <div className="bg-slate-900/40 p-6 rounded-[2.5rem] border border-[#c5a059]/10 shadow-2xl space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#c5a059]/10 rounded-2xl text-[#c5a059]">
                   <Phone className="size-6" />
                </div>
                <div>
                   <h3 className="font-black text-white uppercase tracking-tight">{t.contactOwner}</h3>
                   <p className="text-[10px] font-bold text-[#c5a059] uppercase tracking-widest">{t.privacyEnabled}</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {!showCallInput ? (
                  <div className="flex flex-col gap-3">
                    <button onClick={() => setShowCallInput(true)} className="w-full bg-[#c5a059] hover:bg-[#b08e4d] text-black h-16 rounded-[1.5rem] font-black flex items-center justify-center gap-3 shadow-xl transform active:scale-95 transition-all text-sm uppercase">
                      <Phone className="size-5" /> {t.secureRequest}
                    </button>
                    <button onClick={handleManualAlert} disabled={actionLoading} className="w-full bg-slate-800 hover:bg-slate-700 text-white h-14 rounded-[1.2rem] font-black flex items-center justify-center gap-3 border border-slate-700 transition-all text-xs uppercase">
                      <BellRing className="size-4 text-[#c5a059]" /> {t.sendAlert}
                    </button>
                  </div>
                ) : exophone ? (
                  <a href={`tel:${exophone}`} className="w-full bg-emerald-600 text-white h-16 rounded-[1.5rem] font-black flex items-center justify-center gap-3 text-sm uppercase no-underline animate-pulse">
                    <Phone className="size-6" /> {t.callRedirecting}
                  </a>
                ) : (
                  <form onSubmit={handleCallRequest} className="space-y-4">
                    <input 
                      type="tel"
                      placeholder={t.enterMobile}
                      className="w-full h-16 px-6 bg-slate-800/80 border border-[#c5a059]/20 rounded-[1.5rem] font-bold text-center text-white outline-none focus:ring-2 focus:ring-[#c5a059]/50"
                      value={scannerPhone}
                      onChange={(e) => setScannerPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    />
                    <div className="flex gap-2">
                      <button type="submit" className="flex-1 bg-[#c5a059] text-black h-16 rounded-[1.5rem] font-black uppercase text-xs">{t.verifyingIdentity}</button>
                      <button type="button" onClick={() => setShowCallInput(false)} className="w-16 bg-slate-700 text-white h-16 rounded-[1.5rem] flex items-center justify-center"><RotateCcw /></button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            <button onClick={handleSOS} disabled={actionLoading} className="w-full bg-red-950/40 text-red-500 h-16 rounded-[1.5rem] font-black flex items-center justify-center gap-3 border-2 border-red-900/30 hover:bg-red-900/20 uppercase tracking-widest text-xs">
               <AlertTriangle className="size-5 animate-pulse" /> {t.emergencySOS}
            </button>
          </div>

          {/* Helpline Section */}
          <div className="grid grid-cols-2 gap-4">
             <a href="tel:112" className="flex items-center justify-center gap-3 bg-blue-950/20 border border-blue-900/30 h-14 rounded-2xl text-blue-400 font-black text-xs uppercase hover:bg-blue-900/30 transition-all">
                <Shield className="size-4" /> {t.police} (112)
             </a>
             <a href="tel:108" className="flex items-center justify-center gap-3 bg-red-950/20 border border-red-900/30 h-14 rounded-2xl text-red-400 font-black text-xs uppercase hover:bg-red-900/30 transition-all">
                <Stethoscope className="size-4" /> {t.ambulance} (108)
             </a>
          </div>

          {/* Custom Message (Highlighter Style) */}
          {tag.customMessage && (
            <div className="p-6 bg-[#c5a059]/10 rounded-[2.5rem] border-2 border-[#c5a059]/30 relative overflow-hidden">
               <div className="absolute top-0 left-0 w-1 h-full bg-[#c5a059]" />
               <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="size-4 text-[#c5a059]" />
                  <span className="text-[11px] font-black uppercase tracking-widest text-[#c5a059]">{t.ownersMessage}</span>
               </div>
               <p className="text-lg font-bold text-white italic leading-relaxed">"{tag.customMessage}"</p>
            </div>
          )}

          {/* Details and Location */}
          <div className="p-6 bg-slate-900/30 rounded-[2rem] border border-slate-800 space-y-6">
             {tag.address && (
               <div className="flex gap-4">
                 <div className="size-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-500"><MapPin /></div>
                 <div>
                    <label className="text-[10px] font-black uppercase text-slate-500">{t.securityPerimeter}</label>
                    <p className="text-sm font-bold">{tag.address}</p>
                 </div>
               </div>
             )}
             <div className="flex gap-4">
               <div className="size-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-500"><Navigation /></div>
               <div>
                  <label className="text-[10px] font-black uppercase text-slate-500">{t.protectedObject}</label>
                  <p className="text-sm font-bold capitalize">{tag.assetType}</p>
               </div>
             </div>

             <button 
               onClick={handleManualLocationShare}
               disabled={locationShared}
               className={`w-full h-14 rounded-2xl flex items-center justify-center gap-3 font-black text-xs uppercase transition-all ${locationShared ? 'bg-emerald-950/20 text-emerald-500 border border-emerald-900/30' : 'bg-slate-800 text-white border border-slate-700 hover:bg-[#c5a059] hover:text-black hover:border-[#c5a059]'}`}
             >
                <MapPin className={locationShared ? '' : 'animate-bounce'} />
                {locationShared ? t.locationSent : t.shareLocation}
             </button>
          </div>

          {/* Sponsor Section */}
          {tag.sponsor && (
             <div className="pt-12 border-t border-slate-800 space-y-6">
                <div className="flex items-center gap-2">
                   <ShieldCheck className="size-4 text-[#c5a059]" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-[#c5a059]">{t.officialPartner}</span>
                </div>
                <div className="bg-slate-900 rounded-[2.5rem] p-8 border border-[#c5a059]/10 space-y-6 group hover:bg-slate-800 transition-all">
                   <div className="flex items-center justify-between">
                      <h4 className="text-xl font-black uppercase tracking-tighter">{tag.sponsor.name}</h4>
                      {tag.sponsor.logo && (
                         <img 
                            src={`${API_URL}${tag.sponsor.logo}`} 
                            className="h-8 max-w-[120px] object-contain" 
                            onError={(e: any) => {
                              e.target.src = "https://img.icons8.com/ios-filled/100/c5a059/organization.png";
                              e.target.className = "h-8 opacity-30 invert";
                            }}
                          />
                      )}
                   </div>
                   {tag.sponsor.description && <p className="text-sm text-slate-400 leading-relaxed">{tag.sponsor.description}</p>}
                   {tag.sponsor.website && (
                     <a href={tag.sponsor.website.startsWith('http') ? tag.sponsor.website : `https://${tag.sponsor.website}`} target="_blank" className="inline-flex items-center gap-2 bg-[#c5a059] text-black px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-white">{t.visitPartner} <ExternalLink className="size-3" /></a>
                   )}
                </div>
             </div>
          )}

        </div>

        {/* Footer Branding */}
        <div className="mt-20 px-8 text-center space-y-4">
           <div className="flex flex-col items-center gap-1">
              <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">{t.protectedBy}</span>
              <h2 className="text-3xl font-black text-[#c5a059] tracking-widest uppercase italic">V-KAWACH</h2>
           </div>
        </div>

      </div>
    </>
  );
}
