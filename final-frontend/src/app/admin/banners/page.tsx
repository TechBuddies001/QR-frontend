"use client";

import { useState, useEffect } from "react";
import api from "@/lib/api";
import toast from "react-hot-toast";
import { Image as ImageIcon, Plus, Trash2, Save, Loader2, GripVertical, Upload } from "lucide-react";
import { resolveImageUrl } from "@/lib/utils";

export default function BannersPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [banners, setBanners] = useState<any[]>([]);
  const [uploading, setUploading] = useState<string | null>(null);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await api.get("/settings");
        const listStr = response.data.settings?.heroBannersList;
        if (listStr) {
          setBanners(JSON.parse(listStr));
        } else {
          const defaultBanner = {
            id: Date.now().toString(),
            taglineDim: response.data.settings?.heroTaglineDim || "THE NEXT EVOLUTION OF",
            taglineHighlight: response.data.settings?.heroTaglineHighlight || "SMART SAFETY",
            subtext: response.data.settings?.heroSubtext || "V-KAWACH provides a high-security ecosystem...",
            button1Text: response.data.settings?.heroButton1Text || "GET STARTED",
            button2Text: response.data.settings?.heroButton2Text || "WATCH DEMO",
            imageUrl: response.data.settings?.heroImageUrl || "/assets/car_qr_tag_mockup_1776107740073.png"
          };
          setBanners([defaultBanner]);
        }
      } catch (error) {
        toast.error("Failed to load banners");
      } finally {
        setLoading(false);
      }
    };
    fetchBanners();
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      await api.put("/settings", { heroBannersList: JSON.stringify(banners) });
      toast.success("Banners saved successfully!");
    } catch (error) {
      toast.error("Failed to save banners");
    } finally {
      setSaving(false);
    }
  };

  const addBanner = () => {
    setBanners([...banners, {
      id: Date.now().toString(),
      taglineDim: "NEW BANNER",
      taglineHighlight: "AWESOME TEXT",
      subtext: "Description goes here.",
      button1Text: "GET STARTED",
      button2Text: "LEARN MORE",
      imageUrl: ""
    }]);
  };

  const removeBanner = (id: string) => {
    if (banners.length === 1) { toast.error("You must have at least one banner!"); return; }
    setBanners(banners.filter(b => b.id !== id));
  };

  const updateBanner = (id: string, field: string, value: string) => {
    setBanners(banners.map(b => b.id === id ? { ...b, [field]: value } : b));
  };

  const handleImageUpload = async (bannerId: string, file: File) => {
    setUploading(bannerId);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await api.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      updateBanner(bannerId, "imageUrl", res.data.filePath);
      toast.success("Image uploaded successfully!");
    } catch (err) {
      toast.error("Image upload failed");
    } finally {
      setUploading(null);
    }
  };

  if (loading) {
    return <div className="flex h-[60vh] items-center justify-center"><Loader2 className="w-10 h-10 text-primary animate-spin" /></div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-10 space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-slate-800 dark:text-white flex items-center gap-3">
            <ImageIcon className="w-8 h-8 text-primary" />
            Homepage Banners
          </h1>
          <p className="text-slate-400 font-bold text-sm mt-1 uppercase tracking-widest">Manage sliding banners for the public website</p>
        </div>
        <button
          onClick={handleSave}
          disabled={saving}
          className="px-8 py-3.5 rounded-2xl font-black text-sm flex items-center gap-2 shadow-xl transition-all active:scale-95 bg-primary hover:bg-orange-600 text-white shadow-primary/20"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          Save Changes
        </button>
      </div>

      <div className="space-y-6">
        {banners.map((banner, index) => (
          <div key={banner.id} className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 p-8 shadow-xl shadow-black/5 flex flex-col md:flex-row gap-8 relative group transition-all hover:border-primary">
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-slate-100 dark:bg-slate-800 p-2 rounded-full text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab">
              <GripVertical className="w-5 h-5" />
            </div>

            {/* Left: Fields */}
            <div className="flex flex-col gap-4 flex-1">
              <div className="flex justify-between items-center">
                <h3 className="font-black text-primary uppercase text-sm bg-primary/10 px-4 py-2 rounded-full">Banner #{index + 1}</h3>
                <button onClick={() => removeBanner(banner.id)} className="text-red-500 hover:bg-red-50 p-2 rounded-xl transition-colors font-bold text-xs flex items-center gap-2">
                  <Trash2 className="w-4 h-4" /> Remove
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary rounded-xl text-sm font-bold outline-none" placeholder="Tagline (Dim Text)" value={banner.taglineDim} onChange={(e) => updateBanner(banner.id, 'taglineDim', e.target.value)} />
                <input className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary rounded-xl text-sm font-bold outline-none" placeholder="Tagline (Highlight Text)" value={banner.taglineHighlight} onChange={(e) => updateBanner(banner.id, 'taglineHighlight', e.target.value)} />
              </div>
              <textarea className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary rounded-xl text-sm font-bold outline-none min-h-[80px]" placeholder="Subtext / Description" value={banner.subtext} onChange={(e) => updateBanner(banner.id, 'subtext', e.target.value)} />
              <div className="grid grid-cols-2 gap-4">
                <input className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary rounded-xl text-sm font-bold outline-none" placeholder="Button 1 Text" value={banner.button1Text} onChange={(e) => updateBanner(banner.id, 'button1Text', e.target.value)} />
                <input className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary rounded-xl text-sm font-bold outline-none" placeholder="Button 2 Text" value={banner.button2Text} onChange={(e) => updateBanner(banner.id, 'button2Text', e.target.value)} />
              </div>
            </div>

            {/* Right: Image */}
            <div className="md:w-1/3 flex flex-col gap-3">
              <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Banner Image</label>

              {/* Preview */}
              <div className="flex-1 bg-slate-50 dark:bg-slate-800 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-center relative overflow-hidden min-h-[160px]">
                {banner.imageUrl ? (
                  <img
                    src={resolveImageUrl(banner.imageUrl)}
                    alt="Banner Preview"
                    className="absolute inset-0 w-full h-full object-contain p-3"
                    onError={(e: any) => { e.target.style.display = 'none'; }}
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-slate-300">
                    <ImageIcon className="w-10 h-10" />
                    <span className="text-xs font-bold">No image selected</span>
                  </div>
                )}
              </div>

              {/* Upload Button */}
              <label className="cursor-pointer w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-xl text-sm font-bold transition-all border-2 border-primary/30">
                {uploading === banner.id ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Uploading...</>
                ) : (
                  <><Upload className="w-4 h-4" /> Upload Image from Device</>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleImageUpload(banner.id, file);
                  }}
                />
              </label>

              {/* OR divider */}
              <div className="flex items-center gap-2">
                <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
                <span className="text-xs text-slate-400 font-bold">OR paste URL</span>
                <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700" />
              </div>

              {/* URL input */}
              <input
                className="w-full px-4 py-2 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 focus:border-primary rounded-xl text-xs font-bold outline-none"
                placeholder="e.g. /assets/image.png or https://..."
                value={banner.imageUrl}
                onChange={(e) => updateBanner(banner.id, 'imageUrl', e.target.value)}
              />
            </div>
          </div>
        ))}

        <button
          onClick={addBanner}
          className="w-full py-8 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-[2.5rem] flex flex-col items-center justify-center gap-2 text-slate-400 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all"
        >
          <Plus className="w-8 h-8" />
          <span className="font-black text-sm uppercase">Add New Banner</span>
        </button>
      </div>
    </div>
  );
}
