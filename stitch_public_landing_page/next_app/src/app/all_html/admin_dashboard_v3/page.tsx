
import React from 'react';
import Script from 'next/script';

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet">
<style>
        body {
            font-family: 'Public Sans', sans-serif;
        }

        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
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
                        "primary": "#ec5b13",
                        "background-light": "#f8f9fc",
                        "background-dark": "#0f172a",
                    },
                    fontFamily: {
                        "display": ["Public Sans", "sans-serif"]
                    },
                    borderRadius: { "DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px" },
                },
            },
        }
    ` }} />

      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display" style={{minHeight: '100vh', width: '100%'}} dangerouslySetInnerHTML={{ __html: `
    <div class="flex min-h-screen">
        <!-- Sidebar -->
        <aside class="fixed inset-y-0 left-0 w-64 bg-primary dark:bg-slate-900 text-white flex flex-col z-20 shadow-xl">
            <div class="p-6 flex items-center gap-3">
                <div class="size-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <span class="material-symbols-outlined text-white text-2xl">database</span>
                </div>
                <div>
                    <h1 class="font-bold text-lg leading-tight">Tarkshya</h1>
                    <p class="text-xs text-white/70 uppercase tracking-widest font-semibold">Solution</p>
                </div>
            </div>
            <nav class="flex-1 px-4 space-y-1 mt-4 overflow-y-auto max-h-[calc(100vh-250px)]">
                <a class="flex items-center gap-3 px-3 py-2 bg-white/20 rounded-xl text-white" href="/admin_dashboard_v3">
                    <span class="material-symbols-outlined">dashboard</span>
                    <span class="font-medium">Dashboard</span>
                </a>
                <a class="flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-xl transition-colors" href="/generate_qr_v3">
                    <span class="material-symbols-outlined">qr_code_2</span>
                    <span class="font-medium">Generate QR</span>
                </a>
                <a class="flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-xl transition-colors" href="/tag_management_v3">
                    <span class="material-symbols-outlined">label</span>
                    <span class="font-medium">Tags</span>
                </a>
                <a class="flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-xl transition-colors" href="/plans_packs_v3">
                    <span class="material-symbols-outlined">package</span>
                    <span class="font-medium">Plans &amp; Packs</span>
                </a>
                <a class="flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-xl transition-colors" href="/subscriptions_v3">
                    <span class="material-symbols-outlined">subscriptions</span>
                    <span class="font-medium">Subscriptions</span>
                </a>
                <a class="flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-xl transition-colors" href="/sponsor_management_v3">
                    <span class="material-symbols-outlined">loyalty</span>
                    <span class="font-medium">Sponsors</span>
                </a>
                <a class="flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-xl transition-colors" href="/call_logs_v3">
                    <span class="material-symbols-outlined">call</span>
                    <span class="font-medium">Call Logs</span>
                </a>
                <a class="flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-xl transition-colors" href="/sms_logs_v3">
                    <span class="material-symbols-outlined">sms</span>
                    <span class="font-medium">SMS Logs</span>
                </a>
                <a class="flex items-center gap-3 px-3 py-2 hover:bg-white/10 rounded-xl transition-colors" href="/scan_history_v3">
                    <span class="material-symbols-outlined">history</span>
                    <span class="font-medium">Scan History</span>
                </a>
            </nav>
            <div class="p-4 border-t border-white/10 space-y-1">
                <a class="flex items-center gap-3 px-3 py-3 hover:bg-white/5 rounded-xl transition-colors" href="/settings_v3">
                    <span class="material-symbols-outlined">settings</span>
                    <span class="font-medium">Settings</span>
                </a>
                <a class="flex items-center gap-3 px-3 py-3 hover:bg-white/5 rounded-xl transition-colors" href="/../project_hub">
                    <span class="material-symbols-outlined">home</span>
                    <span class="font-medium">Project Hub</span>
                </a>
                <a class="flex items-center gap-3 px-3 py-3 hover:bg-white/5 rounded-xl transition-colors" href="/../index">
                    <span class="material-symbols-outlined">logout</span>
                    <span class="font-medium">Logout</span>
                </a>
            </div>
        </aside>
        <!-- Main Content -->
        <main class="flex-1 ml-64 p-8">
            <!-- Header -->
            <header class="flex items-center justify-between mb-8">
                <div class="relative w-96">
                    <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                    <input class="w-full bg-white dark:bg-slate-800 border-none rounded-xl pl-10 py-2.5 focus:ring-2 focus:ring-primary shadow-sm text-sm" placeholder="Search by tag ID or user..." type="text">
                </div>
                <div class="flex items-center gap-4">
                    <button class="relative p-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-slate-600 dark:text-slate-300">
                        <span class="material-symbols-outlined">notifications</span>
                        <span class="absolute top-2 right-2 size-2 bg-red-500 rounded-full"></span>
                    </button>
                    <div class="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-700">
                        <div class="text-right">
                            <p class="text-sm font-bold">Alex Rivera</p>
                            <p class="text-xs text-slate-500">System Admin</p>
                        </div>
                        <div class="size-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border-2 border-primary/20">
                            <img class="w-full h-full object-cover" data-alt="User profile avatar of a professional administrator" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd5rsCT7_RxM5L7oFayhIbH_KWxefNX6clpH768rpGXIyGx6_qsJlFhgi3w46nWC7xGswFVLqVm_-R1mlScrP6fCZFSk1tZXdU5DoG0v8nus4kChwv6vHy7Aj4CDdV1riizE3BJfiwTum-CECh6lRorcNQnSlXCL0xOGoAfm_i0hJJkUVYXEBfUg-b6ei7z1jH4aAlvn93XmrIfE0_rSpLJsEg4yCGANGGH3ML6OdILRqvNTU8SswkG_KqJbVT0dQ_kMiyK_3tBTM">
                        </div>
                    </div>
                </div>
            </header>
            <!-- Expiry Alert Banner -->
            <div class="mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-xl flex items-center justify-between shadow-sm">
                <div class="flex items-center gap-3 text-red-700 dark:text-red-400">
                    <span class="material-symbols-outlined text-red-600 dark:text-red-500">warning</span>
                    <div>
                        <p class="font-bold text-sm">Action Required: Expiring Tags</p>
                        <p class="text-xs opacity-90">390 premium tags are expiring within the next 7 days. These
                            accounts will lose priority support.</p>
                    </div>
                </div>
                <a href="/scan_history_v3" class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-semibold transition-colors">
                    Review Expiries
                </a>
            </div>
            <!-- Stats Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                    <div class="flex justify-between items-start mb-4">
                        <div class="p-2 bg-primary/10 rounded-lg text-primary">
                            <span class="material-symbols-outlined">label</span>
                        </div>
                        <span class="text-green-500 text-xs font-bold flex items-center">
                            <span class="material-symbols-outlined text-sm">trending_up</span> 12%
                        </span>
                    </div>
                    <p class="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Tags</p>
                    <h3 class="text-2xl font-bold mt-1">12,480</h3>
                </div>
                <div class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                    <div class="flex justify-between items-start mb-4">
                        <div class="p-2 bg-yellow-500/10 rounded-lg text-yellow-600">
                            <span class="material-symbols-outlined">star</span>
                        </div>
                        <span class="text-green-500 text-xs font-bold flex items-center">
                            <span class="material-symbols-outlined text-sm">trending_up</span> 5%
                        </span>
                    </div>
                    <p class="text-slate-500 dark:text-slate-400 text-sm font-medium">Premium</p>
                    <h3 class="text-2xl font-bold mt-1">8,240</h3>
                </div>
                <div class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                    <div class="flex justify-between items-start mb-4">
                        <div class="p-2 bg-blue-500/10 rounded-lg text-blue-600">
                            <span class="material-symbols-outlined">tag</span>
                        </div>
                        <span class="text-red-500 text-xs font-bold flex items-center">
                            <span class="material-symbols-outlined text-sm">trending_down</span> 2%
                        </span>
                    </div>
                    <p class="text-slate-500 dark:text-slate-400 text-sm font-medium">Basic</p>
                    <h3 class="text-2xl font-bold mt-1">3,850</h3>
                </div>
                <div class="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                    <div class="flex justify-between items-start mb-4">
                        <div class="p-2 bg-red-500/10 rounded-lg text-red-600">
                            <span class="material-symbols-outlined">timer</span>
                        </div>
                        <span class="text-green-500 text-xs font-bold flex items-center">
                            <span class="material-symbols-outlined text-sm">trending_up</span> 18%
                        </span>
                    </div>
                    <p class="text-slate-500 dark:text-slate-400 text-sm font-medium">Expiring Soon</p>
                    <h3 class="text-2xl font-bold mt-1">390</h3>
                </div>
            </div>
            <!-- Quick Actions -->
            <div class="mb-8">
                <div class="flex items-center justify-between mb-4">
                    <h2 class="text-lg font-bold">Quick Actions</h2>
                </div>
                <div class="flex flex-wrap gap-4">
                    <a href="/generate_qr_v3" class="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 transition-all">
                        <span class="material-symbols-outlined">add_circle</span>
                        Generate QR
                    </a>
                    <a href="/tag_management_v3" class="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 hover:bg-slate-50 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-bold shadow-sm border border-slate-200 dark:border-slate-700 transition-all">
                        <span class="material-symbols-outlined">file_export</span>
                        Export Tags
                    </a>
                    <a href="/sms_logs_v3" class="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 hover:bg-slate-50 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-bold shadow-sm border border-slate-200 dark:border-slate-700 transition-all">
                        <span class="material-symbols-outlined">mail</span>
                        Bulk Notify
                    </a>
                    <a href="/settings_v3" class="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 hover:bg-slate-50 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-bold shadow-sm border border-slate-200 dark:border-slate-700 transition-all">
                        <span class="material-symbols-outlined">settings_suggest</span>
                        Batch Update
                    </a>
                </div>
            </div>
            <!-- Table and Chart Section -->
            <div class="grid grid-cols-1 lg:grid-cols-10 gap-8">
                <!-- Recent Calls Table (60%) -->
                <div class="lg:col-span-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
                    <div class="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
                        <h3 class="font-bold">Recent Tag Scans</h3>
                        <a class="text-primary text-sm font-semibold hover:underline" href="#">View All</a>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left">
                            <thead class="bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider">
                                <tr>
                                    <th class="px-6 py-4 font-semibold">Tag ID</th>
                                    <th class="px-6 py-4 font-semibold">User</th>
                                    <th class="px-6 py-4 font-semibold">Location</th>
                                    <th class="px-6 py-4 font-semibold">Status</th>
                                    <th class="px-6 py-4 font-semibold">Timestamp</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100 dark:divide-slate-700">
                                <tr>
                                    <td class="px-6 py-4 text-sm font-medium">#TKS-9482</td>
                                    <td class="px-6 py-4 text-sm">Michael Chen</td>
                                    <td class="px-6 py-4 text-sm">Mumbai, IN</td>
                                    <td class="px-6 py-4">
                                        <span class="px-2.5 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-[10px] font-bold uppercase tracking-wide">Success</span>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-slate-500">2 mins ago</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 text-sm font-medium">#TKS-8311</td>
                                    <td class="px-6 py-4 text-sm">Sarah Jenkins</td>
                                    <td class="px-6 py-4 text-sm">London, UK</td>
                                    <td class="px-6 py-4">
                                        <span class="px-2.5 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-[10px] font-bold uppercase tracking-wide">Success</span>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-slate-500">14 mins ago</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 text-sm font-medium">#TKS-4402</td>
                                    <td class="px-6 py-4 text-sm">Robert T.</td>
                                    <td class="px-6 py-4 text-sm">Unknown</td>
                                    <td class="px-6 py-4">
                                        <span class="px-2.5 py-1 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-full text-[10px] font-bold uppercase tracking-wide">Blocked</span>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-slate-500">1 hour ago</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 text-sm font-medium">#TKS-1129</td>
                                    <td class="px-6 py-4 text-sm">Prija V.</td>
                                    <td class="px-6 py-4 text-sm">Delhi, IN</td>
                                    <td class="px-6 py-4">
                                        <span class="px-2.5 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-full text-[10px] font-bold uppercase tracking-wide">Pending</span>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-slate-500">3 hours ago</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 text-sm font-medium">#TKS-7734</td>
                                    <td class="px-6 py-4 text-sm">John Doe</td>
                                    <td class="px-6 py-4 text-sm">Austin, US</td>
                                    <td class="px-6 py-4">
                                        <span class="px-2.5 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-[10px] font-bold uppercase tracking-wide">Success</span>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-slate-500">4 hours ago</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- Tag Type Breakdown (40%) -->
                <div class="lg:col-span-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 flex flex-col">
                    <h3 class="font-bold mb-6">Tag Type Breakdown</h3>
                    <div class="flex-1 flex flex-col items-center justify-center relative">
                        <!-- Custom SVG Donut Chart Representation -->
                        <div class="relative size-56">
                            <svg class="size-full" viewBox="0 0 100 100">
                                <circle class="text-slate-100 dark:text-slate-700" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" stroke-width="12"></circle>
                                <circle class="text-primary" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" stroke-dasharray="163 251" stroke-dashoffset="0" stroke-linecap="round" stroke-width="12"></circle>
                                <circle class="text-yellow-500" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" stroke-dasharray="60 251" stroke-dashoffset="-163" stroke-linecap="round" stroke-width="12"></circle>
                                <circle class="text-blue-500" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" stroke-dasharray="28 251" stroke-dashoffset="-223" stroke-linecap="round" stroke-width="12"></circle>
                            </svg>
                            <div class="absolute inset-0 flex flex-col items-center justify-center">
                                <span class="text-3xl font-bold">12.4k</span>
                                <span class="text-xs text-slate-500 uppercase">Total Tags</span>
                            </div>
                        </div>
                        <div class="mt-8 w-full space-y-3">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-2">
                                    <span class="size-3 bg-primary rounded-full"></span>
                                    <span class="text-sm font-medium">Premium</span>
                                </div>
                                <span class="text-sm font-bold">66%</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-2">
                                    <span class="size-3 bg-yellow-500 rounded-full"></span>
                                    <span class="text-sm font-medium">Standard</span>
                                </div>
                                <span class="text-sm font-bold">24%</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-2">
                                    <span class="size-3 bg-blue-500 rounded-full"></span>
                                    <span class="text-sm font-medium">Basic</span>
                                </div>
                                <span class="text-sm font-bold">10%</span>
                            </div>
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
