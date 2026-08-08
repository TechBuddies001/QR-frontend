"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Shield, Loader2, Info, Lock, User, Phone, CheckCircle, Mail, Hash, Package, Tag as TagIcon, Calendar, Store, Check, AlertCircle } from "lucide-react";
import api from "@/lib/api";
import toast from "react-hot-toast";

type TagMeta = {
  tagCode: string;
  assetType: string;
  planType: string;
  categoryName: string;
  batchNumber: string;
  dealerId: string;
  dealerName: string;
  createdAt: string;
};

export default function ActivateTagPage() {
  const params = useParams();
  const tagCode = params.tagCode as string;

  const [loadingTag, setLoadingTag] = useState(true);
  const [tagMeta, setTagMeta] = useState<TagMeta | null>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Mandatory fields
  const [ownerName, setOwnerName] = useState("");
  const [ownerPhone, setOwnerPhone] = useState("");
  const [password, setPassword] = useState("");

  // OTP State
  const [otpSent, setOtpSent] = useState(false);
  const [otpInput, setOtpInput] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifyingOtp, setVerifyingOtp] = useState(false);
  const [debugOtpCode, setDebugOtpCode] = useState<string | null>(null);

  // Optional fields
  const [emergencyContact, setEmergencyContact] = useState("");
  const [assetNumber, setAssetNumber] = useState(""); // Vehicle Number / Pet Name
  const [email, setEmail] = useState("");

  // Fetch tag metadata on load
  useEffect(() => {
    async function fetchTagInfo() {
      try {
        setLoadingTag(true);
        const res = await api.get(`/public/tag/${tagCode}`);
        if (res.data.tag) {
          setTagMeta({
            tagCode: res.data.tag.tagCode || tagCode,
            assetType: res.data.tag.assetType || "vehicle",
            planType: res.data.tag.planType || "Basic",
            categoryName: res.data.tag.categoryName || "Safety QR",
            batchNumber: res.data.tag.batchNumber || `BATCH-${new Date().getFullYear()}`,
            dealerId: res.data.tag.dealerId || "Direct / Online",
            dealerName: res.data.tag.dealerName || "Tarkshya Direct",
            createdAt: res.data.tag.createdAt ? new Date(res.data.tag.createdAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }) : new Date().toLocaleDateString("en-IN"),
          });
        }
      } catch (err: any) {
        console.error("Failed to load tag info", err);
      } finally {
        setLoadingTag(false);
      }
    }
    fetchTagInfo();
  }, [tagCode]);

  // Send OTP handler
  const handleSendOtp = async () => {
    if (!ownerPhone || ownerPhone.length < 10) {
      toast.error("Please enter a valid 10-digit mobile number first.");
      return;
    }
    setSendingOtp(true);
    try {
      const res = await api.post("/public/send-otp", { phone: ownerPhone });
      setOtpSent(true);
      if (res.data.debugOtp) {
        setDebugOtpCode(res.data.debugOtp);
        toast.success(`OTP sent! (Demo Code: ${res.data.debugOtp})`);
      } else {
        toast.success(`OTP sent to +91 ${ownerPhone}`);
      }
    } catch (err: any) {
      toast.error(err.response?.data?.error || "Failed to send OTP");
    } finally {
      setSendingOtp(false);
    }
  };

  // Verify OTP handler
  const handleVerifyOtp = async () => {
    if (!otpInput) {
      toast.error("Please enter the 6-digit OTP code.");
      return;
    }
    setVerifyingOtp(true);
    try {
      await api.post("/public/verify-otp", { phone: ownerPhone, otp: otpInput });
      setOtpVerified(true);
      toast.success("✅ Mobile Number Verified!");
    } catch (err: any) {
      toast.error(err.response?.data?.error || "Invalid OTP code");
    } finally {
      setVerifyingOtp(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!ownerName.trim()) {
      toast.error("Owner Name is required.");
      return;
    }
    if (!ownerPhone.trim() || ownerPhone.length < 10) {
      toast.error("Valid Mobile Number is required.");
      return;
    }
    if (!otpVerified) {
      toast.error("Please verify your Mobile Number with OTP first.");
      return;
    }
    if (!password.trim() || password.length < 6) {
      toast.error("Password is required (min 6 characters).");
      return;
    }

    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("ownerName", ownerName);
      fd.append("ownerPhone", ownerPhone);
      fd.append("password", password);
      if (email) fd.append("email", email);
      if (emergencyContact) fd.append("emergencyContact", emergencyContact);
      if (assetNumber) fd.append("assetNumber", assetNumber);

      await api.post(`/public/tag/${tagCode}/activate`, fd);

      toast.success("Tag Activated Successfully!");
      setSuccess(true);
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Failed to activate tag");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/40 flex items-center justify-center p-4 font-['Outfit']">
        <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md w-full text-center border border-slate-100">
          <div className="size-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <CheckCircle size={44} />
          </div>
          <h1 className="text-3xl font-black text-slate-800 mb-2">Tag Activated!</h1>
          <p className="text-slate-500 mb-8 leading-relaxed text-sm">
            Your smart safety tag <span className="font-mono font-bold text-slate-800">({tagCode})</span> is now live &amp; linked to your mobile number.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => (window.location.href = `/tag/${tagCode}`)}
              className="w-full bg-indigo-600 text-white py-3.5 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
            >
              View Public Tag Profile
            </button>
            <button
              onClick={() => (window.location.href = "/login")}
              className="w-full bg-slate-100 text-slate-700 py-3.5 rounded-xl font-bold hover:bg-slate-200 transition"
            >
              Login to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 py-10 px-4 sm:px-6 lg:px-8 font-['Outfit']">
      <div className="max-w-2xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center size-16 bg-indigo-600 text-white rounded-2xl mb-4 shadow-xl shadow-indigo-200">
            <Shield size={32} />
          </div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">Activate Your Safety QR</h1>
          <p className="mt-2 text-slate-500 text-sm">
            Complete the verification form below to activate your smart tag
          </p>
        </div>

        {/* Read-Only System Metadata Section (Non-Editable) */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 p-6 mb-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <h2 className="text-sm font-black text-slate-800 uppercase tracking-wider">
                Automatically Filled System Info
              </h2>
            </div>
            <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
              🔒 Read-Only (Non-Editable)
            </span>
          </div>

          {loadingTag ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 animate-pulse">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-16 bg-slate-100 rounded-2xl" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {/* Asset ID / Tag Code */}
              <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                  <Hash size={13} />
                  <span>Asset ID (Tag Code)</span>
                </div>
                <p className="font-mono font-black text-slate-800 text-sm">{tagMeta?.tagCode || tagCode}</p>
              </div>

              {/* Plan */}
              <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                  <TagIcon size={13} />
                  <span>Plan</span>
                </div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-black bg-indigo-100 text-indigo-700">
                  {tagMeta?.planType || "Basic"}
                </span>
              </div>

              {/* QR Category */}
              <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                  <Shield size={13} />
                  <span>QR Category</span>
                </div>
                <p className="font-bold text-slate-700 text-xs truncate">{tagMeta?.categoryName || "Safety Tag"}</p>
              </div>

              {/* Batch Number */}
              <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                  <Package size={13} />
                  <span>Batch Number</span>
                </div>
                <p className="font-mono font-semibold text-slate-700 text-xs">{tagMeta?.batchNumber}</p>
              </div>

              {/* Dealer ID */}
              <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                  <Store size={13} />
                  <span>Dealer / Partner</span>
                </div>
                <p className="font-bold text-slate-700 text-xs truncate">{tagMeta?.dealerName}</p>
              </div>

              {/* Generated Date */}
              <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
                <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                  <Calendar size={13} />
                  <span>Generated Date</span>
                </div>
                <p className="font-medium text-slate-700 text-xs">{tagMeta?.createdAt}</p>
              </div>
            </div>
          )}
        </div>

        {/* Main Activation Form */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-8">
            {/* 🔴 MANDATORY SECTION */}
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h3 className="text-base font-black text-slate-800 flex items-center gap-2">
                  <span className="bg-red-500 text-white size-6 rounded-lg flex items-center justify-center text-xs font-black">
                    !
                  </span>
                  Mandatory Information
                </h3>
                <span className="text-[11px] font-bold text-red-500 bg-red-50 px-2.5 py-1 rounded-full">
                  Required
                </span>
              </div>

              {/* Owner Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
                  <span>Owner Name *</span>
                  <span className="text-[10px] text-red-500 font-normal">Mandatory</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 size-4.5" />
                  <input
                    required
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-indigo-600 focus:bg-white outline-none transition font-medium text-sm text-slate-800"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                  />
                </div>
              </div>

              {/* Mobile Number with OTP Verification */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
                  <span>Mobile Number (OTP Verification) *</span>
                  <span className="text-[10px] text-red-500 font-normal">Mandatory</span>
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 size-4.5" />
                    <input
                      required
                      disabled={otpVerified}
                      type="tel"
                      maxLength={10}
                      placeholder="Enter 10-digit phone"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-indigo-600 focus:bg-white outline-none transition font-medium text-sm text-slate-800 disabled:bg-emerald-50 disabled:border-emerald-200"
                      value={ownerPhone}
                      onChange={(e) => {
                        setOwnerPhone(e.target.value.replace(/\D/g, ""));
                        setOtpSent(false);
                        setOtpVerified(false);
                      }}
                    />
                  </div>
                  {!otpVerified ? (
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      disabled={sendingOtp || ownerPhone.length < 10}
                      className="px-4 py-3 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition disabled:opacity-50 shrink-0"
                    >
                      {sendingOtp ? <Loader2 size={16} className="animate-spin" /> : otpSent ? "Resend OTP" : "Send OTP"}
                    </button>
                  ) : (
                    <div className="flex items-center gap-1.5 px-4 py-3 bg-emerald-100 text-emerald-700 rounded-xl text-xs font-bold shrink-0 border border-emerald-200">
                      <Check size={16} /> Verified
                    </div>
                  )}
                </div>

                {/* OTP Input box when sent */}
                {otpSent && !otpVerified && (
                  <div className="mt-3 p-4 bg-indigo-50/60 rounded-2xl border border-indigo-100 space-y-2">
                    <p className="text-xs font-bold text-indigo-900">
                      Enter 6-digit OTP code sent to +91 {ownerPhone}
                      {debugOtpCode && (
                        <span className="block text-[11px] font-mono text-indigo-600 mt-0.5">
                          (Demo OTP Code: <strong className="underline">{debugOtpCode}</strong> or <strong className="underline">123456</strong>)
                        </span>
                      )}
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        maxLength={6}
                        placeholder="123456"
                        className="flex-1 px-4 py-2.5 bg-white border border-indigo-200 rounded-xl font-mono text-center font-bold tracking-widest text-base focus:ring-2 focus:ring-indigo-500 outline-none"
                        value={otpInput}
                        onChange={(e) => setOtpInput(e.target.value.replace(/\D/g, ""))}
                      />
                      <button
                        type="button"
                        onClick={handleVerifyOtp}
                        disabled={verifyingOtp || otpInput.length < 6}
                        className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700 transition disabled:opacity-50"
                      >
                        {verifyingOtp ? <Loader2 size={16} className="animate-spin" /> : "Verify Code"}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 flex items-center justify-between">
                  <span>Create Account Password *</span>
                  <span className="text-[10px] text-red-500 font-normal">Mandatory</span>
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 size-4.5" />
                  <input
                    required
                    type="password"
                    placeholder="Min 6 characters"
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:border-indigo-600 focus:bg-white outline-none transition font-medium text-sm text-slate-800"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* 🟢 OPTIONAL SECTION */}
            <div className="space-y-5 pt-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h3 className="text-base font-black text-slate-800 flex items-center gap-2">
                  <span className="bg-slate-200 text-slate-700 size-6 rounded-lg flex items-center justify-center text-xs font-bold">
                    +
                  </span>
                  Optional Information
                </h3>
                <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                  Optional
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Emergency Contact */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600">Emergency Alternate Contact</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 size-4.5" />
                    <input
                      type="tel"
                      maxLength={10}
                      placeholder="Alternate Phone (Optional)"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-indigo-600 outline-none transition text-sm"
                      value={emergencyContact}
                      onChange={(e) => setEmergencyContact(e.target.value.replace(/\D/g, ""))}
                    />
                  </div>
                </div>

                {/* Vehicle Number / Pet Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600">Vehicle Number / Pet Name</label>
                  <input
                    type="text"
                    placeholder="e.g. MH12AB1234 or Bruno (Optional)"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-indigo-600 outline-none transition text-sm uppercase"
                    value={assetNumber}
                    onChange={(e) => setAssetNumber(e.target.value.toUpperCase())}
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-xs font-bold text-slate-600">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 size-4.5" />
                    <input
                      type="email"
                      placeholder="your.email@domain.com (Optional)"
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-indigo-600 outline-none transition text-sm"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6 border-t border-slate-100">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-2xl font-black text-lg hover:from-indigo-700 hover:to-purple-700 transition shadow-xl shadow-indigo-200 flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Activating Tag...
                  </>
                ) : (
                  "🚀 Activate My Smart Tag"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
