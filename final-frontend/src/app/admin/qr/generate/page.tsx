"use client";

import { useState, useEffect, useRef } from "react";
import api from "@/lib/api";
import toast from "react-hot-toast";
import { 
  Car, 
  Zap, 
  RotateCcw, 
  Upload, 
  Download, 
  Printer, 
  Share2, 
  Info, 
  Loader2,
  CheckCircle2,
  QrCode as QrIcon,
  FileSpreadsheet,
  AlertCircle,
  FileText,
  PenTool
} from "lucide-react";
import { jsPDF } from "jspdf";

interface Plan {
  id: string;
  name: string;
  displayName: string;
  price: number;
  validityDays: number;
}

interface Sponsor {
  id: string;
  name: string;
  isActive: boolean;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [bulkLoading, setBulkLoading] = useState(false);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [qrResult, setQrResult] = useState<any>(null);
  const [bulkResult, setBulkResult] = useState<any>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    ownerName: "",
    ownerPhone: "",
    emergencyContact: "",
    tagCode: "",
    assetType: "employee",
    planType: "basic",
    sponsorId: "",
    designTypes: ["standard"] as string[],
    quantities: { standard: 1, circle: 1, landscape: 1 } as Record<string, number>,
    customMessage: "",
    address: ""
  });

  // Fetch plans & sponsors on load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [plansRes, sponsorsRes] = await Promise.all([
          api.get("/plans"),
          api.get("/sponsors")
        ]);
        
        setPlans(plansRes.data.plans);
        if (plansRes.data.plans.length > 0) {
          setFormData(prev => ({ ...prev, planType: plansRes.data.plans[0].name }));
        }

        const activeSponsors = sponsorsRes.data.sponsors.filter((s: Sponsor) => s.isActive);
        setSponsors(activeSponsors);
      } catch (error) {
        console.error("Failed to fetch dependencies");
      }
    };
    fetchData();
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.ownerName.trim()) newErrors.ownerName = "Owner name is required";
    if (!/^[6-9]\d{9}$/.test(formData.ownerPhone)) newErrors.ownerPhone = "Enter a valid 10-digit mobile number";
    if (formData.emergencyContact && !/^[6-9]\d{9}$/.test(formData.emergencyContact)) newErrors.emergencyContact = "Enter a valid 10-digit alternate number";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setLoading(true);
    try {
      const response = await api.post("/tags", {
        ...formData,
        designTypes: formData.designTypes // Send array to backend
      });
      
      setQrResult(response.data);
      toast.success("QR Tag Generated Successfully!");
      setErrors({});
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Failed to generate QR");
    } finally {
      setLoading(false);
    }
  };

  const handleBulkUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith('.csv')) {
      toast.error("Please upload a valid CSV file");
      return;
    }

    const formDataUpload = new FormData();
    formDataUpload.append('file', file);
    formDataUpload.append('designTypes', JSON.stringify(formData.designTypes));

    setBulkLoading(true);
    const toastId = toast.loading("Processing bulk tags...");

    try {
      const response = await api.post("/tags/bulk", formDataUpload, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      toast.success(
        `Successfully generated ${response.data.successCount} tags!`, 
        { id: toastId, duration: 5000 }
      );
      
        setBulkResult(response.data);
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Bulk upload failed", { id: toastId });
    } finally {
      setBulkLoading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const downloadTemplate = () => {
    const a = document.createElement('a');
    a.href = "/templates/qr_bulk_template.csv";
    a.download = 'qr_bulk_template.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleReset = () => {
    setFormData({
      ownerName: "",
      ownerPhone: "",
      emergencyContact: "",
      tagCode: "",
      assetType: "vehicle",
      planType: plans[0]?.name || "basic",
      sponsorId: "",
      designTypes: ["standard"],
      quantities: { standard: 1, circle: 1, landscape: 1 },
      customMessage: "",
      address: ""
    });
    setQrResult(null);
  };

  const handleDownloadQR = async () => {
    if (!qrResult?.tag?.id) {
      toast.error("Please generate a QR code first");
      return;
    }
    
    const toastId = toast.loading("Preparing your Batch ZIP...");
    try {
      const response = await api.post(`/tags/${qrResult.tag.id}/batch-zip`, {
        quantities: formData.quantities
      }, {
        responseType: 'blob'
      });
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `V_KAWACH_${qrResult.tag.tagCode}_BATCH.zip`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
      
      toast.success("Batch ZIP Downloaded!", { id: toastId });
    } catch (error) {
      console.error("ZIP Generation Fail", error);
      toast.error("Failed to generate batch ZIP", { id: toastId });
    }
  };

  const handleDownloadSVG = () => {
    if (!qrResult?.qrs) {
      toast.error("Please generate a QR code first");
      return;
    }
    
    Object.keys(qrResult.qrs).forEach(dt => {
      const svgUrl = qrResult.qrs[dt].qrSvgUrl;
      // if svgUrl is relative starting with /uploads/ this will work
      // usually API_URL is http://localhost:5000 and uploads are served from there
      if (svgUrl) {
        const fullUri = svgUrl.startsWith('http') ? svgUrl : `${API_URL.replace(/\/api$/, '')}${svgUrl}`;
        const link = document.createElement('a');
        link.href = fullUri;
        link.setAttribute('download', `V_KAWACH_${qrResult.tag?.tagCode}_${dt}.svg`);
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        link.remove();
      }
    });
    toast.success("Vector SVG(s) Downloaded!");
  };

  const handleDownloadPDF = async () => {
    if (!qrResult?.tag?.tagCode) {
      toast.error("Please generate a QR code first");
      return;
    }
    
    const toastId = toast.loading("Generating Multi-Design PDF...");
    const doc = new jsPDF();
    const tagCode = qrResult.tag.tagCode;
    
    try {
      let isFirstPage = true;
      
      for (const design of formData.designTypes) {
        let currentBase64 = qrResult.qrs?.[design]?.base64;
        
        if (!currentBase64) {
          // Fallback just in case some designs weren't in the initial result
          const res = await api.post(`/tags/${qrResult.tag.id}/regenerate-qr`, { designType: design });
          currentBase64 = res.data.qr.base64;
        }

        if (!currentBase64) continue;

        const qty = formData.quantities[design] || 1;
        for (let q = 0; q < qty; q++) {
          if (!isFirstPage) doc.addPage();
          isFirstPage = false;

          const isCircle = design === 'circle';
          const isLandscape = design === 'landscape';
          
          let width, height;
          if (isCircle) {
            width = 140; height = 140;
          } else if (isLandscape) {
            width = 180; height = 114; // Credit card aspect
          } else {
            width = 140; height = 180;
          }

          const x = (210 - width) / 2;
          const y = (297 - height) / 2 - 20;
          
          doc.addImage(currentBase64, 'PNG', x, y, width, height);
          
          doc.setFontSize(10);
          doc.setTextColor(150, 150, 150);
          doc.text(`V-KAWACH Premium QR Tag - ${tagCode} (${design.toUpperCase()})`, 105, isCircle ? 230 : (isLandscape ? 215 : 260), { align: 'center' });
          doc.text(`Copy ${q + 1} of ${qty} | Generated on ${new Date().toLocaleDateString()}`, 105, isCircle ? 235 : (isLandscape ? 220 : 265), { align: 'center' });
        }
      }
      
      doc.save(`V_KAWACH_${tagCode}_BATCH.pdf`);
      toast.success("Batch PDF Downloaded!", { id: toastId });
    } catch (error) {
      console.error("PDF Fail", error);
      toast.error("Failed to generate batch PDF", { id: toastId });
    }
  }

  const downloadBulkZIP = async (format: 'png' | 'svg' = 'png') => {
    if (!bulkResult?.tagIds?.length) return;
    
    const toastId = toast.loading(`Preparing your ${format.toUpperCase()} ZIP file...`);
    try {
      const response = await api.post("tags/bulk-download", {
        ids: bulkResult.tagIds,
        quantities: formData.quantities, // Respect selection for bulk too
        format
      }, {
        responseType: 'blob'
      });
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `V_KAWACH_BULK_${new Date().getTime()}.zip`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
      
      toast.success("ZIP Downloaded successfully!", { id: toastId });
    } catch (error) {
      console.error("Download failed", error);
      toast.error("Failed to download ZIP. Please try again.", { id: toastId });
    }
  };

  const downloadBulkPDF = async () => {
    if (!bulkResult?.tagIds?.length) return;
    
    const toastId = toast.loading("Generating High-Quality PDF...");
    try {
      const response = await api.post("tags/bulk-pdf", {
        ids: bulkResult.tagIds,
        quantities: formData.quantities // Respect selection for bulk too
      }, {
        responseType: 'blob'
      });
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `V_KAWACH_BULK_${new Date().getTime()}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
      
      toast.success("PDF Multi-page Report Downloaded!", { id: toastId });
    } catch (error) {
      console.error("PDF generation failed", error);
      toast.error("Failed to generate PDF. Please try again.", { id: toastId });
    }
  }

  return (
    <div className="flex-1 overflow-y-auto p-8 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Form Section */}
          <div className="md:col-span-7 space-y-6">
            <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3 mb-8">
                 <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <QrIcon className="w-5 h-5" />
                 </div>
                 <h3 className="text-xl font-bold">Generate Smart QR Tag</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Owner Name</label>
                    <input
                      className={`w-full rounded-xl border-2 ${errors.ownerName ? 'border-red-500 bg-red-50 dark:bg-red-950/10' : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'} focus:ring-primary focus:border-primary px-4 py-2.5 outline-none transition-all font-medium`}
                      placeholder="e.g. Vikas Kumar"
                      type="text"
                      value={formData.ownerName}
                      onChange={(e) => {
                        setFormData({...formData, ownerName: e.target.value});
                        if (errors.ownerName) setErrors({...errors, ownerName: ""});
                      }}
                    />
                    {errors.ownerName && <p className="text-[10px] font-bold text-red-500 px-1">{errors.ownerName}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Owner Phone</label>
                    <input
                      className={`w-full rounded-xl border-2 ${errors.ownerPhone ? 'border-red-500 bg-red-50 dark:bg-red-950/10' : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'} focus:ring-primary focus:border-primary px-4 py-2.5 outline-none transition-all font-medium`}
                      placeholder="10-digit mobile"
                      type="tel"
                      maxLength={10}
                      value={formData.ownerPhone}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                        setFormData({...formData, ownerPhone: val});
                        if (errors.ownerPhone) setErrors({...errors, ownerPhone: ""});
                      }}
                    />
                    {errors.ownerPhone && <p className="text-[10px] font-bold text-red-500 px-1">{errors.ownerPhone}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Emergency Contact</label>
                    <input
                      className={`w-full rounded-xl border-2 ${errors.emergencyContact ? 'border-red-500 bg-red-50 dark:bg-red-950/10' : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800'} focus:ring-primary focus:border-primary px-4 py-2.5 outline-none transition-all font-medium`}
                      placeholder="Optional alternate"
                      type="tel"
                      maxLength={10}
                      value={formData.emergencyContact}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                        setFormData({...formData, emergencyContact: val});
                        if (errors.emergencyContact) setErrors({...errors, emergencyContact: ""});
                      }}
                    />
                    {errors.emergencyContact && <p className="text-[10px] font-bold text-red-500 px-1">{errors.emergencyContact}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Tag ID / Vehicle No.</label>
                    <input
                      className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-2.5 outline-none transition-all font-medium"
                      placeholder="Auto-generated if empty"
                      type="text"
                      value={formData.tagCode}
                      onChange={(e) => setFormData({...formData, tagCode: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Asset Type</label>
                    <select 
                      className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-2.5 outline-none transition-all font-medium appearance-none"
                      value={formData.assetType}
                      onChange={(e) => setFormData({...formData, assetType: e.target.value})}
                    >
                      <option value="employee">💼 Employee</option>
                      <option value="student">🎒 Student</option>
                      <option value="vehicle">🚗 Vehicle</option>
                      <option value="pet">🐕 Pet</option>
                      <option value="person">👤 Person</option>
                      <option value="other">📦 Other Asset</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Plan</label>
                    <select 
                      className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-2.5 outline-none transition-all font-bold text-primary appearance-none"
                      value={formData.planType}
                      onChange={(e) => setFormData({...formData, planType: e.target.value})}
                    >
                      {plans.map(p => (
                        <option key={p.id} value={p.name}>{p.displayName} (₹{p.price})</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Design Selection */}
                <div className="space-y-4">
                  <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">QR Design Templates & Quantities</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div 
                      className={`relative p-4 rounded-xl border-2 transition-all group ${formData.designTypes.includes('standard') ? 'border-primary bg-primary/5' : 'border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700'}`}
                    >
                      <div 
                        onClick={() => {
                          const designs = formData.designTypes.includes('standard')
                            ? formData.designTypes.filter(d => d !== 'standard')
                            : [...formData.designTypes, 'standard'];
                          if (designs.length === 0) designs.push('standard');
                          setFormData({...formData, designTypes: designs});
                        }}
                        className="cursor-pointer flex items-center gap-3 mb-3"
                      >
                        <div className={`p-1.5 rounded-lg ${formData.designTypes.includes('standard') ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                          <QrIcon className="size-4" />
                        </div>
                        <span className={`font-bold text-sm ${formData.designTypes.includes('standard') ? 'text-primary' : 'text-slate-600 dark:text-slate-400'}`}>Standard Vertical</span>
                        {formData.designTypes.includes('standard') && <CheckCircle2 className="size-4 ml-auto text-primary" />}
                      </div>
                      <p className="text-[10px] text-slate-400 leading-tight mb-4">Ideal for vehicles and larger assets. Clear branding.</p>
                      
                      {formData.designTypes.includes('standard') && (
                        <div className="flex items-center gap-2 bg-white dark:bg-slate-800 p-2 rounded-lg border border-primary/20">
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Qty:</span>
                          <input 
                            type="number" 
                            min="1" 
                            className="bg-transparent text-sm font-black text-primary outline-none w-full"
                            value={formData.quantities.standard}
                            onChange={(e) => setFormData({...formData, quantities: {...formData.quantities, standard: parseInt(e.target.value) || 1}})}
                          />
                        </div>
                      )}
                    </div>

                    <div 
                      className={`relative p-4 rounded-xl border-2 transition-all group ${formData.designTypes.includes('circle') ? 'border-primary bg-primary/5' : 'border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700'}`}
                    >
                      <div 
                        onClick={() => {
                          const designs = formData.designTypes.includes('circle')
                            ? formData.designTypes.filter(d => d !== 'circle')
                            : [...formData.designTypes, 'circle'];
                          if (designs.length === 0) designs.push('standard');
                          setFormData({...formData, designTypes: designs});
                        }}
                        className="cursor-pointer flex items-center gap-3 mb-3"
                      >
                        <div className={`p-1.5 rounded-lg ${formData.designTypes.includes('circle') ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                          <div className="size-4 rounded-full border-2 border-current" />
                        </div>
                        <span className={`font-bold text-sm ${formData.designTypes.includes('circle') ? 'text-primary' : 'text-slate-600 dark:text-slate-400'}`}>Circular Premium</span>
                        {formData.designTypes.includes('circle') && <CheckCircle2 className="size-4 ml-auto text-primary" />}
                      </div>
                      <p className="text-[10px] text-slate-400 leading-tight mb-4">Perfect for stickers and small equipment. Modern look.</p>
                      
                      {formData.designTypes.includes('circle') && (
                        <div className="flex items-center gap-2 bg-white dark:bg-slate-800 p-2 rounded-lg border border-primary/20">
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Qty:</span>
                          <input 
                            type="number" 
                            min="1" 
                            className="bg-transparent text-sm font-black text-primary outline-none w-full"
                            value={formData.quantities.circle}
                            onChange={(e) => setFormData({...formData, quantities: {...formData.quantities, circle: parseInt(e.target.value) || 1}})}
                          />
                        </div>
                      )}
                    </div>

                    <div 
                      className={`relative p-4 rounded-xl border-2 transition-all group ${formData.designTypes.includes('landscape') ? 'border-primary bg-primary/5' : 'border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700'}`}
                    >
                      <div 
                        onClick={() => {
                          const designs = formData.designTypes.includes('landscape')
                            ? formData.designTypes.filter(d => d !== 'landscape')
                            : [...formData.designTypes, 'landscape'];
                          if (designs.length === 0) designs.push('standard');
                          setFormData({...formData, designTypes: designs});
                        }}
                        className="cursor-pointer flex items-center gap-3 mb-3"
                      >
                        <div className={`p-1.5 rounded-lg ${formData.designTypes.includes('landscape') ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                           <Zap className="size-4" />
                        </div>
                        <span className={`font-bold text-sm ${formData.designTypes.includes('landscape') ? 'text-primary' : 'text-slate-600 dark:text-slate-400'}`}>Landscape (Card)</span>
                        {formData.designTypes.includes('landscape') && <CheckCircle2 className="size-4 ml-auto text-primary" />}
                      </div>
                      <p className="text-[10px] text-slate-400 leading-tight mb-4">Credit card sized tags. Ideal for wallets, ID cards etc.</p>
                      
                      {formData.designTypes.includes('landscape') && (
                        <div className="flex items-center gap-2 bg-white dark:bg-slate-800 p-2 rounded-lg border border-primary/20">
                          <span className="text-[10px] font-bold text-slate-400 uppercase">Qty:</span>
                          <input 
                            type="number" 
                            min="1" 
                            className="bg-transparent text-sm font-black text-primary outline-none w-full"
                            value={formData.quantities.landscape}
                            onChange={(e) => setFormData({...formData, quantities: {...formData.quantities, landscape: parseInt(e.target.value) || 1}})}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-semibold text-slate-600 dark:text-slate-400">Custom Message (Shown on Scan)</label>
                   <textarea
                      className="w-full rounded-xl border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary px-4 py-2.5 outline-none transition-all min-h-[100px] font-medium"
                      placeholder="e.g. Please contact me if my vehicle is causing issues."
                      value={formData.customMessage}
                      onChange={(e) => setFormData({...formData, customMessage: e.target.value})}
                   />
                </div>

                <div className="flex gap-4 pt-4">
                  <button 
                    type="submit"
                    disabled={loading || bulkLoading}
                    className="flex-1 bg-primary text-white py-4 rounded-xl font-bold hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 disabled:opacity-70 disabled:pointer-events-none"
                  >
                    {loading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        <Zap className="w-5 h-5 fill-current" />
                        Generate & Save
                      </>
                    )}
                  </button>
                  <button 
                    type="button"
                    onClick={handleReset}
                    className="px-8 py-4 border border-slate-200 dark:border-slate-800 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center gap-2 text-slate-600 dark:text-slate-400"
                  >
                    <RotateCcw className="w-5 h-5" />
                    Reset
                  </button>
                </div>
              </form>
            </div>

            {/* Bulk Generation Section */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm group">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-600">
                            <FileSpreadsheet className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white tracking-tight">Bulk Generation</h3>
                    </div>
                    <button 
                        onClick={() => {
                            const csvContent = "ownerName,ownerPhone,emergencyContact,assetType,planType\nJohn Doe,9876543210,,vehicle,basic";
                            const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
                            const url = URL.createObjectURL(blob);
                            const link = document.createElement("a");
                            link.setAttribute("href", url);
                            link.setAttribute("download", "tags_template.csv");
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                        }}
                        className="text-xs font-bold text-slate-400 hover:text-primary transition-colors flex items-center gap-1.5 underline underline-offset-4 decoration-primary/30"
                    >
                        <Download className="w-3.5 h-3.5" />
                        Download Instructions
                    </button>
                </div>

                    <div className="mb-6 p-6 bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-slate-200 dark:border-slate-700/50">
                        <div className="flex items-center gap-2 mb-4">
                            <Info className="w-3.5 h-3.5 text-primary" />
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Step 1: Set Output Style & Qty</label>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div 
                                className={`relative p-4 rounded-xl border-2 transition-all cursor-pointer group ${formData.designTypes.includes('standard') ? 'border-primary bg-white dark:bg-slate-800 shadow-lg shadow-primary/5' : 'border-slate-100 dark:border-slate-800 hover:border-primary/30'}`}
                                onClick={() => {
                                    const designs = formData.designTypes.includes('standard')
                                        ? formData.designTypes.filter(d => d !== 'standard')
                                        : [...formData.designTypes, 'standard'];
                                    if (designs.length === 0) designs.push('standard');
                                    setFormData({...formData, designTypes: designs});
                                }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={`p-1.5 rounded-lg ${formData.designTypes.includes('standard') ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-900 text-slate-400'}`}>
                                        <QrIcon className="size-4" />
                                    </div>
                                    <span className={`font-bold text-sm ${formData.designTypes.includes('standard') ? 'text-primary' : 'text-slate-500'}`}>Standard</span>
                                    {formData.designTypes.includes('standard') && <CheckCircle2 className="size-4 ml-auto text-primary" />}
                                </div>
                                {formData.designTypes.includes('standard') && (
                                    <div className="flex items-center gap-2 bg-primary/5 dark:bg-primary/10 p-2 rounded-lg border border-primary/10" onClick={(e) => e.stopPropagation()}>
                                        <span className="text-[9px] font-black text-primary/60 uppercase">Qty:</span>
                                        <input 
                                            type="number" 
                                            min="1" 
                                            className="bg-transparent text-sm font-black text-primary outline-none w-full"
                                            value={formData.quantities.standard}
                                            onChange={(e) => setFormData({...formData, quantities: {...formData.quantities, standard: parseInt(e.target.value) || 1}})}
                                        />
                                    </div>
                                )}
                            </div>

                            <div 
                                className={`relative p-4 rounded-xl border-2 transition-all cursor-pointer group ${formData.designTypes.includes('circle') ? 'border-primary bg-white dark:bg-slate-800 shadow-lg shadow-primary/5' : 'border-slate-100 dark:border-slate-800 hover:border-primary/30'}`}
                                onClick={() => {
                                    const designs = formData.designTypes.includes('circle')
                                        ? formData.designTypes.filter(d => d !== 'circle')
                                        : [...formData.designTypes, 'circle'];
                                    if (designs.length === 0) designs.push('standard');
                                    setFormData({...formData, designTypes: designs});
                                }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={`p-1.5 rounded-lg ${formData.designTypes.includes('circle') ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-900 text-slate-400'}`}>
                                        <div className="size-4 rounded-full border-2 border-current" />
                                    </div>
                                    <span className={`font-bold text-sm ${formData.designTypes.includes('circle') ? 'text-primary' : 'text-slate-500'}`}>Circular</span>
                                    {formData.designTypes.includes('circle') && <CheckCircle2 className="size-4 ml-auto text-primary" />}
                                </div>
                                {formData.designTypes.includes('circle') && (
                                    <div className="flex items-center gap-2 bg-primary/5 dark:bg-primary/10 p-2 rounded-lg border border-primary/10" onClick={(e) => e.stopPropagation()}>
                                        <span className="text-[9px] font-black text-primary/60 uppercase">Qty:</span>
                                        <input 
                                            type="number" 
                                            min="1" 
                                            className="bg-transparent text-sm font-black text-primary outline-none w-full"
                                            value={formData.quantities.circle}
                                            onChange={(e) => setFormData({...formData, quantities: {...formData.quantities, circle: parseInt(e.target.value) || 1}})}
                                        />
                                    </div>
                                )}
                            </div>

                            <div 
                                className={`relative p-4 rounded-xl border-2 transition-all cursor-pointer group ${formData.designTypes.includes('landscape') ? 'border-primary bg-white dark:bg-slate-800 shadow-lg shadow-primary/5' : 'border-slate-100 dark:border-slate-800 hover:border-primary/30'}`}
                                onClick={() => {
                                    const designs = formData.designTypes.includes('landscape')
                                        ? formData.designTypes.filter(d => d !== 'landscape')
                                        : [...formData.designTypes, 'landscape'];
                                    if (designs.length === 0) designs.push('standard');
                                    setFormData({...formData, designTypes: designs});
                                }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={`p-1.5 rounded-lg ${formData.designTypes.includes('landscape') ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-900 text-slate-400'}`}>
                                         <Zap className="size-4" />
                                    </div>
                                    <span className={`font-bold text-sm ${formData.designTypes.includes('landscape') ? 'text-primary' : 'text-slate-500'}`}>Landscape</span>
                                    {formData.designTypes.includes('landscape') && <CheckCircle2 className="size-4 ml-auto text-primary" />}
                                </div>
                                {formData.designTypes.includes('landscape') && (
                                    <div className="flex items-center gap-2 bg-primary/5 dark:bg-primary/10 p-2 rounded-lg border border-primary/10" onClick={(e) => e.stopPropagation()}>
                                        <span className="text-[9px] font-black text-primary/60 uppercase">Qty:</span>
                                        <input 
                                            type="number" 
                                            min="1" 
                                            className="bg-transparent text-sm font-black text-primary outline-none w-full"
                                            value={formData.quantities.landscape}
                                            onChange={(e) => setFormData({...formData, quantities: {...formData.quantities, landscape: parseInt(e.target.value) || 1}})}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-800/30 border-2 border-dashed border-slate-200 dark:border-slate-700/50 rounded-2xl p-10 text-center transition-all hover:border-primary/50 hover:bg-primary/5">
                   <div className="size-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-black/5 ring-4 ring-slate-50 dark:ring-slate-900">
                        {bulkLoading ? (
                            <Loader2 className="w-8 h-8 text-primary animate-spin" />
                        ) : (
                            <Upload className="text-primary w-8 h-8" />
                        )}
                   </div>
                   <h4 className="font-bold text-lg mb-2">Import CSV Sheet</h4>
                   <p className="text-slate-500 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
                      Wanna generate tags in bulk? Upload your data sheet and we'll handle the rest.
                   </p>
                   
                   <input 
                      type="file" 
                      ref={fileInputRef}
                      className="hidden" 
                      accept=".csv"
                      onChange={handleBulkUpload}
                      disabled={bulkLoading}
                   />
                   
                   <div className="flex flex-col items-center gap-4">
                        <button 
                            disabled={bulkLoading}
                            onClick={() => fileInputRef.current?.click()}
                            className="bg-primary text-white px-8 py-3 rounded-xl text-sm font-black shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-50 disabled:pointer-events-none"
                        >
                            {bulkLoading ? "Processing..." : "Select CSV File"}
                            <Zap className="w-4 h-4 fill-current" />
                        </button>

                        {bulkResult && (
                            <div className="flex flex-col gap-2">
                                <button 
                                    onClick={() => downloadBulkZIP('png')}
                                    className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-6 py-2 rounded-xl text-xs font-bold border border-emerald-100 hover:bg-emerald-100 transition-all shadow-sm"
                                >
                                    <Download className="w-4 h-4" />
                                    Download {bulkResult.successCount} PNG Units (ZIP)
                                </button>
                                <button 
                                    onClick={() => downloadBulkZIP('svg')}
                                    className="flex items-center gap-2 text-fuchsia-600 bg-fuchsia-50 px-6 py-2 rounded-xl text-xs font-bold border border-fuchsia-100 hover:bg-fuchsia-100 transition-all shadow-sm"
                                >
                                    <PenTool className="w-4 h-4" />
                                    Download {bulkResult.successCount} Vector SVG (ZIP)
                                </button>
                                <button 
                                    onClick={downloadBulkPDF}
                                    className="flex items-center gap-2 text-red-600 bg-red-50 px-6 py-2 rounded-xl text-xs font-bold border border-red-100 hover:bg-red-100 transition-all shadow-sm"
                                >
                                    <FileText className="w-4 h-4" />
                                    Download {bulkResult.successCount} Brand Tags (PDF)
                                </button>
                            </div>
                        )}
                   </div>
                   
                   <div className="mt-8 grid grid-cols-3 gap-2">
                        <div className="flex items-center gap-1.5 justify-center text-[10px] font-bold text-slate-400 italic">
                             <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Max 1000 Tags
                        </div>
                        <div className="flex items-center gap-1.5 justify-center text-[10px] font-bold text-slate-400 italic">
                             <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Auto QR Generation
                        </div>
                        <div className="flex items-center gap-1.5 justify-center text-[10px] font-bold text-slate-400 italic">
                             <CheckCircle2 className="w-3 h-3 text-emerald-500" /> CSV Format Only
                        </div>
                   </div>
                </div>

                <div className="mt-6 flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-100 dark:border-amber-900/30">
                    <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                    <p className="text-xs text-amber-700 dark:text-amber-400 leading-relaxed font-medium">
                        Ensure your CSV columns strictly follow our template: <b>ownerName, ownerPhone, emergencyContact, assetType, planType</b>.
                    </p>
                </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="md:col-span-5">
            <div className="sticky top-8 space-y-6">
              <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                    Live Preview
                  </span>
                  <div className="flex gap-2">
                    <button 
                      onClick={handleDownloadPDF}
                      className="size-10 flex items-center justify-center bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 rounded-xl transition-all text-slate-500 hover:text-red-500 hover:-translate-y-0.5"
                      title="Download PDF"
                    >
                      <FileText className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={handleDownloadQR}
                      className="size-10 flex items-center justify-center bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 rounded-xl transition-all text-slate-500 hover:text-primary hover:-translate-y-0.5"
                      title="Download PNG (ZIP)"
                    >
                      <Download className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={handleDownloadSVG}
                      className="size-10 flex items-center justify-center bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 rounded-xl transition-all text-slate-500 hover:text-fuchsia-500 hover:-translate-y-0.5"
                      title="Download Vector (SVG)"
                    >
                      <PenTool className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => window.print()}
                      className="size-10 flex items-center justify-center bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 rounded-xl transition-all text-slate-500 hover:text-primary hover:-translate-y-0.5"
                    >
                      <Printer className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="p-8 pb-12 flex flex-col items-center justify-center bg-white dark:bg-slate-900 overflow-hidden">
                  <div className="flex flex-col gap-12 w-full max-w-sm">
                    {formData.designTypes.map((dt, idx) => (
                      <div key={dt} className="flex flex-col items-center gap-6 w-full">
                        {idx > 0 && <div className="w-full border-t border-slate-100 dark:border-slate-800 my-2" />}
                        <div className="relative p-1 bg-gradient-to-br from-primary to-amber-500 rounded-[1.8rem] shadow-xl shadow-primary/10 w-full max-w-[280px]">
                          <div className="bg-white p-2.5 rounded-[1.6rem] flex items-center justify-center">
                            {qrResult?.qrs?.[dt]?.base64 ? (
                              <img 
                                src={qrResult.qrs[dt].base64} 
                                alt={`${dt} QR`} 
                                className={`${dt === 'circle' ? 'w-[220px] h-[220px] rounded-full' : (dt === 'landscape' ? 'w-[280px] h-[180px]' : 'w-[200px] h-[250px]')} object-contain`}
                              />
                            ) : (
                              <div className={`${dt === 'circle' ? 'w-[220px] h-[220px]' : (dt === 'landscape' ? 'w-[280px] h-[180px]' : 'w-[200px] h-[250px]')} bg-slate-50 flex flex-col items-center justify-center text-slate-200`}>
                                <QrIcon className="w-10 h-10 mb-2 animate-pulse" />
                                <span className="text-[8px] font-black uppercase tracking-widest text-slate-300">Syncing...</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="text-center">
                          <h4 className="text-xl font-black text-slate-900 dark:text-white tracking-widest uppercase">
                            {qrResult?.tag?.tagCode || formData.tagCode || "VH-DEMO-XX"}
                          </h4>
                          <span className="text-[8px] font-black text-primary uppercase tracking-[0.3em] opacity-60">
                            {dt.toUpperCase()} - {formData.quantities[dt] || 1} UNITS
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 flex items-center justify-center gap-2.5 px-6 py-2 bg-emerald-500/10 border border-emerald-500/20 dark:bg-emerald-500/5 rounded-full text-[10px] font-black uppercase text-emerald-600">
                     <CheckCircle2 className="w-3.5 h-3.5" />
                     Cloud Encrypted & Verified
                  </div>
                </div>
                
                {qrResult && (
                  <div className="p-8 bg-gradient-to-r from-emerald-500/5 via-emerald-500/10 to-emerald-500/5 border-t border-emerald-500/10">
                     <p className="text-[10px] font-black text-emerald-600 text-center uppercase tracking-[0.3em] animate-pulse">
                       Tag Active & Real-time Validated
                     </p>
                  </div>
                )}
              </div>

              <div className="bg-slate-950 p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group border border-white/5">
                <div className="relative z-10 flex items-start gap-6">
                  <div className="p-3 bg-primary/20 rounded-2xl ring-1 ring-primary/30 group-hover:bg-primary transition-colors duration-500">
                    <Zap className="w-6 h-6 text-primary group-hover:text-white fill-current" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-xl tracking-tight">Cloud Routing Active</h4>
                    <p className="text-white/40 text-xs leading-relaxed font-medium">
                      Control the destination effortlessly. Update contact details, emergency alerts, or asset location routing anytime via your secure dashboard.
                    </p>
                  </div>
                </div>
                <div className="absolute -right-12 -bottom-12 opacity-[0.02] group-hover:scale-150 transition-transform duration-1000 group-hover:rotate-45">
                   <QrIcon className="w-64 h-64" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function ShieldCheck(props: any) {
  return (
    <svg 
      {...props} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
