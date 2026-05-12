"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import api from "@/lib/api";
import toast from "react-hot-toast";
import { 
  ShieldCheck, ArrowLeft, Edit3, 
  MapPin, Calendar, Clock, 
  Package, Tag as TagIcon, DollarSign,
  History, Eye, Trash2, CheckCircle, 
  XCircle, Loader2, Upload, Plus
} from "lucide-react";
import Link from "next/link";

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.productId as string;
  const router = useRouter();
  
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [apiUrl, setApiUrl] = useState('');
  
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    batchNumber: "",
    mfgDate: "",
    expDate: "",
    mrp: "",
    isActive: true,
    categoryId: ""
  });
  const [categories, setCategories] = useState<any[]>([]);
  const [dynamicFields, setDynamicFields] = useState<{label: string, value: string}[]>([]);
  const [selectedPhotos, setSelectedPhotos] = useState<File[]>([]);

  useEffect(() => {
    setApiUrl(window.location.origin);
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await api.get(`/products/${productId}`);
      const p = response.data.product;
      setProduct(p);
      setFormData({
        name: p.name || "",
        brand: p.brand || "",
        batchNumber: p.batchNumber || "",
        mfgDate: p.mfgDate ? new Date(p.mfgDate).toISOString().split('T')[0] : "",
        expDate: p.expDate ? new Date(p.expDate).toISOString().split('T')[0] : "",
        mrp: p.mrp?.toString() || "",
        isActive: p.isActive,
        categoryId: p.categoryId || ""
      });
      setDynamicFields(JSON.parse(p.dynamicData || "[]"));
    } catch (error) {
      toast.error("Failed to load product details");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProduct();
      fetchCategories();
    }
  }, [productId]);

  const fetchCategories = async () => {
    try {
      const res = await api.get('/categories');
      setCategories(res.data.categories || []);
    } catch (e) {}
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    const loadingToast = toast.loading("Updating product...");
    try {
      const data = new FormData();
      Object.keys(formData).forEach(key => data.append(key, (formData as any)[key]));
      data.append('dynamicData', JSON.stringify(dynamicFields.filter(f => f.label && f.value)));
      selectedPhotos.forEach(file => data.append('photos', file));

      // Note: We use POST for update because of multipart issues on some servers with PUT
      await api.post(`/products/${productId}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      toast.success("Product updated successfully", { id: loadingToast });
      setIsEditing(false);
      fetchProduct();
    } catch (error) {
      toast.error("Failed to update product", { id: loadingToast });
    }
  };

  const addField = () => setDynamicFields([...dynamicFields, {label: '', value: ''}]);
  const removeField = (idx: number) => setDynamicFields(dynamicFields.filter((_, i) => i !== idx));
  const updateField = (idx: number, key: string, val: string) => {
    const updated = [...dynamicFields];
    (updated[idx] as any)[key] = val;
    setDynamicFields(updated);
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-50">
        <Loader2 className="w-10 h-10 text-emerald-600 animate-spin" />
      </div>
    );
  }

  if (!product) return null;

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50/50">
      {/* Dynamic Header */}
      <div className="bg-white px-10 py-8 border-b border-slate-200 flex items-center justify-between shadow-sm">
         <div className="flex items-center gap-6">
            <Link href="/admin/products" className="p-3 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all">
               <ArrowLeft className="w-5 h-5 text-slate-400" />
            </Link>
            <div>
               <h1 className="text-xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                 {product.name}
                 <span className={`px-2.5 py-1 text-[10px] font-black uppercase tracking-widest rounded-lg ${product.isActive ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                    {product.isActive ? "Genuine" : "Deactivated"}
                 </span>
               </h1>
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">Product ID: {product.productCode}</p>
            </div>
         </div>
         
         <button 
           onClick={() => setIsEditing(!isEditing)}
           className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg ${isEditing ? 'bg-slate-800 text-white shadow-black/10' : 'bg-emerald-600 text-white shadow-emerald-600/20'}`}
         >
           {isEditing ? "Cancel Editing" : "Edit Details"}
         </button>
      </div>

      <div className="flex-1 overflow-auto px-10 py-10 no-scrollbar">
         <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
             
             {/* Main Content Area */}
             <div className="lg:col-span-8 space-y-8 pb-20">
                {isEditing ? (
                  <form onSubmit={handleUpdate} className="bg-white rounded-3xl p-10 border border-slate-200 shadow-sm space-y-8">
                     <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-1.5 flex flex-col">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Product Title</label>
                           <input 
                             value={formData.name} 
                             onChange={e => setFormData({...formData, name: e.target.value})}
                             className="px-4 py-3 bg-slate-50 border-2 border-slate-50 rounded-xl font-bold text-sm focus:border-emerald-500 outline-none transition-all"
                           />
                        </div>
                        <div className="space-y-1.5 flex flex-col">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Brand Name</label>
                           <input 
                             value={formData.brand} 
                             onChange={e => setFormData({...formData, brand: e.target.value})}
                             className="px-4 py-3 bg-slate-50 border-2 border-slate-50 rounded-xl font-bold text-sm focus:border-emerald-500 outline-none transition-all"
                           />
                        </div>
                        <div className="space-y-1.5 flex flex-col">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Batch #</label>
                           <input 
                             value={formData.batchNumber} 
                             onChange={e => setFormData({...formData, batchNumber: e.target.value})}
                             className="px-4 py-3 bg-slate-50 border-2 border-slate-50 rounded-xl font-bold text-sm focus:border-emerald-500 outline-none transition-all"
                           />
                        </div>
                        <div className="space-y-1.5 flex flex-col">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">MRP Price</label>
                           <input 
                             type="number"
                             value={formData.mrp} 
                             onChange={e => setFormData({...formData, mrp: e.target.value})}
                             className="px-4 py-3 bg-slate-50 border-2 border-slate-50 rounded-xl font-bold text-sm focus:border-emerald-500 outline-none transition-all"
                           />
                        </div>
                        <div className="space-y-1.5 flex flex-col">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Mfg Date</label>
                           <input 
                             type="date"
                             value={formData.mfgDate} 
                             onChange={e => setFormData({...formData, mfgDate: e.target.value})}
                             className="px-4 py-3 bg-slate-50 border-2 border-slate-50 rounded-xl font-bold text-sm focus:border-emerald-500 outline-none transition-all"
                           />
                        </div>
                        <div className="space-y-1.5 flex flex-col">
                           <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Exp Date</label>
                           <input 
                             type="date"
                             value={formData.expDate} 
                             onChange={e => setFormData({...formData, expDate: e.target.value})}
                             className="px-4 py-3 bg-slate-50 border-2 border-slate-50 rounded-xl font-bold text-sm focus:border-emerald-500 outline-none transition-all"
                           />
                        </div>
                     </div>

                     <div className="pt-6 border-t border-slate-100">
                        <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-4">Extended Specifications (Dynamic)</h4>
                        <div className="space-y-3">
                           {dynamicFields.map((field, idx) => (
                             <div key={idx} className="flex gap-2">
                                <input placeholder="Key" value={field.label} onChange={e => updateField(idx, 'label', e.target.value)} className="flex-1 px-4 py-2 bg-slate-50 transition-all focus:bg-white border rounded-lg text-xs font-bold" />
                                <input placeholder="Value" value={field.value} onChange={e => updateField(idx, 'value', e.target.value)} className="flex-1 px-4 py-2 bg-slate-50 transition-all focus:bg-white border rounded-lg text-xs font-bold" />
                                <button type="button" onClick={() => removeField(idx)} className="p-2 text-red-500">✕</button>
                             </div>
                           ))}
                           <button type="button" onClick={addField} className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">+ Add Specification</button>
                        </div>
                     </div>

                     <div className="pt-6 border-t border-slate-100">
                        <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-4">Product Images (Upload Multiple)</h4>
                        <input 
                          type="file" 
                          multiple 
                          accept="image/*"
                          onChange={(e) => {
                            if (e.target.files) {
                              const newFiles = Array.from(e.target.files);
                              setSelectedPhotos(prev => [...prev, ...newFiles]);
                            }
                          }}
                          className="block w-full text-sm text-slate-500
                            file:mr-4 file:py-2 file:px-4
                            file:rounded-xl file:border-0
                            file:text-[10px] file:font-black file:uppercase file:tracking-widest
                            file:bg-slate-100 file:text-slate-700
                            hover:file:bg-slate-200 transition-all cursor-pointer"
                        />
                        {selectedPhotos.length > 0 && (
                          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                            {selectedPhotos.map((file, i) => (
                              <div key={i} className="relative size-16 rounded-lg overflow-hidden border border-slate-200 flex-shrink-0 group">
                                <img src={URL.createObjectURL(file)} className="w-full h-full object-cover" />
                                <button 
                                  type="button" 
                                  onClick={() => setSelectedPhotos(prev => prev.filter((_, idx) => idx !== i))}
                                  className="absolute inset-0 bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs"
                                >
                                  ✕
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                        <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-widest">
                          Uploading new images will replace existing ones.
                        </p>
                     </div>

                     <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                        <button type="submit" className="flex-1 bg-emerald-600 py-4 rounded-xl text-white font-black text-sm uppercase tracking-widest shadow-xl shadow-emerald-600/20 active:scale-[0.98] transition-all">Save Changes</button>
                        <button type="button" onClick={() => setIsEditing(false)} className="px-8 py-4 bg-slate-100 rounded-xl text-slate-600 font-black text-sm uppercase tracking-widest">Discard</button>
                     </div>
                  </form>
                ) : (
                  <>
                     {/* Stats Panel */}
                     <div className="grid grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
                           <div className="size-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-3">
                              <History size={24} />
                           </div>
                           <span className="text-2xl font-black text-slate-800 tracking-tight">{product._count?.scanLogs || 0}</span>
                           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Total Verifications</span>
                        </div>
                        <Link href={`/verify/${product.productCode}`} target="_blank" className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center hover:scale-[1.03] transition-all group">
                           <div className="size-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                              <Eye size={24} />
                           </div>
                           <span className="text-sm font-black text-slate-800 tracking-tight uppercase">Public Portal</span>
                           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Live View</span>
                        </Link>
                        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center">
                           <div className={`size-12 rounded-2xl flex items-center justify-center mb-3 ${product.isActive ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                              {product.isActive ? <CheckCircle size={24} /> : <XCircle size={24} />}
                           </div>
                           <span className="text-sm font-black text-slate-800 tracking-tight uppercase">{product.isActive ? "Genuine" : "Deactivated"}</span>
                           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Status</span>
                        </div>
                     </div>

                     {/* Product Identity */}
                     <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
                        <div className="px-8 py-5 border-b border-slate-50 flex items-center justify-between">
                            <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Identity Specifications</h3>
                            <TagIcon className="w-4 h-4 text-slate-300" />
                        </div>
                        <div className="p-8 grid grid-cols-2 gap-y-10 gap-x-12">
                           <div className="flex flex-col gap-1">
                              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Brand Line</span>
                              <span className="text-base font-bold text-slate-800">{product.brand || 'No Brand Specified'}</span>
                           </div>
                           <div className="flex flex-col gap-1 text-right">
                              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Maximum Retail Price</span>
                              <span className="text-base font-black text-emerald-600 font-mono">₹{product.mrp?.toFixed(2)}</span>
                           </div>
                           <div className="flex flex-col gap-1">
                              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Batch Number</span>
                              <span className="text-sm font-black text-slate-700 bg-slate-50 px-3 py-1 rounded-lg w-fit">{product.batchNumber || 'N/A'}</span>
                           </div>
                           <div className="flex flex-col gap-1 text-right">
                              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Manufacturing History</span>
                              <span className="text-sm font-black text-slate-700">MFG: {product.mfgDate ? new Date(product.mfgDate).toLocaleDateString() : '--'}</span>
                              <span className="text-xs font-bold text-red-400 uppercase tracking-tight">EXP: {product.expDate ? new Date(product.expDate).toLocaleDateString() : '--'}</span>
                           </div>
                        </div>

                        {/* Extended Meta Tags */}
                        {JSON.parse(product.dynamicData || "[]").length > 0 && (
                          <div className="bg-slate-50/50 p-8 pt-0">
                             <div className="grid grid-cols-2 gap-4">
                                {JSON.parse(product.dynamicData || "[]").map((spec: any, i: number) => (
                                   <div key={i} className="bg-white border border-slate-100 p-4 rounded-2xl flex justify-between items-center">
                                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{spec.label}</span>
                                      <span className="text-xs font-black text-slate-800">{spec.value}</span>
                                   </div>
                                ))}
                             </div>
                          </div>
                        )}
                     </div>

                     {/* Product Photos Gallery */}
                     <div className="space-y-4">
                        <h3 className="text-sm font-black uppercase tracking-widest text-slate-400 ml-1">Validation Images</h3>
                        <div className="grid grid-cols-4 gap-4">
                           {JSON.parse(product.photos || "[]").map((url: string, i: number) => (
                              <div key={i} className="aspect-square bg-slate-100 rounded-2xl overflow-hidden border-2 border-white shadow-sm group relative">
                                 <img src={apiUrl + url} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                              </div>
                           ))}
                           {JSON.parse(product.photos || "[]").length === 0 && (
                              <div className="col-span-4 py-10 bg-slate-100/50 rounded-2xl border-2 border-dashed border-slate-200 text-center">
                                 <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">No Photos Uploaded</span>
                              </div>
                           )}
                        </div>
                     </div>
                  </>
                )}
             </div>

             {/* Right Sidebar */}
             <div className="lg:col-span-4 space-y-8">
                {/* QR Section */}
                <div className="bg-white rounded-[2rem] border border-slate-200 shadow-2xl p-8 sticky top-10">
                   <div className="flex flex-col items-center">
                      <div className="size-56 bg-slate-50 p-2 rounded-2xl border-4 border-white shadow-xl shadow-black/5">
                        {product.qrImagePath ? (
                            <img 
                              src={apiUrl + product.qrImagePath} 
                              className="w-full h-full object-contain" 
                              alt="Product Identity" 
                            />
                        ) : (
                           <div className="w-full h-full flex items-center justify-center text-slate-300">
                             <TagIcon size={48} />
                           </div>
                        )}
                      </div>
                      <div className="mt-8 text-center">
                         <div className="size-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse">
                            <ShieldCheck size={20} />
                         </div>
                         <h4 className="font-mono text-lg font-black text-emerald-600 mb-1">{product.productCode}</h4>
                         <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{product.name}</p>
                      </div>
                      <div className="w-full h-px bg-slate-100 my-8" />
                      <div className="flex flex-col gap-3 w-full">
                         <button className="w-full bg-slate-900 py-3 rounded-xl text-white text-[10px] font-black uppercase tracking-widest hover:bg-black transition-colors"
                           onClick={() => window.open(apiUrl + product.qrImagePath, '_blank')}
                         >
                            Download Identity Image
                         </button>
                      </div>
                   </div>
                </div>

                {/* Scan History (Mini) */}
                <div className="bg-white rounded-3xl border border-slate-200 p-6">
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center justify-between">
                       Verification History
                       <Clock size={14} />
                    </h5>
                    <div className="space-y-4 max-h-[300px] overflow-auto pr-2 custom-scrollbar">
                       {product.scanLogs?.map((scan: any, i: number) => (
                          <div key={i} className="flex items-center gap-3 pb-3 border-b border-slate-50 last:border-0 last:pb-0">
                             <div className="size-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 text-[10px] font-bold">
                                {i + 1}
                             </div>
                             <div className="flex-1">
                                <p className="text-[10px] font-black text-slate-700">{new Date(scan.createdAt).toLocaleString()}</p>
                                <p className="text-[9px] font-bold text-slate-400 truncate max-w-[120px]">{scan.scannerIp}</p>
                             </div>
                          </div>
                       ))}
                       {(!product.scanLogs || product.scanLogs.length === 0) && (
                          <p className="text-[10px] font-bold text-slate-300 text-center py-6 italic">No verification scans yet</p>
                       )}
                    </div>
                </div>
             </div>
         </div>
      </div>
    </div>
  );
}
