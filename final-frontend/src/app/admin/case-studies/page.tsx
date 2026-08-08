"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { 
  Plus, Edit2, Trash2, Check, X, Loader2, 
  Truck, Building2, ShieldCheck, Award, FileText,
  BarChart3, Sparkles, CheckCircle2, Eye, EyeOff
} from "lucide-react";
import toast from "react-hot-toast";

interface CaseStudy {
  id: string;
  category: string;
  title: string;
  description: string;
  icon: string | null;
  stat1Value: string | null;
  stat1Label: string | null;
  stat2Value: string | null;
  stat2Label: string | null;
  isActive: boolean;
  order: number;
}

export default function AdminCaseStudiesPage() {
  const [loading, setLoading] = useState(true);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCaseStudy, setEditingCaseStudy] = useState<CaseStudy | null>(null);
  const [saving, setSaving] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    category: "",
    title: "",
    description: "",
    icon: "shield",
    stat1Value: "",
    stat1Label: "",
    stat2Value: "",
    stat2Label: "",
    isActive: true,
    order: 0,
  });

  const fetchCaseStudies = async () => {
    setLoading(true);
    try {
      const res = await api.get("/case-studies/admin");
      setCaseStudies(res.data.caseStudies || []);
    } catch (err) {
      toast.error("Failed to load case studies");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const handleOpenModal = (cs: CaseStudy | null = null) => {
    if (cs) {
      setEditingCaseStudy(cs);
      setFormData({
        category: cs.category,
        title: cs.title,
        description: cs.description,
        icon: cs.icon || "shield",
        stat1Value: cs.stat1Value || "",
        stat1Label: cs.stat1Label || "",
        stat2Value: cs.stat2Value || "",
        stat2Label: cs.stat2Label || "",
        isActive: cs.isActive,
        order: cs.order || 0,
      });
    } else {
      setEditingCaseStudy(null);
      setFormData({
        category: "LOGISTICS & FLEET",
        title: "",
        description: "",
        icon: "truck",
        stat1Value: "",
        stat1Label: "",
        stat2Value: "",
        stat2Label: "",
        isActive: true,
        order: caseStudies.length + 1,
      });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.category || !formData.title || !formData.description) {
      toast.error("Please fill in all required fields (Category, Title, Description)");
      return;
    }

    setSaving(true);
    try {
      if (editingCaseStudy) {
        await api.put(`/case-studies/${editingCaseStudy.id}`, formData);
        toast.success("Case study updated successfully!");
      } else {
        await api.post("/case-studies", formData);
        toast.success("Case study created successfully!");
      }
      setIsModalOpen(false);
      fetchCaseStudies();
    } catch (err: any) {
      toast.error(err.response?.data?.error || "Operation failed");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this case study?")) return;
    try {
      await api.delete(`/case-studies/${id}`);
      toast.success("Case study deleted");
      fetchCaseStudies();
    } catch (err) {
      toast.error("Failed to delete case study");
    }
  };

  const toggleStatus = async (cs: CaseStudy) => {
    try {
      await api.put(`/case-studies/${cs.id}`, { isActive: !cs.isActive });
      toast.success(`Case study marked as ${!cs.isActive ? "Active" : "Draft"}`);
      fetchCaseStudies();
    } catch (err) {
      toast.error("Failed to update status");
    }
  };

  const getIconComponent = (iconName: string | null) => {
    switch (iconName?.toLowerCase()) {
      case "truck":
        return <Truck className="w-6 h-6 text-amber-600" />;
      case "building":
        return <Building2 className="w-6 h-6 text-indigo-600" />;
      case "award":
        return <Award className="w-6 h-6 text-purple-600" />;
      case "chart":
        return <BarChart3 className="w-6 h-6 text-emerald-600" />;
      case "shield":
      default:
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 p-6 md:p-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-800">Case Studies &amp; Impact Stories</h1>
              <p className="text-sm font-medium text-slate-400 mt-0.5">
                Manage real-based case studies, success metrics, and client impact stories on the public portal.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/case-studies"
            target="_blank"
            className="px-5 py-3 rounded-2xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold text-sm flex items-center gap-2 transition-all"
          >
            <Eye className="w-4 h-4" />
            View Public Page
          </a>
          <button
            onClick={() => handleOpenModal(null)}
            className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-black text-sm flex items-center gap-2 shadow-lg shadow-amber-500/25 transition-all"
          >
            <Plus className="w-5 h-5" />
            Add New Case Study
          </button>
        </div>
      </div>

      {/* Grid of Case Studies */}
      {loading ? (
        <div className="py-20 flex flex-col items-center justify-center gap-4">
          <Loader2 className="w-10 h-10 text-amber-500 animate-spin" />
          <p className="text-sm font-bold text-slate-400">Loading case studies...</p>
        </div>
      ) : caseStudies.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm space-y-4">
          <div className="w-16 h-16 bg-amber-50 rounded-2xl mx-auto flex items-center justify-center text-amber-500">
            <FileText className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-black text-slate-800">No Case Studies Found</h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            Click the "Add New Case Study" button above to publish real client impact stories and key metrics.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md ${
                cs.isActive ? "border-slate-200" : "border-slate-100 opacity-75 bg-slate-50/50"
              }`}
            >
              <div>
                {/* Card Top Banner */}
                <div className="p-6 bg-slate-50/70 border-b border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100">
                      {getIconComponent(cs.icon)}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-[10px] font-black tracking-wider uppercase">
                      {cs.category}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleStatus(cs)}
                    title={cs.isActive ? "Hide from public view" : "Show on public page"}
                    className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight flex items-center gap-1.5 border ${
                      cs.isActive
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : "bg-slate-100 text-slate-500 border-slate-200"
                    }`}
                  >
                    {cs.isActive ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                    {cs.isActive ? "Active" : "Draft"}
                  </button>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-black text-slate-800 leading-snug">
                    {cs.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {cs.description}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {cs.stat1Value && (
                      <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-3">
                        <p className="text-lg font-black text-amber-600">{cs.stat1Value}</p>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-wide truncate">
                          {cs.stat1Label}
                        </p>
                      </div>
                    )}
                    {cs.stat2Value && (
                      <div className="bg-indigo-50/50 border border-indigo-100 rounded-2xl p-3">
                        <p className="text-lg font-black text-indigo-600">{cs.stat2Value}</p>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-wide truncate">
                          {cs.stat2Label}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 px-6 border-t border-slate-100 bg-slate-50/30 flex items-center justify-end gap-2">
                <button
                  onClick={() => handleOpenModal(cs)}
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-amber-600 hover:border-amber-200 transition-all text-xs font-bold flex items-center gap-1.5"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(cs.id)}
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-red-600 hover:border-red-200 transition-all text-xs font-bold flex items-center gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-xl w-full p-8 shadow-2xl border border-slate-100 space-y-6 my-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-black text-slate-800">
                  {editingCaseStudy ? "Edit Case Study" : "Add New Case Study"}
                </h3>
                <p className="text-xs text-slate-400 font-medium mt-0.5">
                  Update real client results, metrics, and details.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:bg-slate-100 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Category */}
              <div>
                <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                  Category Tag *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. LOGISTICS & FLEET, CORPORATE & GOVT, FMCG"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full mt-1.5 px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Title */}
              <div>
                <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                  Case Study Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Securing 50,000+ Vehicles with Smart QR"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full mt-1.5 px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Icon Selector */}
              <div>
                <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                  Card Icon
                </label>
                <select
                  value={formData.icon}
                  onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  className="w-full mt-1.5 px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="truck">🚛 Truck / Logistics</option>
                  <option value="building">🏢 Building / Corporate</option>
                  <option value="shield">🛡️ Shield / FMCG Security</option>
                  <option value="award">🏆 Award / Quality</option>
                  <option value="chart">📊 Chart / Analytics</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                  Detailed Description *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Explain how Tarkshya solution solved the client problem and key impact achieved..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full mt-1.5 px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Stat 1 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                    Stat 1 Metric Value
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 50k+"
                    value={formData.stat1Value}
                    onChange={(e) => setFormData({ ...formData, stat1Value: e.target.value })}
                    className="w-full mt-1.5 px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                    Stat 1 Label
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. VEHICLES SECURED"
                    value={formData.stat1Label}
                    onChange={(e) => setFormData({ ...formData, stat1Label: e.target.value })}
                    className="w-full mt-1.5 px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Stat 2 */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                    Stat 2 Metric Value
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 40%"
                    value={formData.stat2Value}
                    onChange={(e) => setFormData({ ...formData, stat2Value: e.target.value })}
                    className="w-full mt-1.5 px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                    Stat 2 Label
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. FASTER RESPONSE"
                    value={formData.stat2Label}
                    onChange={(e) => setFormData({ ...formData, stat2Label: e.target.value })}
                    className="w-full mt-1.5 px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Status Toggle */}
              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                  className="w-5 h-5 text-amber-500 rounded border-slate-300 focus:ring-amber-500"
                />
                <label htmlFor="isActive" className="text-sm font-bold text-slate-700 cursor-pointer">
                  Publish to Public Case Studies Page
                </label>
              </div>

              {/* Buttons */}
              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-3 rounded-2xl border border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-black text-sm flex items-center gap-2 shadow-lg shadow-amber-500/25 transition-all disabled:opacity-50"
                >
                  {saving && <Loader2 className="w-4 h-4 animate-spin" />}
                  {editingCaseStudy ? "Update Case Study" : "Create Case Study"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
