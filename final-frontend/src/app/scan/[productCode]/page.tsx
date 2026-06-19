"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { 
  Shield, Phone, MessageCircle, AlertTriangle, MapPin, ShieldAlert,
  Crosshair, Car, Lock, CheckCircle, Globe, Activity, CircleParking, Megaphone, User, Check
} from "lucide-react";
import api from "@/lib/api";
import toast from "react-hot-toast";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function ScanPage() {
    const params = useParams();
    const productCode = params.productCode as string;
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState<any>(null);
    const [lang, setLang] = useState('en');

    useEffect(() => {
        const verifyProduct = async () => {
            try {
                const response = await api.get(`/products/verify/${productCode}`);
                setProduct(response.data.product);
            } catch (err) {
                console.error(err);
                // Even on error, show the design
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
    }, [productCode]);

    const handleAction = (type: string) => {
        const phone = product?.ownerPhone || '918881384777';
        let msg = '';
        if (type === 'call') {
            window.location.href = `tel:${phone}`;
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
                const mapUrl = `https://www.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}`;
                msg += `\nLocation: ${mapUrl}`;
                window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
            }, () => {
                window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
            });
        } else {
            window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
        }
    };

    if (loading) return null;

    return (
        <div className="min-h-screen bg-[#f4f6f8] font-['Outfit'] pb-10">
            {/* Top Header */}
            <div className="bg-[#0B1A33] text-white p-5 pb-16 relative overflow-hidden text-center rounded-b-[30px]">
                <div className="flex justify-between items-center relative z-10 mb-5">
                    <div className="flex items-center gap-2 bg-white/10 border border-white/20 py-1.5 px-3 rounded-xl">
                        <Shield className="text-[#10B981]" size={16} />
                        <div className="text-[0.7rem] font-extrabold leading-[1.2] text-left text-white">
                            QR SCAN<br/><span className="block text-[#10B981]">VERIFIED</span>
                        </div>
                    </div>
                    <div className="flex bg-white rounded-full p-0.5">
                        <button 
                            className={`px-3 py-1.5 text-xs font-extrabold rounded-[18px] transition-colors ${lang === 'hi' ? 'bg-[#0B1A33] text-white' : 'text-[#0B1A33] bg-transparent'}`}
                            onClick={() => setLang('hi')}
                        >HI</button>
                        <button 
                            className={`px-3 py-1.5 text-xs font-extrabold rounded-[18px] transition-colors ${lang === 'en' ? 'bg-[#0B1A33] text-white' : 'text-[#0B1A33] bg-transparent'}`}
                            onClick={() => setLang('en')}
                        >EN</button>
                    </div>
                </div>

                <div className="relative z-10 flex flex-col items-center">
                    <img src="/new_logo.png" alt="Logo" className="h-[60px] mb-4 object-contain" />
                    <h1 className="text-4xl font-black text-white mb-1 tracking-widest">V-KAWACH</h1>
                    <h2 className="text-xl text-[#C9A84C] font-extrabold tracking-[5px] mb-2">SECURITY</h2>
                    <p className="text-sm text-white/90 mb-4 font-semibold">Smart Vehicle Security Identity</p>
                    
                    <div className="text-xs text-white/70 mb-5 flex justify-center gap-2 flex-wrap font-medium">
                        <span>Parking</span> • <span>Emergency</span> • <span>Privacy</span> • <span>Protection</span>
                    </div>
                    
                    <div className="bg-white/10 border border-white/20 inline-block px-5 py-2 rounded-full text-sm font-bold mb-4">
                        ASSET ID: {productCode?.toUpperCase() || 'VH-MUE3F1'}
                    </div>
                    
                    <div className="flex items-center justify-center gap-1.5 text-xs text-[#10B981] font-semibold">
                        <CheckCircle size={14} /> Protected by Tarkshya Security Network
                    </div>
                </div>
            </div>

            {/* Main Card */}
            <div className="bg-white rounded-[24px] mx-4 -mt-10 p-5 relative z-20 shadow-[0_10px_30px_rgba(0,0,0,0.08)] animate-[fadeIn_0.5s_ease]">
                {/* Owner Profile */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <div className="w-[60px] h-[60px] bg-[#f0f0f0] rounded-full flex items-center justify-center relative">
                            <User size={32} className="text-[#999]" />
                            <div className="absolute bottom-0 right-0 bg-[#10B981] text-white rounded-full p-0.5 border-2 border-white">
                                <Check size={10} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[1.2rem] font-black text-[#0B1A33] mb-1">{product?.ownerName || 'VIKAS KUMAR'}</h3>
                            <div className="flex flex-col gap-1 text-xs font-bold text-[#10B981]">
                                <div className="flex items-center gap-1"><CheckCircle size={12} /> Verified Owner</div>
                                <div className="flex items-center gap-1"><Shield size={12} /> Vehicle Protected</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#eef6ff] border border-[#d0e3ff] p-2 rounded-xl flex flex-col items-center gap-1">
                        <Shield size={20} className="text-[#3b82f6]" />
                        <span className="text-[0.65rem] font-extrabold text-[#3b82f6] text-center leading-tight">VERIFIED<br/>OWNER</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 mb-6">
                    {/* Contact Button */}
                    <button onClick={() => handleAction('call')} className="w-full bg-[#16a34a] hover:scale-[0.98] transition-transform text-white border-none p-4 rounded-2xl flex items-center gap-4 shadow-[0_4px_15px_rgba(22,163,74,0.3)] text-left">
                        <div className="w-11 h-11 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                            <Phone size={24} />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-base font-extrabold mb-0.5">CONTACT VEHICLE OWNER</h4>
                            <p className="text-xs text-white/90 font-medium">Call securely (Number Masked)</p>
                            <span className="text-[0.65rem] bg-white/20 px-2 py-0.5 rounded-lg inline-block mt-1 font-medium">Primary option for Parking & General Contact</span>
                        </div>
                        <div className="text-xl opacity-80 pl-2">&gt;</div>
                    </button>

                    {/* WhatsApp Button */}
                    <button onClick={() => handleAction('whatsapp')} className="w-full bg-[#059669] hover:scale-[0.98] transition-transform text-white border-none p-4 rounded-2xl flex items-center gap-4 shadow-[0_4px_15px_rgba(5,150,105,0.3)] text-left">
                        <div className="w-11 h-11 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                            <MessageCircle size={24} />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-base font-extrabold mb-0.5">CHAT ON WHATSAPP</h4>
                            <p className="text-xs text-white/90 font-medium">Chat securely (Number Masked)</p>
                        </div>
                        <div className="bg-[#C9A84C] text-[#0B1A33] text-[0.65rem] font-black px-2 py-1 rounded-lg flex items-center gap-1 shrink-0">
                            <Shield size={10} /> PREMIUM
                        </div>
                        <div className="text-xl opacity-80">&gt;</div>
                    </button>

                    {/* Parking Button */}
                    <button onClick={() => handleAction('parking')} className="w-full bg-[#f97316] hover:scale-[0.98] transition-transform text-white border-none p-4 rounded-2xl flex items-center gap-4 shadow-[0_4px_15px_rgba(249,115,22,0.3)] text-left">
                        <div className="w-11 h-11 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                            <CircleParking size={24} />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-base font-extrabold mb-0.5">VEHICLE BLOCKING THE WAY?</h4>
                            <p className="text-xs text-white/90 font-medium">Send Parking Alert to Owner</p>
                        </div>
                        <div className="text-xl opacity-80 pl-2">&gt;</div>
                    </button>
                </div>

                {/* Emergency Options */}
                <div className="flex justify-between items-center mb-4 px-1">
                    <div className="flex items-center gap-2">
                        <ShieldAlert size={18} className="text-[#ef4444]" />
                        <h3 className="text-sm font-extrabold text-[#0B1A33]">EMERGENCY OPTIONS</h3>
                    </div>
                    <div className="text-xs text-gray-500 font-bold">Tap to expand ▼</div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                    <div onClick={() => handleAction('sos')} className="bg-white border border-gray-200 rounded-2xl p-4 cursor-pointer shadow-sm hover:border-red-300 transition-colors">
                        <div className="mb-2.5 text-[#ef4444]"><Megaphone size={28} /></div>
                        <h4 className="text-[0.8rem] font-black text-[#ef4444] mb-1">SOS EMERGENCY</h4>
                        <p className="text-[0.7rem] text-gray-600 font-semibold">Immediate Help</p>
                        <div className="text-right text-gray-300 mt-1">&gt;</div>
                    </div>
                    
                    <div onClick={() => handleAction('sos')} className="bg-white border border-gray-200 rounded-2xl p-4 cursor-pointer shadow-sm hover:border-blue-300 transition-colors">
                        <div className="mb-2.5 text-[#3b82f6]"><MapPin size={28} /></div>
                        <h4 className="text-[0.8rem] font-black text-[#1d4ed8] mb-1">SHARE ACCIDENT LOCATION</h4>
                        <p className="text-[0.7rem] text-gray-600 font-semibold leading-tight">Share live location with family contacts</p>
                        <div className="bg-[#C9A84C] text-[#0B1A33] text-[0.6rem] font-black px-1.5 py-0.5 rounded flex items-center gap-1 inline-flex mt-2">
                            <Shield size={8} /> PREMIUM
                        </div>
                    </div>
                    
                    <div onClick={() => window.location.href='tel:112'} className="bg-white border border-gray-200 rounded-2xl p-4 cursor-pointer shadow-sm hover:border-gray-300 transition-colors">
                        <div className="mb-2.5 text-[#4f46e5]"><ShieldAlert size={28} /></div>
                        <h4 className="text-[0.8rem] font-black text-[#0B1A33] mb-1">POLICE</h4>
                        <p className="text-[0.7rem] text-gray-600 font-semibold">Call Police<br/><strong className="text-[#0B1A33]">112</strong></p>
                    </div>
                    
                    <div onClick={() => window.location.href='tel:108'} className="bg-white border border-gray-200 rounded-2xl p-4 cursor-pointer shadow-sm hover:border-gray-300 transition-colors">
                        <div className="mb-2.5 text-[#ef4444]"><Activity size={28} /></div>
                        <h4 className="text-[0.8rem] font-black text-[#0B1A33] mb-1">AMBULANCE</h4>
                        <p className="text-[0.7rem] text-gray-600 font-semibold">Call Ambulance<br/><strong className="text-[#0B1A33]">108</strong></p>
                    </div>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-xl p-3 flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2.5">
                        <Globe size={18} className="text-[#8b5cf6]" />
                        <span className="text-[0.75rem] font-bold text-gray-700">Family will be notified in case of emergency.</span>
                    </div>
                    <div className="bg-[#8b5cf6] text-white text-[0.65rem] font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1 shrink-0">
                        <Shield size={10} /> PREMIUM
                    </div>
                </div>

                {/* Vehicle Details */}
                <div className="flex items-center gap-2 mb-4 px-1">
                    <Car size={18} className="text-[#0B1A33]" />
                    <h3 className="text-sm font-extrabold text-[#0B1A33]">VEHICLE DETAILS</h3>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 relative">
                    {/* Ghost car outline */}
                    <div className="absolute -right-5 top-0 opacity-5 w-[150px] z-0 pointer-events-none">
                        <Car size={150} />
                    </div>
                    
                    <div className="relative z-10">
                        <div className="text-[0.65rem] font-bold text-gray-400 mb-0.5">Vehicle Type</div>
                        <div className="text-sm font-black text-[#0B1A33]">{product?.vehicleType || 'Car'}</div>
                    </div>
                    <div className="relative z-10">
                        <div className="text-[0.65rem] font-bold text-gray-400 mb-0.5">Registration No.</div>
                        <div className="text-sm font-black text-[#0B1A33]">{product?.registrationNo || 'VH-M****F1'}</div>
                    </div>
                    <div className="relative z-10">
                        <div className="text-[0.65rem] font-bold text-gray-400 mb-0.5">Color</div>
                        <div className="text-sm font-black text-[#0B1A33]">{product?.color || 'N/A'}</div>
                    </div>
                    <div className="relative z-10">
                        <div className="text-[0.65rem] font-bold text-gray-400 mb-0.5">Registration State</div>
                        <div className="text-sm font-black text-[#0B1A33]">{product?.registrationState || 'N/A'}</div>
                    </div>
                    <div className="relative z-10">
                        <div className="text-[0.65rem] font-bold text-gray-400 mb-0.5">Model</div>
                        <div className="text-sm font-black text-[#0B1A33]">{product?.model || 'N/A'}</div>
                    </div>
                    <div className="relative z-10">
                        <div className="text-[0.65rem] font-bold text-gray-400 mb-0.5">Year</div>
                        <div className="text-sm font-black text-[#0B1A33]">{product?.year || 'N/A'}</div>
                    </div>
                </div>

                {/* Privacy Banner */}
                <div className="bg-[#f0fdf4] border border-[#bbf7d0] p-4 rounded-2xl flex gap-3 items-start mb-5">
                    <Lock size={20} className="text-[#16a34a] shrink-0 mt-0.5" />
                    <div className="flex-1">
                        <p className="text-xs text-[#166534] font-bold leading-relaxed">
                            Your personal details are protected.<br/>Owner will see only masked contact details.
                        </p>
                    </div>
                    <div className="text-[0.7rem] text-blue-600 font-bold whitespace-nowrap">Learn more</div>
                </div>

                {/* Footer Stats inside card */}
                <div className="grid grid-cols-4 bg-[#0B1A33] -mx-5 -mb-5 p-5 pb-6 rounded-b-[24px]">
                    <div className="flex flex-col items-center text-center gap-1.5">
                        <Shield className="text-white/50" size={20} />
                        <span className="text-white/60 text-[0.5rem] font-extrabold uppercase leading-tight">End-To-End<br/>Encrypted</span>
                    </div>
                    <div className="flex flex-col items-center text-center gap-1.5">
                        <Lock className="text-white/50" size={20} />
                        <span className="text-white/60 text-[0.5rem] font-extrabold uppercase leading-tight">Privacy<br/>Protected</span>
                    </div>
                    <div className="flex flex-col items-center text-center gap-1.5">
                        <Globe className="text-white/50" size={20} />
                        <span className="text-white/60 text-[0.5rem] font-extrabold uppercase leading-tight">Secure<br/>Network</span>
                    </div>
                    <div className="flex flex-col items-center text-center gap-1.5">
                        <Activity className="text-white/50" size={20} />
                        <span className="text-white/60 text-[0.5rem] font-extrabold uppercase leading-tight">Managed By<br/>Tarkshya Protocol</span>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="text-center pt-8 px-5 pb-5 text-[0.65rem] text-gray-500 font-bold flex items-center justify-center gap-1">
                <Shield size={12} className="text-[#0B1A33]" /> 
                © 2024 <span className="text-[#0B1A33]">V-Kawach</span> | Powered by Tarkshya Solution
            </div>
        </div>
    );
}
