
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

        .sidebar-active {
            background-color: rgba(236, 91, 19, 0.1);
            border-right: 4px solid #ec5b13;
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

      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen" style={{minHeight: '100vh', width: '100%'}} dangerouslySetInnerHTML={{ __html: `
    <div class="flex min-h-screen">
        <!-- Sidebar -->
        <aside class="w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col">
            <div class="p-6">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                        <span class="material-symbols-outlined">qr_code_2</span>
                    </div>
                    <div>
                        <h1 class="text-lg font-bold leading-tight">Tarkshya</h1>
                        <p class="text-xs text-slate-500 dark:text-slate-400">QR Management System</p>
                    </div>
                </div>
            </div>
            <nav class="flex-1 px-4 space-y-1 mt-4 overflow-y-auto max-h-[calc(100vh-250px)]">
                <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/admin_dashboard_v3">
                    <span class="material-symbols-outlined">dashboard</span>
                    Dashboard
                </a>
                <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl bg-primary/10 text-primary transition-colors" href="/generate_qr_v3">
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
                <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/sms_logs_v3">
                    <span class="material-symbols-outlined">sms</span>
                    SMS Logs
                </a>
                <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/scan_history_v3">
                    <span class="material-symbols-outlined">history</span>
                    Scan History
                </a>
                <div class="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/settings_v3">
                        <span class="material-symbols-outlined">settings</span>
                        Settings
                    </a>
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" href="/../project_hub">
                        <span class="material-symbols-outlined">home</span>
                        Project Hub
                    </a>
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" href="/../index">
                        <span class="material-symbols-outlined">logout</span>
                        Logout
                    </a>
                </div>
            </nav>
            <div class="p-4 mt-auto">
                <div class="bg-primary/10 rounded-xl p-4">
                    <p class="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Credits Remaining</p>
                    <div class="flex items-center justify-between">
                        <span class="text-xl font-bold">1,240</span>
                        <button class="text-xs bg-primary text-white px-2 py-1 rounded-full font-bold">TOP UP</button>
                    </div>
                </div>
            </div>
        </aside>
        <!-- Main Content -->
        <main class="flex-1 flex flex-col overflow-hidden">
            <!-- Header -->
            <header class="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md flex items-center justify-between px-8">
                <div class="flex items-center gap-8">
                    <h2 class="text-xl font-bold">Generate QR</h2>
                    <div class="flex border-b border-transparent h-full items-center">
                        <button id="singleTab" onclick="switchTab('single')" class="px-4 h-full border-b-2 border-primary text-primary font-semibold text-sm transition-all">Single
                            QR</button>
                        <button id="bulkTab" onclick="switchTab('bulk')" class="px-4 h-full border-b-2 border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 font-semibold text-sm transition-all">Bulk
                            Generate</button>
                    </div>
                </div>
                <div class="flex items-center gap-4">
                    <button class="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                        <span class="material-symbols-outlined">notifications</span>
                    </button>
                    <div class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                        <img alt="User Avatar" data-alt="User profile avatar circle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkynuFcJs4ph3c7SXXCuRh8pmZFlHE-Cwb-Ac4hEdUxc209khwiK0_EwKcfiwoP4tg118eKMA1ZMim2iGW6tEQriKnRre13meGDLlmhCebfuh6KYZLe9TeL1vWeNcEgUNWu7BrOC4Bp-nzrwiuhhKEzVjR8Ak8b57bummvfBto4C8R5lPbrlkW6c2FoJEk32Endh3SW48boGGYKzrq17I3neuFlLVvugzJSYy9qbmNT-AQdn2WyHf9a6Sar0kIitVJpbYCk4dnQHE">
                    </div>
                </div>
            </header>
            <!-- Content Area -->
            <div class="flex-1 overflow-y-auto p-8">
                <div class="max-w-6xl mx-auto">
                    <div class="grid grid-cols-12 gap-8">
                        <!-- Form Side -->
                        <div class="col-span-7 space-y-6">
                            <div id="singleContent" class="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 transition-all">
                                <h3 class="text-lg font-bold mb-6">Vehicle Details</h3>
                                <div class="grid grid-cols-2 gap-6">
                                    <div class="space-y-2">
                                        <label class="text-sm font-semibold text-slate-600 dark:text-slate-400">Tag
                                            Type</label>
                                        <select class="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary">
                                            <option>Standard RFID</option>
                                            <option>Premium Metallic</option>
                                            <option>Eco Sticker</option>
                                        </select>
                                    </div>
                                    <div class="space-y-2">
                                        <label class="text-sm font-semibold text-slate-600 dark:text-slate-400">Vehicle
                                            Type</label>
                                        <select class="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary">
                                            <option>Passenger Car</option>
                                            <option>Commercial Truck</option>
                                            <option>Motorcycle</option>
                                        </select>
                                    </div>
                                    <div class="space-y-2">
                                        <label class="text-sm font-semibold text-slate-600 dark:text-slate-400">Vehicle
                                            ID / Plate</label>
                                        <input class="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="e.g. ABC-1234" type="text">
                                    </div>
                                    <div class="space-y-2">
                                        <label class="text-sm font-semibold text-slate-600 dark:text-slate-400">Plan</label>
                                        <select class="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary">
                                            <option>Monthly Unlimited</option>
                                            <option>Annual Pass</option>
                                            <option>Pay Per Use</option>
                                        </select>
                                    </div>
                                    <div class="space-y-2">
                                        <label class="text-sm font-semibold text-slate-600 dark:text-slate-400">Validity
                                            (Months)</label>
                                        <input class="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary" type="number" value="12">
                                    </div>
                                    <div class="space-y-2">
                                        <label class="text-sm font-semibold text-slate-600 dark:text-slate-400">Sponsor</label>
                                        <input class="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="Corporate Partner Name" type="text">
                                    </div>
                                </div>
                                <div class="mt-8 flex gap-4">
                                    <button class="flex-1 bg-primary text-white py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
                                        <span class="material-symbols-outlined">bolt</span>
                                        Generate &amp; Save
                                    </button>
                                    <button class="px-6 py-3 border border-slate-200 dark:border-slate-700 rounded-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                                        Reset
                                    </button>
                                </div>
                            </div>
                            <!-- Bulk Area Preview -->
                            <div id="bulkContent" class="hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm transition-all">
                                <h3 class="text-lg font-bold mb-6">Bulk Generation via CSV</h3>
                                <div class="bg-slate-50 dark:bg-slate-800/50 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-10 text-center">
                                    <div class="w-16 h-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                                        <span class="material-symbols-outlined text-primary text-3xl">upload_file</span>
                                    </div>
                                    <h4 class="font-bold text-lg">Upload your data content</h4>
                                    <p class="text-slate-500 dark:text-slate-400 text-sm mb-6">Download the template,
                                        fill
                                        in the vehicle data and upload it here.</p>
                                    <div class="flex justify-center gap-3">
                                        <button class="bg-white dark:bg-slate-700 px-4 py-2 rounded-lg text-sm font-bold border border-slate-200 dark:border-slate-600">Download
                                            Template</button>
                                        <button class="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold">Select
                                            File</button>
                                    </div>
                                </div>

                                <div class="mt-8 space-y-4">
                                    <h4 class="text-sm font-bold uppercase tracking-wider text-slate-400">Requirements
                                    </h4>
                                    <ul class="text-sm space-y-2 text-slate-500 dark:text-slate-400">
                                        <li class="flex items-center gap-2">
                                            <span class="material-symbols-outlined text-emerald-500 text-lg">check_circle</span>
                                            File must be in .CSV or .XLSX format
                                        </li>
                                        <li class="flex items-center gap-2">
                                            <span class="material-symbols-outlined text-emerald-500 text-lg">check_circle</span>
                                            Maximum 1,000 records per upload
                                        </li>
                                        <li class="flex items-center gap-2">
                                            <span class="material-symbols-outlined text-emerald-500 text-lg">check_circle</span>
                                            Must include 'Vehicle ID' and 'Plan' columns
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- Preview Side -->
                        <div class="col-span-5">
                            <div class="sticky top-8 space-y-6">
                                <div class="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                                    <div class="bg-slate-50 dark:bg-slate-800/50 p-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
                                        <span class="text-sm font-bold uppercase tracking-widest text-slate-500">Live
                                            Preview</span>
                                        <div class="flex gap-2">
                                            <button class="p-1 hover:text-primary transition-colors"><span class="material-symbols-outlined text-xl">download</span></button>
                                            <button class="p-1 hover:text-primary transition-colors"><span class="material-symbols-outlined text-xl">print</span></button>
                                            <button class="p-1 hover:text-primary transition-colors"><span class="material-symbols-outlined text-xl">share</span></button>
                                        </div>
                                    </div>
                                    <div class="p-10 flex flex-col items-center justify-center bg-white dark:bg-slate-900">
                                        <!-- QR Frame -->
                                        <div class="relative p-8 border-4 border-primary rounded-3xl bg-white mb-6">
                                            <div class="w-64 h-64 bg-slate-100 flex items-center justify-center relative">
                                                <!-- QR Mockup -->
                                                <div class="w-full h-full p-4">
                                                    <svg class="w-full h-full text-slate-900" viewBox="0 0 100 100">
                                                        <path d="M0,0 h30 v10 h-20 v20 h-10 z M70,0 h30 v30 h-10 v-20 h-20 z M0,70 h10 v20 h20 v10 h-30 z M70,90 v10 h30 v-30 h-10 v20 z" fill="currentColor"></path>
                                                        <rect fill="currentColor" height="20" width="20" x="15" y="15">
                                                        </rect>
                                                        <rect fill="currentColor" height="20" width="20" x="65" y="15">
                                                        </rect>
                                                        <rect fill="currentColor" height="20" width="20" x="15" y="65">
                                                        </rect>
                                                        <rect fill="currentColor" height="20" width="20" x="40" y="40">
                                                        </rect>
                                                        <rect fill="currentColor" height="10" width="10" x="65" y="65">
                                                        </rect>
                                                        <rect fill="currentColor" height="10" width="10" x="45" y="15">
                                                        </rect>
                                                        <rect fill="currentColor" height="10" width="10" x="15" y="45">
                                                        </rect>
                                                    </svg>
                                                </div>
                                                <!-- Center Logo -->
                                                <div class="absolute inset-0 flex items-center justify-center">
                                                    <div class="bg-white p-2 rounded-lg shadow-lg border border-slate-100">
                                                        <span class="material-symbols-outlined text-primary font-bold">directions_car</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <p class="text-2xl font-black text-slate-800 dark:text-white mb-1">ABC-1234
                                            </p>
                                            <p class="text-slate-500 dark:text-slate-400 text-sm font-medium">Valid
                                                until Dec 2024</p>
                                        </div>
                                    </div>
                                    <div class="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                                        <div class="flex justify-between text-sm mb-2">
                                            <span class="text-slate-500">Security Hash</span>
                                            <span class="font-mono text-slate-700 dark:text-slate-300">8f2e...9a1c</span>
                                        </div>
                                        <div class="flex justify-between text-sm">
                                            <span class="text-slate-500">Format</span>
                                            <span class="text-slate-700 dark:text-slate-300 font-bold">High Density
                                                SVG</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-primary p-6 rounded-xl text-white">
                                    <div class="flex items-start gap-4">
                                        <span class="material-symbols-outlined text-3xl">info</span>
                                        <div>
                                            <h4 class="font-bold mb-1">Dynamic Routing</h4>
                                            <p class="text-white/80 text-xs leading-relaxed">This QR code supports
                                                dynamic routing. You can change the destination URL anytime without
                                                reprinting the tag.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <script>
        function switchTab(tab) {
            const singleTab = document.getElementById('singleTab');
            const bulkTab = document.getElementById('bulkTab');
            const singleContent = document.getElementById('singleContent');
            const bulkContent = document.getElementById('bulkContent');

            if (tab === 'single') {
                singleTab.classList.remove('border-transparent', 'text-slate-500');
                singleTab.classList.add('border-primary', 'text-primary');
                bulkTab.classList.remove('border-primary', 'text-primary');
                bulkTab.classList.add('border-transparent', 'text-slate-500');

                singleContent.classList.remove('hidden');
                bulkContent.classList.add('hidden');
            } else {
                bulkTab.classList.remove('border-transparent', 'text-slate-500');
                bulkTab.classList.add('border-primary', 'text-primary');
                singleTab.classList.remove('border-primary', 'text-primary');
                singleTab.classList.add('border-transparent', 'text-slate-500');

                bulkContent.classList.remove('hidden');
                singleContent.classList.add('hidden');
            }
        }
    </script>


` }} />
    </>
  );
}
