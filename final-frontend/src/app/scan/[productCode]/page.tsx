"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { 
  Shield, Phone, MessageCircle, AlertTriangle, MapPin, ShieldAlert,
  Crosshair, Car, Lock, CheckCircle, Globe, Activity, CircleParking, Megaphone, User, Check
} from "lucide-react";
import api from "@/lib/api";
import toast from "react-hot-toast";
import { dict } from "@/lib/translations";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function ScanPage() {
    const params = useParams();
    const productCode = params?.productCode as string;
    const [product, setProduct] = useState<any>(null);
    const [lang, setLang] = useState('en');
    const t = dict[lang as keyof typeof dict] || dict.en;
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

    const cleanCode = productCode ? productCode.replace(/^(VH-|TS-|PT-|PS-|OT-)\1+/, '$1') : productCode;

    useEffect(() => {
        const verifyProduct = async () => {
            try {
                const response = await api.get(`/public/tag/${cleanCode}`);
                if (response.data?.isDummy) {
                    setIsDummy(true);
                    setProduct(response.data.tag);
                } else {
                    setIsDummy(false);
                    setProduct(response.data?.tag || response.data?.product);
                }
            } catch (err) {
                console.error(err);
                toast.error("Could not fetch tag details");
            } finally {
                setLoading(false);
            }
        };
        verifyProduct();
    }, [productCode]);

    const isPremium = product?.planType?.toLowerCase() === 'premium';

    const handleAction = async (type: string) => {
        try {
            if (type === 'call') {
                if (isPremium) {
                    // Premium: Exotel masked call
                    const res = await api.post(`/public/tag/${productCode}/call`, { scannerPhone: '9999999999' });
                    if (res.data?.success && res.data?.exophone) {
                        window.location.href = `tel:${res.data.exophone}`;
                    } else {
                        toast.error("Could not initiate masked call.");
                    }
                } else {
                    // Basic: direct dial
                    const phone = product?.ownerPhone;
                    if (phone) window.location.href = `tel:${phone}`;
                    else toast.error("Owner phone not available.");
                }
                return;
            }

            if (type === 'whatsapp') {
                if (isPremium) {
                    // Premium: masked WhatsApp via company number
                    const res = await api.post(`/public/tag/${productCode}/whatsapp-session`, { scannerPhone: '9999999999' });
                    let targetPhone = res.data?.companyWhatsapp || res.data?.directPhone;
                    if (targetPhone) {
                        targetPhone = targetPhone.replace('+', '');
                        const msg = `Hi, I scanned your vehicle tag ${productCode}. I wanted to connect with you.`;
                        window.open(`https://wa.me/${targetPhone}?text=${encodeURIComponent(msg)}`, '_blank');
                    } else {
                        toast.error("Could not initiate WhatsApp session.");
                    }
                } else {
                    // Basic: direct WhatsApp
                    const phone = product?.ownerPhone?.replace(/^\+/, '').replace(/^91/, '91') || '';
                    if (phone) {
                        const msg = `Hi, I scanned your vehicle tag ${productCode}.`;
                        window.open(`https://wa.me/91${phone.replace(/^91/, '')}?text=${encodeURIComponent(msg)}`, '_blank');
                    } else {
                        toast.error("Owner not available.");
                    }
                }
                return;
            }

            // Parking / SOS — same for all plans
            let phone = product?.ownerPhone || '';
            let msg = '';
            if (type === 'parking') {
                msg = '🚗 PARKING ALERT! Please move your vehicle. Someone is waiting.';
            } else if (type === 'sos') {
                msg = '🚨 EMERGENCY ALERT! Need immediate assistance at this vehicle.';
            }

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((pos) => {
                    const mapUrl = `https://www.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}`;
                    msg += `\nLocation: ${mapUrl}`;
                    if (phone) window.open(`https://wa.me/91${phone.replace(/^\+91/, '').replace(/^91/, '')}?text=${encodeURIComponent(msg)}`, '_blank');
                }, () => {
                    if (phone) window.open(`https://wa.me/91${phone.replace(/^\+91/, '').replace(/^91/, '')}?text=${encodeURIComponent(msg)}`, '_blank');
                });
            } else {
                if (phone) window.open(`https://wa.me/91${phone.replace(/^\+91/, '').replace(/^91/, '')}?text=${encodeURIComponent(msg)}`, '_blank');
            }
        } catch (err: any) {
            console.error(err);
            toast.error(err.response?.data?.error || "Action failed.");
        }
    };

    let parsedPhotos: string[] = [];
    if (product?.photos) {
        try { parsedPhotos = typeof product.photos === 'string' ? JSON.parse(product.photos) : product.photos; } catch(e) {}
        if (!Array.isArray(parsedPhotos)) parsedPhotos = [];
        // /uploads/ paths are served by nginx on the same domain (tarkshyasolution.in/uploads/)
        // Keep as-is — relative paths resolve correctly same-origin, no CSP issues
    }


    if (loading) return null;

    // ── ACTIVATION FORM (for dummy/unactivated tags) ─────────────────────────
    if (isDummy) {
        const handleActivate = async (e: React.FormEvent) => {
            e.preventDefault();
            if (!activateData.ownerName || !activateData.ownerPhone || !activateData.password) {
                toast.error('Name, Phone and Password are required');
                return;
            }
            if (!/^[6-9]\d{9}$/.test(activateData.ownerPhone)) {
                toast.error('Enter a valid 10-digit Indian mobile number');
                return;
            }
            setActivating(true);
            try {
                const formData = new FormData();
                formData.append('ownerName', activateData.ownerName);
                formData.append('ownerPhone', activateData.ownerPhone);
                formData.append('emergencyContact', activateData.emergencyContact);
                formData.append('password', activateData.password);
                formData.append('assetType', activateData.assetType);
                formData.append('assetNumber', activateData.assetNumber);
                const res = await api.post(`/public/tag/${cleanCode}/activate`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                toast.success('🎉 Tag activated successfully!');
                setIsDummy(false);
                setProduct(res.data.tag);
            } catch (err: any) {
                toast.error(err.response?.data?.error || 'Activation failed. Please try again.');
            } finally {
                setActivating(false);
            }
        };

        return (
            <div className="min-h-screen bg-[#040D1F] font-['Outfit'] pb-10">
                {/* Header */}
                <div className="bg-[#0B1A33] text-white p-5 pb-16 relative overflow-hidden text-center rounded-b-[30px]">
                    <div className="flex justify-between items-center relative z-10 mb-5">
                        <div className="flex items-center gap-2 bg-white/5 border border-white/10 py-1.5 px-3 rounded-xl">
                            <Shield className="text-[#C9A84C]" size={16} />
                            <div className="text-[0.7rem] font-extrabold leading-[1.2] text-left text-white">
                                QR SCAN<br /><span className="block text-[#C9A84C]">UNACTIVATED</span>
                            </div>
                        </div>
                        <div className="flex bg-[#0B1A33] rounded-full p-0.5">
                            <button className={`px-3 py-1.5 text-xs font-extrabold rounded-[18px] transition-colors ${lang === 'hi' ? 'bg-white/10 text-white' : 'text-white bg-transparent'}`} onClick={() => setLang('hi')}>HI</button>
                            <button className={`px-3 py-1.5 text-xs font-extrabold rounded-[18px] transition-colors ${lang === 'en' ? 'bg-white/10 text-white' : 'text-white bg-transparent'}`} onClick={() => setLang('en')}>EN</button>
                        </div>
                    </div>
                    <div className="relative z-10 flex flex-col items-center">
                        <img src="/new_logo.png" alt="Logo" className="h-[60px] mb-4 object-contain" />
                        <h1 className="text-4xl font-black text-white mb-1 tracking-widest">V-KAWACH</h1>
                        <h2 className="text-xl text-[#C9A84C] font-extrabold tracking-[5px] mb-2">SECURITY</h2>
                        <div className="bg-white/5 border border-white/10 inline-block px-5 py-2 rounded-full text-sm font-bold mb-2">
                            ASSET ID: {cleanCode?.toUpperCase()}
                        </div>
                        <div className="flex items-center justify-center gap-1.5 text-xs text-amber-400 font-semibold">
                            <AlertTriangle size={14} /> This tag is not activated yet
                        </div>
                    </div>
                </div>

                {/* Activation Card */}
                <div className="bg-[#0B1A33] rounded-[24px] mx-4 -mt-10 p-5 relative z-20 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-11 h-11 bg-[#C9A84C]/20 rounded-full flex items-center justify-center shrink-0">
                            <Lock size={22} className="text-[#C9A84C]" />
                        </div>
                        <div>
                            <h2 className="text-lg font-black text-white">Activate Your Tag</h2>
                            <p className="text-xs text-gray-400 font-medium">Fill in your details to protect this asset</p>
                        </div>
                    </div>

                    <form onSubmit={handleActivate} className="flex flex-col gap-4">
                        {/* Owner Name */}
                        <div>
                            <label className="text-[0.7rem] font-bold text-[#C9A84C] uppercase tracking-wider mb-1.5 block">Owner Name *</label>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                value={activateData.ownerName}
                                onChange={e => setActivateData(d => ({ ...d, ownerName: e.target.value }))}
                                className="w-full bg-[#040D1F] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 outline-none focus:border-[#C9A84C] transition-colors"
                                required
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="text-[0.7rem] font-bold text-[#C9A84C] uppercase tracking-wider mb-1.5 block">Mobile Number *</label>
                            <input
                                type="tel"
                                placeholder="10-digit mobile number"
                                value={activateData.ownerPhone}
                                onChange={e => setActivateData(d => ({ ...d, ownerPhone: e.target.value.replace(/\D/g, '').slice(0, 10) }))}
                                className="w-full bg-[#040D1F] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 outline-none focus:border-[#C9A84C] transition-colors"
                                required
                            />
                        </div>

                        {/* Emergency Contact */}
                        <div>
                            <label className="text-[0.7rem] font-bold text-[#C9A84C] uppercase tracking-wider mb-1.5 block">Emergency Contact</label>
                            <input
                                type="tel"
                                placeholder="Family / Emergency contact number"
                                value={activateData.emergencyContact}
                                onChange={e => setActivateData(d => ({ ...d, emergencyContact: e.target.value.replace(/\D/g, '').slice(0, 10) }))}
                                className="w-full bg-[#040D1F] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 outline-none focus:border-[#C9A84C] transition-colors"
                            />
                        </div>

                        {/* Asset Type */}
                        <div>
                            <label className="text-[0.7rem] font-bold text-[#C9A84C] uppercase tracking-wider mb-1.5 block">Asset Type</label>
                            <select
                                value={activateData.assetType}
                                onChange={e => setActivateData(d => ({ ...d, assetType: e.target.value }))}
                                className="w-full bg-[#040D1F] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-[#C9A84C] transition-colors appearance-none"
                            >
                                <option value="vehicle">🚗 Vehicle</option>
                                <option value="bike">🏍️ Bike / Scooter</option>
                                <option value="laptop">💻 Laptop</option>
                                <option value="bag">🎒 Bag / Luggage</option>
                                <option value="pet">🐾 Pet</option>
                                <option value="other">📦 Other</option>
                            </select>
                        </div>

                        {/* Asset Number */}
                        <div>
                            <label className="text-[0.7rem] font-bold text-[#C9A84C] uppercase tracking-wider mb-1.5 block">Registration / Serial No.</label>
                            <input
                                type="text"
                                placeholder="e.g. UP32 AB 1234"
                                value={activateData.assetNumber}
                                onChange={e => setActivateData(d => ({ ...d, assetNumber: e.target.value }))}
                                className="w-full bg-[#040D1F] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 outline-none focus:border-[#C9A84C] transition-colors"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="text-[0.7rem] font-bold text-[#C9A84C] uppercase tracking-wider mb-1.5 block">Create Password *</label>
                            <input
                                type="password"
                                placeholder="Create a secure password"
                                value={activateData.password}
                                onChange={e => setActivateData(d => ({ ...d, password: e.target.value }))}
                                className="w-full bg-[#040D1F] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 outline-none focus:border-[#C9A84C] transition-colors"
                                required
                            />
                            <p className="text-[0.65rem] text-gray-500 mt-1 font-medium">Used to log in to your V-Kawach dashboard</p>
                        </div>

                        {/* Privacy notice */}
                        <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/20 rounded-xl p-3 flex gap-2 items-start">
                            <Lock size={14} className="text-[#C9A84C] shrink-0 mt-0.5" />
                            <p className="text-[0.7rem] text-[#C9A84C] font-medium leading-relaxed">
                                Your phone number will be <strong>masked</strong> when someone scans your QR. Only our secure Exotel number will be visible.
                            </p>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={activating}
                            className="w-full bg-gradient-to-r from-[#C9A84C] to-[#e0c068] text-[#040D1F] font-black text-base py-4 rounded-2xl flex items-center justify-center gap-2 shadow-[0_6px_20px_rgba(201,168,76,0.4)] hover:scale-[0.98] transition-transform disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                        >
                            {activating ? (
                                <>
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg>
                                    Activating...
                                </>
                            ) : (
                                <>
                                    <Shield size={18} /> ACTIVATE MY TAG
                                </>
                            )}
                        </button>
                    </form>
                </div>

                {/* Footer */}
                <div className="text-center pt-6 px-5 text-[0.65rem] text-gray-500 font-bold flex items-center justify-center gap-1">
                    <Shield size={12} className="text-white" />
                    © 2024 <span className="text-white">V-Kawach</span> | Powered by Tarkshya Solution
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f0f4f8] font-['Outfit'] pb-10">
            {/* ── TOP DARK HEADER ── */}
            <div className="bg-[#0A1628] text-white pt-3 pb-14 px-4 relative overflow-hidden text-center">
                {/* Background car silhouette */}
                <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 pointer-events-none">
                    <Car className="absolute right-[-20px] top-1/2 -translate-y-1/2 text-blue-300" size={220} />
                </div>
                {/* Shield glow */}
                <div className="absolute left-[-40px] top-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* Top bar */}
                <div className="flex justify-between items-center relative z-10 mb-4">
                    <div className="flex items-center gap-2 bg-white/10 border border-white/20 py-1.5 px-3 rounded-xl">
                        <div className="w-6 h-6 bg-[#C9A84C] rounded flex items-center justify-center">
                            <Shield size={12} className="text-white" />
                        </div>
                        <div className="text-[0.65rem] font-extrabold leading-tight text-left">
                            QR SCAN<br /><span className="text-[#C9A84C]">VERIFIED</span>
                        </div>
                    </div>
                    <div className="flex bg-white/10 rounded-full p-0.5 border border-white/20">
                        <button className={`px-4 py-1.5 text-xs font-extrabold rounded-full transition-all ${lang === 'hi' ? 'bg-transparent text-white/60' : 'text-white/60'}`} onClick={() => setLang('hi')}>HI</button>
                        <button className={`px-4 py-1.5 text-xs font-extrabold rounded-full transition-all ${lang === 'en' ? 'bg-white text-[#0A1628]' : 'text-white/60'}`} onClick={() => setLang('en')}>EN</button>
                    </div>
                </div>

                {/* Logo + Title */}
                <div className="relative z-10 flex flex-col items-center">
                    <img src="/new_logo.png" alt="Logo" className="h-[52px] mb-2 object-contain drop-shadow-[0_0_16px_rgba(201,168,76,0.5)]" />
                    <h1 className="text-[1.9rem] font-black text-white tracking-[6px] leading-none">V-KAWACH</h1>
                    <h2 className="text-sm text-[#C9A84C] font-extrabold tracking-[7px] mt-1 mb-2">SECURITY</h2>
                    <p className="text-[0.7rem] text-white/60 font-semibold mb-2">{t.smartSecurity}</p>
                    <div className="text-[0.65rem] text-white/50 mb-3 flex justify-center gap-1 flex-wrap font-medium">
                        <span>Parking</span> <span className="text-[#C9A84C]">•</span>
                        <span>Emergency</span> <span className="text-[#C9A84C]">•</span>
                        <span>Privacy</span> <span className="text-[#C9A84C]">•</span>
                        <span>Protection</span>
                    </div>
                    <div className="bg-white/10 border border-white/20 inline-block px-5 py-1.5 rounded-full text-xs font-black mb-2 tracking-widest">
                        ASSET ID: {cleanCode?.toUpperCase()}
                    </div>
                    <div className="flex items-center justify-center gap-1 text-[0.65rem] text-[#C9A84C] font-semibold">
                        <CheckCircle size={11} /> {t.protectedBy}
                    </div>
                </div>
            </div>

            {/* ── WHITE MAIN CARD ── */}
            <div className="bg-white rounded-[28px] mx-3 -mt-10 relative z-20 shadow-[0_8px_40px_rgba(0,0,0,0.18)] overflow-hidden animate-[fadeIn_0.4s_ease]">

                {/* ── OWNER PROFILE ── */}
                <div className="flex items-center justify-between p-5 pb-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="w-[56px] h-[56px] bg-gray-100 rounded-full flex items-center justify-center relative overflow-hidden border-2 border-gray-200">
                            {parsedPhotos.length > 0 ? (
                                <img src={parsedPhotos[0]} alt="Owner" className="w-full h-full object-cover" />
                            ) : (
                                <User size={28} className="text-gray-400" />
                            )}
                            <div className="absolute bottom-0 right-0 z-10 bg-green-500 text-white rounded-full p-0.5 border-2 border-white">
                                <Check size={8} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[1.1rem] font-black text-gray-900 uppercase tracking-wide leading-tight">{product?.ownerName || 'Vehicle Owner'}</h3>
                            <div className="flex flex-col gap-0.5 mt-1">
                                <div className="flex items-center gap-1 text-[0.72rem] font-bold text-green-600">
                                    <CheckCircle size={11} /> {t.verifiedOwner}
                                </div>
                                <div className="flex items-center gap-1 text-[0.72rem] font-bold text-gray-500">
                                    <Shield size={11} className="text-blue-500" /> {t.vehicleProtected}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue-50 border border-blue-100 px-3 py-2 rounded-xl flex flex-col items-center gap-1 shrink-0">
                        <Shield size={22} className="text-blue-600" />
                        <span className="text-[0.6rem] font-black text-blue-600 text-center leading-tight uppercase">VERIFIED<br />OWNER</span>
                    </div>
                </div>

                {/* ── ACTION BUTTONS ── */}
                <div className="flex flex-col gap-0 divide-y divide-gray-100">
                    {/* Call */}
                    <button onClick={() => handleAction('call')} className="w-full bg-[#1db954] hover:bg-[#17a349] active:scale-[0.98] transition-all text-white p-4 flex items-center gap-4 text-left">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                            <Phone size={24} className="text-white" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-[0.95rem] font-black uppercase tracking-wide">{t.contactOwnerTitle}</h4>
                            <p className="text-xs text-white/90 font-medium">
                                {isPremium ? t.contactOwnerSub : `Call Owner Directly`}
                            </p>
                            {isPremium ? (
                                <span className="text-[0.6rem] bg-white/20 px-2 py-0.5 rounded-lg inline-block mt-1 font-semibold">{t.primaryOption}</span>
                            ) : (
                                <span className="text-[0.6rem] bg-white/20 px-2 py-0.5 rounded-lg inline-block mt-1 font-semibold">Tap to call</span>
                            )}
                        </div>
                        {isPremium && (
                            <div className="bg-[#C9A84C] text-white text-[0.55rem] font-black px-1.5 py-0.5 rounded flex items-center gap-0.5 shrink-0">
                                <Lock size={7} /> MASKED
                            </div>
                        )}
                        <div className="text-2xl font-bold opacity-70">›</div>
                    </button>

                    {/* WhatsApp */}
                    <button onClick={() => handleAction('whatsapp')} className="w-full bg-[#25D366] hover:bg-[#1fb755] active:scale-[0.98] transition-all text-white p-4 flex items-center gap-4 text-left">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                            <MessageCircle size={24} className="text-white" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-[0.95rem] font-black uppercase tracking-wide">{t.chatWhatsappTitle}</h4>
                            <p className="text-xs text-white/90 font-medium">
                                {isPremium ? t.chatWhatsappSub : 'Chat directly on WhatsApp'}
                            </p>
                        </div>
                        {isPremium ? (
                            <div className="bg-[#C9A84C] text-white text-[0.6rem] font-black px-2 py-1 rounded-lg flex items-center gap-1 shrink-0">
                                <Shield size={9} /> {t.premium}
                            </div>
                        ) : null}
                        <div className="text-2xl font-bold opacity-70">›</div>
                    </button>

                    {/* Parking */}
                    <button onClick={() => handleAction('parking')} className="w-full bg-[#f97316] hover:bg-[#ea6c0e] active:scale-[0.98] transition-all text-white p-4 flex items-center gap-4 text-left">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                            <CircleParking size={24} className="text-white" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-[0.95rem] font-black uppercase tracking-wide">{t.parkingTitle}</h4>
                            <p className="text-xs text-white/90 font-medium">{t.parkingSub}</p>
                        </div>
                        <div className="text-2xl font-bold opacity-70">›</div>
                    </button>
                </div>

                {/* ── EMERGENCY OPTIONS ── */}
                <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <ShieldAlert size={16} className="text-red-500" />
                            <span className="text-sm font-black text-gray-800 uppercase tracking-wide">{t.emergencyOptions}</span>
                        </div>
                        <span className="text-xs text-gray-400 font-semibold">{t.tapToExpand} ▾</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                        {/* SOS */}
                        <div onClick={() => handleAction('sos')} className="bg-red-50 border border-red-100 rounded-2xl p-3.5 cursor-pointer hover:border-red-300 transition-colors">
                            <div className="mb-2 text-red-500"><Megaphone size={28} /></div>
                            <h4 className="text-[0.8rem] font-black text-red-600 uppercase">{t.sosEmergency}</h4>
                            <p className="text-[0.68rem] text-gray-500 font-semibold">{t.immediateHelp}</p>
                            <div className="text-right text-gray-400 mt-1">›</div>
                        </div>

                        {/* Share Location */}
                        <div onClick={() => handleAction('sos')} className="bg-blue-50 border border-blue-100 rounded-2xl p-3.5 cursor-pointer hover:border-blue-300 transition-colors">
                            <div className="mb-2 text-blue-500"><MapPin size={28} /></div>
                            <h4 className="text-[0.8rem] font-black text-blue-700 uppercase">{t.shareLocation}</h4>
                            <p className="text-[0.68rem] text-gray-500 font-semibold leading-tight">{t.shareLocationSub}</p>
                            <div className="bg-[#C9A84C] text-white text-[0.55rem] font-black px-1.5 py-0.5 rounded flex items-center gap-1 inline-flex mt-2">
                                <Shield size={7} /> {t.premium}
                            </div>
                        </div>

                        {/* Police */}
                        <div onClick={() => window.location.href='tel:112'} className="bg-gray-50 border border-gray-200 rounded-2xl p-3.5 cursor-pointer hover:border-gray-300 transition-colors flex items-center justify-between">
                            <div>
                                <div className="mb-1.5 text-[#C9A84C]"><ShieldAlert size={26} /></div>
                                <h4 className="text-[0.78rem] font-black text-gray-800 uppercase">{t.policeTitle}</h4>
                                <p className="text-[0.65rem] text-gray-500 font-semibold">{t.policeSub}</p>
                                <strong className="text-base font-black text-gray-900">112</strong>
                            </div>
                            <div className="text-gray-300 text-xl">›</div>
                        </div>

                        {/* Ambulance */}
                        <div onClick={() => window.location.href='tel:108'} className="bg-gray-50 border border-gray-200 rounded-2xl p-3.5 cursor-pointer hover:border-gray-300 transition-colors flex items-center justify-between">
                            <div>
                                <div className="mb-1.5 text-red-500"><Activity size={26} /></div>
                                <h4 className="text-[0.78rem] font-black text-gray-800 uppercase">{t.ambulanceTitle}</h4>
                                <p className="text-[0.65rem] text-gray-500 font-semibold">{t.ambulanceSub}</p>
                                <strong className="text-base font-black text-gray-900">108</strong>
                            </div>
                            <div className="text-gray-300 text-xl">›</div>
                        </div>
                    </div>

                    {/* Family notification banner */}
                    <div className="bg-purple-50 border border-purple-100 rounded-xl p-3 flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                            <Globe size={15} className="text-purple-500 shrink-0" />
                            <span className="text-[0.72rem] font-semibold text-gray-600">{t.familyNotified}</span>
                        </div>
                        <div className="bg-[#C9A84C] text-white text-[0.58rem] font-black px-2 py-1 rounded-lg flex items-center gap-1 shrink-0">
                            <Shield size={8} /> {t.premium}
                        </div>
                    </div>
                </div>

                {/* ── VEHICLE DETAILS ── */}
                <div className="px-4 pb-4">
                    <div className="flex items-center gap-2 mb-3">
                        <Car size={16} className="text-gray-700" />
                        <h3 className="text-sm font-black text-gray-800 uppercase tracking-wide">{t.vehicleDetails}</h3>
                    </div>

                    <div className="grid grid-cols-3 gap-3 relative">
                        {/* Ghost car watermark */}
                        <div className="absolute right-0 top-0 opacity-[0.04] pointer-events-none">
                            <Car size={160} className="text-gray-900" />
                        </div>

                        {[
                            { label: t.vehicleType, val: product?.vehicleType || 'Car' },
                            { label: t.registrationNo, val: product?.registrationNo ? product.registrationNo.replace(/(.{2}).+(.{2})/, '$1****$2') : 'N/A' },
                            { label: t.model, val: product?.model || 'N/A' },
                            { label: t.color, val: product?.color || 'N/A' },
                            { label: t.registrationState, val: product?.registrationState || 'N/A' },
                            { label: t.year, val: product?.year || 'N/A' },
                        ].map(({ label, val }) => (
                            <div key={label} className="relative z-10">
                                <div className="text-[0.6rem] font-bold text-gray-400 mb-0.5 uppercase">{label}</div>
                                <div className="text-sm font-black text-gray-800">{val}</div>
                            </div>
                        ))}
                    </div>

                    {/* Photos */}
                    {parsedPhotos.length > 1 && (
                        <div className="mt-4">
                            <div className="flex gap-2 overflow-x-auto pb-1 snap-x scrollbar-hide">
                                {parsedPhotos.slice(1).map((url, idx) => (
                                    <div key={idx} className="relative shrink-0 w-28 h-28 rounded-xl overflow-hidden snap-center border border-gray-200 shadow">
                                        <img src={url} alt={`Photo ${idx+2}`} className="w-full h-full object-cover" />
                                        <div className="absolute top-1.5 left-1.5 bg-[#C9A84C] text-white text-[9px] font-black rounded w-5 h-5 flex items-center justify-center shadow">{idx+2}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Privacy Banner */}
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2.5">
                            <Lock size={16} className="text-green-600 shrink-0" />
                            <div>
                                <p className="text-[0.72rem] font-bold text-gray-700">{t.privacyProtected}</p>
                                <p className="text-[0.65rem] text-gray-500 font-medium">{t.ownerWillSee}</p>
                            </div>
                        </div>
                        <span className="text-[0.65rem] text-blue-500 font-bold whitespace-nowrap shrink-0">{t.learnMore}</span>
                    </div>
                </div>

                {/* ── FOOTER BADGES ── */}
                <div className="grid grid-cols-4 bg-[#0A1628] p-4">
                    {[
                        { icon: <Shield size={18} />, label: t.endToEnd, sub: t.encrypted },
                        { icon: <Lock size={18} />, label: t.privacy, sub: t.protected },
                        { icon: <Globe size={18} />, label: t.secure, sub: t.network },
                        { icon: <Activity size={18} />, label: t.managedBy, sub: t.tarkshyaProtocol },
                    ].map(({ icon, label, sub }) => (
                        <div key={label} className="flex flex-col items-center text-center gap-1.5">
                            <div className="text-white/40">{icon}</div>
                            <span className="text-white/50 text-[0.48rem] font-extrabold uppercase leading-tight">{label}<br />{sub}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom footer */}
            <div className="text-center pt-6 pb-4 text-[0.62rem] text-gray-400 font-bold flex items-center justify-center gap-1">
                <Shield size={11} className="text-gray-500" />
                © 2024 <span className="text-gray-600">V-Kawach</span> | Powered by Tarkshya Solution
            </div>
        </div>
    );
}

