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
    const tagCode = params.tagCode as string;
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState<any>(null);
    const [lang, setLang] = useState('en');
    const t = dict[lang as keyof typeof dict] || dict.en;

    useEffect(() => {
        const verifyProduct = async () => {
            try {
                const response = await api.get(`/public/tag/${tagCode}`);
                if (response.data.isDummy) {
                    window.location.href = `/tag/${tagCode}/activate`;
                    return;
                }
                setProduct(response.data.tag || response.data.product);
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
    }, [tagCode]);

    const handleAction = async (type: string) => {
        try {
            if (type === 'call') {
                const res = await api.post(`/public/tag/${tagCode}/call`, { scannerPhone: '9999999999' });
                if (res.data?.success && res.data?.exophone) {
                    window.location.href = `tel:${res.data.exophone}`;
                } else {
                    toast.error("Could not initiate masked call.");
                }
                return;
            } else if (type === 'whatsapp') {
                const res = await api.post(`/public/tag/${tagCode}/whatsapp-session`, { scannerPhone: '9999999999' });
                let targetPhone = res.data?.companyWhatsapp || res.data?.directPhone;
                if (targetPhone) {
                    targetPhone = targetPhone.replace('+', '');
                    let msg = `Hi, I scanned tag ${tagCode}.`;
                    window.location.href = `https://wa.me/${targetPhone}?text=${encodeURIComponent(msg)}`;
                } else {
                    toast.error("Could not initiate WhatsApp session.");
                }
                return;
            }
            
            let phone = product?.ownerPhone || '';
            let msg = '';
            if (type === 'parking') {
                msg = '🚗 PARKING ALERT! Please move your vehicle. Someone is waiting.';
            } else if (type === 'sos') {
                msg = '🚨 EMERGENCY ALERT! Vehicle has met with an accident.';
            }

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((pos) => {
                    const mapUrl = `https://www.google.com/maps?q=${pos.coords.latitude},${pos.coords.longitude}`;
                    msg += `\nLocation: ${mapUrl}`;
                    if (phone) window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
                }, () => {
                    if (phone) window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
                });
            } else {
                if (phone) window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
            }
        } catch (err: any) {
            console.error(err);
            toast.error(err.response?.data?.error || "Action failed.");
        }
    };

    if (loading) return null;

    return (
        <div className="min-h-screen bg-[#040D1F] font-['Outfit'] pb-10">
            {/* Top Header */}
            <div className="bg-[#0B1A33] text-white p-5 pb-8 relative overflow-hidden text-center rounded-b-[30px]">
                <div className="flex justify-between items-center relative z-10 mb-2">
                    <div className="flex items-center gap-2 bg-[#0B1A33]/10 border border-[#0B1A33]/20 py-1.5 px-3 rounded-xl">
                        <Shield className="text-[#C9A84C]" size={16} />
                        <div className="text-[0.7rem] font-extrabold leading-[1.2] text-left text-white">
                            {t.scanVerified}<br/><span className="block text-[#C9A84C]">{t.verified}</span>
                        </div>
                    </div>
                    <div className="flex bg-[#0B1A33] rounded-full p-0.5">
                        <button 
                            className={`px-3 py-1.5 text-xs font-extrabold rounded-[18px] transition-colors ${lang === 'hi' ? 'bg-[#0B1A33] text-white' : 'text-white bg-transparent'}`}
                            onClick={() => setLang('hi')}
                        >HI</button>
                        <button 
                            className={`px-3 py-1.5 text-xs font-extrabold rounded-[18px] transition-colors ${lang === 'en' ? 'bg-[#0B1A33] text-white' : 'text-white bg-transparent'}`}
                            onClick={() => setLang('en')}
                        >EN</button>
                    </div>
                </div>

                <div className="relative z-10 flex flex-col items-center">
                    <img src="/new_logo.png" alt="Logo" className="h-[40px] mb-2 object-contain" />
                    <h1 className="text-3xl font-black text-white mb-1 tracking-widest">V-KAWACH</h1>
                    <h2 className="text-lg text-[#C9A84C] font-extrabold tracking-[4px] mb-1">SECURITY</h2>
                    
                    <div className="text-[10px] text-white/70 mb-3 flex justify-center gap-2 flex-wrap font-medium">
                        <span>{t.badges.split(" • ")[0]}</span> • <span>{t.badges.split(" • ")[1]}</span> • <span>{t.badges.split(" • ")[2]}</span> • <span>{t.badges.split(" • ")[3]}</span>
                    </div>
                    
                    <div className="bg-[#0B1A33]/10 border border-[#0B1A33]/20 inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-2">
                        {t.assetId}: {tagCode?.toUpperCase() || 'VH-MUE3F1'}
                    </div>
                    
                    <div className="flex items-center justify-center gap-1.5 text-xs text-[#C9A84C] font-semibold">
                        <CheckCircle size={14} /> {t.protectedBy}
                    </div>
                </div>
            </div>

            {/* Main Card */}
            <div className="bg-[#0B1A33] rounded-[24px] mx-4 -mt-6 p-4 relative z-20 shadow-[0_10px_30px_rgba(0,0,0,0.08)] animate-[fadeIn_0.5s_ease]">
                {/* Owner Profile */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-[50px] h-[50px] bg-white/5 rounded-full flex items-center justify-center relative">
                            {product?.ownerPhoto ? (
                                <img src={`${API_URL}${product.ownerPhoto}`} alt="Owner" className="w-full h-full rounded-full object-cover" />
                            ) : (
                                <User size={24} className="text-[#999]" />
                            )}
                            <div className="absolute bottom-0 right-0 bg-[#C9A84C] text-white rounded-full p-0.5 border-2 border-[#0B1A33]">
                                <Check size={8} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-[1.2rem] font-black text-white mb-1">{product?.ownerName || 'VIKAS KUMAR'}</h3>
                            <div className="flex flex-col gap-1 text-xs font-bold text-[#C9A84C]">
                                <div className="flex items-center gap-1"><CheckCircle size={12} /> {t.verifiedOwner}</div>
                                <div className="flex items-center gap-1"><Shield size={12} /> {t.vehicleProtected}</div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white/5 border border-[#0B1A33]/10 p-2 rounded-xl flex flex-col items-center gap-1">
                        <Shield size={20} className="text-blue-400" />
                        <span className="text-[0.65rem] font-extrabold text-blue-400 text-center leading-tight">{t.verifiedOwner.split(" ")[0]}<br/>{t.verifiedOwner.split(" ").slice(1).join(" ")}</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3 mb-6">
                    {/* Contact Button */}
                    <button onClick={() => handleAction('call')} className="w-full bg-[#112240] hover:scale-[0.98] transition-transform text-white border-none p-4 rounded-2xl flex items-center gap-4 border border-[#203659] text-left">
                        <div className="w-11 h-11 bg-[#0B1A33]/20 rounded-full flex items-center justify-center shrink-0">
                            <Phone size={24} />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-base font-extrabold mb-0.5">{t.contactOwnerTitle}</h4>
                            <p className="text-xs text-white/90 font-medium">{t.contactOwnerSub}</p>
                            <span className="text-[0.65rem] bg-[#0B1A33]/20 px-2 py-0.5 rounded-lg inline-block mt-1 font-medium">{t.primaryOption}</span>
                        </div>
                        <div className="text-xl opacity-80 pl-2">&gt;</div>
                    </button>

                    {/* WhatsApp Button */}
                    <button onClick={() => handleAction('whatsapp')} className="w-full bg-[#059669] hover:scale-[0.98] transition-transform text-white border-none p-4 rounded-2xl flex items-center gap-4 shadow-[0_4px_15px_rgba(5,150,105,0.3)] text-left">
                        <div className="w-11 h-11 bg-[#0B1A33]/20 rounded-full flex items-center justify-center shrink-0">
                            <MessageCircle size={24} />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-base font-extrabold mb-0.5">{t.chatWhatsappTitle}</h4>
                            <p className="text-xs text-white/90 font-medium">{t.chatWhatsappSub}</p>
                        </div>
                        <div className="bg-[#C9A84C] text-white text-[0.65rem] font-black px-2 py-1 rounded-lg flex items-center gap-1 shrink-0">
                            <Shield size={10} /> {t.premium}
                        </div>
                        <div className="text-xl opacity-80">&gt;</div>
                    </button>

                    {/* Parking Button (Hide for Business) */}
                    {product?.assetType !== 'business' && (
                        <button onClick={() => handleAction('parking')} className="w-full bg-[#112240] hover:scale-[0.98] transition-transform text-white border-none p-4 rounded-2xl flex items-center gap-4 border border-[#203659] text-left">
                            <div className="w-11 h-11 bg-[#0B1A33]/20 rounded-full flex items-center justify-center shrink-0">
                                <CircleParking size={24} />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-base font-extrabold mb-0.5">{t.parkingTitle}</h4>
                                <p className="text-xs text-white/90 font-medium">{t.parkingSub}</p>
                            </div>
                            <div className="text-xl opacity-80 pl-2">&gt;</div>
                        </button>
                    )}
                </div>

                {product?.assetType !== 'business' && (
                    <>
                        {/* Emergency Options */}
                        <div className="flex justify-between items-center mb-4 px-1">
                            <div className="flex items-center gap-2">
                                <ShieldAlert size={18} className="text-[#ef4444]" />
                                <h3 className="text-sm font-extrabold text-white">{t.emergencyOptions}</h3>
                            </div>
                            <div className="text-xs text-gray-400 font-bold">{t.tapToExpand}</div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-4">
                            <div onClick={() => handleAction('sos')} className="bg-[#0B1A33] border border-[#0B1A33]/10 rounded-2xl p-4 cursor-pointer shadow-sm hover:border-red-300 transition-colors">
                                <div className="mb-2.5 text-[#ef4444]"><Megaphone size={28} /></div>
                                <h4 className="text-[0.8rem] font-black text-[#ef4444] mb-1">{t.sosEmergency}</h4>
                                <p className="text-[0.7rem] text-gray-300 font-semibold">{t.immediateHelp}</p>
                                <div className="text-right text-gray-300 mt-1">&gt;</div>
                            </div>
                            
                            <div onClick={() => handleAction('sos')} className="bg-[#0B1A33] border border-[#0B1A33]/10 rounded-2xl p-4 cursor-pointer shadow-sm hover:border-blue-300 transition-colors">
                                <div className="mb-2.5 text-blue-400"><MapPin size={28} /></div>
                                <h4 className="text-[0.8rem] font-black text-[#1d4ed8] mb-1">{t.shareLocation}</h4>
                                <p className="text-[0.7rem] text-gray-300 font-semibold leading-tight">{t.shareLocationSub}</p>
                                <div className="bg-[#C9A84C] text-white text-[0.6rem] font-black px-1.5 py-0.5 rounded flex items-center gap-1 inline-flex mt-2">
                                    <Shield size={8} /> {t.premium}
                                </div>
                            </div>
                            
                            <div onClick={() => window.location.href='tel:112'} className="bg-[#0B1A33] border border-[#0B1A33]/10 rounded-2xl p-4 cursor-pointer shadow-sm hover:border-gray-300 transition-colors">
                                <div className="mb-2.5 text-[#C9A84C]"><ShieldAlert size={28} /></div>
                                <h4 className="text-[0.8rem] font-black text-white mb-1">{t.policeTitle}</h4>
                                <p className="text-[0.7rem] text-gray-300 font-semibold">{t.policeSub}<br/><strong className="text-white">112</strong></p>
                            </div>
                            
                            <div onClick={() => window.location.href='tel:108'} className="bg-[#0B1A33] border border-[#0B1A33]/10 rounded-2xl p-4 cursor-pointer shadow-sm hover:border-gray-300 transition-colors">
                                <div className="mb-2.5 text-[#ef4444]"><Activity size={28} /></div>
                                <h4 className="text-[0.8rem] font-black text-white mb-1">{t.ambulanceTitle}</h4>
                                <p className="text-[0.7rem] text-gray-300 font-semibold">{t.ambulanceSub}<br/><strong className="text-white">108</strong></p>
                            </div>
                        </div>

                        <div className="bg-[#0B1A33] border border-[#0B1A33]/10 rounded-xl p-3 flex items-center justify-between mb-8">
                            <div className="flex items-center gap-2.5">
                                <Globe size={18} className="text-[#C9A84C]" />
                                <span className="text-[0.75rem] font-bold text-gray-200">{t.familyNotified}</span>
                            </div>
                            <div className="bg-[#C9A84C] text-white text-[0.65rem] font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1 shrink-0">
                                <Shield size={10} /> {t.premium}
                            </div>
                        </div>

                        {/* Vehicle Details */}
                        <div className="flex items-center gap-2 mb-4 px-1">
                            <Car size={18} className="text-white" />
                            <h3 className="text-sm font-extrabold text-white">{t.vehicleDetails}</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6 relative">
                            {/* Ghost car outline */}
                            <div className="absolute -right-5 top-0 opacity-5 w-[150px] z-0 pointer-events-none">
                                <Car size={150} />
                            </div>
                            
                            <div className="relative z-10">
                                <div className="text-[0.65rem] font-bold text-gray-400 mb-0.5">{t.vehicleType}</div>
                                <div className="text-sm font-black text-white">{product?.vehicleType || 'Car'}</div>
                            </div>
                            <div className="relative z-10">
                                <div className="text-[0.65rem] font-bold text-gray-400 mb-0.5">{t.registrationNo}</div>
                                <div className="text-sm font-black text-white">{product?.registrationNo || 'VH-M****F1'}</div>
                            </div>
                            <div className="relative z-10">
                                <div className="text-[0.65rem] font-bold text-gray-400 mb-0.5">{t.color}</div>
                                <div className="text-sm font-black text-white">{product?.color || 'N/A'}</div>
                            </div>
                            <div className="relative z-10">
                                <div className="text-[0.65rem] font-bold text-gray-400 mb-0.5">{t.registrationState}</div>
                                <div className="text-sm font-black text-white">{product?.registrationState || 'N/A'}</div>
                            </div>
                            <div className="relative z-10">
                                <div className="text-[0.65rem] font-bold text-gray-400 mb-0.5">{t.model}</div>
                                <div className="text-sm font-black text-white">{product?.model || 'N/A'}</div>
                            </div>
                            <div className="relative z-10">
                                <div className="text-[0.65rem] font-bold text-gray-400 mb-0.5">{t.year}</div>
                                <div className="text-sm font-black text-white">{product?.year || 'N/A'}</div>
                            </div>
                        </div>
                    </>
                )}

                {product?.assetType === 'business' && (
                    <>
                        <div className="flex items-center gap-2 mb-4 px-1 mt-4">
                            <MapPin size={18} className="text-white" />
                            <h3 className="text-sm font-extrabold text-white">Business Details</h3>
                        </div>
                        <div className="bg-[#0B1A33] border border-[#0B1A33]/10 rounded-2xl p-5 mb-6 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-xl"></div>
                            
                            {product?.customMessage && (
                                <div className="mb-4 relative z-10">
                                    <div className="text-[0.65rem] font-bold text-gray-400 mb-1 uppercase tracking-wider">About</div>
                                    <p className="text-sm font-medium text-white/90 leading-relaxed">{product.customMessage}</p>
                                </div>
                            )}

                            {product?.address && (
                                <div className="relative z-10">
                                    <div className="text-[0.65rem] font-bold text-gray-400 mb-1 uppercase tracking-wider">Address</div>
                                    <p className="text-sm font-black text-white leading-relaxed">{product.address}</p>
                                </div>
                            )}

                            {!product?.customMessage && !product?.address && (
                                <p className="text-sm text-gray-400 italic">No additional business details provided.</p>
                            )}
                        </div>
                    </>
                )}

                {/* Privacy Banner */}
                <div className="bg-[#C9A84C]/10 border border-[#C9A84C]/20 p-4 rounded-2xl flex gap-3 items-start mb-5">
                    <Lock size={20} className="text-[#16a34a] shrink-0 mt-0.5" />
                    <div className="flex-1">
                        <p className="text-xs text-[#C9A84C] font-bold leading-relaxed">
                            {t.privacyProtected}<br/>{t.ownerWillSee}
                        </p>
                    </div>
                    <div className="text-[0.7rem] text-[#C9A84C] font-bold whitespace-nowrap">{t.learnMore}</div>
                </div>

                {/* Footer Stats inside card */}
                <div className="grid grid-cols-4 bg-[#0B1A33] -mx-5 -mb-5 p-5 pb-6 rounded-b-[24px]">
                    <div className="flex flex-col items-center text-center gap-1.5">
                        <Shield className="text-white/50" size={20} />
                        <span className="text-white/60 text-[0.5rem] font-extrabold uppercase leading-tight">{t.endToEnd}<br/>{t.encrypted}</span>
                    </div>
                    <div className="flex flex-col items-center text-center gap-1.5">
                        <Lock className="text-white/50" size={20} />
                        <span className="text-white/60 text-[0.5rem] font-extrabold uppercase leading-tight">{t.privacy}<br/>{t.protected}</span>
                    </div>
                    <div className="flex flex-col items-center text-center gap-1.5">
                        <Globe className="text-white/50" size={20} />
                        <span className="text-white/60 text-[0.5rem] font-extrabold uppercase leading-tight">{t.secure}<br/>{t.network}</span>
                    </div>
                    <div className="flex flex-col items-center text-center gap-1.5">
                        <Activity className="text-white/50" size={20} />
                        <span className="text-white/60 text-[0.5rem] font-extrabold uppercase leading-tight">{t.managedBy}<br/>{t.tarkshyaProtocol}</span>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="text-center pt-8 px-5 pb-5 text-[0.65rem] text-gray-400 font-bold flex items-center justify-center gap-1">
                <Shield size={12} className="text-white" /> 
                © 2024 <span className="text-white">V-Kawach</span> | Powered by Tarkshya Solution
            </div>
        </div>
    );
}
