"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import toast from "react-hot-toast";
import { Eye, EyeOff, Shield, Mail, Lock, Loader2 } from "lucide-react";

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      const response = await api.post("/auth/login", formData);
      const { token, admin } = response.data;

      localStorage.setItem("admin_token", token);
      localStorage.setItem("admin_user", JSON.stringify(admin));

      toast.success(`Welcome back, ${admin.name}!`);
      router.push("/admin/dashboard");
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F1F5F9] font-display min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-[420px]">
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800">
          <div className="p-8 pb-0 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="text-blue-600 w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Admin Panel
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              Secure access to Tarkshya Solution dashboard
            </p>
          </div>

          <form className="p-8 space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                  placeholder="admin@tarkshya.com"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  className="w-full pl-10 pr-12 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                  placeholder="••••••••"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600 transition-colors"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-600 w-4 h-4 cursor-pointer"
                  type="checkbox"
                />
                <span className="text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                  Remember me
                </span>
              </label>
              <Link
                className="text-blue-600 font-semibold hover:underline"
                href="#"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg shadow-lg shadow-blue-600/30 transition-all active:scale-[0.98] mt-4 uppercase tracking-widest text-sm flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                "Login to Dashboard"
              )}
            </button>
          </form>

          <div className="bg-slate-50 dark:bg-slate-900/50 p-6 text-center border-t border-slate-100 dark:border-slate-800">
            <p className="text-xs text-slate-400 dark:text-slate-500">
              © 2024 Tarkshya Solution. All rights reserved. <br />
              Authorized Personnel Only.
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors text-sm"
            href="#"
          >
            <span className="material-symbols-outlined text-lg">
              support_agent
            </span>
            Contact System Administrator
          </Link>
        </div>
      </div>
    </div>
  );
}
