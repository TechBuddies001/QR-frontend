
"use client";

import { useEffect, useState, Suspense } from "react";
import api from "@/lib/api";
import { 
  Edit2, Trash2, Plus, Loader2, 
  Package, FolderTree, X, Image as ImageIcon, 
  Video, ShieldCheck, AlertTriangle, Smartphone
} from "lucide-react";
import toast from "react-hot-toast";

interface SectionCard {
  title: string;
  text: string;
  image: string;
}

interface TrackingCard {
  title: string;
  icon: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  features?: string;
  benefits?: string;
  heroImage?: string;
  preventionHeading?: string;
  preventionText?: string;
  preventionCards?: string;
  emergencyHeading?: string;
  emergencyText?: string;
  emergencyCards?: string;
  howItWorksHeading?: string;
  howItWorksText?: string;
  videoUrl?: string;
  trackingHeading?: string;
  trackingText?: string;
  trackingCards?: string;
  _count?: {
    products: number;
  };
}

function CategoriesContent() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("basic");
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    icon: "",
    color: "#C9A84C",
    features: [] as string[],
    benefits: "",
    heroImage: "",
    preventionHeading: "",
    preventionText: "",
    preventionCards: [] as SectionCard[],
    emergencyHeading: "",
    emergencyText: "",
    emergencyCards: [] as SectionCard[],
    howItWorksHeading: "",
    howItWorksText: "",
    videoUrl: "",
    trackingHeading: "",
    trackingText: "",
    trackingCards: [] as TrackingCard[]
  });

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response = await api.get("/categories");
      setCategories(response.data.categories || []);
    } catch (error) {
      toast.error("Failed to fetch categories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: string, idx?: number, listField?: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const toastId = toast.loading("Uploading image...");
    try {
      const data = new FormData();
      data.append("file", file);
      const res = await api.post("/upload", data);
      const filePath = res.data.filePath;

      if (listField && idx !== undefined) {
         const list = [...(formData as any)[listField]];
         list[idx] = { ...list[idx], image: filePath };
         setFormData({ ...formData, [listField]: list });
      } else {
         setFormData({ ...formData, [field]: filePath });
      }
      toast.success("Uploaded!", { id: toastId });
    } catch (err) {
      toast.error("Upload failed", { id: toastId });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const loadingToast = toast.loading(editingCategory ? "Updating..." : "Creating...");
    try {
      if (editingCategory) {
        await api.put(`/categories/${editingCategory.id}`, formData);
        toast.success("Category updated successfully", { id: loadingToast });
      } else {
        await api.post("/categories", formData);
        toast.success("Category created successfully", { id: loadingToast });
      }
      setIsModalOpen(false);
      setEditingCategory(null);
      fetchCategories();
    } catch (error) {
      toast.error("Failed to save category", { id: loadingToast });
    }
  };

  const openEditModal = (category: Category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name || "",
      description: category.description || "",
      icon: category.icon || "",
      color: category.color || "#C9A84C",
      features: category.features ? JSON.parse(category.features as any) : [],
      benefits: category.benefits || "",
      heroImage: category.heroImage || "",
      preventionHeading: category.preventionHeading || "",
      preventionText: category.preventionText || "",
      preventionCards: category.preventionCards ? JSON.parse(category.preventionCards as any) : [],
      emergencyHeading: category.emergencyHeading || "",
      emergencyText: category.emergencyText || "",
      emergencyCards: category.emergencyCards ? JSON.parse(category.emergencyCards as any) : [],
      howItWorksHeading: category.howItWorksHeading || "",
      howItWorksText: category.howItWorksText || "",
      videoUrl: category.videoUrl || "",
      trackingHeading: category.trackingHeading || "",
      trackingText: category.trackingText || "",
      trackingCards: category.trackingCards ? JSON.parse(category.trackingCards as any) : []
    });
    setIsModalOpen(true);
    setActiveTab("basic");
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50/50 dark:bg-slate-950 font-sans">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-800 dark:text-white flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 rounded-xl text-blue-600">
               <FolderTree className="w-6 h-6" />
            </div>
            Category Ecosystem
          </h1>
          <p className="text-sm font-medium text-slate-400 mt-1">Design rich landing pages for your safety modules.</p>
        </div>
        
        <button 
          onClick={() => { setEditingCategory(null); setFormData({name: "", description: "", icon: "", color: "#C9A84C", features: [], benefits: "", heroImage: "", preventionHeading: "", preventionText: "", preventionCards: [], emergencyHeading: "", emergencyText: "", emergencyCards: [], howItWorksHeading: "", howItWorksText: "", videoUrl: "", trackingHeading: "", trackingText: "", trackingCards: []}); setIsModalOpen(true); }}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-sm font-black transition-all shadow-xl shadow-blue-600/20"
        >
          <Plus className="w-5 h-5" /> Add New Category
        </button>
      </div>

      <div className="flex-1 overflow-auto px-10 py-8 no-scrollbar">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full py-32 flex flex-col items-center justify-center gap-4">
              <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Synchronizing Database...</p>
            </div>
          ) : (
            categories.map((cat) => (
              <div key={cat.id} className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="size-14 rounded-2xl flex items-center justify-center text-white shadow-lg font-black text-xl" style={{ backgroundColor: cat.color || '#C9A84C' }}>
                    {cat.name.charAt(0)}
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
                    <button onClick={() => openEditModal(cat)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 hover:text-blue-600 transition-colors"><Edit2 size={16} /></button>
                    <button onClick={async () => {
                        if(confirm("Delete category?")) {
                            await api.delete(`/categories/${cat.id}`);
                            fetchCategories();
                        }
                    }} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg text-slate-400 hover:text-red-600 transition-colors"><Trash2 size={16} /></button>
                  </div>
                </div>
                <h3 className="text-lg font-black text-slate-800 dark:text-white mb-1">{cat.name}</h3>
                <p className="text-sm text-slate-500 line-clamp-2 mb-4">{cat.description || "No description."}</p>
                <div className="flex items-center gap-2 pt-4 border-t border-slate-50 dark:border-slate-800">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Status:</span>
                  <span className="text-[10px] px-2 py-1 bg-green-500/10 text-green-600 rounded-lg font-black">ACTIVE ECOSYSTEM</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-[3rem] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="px-10 py-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-black text-slate-800 dark:text-white">
                        {editingCategory ? "Update Category Protocol" : "New Safety Protocol"}
                    </h2>
                    <p className="text-sm text-slate-400 font-bold mt-1 uppercase tracking-widest">Configuring landing page structure</p>
                </div>
                <button onClick={() => setIsModalOpen(false)} className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-500 hover:rotate-90 transition-transform"><X size={20} /></button>
            </div>

            <div className="flex border-b border-slate-100 dark:border-slate-800 bg-slate-50/50">
                {["basic", "prevention", "emergency", "how-it-works", "tracking"].map((tab) => (
                    <button 
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-8 py-4 text-[10px] font-black uppercase tracking-widest transition-all border-b-2 ${activeTab === tab ? "border-blue-600 text-blue-600 bg-white dark:bg-slate-900" : "border-transparent text-slate-400 hover:text-slate-600"}`}
                    >
                        {tab.replace("-", " ")}
                    </button>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="flex-1 overflow-auto p-10 space-y-8 no-scrollbar">
                {activeTab === "basic" && (
                    <div className="grid grid-cols-2 gap-8 animate-in slide-in-from-bottom-4 duration-300">
                        <div className="space-y-6">
                            <div className="space-y-1.5 flex flex-col">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Category Name</label>
                                <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="px-5 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl font-bold text-sm focus:border-blue-500 outline-none transition-all" />
                            </div>
                            <div className="space-y-1.5 flex flex-col">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Icon Identifier</label>
                                <input value={formData.icon} onChange={e => setFormData({...formData, icon: e.target.value})} className="px-5 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl font-bold text-sm focus:border-blue-500 outline-none transition-all" placeholder="Shield | Scan | Lock etc." />
                            </div>
                            <div className="space-y-1.5 flex flex-col">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Hero Image</label>
                                <div className="flex gap-4">
                                    <input type="file" onChange={e => handleFileUpload(e, "heroImage")} className="hidden" id="hero-upload" />
                                    <label htmlFor="hero-upload" className="flex-1 px-5 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl cursor-pointer flex items-center justify-center gap-2 text-slate-400 font-bold hover:border-blue-500 transition-all">
                                        <ImageIcon size={20} /> Upload Banner
                                    </label>
                                    {formData.heroImage && <div className="w-16 h-16 rounded-2xl border-2 border-blue-500/20 overflow-hidden bg-white"><img src={formData.heroImage} className="w-full h-full object-cover" /></div>}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="space-y-1.5 flex flex-col">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Core Description</label>
                                <textarea rows={5} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="px-5 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl font-bold text-sm focus:border-blue-500 outline-none transition-all" />
                            </div>
                            <div className="space-y-1.5 flex flex-col">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Accent Theme Color</label>
                                <input type="color" value={formData.color} onChange={e => setFormData({...formData, color: e.target.value})} className="h-14 w-full bg-slate-50 border-2 border-slate-100 rounded-2xl cursor-pointer" />
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "prevention" && (
                    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-300">
                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-1.5 flex flex-col">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Section Heading</label>
                                <input value={formData.preventionHeading} onChange={e => setFormData({...formData, preventionHeading: e.target.value})} className="px-5 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl font-bold text-sm" />
                            </div>
                            <div className="space-y-1.5 flex flex-col">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Section Text</label>
                                <textarea value={formData.preventionText} onChange={e => setFormData({...formData, preventionText: e.target.value})} className="px-5 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl font-bold text-sm" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2"><ShieldCheck className="text-blue-500" size={14} /> Capability Cards</h4>
                            <div className="grid grid-cols-2 gap-4">
                                {(formData.preventionCards || []).map((card, idx) => (
                                    <div key={idx} className="p-5 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 space-y-3">
                                        <input value={card.title} onChange={e => {
                                            const list = [...formData.preventionCards];
                                            list[idx].title = e.target.value;
                                            setFormData({...formData, preventionCards: list});
                                        }} className="w-full bg-transparent font-black text-sm outline-none border-b border-slate-200 dark:border-slate-700 pb-2" placeholder="Card Title" />
                                        <textarea value={card.text} onChange={e => {
                                            const list = [...formData.preventionCards];
                                            list[idx].text = e.target.value;
                                            setFormData({...formData, preventionCards: list});
                                        }} className="w-full bg-transparent text-xs font-bold outline-none h-16" placeholder="Card details..." />
                                        <input type="file" onChange={e => handleFileUpload(e, "", idx, "preventionCards")} className="text-[10px]" />
                                    </div>
                                ))}
                                <button type="button" onClick={() => setFormData({...formData, preventionCards: [...(formData.preventionCards || []), {title: "", text: "", image: ""}]})} className="p-10 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-3xl flex items-center justify-center text-slate-400 font-black text-xs hover:border-blue-500 transition-all">+ ADD NEW CARD</button>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "emergency" && (
                    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-300">
                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-1.5 flex flex-col">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Section Heading</label>
                                <input value={formData.emergencyHeading} onChange={e => setFormData({...formData, emergencyHeading: e.target.value})} className="px-5 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl font-bold text-sm" />
                            </div>
                            <div className="space-y-1.5 flex flex-col">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Section Text</label>
                                <textarea value={formData.emergencyText} onChange={e => setFormData({...formData, emergencyText: e.target.value})} className="px-5 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl font-bold text-sm" />
                            </div>
                        </div>
                        <div className="space-y-4">
                             <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2"><AlertTriangle className="text-red-500" size={14} /> Emergency Modules</h4>
                             <div className="grid grid-cols-2 gap-4">
                                {(formData.emergencyCards || []).map((card, idx) => (
                                    <div key={idx} className="p-5 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 space-y-3">
                                        <input value={card.title} onChange={e => {
                                            const list = [...formData.emergencyCards];
                                            list[idx].title = e.target.value;
                                            setFormData({...formData, emergencyCards: list});
                                        }} className="w-full bg-transparent font-black text-sm outline-none border-b border-slate-200 dark:border-slate-700 pb-2" placeholder="Module Title" />
                                        <textarea value={card.text} onChange={e => {
                                            const list = [...formData.emergencyCards];
                                            list[idx].text = e.target.value;
                                            setFormData({...formData, emergencyCards: list});
                                        }} className="w-full bg-transparent text-xs font-bold outline-none h-16" placeholder="Module details..." />
                                        <input type="file" onChange={e => handleFileUpload(e, "", idx, "emergencyCards")} className="text-[10px]" />
                                    </div>
                                ))}
                                <button type="button" onClick={() => setFormData({...formData, emergencyCards: [...(formData.emergencyCards || []), {title: "", text: "", image: ""}]})} className="p-10 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-3xl flex items-center justify-center text-slate-400 font-black text-xs hover:border-blue-500 transition-all">+ ADD NEW MODULE</button>
                             </div>
                        </div>
                    </div>
                )}

                {activeTab === "how-it-works" && (
                    <div className="grid grid-cols-2 gap-8 animate-in slide-in-from-bottom-4 duration-300">
                        <div className="space-y-6">
                            <div className="space-y-1.5 flex flex-col">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Section Heading</label>
                                <input value={formData.howItWorksHeading} onChange={e => setFormData({...formData, howItWorksHeading: e.target.value})} className="px-5 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl font-bold text-sm" />
                            </div>
                            <div className="space-y-1.5 flex flex-col">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Video URL (YouTube)</label>
                                <div className="relative">
                                    <Video className="absolute left-4 top-4 text-slate-400" size={18} />
                                    <input value={formData.videoUrl} onChange={e => setFormData({...formData, videoUrl: e.target.value})} className="w-full pl-12 pr-5 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl font-bold text-sm" placeholder="https://youtube.com/watch?v=..." />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-1.5 flex flex-col">
                             <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Explanatory Text</label>
                             <textarea rows={6} value={formData.howItWorksText} onChange={e => setFormData({...formData, howItWorksText: e.target.value})} className="px-5 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl font-bold text-sm" />
                        </div>
                    </div>
                )}

                {activeTab === "tracking" && (
                    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-300">
                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-1.5 flex flex-col">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Tracking Heading</label>
                                <input value={formData.trackingHeading} onChange={e => setFormData({...formData, trackingHeading: e.target.value})} className="px-5 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl font-bold text-sm" />
                            </div>
                            <div className="space-y-1.5 flex flex-col">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Tracking Summary</label>
                                <textarea value={formData.trackingText} onChange={e => setFormData({...formData, trackingText: e.target.value})} className="px-5 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-2xl font-bold text-sm" />
                            </div>
                        </div>
                        <div className="space-y-4">
                             <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2"><Smartphone className="text-blue-500" size={14} /> Tracking Indicators</h4>
                             <div className="grid grid-cols-3 gap-4">
                                {(formData.trackingCards || []).map((card, idx) => (
                                    <div key={idx} className="p-5 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 flex flex-col items-center gap-3">
                                        <Smartphone size={24} className="text-slate-300" />
                                        <input value={card.title} onChange={e => {
                                            const list = [...formData.trackingCards];
                                            list[idx].title = e.target.value;
                                            setFormData({...formData, trackingCards: list});
                                        }} className="w-full bg-transparent text-center font-black text-xs outline-none" placeholder="Indicator Title" />
                                        <button type="button" onClick={() => setFormData({...formData, trackingCards: formData.trackingCards.filter((_, i) => i !== idx)})} className="text-red-500 text-[10px] font-black">REMOVE</button>
                                    </div>
                                ))}
                                <button type="button" onClick={() => setFormData({...formData, trackingCards: [...(formData.trackingCards || []), {title: "", icon: "Smartphone"}]})} className="p-8 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-3xl flex items-center justify-center text-slate-400 font-black text-[10px] hover:border-blue-500 transition-all">+ ADD INDICATOR</button>
                             </div>
                        </div>
                    </div>
                )}
            </form>

            <div className="px-10 py-6 bg-slate-50/50 dark:bg-slate-950/50 border-t border-slate-100 dark:border-slate-800 flex gap-4">
                <button onClick={handleSubmit} className="flex-1 bg-blue-600 py-4 rounded-[1.5rem] text-white font-black text-sm uppercase tracking-widest shadow-xl shadow-blue-600/20 hover:scale-[1.02] active:scale-95 transition-all">
                  {editingCategory ? "Commit Changes" : "Create Protocol"}
                </button>
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-10 py-4 bg-white dark:bg-slate-800 rounded-[1.5rem] text-slate-500 font-bold text-sm border border-slate-200 dark:border-slate-700">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center"><Loader2 className="w-10 h-10 text-blue-600 animate-spin" /></div>}>
      <CategoriesContent />
    </Suspense>
  );
}
