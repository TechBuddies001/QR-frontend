
import React from 'react';
import Script from 'next/script';

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet">
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

      <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased" style={{minHeight: '100vh', width: '100%'}} dangerouslySetInnerHTML={{ __html: `
    <div class="flex min-h-screen">
        <!-- Sidebar -->
        <aside class="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark flex flex-col fixed h-full">
            <div class="p-6 flex flex-col h-full">
                <div class="flex items-center gap-3 mb-8">
                    <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                        <span class="material-symbols-outlined">rocket_launch</span>
                    </div>
                    <div>
                        <h1 class="text-base font-bold leading-tight">Tarkshya</h1>
                        <p class="text-xs text-slate-500 dark:text-slate-400">Admin Panel</p>
                    </div>
                </div>
                <nav class="flex-1 px-4 space-y-1 mt-4 overflow-y-auto max-h-[calc(100vh-250px)]">
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/admin_dashboard_v3">
                        <span class="material-symbols-outlined">dashboard</span>
                        Dashboard
                    </a>
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/generate_qr_v3">
                        <span class="material-symbols-outlined">qr_code_2</span>
                        Generate QR
                    </a>
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/tag_management_v3">
                        <span class="material-symbols-outlined">label</span>
                        Tags
                    </a>
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/plans_packs_v3">
                        <span class="material-symbols-outlined">package</span>
                        Plans &amp; Packs
                    </a>
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/subscriptions_v3">
                        <span class="material-symbols-outlined">subscriptions</span>
                        Subscriptions
                    </a>
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/sponsor_management_v3">
                        <span class="material-symbols-outlined">loyalty</span>
                        Sponsors
                    </a>
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/call_logs_v3">
                        <span class="material-symbols-outlined">call</span>
                        Call Logs
                    </a>
                    <a class="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-xl transition-colors" href="/sms_logs_v3">
                        <span class="material-symbols-outlined">sms</span>
                        SMS Logs
                    </a>
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/scan_history_v3">
                        <span class="material-symbols-outlined">history</span>
                        Scan History
                    </a>
                    <div class="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800">
                        <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/settings_v3">
                            <span class="material-symbols-outlined">settings</span>
                            Settings
                        </a>
                        <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/../project_hub">
                            <span class="material-symbols-outlined">home</span>
                            Project Hub
                        </a>
                        <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/../index">
                            <span class="material-symbols-outlined">logout</span>
                            Logout
                        </a>
                    </div>
                </nav>
            </div>
        </aside>
        <!-- Main Content -->
        <main class="flex-1 ml-64 p-8">
            <div class="max-w-7xl mx-auto">
                <!-- Header -->
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h2 class="text-3xl font-bold tracking-tight">SMS Logs</h2>
                        <p class="text-slate-500 dark:text-slate-400 mt-1">Monitor and track all outgoing messages for
                            your assets.</p>
                    </div>
                    <div class="flex items-center gap-3">
                        <button class="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                            <span class="material-symbols-outlined text-lg">download</span>
                            Export CSV
                        </button>
                        <button class="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-sm font-medium hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20">
                            <span class="material-symbols-outlined text-lg">refresh</span>
                            Refresh
                        </button>
                    </div>
                </div>
                <!-- Filters -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div class="md:col-span-2 relative">
                        <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                        <input class="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm transition-all" placeholder="Search by Tag ID or Recipient..." type="text">
                    </div>
                    <div class="relative">
                        <select class="w-full pl-3 pr-10 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl appearance-none focus:ring-2 focus:ring-primary outline-none text-sm transition-all">
                            <option>All Types</option>
                            <option>scan_alert</option>
                            <option>sub_reminder</option>
                            <option>system_auth</option>
                        </select>
                        <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                    </div>
                    <div class="relative">
                        <select class="w-full pl-3 pr-10 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl appearance-none focus:ring-2 focus:ring-primary outline-none text-sm transition-all">
                            <option>All Status</option>
                            <option>Delivered</option>
                            <option>Pending</option>
                            <option>Failed</option>
                        </select>
                        <span class="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                    </div>
                </div>
                <!-- Table Container -->
                <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="bg-slate-50 dark:bg-slate-900/50 border-bottom border-slate-200 dark:border-slate-700">
                                    <th class="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                        Tag ID</th>
                                    <th class="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                        Recipient</th>
                                    <th class="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                        Message Type</th>
                                    <th class="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                        Content Preview</th>
                                    <th class="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                        Status</th>
                                    <th class="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                                        Sent At</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
                                <!-- Row 1 -->
                                <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <td class="px-6 py-4 text-sm font-medium text-primary">#TG-8821</td>
                                    <td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-mono">+91
                                        ******4412</td>
                                    <td class="px-6 py-4">
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                                            scan_alert
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400 max-w-xs truncate">
                                        New QR scan detected in Mumbai office.</td>
                                    <td class="px-6 py-4">
                                        <div class="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                                            <span class="material-symbols-outlined text-lg">check_circle</span>
                                            <span class="text-sm font-medium">Delivered</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
                                        Oct 27, 2:20 PM</td>
                                </tr>
                                <!-- Row 2 -->
                                <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <td class="px-6 py-4 text-sm font-medium text-primary">#TG-8819</td>
                                    <td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-mono">+1
                                        ******0982</td>
                                    <td class="px-6 py-4">
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                                            sub_reminder
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400 max-w-xs truncate">
                                        Your Professional plan expires in 3 days. Renew now.</td>
                                    <td class="px-6 py-4">
                                        <div class="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                                            <span class="material-symbols-outlined text-lg">schedule</span>
                                            <span class="text-sm font-medium">Pending</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
                                        Oct 27, 1:45 PM</td>
                                </tr>
                                <!-- Row 3 -->
                                <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <td class="px-6 py-4 text-sm font-medium text-primary">#TG-8815</td>
                                    <td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-mono">+44
                                        ******2231</td>
                                    <td class="px-6 py-4">
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                                            scan_alert
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400 max-w-xs truncate">
                                        Unauthorized access attempt for Asset ID 449.</td>
                                    <td class="px-6 py-4">
                                        <div class="flex items-center gap-1.5 text-rose-600 dark:text-rose-400">
                                            <span class="material-symbols-outlined text-lg">error</span>
                                            <span class="text-sm font-medium">Failed</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
                                        Oct 27, 12:10 PM</td>
                                </tr>
                                <!-- Row 4 -->
                                <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <td class="px-6 py-4 text-sm font-medium text-primary">#TG-8812</td>
                                    <td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-mono">+91
                                        ******1100</td>
                                    <td class="px-6 py-4">
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                                            system_auth
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400 max-w-xs truncate">
                                        Your OTP for login is 992811. Do not share it.</td>
                                    <td class="px-6 py-4">
                                        <div class="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                                            <span class="material-symbols-outlined text-lg">check_circle</span>
                                            <span class="text-sm font-medium">Delivered</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
                                        Oct 27, 10:30 AM</td>
                                </tr>
                                <!-- Row 5 -->
                                <tr class="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                    <td class="px-6 py-4 text-sm font-medium text-primary">#TG-8808</td>
                                    <td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-mono">+61
                                        ******5543</td>
                                    <td class="px-6 py-4">
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                                            scan_alert
                                        </span>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400 max-w-xs truncate">
                                        Asset 'Warehouse_A' scanned at checkpoint B-4.</td>
                                    <td class="px-6 py-4">
                                        <div class="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                                            <span class="material-symbols-outlined text-lg">check_circle</span>
                                            <span class="text-sm font-medium">Delivered</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
                                        Oct 27, 09:15 AM</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- Pagination -->
                    <div class="px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                        <span class="text-sm text-slate-500 dark:text-slate-400">Showing 1 to 5 of 248 results</span>
                        <div class="flex items-center gap-2">
                            <button class="p-1 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-50" disabled="">
                                <span class="material-symbols-outlined text-xl">chevron_left</span>
                            </button>
                            <button class="px-3 py-1 rounded-lg bg-primary text-white text-sm font-medium">1</button>
                            <button class="px-3 py-1 rounded-lg hover:bg-white dark:hover:bg-slate-800 text-sm font-medium">2</button>
                            <button class="px-3 py-1 rounded-lg hover:bg-white dark:hover:bg-slate-800 text-sm font-medium">3</button>
                            <button class="p-1 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800">
                                <span class="material-symbols-outlined text-xl">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Footer Stats (Subtle) -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div class="p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-800">
                        <p class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
                            Delivery Rate</p>
                        <p class="text-2xl font-bold">98.4%</p>
                    </div>
                    <div class="p-4 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-100 dark:border-orange-800">
                        <p class="text-xs font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-1">
                            Total Scan Alerts</p>
                        <p class="text-2xl font-bold">1,240</p>
                    </div>
                    <div class="p-4 bg-primary/5 rounded-xl border border-primary/10">
                        <p class="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Messages This Month
                        </p>
                        <p class="text-2xl font-bold">8,432</p>
                    </div>
                </div>
            </div>
        </main>
    </div>


` }} />
    </>
  );
}
