"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { 
  Plus, Edit2, Trash2, CheckCircle2, XCircle, 
  Loader2, Zap, Shield, Crown, LayoutGrid, Check, X, Info
} from "lucide-react";
import toast from "react-hot-toast";

interface Plan {
  id: string;
  name: string;
  displayName: string;
  price: number;
  validityDays: number;
  features: string[];
  isActive: boolean;
}

export default function PlansPage() {
  const [loading, setLoading] = useState(true);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState<Plan | null>(null);
  const [availableFeatures, setAvailableFeatures] = useState<string[]>([]);
  const [customFeature, setCustomFeature] = useState("");
  
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    displayName: "",
    price: "",
    validityDays: "365",
    features: [] as string[],
    isActive: true
  });
  const [newFeature, setNewFeature] = useState("");

  const fetchPlans = async () => {
    setLoading(true);
    try {
      const response = await api.get("/plans?showAll=true");
      setPlans(response.data.plans);
      
      const settingsRes = await api.get("/settings");
      if (settingsRes.data.settings?.plan_features) {
         setAvailableFeatures(JSON.parse(settingsRes.data.settings.plan_features));
      } else {
         const def = ['1 QR Tag', 'Call Masking', 'Scan Alerts', 'Email Support', 'Priority Support', 'Sponsor Branding'];
         setAvailableFeatures(def);
      }
    } catch (error) {
      toast.error("Failed to fetch plans & features");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const handleOpenModal = (plan: Plan | null = null) => {
    if (plan) {
      setEditingPlan(plan);
      setFormData({
        name: plan.name,
        displayName: plan.displayName,
        price: plan.price.toString(),
        validityDays: plan.validityDays.toString(),
        features: plan.features,
        isActive: plan.isActive
      });
    } else {
      setEditingPlan(null);
      setFormData({
        name: "",
        displayName: "",
        price: "",
        validityDays: "365",
        features: [],
        isActive: true
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        price: parseFloat(formData.price),
        validityDays: parseInt(formData.validityDays)
      };

      if (editingPlan) {
        await api.put(`/plans/${editingPlan.id}`, payload);
        toast.success("Plan updated successfully");
      } else {
        await api.post("/plans", payload);
        toast.success("Plan created successfully");
      }
      setIsModalOpen(false);
      fetchPlans();
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Operation failed");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this plan?")) return;
    try {
      await api.delete(`/plans/${id}`);
      toast.success("Plan deleted successfully");
      fetchPlans();
    } catch (error) {
      toast.error("Failed to delete plan. It might be in use.");
    }
  };

  const addFeature = () => {
    if (!newFeature || formData.features.includes(newFeature)) return;
    setFormData({ ...formData, features: [...formData.features, newFeature] });
    setNewFeature("");
  };

  const addGlobalFeature = async () => {
    if (!customFeature || availableFeatures.includes(customFeature)) return;
    const newList = [...availableFeatures, customFeature];
    setAvailableFeatures(newList);
    setCustomFeature("");
    try {
      await api.put("/settings", { plan_features: JSON.stringify(newList) });
      toast.success("Feature added to global master list");
    } catch(e) {
      toast.error("Failed to save global feature");
    }
  };

  const deleteGlobalFeature = async (featureToDelete: string) => {
    const newList = availableFeatures.filter(f => f !== featureToDelete);
    setAvailableFeatures(newList);
    if (newFeature === featureToDelete) setNewFeature(""); 
    
    try {
      await api.put("/settings", { plan_features: JSON.stringify(newList) });
      toast.success("Feature removed from global master list");
    } catch(e) {
      toast.error("Failed to delete feature");
    }
  };

  const removeFeature = (index: number) => {
    const updatedFeatures = formData.features.filter((_, i) => i !== index);
    setFormData({ ...formData, features: updatedFeatures });
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50/50 dark:bg-slate-950">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-800 dark:text-white flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-xl text-primary">
               <Zap className="w-6 h-6" />
            </div>
            Subscription Plans
          </h1>
          <p className="text-sm font-medium text-slate-400 mt-1">Configure pricing tiers and features for your customers.</p>
        </div>
        
        <button 
          onClick={() => handleOpenModal()}
          className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-orange-600 text-white rounded-2xl text-sm font-black transition-all shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
        >
          <Plus className="w-5 h-5" />
          Create New Plan
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto px-10 py-8 no-scrollbar">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden relative min-h-[400px]">
          {loading ? (
             <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <Loader2 className="w-10 h-10 text-primary animate-spin" />
                <p className="text-sm font-bold text-slate-400">Loading plans...</p>
             </div>
          ) : (
            <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-800">
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 w-[20%]">Plan Identity</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 w-[15%] text-center">Pricing</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 w-[45%]">Features Included</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 w-[10%]">Status</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 w-[10%] text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
                {plans.map((plan) => (
                  <tr key={plan.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-all group font-medium">
                    <td className="px-8 py-6">
                       <div className="flex flex-col gap-1">
                          <span className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-tight">
                            {plan.displayName}
                          </span>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md w-fit">
                            ID: {plan.name}
                          </span>
                       </div>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <div className="flex flex-col">
                        <span className="text-lg font-black text-primary">₹{plan.price}</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase">{plan.validityDays} Days Validity</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-wrap gap-1.5">
                        {plan.features.map((feature, idx) => (
                          <span key={idx} className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-black rounded-lg border border-emerald-100 dark:border-emerald-800/50">
                             <Check className="w-2.5 h-2.5" />
                             {feature}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-8 py-6">
                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tight flex items-center gap-2 border w-fit ${
                          plan.isActive ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-red-50 text-red-600 border-red-100'
                        }`}>
                          <div className={`size-1.5 rounded-full ${plan.isActive ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
                          {plan.isActive ? 'Live' : 'Paused'}
                        </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => handleOpenModal(plan)}
                          className="size-9 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-400 hover:text-primary hover:bg-primary/5 transition-all"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(plan.id)}
                          className="size-9 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all font-bold"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {plans.length === 0 && !loading && (
                   <tr>
                     <td colSpan={5} className="px-8 py-32 text-center">
                        <div className="flex flex-col items-center">
                           <div className="size-20 bg-slate-50 dark:bg-slate-800/50 rounded-full flex items-center justify-center mb-6">
                              <Info className="w-8 h-8 text-slate-300" />
                           </div>
                           <h4 className="text-xl font-black text-slate-800 dark:text-white mb-2">No Plans Configured</h4>
                           <p className="text-sm font-bold text-slate-400 max-w-xs mx-auto">
                              Click 'Create New Plan' to define your first subscription tier.
                           </p>
                        </div>
                     </td>
                   </tr>
                 )}
              </tbody>
            </table>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-[2.5rem] p-10 shadow-2xl border border-slate-100 dark:border-slate-800 max-h-[90vh] overflow-y-auto no-scrollbar relative">
             <button 
               onClick={() => setIsModalOpen(false)}
               className="absolute top-8 right-8 size-10 flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-slate-600 transition-all"
             >
               <X className="w-5 h-5" />
             </button>

             <h2 className="text-2xl font-black text-slate-800 dark:text-white mb-2">
                {editingPlan ? 'Edit Pricing Plan' : 'Create New Plan'}
             </h2>
             <p className="text-slate-400 font-bold text-sm mb-10">Configure the pricing and features available to users.</p>

             <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest px-1">Internal Name (Slug)</label>
                      <input 
                        className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-900 rounded-2xl text-sm font-bold transition-all outline-none"
                        placeholder="e.g. basic"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        disabled={!!editingPlan}
                        required
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest px-1">Display Name</label>
                      <input 
                        className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-900 rounded-2xl text-sm font-bold transition-all outline-none"
                        placeholder="e.g. Starter Pack"
                        value={formData.displayName}
                        onChange={(e) => setFormData({...formData, displayName: e.target.value})}
                        required
                      />
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest px-1">Price (₹)</label>
                      <input 
                        type="number"
                        className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-900 rounded-2xl text-sm font-bold transition-all outline-none"
                        placeholder="0.00"
                        value={formData.price}
                        onChange={(e) => setFormData({...formData, price: e.target.value})}
                        required
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest px-1">Validity (Days)</label>
                      <input 
                        type="number"
                        className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-900 rounded-2xl text-sm font-bold transition-all outline-none"
                        placeholder="365"
                        value={formData.validityDays}
                        onChange={(e) => setFormData({...formData, validityDays: e.target.value})}
                        required
                      />
                   </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest px-1 block">Plan Features List</label>
                  <div className="flex gap-2">
                    <select 
                      className="flex-1 px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-900 rounded-2xl text-sm font-bold transition-all outline-none appearance-none"
                      value={newFeature}
                      onChange={(e) => setNewFeature(e.target.value)}
                    >
                      <option value="">Select a feature from master list...</option>
                      {availableFeatures.map(f => (
                         <option key={f} value={f}>{f}</option>
                      ))}
                    </select>
                    <button 
                      type="button"
                      onClick={addFeature}
                      disabled={!newFeature}
                      className="px-6 bg-slate-800 text-white rounded-2xl font-black text-xs hover:bg-slate-900 transition-all uppercase disabled:opacity-50"
                    >
                      Add To Plan
                    </button>
                  </div>
                  
                  <div className="mt-4 p-4 bg-slate-50/50 dark:bg-slate-800/10 rounded-2xl border border-slate-100 dark:border-slate-800/50">
                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest px-1 block mb-3">Manage Global Master Features</label>
                    <div className="flex gap-2 mb-4">
                      <input 
                        className="flex-1 px-4 py-2.5 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 focus:border-slate-300 dark:focus:border-slate-700 rounded-xl text-xs font-bold transition-all outline-none"
                        placeholder="Type a new global feature here..."
                        value={customFeature}
                        onChange={(e) => setCustomFeature(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addGlobalFeature())}
                      />
                      <button 
                        type="button"
                        onClick={addGlobalFeature}
                        className="px-4 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-xl font-black text-[10px] hover:bg-slate-300 dark:hover:bg-slate-600 transition-all uppercase whitespace-nowrap"
                      >
                        Add Global
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                       {availableFeatures.map(f => (
                         <div key={f} className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 group">
                           {f}
                           <button 
                             type="button" 
                             onClick={() => deleteGlobalFeature(f)} 
                             className="text-slate-300 hover:text-red-500 opacity-50 group-hover:opacity-100 transition-all"
                             title={`Delete ${f}`}
                           >
                             <X className="w-3.5 h-3.5" />
                           </button>
                         </div>
                       ))}
                       {availableFeatures.length === 0 && <span className="text-[10px] text-slate-400 italic font-medium">No master features exist.</span>}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {formData.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300">
                        {feature}
                        <button type="button" onClick={() => removeFeature(idx)} className="text-slate-400 hover:text-red-500">
                           <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                    {formData.features.length === 0 && <p className="text-[10px] font-bold text-slate-400 uppercase italic">No features added yet</p>}
                  </div>
                </div>

                <div className="flex items-center items-stretch justify-between gap-6 pt-6">
                   <div className="flex items-center gap-4 px-6 py-4 bg-slate-50 dark:bg-slate-800 rounded-[1.5rem] flex-1">
                      <div className="flex-1">
                         <p className="text-[10px] font-black uppercase text-slate-400 px-1">Plan Visibility</p>
                         <p className="text-xs font-bold text-slate-600 dark:text-slate-300 px-1">{formData.isActive ? 'Visible to customers' : 'Hidden from shop'}</p>
                      </div>
                      <button 
                        type="button"
                        onClick={() => setFormData({...formData, isActive: !formData.isActive})}
                        className={`size-10 rounded-xl flex items-center justify-center transition-all ${formData.isActive ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'bg-slate-400 text-white shadow-lg shadow-slate-400/20'}`}
                      >
                         {formData.isActive ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
                      </button>
                   </div>

                   <button 
                     type="submit"
                     className="px-10 bg-primary text-white text-sm font-black rounded-[1.5rem] hover:bg-orange-600 shadow-xl shadow-primary/20 transition-all active:scale-95 py-4"
                   >
                     {editingPlan ? 'Save Changes' : 'Publish Plan'}
                   </button>
                </div>
             </form>
          </div>
        </div>
      )}
    </div>
  );
}
