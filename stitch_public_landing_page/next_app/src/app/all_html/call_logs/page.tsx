
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

      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-w-[1280px]" style={{minHeight: '100vh', width: '100%'}} dangerouslySetInnerHTML={{ __html: `
<div class="flex h-screen overflow-hidden">
<!-- Sidebar -->
<aside class="w-64 flex-shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark flex flex-col h-full overflow-y-auto">
<div class="p-6 flex items-center gap-3">
<div class="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white">
<span class="material-symbols-outlined">shield_person</span>
</div>
<div>
<h1 class="text-lg font-bold leading-none">Tarkshya</h1>
<p class="text-xs text-slate-500 font-medium uppercase tracking-wider mt-1">Admin Portal</p>
</div>
</div>
<nav class="flex-1 px-4 py-4 space-y-1">
<a class="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">dashboard</span>
<span class="text-sm font-medium">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">analytics</span>
<span class="text-sm font-medium">Analytics</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-lg transition-colors" href="/admin/call-logs">
<span class="material-symbols-outlined">call</span>
<span class="text-sm font-semibold">Call Logs</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">group</span>
<span class="text-sm font-medium">Users</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined">settings</span>
<span class="text-sm font-medium">Settings</span>
</a>
</nav>
<div class="p-4 mt-auto border-t border-slate-200 dark:border-slate-800">
<div class="flex items-center gap-3 px-2 py-3">
<div class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 bg-cover bg-center" data-alt="Admin user avatar thumbnail" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCND7sL2Knwea2CE4X6hUiPplU4J7pZhHBIwU1AYdmdh7wFD3I02IxopO1nLlzasQQdJjR5hAsEgpregijOLROkmpXhel3c56TDMyGa8SnLRg--BnfP9ewfhZYpS536eYK2N-s0-JZrA8IzSwfw8nFObGlGR2fmzKmRANWxxo79qDW593W1Z9FTfLIlEoKvB_4EWOkbotpaSRVy-EFDCPB_-ol2vcairKazbshNZPlAFoHwdZsbJ-kDKOWSUoObjUBA_0zpb2T3m0Y')"></div>
<div class="flex-1 min-w-0">
<p class="text-sm font-medium truncate">Admin User</p>
<p class="text-xs text-slate-500 truncate">admin@tarkshya.com</p>
</div>
<span class="material-symbols-outlined text-slate-400 text-sm">logout</span>
</div>
</div>
</aside>
<!-- Main Content -->
<main class="flex-1 flex flex-col min-w-0 overflow-hidden">
<!-- Header -->
<header class="h-16 flex-shrink-0 bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8">
<div class="flex items-center gap-4">
<h2 class="text-xl font-bold">Call Logs</h2>
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
<input class="pl-10 pr-4 py-1.5 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm w-80 focus:ring-2 focus:ring-primary/50" placeholder="Search by Call ID or Tag ID..." type="text">
</div>
</div>
<div class="flex items-center gap-3">
<button class="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg relative">
<span class="material-symbols-outlined">notifications</span>
<span class="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></span>
</button>
<button class="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
<span class="material-symbols-outlined">help</span>
</button>
</div>
</header>
<!-- Scrollable Content -->
<div class="flex-1 overflow-y-auto p-8 space-y-6">
<!-- Filter Bar -->
<div class="flex items-center justify-between bg-white dark:bg-background-dark p-2 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<div class="flex items-center gap-1">
<button class="px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg">Today</button>
<button class="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">Last 7 Days</button>
<button class="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">Last 30 Days</button>
<div class="h-6 w-px bg-slate-200 dark:border-slate-700 mx-1"></div>
<button class="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg flex items-center gap-2">
<span class="material-symbols-outlined text-lg">calendar_month</span>
                            Custom Range
                        </button>
</div>
<div class="flex items-center gap-2 px-2">
<button class="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">
<span class="material-symbols-outlined text-lg">filter_list</span>
                            More Filters
                        </button>
<button class="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-lg">
<span class="material-symbols-outlined text-lg">download</span>
                            Export CSV
                        </button>
</div>
</div>
<!-- Stats Row -->
<div class="grid grid-cols-5 gap-4">
<div class="bg-white dark:bg-background-dark p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<p class="text-sm font-medium text-slate-500 mb-2">Total Calls</p>
<div class="flex items-baseline justify-between">
<h3 class="text-2xl font-bold">1,284</h3>
<span class="text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full">+12%</span>
</div>
</div>
<div class="bg-white dark:bg-background-dark p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<p class="text-sm font-medium text-slate-500 mb-2">Connected</p>
<div class="flex items-baseline justify-between">
<h3 class="text-2xl font-bold">1,102</h3>
<span class="text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full">+8%</span>
</div>
</div>
<div class="bg-white dark:bg-background-dark p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<p class="text-sm font-medium text-slate-500 mb-2">Failed</p>
<div class="flex items-baseline justify-between">
<h3 class="text-2xl font-bold">182</h3>
<span class="text-xs font-semibold text-rose-600 bg-rose-50 dark:bg-rose-500/10 px-2 py-0.5 rounded-full">-5%</span>
</div>
</div>
<div class="bg-white dark:bg-background-dark p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<p class="text-sm font-medium text-slate-500 mb-2">Avg. Duration</p>
<div class="flex items-baseline justify-between">
<h3 class="text-2xl font-bold">4m 12s</h3>
<span class="text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-2 py-0.5 rounded-full">+2%</span>
</div>
</div>
<div class="bg-white dark:bg-background-dark p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
<p class="text-sm font-medium text-slate-500 mb-2">Success %</p>
<div class="flex items-baseline justify-between">
<h3 class="text-2xl font-bold">85.8%</h3>
<span class="text-xs font-semibold text-rose-600 bg-rose-50 dark:bg-rose-500/10 px-2 py-0.5 rounded-full">-1%</span>
</div>
</div>
</div>
<!-- Detailed Table -->
<div class="bg-white dark:bg-background-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
<div class="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
<h3 class="text-lg font-bold">Detailed Call Records</h3>
<div class="flex items-center gap-4">
<span class="text-sm text-slate-500">Showing 1-10 of 1,284 results</span>
</div>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="bg-slate-50 dark:bg-slate-800/50">
<th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Call ID</th>
<th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Tag ID</th>
<th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Plan</th>
<th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Scanner #</th>
<th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Owner #</th>
<th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Duration</th>
<th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Status</th>
<th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Timestamp</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-200 dark:divide-slate-800">
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td class="px-6 py-4 text-sm font-medium font-mono text-primary">#CAL-94212</td>
<td class="px-6 py-4 text-sm font-medium">TG-8821</td>
<td class="px-6 py-4 text-sm">Enterprise Plus</td>
<td class="px-6 py-4 text-sm">+1 (555) 012-3456</td>
<td class="px-6 py-4 text-sm">+91 98765-43210</td>
<td class="px-6 py-4 text-sm font-medium">08:45</td>
<td class="px-6 py-4 text-sm">
<span class="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-400">
<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            Connected
                                        </span>
</td>
<td class="px-6 py-4 text-sm text-slate-500">Oct 24, 2023 10:45 AM</td>
</tr>
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td class="px-6 py-4 text-sm font-medium font-mono text-primary">#CAL-94211</td>
<td class="px-6 py-4 text-sm font-medium">TG-7634</td>
<td class="px-6 py-4 text-sm">Business Basic</td>
<td class="px-6 py-4 text-sm">+1 (555) 012-8899</td>
<td class="px-6 py-4 text-sm">+91 76543-21098</td>
<td class="px-6 py-4 text-sm font-medium">00:00</td>
<td class="px-6 py-4 text-sm">
<span class="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800 dark:bg-rose-500/10 dark:text-rose-400">
<span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                                            Failed
                                        </span>
</td>
<td class="px-6 py-4 text-sm text-slate-500">Oct 24, 2023 10:42 AM</td>
</tr>
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td class="px-6 py-4 text-sm font-medium font-mono text-primary">#CAL-94210</td>
<td class="px-6 py-4 text-sm font-medium">TG-5521</td>
<td class="px-6 py-4 text-sm">Enterprise Plus</td>
<td class="px-6 py-4 text-sm">+1 (555) 012-3456</td>
<td class="px-6 py-4 text-sm">+91 99001-12233</td>
<td class="px-6 py-4 text-sm font-medium">12:30</td>
<td class="px-6 py-4 text-sm">
<span class="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-400">
<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            Connected
                                        </span>
</td>
<td class="px-6 py-4 text-sm text-slate-500">Oct 24, 2023 10:30 AM</td>
</tr>
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td class="px-6 py-4 text-sm font-medium font-mono text-primary">#CAL-94209</td>
<td class="px-6 py-4 text-sm font-medium">TG-1022</td>
<td class="px-6 py-4 text-sm">Business Basic</td>
<td class="px-6 py-4 text-sm">+1 (555) 012-0011</td>
<td class="px-6 py-4 text-sm">+91 88776-65544</td>
<td class="px-6 py-4 text-sm font-medium">04:15</td>
<td class="px-6 py-4 text-sm">
<span class="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-500/10 dark:text-amber-400">
<span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                            Dropped
                                        </span>
</td>
<td class="px-6 py-4 text-sm text-slate-500">Oct 24, 2023 10:15 AM</td>
</tr>
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td class="px-6 py-4 text-sm font-medium font-mono text-primary">#CAL-94208</td>
<td class="px-6 py-4 text-sm font-medium">TG-9932</td>
<td class="px-6 py-4 text-sm">Enterprise Plus</td>
<td class="px-6 py-4 text-sm">+1 (555) 012-3456</td>
<td class="px-6 py-4 text-sm">+91 91223-34455</td>
<td class="px-6 py-4 text-sm font-medium">05:55</td>
<td class="px-6 py-4 text-sm">
<span class="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-400">
<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            Connected
                                        </span>
</td>
<td class="px-6 py-4 text-sm text-slate-500">Oct 24, 2023 10:05 AM</td>
</tr>
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
<td class="px-6 py-4 text-sm font-medium font-mono text-primary">#CAL-94207</td>
<td class="px-6 py-4 text-sm font-medium">TG-4401</td>
<td class="px-6 py-4 text-sm">Free Trial</td>
<td class="px-6 py-4 text-sm">+1 (555) 012-7777</td>
<td class="px-6 py-4 text-sm">+91 70001-22233</td>
<td class="px-6 py-4 text-sm font-medium">01:20</td>
<td class="px-6 py-4 text-sm">
<span class="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-500/10 dark:text-emerald-400">
<span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                            Connected
                                        </span>
</td>
<td class="px-6 py-4 text-sm text-slate-500">Oct 24, 2023 09:55 AM</td>
</tr>
</tbody>
</table>
</div>
<div class="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
<button class="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50" disabled="">Previous</button>
<div class="flex items-center gap-1">
<button class="w-10 h-10 flex items-center justify-center text-sm font-bold bg-primary text-white rounded-lg">1</button>
<button class="w-10 h-10 flex items-center justify-center text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">2</button>
<button class="w-10 h-10 flex items-center justify-center text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">3</button>
<span class="px-2 text-slate-400">...</span>
<button class="w-10 h-10 flex items-center justify-center text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">129</button>
</div>
<button class="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">Next</button>
</div>
</div>
</div>
</main>
</div>
` }} />
    </>
  );
}
