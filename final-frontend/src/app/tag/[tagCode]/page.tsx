"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { 
  Phone, 
  MapPin, 
  User, 
  AlertTriangle, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  CheckCircle2,
  Share2,
  Navigation,
  Loader2,
  Building2,
  ExternalLink
} from "lucide-react";
import toast from "react-hot-toast";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

interface TagData {
  tagCode: string;
  ownerName: string;
  ownerPhoto: string | null;
  customMessage: string | null;
  assetType: string;
  isLost: boolean;
  address: string | null;
  sponsor: {
    name: string;
    logo: string | null;
    website: string | null;
    description: string | null;
  } | null;
}

interface AllSponsors extends Array<{
  name: string;
  logo: string | null;
  website: string | null;
  description: string | null;
}> {}

export default function PublicTagPage() {
  const { tagCode } = useParams();
  const [loading, setLoading] = useState(true);
  const [tag, setTag] = useState<TagData | null>(null);
  const [activeSponsors, setActiveSponsors] = useState<AllSponsors>([]);
  const [showCallInput, setShowCallInput] = useState(false);
  const [scannerPhone, setScannerPhone] = useState("");
  const [actionLoading, setActionLoading] = useState(false);
  const [locationShared, setLocationShared] = useState(false);

  useEffect(() => {
    const fetchTag = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/public/tag/${tagCode}`);
        setTag(response.data.tag);
        setActiveSponsors(response.data.activeSponsors || []);
        
        // Automatically try to share location for the owner
        shareLocationQuietly();
      } catch (error: any) {
        toast.error(error.response?.data?.error || "Tag not found or inactive");
      } finally {
        setLoading(false);
      }
    };
    fetchTag();
  }, [tagCode]);

  const shareLocationQuietly = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          await axios.post(`${API_URL}/api/public/tag/${tagCode}/scan`, {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setLocationShared(true);
        } catch (e) {
          console.error("Silent location share failed");
        }
      }, (err) => {
        console.warn("Location permission denied");
      });
    }
  };

  const handleCallRequest = async () => {
    if (!scannerPhone.match(/^[6-9]\d{9}$/)) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    setActionLoading(true);
    try {
      await axios.post(`${API_URL}/api/public/tag/${tagCode}/call`, { scannerPhone });
      toast.success("Call request sent! You will receive a call connecting you to the owner shortly.", { duration: 6000 });
      setShowCallInput(false);
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Call initiation failed");
    } finally {
      setActionLoading(false);
    }
  };

  const handleEmergencyAlert = async () => {
    setActionLoading(true);
    try {
      await axios.post(`${API_URL}/api/public/tag/${tagCode}/emergency`);
      toast.success("Emergency contacts have been notified via alert!", { duration: 5000 });
    } catch (error: any) {
      toast.error("No emergency contact configured for this tag");
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-10 h-10 text-primary animate-spin" />
          <p className="font-bold text-slate-400 animate-pulse tracking-widest uppercase text-xs">Validating Secure Tag...</p>
        </div>
      </div>
    );
  }

  if (!tag) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-8 text-center">
        <div className="size-20 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-6 ring-8 ring-red-50">
          <ShieldCheck className="w-10 h-10" />
        </div>
        <h1 className="text-2xl font-black text-slate-900 mb-2">Tag Not Found</h1>
        <p className="text-slate-500 max-w-xs mb-8">This tag might be inactive or recently removed by the owner.</p>
        <button 
          onClick={() => window.location.href = '/'}
          className="bg-primary text-white px-8 py-3 rounded-xl font-bold"
        >
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans selection:bg-primary selection:text-white pb-20">
      
      {/* Dynamic Lost Banner */}
      {tag.isLost && (
        <div className="bg-red-600 text-white py-3 px-6 flex items-center justify-center gap-3 animate-pulse">
          <AlertTriangle className="w-5 h-5 fill-white text-red-600" />
          <span className="font-black text-sm uppercase tracking-widest">Reported Lost - Help Me Home</span>
        </div>
      )}

      {/* Header Profile Section */}
      <div className="relative h-64 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(255,102,0,0.4),transparent)]" />
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-center">
          <div className="relative">
             <div className="size-32 bg-white rounded-[2.5rem] p-1.5 shadow-2xl ring-4 ring-white/10 overflow-hidden transform transition-transform hover:scale-105 duration-500">
               {tag.ownerPhoto ? (
                 <img 
                   src={`${API_URL}${tag.ownerPhoto}`} 
                   alt={tag.ownerName} 
                   className="size-full object-cover rounded-[2.2rem]" 
                 />
               ) : (
                 <div className="size-full bg-slate-100 flex items-center justify-center text-slate-300">
                   <User className="size-16" />
                 </div>
               )}
             </div>
             <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-2 rounded-2xl shadow-lg ring-4 ring-white dark:ring-slate-950">
               <ShieldCheck className="size-5" />
             </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-md mx-auto px-6 mt-6 space-y-8">
        
        {/* Name & ID */}
        <div className="text-center space-y-1">
          <h1 className="text-3xl font-black text-slate-900 dark:text-white">{tag.ownerName || "Owner"}</h1>
          <div className="flex items-center justify-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Tag ID: {tag.tagCode}</span>
            <div className="size-1.5 bg-emerald-500 rounded-full" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500">Secure Link</span>
          </div>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-1 gap-4">
          
          {/* Call Logic */}
          {!showCallInput ? (
            <button 
              onClick={() => setShowCallInput(true)}
              className="w-full bg-primary text-white h-16 rounded-[1.5rem] font-bold flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
            >
              <Phone className="size-5 fill-current" />
              Secure Call to Owner
            </button>
          ) : (
            <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-[1.5rem] border-2 border-primary space-y-4 animate-in slide-in-from-top duration-300">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black uppercase text-slate-400">Your Mobile Number</label>
                <div className="relative">
                  <input 
                    type="tel"
                    placeholder="Enter 10-digit mobile"
                    maxLength={10}
                    className="w-full h-12 rounded-xl bg-white dark:bg-slate-800 border-none px-4 font-bold text-lg outline-none focus:ring-2 focus:ring-primary shadow-sm"
                    value={scannerPhone}
                    onChange={(e) => setScannerPhone(e.target.value.replace(/\D/g, ''))}
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={handleCallRequest}
                  disabled={actionLoading}
                  className="flex-1 bg-primary text-white h-12 rounded-xl font-bold flex items-center justify-center gap-2"
                >
                  {actionLoading ? <Loader2 className="size-4 animate-spin" /> : <Zap className="size-4 fill-current" />}
                  Connect Now
                </button>
                <button 
                  onClick={() => setShowCallInput(false)}
                  className="px-4 bg-slate-200 dark:bg-slate-800 rounded-xl font-bold text-slate-600 dark:text-slate-400"
                >
                  Cancel
                </button>
              </div>
              <p className="text-[9px] text-slate-400 leading-tight">
                Privacy Protected: Your number is masked and only used to connect you to the owner via our secure router.
              </p>
            </div>
          )}

          <button 
            onClick={handleEmergencyAlert}
            disabled={actionLoading}
            className="w-full bg-red-50 text-red-600 h-16 rounded-[1.5rem] font-bold flex items-center justify-center gap-3 border-2 border-red-100 hover:bg-red-100 transition-all disabled:opacity-50"
          >
             <AlertTriangle className="size-5" />
             Emergency Alert (SOS)
          </button>
        </div>

        {/* Details Cards */}
        <div className="space-y-4">
          
          {/* Custom Message Card */}
          {tag.customMessage && (
            <div className="p-6 bg-amber-50 dark:bg-amber-950/20 rounded-[2rem] border border-amber-100 dark:border-amber-900/30 relative">
               <div className="absolute -top-3 left-6 bg-amber-100 dark:bg-amber-900 px-3 py-1 rounded-full flex items-center gap-2">
                  <MessageSquare className="size-3 text-amber-600" />
                  <span className="text-[10px] font-black uppercase text-amber-600">Owner's Message</span>
               </div>
               <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed italic">
                  "{tag.customMessage}"
               </p>
            </div>
          )}

          {/* Location/Asset Card */}
          <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-[2rem] border border-slate-100 dark:border-slate-800 space-y-4">
             {tag.address && (
               <div className="flex gap-4">
                 <div className="size-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 border border-slate-100 dark:border-slate-700">
                    <MapPin className="size-5" />
                 </div>
                 <div className="flex-1">
                    <label className="text-[10px] font-black uppercase text-slate-400">Home Base</label>
                    <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{tag.address}</p>
                 </div>
               </div>
             )}
             
             <div className="flex gap-4">
               <div className="size-10 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 border border-slate-100 dark:border-slate-700">
                  <Navigation className="size-5" />
               </div>
               <div className="flex-1">
                  <label className="text-[10px] font-black uppercase text-slate-400">Asset Type</label>
                  <p className="text-sm font-bold text-slate-700 dark:text-slate-200 capitalize">{tag.assetType}</p>
               </div>
             </div>

             <div className="flex items-center gap-2 pt-2">
                <div className={`size-2.5 rounded-full ${locationShared ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`} />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                  {locationShared ? "Live Location Shared with Owner" : "Identifying Location..."}
                </span>
             </div>
          </div>
        </div>

        {/* Sponsor Section (Specific or All Active) */}
        {tag.sponsor ? (
           <div className="pt-12 border-t border-slate-100 dark:border-slate-800 space-y-6">
              <div className="flex items-center gap-2">
                 <ShieldCheck className="size-4 text-primary" />
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Official Branding Partner</span>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800 space-y-6 group transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-1">
                 <div className="flex items-center justify-between">
                    <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">{tag.sponsor.name}</h4>
                    {tag.sponsor.logo && (
                       <img 
                         src={`${API_URL}${tag.sponsor.logo}`} 
                         className="h-8 max-w-[120px] object-contain filter brightness-110" 
                       />
                    )}
                 </div>
                 
                 {tag.sponsor.description && (
                   <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
                      {tag.sponsor.description}
                   </p>
                 )}

                 {tag.sponsor.website && (
                   <a 
                     href={tag.sponsor.website.startsWith('http') ? tag.sponsor.website : `https://${tag.sponsor.website}`} 
                     target="_blank" 
                     className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-colors"
                   >
                      Visit Official Partner <ExternalLink className="size-3" />
                   </a>
                 )}
              </div>
           </div>
        ) : activeSponsors.length > 0 ? (
          <div className="pt-12 border-t border-slate-100 dark:border-slate-800 space-y-6">
              <div className="flex items-center gap-2">
                 <Building2 className="size-4 text-primary" />
                 <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Our Proud Branding Partners</span>
              </div>

              <div className="space-y-4">
                {activeSponsors.map((s, idx) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-900/50 rounded-[2rem] p-6 border border-slate-100 dark:border-slate-800 flex items-center justify-between group hover:border-primary/50 transition-all">
                     <div className="flex-1">
                        <h4 className="font-black text-slate-800 dark:text-white uppercase tracking-tight">{s.name}</h4>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1">{s.description || 'Community Safety Partner'}</p>
                     </div>
                     {s.logo && (
                        <img 
                          src={`${API_URL}${s.logo}`} 
                          className="h-8 w-20 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                        />
                     )}
                  </div>
                ))}
              </div>
          </div>
        ) : null}

      </div>

      {/* Footer Branding */}
      <div className="mt-20 px-8 text-center space-y-4">
         <div className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">Powered By</span>
            <h2 className="text-xl font-black text-slate-900 dark:text-white tracking-widest">V-KAWACH</h2>
         </div>
         <p className="text-[9px] text-slate-400 max-w-[200px] mx-auto uppercase tracking-widest leading-relaxed">
            Smart Emergency Infrastructure by Tarkshya Solution
         </p>
      </div>

      {/* Persistent Help Bubble */}
      <div className="fixed bottom-6 right-6 z-50">
         <button 
           onClick={() => {
             const message = `Hello, I've scanned a V-KAWACH tag (${tag.tagCode}) and need help.`;
             window.open(`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`, '_blank');
           }}
           className="size-14 bg-emerald-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all ring-4 ring-white dark:ring-slate-950"
         >
            <Share2 className="size-6" />
         </button>
      </div>

    </div>
  );
}
