"use client";
import { useState, useEffect, useRef } from "react";
import api from "@/lib/api";
import toast from "react-hot-toast";
import { Plus, Trash2, Save, Star, Loader2, PenTool, Copy } from "lucide-react";

interface QrTemplate {
  id: string;
  name: string;
  description?: string;
  layoutType: string;
  headerColor: string;
  headerColor2: string;
  footerColor: string;
  footerColor2: string;
  qrDotColor: string;
  qrBgColor: string;
  brandName: string;
  brandTagline: string;
  footerText: string;
  footerSubText: string;
  qrDotShape: string;
  logoInCenter: boolean;
  isDefault: boolean;
}

const DEFAULT: Partial<QrTemplate> = {
  name: "",
  description: "",
  layoutType: "standard",
  headerColor: "#002e8a",
  headerColor2: "#001a52",
  footerColor: "#b31919",
  footerColor2: "#7a0a0a",
  qrDotColor: "#000000",
  qrBgColor: "#ffffff",
  brandName: "V-KAWACH",
  brandTagline: "SECURING YOUR WORLD",
  footerText: "SCAN IN EMERGENCY",
  footerSubText: "FOR IMMEDIATE HELP & ALERTS",
  qrDotShape: "square",
  logoInCenter: false,
  isDefault: false,
};

function LivePreview({ tpl }: { tpl: Partial<QrTemplate> }) {
  const isLandscape = tpl.layoutType === "landscape";
  const isCircle = tpl.layoutType === "circle";
  const w = isLandscape ? 320 : 160;
  const h = isLandscape ? 200 : isCircle ? 160 : 254;

  return (
    <div className="flex items-center justify-center p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl min-h-[300px]">
      <div
        style={{
          width: w,
          height: h,
          borderRadius: isCircle ? "50%" : 12,
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          display: "flex",
          flexDirection: isLandscape ? "row" : "column",
          fontFamily: "sans-serif",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: `linear-gradient(180deg, ${tpl.headerColor}, ${tpl.headerColor2})`,
            flex: isLandscape ? "0 0 38%" : "0 0 47%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px 4px",
          }}
        >
          <div style={{ color: "#fff", fontWeight: 900, fontSize: isLandscape ? 11 : 9, letterSpacing: 1 }}>
            {tpl.brandName}
          </div>
          <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 5, letterSpacing: 1, marginTop: 2 }}>
            {tpl.brandTagline}
          </div>
        </div>

        {/* QR area */}
        <div style={{ flex: 1, background: "#fff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4 }}>
          {/* Fake QR grid */}
          <div
            style={{
              width: isLandscape ? 60 : 52,
              height: isLandscape ? 60 : 52,
              background: tpl.qrBgColor,
              border: `2px solid ${tpl.qrDotColor}20`,
              borderRadius: tpl.qrDotShape === "rounded" ? 8 : 2,
              display: "grid",
              gridTemplateColumns: "repeat(7,1fr)",
              gap: 1,
              padding: 4,
            }}
          >
            {Array.from({ length: 49 }).map((_, i) => {
              const corner = [0,1,2,6,7,13,14,8,35,41,42,48,43,44,36];
              const fill = corner.includes(i) || Math.random() > 0.5;
              return (
                <div key={i} style={{
                  background: fill ? tpl.qrDotColor : "transparent",
                  borderRadius: tpl.qrDotShape === "dots" ? "50%" : tpl.qrDotShape === "rounded" ? 2 : 0,
                }} />
              );
            })}
          </div>
          <div style={{ fontSize: 4, color: "#999", letterSpacing: 1 }}>SCAN ID: SAMPLE</div>
        </div>

        {/* Footer */}
        <div
          style={{
            background: `linear-gradient(180deg, ${tpl.footerColor}, ${tpl.footerColor2})`,
            flex: isLandscape ? "0 0 38%" : "0 0 20%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ color: "#fff", fontWeight: 900, fontSize: isLandscape ? 7 : 6, textAlign: "center", padding: "0 4px" }}>
            {tpl.footerText}
          </div>
          <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 4, textAlign: "center", padding: "0 4px" }}>
            {tpl.footerSubText}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function QrTemplatesPage() {
  const [templates, setTemplates] = useState<QrTemplate[]>([]);
  const [selected, setSelected] = useState<Partial<QrTemplate>>(DEFAULT);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const fetchTemplates = async () => {
    try {
      const res = await api.get("/qr-templates");
      setTemplates(res.data.templates);
    } catch {
      toast.error("Failed to load templates");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchTemplates(); }, []);

  const handleNew = () => {
    setEditingId(null);
    setSelected(DEFAULT);
  };

  const handleEdit = (t: QrTemplate) => {
    setEditingId(t.id);
    setSelected({ ...t });
  };

  const handleDuplicate = (t: QrTemplate) => {
    setEditingId(null);
    setSelected({ ...t, id: undefined, name: `${t.name} (Copy)`, isDefault: false });
  };

  const handleSave = async () => {
    if (!selected.name?.trim()) { toast.error("Template name is required"); return; }
    setSaving(true);
    try {
      if (editingId) {
        await api.put(`/qr-templates/${editingId}`, selected);
        toast.success("Template updated!");
      } else {
        await api.post("/qr-templates", selected);
        toast.success("Template created!");
      }
      fetchTemplates();
      handleNew();
    } catch {
      toast.error("Save failed");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this template?")) return;
    try {
      await api.delete(`/qr-templates/${id}`);
      toast.success("Deleted");
      fetchTemplates();
      if (editingId === id) handleNew();
    } catch {
      toast.error("Delete failed");
    }
  };

  const handleSetDefault = async (t: QrTemplate) => {
    try {
      await api.put(`/qr-templates/${t.id}`, { ...t, isDefault: true });
      toast.success(`"${t.name}" set as default`);
      fetchTemplates();
    } catch {
      toast.error("Failed");
    }
  };

  const F = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <div className="space-y-1.5">
      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">{label}</label>
      {children}
    </div>
  );

  const inputCls = "w-full rounded-xl border-2 border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-2 text-sm font-medium outline-none focus:border-primary transition-all";

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <div className="px-8 py-6 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black text-slate-800 dark:text-white flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-xl text-primary"><PenTool className="w-5 h-5" /></div>
            QR Template Editor
          </h1>
          <p className="text-sm text-slate-400 font-medium mt-1">Design and save custom QR card layouts. Apply them when generating tags.</p>
        </div>
        <button
          onClick={handleNew}
          className="flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-2xl text-sm font-black shadow-lg shadow-primary/20 hover:brightness-110 transition-all"
        >
          <Plus className="w-4 h-4" /> New Template
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar: template list */}
        <div className="w-72 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col overflow-hidden">
          <div className="p-4 border-b border-slate-100 dark:border-slate-800">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Saved Templates ({templates.length})</p>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {loading ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="w-6 h-6 text-primary animate-spin" />
              </div>
            ) : templates.length === 0 ? (
              <div className="text-center py-16 text-slate-400 text-sm font-medium">No templates yet.<br/>Create your first one!</div>
            ) : (
              templates.map((t) => (
                <div
                  key={t.id}
                  onClick={() => handleEdit(t)}
                  className={`p-3 rounded-2xl cursor-pointer transition-all border-2 ${editingId === t.id ? "border-primary bg-primary/5" : "border-transparent hover:bg-slate-50 dark:hover:bg-slate-800"}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-black text-sm text-slate-700 dark:text-slate-200 truncate">{t.name}</span>
                    {t.isDefault && <span className="text-[9px] font-black bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full uppercase">Default</span>}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-md ${t.layoutType === "standard" ? "bg-blue-50 text-blue-600" : t.layoutType === "circle" ? "bg-purple-50 text-purple-600" : "bg-green-50 text-green-600"}`}>
                      {t.layoutType}
                    </span>
                    <div className="flex gap-1 ml-auto">
                      {/* header color swatch */}
                      <div className="w-3 h-3 rounded-full border border-white shadow-sm" style={{ background: t.headerColor }} />
                      <div className="w-3 h-3 rounded-full border border-white shadow-sm" style={{ background: t.footerColor }} />
                    </div>
                  </div>
                  <div className="flex gap-1 mt-2" onClick={(e) => e.stopPropagation()}>
                    {!t.isDefault && (
                      <button onClick={() => handleSetDefault(t)} className="text-[9px] font-black text-amber-600 hover:bg-amber-50 px-2 py-0.5 rounded-lg transition-all flex items-center gap-1">
                        <Star className="w-3 h-3" /> Default
                      </button>
                    )}
                    <button onClick={() => handleDuplicate(t)} className="text-[9px] font-black text-slate-400 hover:bg-slate-100 px-2 py-0.5 rounded-lg transition-all flex items-center gap-1">
                      <Copy className="w-3 h-3" /> Copy
                    </button>
                    <button onClick={() => handleDelete(t.id)} className="text-[9px] font-black text-red-400 hover:bg-red-50 px-2 py-0.5 rounded-lg transition-all flex items-center gap-1 ml-auto">
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Editor + Preview */}
        <div className="flex-1 flex overflow-hidden">
          {/* Controls */}
          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 space-y-5">
              <h3 className="text-xs font-black uppercase tracking-widest text-primary border-b border-slate-100 dark:border-slate-800 pb-3">Basic Info</h3>
              <F label="Template Name *">
                <input className={inputCls} placeholder="e.g. Blue Premium, Red Emergency" value={selected.name || ""} onChange={(e) => setSelected({ ...selected, name: e.target.value })} />
              </F>
              <F label="Description">
                <input className={inputCls} placeholder="Optional short note" value={selected.description || ""} onChange={(e) => setSelected({ ...selected, description: e.target.value })} />
              </F>
              <F label="Layout Type">
                <div className="grid grid-cols-3 gap-2">
                  {["standard", "circle", "landscape"].map((lt) => (
                    <button key={lt} onClick={() => setSelected({ ...selected, layoutType: lt })}
                      className={`py-2 rounded-xl text-xs font-black capitalize transition-all border-2 ${selected.layoutType === lt ? "border-primary bg-primary text-white" : "border-slate-100 text-slate-500 hover:border-primary/30"}`}>
                      {lt}
                    </button>
                  ))}
                </div>
              </F>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 space-y-5">
              <h3 className="text-xs font-black uppercase tracking-widest text-primary border-b border-slate-100 dark:border-slate-800 pb-3">Colors</h3>
              <div className="grid grid-cols-2 gap-4">
                {([
                  ["Header Color (Top)", "headerColor"],
                  ["Header Color (Bottom)", "headerColor2"],
                  ["Footer Color (Top)", "footerColor"],
                  ["Footer Color (Bottom)", "footerColor2"],
                  ["QR Dot Color", "qrDotColor"],
                  ["QR Background", "qrBgColor"],
                ] as [string, keyof QrTemplate][]).map(([label, key]) => (
                  <F key={key} label={label}>
                    <div className="flex items-center gap-2 border-2 border-slate-100 dark:border-slate-700 rounded-xl px-3 py-2 bg-slate-50 dark:bg-slate-800">
                      <input type="color" value={(selected[key] as string) || "#000000"} onChange={(e) => setSelected({ ...selected, [key]: e.target.value })}
                        className="w-8 h-8 rounded-lg border-0 cursor-pointer bg-transparent" />
                      <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-300">{(selected[key] as string) || "#000000"}</span>
                    </div>
                  </F>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 space-y-5">
              <h3 className="text-xs font-black uppercase tracking-widest text-primary border-b border-slate-100 dark:border-slate-800 pb-3">Text Content</h3>
              <div className="grid grid-cols-2 gap-4">
                <F label="Brand Name"><input className={inputCls} value={selected.brandName || ""} onChange={(e) => setSelected({ ...selected, brandName: e.target.value })} /></F>
                <F label="Brand Tagline"><input className={inputCls} value={selected.brandTagline || ""} onChange={(e) => setSelected({ ...selected, brandTagline: e.target.value })} /></F>
                <F label="Footer Headline"><input className={inputCls} value={selected.footerText || ""} onChange={(e) => setSelected({ ...selected, footerText: e.target.value })} /></F>
                <F label="Footer Subtext"><input className={inputCls} value={selected.footerSubText || ""} onChange={(e) => setSelected({ ...selected, footerSubText: e.target.value })} /></F>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 p-6 space-y-5">
              <h3 className="text-xs font-black uppercase tracking-widest text-primary border-b border-slate-100 dark:border-slate-800 pb-3">QR Style</h3>
              <F label="Dot Shape">
                <div className="grid grid-cols-4 gap-2">
                  {["square", "rounded", "dots", "classy"].map((s) => (
                    <button key={s} onClick={() => setSelected({ ...selected, qrDotShape: s })}
                      className={`py-2 rounded-xl text-xs font-black capitalize transition-all border-2 ${selected.qrDotShape === s ? "border-primary bg-primary text-white" : "border-slate-100 text-slate-500 hover:border-primary/30"}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </F>
              <label className="flex items-center gap-3 cursor-pointer p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <input type="checkbox" checked={selected.logoInCenter || false} onChange={(e) => setSelected({ ...selected, logoInCenter: e.target.checked })} className="w-4 h-4 accent-primary" />
                <span className="text-sm font-bold text-slate-600 dark:text-slate-300">Embed logo in center of QR code</span>
              </label>
            </div>

            <div className="flex gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={selected.isDefault || false} onChange={(e) => setSelected({ ...selected, isDefault: e.target.checked })} className="w-4 h-4 accent-amber-500" />
                <span className="text-sm font-bold text-slate-600 dark:text-slate-300">Set as default template</span>
              </label>
              <button
                onClick={handleSave}
                disabled={saving}
                className="ml-auto flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-2xl font-black text-sm shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all disabled:opacity-60"
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                {editingId ? "Update Template" : "Save Template"}
              </button>
            </div>
          </div>

          {/* Live Preview Panel */}
          <div className="w-72 border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col overflow-hidden">
            <div className="p-4 border-b border-slate-100 dark:border-slate-800">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Live Preview</p>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <LivePreview tpl={selected} />
              <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl space-y-2">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">Color Swatches</p>
                {[
                  ["Header", selected.headerColor, selected.headerColor2],
                  ["Footer", selected.footerColor, selected.footerColor2],
                ].map(([label, c1, c2]) => (
                  <div key={label as string} className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-slate-500 w-12">{label}</span>
                    <div className="flex-1 h-5 rounded-lg" style={{ background: `linear-gradient(90deg, ${c1}, ${c2})` }} />
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-500 w-12">QR</span>
                  <div className="w-5 h-5 rounded" style={{ background: selected.qrDotColor }} />
                  <span className="text-[9px] text-slate-400">on</span>
                  <div className="w-5 h-5 rounded border" style={{ background: selected.qrBgColor }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
