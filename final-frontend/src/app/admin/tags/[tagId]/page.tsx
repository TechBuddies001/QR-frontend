"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import api from "@/lib/api";
import toast from "react-hot-toast";

export default function Page() {
  const { tagId } = useParams();
  const router = useRouter();
  const [tag, setTag] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const [selectedPhotos, setSelectedPhotos] = useState<File[]>([]);
  const [selectedVideos, setSelectedVideos] = useState<File[]>([]);
  const [plans, setPlans] = useState<any[]>([]);
  const [sponsors, setSponsors] = useState<any[]>([]);
  
  useEffect(() => {
    if (tagId) {
      api.get(`/tags/${tagId}`).then(res => {
        setTag(res.data.tag);
        setFormData({
          ownerName: res.data.tag.ownerName || "",
          ownerPhone: res.data.tag.ownerPhone || "",
          emergencyContact: res.data.tag.emergencyContact || "",
          whatsappNumber: res.data.tag.whatsappNumber || "",
          address: res.data.tag.address || "",
          planType: res.data.tag.planType || "basic",
          assetType: res.data.tag.assetType || "vehicle",
          customAssetType: res.data.tag.customAssetType || "",
          isActive: res.data.tag.isActive ?? true,
          sponsorId: res.data.tag.sponsorId || ""
        });
      }).catch(err => {
        toast.error("Failed to load tag details");
      });

      api.get("/plans").then(res => {
        if (res.data && res.data.plans) {
          setPlans(res.data.plans);
        }
      }).catch(err => console.error("Failed to load plans", err));

      api.get("/sponsors").then(res => {
        if (res.data && res.data.sponsors) {
          setSponsors(res.data.sponsors.filter((s: any) => s.isActive));
        }
      }).catch(err => console.error("Failed to load sponsors", err));
    }
  }, [tagId]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const fd = new FormData();
      Object.entries(formData).forEach(([key, val]) => {
        fd.append(key, val as string);
      });
      selectedPhotos.forEach(file => fd.append('photos', file));
      selectedVideos.forEach(file => fd.append('videos', file));

      await api.put(`/tags/${tagId}`, fd, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      toast.success("Tag details updated successfully!");
      setIsEditing(false);
      setSelectedPhotos([]);
      setSelectedVideos([]);
      // Reload tag data
      const res = await api.get(`/tags/${tagId}`);
      setTag(res.data.tag);
    } catch(err) {
      toast.error("Failed to update tag!");
    }
  };

  return (
    <>
      <div className="px-8 pb-12 pt-6 flex flex-col gap-8">
        
        {tag && (
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-2xl font-black text-slate-800 dark:text-white">Tag: {tag.tagCode}</h2>
                <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${tag.isActive ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                  {tag.isActive ? "Active" : "Inactive"}
                </span>
                {tag.isLost && (
                   <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-700">Lost</span>
                )}
              </div>
              <p className="text-sm font-medium text-slate-500">
                Owner: <span className="font-bold text-slate-700 dark:text-slate-300">{tag.ownerName}</span> ({tag.ownerPhone}) • Plan: <span className="uppercase text-primary font-bold">{tag.planType}</span> • Asset: <span className="uppercase font-bold text-slate-600 dark:text-slate-400">{tag.assetType}</span>
              </p>
            </div>
            
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`px-6 py-2.5 rounded-xl text-sm font-black transition-all shadow-lg active:scale-95 flex items-center gap-2 ${
                isEditing 
                  ? "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200" 
                  : "bg-primary text-white hover:bg-orange-600 shadow-primary/20"
              }`}
            >
              {isEditing ? "Cancel Editing" : "Edit Tag Details"}
            </button>
          </div>
        )}

        {isEditing && tag && (
          <form onSubmit={handleUpdate} className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 shadow-sm animate-in fade-in slide-in-from-top-4">
             <div className="col-span-full mb-2">
               <h3 className="text-lg font-black text-slate-800 dark:text-white">Edit Registration Information</h3>
               <p className="text-sm font-medium text-slate-500 mt-1">Changes are saved immediately and updated on the public scan page.</p>
             </div>
             
             <div>
               <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-1.5">Owner Name</label>
               <input type="text" required value={formData.ownerName} onChange={(e) => setFormData({...formData, ownerName: e.target.value})} className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 font-bold text-slate-800 dark:text-white text-sm" />
             </div>
             <div>
               <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-1.5">Owner Phone <span className="text-[10px] text-slate-400 lowercase font-normal">(Used for call masking)</span></label>
               <input type="text" required value={formData.ownerPhone} onChange={(e) => setFormData({...formData, ownerPhone: e.target.value})} className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 font-bold text-slate-800 dark:text-white text-sm" />
             </div>
             <div>
               <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-1.5">Emergency Contact Number (Secondary)</label>
               <input type="text" value={formData.emergencyContact} onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})} className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 font-bold text-slate-800 dark:text-white text-sm" />
             </div>
             <div>
               <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-1.5">WhatsApp Number</label>
               <input type="text" value={formData.whatsappNumber} onChange={(e) => setFormData({...formData, whatsappNumber: e.target.value})} className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 font-bold text-slate-800 dark:text-white text-sm" />
             </div>
            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-1.5">Plan Type</label>
              <select value={formData.planType} onChange={(e) => setFormData({...formData, planType: e.target.value})} className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 font-bold text-slate-800 dark:text-white text-sm uppercase">
                <option value="FREE_TRIAL">FREE TRIAL</option>
                <option value="BASIC">BASIC</option>
                <option value="PREMIUM">PREMIUM</option>
                {plans.map((p) => (
                  <option key={p.id} value={p.name}>{p.name}</option>
                ))}
              </select>
            </div>
             <div>
               <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-1.5">Asset Type</label>
               <select value={formData.assetType} onChange={(e) => setFormData({...formData, assetType: e.target.value})} className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 font-bold text-slate-800 dark:text-white text-sm">
                 <option value="vehicle">Vehicle</option>
                 <option value="pet">Pet</option>
                 <option value="person">Person</option>
                 <option value="other">Other</option>
               </select>
             </div>
             {formData.assetType === 'vehicle' && (
               <div>
                 <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-1.5">Vehicle Subcategory</label>
                 <select value={formData.customAssetType} onChange={(e) => setFormData({...formData, customAssetType: e.target.value})} className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 font-bold text-slate-800 dark:text-white text-sm">
                   <option value="">Select (Optional)</option>
                   <option value="2 Wheeler">🏍️ 2 Wheeler</option>
                   <option value="4 Wheeler">🚙 4 Wheeler</option>
                 </select>
               </div>
             )}
             {formData.assetType === 'other' && (
               <div>
                 <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-1.5">Custom Asset Name</label>
                 <input type="text" value={formData.customAssetType} onChange={(e) => setFormData({...formData, customAssetType: e.target.value})} className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 font-bold text-slate-800 dark:text-white text-sm" />
               </div>
             )}
             <div className="col-span-full">
               <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-1.5">Address</label>
               <textarea value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 font-bold text-slate-800 dark:text-white text-sm" rows={3}></textarea>
             </div>
             <div className="col-span-full">
               <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-1.5">Sponsor <span className="text-[10px] text-slate-400 lowercase font-normal">(optional — assign a sponsor to this tag)</span></label>
               <select
                 value={formData.sponsorId}
                 onChange={(e) => setFormData({...formData, sponsorId: e.target.value})}
                 className="w-full px-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-primary/20 font-bold text-slate-800 dark:text-white text-sm"
               >
                 <option value="">— No Sponsor —</option>
                 {sponsors.map((s) => (
                   <option key={s.id} value={s.id}>{s.name}</option>
                 ))}
               </select>
             </div>
             <div className="col-span-full flex items-center gap-3 pt-2">
                <input 
                  type="checkbox" 
                  id="isActive" 
                  checked={formData.isActive} 
                  onChange={(e) => setFormData({...formData, isActive: e.target.checked})}
                  className="w-4 h-4 text-primary bg-slate-100 border-slate-300 rounded focus:ring-primary dark:ring-offset-slate-800 dark:bg-slate-700 dark:border-slate-600"
                />
                <label htmlFor="isActive" className="text-sm font-bold text-slate-700 dark:text-slate-300 cursor-pointer">
                  Tag is Active (allows scanning & calls)
                </label>
             </div>
             <div className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-slate-100 dark:border-slate-800 pt-4 mt-2">
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-1.5">Replace Photos (Max 5)</label>
                  {tag?.photos && selectedPhotos.length === 0 && (
                    <div className="mb-3">
                      <p className="text-[10px] font-bold text-slate-500 uppercase mb-2">Current Photos:</p>
                      <div className="flex flex-wrap gap-2">
                        {(Array.isArray(tag.photos) ? tag.photos : (() => {
                          try { return JSON.parse(tag.photos); } catch { return tag.ownerPhoto ? [tag.ownerPhoto] : []; }
                        })()).map((url: string, idx: number) => (
                          <div key={idx} className="relative rounded-lg overflow-hidden border border-slate-200 w-16 h-16 opacity-80">
                            <img src={url} alt={`current-${idx}`} className="w-full h-full object-cover" />
                            <div className="absolute top-1 left-1 bg-black/60 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full z-10">
                              {idx + 1}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files) {
                        const newFiles = Array.from(e.target.files);
                        setSelectedPhotos(prev => [...prev, ...newFiles].slice(0, 5));
                      }
                      e.target.value = ''; // Reset input to allow selecting same files again if needed
                    }}
                    className="w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-bold file:bg-primary/10 file:text-primary hover:file:bg-primary/20 transition-all cursor-pointer"
                  />
                  {selectedPhotos.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedPhotos.map((file, idx) => (
                        <div key={idx} className="relative group rounded-lg overflow-hidden border border-slate-200 w-16 h-16">
                          <img src={URL.createObjectURL(file)} alt={`preview-${idx+1}`} className="w-full h-full object-cover" />
                          <div className="absolute top-1 left-1 bg-black/60 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full z-10">
                            {idx + 1}
                          </div>
                          <button
                            type="button"
                            onClick={() => setSelectedPhotos(prev => prev.filter((_, i) => i !== idx))}
                            className="absolute top-1 right-1 bg-black/50 text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500 z-10"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-1.5">Replace Videos (Max 2)</label>
                  <input
                    type="file"
                    multiple
                    accept="video/*"
                    onChange={(e) => {
                      if (e.target.files) {
                        const newFiles = Array.from(e.target.files);
                        setSelectedVideos(prev => [...prev, ...newFiles].slice(0, 2));
                      }
                      e.target.value = '';
                    }}
                    className="w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-bold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100 transition-all cursor-pointer"
                  />
                  {selectedVideos.length > 0 && (
                    <div className="mt-3 flex flex-col gap-1.5">
                      {selectedVideos.map((file, idx) => (
                        <div key={idx} className="flex items-center justify-between bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg">
                          <span className="text-xs text-slate-600 font-medium truncate">{file.name}</span>
                          <button
                            type="button"
                            onClick={() => setSelectedVideos(prev => prev.filter((_, i) => i !== idx))}
                            className="text-red-500 hover:text-red-700 text-xs font-bold"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
             </div>
             <div className="col-span-full flex justify-end border-t border-slate-100 dark:border-slate-800 pt-6 mt-2">
               <button type="submit" className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-black text-sm rounded-xl shadow-lg shadow-emerald-500/20 transition-all active:scale-95 flex items-center gap-2">
                 Save Updated Details
               </button>
             </div>
           </form>
        )}

        {/* Real KPI Stats */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
              Total Scans
            </p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold">{tag?._count?.scanLogs ?? tag?.scanLogs?.length ?? 0}</h3>
              <span className="text-emerald-600 text-xs font-bold">Real-time</span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
              Call Masking Logs
            </p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold">{tag?._count?.callLogs ?? tag?.callLogs?.length ?? 0}</h3>
              <span className="text-blue-600 text-xs font-bold">Masked Calls</span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
              Status & Security
            </p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold text-emerald-600">{tag?.isActive ? "Active" : "Disabled"}</h3>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
              Sponsor / Campaign
            </p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-xl font-bold">{tag?.sponsor?.name || "None"}</h3>
            </div>
          </div>
        </section>

        {/* Real Recent Activity Logs */}
        <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <div>
              <h4 className="text-xl font-bold text-slate-800 dark:text-white">Recent Activity Logs</h4>
              <p className="text-xs text-slate-400 mt-0.5">Real scan events logged for this tag</p>
            </div>
          </div>

          {tag?.scanLogs && tag.scanLogs.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                    <th className="px-6 py-4">Timestamp</th>
                    <th className="px-6 py-4">City / Location</th>
                    <th className="px-6 py-4">User Agent / Device</th>
                    <th className="px-6 py-4">IP Address</th>
                    <th className="px-6 py-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {tag.scanLogs.map((log: any) => (
                    <tr key={log.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="text-sm font-semibold text-slate-800 dark:text-white">
                          {new Date(log.createdAt).toLocaleDateString()}
                        </div>
                        <div className="text-xs text-slate-400">
                          {new Date(log.createdAt).toLocaleTimeString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-slate-700 dark:text-slate-300">
                        {log.scannerCity || "Unknown Location"}
                      </td>
                      <td className="px-6 py-4 text-xs font-mono text-slate-500 max-w-xs truncate">
                        {log.userAgent || "Browser"}
                      </td>
                      <td className="px-6 py-4 text-xs font-mono text-slate-500">
                        {log.scannerIp || "Hidden IP"}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700">
                          Success
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-12 text-center text-slate-400">
              <div className="text-4xl mb-2">📡</div>
              <p className="font-bold text-sm text-slate-600 dark:text-slate-300">No scan activity recorded yet</p>
              <p className="text-xs text-slate-400 mt-1">Activity logs will automatically populate when this QR code is scanned.</p>
            </div>
          )}
        </section>
      </div>
    </>
  );
}
