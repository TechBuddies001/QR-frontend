
import React from 'react';
import Script from 'next/script';

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<style>
        body {
            font-family: 'Public Sans', sans-serif;
        }
    </style>
` }} />
      <Script src="https://cdn.tailwindcss.com/?plugins=forms,container-queries" strategy="beforeInteractive" />
<Script id="inline-script-0" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: `
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#4f46e5",
                        "background-light": "#F1F5F9",
                        "background-dark": "#1e293b",
                        "amber-accent": "#f59e0b",
                        "emergency-red": "#dc2626"
                    },
                    fontFamily: {
                        "display": ["Public Sans", "sans-serif"]
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    ` }} />

      <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col items-center py-10 px-4" style={{minHeight: '100vh', width: '100%'}} dangerouslySetInnerHTML={{ __html: `
<!-- Language Toggle Section (Outside card for accessibility) -->
<div class="w-full max-w-[520px] mb-6">
<div class="flex h-11 items-center justify-center rounded-xl bg-slate-200 dark:bg-slate-800 p-1 shadow-sm">
<label class="flex cursor-pointer h-full grow items-center justify-center rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-sm text-slate-600 dark:text-slate-400 has-[:checked]:text-primary text-xs font-bold transition-all uppercase">
<span>HI</span>
<input class="hidden" name="lang" type="radio" value="HI">
</label>
<label class="flex cursor-pointer h-full grow items-center justify-center rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-sm text-slate-600 dark:text-slate-400 has-[:checked]:text-primary text-xs font-bold transition-all uppercase">
<span>EN</span>
<input checked="" class="hidden" name="lang" type="radio" value="EN">
</label>
<label class="flex cursor-pointer h-full grow items-center justify-center rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-sm text-slate-600 dark:text-slate-400 has-[:checked]:text-primary text-xs font-bold transition-all uppercase">
<span>KN</span>
<input class="hidden" name="lang" type="radio" value="KN">
</label>
<label class="flex cursor-pointer h-full grow items-center justify-center rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-sm text-slate-600 dark:text-slate-400 has-[:checked]:text-primary text-xs font-bold transition-all uppercase">
<span>TE</span>
<input class="hidden" name="lang" type="radio" value="TE">
</label>
<label class="flex cursor-pointer h-full grow items-center justify-center rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-sm text-slate-600 dark:text-slate-400 has-[:checked]:text-primary text-xs font-bold transition-all uppercase">
<span>MR</span>
<input class="hidden" name="lang" type="radio" value="MR">
</label>
</div>
</div>
<!-- Main Card Container -->
<main class="w-full max-w-[520px] bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-800">
<!-- Indigo Gradient Header -->
<header class="bg-gradient-to-br from-indigo-600 to-primary p-8 text-white relative">
<div class="flex items-start justify-between">
<div class="flex flex-col gap-2">
<div class="flex items-center gap-2 bg-white/20 w-fit px-3 py-1 rounded-full backdrop-blur-md">
<span class="material-symbols-outlined text-sm">sell</span>
<span class="text-xs font-bold tracking-wider uppercase">Verified Asset</span>
</div>
<h1 class="text-3xl font-extrabold tracking-tight mt-2">Tarkshya Solution</h1>
<p class="text-indigo-100 text-sm font-medium opacity-90">Asset ID: <span class="font-mono">TS-99210</span></p>
</div>
<div class="bg-white/10 p-3 rounded-2xl backdrop-blur-md">
<span class="material-symbols-outlined text-4xl">qr_code_2</span>
</div>
</div>
</header>
<!-- Amber Sponsor Banner -->
<div class="bg-amber-accent/10 border-y border-amber-200 dark:border-amber-900/30 px-6 py-3 flex items-center gap-3">
<span class="material-symbols-outlined text-amber-600 dark:text-amber-500 text-xl">verified</span>
<p class="text-amber-800 dark:text-amber-400 text-xs font-semibold uppercase tracking-wide">Securely Managed by Tarkshya Protocol</p>
</div>
<!-- Content Padding Area -->
<div class="p-6 space-y-6">
<!-- Owner Info Card -->
<div class="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 flex items-center gap-4 border border-slate-100 dark:border-slate-800">
<div class="relative">
<div class="size-16 rounded-full bg-slate-300 dark:bg-slate-700 overflow-hidden ring-4 ring-white dark:ring-slate-900 shadow-sm" data-alt="Professional headshot portrait of property owner" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4hcKitDbLkkUvgGb8lv3wErmQ3BqSRdJxA1ToDCtUK6nO7q9n6zriFAVls4asFQQors-dZ1fYTAU7Hz50UwVvIAnXrRntB7naV5qgUcI8nVSDSQi72TbkEtC-Q_l-K6u6wCVaE-8Th-3HLySV3r0Q_YzCJOH1H8_19eV7pIFwEaGMnLuunCi0bnFyvabpq7mfjhrmQ98-BBE2z11aYyoP2PQdwg_yUPTUaKmX_7gth-zIHxww5G609zOwg6AIu0W1LIGrXW5KQl4'); background-size: cover; background-position: center;"></div>
<div class="absolute bottom-0 right-0 size-5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
</div>
<div class="flex-1">
<h3 class="text-slate-900 dark:text-white font-bold text-lg">Rajesh Kumar</h3>
<p class="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-1">
<span class="material-symbols-outlined text-xs">location_on</span>
                        Bengaluru, Karnataka
                    </p>
</div>
<div class="bg-white dark:bg-slate-700 p-2 rounded-xl shadow-sm border border-slate-100 dark:border-slate-600">
<span class="material-symbols-outlined text-primary">contact_page</span>
</div>
</div>
<!-- Action Buttons -->
<div class="grid grid-cols-1 gap-3">
<button class="w-full flex items-center justify-center gap-3 bg-primary hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-indigo-200 dark:shadow-none">
<span class="material-symbols-outlined">call</span>
                    CALL OWNER
                </button>
<button class="w-full flex items-center justify-center gap-3 bg-white dark:bg-slate-800 border-2 border-emergency-red text-emergency-red hover:bg-emergency-red hover:text-white font-bold py-4 rounded-2xl transition-all">
<span class="material-symbols-outlined">emergency_share</span>
                    EMERGENCY CONTACT
                </button>
</div>
<hr class="border-slate-100 dark:border-slate-800">
<!-- How It Works Section -->
<div class="space-y-4">
<h4 class="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-xl">info</span>
                    How It Works
                </h4>
<div class="grid grid-cols-3 gap-4">
<div class="flex flex-col items-center text-center gap-2">
<div class="size-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-primary font-bold border border-indigo-100 dark:border-indigo-800">
                            1
                        </div>
<p class="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase leading-tight">Scan Asset QR</p>
</div>
<div class="flex flex-col items-center text-center gap-2">
<div class="size-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-primary font-bold border border-indigo-100 dark:border-indigo-800">
                            2
                        </div>
<p class="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase leading-tight">Verify Identity</p>
</div>
<div class="flex flex-col items-center text-center gap-2">
<div class="size-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-primary font-bold border border-indigo-100 dark:border-indigo-800">
                            3
                        </div>
<p class="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase leading-tight">Instant Connect</p>
</div>
</div>
</div>
</div>
<!-- Footer Footer -->
<footer class="bg-slate-50 dark:bg-slate-900/80 p-6 flex flex-col items-center gap-4 text-center border-t border-slate-100 dark:border-slate-800">
<div class="flex items-center gap-2 text-slate-400 dark:text-slate-600">
<span class="material-symbols-outlined text-lg">shield_with_heart</span>
<span class="text-xs font-medium">Powered by Tarkshya Security Protocol</span>
</div>
<div class="flex gap-6">
<a class="text-primary text-xs font-bold hover:underline underline-offset-4" href="#">Terms of Service</a>
<a class="text-primary text-xs font-bold hover:underline underline-offset-4" href="#">Privacy Policy</a>
<a class="text-primary text-xs font-bold hover:underline underline-offset-4" href="#">Support</a>
</div>
</footer>
</main>
<!-- Map/Location Placeholder -->
<div class="w-full max-w-[520px] mt-6 rounded-3xl overflow-hidden shadow-sm h-32 relative bg-slate-200 group cursor-pointer" data-alt="Stylized map showing Bengaluru city center" data-location="Bengaluru" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAj0jMGw5f5iTa5m79AbbgWfKdNKHLuRtZlwB17pG-dD1xHxdawihkSFDUhz2E7daz7N1E-RTpjmIJe2KrEGkLC_RQI63XX71qem-zHplXPvlrd0tR1nPilzx_WGBYKOBHT5DzYPRYFrSjeDGyJT_CzDJrmPfRaqmKrMIag340ShWlcNcdqg8ZfucizkasgSGahxFnm9cgnNYsx2XfCfpVvaheSBqNRGQxHK7pyPQ8M91-aikY96JE9_arhfl5FX9AXx6k6eREBmZs'); background-size: cover; background-position: center;">
<div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
<div class="bg-white/90 dark:bg-slate-900/90 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
<span class="material-symbols-outlined text-primary">map</span>
<span class="text-xs font-bold text-slate-900 dark:text-white uppercase">View on Map</span>
</div>
</div>
</div>
` }} />
    </>
  );
}
