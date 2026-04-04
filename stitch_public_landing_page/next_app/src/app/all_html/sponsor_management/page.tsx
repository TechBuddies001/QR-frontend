
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
        .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #e2e8f0;
            border-radius: 10px;
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

      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased font-display" style={{minHeight: '100vh', width: '100%'}} dangerouslySetInnerHTML={{ __html: `
<div class="flex h-screen overflow-hidden">
<!-- Sidebar -->
<aside class="w-64 flex-shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col">
<div class="p-6 flex items-center gap-3 border-b border-slate-100 dark:border-slate-800">
<div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
<span class="material-symbols-outlined text-2xl">shield_person</span>
</div>
<div>
<h1 class="text-slate-900 dark:text-white font-bold text-sm leading-tight">Tarkshya Admin</h1>
<p class="text-slate-500 text-xs">Management Portal</p>
</div>
</div>
<nav class="flex-1 overflow-y-auto p-4 space-y-2 custom-scrollbar">
<a class="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="text-sm font-medium">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">calendar_today</span>
<span class="text-sm font-medium">Events</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined fill-1">stars</span>
<span class="text-sm font-medium">Sponsors</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">group</span>
<span class="text-sm font-medium">Attendees</span>
</a>
<div class="pt-4 pb-2 px-3 text-[10px] uppercase font-bold tracking-wider text-slate-400">System</div>
<a class="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="text-sm font-medium">Settings</span>
</a>
</nav>
<div class="p-4 border-t border-slate-100 dark:border-slate-800">
<div class="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer">
<div class="w-8 h-8 rounded-full bg-slate-200" data-alt="User profile avatar circle" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuB54jv5yDY5_lrdTyy09C1o3q_IcuupRRoB_U-IH4GC8dkMGgUAXpNU97X6KR81ZGubwiXX6jB-ZqGwHVfGg3bNWeXZOPNhJ4n0C44vqfQGCaA5plvl3J3QGADb-IR8mPpwfhmV0mv30tY2Zi6ljXt6lePXp4mwvQ-SNDVMQFgc5Cn5s69GVKfWDLLs2ByShYA2x22xefvGueA4ViIAMrIE1JeiCbwA4_6nHeCcn-Z4Clc0srdxYdpHyXruEXxmmcf6wXeSFRtRVtE')"></div>
<div class="flex-1 min-w-0">
<p class="text-xs font-semibold truncate">Admin User</p>
<p class="text-[10px] text-slate-500 truncate">admin@tarkshya.io</p>
</div>
<span class="material-symbols-outlined text-slate-400 text-sm">logout</span>
</div>
</div>
</aside>
<!-- Main Content -->
<main class="flex-1 flex flex-col min-w-[1016px] overflow-hidden bg-background-light dark:bg-background-dark">
<!-- Header -->
<header class="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 z-10">
<div class="flex items-center gap-4">
<h2 class="text-lg font-bold text-slate-900 dark:text-white">Sponsor Management</h2>
<div class="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
<div class="relative group">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
<input class="pl-10 pr-4 py-1.5 bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary/20 rounded-lg text-sm w-64 transition-all" placeholder="Search sponsors..." type="text">
</div>
</div>
<div class="flex items-center gap-3">
<button class="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 relative">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
</button>
<button class="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all">
<span class="material-symbols-outlined text-sm">download</span>
                        Export CSV
                    </button>
</div>
</header>
<!-- Scrollable Content -->
<div class="flex-1 overflow-y-auto p-8 custom-scrollbar">
<div class="max-w-[1400px] mx-auto grid grid-cols-12 gap-8">
<!-- Left: Table -->
<div class="col-span-12 xl:col-span-7 space-y-6">
<div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
<div class="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
<h3 class="font-bold text-slate-900 dark:text-white">Active Sponsors</h3>
<div class="flex gap-2">
<span class="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-semibold">12 Active</span>
<span class="px-3 py-1 bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 rounded-full text-xs font-semibold">3 Pending</span>
</div>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left">
<thead class="bg-slate-50 dark:bg-slate-800/50">
<tr>
<th class="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Sponsor Name</th>
<th class="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Category</th>
<th class="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
<th class="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Validity</th>
<th class="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-100 dark:divide-slate-800">
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded bg-slate-100 flex items-center justify-center p-1 border border-slate-200 dark:border-slate-700">
<div class="w-full h-full bg-slate-300 rounded" data-alt="Company logo placeholder abstract tech"></div>
</div>
<div>
<p class="text-sm font-bold text-slate-900 dark:text-white">TechCorp Inc.</p>
<p class="text-[10px] text-slate-500">Infrastructure</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<span class="px-3 py-1 bg-primary/10 text-primary rounded-lg text-xs font-bold">Platinum</span>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-1.5 text-green-600 dark:text-green-400">
<span class="w-1.5 h-1.5 rounded-full bg-current"></span>
<span class="text-xs font-semibold">Active</span>
</div>
</td>
<td class="px-6 py-4">
<p class="text-xs text-slate-600 dark:text-slate-400">Dec 31, 2024</p>
</td>
<td class="px-6 py-4 text-right">
<button class="text-slate-400 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-lg">edit</span>
</button>
<button class="text-slate-400 hover:text-red-500 transition-colors ml-2">
<span class="material-symbols-outlined text-lg">delete</span>
</button>
</td>
</tr>
<!-- Row 2 -->
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded bg-slate-100 flex items-center justify-center p-1 border border-slate-200 dark:border-slate-700">
<div class="w-full h-full bg-slate-300 rounded" data-alt="Innovate AI company logo geometric"></div>
</div>
<div>
<p class="text-sm font-bold text-slate-900 dark:text-white">Innovate AI</p>
<p class="text-[10px] text-slate-500">Artificial Intelligence</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<span class="px-3 py-1 bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 rounded-lg text-xs font-bold">Gold</span>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-1.5 text-green-600 dark:text-green-400">
<span class="w-1.5 h-1.5 rounded-full bg-current"></span>
<span class="text-xs font-semibold">Active</span>
</div>
</td>
<td class="px-6 py-4">
<p class="text-xs text-slate-600 dark:text-slate-400">Nov 15, 2024</p>
</td>
<td class="px-6 py-4 text-right">
<button class="text-slate-400 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-lg">edit</span>
</button>
<button class="text-slate-400 hover:text-red-500 transition-colors ml-2">
<span class="material-symbols-outlined text-lg">delete</span>
</button>
</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
<td class="px-6 py-4">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded bg-slate-100 flex items-center justify-center p-1 border border-slate-200 dark:border-slate-700">
<div class="w-full h-full bg-slate-300 rounded" data-alt="Cloud Systems logo minimalist cloud"></div>
</div>
<div>
<p class="text-sm font-bold text-slate-900 dark:text-white">Cloud Systems</p>
<p class="text-[10px] text-slate-500">Cloud Platform</p>
</div>
</div>
</td>
<td class="px-6 py-4">
<span class="px-3 py-1 bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300 rounded-lg text-xs font-bold">Silver</span>
</td>
<td class="px-6 py-4">
<div class="flex items-center gap-1.5 text-amber-500">
<span class="w-1.5 h-1.5 rounded-full bg-current"></span>
<span class="text-xs font-semibold">Pending</span>
</div>
</td>
<td class="px-6 py-4">
<p class="text-xs text-slate-600 dark:text-slate-400">Jan 10, 2025</p>
</td>
<td class="px-6 py-4 text-right">
<button class="text-slate-400 hover:text-primary transition-colors">
<span class="material-symbols-outlined text-lg">edit</span>
</button>
<button class="text-slate-400 hover:text-red-500 transition-colors ml-2">
<span class="material-symbols-outlined text-lg">delete</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>
<div class="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
<p class="text-xs text-slate-500">Showing 1-3 of 15 entries</p>
<div class="flex gap-1">
<button class="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-400 cursor-not-allowed">
<span class="material-symbols-outlined text-sm">chevron_left</span>
</button>
<button class="w-8 h-8 flex items-center justify-center rounded border border-primary bg-primary text-white text-xs font-bold">1</button>
<button class="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors">2</button>
<button class="w-8 h-8 flex items-center justify-center rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 hover:bg-slate-50 transition-colors">
<span class="material-symbols-outlined text-sm">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
<!-- Right: Form -->
<div class="col-span-12 xl:col-span-5">
<div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl sticky top-0">
<div class="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
<span class="material-symbols-outlined text-primary">add_circle</span>
<h3 class="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-widest">Add / Edit Sponsor</h3>
</div>
<form class="p-6 space-y-6">
<!-- Logo Upload -->
<div class="space-y-2">
<label class="block text-xs font-bold text-slate-500 uppercase tracking-wider">Company Logo</label>
<div class="flex items-center gap-4">
<div class="w-20 h-20 rounded-lg bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-700 flex flex-col items-center justify-center text-slate-400 group cursor-pointer hover:border-primary transition-colors">
<span class="material-symbols-outlined text-2xl group-hover:text-primary">upload_file</span>
<span class="text-[10px] mt-1">Upload</span>
</div>
<div class="flex-1">
<p class="text-xs text-slate-600 dark:text-slate-400 mb-1">Recommended: Square SVG or PNG</p>
<p class="text-[10px] text-slate-400">Max size 2MB</p>
</div>
</div>
</div>
<!-- Basic Info -->
<div class="grid grid-cols-2 gap-4">
<div class="space-y-2">
<label class="block text-xs font-bold text-slate-500 uppercase tracking-wider">Sponsor Name</label>
<input class="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm px-4 py-2 focus:ring-primary focus:border-primary" placeholder="e.g. TechCorp" type="text">
</div>
<div class="space-y-2">
<label class="block text-xs font-bold text-slate-500 uppercase tracking-wider">Category</label>
<select class="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm px-4 py-2 focus:ring-primary focus:border-primary">
<option>Platinum</option>
<option>Gold</option>
<option>Silver</option>
<option>Bronze</option>
</select>
</div>
</div>
<!-- Description -->
<div class="space-y-2">
<label class="block text-xs font-bold text-slate-500 uppercase tracking-wider">Short Description</label>
<textarea class="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm px-4 py-2 focus:ring-primary focus:border-primary resize-none" placeholder="Describe the company's core mission..." rows="3"></textarea>
</div>
<!-- Contacts -->
<div class="space-y-2">
<label class="block text-xs font-bold text-slate-500 uppercase tracking-wider">Contact Information</label>
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-base">mail</span>
<input class="w-full pl-10 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm py-2 focus:ring-primary focus:border-primary" placeholder="contact@sponsor.com" type="email">
</div>
</div>
<!-- Validity & Tag Types -->
<div class="grid grid-cols-2 gap-4">
<div class="space-y-2">
<label class="block text-xs font-bold text-slate-500 uppercase tracking-wider">Valid Until</label>
<input class="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm px-4 py-2 focus:ring-primary focus:border-primary" type="date">
</div>
<div class="space-y-2">
<label class="block text-xs font-bold text-slate-500 uppercase tracking-wider">Tag Type</label>
<div class="flex flex-wrap gap-2 pt-1">
<label class="inline-flex items-center">
<input checked="" class="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox">
<span class="ml-2 text-xs text-slate-600 dark:text-slate-400">Digital</span>
</label>
<label class="inline-flex items-center">
<input class="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox">
<span class="ml-2 text-xs text-slate-600 dark:text-slate-400">Physical</span>
</label>
</div>
</div>
</div>
<!-- Actions -->
<div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex gap-3">
<button class="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-2.5 rounded-lg text-sm transition-all shadow-lg shadow-primary/20" type="submit">
                                        Save Sponsor
                                    </button>
<button class="px-6 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold py-2.5 rounded-lg text-sm transition-all" type="reset">
                                        Cancel
                                    </button>
</div>
</form>
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
