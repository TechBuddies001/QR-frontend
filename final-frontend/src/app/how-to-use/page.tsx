"use client";
import Link from "next/link";
import { ArrowLeft, QrCode, ShieldCheck, PhoneCall, CheckCircle } from "lucide-react";

export default function HowToUsePage() {
  const steps = [
    {
      title: "Get Your V-Kawach Tag",
      description: "Purchase a V-Kawach QR tag or sticker and place it securely on your vehicle, pet, or personal belonging.",
      icon: <QrCode className="w-8 h-8 text-primary" />,
    },
    {
      title: "Register & Activate",
      description: "Scan the QR code for the first time to register. Enter your contact details and emergency information. Your data is kept private.",
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    },
    {
      title: "Receive Alerts (Privacy First)",
      description: "When someone finds your asset or needs to contact you, they scan the QR. They can call you via our secure masking system without ever seeing your real phone number.",
      icon: <PhoneCall className="w-8 h-8 text-primary" />,
    },
    {
      title: "Stay Connected & Safe",
      description: "You'll receive instant SMS notifications and WhatsApp alerts whenever your QR is scanned.",
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100">
      {/* Header / Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group transition-all">
            <div className="size-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-lg shadow-orange-200 group-hover:scale-110 transition-transform">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span className="font-black text-sm uppercase tracking-widest text-slate-400 group-hover:text-primary">Back Home</span>
          </a >
          <div className="flex items-center gap-4">
             <div className="hidden md:block text-right">
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em]">Guide</p>
                <p className="text-xs font-bold text-slate-900 tracking-tight">How to Use</p>
             </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50/50 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 text-primary border border-orange-100 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Quick Guide</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.9] animate-in fade-in slide-in-from-bottom-8 duration-1000">
            How It Works
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            Learn how to set up your V-Kawach QR tag in just a few simple steps. Keep your belongings safe and stay connected securely.
          </p>
        </div>
      </section>

      {/* Content Area */}
      <main className="max-w-4xl mx-auto px-6 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-3xl border border-slate-100 p-8 shadow-xl shadow-slate-200/40 relative overflow-hidden group hover:border-primary/20 transition-all">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110">
                {step.icon}
              </div>
              <div className="size-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 border border-orange-100">
                {step.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
                {index + 1}. {step.title}
              </h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-slate-900 rounded-[3rem] p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-50" />
          <h2 className="text-3xl font-black text-white mb-4 relative z-10">Ready to secure your vehicle?</h2>
          <p className="text-slate-300 mb-8 relative z-10 max-w-xl mx-auto font-medium">Get your V-Kawach QR sticker today and join thousands of others who prioritize safety and privacy.</p>
          <a href="/" className="inline-flex items-center justify-center px-8 py-4 text-sm font-black text-slate-900 bg-white hover:bg-slate-50 rounded-full transition-all relative z-10 shadow-xl shadow-black/20 hover:scale-105 active:scale-95">
            Get Started Now
          </a >
        </div>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            <div className="flex items-center gap-2">
               <div className="size-8 rounded-lg bg-primary text-white flex items-center justify-center text-xs font-black">V</div>
               <span className="font-black text-lg tracking-tighter">V-Kawach</span>
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
