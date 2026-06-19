"use client";

import { useState, useEffect, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import api from "@/lib/api";
import toast from "react-hot-toast";
import { 
  Download, RefreshCw, Eye, Save, X, 
  ChevronRight, Smartphone, ShieldCheck, 
  MapPin, Phone, User, Calendar, 
  QrCode, Image as ImageIcon, Layout, MessageSquare,
  Layers, Settings, Trash2, Loader2, Plus, ChevronLeft
} from "lucide-react";
import Link from "next/link";

export default function Page() {
  const { tagId } = useParams();
  const router = useRouter();
  const [tag, setTag] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const [dynamicFields, setDynamicFields] = useState<{label: string, value: string}[]>([]);
  
  // Photo management states
  const [selectedPhotos, setSelectedPhotos] = useState<File[]>([]);
  const [photosToKeep, setPhotosToKeep] = useState<string[]>([]);
  
  const [isRegenerating, setIsRegenerating] = useState(false);
  const [activeDesign, setActiveDesign] = useState("standard");
  const [designPreviews, setDesignPreviews] = useState<any>({});

  // Generate previews for local files
  const photoPreviews = useMemo(() => {
    return selectedPhotos.map(file => ({
      url: URL.createObjectURL(file),
      file
    }));
  }, [selectedPhotos]);

  const fetchTag = async () => {
    if (!tagId) return;
    try {
      const res = await api.get(`/tags/${tagId}`);
      const tagData = res.data.tag;
      setTag(tagData);
      setFormData({
        ownerName: tagData.ownerName || "",
        ownerPhone: tagData.ownerPhone || "",
        emergencyContact: tagData.emergencyContact || "",
        address: tagData.address || "",
        planType: tagData.planType || "basic",
        assetType: tagData.assetType || "vehicle",
        isActive: tagData.isActive ?? true,
        isLost: tagData.isLost ?? false,
        customMessage: tagData.customMessage || "",
        sponsorId: tagData.sponsorId || "",
        assetId: tagData.assetId || ""
      });
      
      // Initialize photos to keep from DB
      if (tagData.photos) {
        try {
          setPhotosToKeep(JSON.parse(tagData.photos));
        } catch(e) {
          setPhotosToKeep([]);
        }
      } else {
        setPhotosToKeep([]);
      }

      if (tagData.dynamicData) {
        try {
          setDynamicFields(JSON.parse(tagData.dynamicData));
        } catch(e) {}
      }
      
      setDesignPreviews({
        [tagData.designType || 'standard']: {
          imagePath: tagData.qrImagePath
        }
      });
      setActiveDesign(tagData.designType || 'standard');

    } catch (err) {
      toast.error("Failed to load tag details");
    }
  };

  useEffect(() => {
    fetchTag();
    return () => {
      // Cleanup previews
      photoPreviews.forEach(p => URL.revokeObjectURL(p.url));
    };
  }, [tagId]);

  const handleRegenerate = async (designType: string) => {
    setIsRegenerating(true);
    try {
      const res = await api.post(`/tags/${tagId}/regenerate-qr`, { designType });
      setDesignPreviews((prev: any) => ({
        ...prev,
        [designType]: res.data.qr
      }));
      toast.success(`${designType.toUpperCase()} design generated!`);
    } catch (err) {
      toast.error("Failed to generate design");
    } finally {
      setIsRegenerating(false);
    }
  };

  const downloadQR = async (designType: string, format: 'png' | 'svg') => {
    try {
      const preview = designPreviews[designType];
      if (!preview) {
        toast.error("Generate design first");
        return;
      }

      const imagePath = format === 'svg' ? preview.qrSvgUrl : preview.imagePath;
      if (!imagePath) {
        await handleRegenerate(designType);
        return;
      }

      const response = await api.get(imagePath, { responseType: 'blob' });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `QR_${tag.tagCode}_${designType}.${format}`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      toast.error("Download failed");
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    const loadingToast = toast.loading("Updating tag details...");
    
    try {
      const data = new FormData();
      Object.keys(formData).forEach(key => {
         if (formData[key] !== null && formData[key] !== undefined) {
            data.append(key, formData[key]);
         }
      });
      data.append('dynamicData', JSON.stringify(dynamicFields.filter(f => f.label && f.value)));
      
      // Send the list of existing photos we want to retain
      data.append('keepPhotos', JSON.stringify(photosToKeep));
      
      // Append new photo files
      selectedPhotos.forEach(file => data.append('photos', file));

      await api.put(`/tags/${tagId}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      toast.success("Tag details updated successfully!", { id: loadingToast });
      setIsEditing(false);
      setSelectedPhotos([]);
      fetchTag();
    } catch(err) {
      toast.error("Failed to update tag!", { id: loadingToast });
    } finally {
      setIsUpdating(false);
    }
  };

  const addField = () => setDynamicFields([...dynamicFields, {label: '', value: ''}]);
  const removeField = (idx: number) => setDynamicFields(dynamicFields.filter((_, i) => i !== idx));
  const updateField = (idx: number, key: string, val: string) => {
    const updated = [...dynamicFields];
    (updated[idx] as any)[key] = val;
    setDynamicFields(updated);
  };

  // Remove photo from existing list (local state only until saved)
  const removeExistingPhoto = (url: string) => {
    setPhotosToKeep(photosToKeep.filter(p => p !== url));
  };

  // Remove photo from current selection
  const removeSelectedPhoto = (idx: number) => {
    setSelectedPhotos(selectedPhotos.filter((_, i) => i !== idx));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setSelectedPhotos(prev => [...prev, ...files]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 px-6 py-8 md:px-10">
      {tag && (
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header & Quick Stats */}
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-start">
            <div className="flex items-center gap-5">
              <button onClick={() => router.back()} className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors">
                <ChevronLeft className="w-6 h-6 text-slate-500" />
              </button>
              <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                <QrCode className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tight">
                    {tag.tagCode}
                  </h1>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${tag.isActive ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                    {tag.isActive ? "Online" : "Paused"}
                  </span>
                </div>
                <p className="text-slate-400 font-bold text-sm mt-1 flex items-center gap-2">
                   <User className="w-3.5 h-3.5" /> {tag.ownerName} • <Smartphone className="w-3.5 h-3.5" /> {tag.ownerPhone}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-black transition-all shadow-lg active:scale-95 ${
                  isEditing 
                    ? "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300" 
                    : "bg-primary text-white hover:bg-orange-600 shadow-primary/20"
                }`}
              >
                {isEditing ? <X className="w-4 h-4" /> : <Settings className="w-4 h-4" />}
                {isEditing ? "Cancel" : "Update Details"}
              </button>
              
              <Link 
                href={`/scan/${tag.tagCode}`}
                target="_blank"
                className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 rounded-2xl text-sm font-black transition-all hover:border-primary/30 shadow-sm"
              >
                <Eye className="w-4 h-4" />
                Live Preview
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: QR Management & Preview */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
                <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <h2 className="text-xl font-black text-slate-800 dark:text-white flex items-center gap-3">
                    <Layout className="w-5 h-5 text-primary" />
                    QR Design Preview
                  </h2>
                  <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                    {['standard', 'circle', 'landscape'].map(d => (
                      <button
                        key={d}
                        onClick={() => setActiveDesign(d)}
                        className={`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-tight transition-all ${
                          activeDesign === d ? 'bg-white dark:bg-slate-700 text-primary shadow-sm' : 'text-slate-400 hover:text-slate-600'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-10 flex flex-col items-center">
                  <div className="relative group bg-slate-50 dark:bg-slate-800/50 p-6 rounded-[2rem] border-2 border-dashed border-slate-200 dark:border-slate-800 transition-all hover:border-primary/30">
                    <div className="aspect-square w-64 md:w-80 flex items-center justify-center">
                      {isRegenerating ? (
                        <Loader2 className="w-12 h-12 text-primary animate-spin" />
                      ) : (
                        <img 
                          src={designPreviews[activeDesign]?.imagePath ? 
                            (designPreviews[activeDesign].imagePath.startsWith('http') ? 
                              designPreviews[activeDesign].imagePath : 
                              designPreviews[activeDesign].imagePath) : 
                            `/api/tags/${tag.id}/qr?design=${activeDesign}`} 
                          alt={`${activeDesign} preview`}
                          className="w-full h-full object-contain"
                        />
                      )}
                    </div>
                    
                    {!designPreviews[activeDesign] && !isRegenerating && (
                      <div className="absolute inset-0 flex items-center justify-center bg-white/90 dark:bg-slate-900/90 rounded-[2rem]">
                        <button 
                          onClick={() => handleRegenerate(activeDesign)}
                          className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl text-sm font-black shadow-lg shadow-primary/20"
                        >
                          <RefreshCw className="w-4 h-4" />
                          Generate {activeDesign.toUpperCase()} Design
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 w-full mt-10">
                    <button 
                      onClick={() => downloadQR(activeDesign, 'png')}
                      className="flex items-center justify-center gap-2 px-6 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl text-sm font-black transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Download className="w-4 h-4" />
                      Download PNG
                    </button>
                    <button 
                      onClick={() => downloadQR(activeDesign, 'svg')}
                      className="flex items-center justify-center gap-2 px-6 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 rounded-2xl text-sm font-black transition-all hover:border-primary shadow-sm"
                    >
                      <Download className="w-4 h-4" />
                      Download SVG
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => handleRegenerate(activeDesign)}
                    className="mt-4 text-xs font-bold text-slate-400 hover:text-primary flex items-center gap-1.5 transition-colors"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isRegenerating ? 'animate-spin' : ''}`} />
                    Refresh Design (Regenerate)
                  </button>
                </div>
              </div>

              {/* Tag Metadata Info */}
              <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-8 space-y-6">
                 <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-widest border-l-4 border-primary pl-4">
                    Subscription Details
                 </h3>
                 <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-1">
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-tight">Active Plan</span>
                       <p className="text-sm font-black text-slate-700 dark:text-slate-200 flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-emerald-500" /> {tag.planType.toUpperCase()}
                       </p>
                    </div>
                    <div className="space-y-1">
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-tight">Valid Until</span>
                       <p className="text-sm font-black text-slate-700 dark:text-slate-200 flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" /> {new Date(tag.expiresAt).toLocaleDateString()}
                       </p>
                    </div>
                    <div className="space-y-1">
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-tight">Created By</span>
                       <p className="text-xs font-bold text-slate-500">{tag.admin?.name || 'System'}</p>
                    </div>
                    <div className="space-y-1 text-right">
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-tight">Total Interactions</span>
                       <p className="text-sm font-black text-slate-700 dark:text-slate-200">{tag._count?.scanLogs + tag._count?.callLogs} Total</p>
                    </div>
                 </div>
              </div>
            </div>

            {/* Right Column: Edit Form / Logs */}
            <div className="lg:col-span-7">
               {isEditing ? (
                 <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden animate-in fade-in slide-in-from-right-4 duration-500">
                    <div className="p-8 border-b border-slate-100 dark:border-slate-800">
                      <h2 className="text-xl font-black text-slate-800 dark:text-white">Update Tag Configuration</h2>
                      <p className="text-sm font-medium text-slate-500 mt-1">Updates are applied instantly to the QR landing page.</p>
                    </div>
                    
                    <form onSubmit={handleUpdate} className="p-8 space-y-6">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Owner Name</label>
                            <div className="relative">
                              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                              <input type="text" required value={formData.ownerName} onChange={(e) => setFormData({...formData, ownerName: e.target.value})} className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none focus:ring-4 focus:ring-primary/10 font-bold text-slate-800 dark:text-white text-sm transition-all" />
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Owner Phone</label>
                            <div className="relative">
                              <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                              <input type="text" required value={formData.ownerPhone} onChange={(e) => setFormData({...formData, ownerPhone: e.target.value})} className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none focus:ring-4 focus:ring-primary/10 font-bold text-slate-800 dark:text-white text-sm transition-all" />
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Emergency Contact</label>
                            <div className="relative">
                              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                              <input type="text" value={formData.emergencyContact} onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})} className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none focus:ring-4 focus:ring-primary/10 font-bold text-slate-800 dark:text-white text-sm transition-all" />
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Asset Category</label>
                            <select value={formData.assetType} onChange={(e) => setFormData({...formData, assetType: e.target.value})} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none focus:ring-4 focus:ring-primary/10 font-bold text-slate-800 dark:text-white text-sm transition-all">
                              <option value="vehicle">Vehicle</option>
                              <option value="pet">Pet</option>
                              <option value="person">Person</option>
                              <option value="other">Other Asset</option>
                            </select>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Asset ID (Publicly Shown)</label>
                            <div className="relative">
                              <QrCode className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                              <input type="text" placeholder="e.g. DL 3C AB 1234" value={formData.assetId} onChange={(e) => setFormData({...formData, assetId: e.target.value})} className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none focus:ring-4 focus:ring-primary/10 font-bold text-slate-800 dark:text-white text-sm transition-all" />
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Internal Tag Code</label>
                            <div className="relative opacity-70">
                              <Layers className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                              <input type="text" disabled value={tag.tagCode} className="w-full pl-12 pr-4 py-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none font-bold text-slate-400 text-sm cursor-not-allowed" />
                            </div>
                          </div>
                       </div>

                       <div className="space-y-1.5">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Custom Message (Shown on Scan)</label>
                           <div className="relative">
                              <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-slate-400" />
                              <textarea value={formData.customMessage} onChange={(e) => setFormData({...formData, customMessage: e.target.value})} className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none focus:ring-4 focus:ring-primary/10 font-bold text-slate-800 dark:text-white text-sm transition-all" rows={2} placeholder="e.g. Please contact me if my vehicle is causing issues."></textarea>
                           </div>
                        </div>

                       <div className="space-y-1.5">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Location / Address</label>
                          <div className="relative">
                             <MapPin className="absolute left-4 top-4 w-4 h-4 text-slate-400" />
                             <textarea value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl outline-none focus:ring-4 focus:ring-primary/10 font-bold text-slate-800 dark:text-white text-sm transition-all" rows={3} placeholder="City, State, Zip..."></textarea>
                          </div>
                       </div>

                       <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                          <div className="flex items-center justify-between">
                            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Custom Data Fields</h4>
                            <button type="button" onClick={addField} className="text-[10px] font-black text-primary hover:bg-primary/5 px-3 py-1 rounded-lg transition-all">+ Add New</button>
                          </div>
                          <div className="grid grid-cols-1 gap-3">
                            {dynamicFields.map((field, idx) => (
                              <div key={idx} className="flex gap-3 animate-in fade-in zoom-in-95">
                                <input placeholder="Label" value={field.label} onChange={(e) => updateField(idx, 'label', e.target.value)} className="flex-1 px-4 py-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl outline-none font-bold text-xs" />
                                <input placeholder="Value" value={field.value} onChange={(e) => updateField(idx, 'value', e.target.value)} className="flex-1 px-4 py-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl outline-none font-bold text-xs" />
                                <button type="button" onClick={() => removeField(idx)} className="size-8 flex items-center justify-center text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-all">✕</button>
                              </div>
                            ))}
                          </div>
                       </div>

                       <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 block mb-3">Public Asset Gallery</label>
                          <div className="grid grid-cols-4 md:grid-cols-6 gap-3 mb-4">
                             {/* Existing Photos (Manageable) */}
                             {photosToKeep.map((url: string, idx: number) => (
                               <div key={`existing-${idx}`} className="relative aspect-square rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm group">
                                  <img src={url} className="w-full h-full object-cover" alt="" />
                                  <button 
                                    type="button"
                                    onClick={() => removeExistingPhoto(url)}
                                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                                  >
                                     <X className="w-3 h-3" />
                                  </button>
                               </div>
                             ))}
                             
                             {/* New Selection Previews (Manageable) */}
                             {photoPreviews.map((p, idx) => (
                               <div key={`new-${idx}`} className="relative aspect-square rounded-xl overflow-hidden border-2 border-primary/30 shadow-sm group">
                                  <img src={p.url} className="w-full h-full object-cover opacity-70" alt="" />
                                  <button 
                                    type="button"
                                    onClick={() => removeSelectedPhoto(idx)}
                                    className="absolute top-1 right-1 bg-primary text-white rounded-full p-1 shadow-lg"
                                  >
                                     <X className="w-3 h-3" />
                                  </button>
                                  <div className="absolute bottom-1 right-1 bg-primary text-white rounded-full p-0.5">
                                     <Loader2 className="w-2 h-2 animate-spin" />
                                  </div>
                               </div>
                             ))}

                             <label className="aspect-square rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 transition-all text-slate-400 hover:text-primary">
                                <Plus className="w-6 h-6 mb-1" />
                                <span className="text-[8px] font-black uppercase">Upload</span>
                                <input type="file" multiple className="hidden" onChange={handleFileChange} />
                             </label>
                          </div>
                          {(selectedPhotos.length > 0 || photosToKeep.length !== (tag.photos ? JSON.parse(tag.photos).length : 0)) && (
                             <p className="text-[10px] font-bold text-primary mt-2 flex items-center gap-2">
                                <RefreshCw className="w-3 h-3" />
                                Gallery modified. Click "Save Changes" to update server.
                             </p>
                          )}
                       </div>

                       <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/30 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                          <input type="checkbox" id="isActive2" checked={formData.isActive} onChange={(e) => setFormData({...formData, isActive: e.target.checked})} className="size-5 rounded border-slate-300 text-primary focus:ring-primary" />
                          <label htmlFor="isActive2" className="text-sm font-bold text-slate-700 dark:text-slate-300 cursor-pointer">Tag is Live (Scan enabled)</label>
                       </div>

                       <div className="flex justify-end pt-4">
                         <button 
                           type="submit" 
                           disabled={isUpdating}
                           className="px-10 py-4 bg-primary hover:bg-orange-600 disabled:bg-slate-400 text-white font-black text-sm rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-95 flex items-center gap-2"
                         >
                           {isUpdating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
                           {isUpdating ? "Saving..." : "Save Changes"}
                         </button>
                       </div>
                    </form>
                 </div>
               ) : (
                 <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* Analytics Preview */}
                    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 p-8">
                       <div className="flex items-center justify-between mb-8">
                          <div>
                            <h3 className="text-xl font-black text-slate-800 dark:text-white">Interaction Analytics</h3>
                            <p className="text-sm font-bold text-slate-400">Activity volume for the last 30 days</p>
                          </div>
                          <div className="flex gap-2">
                             <div className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black rounded-lg uppercase">Daily</div>
                             <div className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-400 text-[10px] font-black rounded-lg uppercase">Monthly</div>
                          </div>
                       </div>
                       
                       <div className="h-48 flex items-end gap-2 px-2">
                          {[15, 25, 45, 30, 60, 40, 85, 55, 30, 45, 75, 95, 35, 20, 50].map((h, i) => (
                            <div key={i} className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-t-lg relative group transition-all hover:bg-primary/30" style={{ height: `${h}%` }}>
                               <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                  {h} Hits
                               </div>
                            </div>
                          ))}
                       </div>
                       <div className="flex justify-between mt-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          <span>30 Days Ago</span>
                          <span>Today</span>
                       </div>
                    </div>

                    {/* Logs Section */}
                    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                       <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                          <h3 className="text-lg font-black text-slate-800 dark:text-white">Recent Security Logs</h3>
                          <Link href="/admin/scans" className="text-xs font-black text-primary hover:underline">View All Records</Link>
                       </div>
                       <div className="overflow-x-auto">
                          <table className="w-full text-left">
                             <thead className="bg-slate-50 dark:bg-slate-800/30 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                <tr>
                                   <th className="px-8 py-4">Event Time</th>
                                   <th className="px-8 py-4">Action Type</th>
                                   <th className="px-8 py-4">Status</th>
                                   <th className="px-8 py-4 text-right">Details</th>
                                </tr>
                             </thead>
                             <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
                                {[1, 2, 3].map((_, i) => (
                                  <tr key={i} className="text-sm font-bold text-slate-600 dark:text-slate-300">
                                     <td className="px-8 py-5 text-xs">Today, 02:45 PM</td>
                                     <td className="px-8 py-5">
                                        <span className="flex items-center gap-2">
                                           <div className="size-2 rounded-full bg-primary" />
                                           QR Scan Interaction
                                        </span>
                                     </td>
                                     <td className="px-8 py-5">
                                        <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded text-[10px] font-black uppercase">Success</span>
                                     </td>
                                     <td className="px-8 py-5 text-right">
                                        <button className="text-slate-400 hover:text-primary"><ChevronRight className="w-4 h-4" /></button>
                                     </td>
                                  </tr>
                                ))}
                             </tbody>
                          </table>
                       </div>
                    </div>
                 </div>
               )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
