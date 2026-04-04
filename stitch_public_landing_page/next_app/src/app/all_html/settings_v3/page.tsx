
import React from 'react';
import Script from 'next/script';

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700;900&amp;display=swap" rel="stylesheet">
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

      <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen" style={{minHeight: '100vh', width: '100%'}} dangerouslySetInnerHTML={{ __html: `
    <div class="flex h-screen overflow-hidden">
        <!-- Sidebar Navigation -->
        <aside class="w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col">
            <div class="p-6 flex items-center gap-3">
                <div class="bg-primary/10 rounded-xl p-2">
                    <span class="material-symbols-outlined text-primary text-3xl">settings_input_component</span>
                </div>
                <div>
                    <h1 class="text-slate-900 dark:text-white text-lg font-bold leading-tight">Tarkshya</h1>
                    <p class="text-slate-500 dark:text-slate-400 text-xs">Admin Console</p>
                </div>
            </div>
            <nav class="flex-1 px-4 space-y-1 mt-4 overflow-y-auto max-h-[calc(100vh-250px)]">
                <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/admin_dashboard_v3">
                    <span class="material-symbols-outlined text-[20px]">dashboard</span>
                    Dashboard
                </a>
                <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/generate_qr_v3">
                    <span class="material-symbols-outlined text-[20px]">qr_code_2</span>
                    Generate QR
                </a>
                <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/tag_management_v3">
                    <span class="material-symbols-outlined text-[20px]">label</span>
                    Tags
                </a>
                <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/plans_packs_v3">
                    <span class="material-symbols-outlined text-[20px]">package</span>
                    Plans &amp; Packs
                </a>
                <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/subscriptions_v3">
                    <span class="material-symbols-outlined text-[20px]">subscriptions</span>
                    Subscriptions
                </a>
                <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/sponsor_management_v3">
                    <span class="material-symbols-outlined text-[20px]">loyalty</span>
                    Sponsors
                </a>
                <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/call_logs_v3">
                    <span class="material-symbols-outlined text-[20px]">call</span>
                    Call Logs
                </a>
                <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/sms_logs_v3">
                    <span class="material-symbols-outlined text-[20px]">sms</span>
                    SMS Logs
                </a>
                <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/scan_history_v3">
                    <span class="material-symbols-outlined text-[20px]">history</span>
                    Scan History
                </a>
                <div class="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800">
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl bg-primary text-white shadow-lg shadow-primary/20" href="/settings_v3">
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
            <div class="p-4 border-t border-slate-200 dark:border-slate-800">
                <div class="flex items-center gap-3 p-2">
                    <div class="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover" data-alt="User profile circular portrait" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCeszRLIBpwiNAHi8MblYxn2eSgasYX9tf1S-Adu4B5hfpEp0vFsYWW5soxQrPMnV8FXgcTh6Ur3g0dY33x_oEWHiaDk-OdTV_KtDHRRIMfyljIzYTQMl6FR0D5F4f9IlZxMxue7aSC9x2lU1irwnmfHQ6gEgRSg650vAXiIQ2RW4BTWIRUtPhMW84dpjOfiphWXC0krQznut7eeowD8s21gzcbPQ-dDmyhLmsUSTqhrNZD_wq4SoUs8rAtDNsj-oJUdpQ1XD275p0')">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium truncate">Alex Rivera</p>
                        <p class="text-xs text-slate-500 truncate">alex@tarkshya.io</p>
                    </div>
                    <span class="material-symbols-outlined text-slate-400 text-sm">logout</span>
                </div>
            </div>
        </aside>
        <!-- Main Content Area -->
        <main class="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark">
            <div class="max-w-5xl mx-auto p-8">
                <!-- Header Section -->
                <header class="mb-8">
                    <div class="flex items-center justify-between mb-2">
                        <h2 class="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Tag Types</h2>
                        <div class="flex gap-2">
                            <button class="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2">
                                <span class="material-symbols-outlined text-lg">file_download</span> Export
                            </button>
                        </div>
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 max-w-2xl">Manage and configure your system tag
                        categories. These help organize assets across the Tarkshya workspace.</p>
                </header>
                <!-- Table Component -->
                <section class="mb-8">
                    <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="bg-slate-50 dark:bg-slate-800/50 border-bottom border-slate-200 dark:border-slate-800">
                                    <th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Name</th>
                                    <th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Description</th>
                                    <th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Created Date</th>
                                    <th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">
                                        Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                    <td class="px-6 py-4">
                                        <div class="flex items-center gap-3">
                                            <div class="h-2 w-2 rounded-full bg-primary"></div>
                                            <span class="text-sm font-semibold text-slate-900 dark:text-white">Primary</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Main category tags
                                        for core assets</td>
                                    <td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 italic">Oct 01, 2023
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <button class="text-primary hover:text-primary/80 font-bold text-sm">Edit</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                    <td class="px-6 py-4">
                                        <div class="flex items-center gap-3">
                                            <div class="h-2 w-2 rounded-full bg-slate-400"></div>
                                            <span class="text-sm font-semibold text-slate-900 dark:text-white">Secondary</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Support category
                                        tags for auxiliary data</td>
                                    <td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 italic">Oct 05, 2023
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <button class="text-primary hover:text-primary/80 font-bold text-sm">Edit</button>
                                    </td>
                                </tr>
                                <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                    <td class="px-6 py-4">
                                        <div class="flex items-center gap-3">
                                            <div class="h-2 w-2 rounded-full bg-emerald-500"></div>
                                            <span class="text-sm font-semibold text-slate-900 dark:text-white">System</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Internal process
                                        tags for automation</td>
                                    <td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 italic">Oct 10, 2023
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <button class="text-primary hover:text-primary/80 font-bold text-sm">Edit</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <!-- Add New Card Section -->
                <section class="mb-16">
                    <div class="flex flex-col md:flex-row items-stretch overflow-hidden rounded-xl border border-primary/20 bg-primary/5 dark:bg-primary/10 shadow-sm">
                        <div class="w-full md:w-48 bg-cover bg-center min-h-[120px]" data-alt="Vibrant orange abstract geometric pattern" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAIGszWlZeTLrFpKGtZOxvJfaxuPoeLVL7d8-ETSy90z8cEwkyfFTW-xHphlGpffYgQ0dv2IVae3g7kOwWFIvz41xLtmv3BYsvjh2mSG1oD_ACnP0rpn64ZVsvHvm8x_acAi-TeKKw264vVEP8Im1IF_9wlSyvW9L6TaF0svWiBUp8menJ6jkAspF6oEh_kcpQrYHAjXEP5ZEDNqdShMBEIEOxGWc3-apj7kmJSJTkvxv1g8HYyecHd_fWoBZU72ASkN3PD_4mlaLU')">
                        </div>
                        <div class="flex-1 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-1">Add New Tag Type</h3>
                                <p class="text-slate-600 dark:text-slate-400 text-sm">Create a new category to organize
                                    your workspace assets effectively.</p>
                            </div>
                            <button class="bg-primary text-white hover:bg-primary/90 transition-all px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 whitespace-nowrap">
                                <span class="material-symbols-outlined text-lg">add_circle</span> Create Tag Type
                            </button>
                        </div>
                    </div>
                </section>
                <hr class="border-slate-200 dark:border-slate-800 mb-12">
                <!-- Statuses Section -->
                <header class="mb-8">
                    <div class="flex items-center justify-between mb-2">
                        <h2 class="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Statuses</h2>
                    </div>
                    <p class="text-slate-600 dark:text-slate-400 max-w-2xl">Define the lifecycle stages for your
                        workflows. Manage how tasks progress through your system.</p>
                </header>
                <!-- Status Table -->
                <section class="mb-8">
                    <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                        <table class="w-full text-left border-collapse">
                            <thead>
                                <tr class="bg-slate-50 dark:bg-slate-800/50">
                                    <th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Status Label</th>
                                    <th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Key</th>
                                    <th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                        Order</th>
                                    <th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">
                                        Actions</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                                <tr>
                                    <td class="px-6 py-4">
                                        <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">Draft</span>
                                    </td>
                                    <td class="px-6 py-4 text-sm font-mono text-slate-500">status_draft</td>
                                    <td class="px-6 py-4 text-sm text-slate-600">1</td>
                                    <td class="px-6 py-4 text-right">
                                        <button class="text-primary hover:text-primary/80 font-bold text-sm">Edit</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4">
                                        <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">Active</span>
                                    </td>
                                    <td class="px-6 py-4 text-sm font-mono text-slate-500">status_active</td>
                                    <td class="px-6 py-4 text-sm text-slate-600">2</td>
                                    <td class="px-6 py-4 text-right">
                                        <button class="text-primary hover:text-primary/80 font-bold text-sm">Edit</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <!-- Add New Status Card -->
                <section class="mb-12">
                    <div class="flex flex-col md:flex-row items-stretch overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                        <div class="w-full md:w-48 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                            <span class="material-symbols-outlined text-slate-400 text-4xl">reorder</span>
                        </div>
                        <div class="flex-1 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-1">Define New Status</h3>
                                <p class="text-slate-600 dark:text-slate-400 text-sm">Set up custom workflow stages for
                                    your operational pipelines.</p>
                            </div>
                            <button class="bg-primary/20 text-primary hover:bg-primary/30 transition-all px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 whitespace-nowrap">
                                <span class="material-symbols-outlined text-lg">add</span> Add Status Stage
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    </div>


` }} />
    </>
  );
}
