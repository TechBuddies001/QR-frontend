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
  FileBox, Droplet, Wheat, Shovel,
  BookOpen, HelpCircle
} from "lucide-react";

// --- Category definitions ---
const PRODUCT_CATEGORIES = [
  { 
    id: 'general', 
    name: 'General Product', 
    icon: Package, 
    fields: [] 
  },
  { 
    id: 'atta', 
    name: 'Atta / Flours', 
    icon: Wheat, 
    fields: [
      { label: 'Weight', value: '10kg' },
      { label: 'Type', value: 'Chakki Fresh / Multigrain' },
      { label: 'Fortified', value: 'Yes (Iron/Vitamin B12)' }
    ] 
  },
  { 
    id: 'oil', 
    name: 'Edible Oil / Ghee', 
    icon: Droplet, 
    fields: [
      { label: 'Volume', value: '1 Litre' },
      { label: 'Type', value: 'Mustard / Sunflower / Olive' },
      { label: 'Purity Label', value: 'AGMARK / Grade 1' }
    ] 
  },
  { 
    id: 'pulses', 
    name: 'Dal / Pulses', 
    icon: Shovel, 
    fields: [
      { label: 'Type', value: 'Arhar / Moong / Chana' },
      { label: 'Grade', value: 'Double Polished / Natural' },
      { label: 'Net Weight', value: '500g / 1kg' }
    ] 
  },
  { 
    id: 'rice', 
    name: 'Rice Varieties', 
    icon: FileBox, 
    fields: [
      { label: 'Variety', value: 'Basmati / Kolam / Mogra' },
      { label: 'Grain Length', value: 'Long Grain / Extra Long' },
      { label: 'Harvest Year', value: '2023-24' }
    ] 
  }
];

interface ProductForm {
  id: string; // Internal local ID for UI
  name: string;
  brand: string;
  batchNumber: string;
  mfgDate: string;
  expDate: string;
  mrp: string;
  category: string;
  dynamicFields: {label: string, value: string}[];
  selectedPhotos: File[];
}

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [activeMode, setActiveMode] = useState<'single'|'bulk'>('single');
  const [qrResults, setQrResults] = useState<any[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [apiUrl, setApiUrl] = useState('');

  // Unified product list
  const [products, setProducts] = useState<ProductForm[]>([{
    id: Math.random().toString(36).substring(7),
    name: "",
    brand: "",
    batchNumber: "",
    mfgDate: "",
    expDate: "",
    mrp: "",
    category: "general",
    dynamicFields: [],
    selectedPhotos: []
  }]);

  useEffect(() => {
    setApiUrl(window.location.origin);
  }, []);

  const downloadTemplate = () => {
    const headers = ["name", "brand", "batchNumber", "mfgDate", "expDate", "mrp", "productCode"];
    const sampleRows = [
      ["Basmati Rice 5kg", "Tarkshya Organic", "BATCH-001", "2024-01-01", "2025-01-01", "450", "PRD-SAMPLE-1"],
      ["Desi Ghee 1L", "Tarkshya Pure", "BATCH-002", "2024-02-01", "2025-02-01", "650", "PRD-SAMPLE-2"]
    ];
    
    const csvContent = [
      headers.join(","),
      ...sampleRows.map(row => row.join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "tarkshya_product_import_template.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Template Downloaded!");
  };

  const updateProduct = (id: string, updates: Partial<ProductForm>) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const handleCategoryChange = (id: string, categoryId: string) => {
    const category = PRODUCT_CATEGORIES.find(c => c.id === categoryId);
    if (!category) return;
    updateProduct(id, { category: categoryId, dynamicFields: category.fields.map(f => ({ ...f })) });
  };

  const addProduct = () => {
    setProducts(prev => [...prev, {
      id: Math.random().toString(36).substring(7),
      name: "",
      brand: "",
      batchNumber: "",
      mfgDate: "",
      expDate: "",
      mrp: "",
      category: "general",
      dynamicFields: [],
      selectedPhotos: []
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
    for (const p of products) {
      if (!p.name.trim()) {
        toast.error(`Please provide a name for product: ${p.name || 'Untitled'}`);
        return;
      }
    }

    setLoading(true);
    const toastId = toast.loading("Generating validation codes...");
    try {
      const generatedQrs = [];
      for (const p of products) {
        const data = new FormData();
        data.append('name', p.name);
        data.append('brand', p.brand);
        data.append('batchNumber', p.batchNumber);
        data.append('mfgDate', p.mfgDate);
        data.append('expDate', p.expDate);
        data.append('mrp', p.mrp);
        data.append('dynamicData', JSON.stringify(p.dynamicFields.filter(f => f.label.trim())));
        p.selectedPhotos.forEach(file => data.append('photos', file));

        const response = await api.post("/products", data, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        generatedQrs.push(response.data);
      }
      setQrResults(generatedQrs);
      toast.success(`Generated ${generatedQrs.length} validation codes!`, { id: toastId });
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Failed to generate products", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  const handleBulkUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formDataUpload = new FormData();
    formDataUpload.append('file', file);

    setLoading(true);
    const toastId = toast.loading("Processing bulk products...");
    try {
      const response = await api.post("/products/bulk", formDataUpload, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      toast.success(`Successfully generated ${response.data.count} product codes!`, { id: toastId });
      setQrResults(response.data.products || []); 
    } catch (error: any) {
      toast.error("Bulk upload failed", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50/50 dark:bg-slate-950">
       <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-800 dark:text-white flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-600">
               <Zap className="w-6 h-6 fill-current" />
            </div>
            Generate FMCG Validation Codes
          </h1>
          <p className="text-sm font-medium text-slate-400 mt-1">Create individual or batch verification codes for genuine products.</p>
        </div>
        
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
           <button 
             onClick={() => setActiveMode('single')}
             className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeMode === 'single' ? 'bg-white dark:bg-slate-700 text-emerald-600 shadow-xl shadow-black/5' : 'text-slate-500 hover:text-slate-800'}`}
           >
             SINGLE UNIT
           </button>
           <button 
             onClick={() => setActiveMode('bulk')}
             className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${activeMode === 'bulk' ? 'bg-white dark:bg-slate-700 text-emerald-600 shadow-xl shadow-black/5' : 'text-slate-500 hover:text-slate-800'}`}
           >
             BULK BATCH
           </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto px-10 py-8 no-scrollbar scroll-smooth">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 h-fit pb-20">
            <div className="lg:col-span-8">
               {activeMode === 'single' ? (
                 <form onSubmit={handleSubmit} className="space-y-6">
                    {products.map((p, idx) => (
                      <div key={p.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 shadow-sm relative animate-in fade-in slide-in-from-bottom-4 duration-300">
                        {products.length > 1 && (
                          <button type="button" onClick={() => removeProduct(p.id)} className="absolute top-8 right-8 text-slate-300 hover:text-red-500 transition-colors">
                            <Trash2 size={24} />
                          </button>
                        )}
                        <div className="flex items-center gap-4 mb-8">
                           <div className="size-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center font-black text-slate-800 dark:text-white">
                              {idx + 1}
                           </div>
                           <div>
                              <h3 className="text-sm font-black uppercase tracking-widest text-slate-800 dark:text-white">Product {idx + 1} Information</h3>
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Manual Data Entry</p>
                           </div>
                        </div>
                        {/* Category Selector */}
                        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
                          {PRODUCT_CATEGORIES.map((cat) => (
                            <button
                              key={cat.id} type="button" onClick={() => handleCategoryChange(p.id, cat.id)}
                              className={`flex flex-col items-center gap-2 p-4 rounded-3xl border-2 transition-all ${p.category === cat.id ? 'border-emerald-500 bg-emerald-50/50 text-emerald-600 shadow-lg shadow-emerald-500/10' : 'border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 text-slate-400 hover:text-slate-600'}`}
                            >
                              <cat.icon size={20} />
                              <span className="text-[9px] font-black uppercase tracking-tight text-center leading-none">{cat.name}</span>
                            </button>
                          ))}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Standard Fields */}
                            <div className="space-y-2">
                               <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Product Name</label>
                               <div className="relative group">
                                 <input required value={p.name} onChange={(e) => updateProduct(p.id, { name: e.target.value })} placeholder="e.g. Organic Green Tea" className="w-full pl-12 pr-4 py-4 bg-slate-50/50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-700/50 rounded-[1.2rem] font-bold text-sm outline-none focus:border-emerald-500/50 transition-all"/>
                                 <Package className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                               </div>
                            </div>
                            <div className="space-y-2">
                               <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Brand Name</label>
                               <div className="relative group">
                                 <input value={p.brand} onChange={(e) => updateProduct(p.id, { brand: e.target.value })} placeholder="e.g. NatureLeaf" className="w-full pl-12 pr-4 py-4 bg-slate-50/50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-700/50 rounded-[1.2rem] font-bold text-sm outline-none focus:border-emerald-500/50 transition-all"/>
                                 <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                               </div>
                            </div>
                            <div className="space-y-2">
                               <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Batch Number</label>
                               <div className="relative group">
                                 <input value={p.batchNumber} onChange={(e) => updateProduct(p.id, { batchNumber: e.target.value })} placeholder="e.g. BATCH-2024-X1" className="w-full pl-12 pr-4 py-4 bg-slate-50/50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-700/50 rounded-[1.2rem] font-bold text-sm outline-none focus:border-emerald-500/50 transition-all"/>
                                 <TagIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                               </div>
                            </div>
                            <div className="space-y-2">
                               <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">MRP (₹)</label>
                               <div className="relative group">
                                 <input type="number" value={p.mrp} onChange={(e) => updateProduct(p.id, { mrp: e.target.value })} placeholder="0.00" className="w-full pl-12 pr-4 py-4 bg-slate-50/50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-700/50 rounded-[1.2rem] font-bold text-sm outline-none focus:border-emerald-500/50 transition-all"/>
                                 <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 size-5" />
                               </div>
                            </div>
                        </div>
                        {/* Dynamic Field Rows */}
                        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                           <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Verification Metadata</h4>
                           <div className="space-y-3">
                             {p.dynamicFields.map((field, fIdx) => (
                               <div key={fIdx} className="flex gap-3 group/field">
                                 <input placeholder="Label" value={field.label} onChange={(e) => updateDynamicField(p.id, fIdx, 'label', e.target.value)} className="flex-1 px-4 py-3 bg-slate-50 dark:bg-slate-800 rounded-xl font-bold text-xs border border-slate-100 dark:border-slate-700" />
                                 <input placeholder="Value" value={field.value} onChange={(e) => updateDynamicField(p.id, fIdx, 'value', e.target.value)} className="flex-1 px-4 py-3 bg-slate-50 dark:bg-slate-800 rounded-xl font-bold text-xs border border-slate-100 dark:border-slate-700" />
                               </div>
                             ))}
                             <button type="button" onClick={() => addDynamicField(p.id)} className="text-[10px] font-black text-emerald-600 uppercase tracking-widest hover:underline">+ Add Verification Field</button>
                           </div>
                        </div>
                      </div>
                    ))}
                    <button type="submit" disabled={loading} className="w-full bg-emerald-600 text-white py-6 rounded-[1.5rem] font-black text-sm uppercase tracking-widest hover:bg-emerald-700 transition-all flex items-center justify-center gap-3">
                       {loading ? <Loader2 className="animate-spin" /> : <>Finalize & Generate Codes <Zap size={18} className="fill-current text-yellow-400" /></>}
                    </button>
                 </form>
               ) : (
                 <div className="space-y-8">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-16 text-center shadow-sm">
                       <div className="size-24 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                           <FileSpreadsheet className="size-12 text-emerald-600" />
                       </div>
                       <h3 className="text-2xl font-black mb-3 text-slate-800 dark:text-white">Bulk Verification Generation</h3>
                       <p className="text-slate-500 text-sm mb-10 max-w-md mx-auto font-medium">Upload a CSV file with your product details to generate hundreds of verification codes instantly.</p>
                       
                       <input type="file" ref={fileInputRef} className="hidden" accept=".csv" onChange={handleBulkUpload} />
                       <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                          <button 
                            onClick={() => fileInputRef.current?.click()}
                            className="bg-emerald-600 text-white px-12 py-5 rounded-[1.2rem] font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-emerald-600/20 flex items-center gap-3"
                          >
                            <Upload size={18} /> BROWSE CSV FILE
                          </button>
                          <button 
                            onClick={downloadTemplate}
                            className="flex items-center gap-2 text-[11px] font-black text-slate-500 hover:text-emerald-600 uppercase tracking-widest py-4 px-6 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-[1.1rem] hover:border-emerald-500 transition-all"
                          >
                             <Download size={16} /> DOWNLOAD TEMPLATE
                          </button>
                       </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-10 shadow-sm overflow-hidden relative">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-600">
                                <BookOpen size={24} />
                            </div>
                            <h4 className="text-lg font-black uppercase tracking-tight text-slate-800 dark:text-white">How it works (Instructions)</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                   <div className="size-6 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-[10px] font-black shrink-0">1</div>
                                   <p className="text-xs font-medium text-slate-600 dark:text-slate-400">Download the **CSV Template** using the button above.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                   <div className="size-6 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-[10px] font-black shrink-0">2</div>
                                   <p className="text-xs font-medium text-slate-600 dark:text-slate-400">Open it in **Excel or Google Sheets** and fill in your product details.</p>
                                </div>
                                <div className="flex items-start gap-3">
                                   <div className="size-6 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-[10px] font-black shrink-0">3</div>
                                   <p className="text-xs font-medium text-slate-600 dark:text-slate-400">Keep standard **Headers** as they are. You can **ADD NEW COLUMNS** for extra metadata (e.g. "Origin", "Grade").</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-[1.5rem] border border-slate-100 dark:border-slate-700">
                                <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">Required CSV Headers + Custom Fields:</h5>
                                <div className="flex flex-wrap gap-2">
                                    {["name", "brand", "batchNumber", "mfgDate", "expDate", "mrp", "productCode"].map(h => (
                                        <code key={h} className="bg-white dark:bg-slate-900 px-3 py-1 rounded-lg text-[9px] font-mono font-bold text-blue-500 border border-slate-100 dark:border-slate-800">{h}</code>
                                    ))}
                                    <code className="bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-lg text-[9px] font-mono font-bold text-emerald-600 border border-emerald-100 dark:border-emerald-800/50">+ Extra Columns...</code>
                                </div>
                                <p className="mt-4 text-[9px] text-slate-400 font-bold uppercase italic leading-loose">Extra columns will automatically show as "Verification Metadata" on the product scan page.</p>
                            </div>
                        </div>
                    </div>
                 </div>
               )}
            </div>

            <div className="lg:col-span-4">
               <div className="sticky top-8 space-y-6">
                  {qrResults.length > 0 ? (
                    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border-2 border-emerald-500/20 overflow-hidden animate-in fade-in zoom-in-95">
                        <div className="p-6 bg-emerald-50 dark:bg-emerald-900/10 flex justify-between items-center border-b border-emerald-100 dark:border-emerald-900">
                           <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 flex items-center gap-2">
                              <CheckCircle2 size={14} /> {qrResults.length} Units Ready
                           </span>
                           <button onClick={() => setQrResults([])} className="text-[10px] font-black uppercase text-slate-400 hover:text-slate-600">Clear</button>
                        </div>
                        <div className="p-8 space-y-6 max-h-[600px] overflow-auto no-scrollbar">
                           {qrResults.map((res, idx) => (
                             <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700">
                                <div className="size-20 bg-white p-1 rounded-xl shadow-sm overflow-hidden shrink-0">
                                   <img 
                                     src={res.qrImagePath ? (res.qrImagePath.startsWith('http') ? res.qrImagePath : `${apiUrl}${res.qrImagePath}`) : '/api/fallback-qr'} 
                                     className="w-full h-full object-contain" alt="QR" 
                                   />
                                </div>
                                <div className="flex-1 min-w-0">
                                   <h4 className="font-mono text-sm font-black text-emerald-600 truncate">{res.productCode}</h4>
                                   <p className="text-[10px] font-bold text-slate-400 uppercase truncate">{res.name}</p>
                                   <div className="flex gap-2 mt-2">
                                      <button className="text-[9px] font-black text-emerald-600 bg-emerald-100 px-2 py-1 rounded">PNG</button>
                                      <button className="text-[9px] font-black text-slate-400 bg-slate-200 px-2 py-1 rounded">Verify</button>
                                   </div>
                                </div>
                             </div>
                           ))}
                        </div>
                    </div>
                  ) : (
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border-4 border-dashed border-slate-200 dark:border-slate-800 p-16 text-center">
                        <div className="size-20 bg-white dark:bg-slate-800 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl text-slate-200">
                           <QrIcon size={40} />
                        </div>
                        <p className="text-xs font-black text-slate-300 uppercase tracking-widest leading-relaxed">Waiting for Input...<br/>Results appear here</p>
                    </div>
                  )}

                  <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white relative group overflow-hidden">
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <AlertCircle className="text-emerald-400 size-5" />
                          <h5 className="font-black text-sm uppercase tracking-tight">System Notice</h5>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                          All generated codes are unique. Scan history and location tracking are enabled for these validation IDs.
                        </p>
                      </div>
                      <ShieldCheck className="absolute -bottom-4 -right-4 size-32 text-white/5 opacity-20" />
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
