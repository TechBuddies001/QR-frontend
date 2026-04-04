
import React from 'react';
import Script from 'next/script';

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
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
                        "primary": "#4F46E5",
                        "background-light": "#f6f6f8",
                        "background-dark": "#121121",
                    },
                    fontFamily: {
                        "display": ["Space Grotesk"]
                    },
                    borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
                },
            },
        }
    ` }} />

      <div className="bg-background-light dark:bg-background-dark min-w-[1280px]" style={{minHeight: '100vh', width: '100%'}} dangerouslySetInnerHTML={{ __html: `
<div class="flex h-screen overflow-hidden">
<!-- Sidebar -->
<aside class="w-64 flex-shrink-0 border-r border-primary/10 bg-white dark:bg-background-dark flex flex-col">
<div class="p-6 flex items-center gap-3">
<div class="h-10 w-10 bg-primary rounded-xl flex items-center justify-center text-white">
<span class="material-symbols-outlined">shield</span>
</div>
<div>
<h1 class="text-slate-900 dark:text-slate-100 font-bold text-lg leading-tight">Tarkshya</h1>
<p class="text-primary text-xs font-medium">Management Portal</p>
</div>
</div>
<nav class="flex-1 px-4 space-y-2 mt-4">
<a class="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-primary/5 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="text-sm font-medium">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 bg-primary text-white rounded-lg shadow-sm shadow-primary/20" href="#">
<span class="material-symbols-outlined">qr_code_2</span>
<span class="text-sm font-medium">Generate QR</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-primary/5 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">inventory_2</span>
<span class="text-sm font-medium">Inventory</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-primary/5 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">receipt_long</span>
<span class="text-sm font-medium">Transactions</span>
</a>
<a class="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-primary/5 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">group</span>
<span class="text-sm font-medium">Users</span>
</a>
</nav>
<div class="p-4 border-t border-primary/10">
<a class="flex items-center gap-3 px-3 py-2.5 text-slate-600 dark:text-slate-400 hover:bg-primary/5 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="text-sm font-medium">Settings</span>
</a>
</div>
</aside>
<!-- Main Content -->
<main class="flex-1 flex flex-col overflow-y-auto">
<!-- Header -->
<header class="h-16 border-b border-primary/10 bg-white dark:bg-background-dark flex items-center justify-between px-8">
<div class="flex items-center gap-4">
<h2 class="text-slate-900 dark:text-slate-100 font-bold text-xl">Generate QR</h2>
</div>
<div class="flex items-center gap-6">
<div class="relative w-64">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
<input class="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20" placeholder="Search anything..." type="text">
</div>
<div class="flex items-center gap-2">
<button class="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
<span class="material-symbols-outlined">notifications</span>
</button>
<button class="flex items-center gap-2 p-1 pl-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
<div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
<span class="material-symbols-outlined text-primary text-sm">person</span>
</div>
<span class="text-sm font-medium text-slate-700 dark:text-slate-300 pr-2">Admin User</span>
</button>
</div>
</div>
</header>
<!-- Tabs Navigation -->
<div class="px-8 bg-white dark:bg-background-dark">
<div class="flex border-b border-slate-200 dark:border-slate-800">
<button class="px-6 py-4 text-sm font-bold border-b-2 border-primary text-primary">Single QR</button>
<button class="px-6 py-4 text-sm font-medium border-b-2 border-transparent text-slate-500 hover:text-slate-700">Bulk Generate</button>
</div>
</div>
<!-- Page Content -->
<div class="p-8">
<div class="mb-8">
<h3 class="text-2xl font-bold text-slate-900 dark:text-slate-100">Generate Single QR Tag</h3>
<p class="text-slate-500 text-sm mt-1">Configure and preview your custom QR tags with specified parameters.</p>
</div>
<!-- 2-Column Grid -->
<div class="grid grid-cols-12 gap-8">
<!-- Left: Form -->
<div class="col-span-7 space-y-6">
<div class="bg-white dark:bg-background-dark p-6 rounded-xl border border-primary/10 shadow-sm">
<div class="grid grid-cols-2 gap-6">
<div class="space-y-2">
<label class="text-sm font-semibold text-slate-700 dark:text-slate-300">Tag Type</label>
<select class="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm p-3">
<option>RFID Vinyl Tag</option>
<option>Metal Tag</option>
<option>Glass Sticker</option>
</select>
</div>
<div class="space-y-2">
<label class="text-sm font-semibold text-slate-700 dark:text-slate-300">Vehicle Type</label>
<select class="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm p-3">
<option>Passenger Car</option>
<option>Commercial Truck</option>
<option>Motorcycle</option>
</select>
</div>
<div class="space-y-2">
<label class="text-sm font-semibold text-slate-700 dark:text-slate-300">Tag ID</label>
<input class="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm p-3" placeholder="e.g. TRK-992384" type="text">
</div>
<div class="space-y-2">
<label class="text-sm font-semibold text-slate-700 dark:text-slate-300">Plan</label>
<select class="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm p-3">
<option>Enterprise Annual</option>
<option>Standard Monthly</option>
</select>
</div>
<div class="space-y-2">
<label class="text-sm font-semibold text-slate-700 dark:text-slate-300">Validity (Months)</label>
<input class="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm p-3" type="number" value="12">
</div>
<div class="space-y-2">
<label class="text-sm font-semibold text-slate-700 dark:text-slate-300">Sponsor</label>
<input class="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm p-3" placeholder="Client Name or Dept" type="text">
</div>
<div class="space-y-2">
<label class="text-sm font-semibold text-slate-700 dark:text-slate-300">Size</label>
<select class="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm p-3">
<option>Medium (512x512)</option>
<option>Small (256x256)</option>
<option>Large (1024x1024)</option>
</select>
</div>
<div class="space-y-2">
<label class="text-sm font-semibold text-slate-700 dark:text-slate-300">Format</label>
<select class="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:border-primary focus:ring-primary text-sm p-3">
<option>SVG (Scalable Vector)</option>
<option>PNG (Transparent)</option>
<option>PDF (Print ready)</option>
</select>
</div>
</div>
</div>
</div>
<!-- Right: Preview -->
<div class="col-span-5">
<div class="bg-white dark:bg-background-dark p-8 rounded-xl border border-primary/10 shadow-sm flex flex-col items-center">
<h4 class="text-sm font-bold text-slate-500 uppercase tracking-wider mb-8">QR Tag Preview</h4>
<div class="relative group">
<div class="w-72 h-72 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-700 mb-8 p-6">
<!-- QR Image Placeholder -->
<div class="bg-white p-4 rounded-xl shadow-lg">
<img alt="Generated QR code" class="w-full h-full" data-alt="Modern QR code with Tarkshya logo in the middle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAksYyTDvUb6GOFWoD3P6eqroam7kAAsNGPCnu3F0zf5u8bdSW3L5IROgAoMCyDuIHGvq6lrfgpPtZi69wUp3HHyRN-9MR451djJ8sDX-TxlzQCQ0YkOjPcU0iBynDwd6Y5GWBywkjjkZfav-h9re6AQfq3BugPDvlKq5N6vCwdYyel7FUyummtFjTnt4bTaxUTUIlKpVMF_e_NCxNWCjrcB32wdOdn2N7wgIFAo79UkWI33ZHVCf7DjG9AYWuWj_3f-Kl6x3XlvM8">
</div>
</div>
<div class="absolute -top-3 -right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">Dynamic</div>
</div>
<div class="w-full space-y-4">
<div class="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg flex justify-between items-center">
<div class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary">verified</span>
<div>
<p class="text-xs font-bold text-slate-900 dark:text-slate-100">TRK-992384</p>
<p class="text-[10px] text-slate-500">Ready to print</p>
</div>
</div>
<button class="text-primary text-xs font-bold hover:underline">Change ID</button>
</div>
<div class="flex gap-3">
<button class="flex-1 bg-primary text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-all">
<span class="material-symbols-outlined text-lg">download</span>
                                        Download Tag
                                    </button>
<button class="px-5 border border-slate-200 dark:border-slate-700 py-3 rounded-lg flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
<span class="material-symbols-outlined">print</span>
</button>
</div>
</div>
</div>
<!-- System Status -->
<div class="mt-6 bg-primary/5 border border-primary/10 rounded-xl p-4 flex items-start gap-3">
<span class="material-symbols-outlined text-primary text-sm mt-0.5">info</span>
<p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                                Tags are generated using the Tarkshya Dynamic Engine. Printed tags can be scanned and updated in real-time from the dashboard after activation.
                            </p>
</div>
</div>
</div>
</div>
</main>
</div>
` }} />
    </>
  );
}
