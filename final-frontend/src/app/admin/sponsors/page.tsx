"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { 
  Plus, Edit2, Trash2, Check, X, Loader2, 
  Building2, Globe, FileText, Image as ImageIcon,
  ExternalLink, Info, CheckCircle2, XCircle
} from "lucide-react";
import toast from "react-hot-toast";

interface Sponsor {
  id: string;
  name: string;
  logo: string | null;
  website: string | null;
  description: string | null;
  isActive: boolean;
  _count: {
    tags: number;
  };
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function SponsorsPage() {
  const [loading, setLoading] = useState(true);
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSponsor, setEditingSponsor] = useState<Sponsor | null>(null);
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    website: "",
    description: "",
    isActive: true
  });
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const fetchSponsors = async () => {
    setLoading(true);
    try {
      const response = await api.get("/sponsors");
      setSponsors(response.data.sponsors);
    } catch (error) {
      toast.error("Failed to fetch sponsors");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSponsors();
  }, []);

  const handleOpenModal = (sponsor: Sponsor | null = null) => {
    if (sponsor) {
      setEditingSponsor(sponsor);
      setFormData({
        name: sponsor.name,
        website: sponsor.website || "",
        description: sponsor.description || "",
        isActive: sponsor.isActive
      });
      setLogoPreview(sponsor.logo ? `${API_URL}${sponsor.logo}` : null);
    } else {
      setEditingSponsor(null);
      setFormData({
        name: "",
        website: "",
        description: "",
        isActive: true
      });
      setLogoPreview(null);
    }
    setLogoFile(null);
    setIsModalOpen(true);
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setLogoFile(file);
    if (file) {
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("website", formData.website);
    data.append("description", formData.description);
    data.append("isActive", formData.isActive.toString());
    if (logoFile) {
      data.append("logo", logoFile);
    }

    try {
      if (editingSponsor) {
        await api.put(`/sponsors/${editingSponsor.id}`, data, {
          headers: { "Content-Type": "multipart/form-data" }
        });
        toast.success("Sponsor updated successfully");
      } else {
        await api.post("/sponsors", data, {
          headers: { "Content-Type": "multipart/form-data" }
        });
        toast.success("Sponsor created successfully");
      }
      setIsModalOpen(false);
      fetchSponsors();
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Operation failed");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure? This will unlink all tags associated with this sponsor.")) return;
    try {
      await api.delete(`/sponsors/${id}`);
      toast.success("Sponsor deleted");
      fetchSponsors();
    } catch (error) {
      toast.error("Failed to delete sponsor");
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50/50 dark:bg-slate-950">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-800 dark:text-white flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-xl text-primary">
               <Building2 className="w-6 h-6" />
            </div>
            Corporate Sponsors
          </h1>
          <p className="text-sm font-medium text-slate-400 mt-1">Manage brand partners and their visual presence on QR tags.</p>
        </div>
        
        <button 
          onClick={() => handleOpenModal()}
          className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-orange-600 text-white rounded-2xl text-sm font-black transition-all shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
        >
          <Plus className="w-5 h-5" />
          Add New Sponsor
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto px-10 py-8 no-scrollbar">
        {loading ? (
           <div className="py-20 flex flex-col items-center justify-center gap-4">
              <Loader2 className="w-10 h-10 text-primary animate-spin" />
              <p className="text-sm font-bold text-slate-400">Loading sponsor directory...</p>
           </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden group hover:scale-[1.02] transition-all duration-300">
                 <div className="h-40 bg-slate-50 dark:bg-slate-800/50 relative flex items-center justify-center p-8">
                    {sponsor.logo ? (
                       <img 
                         src={`${API_URL}${sponsor.logo}`} 
                         alt={sponsor.name}
                         className="max-h-full max-w-full object-contain filter drop-shadow-lg"
                       />
                    ) : (
                       <div className="size-16 bg-slate-200 dark:bg-slate-700 rounded-2xl flex items-center justify-center text-slate-400">
                          <ImageIcon className="w-8 h-8" />
                       </div>
                    )}
                    
                    <div className="absolute top-4 right-4">
                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tight flex items-center gap-2 border shadow-sm ${
                          sponsor.isActive ? 'bg-white text-emerald-600 border-emerald-100' : 'bg-white text-red-600 border-red-100'
                        }`}>
                          <div className={`size-1.5 rounded-full ${sponsor.isActive ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
                          {sponsor.isActive ? 'Active' : 'Draft'}
                        </span>
                    </div>
                 </div>

                 <div className="p-8">
                    <div className="flex items-center justify-between gap-2 mb-2">
                       <h3 className="text-lg font-black text-slate-800 dark:text-white uppercase truncate">{sponsor.name}</h3>
                       {sponsor.website && (
                         <a href={sponsor.website} target="_blank" className="text-primary hover:scale-110 transition-all">
                            <ExternalLink className="w-4 h-4" />
                         </a>
                       )}
                    </div>
                    <p className="text-xs font-bold text-slate-400 line-clamp-2 min-h-[2rem] mb-6 lowercase leading-relaxed">
                       {sponsor.description || 'No description provided for this sponsor.'}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-slate-50 dark:border-slate-800">
                       <div className="flex flex-col">
                          <span className="text-[10px] font-black uppercase text-slate-400">Linked Tags</span>
                          <span className="text-sm font-black text-slate-700 dark:text-slate-200">{sponsor._count.tags} <span className="text-[10px] text-slate-400">Units</span></span>
                       </div>

                       <div className="flex gap-2">
                          <button 
                            onClick={() => handleOpenModal(sponsor)}
                            className="size-10 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-400 hover:text-primary transition-all"
                          >
                             <Edit2 className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleDelete(sponsor.id)}
                            className="size-10 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-400 hover:text-red-500 transition-all"
                          >
                             <Trash2 className="w-4 h-4" />
                          </button>
                       </div>
                    </div>
                 </div>
              </div>
            ))}

            {sponsors.length === 0 && !loading && (
               <div className="col-span-full py-32 text-center flex flex-col items-center">
                  <div className="size-20 bg-slate-50 dark:bg-slate-800/50 rounded-full flex items-center justify-center mb-6">
                    <Building2 className="w-8 h-8 text-slate-300" />
                  </div>
                  <h4 className="text-xl font-black text-slate-800 dark:text-white mb-2">No Sponsors Yet</h4>
                  <p className="text-sm font-bold text-slate-400 max-w-xs mx-auto mb-8">
                    Partner with brands and display their logos on your generated QR code tags.
                  </p>
                  <button 
                    onClick={() => handleOpenModal()}
                    className="px-8 py-3 bg-slate-800 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-slate-900 transition-all"
                  >
                    Register First Sponsor
                  </button>
               </div>
            )}
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-[3rem] p-12 shadow-2xl border border-slate-100 dark:border-slate-800 relative max-h-[95vh] overflow-y-auto no-scrollbar">
             <button 
               onClick={() => setIsModalOpen(false)}
               className="absolute top-10 right-10 size-10 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-slate-600 transition-all"
             >
               <X className="w-6 h-6" />
             </button>

             <h2 className="text-2xl font-black text-slate-800 dark:text-white mb-2 uppercase">
                {editingSponsor ? 'Edit Partner' : 'New Partnership'}
             </h2>
             <p className="text-slate-400 font-bold text-sm mb-10 lowercase">Define brand identity for QR tag placements.</p>

             <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest px-1">Partner Name</label>
                   <input 
                     className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-900 rounded-2xl text-sm font-bold transition-all outline-none"
                     placeholder="e.g. Reliance, TATA"
                     value={formData.name}
                     onChange={(e) => setFormData({...formData, name: e.target.value})}
                     required
                   />
                </div>

                <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest px-1">Brand Logo</label>
                      <div className="relative group/logo">
                        <input 
                          type="file" 
                          accept="image/*"
                          className="absolute inset-0 opacity-0 cursor-pointer z-10"
                          onChange={handleLogoChange}
                        />
                        <div className="w-full h-14 bg-slate-50 dark:bg-slate-800 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl flex items-center justify-center gap-3 group-hover/logo:border-primary transition-all overflow-hidden relative">
                           {logoPreview ? (
                             <img src={logoPreview} className="absolute inset-0 w-full h-full object-contain p-2" />
                           ) : (
                             <>
                               <ImageIcon className="w-4 h-4 text-slate-400 group-hover/logo:text-primary" />
                               <span className="text-xs font-black text-slate-500 truncate px-2">
                                 Upload Logo
                               </span>
                             </>
                           )}
                        </div>
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest px-1">Official Website</label>
                      <input 
                        className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-900 rounded-2xl text-sm font-bold transition-all outline-none"
                        placeholder="https://..."
                        value={formData.website}
                        onChange={(e) => setFormData({...formData, website: e.target.value})}
                      />
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest px-1">Partnership Description</label>
                   <textarea 
                     rows={3}
                     className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-900 rounded-2xl text-sm font-bold transition-all outline-none no-scrollbar resize-none"
                     placeholder="Briefly describe the partnership..."
                     value={formData.description}
                     onChange={(e) => setFormData({...formData, description: e.target.value})}
                   />
                </div>

                <div className="flex items-center items-stretch justify-between gap-6 pt-6">
                   <div className="flex items-center gap-4 px-8 py-5 bg-slate-50 dark:bg-slate-800 rounded-[2rem] flex-1">
                      <div className="flex-1">
                         <p className="text-[10px] font-black uppercase text-slate-400">Campaign Status</p>
                         <p className="text-xs font-bold text-slate-600 dark:text-slate-200">{formData.isActive ? 'Active Promotion' : 'Paused'}</p>
                      </div>
                      <button 
                        type="button"
                        onClick={() => setFormData({...formData, isActive: !formData.isActive})}
                        className={`size-12 rounded-2xl flex items-center justify-center transition-all ${formData.isActive ? 'bg-emerald-500 text-white shadow-xl shadow-emerald-500/30' : 'bg-slate-300 text-white shadow-xl shadow-slate-300/30'}`}
                      >
                         {formData.isActive ? <Check className="w-6 h-6" /> : <X className="w-6 h-6" />}
                      </button>
                   </div>

                   <button 
                     type="submit"
                     className="px-12 bg-primary text-white text-sm font-black rounded-[2rem] hover:bg-orange-600 shadow-2xl shadow-primary/30 transition-all active:scale-95 py-5 uppercase tracking-widest"
                   >
                     {editingSponsor ? 'Keep Changes' : 'Activate Partner'}
                   </button>
                </div>
             </form>
          </div>
        </div>
      )}
    </div>
  );
}
