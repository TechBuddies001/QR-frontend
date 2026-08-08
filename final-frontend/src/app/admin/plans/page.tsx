"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { 
  Plus, Edit2, Trash2, CheckCircle2, XCircle, 
  Loader2, Zap, Shield, Crown, LayoutGrid, Check, X, Info,
  RotateCcw, Sparkles
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

const FEATURE_MATRIX = [
  { name: "Dynamic QR", basic: true, premium: true },
  { name: "Owner Information", basic: true, premium: true },
  { name: "Emergency Scan", basic: true, premium: true },
  { name: "Direct Call", basic: true, premium: false },
  { name: "Masked Call", basic: false, premium: true },
  { name: "WhatsApp Alert", basic: false, premium: true },
  { name: "Emergency Contact Routing", basic: false, premium: true },
  { name: "Call Privacy", basic: false, premium: true },
  { name: "Advanced Alerts", basic: false, premium: true },
];

export default function PlansPage() {
  const [loading, setLoading] = useState(true);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPlan, setEditingPlan] = useState<Plan | null>(null);
  const [availableFeatures, setAvailableFeatures] = useState<string[]>([]);
  const [customFeature, setCustomFeature] = useState("");
  const [resetting, setResetting] = useState(false);
  
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
      setPlans(response.data.plans || []);
      
      const masterList = response.data.masterFeatures || [
        'Dynamic QR', 'Owner Information', 'Emergency Scan', 'Direct Call',
        'Masked Call', 'WhatsApp Alert', 'Emergency Contact Routing', 'Call Privacy', 'Advanced Alerts'
      ];
      setAvailableFeatures(masterList);
    } catch (error) {
      toast.error("Failed to fetch plans & features");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  const handleResetDefaults = async () => {
    if (!confirm("Update to V-Kawach Standard Plan Matrix (Basic & Premium ₹950)?")) return;
    setResetting(true);
    try {
      await api.post("/plans/reset-defaults");
      toast.success("V-Kawach plans updated to ₹950 Premium matrix successfully!");
      fetchPlans();
    } catch (err: any) {
      toast.error(err.response?.data?.error || "Failed to reset plans");
    } finally {
      setResetting(false);
    }
  };

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
    <div className="flex flex-col min-h-screen bg-slate-50/50 dark:bg-slate-950 p-6 md:p-10 space-y-8">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-800 dark:text-white flex items-center gap-3">
            <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-600">
               <Zap className="w-6 h-6" />
            </div>
            V–KAWACH Subscription Plans
          </h1>
          <p className="text-sm font-medium text-slate-400 mt-1">Configure pricing tiers, features, and V-Kawach plan values for your customers.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={handleResetDefaults}
            disabled={resetting}
            className="flex items-center gap-2 px-5 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-2xl text-sm font-bold transition-all disabled:opacity-50"
          >
            {resetting ? <Loader2 className="w-4 h-4 animate-spin" /> : <RotateCcw className="w-4 h-4" />}
            Reset V-Kawach Matrix
          </button>

          <button 
            onClick={() => handleOpenModal()}
            className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl text-sm font-black transition-all shadow-lg shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Plus className="w-5 h-5" />
            Create New Plan
          </button>
        </div>
      </div>

      {/* V-KAWACH Feature Matrix Card */}
      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              Standard Plan Matrix
            </span>
            <h2 className="text-xl font-black text-slate-800 dark:text-white mt-2">
              V–KAWACH PLANS COMPARISON
            </h2>
            <p className="text-xs text-slate-400 font-medium">
              इससे Premium की value ₹950 price tag से कहीं ज्यादा स्पष्ट होगी।
            </p>
          </div>

          <div className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-2xl border border-slate-100 dark:border-slate-800">
            <div className="text-center px-4">
              <p className="text-xs font-black text-slate-400">BASIC</p>
              <p className="text-sm font-black text-slate-700 dark:text-slate-200">Standard</p>
            </div>
            <div className="h-8 w-px bg-slate-200 dark:bg-slate-700" />
            <div className="text-center px-4">
              <p className="text-xs font-black text-emerald-600">PREMIUM</p>
              <p className="text-lg font-black text-amber-600">₹950</p>
            </div>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 dark:border-slate-800">
                <th className="py-4 text-xs font-black text-slate-400 uppercase tracking-wider w-[50%]">Feature</th>
                <th className="py-4 text-xs font-black text-slate-600 dark:text-slate-300 uppercase tracking-wider text-center w-[25%]">BASIC</th>
                <th className="py-4 text-xs font-black text-amber-600 uppercase tracking-wider text-center w-[25%]">PREMIUM (₹950)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-sm font-bold">
              {FEATURE_MATRIX.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="py-3.5 text-slate-800 dark:text-slate-200 font-semibold">{row.name}</td>
                  <td className="py-3.5 text-center">
                    {row.basic ? (
                      <span className="inline-flex items-center justify-center size-7 rounded-lg bg-emerald-100 text-emerald-600">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center size-7 rounded-lg bg-rose-100 text-rose-500">
                        <X className="w-4 h-4 stroke-[3]" />
                      </span>
                    )}
                  </td>
                  <td className="py-3.5 text-center">
                    {row.premium ? (
                      <span className="inline-flex items-center justify-center size-7 rounded-lg bg-emerald-500 text-white shadow-sm shadow-emerald-500/30">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center size-7 rounded-lg bg-slate-100 text-slate-400">
                        <X className="w-4 h-4 stroke-[3]" />
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Main Content Tiers Table */}
      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden relative">
        {loading ? (
           <div className="py-20 flex flex-col items-center justify-center gap-4">
              <Loader2 className="w-10 h-10 text-amber-500 animate-spin" />
              <p className="text-sm font-bold text-slate-400">Loading plans...</p>
           </div>
        ) : (
          <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[1000px]">
            <thead>
              <tr className="bg-slate-50/70 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-800">
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
                      <span className="text-xl font-black text-amber-600">₹{plan.price}</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">{plan.validityDays} Days Validity</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex flex-wrap gap-1.5">
                      {plan.features.map((feature, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-[10px] font-black rounded-lg border border-emerald-100 dark:border-emerald-800/50">
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
                        className="size-9 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-400 hover:text-amber-600 hover:bg-amber-50 transition-all"
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
                            Click 'Reset V-Kawach Matrix' or 'Create New Plan' to get started.
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
                        className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-amber-500 focus:bg-white dark:focus:bg-slate-900 rounded-2xl text-sm font-bold transition-all outline-none"
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
                        className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-amber-500 focus:bg-white dark:focus:bg-slate-900 rounded-2xl text-sm font-bold transition-all outline-none"
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
                        className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-amber-500 focus:bg-white dark:focus:bg-slate-900 rounded-2xl text-sm font-bold transition-all outline-none"
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
                        className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-amber-500 focus:bg-white dark:focus:bg-slate-900 rounded-2xl text-sm font-bold transition-all outline-none"
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
                      className="flex-1 px-5 py-3.5 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-amber-500 focus:bg-white dark:focus:bg-slate-900 rounded-2xl text-sm font-bold transition-all outline-none appearance-none"
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
                     className="px-10 bg-amber-500 text-white text-sm font-black rounded-[1.5rem] hover:bg-amber-600 shadow-xl shadow-amber-500/20 transition-all active:scale-95 py-4"
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
