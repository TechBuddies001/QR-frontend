"use client";

import { useState, useRef, useEffect } from "react";
import api from "@/lib/api";
import toast from "react-hot-toast";
import { QrCode as QrIcon } from "lucide-react";

export default function PartnerAssignTag() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [availableStock, setAvailableStock] = useState(0);

  const [selectedPhotos, setSelectedPhotos] = useState<File[]>([]);
  const [selectedVideos, setSelectedVideos] = useState<File[]>([]);
  
  const [formData, setFormData] = useState({
    ownerName: "",
    ownerPhone: "",
    emergencyContact: "",
    assetType: "vehicle",
    customAssetType: "",
    assetModel: "",
    assetNumber: "",
    customMessage: "",
    address: ""
  });

  useEffect(() => {
    // Check available stock
    const checkStock = async () => {
      try {
        const res = await api.get('/partners/dashboard');
        setAvailableStock(res.data.stats.availableStock || 0);
      } catch (e) {
        console.error("Failed to fetch stock");
      }
    };
    checkStock();
  }, []);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.ownerName.trim()) newErrors.ownerName = "Owner name is required";
    if (!/^[6-9]\d{9}$/.test(formData.ownerPhone)) newErrors.ownerPhone = "Enter a valid 10-digit mobile number";
    if (formData.emergencyContact && !/^[6-9]\d{9}$/.test(formData.emergencyContact)) newErrors.emergencyContact = "Enter a valid 10-digit alternate number";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setLoading(true);
    try {
      const fd = new FormData();
      Object.entries(formData).forEach(([key, val]) => {
        fd.append(key, val as string);
      });
      selectedPhotos.forEach(file => fd.append('photos', file));
      selectedVideos.forEach(file => fd.append('videos', file));

      const response = await api.post("/partners/assign-tag", fd, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      
      toast.success(`Success! Tag ${response.data.tagCode} assigned to ${formData.ownerName}.`);
      setErrors({});
      setAvailableStock(prev => Math.max(0, prev - 1));
      
      // Reset form
      setFormData({
        ownerName: "", ownerPhone: "", emergencyContact: "",
        assetType: "vehicle", customAssetType: "", assetModel: "",
        assetNumber: "", customMessage: "", address: ""
      });
      setSelectedPhotos([]);
      setSelectedVideos([]);

    } catch (error: any) {
      toast.error(error.response?.data?.error || "Failed to assign tag");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-50 ">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-800  tracking-tight">Assign QR to Customer</h2>
            <p className="text-sm font-medium text-slate-500 mt-1">Register a new customer and assign an available QR code from your stock.</p>
          </div>
          <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-xl font-bold flex items-center gap-2 border border-indigo-200">
            <QrIcon className="w-5 h-5" />
            Available Stock: {availableStock}
          </div>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-white  p-8 rounded-3xl shadow-sm border border-slate-200 ">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column: Owner */}
                <div className="space-y-5">
                  <h4 className="text-xs font-black uppercase tracking-widest text-indigo-600 flex items-center gap-2 border-b border-slate-100  pb-3">
                    <span className="bg-indigo-50 text-indigo-600 size-5 rounded-md flex items-center justify-center">1</span>
                    Owner Identity
                  </h4>
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600 ">Owner Name</label>
                      <input
                        className={`w-full rounded-xl border-2 ${errors.ownerName ? 'border-red-500 bg-red-50' : 'border-slate-200  bg-slate-50 '} focus:ring-indigo-600 focus:border-indigo-600 px-4 py-3 outline-none transition-all font-medium`}
                        placeholder="e.g. Vikas Kumar"
                        type="text"
                        value={formData.ownerName}
                        onChange={(e) => {
                          setFormData({...formData, ownerName: e.target.value});
                          if (errors.ownerName) setErrors({...errors, ownerName: ""});
                        }}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600 ">Mobile Number (10 Digit)</label>
                      <input
                        className={`w-full rounded-xl border-2 ${errors.ownerPhone ? 'border-red-500 bg-red-50' : 'border-slate-200  bg-slate-50 '} focus:ring-indigo-600 focus:border-indigo-600 px-4 py-3 outline-none transition-all font-medium`}
                        placeholder="Primary contact"
                        type="tel"
                        maxLength={10}
                        value={formData.ownerPhone}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                          setFormData({...formData, ownerPhone: val});
                          if (errors.ownerPhone) setErrors({...errors, ownerPhone: ""});
                        }}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600 ">Emergency Number (Optional)</label>
                      <input
                        className={`w-full rounded-xl border-2 ${errors.emergencyContact ? 'border-red-500 bg-red-50' : 'border-slate-200  bg-slate-50 '} focus:ring-indigo-600 focus:border-indigo-600 px-4 py-3 outline-none transition-all font-medium`}
                        placeholder="Alternate contact"
                        type="tel"
                        maxLength={10}
                        value={formData.emergencyContact}
                        onChange={(e) => setFormData({...formData, emergencyContact: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600 ">Address (Optional)</label>
                      <textarea
                        className="w-full rounded-xl border-2 border-slate-200  bg-slate-50  focus:ring-indigo-600 focus:border-indigo-600 px-4 py-3 outline-none transition-all font-medium min-h-[100px]"
                        placeholder="Full address details"
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                {/* Right Column: Asset Config */}
                <div className="space-y-5">
                  <h4 className="text-xs font-black uppercase tracking-widest text-indigo-600 flex items-center gap-2 border-b border-slate-100  pb-3">
                    <span className="bg-indigo-50 text-indigo-600 size-5 rounded-md flex items-center justify-center">2</span>
                    Asset Configuration
                  </h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600 ">Asset Type</label>
                        <select 
                          className="w-full rounded-xl border-2 border-slate-200  bg-slate-50  focus:ring-indigo-600 focus:border-indigo-600 px-4 py-3 outline-none transition-all font-medium appearance-none"
                          value={formData.assetType}
                          onChange={(e) => setFormData({...formData, assetType: e.target.value})}
                        >
                          <option value="employee">💼 Employee</option>
                          <option value="vehicle">🚗 Vehicle</option>
                          <option value="pet">🐕 Pet</option>
                          <option value="other">📦 Other</option>
                        </select>
                      </div>
                      
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-600 ">Asset Model / Name</label>
                        <input
                          className="w-full rounded-xl border-2 border-slate-200  bg-slate-50  focus:ring-indigo-600 focus:border-indigo-600 px-4 py-3 outline-none transition-all font-medium"
                          placeholder="e.g. Honda City"
                          type="text"
                          value={formData.assetModel}
                          onChange={(e) => setFormData({...formData, assetModel: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600 ">Asset Registration Number</label>
                      <input
                        className="w-full rounded-xl border-2 border-slate-200  bg-slate-50  focus:ring-indigo-600 focus:border-indigo-600 px-4 py-3 outline-none transition-all font-medium"
                        placeholder="e.g. MH12AB1234"
                        type="text"
                        value={formData.assetNumber}
                        onChange={(e) => setFormData({...formData, assetNumber: e.target.value})}
                      />
                    </div>

                    {formData.assetType === 'vehicle' && (
                      <div className="space-y-1.5 animate-in fade-in slide-in-from-top-1 p-3 bg-blue-50  rounded-xl border border-blue-200 ">
                        <label className="text-xs font-bold text-blue-700 ">Vehicle Subcategory</label>
                        <select
                          className="w-full bg-white  rounded-lg border border-blue-200  focus:ring-blue-500 focus:border-blue-500 px-3 py-2 outline-none transition-all font-medium text-sm"
                          value={formData.customAssetType || ''}
                          onChange={(e) => setFormData({...formData, customAssetType: e.target.value})}
                        >
                          <option value="">Select (Optional)</option>
                          <option value="2 Wheeler">🏍️ 2 Wheeler</option>
                          <option value="4 Wheeler">🚙 4 Wheeler</option>
                        </select>
                      </div>
                    )}

                    {formData.assetType === 'other' && (
                      <div className="space-y-1.5 animate-in fade-in slide-in-from-top-1 p-3 bg-orange-50  rounded-xl border border-orange-200 ">
                        <label className="text-xs font-bold text-orange-700 ">Specify Custom Asset Name</label>
                        <input
                          className="w-full bg-white  rounded-lg border border-orange-200  focus:ring-orange-500 focus:border-orange-500 px-3 py-2 outline-none transition-all font-medium text-sm"
                          placeholder="e.g. Laptop, Bag, Equipment"
                          type="text"
                          value={formData.customAssetType || ''}
                          onChange={(e) => setFormData({...formData, customAssetType: e.target.value})}
                        />
                      </div>
                    )}

                    <div className="space-y-1.5 border-t border-slate-100  pt-4 mt-2">
                      <label className="text-xs font-bold text-slate-600 ">Attach Photos (Max 5)</label>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={(e) => {
                          if (e.target.files) setSelectedPhotos(Array.from(e.target.files).slice(0, 5));
                        }}
                        className="w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-bold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100 transition-all cursor-pointer"
                      />
                      {selectedPhotos.length > 0 && <p className="text-[10px] text-slate-500">{selectedPhotos.length} photo(s) selected</p>}
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-600 ">Attach Videos (Max 2)</label>
                      <input
                        type="file"
                        multiple
                        accept="video/*"
                        onChange={(e) => {
                          if (e.target.files) setSelectedVideos(Array.from(e.target.files).slice(0, 2));
                        }}
                        className="w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-bold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100 transition-all cursor-pointer"
                      />
                      {selectedVideos.length > 0 && <p className="text-[10px] text-slate-500">{selectedVideos.length} video(s) selected</p>}
                    </div>

                    <div className="space-y-1.5 border-t border-slate-100  pt-4 mt-2">
                      <label className="text-xs font-bold text-slate-600 ">Custom Welcome Message (Optional)</label>
                      <input
                        className="w-full rounded-xl border-2 border-slate-200  bg-slate-50  focus:ring-indigo-600 focus:border-indigo-600 px-4 py-3 outline-none transition-all font-medium"
                        placeholder="e.g. Return to owner if found"
                        type="text"
                        value={formData.customMessage}
                        onChange={(e) => setFormData({...formData, customMessage: e.target.value})}
                      />
                    </div>

                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-100  flex justify-end">
                <button
                  type="submit"
                  disabled={loading || availableStock === 0}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-10 rounded-xl shadow-lg shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {loading ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Assigning Tag...
                    </>
                  ) : availableStock === 0 ? (
                    "No Stock Available"
                  ) : (
                    "Register Customer & Assign Tag"
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
