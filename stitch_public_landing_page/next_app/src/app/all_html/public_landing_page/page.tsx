
import React from 'react';
import Script from 'next/script';

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
` }} />
      <Script src="https://cdn.tailwindcss.com/?plugins=forms,container-queries" strategy="beforeInteractive" />
<Script id="inline-script-0" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: `
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#5048e5",
                        "background-light": "#F1F5F9",
                        "background-dark": "#121121",
                        "accent-amber": "#f59e0b",
                    },
                    fontFamily: {
                        "display": ["Space Grotesk"]
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    ` }} />

      <div className="bg-background-light dark:bg-background-dark font-display min-h-screen flex flex-col items-center py-10 px-4" style={{minHeight: '100vh', width: '100%'}} dangerouslySetInnerHTML={{ __html: `
<!-- Main Card Container -->
<div class="w-full max-w-[520px] bg-white dark:bg-slate-900 shadow-xl rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
<!-- 1. Language Toggle Bar -->
<div class="flex justify-end gap-2 p-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
<div class="flex bg-slate-200 dark:bg-slate-700 p-1 rounded-lg">
<button class="px-3 py-1 text-xs font-bold rounded-md text-slate-600 dark:text-slate-400">HI</button>
<button class="px-3 py-1 text-xs font-bold rounded-md bg-primary text-white shadow-sm">EN</button>
<button class="px-3 py-1 text-xs font-bold rounded-md text-slate-600 dark:text-slate-400">KN</button>
<button class="px-3 py-1 text-xs font-bold rounded-md text-slate-600 dark:text-slate-400">TE</button>
<button class="px-3 py-1 text-xs font-bold rounded-md text-slate-600 dark:text-slate-400">MR</button>
</div>
</div>
<div class="p-6 flex flex-col gap-6">
<!-- 2. Header Card -->
<div class="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary via-indigo-600 to-violet-700 p-6 text-white shadow-lg shadow-primary/20">
<div class="absolute top-0 right-0 p-4 opacity-10">
<span class="material-symbols-outlined text-8xl">verified_user</span>
</div>
<div class="relative z-10 flex flex-col gap-3">
<div class="flex items-center gap-2">
<span class="material-symbols-outlined text-xl">shield</span>
<h1 class="text-lg font-bold tracking-tight">TARKSHYA SOLUTION</h1>
</div>
<div class="flex flex-col">
<p class="text-3xl font-bold flex items-center gap-2">
<span class="material-symbols-outlined text-2xl">directions_car</span>
                            Vehicle Tag
                        </p>
<p class="mt-4 font-mono text-sm opacity-90 tracking-wider bg-white/10 w-fit px-3 py-1 rounded">ID: TAG-7890-XYZ</p>
</div>
</div>
<div class="absolute bottom-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mb-16"></div>
</div>
<!-- 3. Sponsor Banner -->
<div class="flex items-center justify-between p-4 rounded-lg border-2 border-accent-amber/30 bg-accent-amber/5 group cursor-pointer hover:bg-accent-amber/10 transition-colors">
<div class="flex flex-col">
<span class="text-accent-amber font-bold text-xs uppercase tracking-widest flex items-center gap-1">
<span class="material-symbols-outlined text-sm">stars</span> SPONSORED
                    </span>
<p class="text-slate-700 dark:text-slate-300 font-medium text-sm mt-1">Exclusive offers for vehicle owners</p>
</div>
<div class="flex items-center text-primary font-bold text-sm">
                    Click to view offer
                    <span class="material-symbols-outlined ml-1">arrow_forward</span>
</div>
</div>
<!-- 4. Owner Info Card -->
<div class="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-xl border border-slate-100 dark:border-slate-800">
<div class="flex gap-5 items-center">
<div class="relative">
<img alt="Owner portrait" class="w-20 h-20 rounded-full border-4 border-white dark:border-slate-700 shadow-md object-cover" data-alt="Professional portrait of a man smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzrc1-B43vcjdAx-EayCXZfA-ZztS9Pc4cidtFsFnlse1_2jTdSygeJD2KOkvJrrRd_WJwDO1cX1hW6ZxLBaEG8oSsXGEnq6ZEq6cuHVCm25iuT8nIuv-64YDFx9hRXYltYC9-BfCKZZQrtjdg-vLd0VMN-otUfF5MKpzYB2Tfz63MPF07J3mbLoiq0XjQB_T2BTGh0l655X9_rjk4yuqac81CiTyoWqmXxfhS8s0MowN9ZUPNc7h-lKvzdzA4ZEyUdWxNS7EgYoE">
<div class="absolute -bottom-1 -right-1 bg-green-500 w-5 h-5 rounded-full border-2 border-white dark:border-slate-700"></div>
</div>
<div class="flex-1">
<div class="flex items-center gap-2">
<h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">Rajesh Kumar</h2>
<span class="bg-accent-amber/20 text-accent-amber text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 border border-accent-amber/30">
<span class="material-symbols-outlined text-[12px] fill-1">star</span> PREMIUM
                            </span>
</div>
<div class="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-600 dark:text-slate-400">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-base">directions_car</span> Car</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-base">calendar_today</span> Valid Till: Dec 2026</span>
</div>
</div>
</div>
</div>
<!-- 5. Message Box -->
<div class="bg-accent-amber/10 border-l-4 border-accent-amber p-4 rounded-r-lg flex gap-3">
<span class="material-symbols-outlined text-accent-amber">campaign</span>
<p class="text-slate-800 dark:text-slate-200 text-sm font-medium leading-relaxed">
                    Please call if vehicle is causing obstruction
                </p>
</div>
<!-- 6. Action Buttons -->
<div class="flex flex-col gap-3">
<button class="w-full bg-primary hover:bg-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-3 transition-all active:scale-[0.98]">
<span class="material-symbols-outlined">call</span>
                    CALL OWNER (Privacy Protected)
                </button>
<button class="w-full bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-[0.98]">
<span class="material-symbols-outlined">emergency</span>
                    EMERGENCY CONTACT
                </button>
</div>
<!-- 7. Location Row -->
<div class="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-dashed border-slate-300 dark:border-slate-700">
<div class="flex items-center gap-3 text-slate-700 dark:text-slate-300">
<span class="material-symbols-outlined text-slate-400">location_on</span>
<span class="font-medium">Share Your Location?</span>
</div>
<button class="bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-5 py-2 rounded-lg transition-colors shadow-sm">
                    Share
                </button>
</div>
<!-- 8. How It Works -->
<div class="py-4">
<h3 class="text-slate-400 text-xs font-bold uppercase tracking-widest mb-6 text-center">How It Works</h3>
<div class="grid grid-cols-3 gap-4">
<div class="flex flex-col items-center text-center gap-2">
<div class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary font-bold">1</div>
<p class="text-[10px] text-slate-500 font-medium">Scan the Tag</p>
</div>
<div class="flex flex-col items-center text-center gap-2">
<div class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary font-bold">2</div>
<p class="text-[10px] text-slate-500 font-medium">Notify Owner</p>
</div>
<div class="flex flex-col items-center text-center gap-2">
<div class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-primary font-bold">3</div>
<p class="text-[10px] text-slate-500 font-medium">Issue Resolved</p>
</div>
</div>
</div>
</div>
<!-- 9. Footer -->
<div class="p-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 text-center">
<p class="text-slate-400 text-sm font-medium flex items-center justify-center gap-2">
                Powered by 
                <span class="text-slate-600 dark:text-slate-300 font-bold">Tarkshya Solution</span>
</p>
</div>
</div>
<!-- Additional minimalist contact info -->
<div class="mt-8 text-slate-400 text-xs flex gap-6">
<a class="hover:text-primary transition-colors" href="#">Privacy Policy</a>
<a class="hover:text-primary transition-colors" href="#">Terms of Service</a>
<a class="hover:text-primary transition-colors" href="#">Support</a>
</div>
` }} />
    </>
  );
}
