"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import Link from "next/link";
import { Loader2, ArrowLeft, ShieldCheck, Info, FileText } from "lucide-react";

interface LegalPageTemplateProps {
  title: string;
  settingKey: string;
}

export default function LegalPageTemplate({ title, settingKey }: LegalPageTemplateProps) {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await api.get("/public/settings");
        const settings = response.data.settings || {};
        setContent(settings[settingKey] || "Our team is currently updating this section. Please check back soon.");
      } catch (error) {
        setContent("Unable to load content at this moment. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, [settingKey]);

  const getIcon = () => {
    if (title.toLowerCase().includes('privacy')) return <ShieldCheck className="w-8 h-8" />;
    if (title.toLowerCase().includes('about')) return <Info className="w-8 h-8" />;
    return <FileText className="w-8 h-8" />;
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100">
      {/* Header / Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group transition-all">
            <div className="size-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span className="font-black text-sm uppercase tracking-widest text-slate-400 group-hover:text-indigo-600">Back Home</span>
          </Link>
          <div className="flex items-center gap-4">
             <div className="hidden md:block text-right">
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Official Policy</p>
                <p className="text-xs font-bold text-slate-900 tracking-tight">Tarkshya Security Protocol</p>
             </div>
             <div className="size-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-indigo-600">
                {getIcon()}
             </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-50/50 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {getIcon()}
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">{title}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.9] animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {title}
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            At Tarkshya Solution, transparency and trust are the foundation of our ecosystem. 
            Review our latest {title.toLowerCase()} below.
          </p>
        </div>
      </section>

      {/* Content Area */}
      <main className="max-w-4xl mx-auto px-6 pb-40">
        <div className="bg-white rounded-[3rem] border border-slate-100 p-8 md:p-20 shadow-2xl shadow-slate-200/50 relative">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-6">
              <div className="relative">
                 <div className="size-16 rounded-full border-4 border-indigo-50 border-t-indigo-600 animate-spin" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="size-2 bg-indigo-600 rounded-full animate-pulse" />
                 </div>
              </div>
              <p className="text-slate-400 font-black text-[10px] uppercase tracking-[0.3em]">Synchronizing Portal Content</p>
            </div>
          ) : (
            <div className="prose prose-indigo max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-p:text-slate-600 prose-p:leading-loose prose-p:text-lg prose-p:font-medium">
              <div 
                className="whitespace-pre-wrap"
              >
                {content}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            <div className="flex items-center gap-2">
               <div className="size-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-black">T</div>
               <span className="font-black text-lg tracking-tighter">Tarkshya Solution</span>
            </div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Securing the world with Indian Innovation</p>
          </div>
          <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
