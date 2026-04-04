
import React from 'react';
import Script from 'next/script';

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700;800;900&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
` }} />
      <Script src="https://cdn.tailwindcss.com/?plugins=forms,container-queries" strategy="beforeInteractive" />
<Script id="inline-script-0" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: `
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        "primary": "#ec5b13",
                        "background-light": "#f8f6f6",
                        "background-dark": "#221610",
                    },
                    fontFamily: {
                        "display": ["Public Sans"]
                    },
                    borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
                },
            },
        }
    ` }} />

      <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen" style={{minHeight: '100vh', width: '100%'}} dangerouslySetInnerHTML={{ __html: `
    <div class="flex h-screen overflow-hidden">
        <!-- Sidebar -->
        <aside class="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark flex flex-col">
            <div class="p-6 flex flex-col gap-8 h-full">
                <!-- Profile Section -->
                <div class="flex items-center gap-3">
                    <div class="size-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                        <img alt="Company Logo" class="size-full object-cover" data-alt="Tarkshya Solution corporate logo icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf3PrPaYMigLPJwp11Yy0ayXi9MakjnH_9OnIPcAZGtw1Ih7Bfhh0XdxBsf7UpLnPH_0hq3WRFhXApL61zD8_yh_ycYO2nN12tdXXAIIvPlnHj8yI9JchXMy_W-wVHK6XzmblXbFPMrlo4j0nXipyYHA3k8VRFwEwD6_hzXoPLNdP2rIn1t8zWz5qq6IqqvGHLCdfeS8_EsPjYco9yigQzQZqlR7zh2DO5vjwJeaL-pHpU6eBec6FRsBhncxPT1nC_BZdP3hD27eI">
                    </div>
                    <div class="flex flex-col">
                        <h1 class="text-sm font-bold truncate">Tarkshya Solution</h1>
                        <p class="text-xs text-slate-500 dark:text-slate-400">Enterprise Admin</p>
                    </div>
                </div>
                <!-- Navigation -->
                <nav class="flex-1 px-4 space-y-1 mt-4 overflow-y-auto max-h-[calc(100vh-250px)]">
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/admin_dashboard_v3">
                        <span class="material-symbols-outlined text-lg">dashboard</span>
                        Dashboard
                    </a>
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/generate_qr_v3">
                        <span class="material-symbols-outlined text-lg">qr_code_2</span>
                        Generate QR
                    </a>
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/tag_management_v3">
                        <span class="material-symbols-outlined text-lg">label</span>
                        Tags
                    </a>
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/plans_packs_v3">
                        <span class="material-symbols-outlined text-lg">package</span>
                        Plans &amp; Packs
                    </a>
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/subscriptions_v3">
                        <span class="material-symbols-outlined text-lg">subscriptions</span>
                        Subscriptions
                    </a>
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/sponsor_management_v3">
                        <span class="material-symbols-outlined text-lg">loyalty</span>
                        Sponsors
                    </a>
                    <a class="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-lg" href="/call_logs_v3">
                        <span class="material-symbols-outlined text-lg">call</span>
                        Call Logs
                    </a>
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/sms_logs_v3">
                        <span class="material-symbols-outlined text-lg">sms</span>
                        SMS Logs
                    </a>
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/scan_history_v3">
                        <span class="material-symbols-outlined text-lg">history</span>
                        Scan History
                    </a>
                    <div class="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800">
                        <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/settings_v3">
                            <span class="material-symbols-outlined text-lg">settings</span>
                            Settings
                        </a>
                        <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/../project_hub">
                            <span class="material-symbols-outlined text-lg">home</span>
                            Project Hub
                        </a>
                        <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/../index">
                            <span class="material-symbols-outlined text-lg">logout</span>
                            Logout
                        </a>
                    </div>
                </nav>
            </div>
        </aside>
        <!-- Main Content -->
        <main class="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark/50">
            <div class="p-8 max-w-7xl mx-auto space-y-8">
                <!-- Header -->
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 class="text-3xl font-black tracking-tight">Call Logs</h2>
                        <p class="text-slate-500 dark:text-slate-400 mt-1">Detailed overview of all communication
                            activities.</p>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="flex items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 gap-2 shadow-sm">
                            <span class="material-symbols-outlined text-slate-400 text-lg">calendar_today</span>
                            <span class="text-sm font-medium">Oct 1, 2023 - Oct 31, 2023</span>
                            <span class="material-symbols-outlined text-slate-400 text-lg cursor-pointer">expand_more</span>
                        </div>
                        <button class="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm flex items-center gap-2">
                            <span class="material-symbols-outlined text-lg">download</span>
                            Export
                        </button>
                    </div>
                </div>
                <!-- Stats Cards -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div class="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                        <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            Total Calls</p>
                        <div class="flex items-end justify-between mt-2">
                            <h3 class="text-2xl font-bold">1,284</h3>
                            <span class="text-emerald-500 text-sm font-bold flex items-center">+12%</span>
                        </div>
                    </div>
                    <div class="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                        <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            Connected</p>
                        <div class="flex items-end justify-between mt-2">
                            <h3 class="text-2xl font-bold">942</h3>
                            <span class="text-rose-500 text-sm font-bold flex items-center">-5%</span>
                        </div>
                    </div>
                    <div class="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                        <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            Failed</p>
                        <div class="flex items-end justify-between mt-2">
                            <h3 class="text-2xl font-bold">156</h3>
                            <span class="text-rose-500 text-sm font-bold flex items-center">-2%</span>
                        </div>
                    </div>
                    <div class="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                        <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            Missed</p>
                        <div class="flex items-end justify-between mt-2">
                            <h3 class="text-2xl font-bold">120</h3>
                            <span class="text-emerald-500 text-sm font-bold flex items-center">+8%</span>
                        </div>
                    </div>
                    <div class="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                        <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            Busy</p>
                        <div class="flex items-end justify-between mt-2">
                            <h3 class="text-2xl font-bold">66</h3>
                            <span class="text-emerald-500 text-sm font-bold flex items-center">+1%</span>
                        </div>
                    </div>
                </div>
                <!-- Filter Bar & Table Area -->
                <div class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm overflow-hidden">
                    <!-- Filter Toolbar -->
                    <div class="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-wrap gap-3 items-center justify-between">
                        <div class="flex flex-1 min-w-[200px] max-w-md items-center bg-slate-100 dark:bg-slate-900 px-3 py-2 rounded-lg gap-2">
                            <span class="material-symbols-outlined text-slate-400">search</span>
                            <input class="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-400" placeholder="Search by Call ID or Tag ID..." type="text">
                        </div>
                        <div class="flex items-center gap-2">
                            <button class="flex items-center gap-2 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900">
                                <span class="material-symbols-outlined text-lg">filter_list</span>
                                Filter
                            </button>
                            <button class="flex items-center gap-2 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900">
                                <span class="material-symbols-outlined text-lg">view_column</span>
                                Columns
                            </button>
                        </div>
                    </div>
                    <!-- Table Container -->
                    <div class="overflow-x-auto @container">
                        <table class="w-full text-left">
                            <thead class="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                                <tr>
                                    <th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                        Call ID</th>
                                    <th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                        Tag ID</th>
                                    <th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                        Plan</th>
                                    <th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                        Duration</th>
                                    <th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center">
                                        Status</th>
                                    <th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                        Timestamp</th>
                                    <th class="px-6 py-4"></th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100 dark:divide-slate-700/50">
                                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-700/20 transition-colors">
                                    <td class="px-6 py-4 text-sm font-medium text-primary">#88291</td>
                                    <td class="px-6 py-4 text-sm">T-902</td>
                                    <td class="px-6 py-4">
                                        <span class="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-full text-xs font-semibold">Enterprise</span>
                                    </td>
                                    <td class="px-6 py-4 text-sm font-medium">04:12</td>
                                    <td class="px-6 py-4 text-center">
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                                            Connected
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Oct 24, 10:20 AM
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <button class="material-symbols-outlined text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">more_vert</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-700/20 transition-colors">
                                    <td class="px-6 py-4 text-sm font-medium text-primary">#88290</td>
                                    <td class="px-6 py-4 text-sm">T-115</td>
                                    <td class="px-6 py-4">
                                        <span class="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-full text-xs font-semibold">Starter</span>
                                    </td>
                                    <td class="px-6 py-4 text-sm font-medium">00:00</td>
                                    <td class="px-6 py-4 text-center">
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400">
                                            Failed
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Oct 24, 10:15 AM
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <button class="material-symbols-outlined text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">more_vert</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-700/20 transition-colors">
                                    <td class="px-6 py-4 text-sm font-medium text-primary">#88289</td>
                                    <td class="px-6 py-4 text-sm">T-442</td>
                                    <td class="px-6 py-4">
                                        <span class="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-full text-xs font-semibold">Professional</span>
                                    </td>
                                    <td class="px-6 py-4 text-sm font-medium">12:45</td>
                                    <td class="px-6 py-4 text-center">
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                                            Connected
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Oct 24, 09:50 AM
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <button class="material-symbols-outlined text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">more_vert</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-700/20 transition-colors">
                                    <td class="px-6 py-4 text-sm font-medium text-primary">#88288</td>
                                    <td class="px-6 py-4 text-sm">T-902</td>
                                    <td class="px-6 py-4">
                                        <span class="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-full text-xs font-semibold">Enterprise</span>
                                    </td>
                                    <td class="px-6 py-4 text-sm font-medium">00:00</td>
                                    <td class="px-6 py-4 text-center">
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                                            Missed
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Oct 24, 09:42 AM
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <button class="material-symbols-outlined text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">more_vert</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-700/20 transition-colors">
                                    <td class="px-6 py-4 text-sm font-medium text-primary">#88287</td>
                                    <td class="px-6 py-4 text-sm">T-221</td>
                                    <td class="px-6 py-4">
                                        <span class="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-full text-xs font-semibold">Starter</span>
                                    </td>
                                    <td class="px-6 py-4 text-sm font-medium">02:30</td>
                                    <td class="px-6 py-4 text-center">
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                                            Connected
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Oct 24, 09:30 AM
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <button class="material-symbols-outlined text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">more_vert</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- Pagination -->
                    <div class="p-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                        <p class="text-sm text-slate-500 dark:text-slate-400">Showing 1 to 5 of 1,284 entries</p>
                        <div class="flex items-center gap-1">
                            <button class="p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 disabled:opacity-50" disabled="">
                                <span class="material-symbols-outlined text-lg leading-none">chevron_left</span>
                            </button>
                            <button class="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold">1</button>
                            <button class="px-4 py-2 border border-transparent rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900">2</button>
                            <button class="px-4 py-2 border border-transparent rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900">3</button>
                            <span class="px-2">...</span>
                            <button class="px-4 py-2 border border-transparent rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900">257</button>
                            <button class="p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900">
                                <span class="material-symbols-outlined text-lg leading-none">chevron_right</span>
                            </button>
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
