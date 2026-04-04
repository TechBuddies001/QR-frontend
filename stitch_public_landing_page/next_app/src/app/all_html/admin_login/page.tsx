
import React from 'react';
import Script from 'next/script';

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<style>
        body {
            font-family: 'Space Grotesk', sans-serif;
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
                        "primary": "#5048e5",
                        "background-light": "#F1F5F9",
                        "background-dark": "#121121",
                    },
                    fontFamily: {
                        "display": ["Space Grotesk", "sans-serif"]
                    },
                    borderRadius: {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                },
            },
        }
    ` }} />

      <div className="bg-background-light dark:bg-background-dark min-h-screen flex items-center justify-center p-6" style={{minHeight: '100vh', width: '100%'}} dangerouslySetInnerHTML={{ __html: `
<div class="w-full max-w-[420px]">
<!-- Main Card -->
<div class="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
<!-- Header Section -->
<div class="pt-10 pb-6 px-8 flex flex-col items-center text-center">
<div class="w-20 h-20 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-6 ring-8 ring-primary/5">
<span class="text-4xl">🛡️</span>
</div>
<h1 class="text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">Admin Panel</h1>
<p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Tarkshya Solution</p>
</div>
<!-- Form Section -->
<form class="px-8 pb-8 space-y-5" onsubmit="event.preventDefault();">
<!-- Email Input -->
<div class="space-y-2">
<label class="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]">mail</span>
                        Email Address
                    </label>
<input class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none placeholder:text-slate-400" placeholder="admin@tarkshya.com" type="email">
</div>
<!-- Password Input -->
<div class="space-y-2">
<label class="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]">lock</span>
                        Password
                    </label>
<input class="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none placeholder:text-slate-400" placeholder="••••••••" type="password">
</div>
<!-- Helpers -->
<div class="flex items-center justify-between text-sm">
<label class="flex items-center gap-2 cursor-pointer group">
<input class="rounded border-slate-300 text-primary focus:ring-primary transition-colors" type="checkbox">
<span class="text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">Remember me</span>
</label>
<a class="text-primary font-medium hover:underline" href="#">Forgot Password?</a>
</div>
<!-- Action Button -->
<button class="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-lg transition-all shadow-lg shadow-primary/20 active:scale-[0.98]" type="submit">
                    LOGIN
                </button>
<!-- Divider -->
<div class="relative py-4">
<div class="absolute inset-0 flex items-center">
<div class="w-full border-t border-slate-200 dark:border-slate-800"></div>
</div>
<div class="relative flex justify-center text-xs uppercase">
<span class="bg-white dark:bg-slate-900 px-3 text-slate-500 font-medium">Secondary Security</span>
</div>
</div>
<!-- 2FA Section -->
<div class="space-y-4">
<div class="flex flex-col items-center gap-2">
<p class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Two-Factor Authentication</p>
<div class="flex gap-2 justify-center">
<input class="w-[40px] h-[48px] text-center font-mono text-xl font-bold border-2 border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 focus:border-primary focus:ring-0 outline-none" maxlength="1" type="text">
<input class="w-[40px] h-[48px] text-center font-mono text-xl font-bold border-2 border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 focus:border-primary focus:ring-0 outline-none" maxlength="1" type="text">
<input class="w-[40px] h-[48px] text-center font-mono text-xl font-bold border-2 border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 focus:border-primary focus:ring-0 outline-none" maxlength="1" type="text">
<input class="w-[40px] h-[48px] text-center font-mono text-xl font-bold border-2 border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 focus:border-primary focus:ring-0 outline-none" maxlength="1" type="text">
<input class="w-[40px] h-[48px] text-center font-mono text-xl font-bold border-2 border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 focus:border-primary focus:ring-0 outline-none" maxlength="1" type="text">
<input class="w-[40px] h-[48px] text-center font-mono text-xl font-bold border-2 border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 focus:border-primary focus:ring-0 outline-none" maxlength="1" type="text">
</div>
</div>
</div>
</form>
<!-- Footer Info -->
<div class="bg-slate-50 dark:bg-slate-800/50 py-4 px-8 border-t border-slate-200 dark:border-slate-800 text-center">
<p class="text-xs text-slate-400 dark:text-slate-500 flex items-center justify-center gap-1">
<span class="material-symbols-outlined text-[14px]">verified_user</span>
                    Secure Encrypted Connection
                </p>
</div>
</div>
<!-- Bottom Links -->
<div class="mt-8 flex justify-center gap-6">
<a class="text-xs font-medium text-slate-400 hover:text-primary transition-colors uppercase tracking-wider" href="#">Support</a>
<a class="text-xs font-medium text-slate-400 hover:text-primary transition-colors uppercase tracking-wider" href="#">Privacy Policy</a>
<a class="text-xs font-medium text-slate-400 hover:text-primary transition-colors uppercase tracking-wider" href="#">Status</a>
</div>
</div>
` }} />
    </>
  );
}
