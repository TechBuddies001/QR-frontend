"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { 
  Truck, Building2, ShieldCheck, Award, BarChart3, 
  ArrowRight, CheckCircle2, Sparkles, MessageCircle, Shield
} from "lucide-react";
import api from "@/lib/api";

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
}

export default function PublicCaseStudiesPage() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const res = await api.get("/case-studies");
        setCaseStudies(res.data.caseStudies || []);
      } catch (err) {
        console.error("Failed to load case studies", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCaseStudies();
  }, []);

  const getIconComponent = (iconName: string | null) => {
    switch (iconName?.toLowerCase()) {
      case "truck":
        return <Truck className="w-12 h-12 text-slate-300 stroke-[1.5]" />;
      case "building":
        return <Building2 className="w-12 h-12 text-slate-300 stroke-[1.5]" />;
      case "award":
        return <Award className="w-12 h-12 text-slate-300 stroke-[1.5]" />;
      case "chart":
        return <BarChart3 className="w-12 h-12 text-slate-300 stroke-[1.5]" />;
      case "shield":
      default:
        return <ShieldCheck className="w-12 h-12 text-slate-300 stroke-[1.5]" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/40 text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900">
      {/* Top Navbar */}
      <nav className="bg-white border-b border-slate-100 sticky top-0 z-30 shadow-sm/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="size-10 flex items-center justify-center">
              <img src="/images/new_logo.png" alt="Tarkshya" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="font-black text-xl tracking-wider uppercase text-slate-900">Tarkshya</span>
              <span className="block text-[9px] font-black uppercase text-amber-600 tracking-[0.2em] -mt-1">Solution</span>
            </div>
          </Link>

          <div className="flex items-center gap-6">
            <Link href="/" className="text-xs font-bold text-slate-600 hover:text-amber-600 transition">
              Home
            </Link>
            <Link href="/about" className="text-xs font-bold text-slate-600 hover:text-amber-600 transition">
              About Us
            </Link>
            <Link href="/admin/login" className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-black shadow-md shadow-amber-500/20 transition">
              Admin Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-16 space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-700 text-xs font-black tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Proven Real-World Impact
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Case Studies &amp; Success Stories
          </h1>
          <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
            Discover how Tarkshya proprietary Smart QR, Emergency Call Masking, and Anti-Counterfeiting technologies secure assets, streamline logistics, and protect brand identity.
          </p>
        </div>

        {/* Case Studies Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-3xl p-8 h-96 animate-pulse border border-slate-100 shadow-sm" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <div
                key={cs.id}
                className="bg-white rounded-[2rem] border border-slate-100/80 shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Icon Area */}
                  <div className="bg-slate-50/80 h-44 flex items-center justify-center relative border-b border-slate-100/60 p-6">
                    <span className="absolute top-6 left-6 px-3.5 py-1.5 rounded-full bg-amber-600/90 text-amber-50 text-[10px] font-black tracking-wider uppercase shadow-sm">
                      {cs.category}
                    </span>
                    <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                      {getIconComponent(cs.icon)}
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-8 space-y-4">
                    <h3 className="text-xl font-extrabold text-slate-900 leading-snug">
                      {cs.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      {cs.description}
                    </p>
                  </div>
                </div>

                {/* Metrics Footer */}
                {(cs.stat1Value || cs.stat2Value) && (
                  <div className="p-8 pt-0 grid grid-cols-2 gap-4">
                    {cs.stat1Value && (
                      <div>
                        <p className="text-xl font-black text-amber-600 tracking-tight">{cs.stat1Value}</p>
                        <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mt-0.5">
                          {cs.stat1Label}
                        </p>
                      </div>
                    )}
                    {cs.stat2Value && (
                      <div>
                        <p className="text-xl font-black text-amber-600 tracking-tight">{cs.stat2Value}</p>
                        <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mt-0.5">
                          {cs.stat2Label}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Floating Chat Widget */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="/admin/login"
          className="size-14 rounded-full bg-amber-500 hover:bg-amber-600 text-white shadow-xl shadow-amber-500/30 flex items-center justify-center transition-all hover:scale-110"
          title="Contact Tarkshya Support"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
