"use client";

import { useState, useRef, useEffect } from "react";
import api from "@/lib/api";
import toast from "react-hot-toast";
import { 
  Zap, RotateCcw, Upload, Download, 
  Info, Loader2, CheckCircle2, 
  QrCode as QrIcon, FileSpreadsheet,
  AlertCircle, FileText, PenTool, ShieldCheck,
  Package, Calendar, DollarSign, Tag as TagIcon,
  Plus, Trash2, ChevronDown, ListFilter,
  Car, Users, Dog, Home as HomeIcon, Smartphone
} from "lucide-react";

const SAFETY_CATEGORIES = [
  { 
    id: 'vehicle', 
    name: 'Vehicle Safety', 
    icon: Car, 
    fields: [
      { label: 'Vehicle Number', value: 'UP 16 XX 0000' },
      { label: 'Owner Name', value: 'John Doe' },
      { label: 'Emergency Call', value: 'Enabled' }
    ] 
  },
  { 
    id: 'student', 
    name: 'Student ID', 
    icon: Users, 
    fields: [
      { label: 'School Name', value: 'Delhi Public School' },
      { label: 'Student Name', value: 'Alice Smith' },
      { label: 'Parent Contact', value: '+91 99XXXXXX00' }
    ] 
  },
  { 
    id: 'pet', 
    name: 'Pet Tag', 
    icon: Dog, 
    fields: [
      { label: 'Pet Name', value: 'Rocky' },
      { label: 'Breed', value: 'Golden Retriever' },
      { label: 'Owner Address', value: 'Sector 62, Noida' }
    ] 
  },
  { 
    id: 'property', 
    name: 'Smart Home/Key', 
    icon: HomeIcon, 
    fields: [
      { label: 'Property ID', value: 'H-402' },
      { label: 'Access Level', value: 'Private' }
    ] 
  }
];

interface ProductForm {
  id: string; 
  name: string;
  brand: string;
  category: string;
  dynamicFields: {label: string, value: string}[];
  selectedPhotos: File[];
  type: string;
}

export default function SafetyIdCreatePage() {
  const [loading, setLoading] = useState(false);
  const [qrResults, setQrResults] = useState<any[]>([]);
  const [apiUrl, setApiUrl] = useState('');

  const [products, setProducts] = useState<ProductForm[]>([{
    id: Math.random().toString(36).substring(7),
    name: "",
    brand: "Tarkshya Safety",
    category: "vehicle",
    dynamicFields: SAFETY_CATEGORIES[0].fields.map(f => ({ ...f })),
    selectedPhotos: [],
    type: "SAFETY"
  }]);

  useEffect(() => {
    setApiUrl(window.location.origin);
  }, []);

  const updateProduct = (id: string, updates: Partial<ProductForm>) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const handleCategoryChange = (id: string, categoryId: string) => {
    const category = SAFETY_CATEGORIES.find(c => c.id === categoryId);
    if (!category) return;
    updateProduct(id, { category: categoryId, dynamicFields: category.fields.map(f => ({ ...f })) });
  };

  const addProduct = () => {
    setProducts(prev => [...prev, {
      id: Math.random().toString(36).substring(7),
      name: "",
      brand: "Tarkshya Safety",
      category: "vehicle",
      dynamicFields: SAFETY_CATEGORIES[0].fields.map(f => ({ ...f })),
      selectedPhotos: [],
      type: "SAFETY"
    }]);
  };

  const removeProduct = (id: string) => {
    if (products.length > 1) setProducts(prev => prev.filter(p => p.id !== id));
  };

  const addDynamicField = (id: string) => {
    const p = products.find(prod => prod.id === id);
    if (p) updateProduct(id, { dynamicFields: [...p.dynamicFields, { label: '', value: '' }] });
  };

  const updateDynamicField = (prodId: string, idx: number, key: 'label'|'value', val: string) => {
    const p = products.find(prod => prod.id === prodId);
    if (p) {
      const updated = [...p.dynamicFields];
      updated[idx][key] = val;
      updateProduct(prodId, { dynamicFields: updated });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const toastId = toast.loading("Generating Safety QR Codes...");
    try {
      const generatedQrs = [];
      for (const p of products) {
        const data = new FormData();
        data.append('name', p.name);
        data.append('brand', p.brand);
        data.append('type', 'SAFETY');
        data.append('dynamicData', JSON.stringify(p.dynamicFields.filter(f => f.label.trim())));
        p.selectedPhotos.forEach(file => data.append('photos', file));

        const response = await api.post("/products", data, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        generatedQrs.push(response.data);
      }
      setQrResults(generatedQrs);
      toast.success(`Generated ${generatedQrs.length} Safety IDs!`, { id: toastId });
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Failed to generate Safety IDs", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50/50 dark:bg-slate-950">
       <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-800 dark:text-white flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-xl text-blue-600">
               <ShieldCheck className="w-6 h-6 fill-current" />
            </div>
            Create New Safety QR IDs
          </h1>
          <p className="text-sm font-medium text-slate-400 mt-1">Generate high-security QR identities for vehicles, students, pets and property.</p>
        </div>
      </div>

      <div className="flex-1 overflow-auto px-10 py-8 no-scrollbar scroll-smooth">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 h-fit pb-20">
            <div className="lg:col-span-8">
               <form onSubmit={handleSubmit} className="space-y-6">
                  {products.map((p, idx) => (
                    <div key={p.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 shadow-sm relative">
                      {products.length > 1 && (
                        <button type="button" onClick={() => removeProduct(p.id)} className="absolute top-8 right-8 text-slate-300 hover:text-red-500 transition-colors">
                          <Trash2 size={24} />
                        </button>
                      )}
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                        {SAFETY_CATEGORIES.map((cat) => (
                          <button
                            key={cat.id} type="button" onClick={() => handleCategoryChange(p.id, cat.id)}
                            className={`flex flex-col items-center gap-2 p-4 rounded-3xl border-2 transition-all ${p.category === cat.id ? 'border-blue-500 bg-blue-50/50 text-blue-600 shadow-lg shadow-blue-500/10' : 'border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 text-slate-400 hover:text-slate-600'}`}
                          >
                            <cat.icon size={20} />
                            <span className="text-[9px] font-black uppercase tracking-tight text-center leading-none">{cat.name}</span>
                          </button>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                             <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Identity Title (e.g. Car QR)</label>
                             <input required value={p.name} onChange={(e) => updateProduct(p.id, { name: e.target.value })} placeholder="e.g. My Vehicle Safety Tag" className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-50 rounded-[1.2rem] font-bold text-sm outline-none focus:border-blue-500/50 transition-all"/>
                          </div>
                          <div className="space-y-2">
                             <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Safety Brand</label>
                             <input value={p.brand} onChange={(e) => updateProduct(p.id, { brand: e.target.value })} className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-50 rounded-[1.2rem] font-bold text-sm outline-none focus:border-blue-500/50 transition-all"/>
                          </div>
                      </div>

                      <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                         <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Safety Metadata (Visible on Scan)</h4>
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                           {p.dynamicFields.map((field, fIdx) => (
                             <div key={fIdx} className="flex gap-2">
                               <input placeholder="Label" value={field.label} onChange={(e) => updateDynamicField(p.id, fIdx, 'label', e.target.value)} className="w-1/3 px-4 py-3 bg-slate-50 rounded-xl font-bold text-xs" />
                               <input placeholder="Value" value={field.value} onChange={(e) => updateDynamicField(p.id, fIdx, 'value', e.target.value)} className="flex-1 px-4 py-3 bg-slate-50 rounded-xl font-bold text-xs" />
                             </div>
                           ))}
                         </div>
                         <button type="button" onClick={() => addDynamicField(p.id)} className="mt-4 text-[10px] font-black text-blue-600 uppercase tracking-widest hover:underline">+ Add Custom Field</button>
                      </div>
                    </div>
                  ))}
                  <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white py-6 rounded-[1.5rem] font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20">
                     {loading ? <Loader2 className="animate-spin" /> : <>Generate Safety IDs <ShieldCheck size={18} /></>}
                  </button>
               </form>
            </div>

            <div className="lg:col-span-4">
               <div className="sticky top-8 space-y-6">
                  {qrResults.length > 0 ? (
                    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border-2 border-blue-500/20 overflow-hidden">
                        <div className="p-6 bg-blue-50 flex justify-between items-center border-b border-blue-100">
                           <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 flex items-center gap-2">
                              <CheckCircle2 size={14} /> {qrResults.length} Safety IDs Generated
                           </span>
                        </div>
                        <div className="p-8 space-y-6 max-h-[600px] overflow-auto no-scrollbar">
                           {qrResults.map((res, idx) => (
                             <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-3xl border border-slate-100">
                                <div className="size-20 bg-white p-1 rounded-xl shadow-sm overflow-hidden shrink-0">
                                   <img src={`${apiUrl}${res.qrImagePath}`} className="w-full h-full object-contain" alt="QR" />
                                </div>
                                <div className="flex-1 min-w-0">
                                   <h4 className="font-mono text-sm font-black text-blue-600 truncate">{res.productCode}</h4>
                                   <p className="text-[10px] font-bold text-slate-400 uppercase truncate">{res.name}</p>
                                </div>
                             </div>
                           ))}
                        </div>
                    </div>
                  ) : (
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border-4 border-dashed border-slate-200 p-16 text-center">
                        <QrIcon size={40} className="mx-auto mb-4 text-slate-200" />
                        <p className="text-xs font-black text-slate-300 uppercase tracking-widest">New IDs will appear here</p>
                    </div>
                  )}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
