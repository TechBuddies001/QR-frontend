
import React from 'react';
import Script from 'next/script';

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap" rel="stylesheet">
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
                        "display": ["Public Sans"],
                        "mono": ["JetBrains Mono"]
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

      <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased" style={{minHeight: '100vh', width: '100%'}} dangerouslySetInnerHTML={{ __html: `
    <div class="flex h-screen overflow-hidden">
        <!-- SideNavBar -->
        <aside class="w-64 flex-shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col">
            <div class="p-6">
                <div class="flex items-center gap-3 mb-8">
                    <div class="size-10 rounded-xl bg-primary flex items-center justify-center text-white">
                        <span class="material-symbols-outlined">qr_code_2</span>
                    </div>
                    <div>
                        <h1 class="text-base font-bold leading-tight">Tarkshya</h1>
                        <p class="text-xs text-slate-500 dark:text-slate-400">Enterprise Admin</p>
                    </div>
                </div>
                <nav class="space-y-1 overflow-y-auto max-h-[calc(100vh-250px)]">
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" href="/admin_dashboard_v3">
                        <span class="material-symbols-outlined text-[20px]">dashboard</span>
                        Dashboard
                    </a>
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" href="/generate_qr_v3">
                        <span class="material-symbols-outlined text-[20px]">qr_code_2</span>
                        Generate QR
                    </a>
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl bg-primary/10 text-primary" href="/tag_management_v3">
                        <span class="material-symbols-outlined text-[20px]">sell</span>
                        Tag Management
                    </a>
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" href="/plans_packs_v3">
                        <span class="material-symbols-outlined text-[20px]">package</span>
                        Plans &amp; Packs
                    </a>
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" href="/subscriptions_v3">
                        <span class="material-symbols-outlined text-[20px]">subscriptions</span>
                        Subscriptions
                    </a>
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" href="/sponsor_management_v3">
                        <span class="material-symbols-outlined text-[20px]">loyalty</span>
                        Sponsors
                    </a>
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" href="/call_logs_v3">
                        <span class="material-symbols-outlined text-[20px]">call</span>
                        Call Logs
                    </a>
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" href="/sms_logs_v3">
                        <span class="material-symbols-outlined text-[20px]">sms</span>
                        SMS Logs
                    </a>
                    <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" href="/scan_history_v3">
                        <span class="material-symbols-outlined text-[20px]">history</span>
                        Scan History
                    </a>
                    <div class="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                        <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" href="/settings_v3">
                            <span class="material-symbols-outlined text-[20px]">settings</span>
                            Settings
                        </a>
                        <a class="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" href="/../project_hub">
                            <span class="material-symbols-outlined text-[20px]">home</span>
                            Project Hub
                        </a>
                    </div>
                </nav>
            </div>
            <div class="mt-auto p-4">
                <div class="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-3 flex items-center gap-3">
                    <div class="size-8 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden" data-alt="User profile avatar" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBHXqo9eH5lix5uT1KwOywg6kifXpzL-eaUoYUBJZbJrtneptGNh8bBmr7POnnt77LRQ0JnSBsRVzA0XF05oxKapldOxtCLdBQ8F-YpX2KaemsUG1ethDVSDju0s569kfdYezdLY360J7_YA55oXxWlVITshCQxSQAOZRxM5ZfQO60tzkAfzvIi-KXghUw7VQZpl3LSaQTIrw3oZ2hhgvLGg3zHZl5jydolBXjC8pEY52m5CqH8BFMUDTxgJJae9xyHOvKeWrNN4KM')">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-xs font-semibold truncate">Alex Marshall</p>
                        <p class="text-[10px] text-slate-500 truncate">System Manager</p>
                    </div>
                    <span class="material-symbols-outlined text-slate-400 text-sm">logout</span>
                </div>
            </div>
        </aside>
        <!-- Main Content -->
        <main class="flex-1 flex flex-col min-w-0 overflow-hidden">
            <!-- Header -->
            <header class="h-16 flex items-center justify-between px-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 z-10">
                <div class="flex items-center gap-4 flex-1 max-w-xl">
                    <div class="relative w-full">
                        <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                        <input class="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400" placeholder="Search by Tag ID, Owner or Phone..." type="text">
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <button class="size-10 flex items-center justify-center rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 relative">
                        <span class="material-symbols-outlined">notifications</span>
                        <span class="absolute top-2.5 right-2.5 size-2 bg-primary rounded-full border-2 border-white dark:border-slate-900"></span>
                    </button>
                    <button class="h-10 px-4 flex items-center gap-2 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors">
                        <span class="material-symbols-outlined text-lg">add</span>
                        Generate Tag
                    </button>
                </div>
            </header>
            <!-- Table Controls -->
            <div class="px-8 py-4 flex flex-wrap items-center gap-3 bg-white/50 dark:bg-slate-900/50">
                <button class="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-sm font-medium">
                    All Plans
                    <span class="material-symbols-outlined text-base">expand_more</span>
                </button>
                <button class="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-sm font-medium">
                    Status: All
                    <span class="material-symbols-outlined text-base">expand_more</span>
                </button>
                <button class="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-sm font-medium">
                    Tag Type
                    <span class="material-symbols-outlined text-base">expand_more</span>
                </button>
                <div class="h-6 w-px bg-slate-200 dark:border-slate-800 mx-2"></div>
                <button class="flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white text-sm font-medium">
                    <span class="material-symbols-outlined text-base">filter_list</span>
                    More Filters
                </button>
                <div class="ml-auto flex items-center gap-2">
                    <span class="text-xs text-slate-500 font-medium italic">Showing 1-10 of 1,240 results</span>
                    <button class="size-8 flex items-center justify-center rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800">
                        <span class="material-symbols-outlined text-lg">download</span>
                    </button>
                </div>
            </div>
            <!-- Table Container -->
            <div class="flex-1 overflow-auto p-8 pt-0">
                <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                <th class="px-4 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Tag ID
                                </th>
                                <th class="px-4 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Owner
                                </th>
                                <th class="px-4 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Type
                                </th>
                                <th class="px-4 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Plan
                                </th>
                                <th class="px-4 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Valid
                                    Till</th>
                                <th class="px-4 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Phone
                                </th>
                                <th class="px-4 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Status
                                </th>
                                <th class="px-4 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">QR Count
                                </th>
                                <th class="px-4 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">
                                    Actions</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                            <!-- Row 1 -->
                            <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                <td class="px-4 py-4 font-mono text-sm font-medium text-primary">#TRK-9021</td>
                                <td class="px-4 py-4">
                                    <div class="flex flex-col">
                                        <span class="text-sm font-semibold">Arjun Mehta</span>
                                        <span class="text-[10px] text-slate-400">arjun.m@example.com</span>
                                    </div>
                                </td>
                                <td class="px-4 py-4 text-sm text-slate-600 dark:text-slate-400">Physical</td>
                                <td class="px-4 py-4">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#FFD700]/20 text-[#b39700] border border-[#FFD700]/30">GOLD</span>
                                </td>
                                <td class="px-4 py-4 text-sm text-slate-600 dark:text-slate-400 font-medium">Dec 10,
                                    2025</td>
                                <td class="px-4 py-4 text-sm text-slate-500 font-mono tracking-tighter">+91 ••••••4521
                                </td>
                                <td class="px-4 py-4">
                                    <span class="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 text-xs font-bold">
                                        <span class="size-1.5 rounded-full bg-emerald-500"></span>
                                        Active
                                    </span>
                                </td>
                                <td class="px-4 py-4 text-sm font-semibold">1,240</td>
                                <td class="px-4 py-4 text-right">
                                    <button class="text-slate-400 hover:text-primary transition-colors">
                                        <span class="material-symbols-outlined">edit_square</span>
                                    </button>
                                </td>
                            </tr>
                            <!-- Row 2 -->
                            <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                <td class="px-4 py-4 font-mono text-sm font-medium text-primary">#TRK-4432</td>
                                <td class="px-4 py-4">
                                    <div class="flex flex-col">
                                        <span class="text-sm font-semibold">Priya Singh</span>
                                        <span class="text-[10px] text-slate-400">priya.s@corp.net</span>
                                    </div>
                                </td>
                                <td class="px-4 py-4 text-sm text-slate-600 dark:text-slate-400">Digital</td>
                                <td class="px-4 py-4">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-200/50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600">GREY</span>
                                </td>
                                <td class="px-4 py-4 text-sm text-slate-600 dark:text-slate-400 font-medium">Aug 15,
                                    2024</td>
                                <td class="px-4 py-4 text-sm text-slate-500 font-mono tracking-tighter">+91 ••••••8890
                                </td>
                                <td class="px-4 py-4">
                                    <span class="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-50 dark:bg-amber-500/10 text-amber-600 text-xs font-bold">
                                        <span class="size-1.5 rounded-full bg-amber-500"></span>
                                        Pending
                                    </span>
                                </td>
                                <td class="px-4 py-4 text-sm font-semibold">45</td>
                                <td class="px-4 py-4 text-right">
                                    <button class="text-slate-400 hover:text-primary transition-colors">
                                        <span class="material-symbols-outlined">edit_square</span>
                                    </button>
                                </td>
                            </tr>
                            <!-- Row 3 -->
                            <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                <td class="px-4 py-4 font-mono text-sm font-medium text-primary">#TRK-1128</td>
                                <td class="px-4 py-4">
                                    <div class="flex flex-col">
                                        <span class="text-sm font-semibold">Rahul K.</span>
                                        <span class="text-[10px] text-slate-400">rahul.k@infra.org</span>
                                    </div>
                                </td>
                                <td class="px-4 py-4 text-sm text-slate-600 dark:text-slate-400">Physical</td>
                                <td class="px-4 py-4">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#FFD700]/20 text-[#b39700] border border-[#FFD700]/30">GOLD</span>
                                </td>
                                <td class="px-4 py-4 text-sm text-slate-600 dark:text-slate-400 font-medium">Jan 20,
                                    2026</td>
                                <td class="px-4 py-4 text-sm text-slate-500 font-mono tracking-tighter">+91 ••••••3321
                                </td>
                                <td class="px-4 py-4">
                                    <span class="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 text-xs font-bold">
                                        <span class="size-1.5 rounded-full bg-emerald-500"></span>
                                        Active
                                    </span>
                                </td>
                                <td class="px-4 py-4 text-sm font-semibold">892</td>
                                <td class="px-4 py-4 text-right">
                                    <button class="text-slate-400 hover:text-primary transition-colors">
                                        <span class="material-symbols-outlined">edit_square</span>
                                    </button>
                                </td>
                            </tr>
                            <!-- Row 4 -->
                            <tr class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                <td class="px-4 py-4 font-mono text-sm font-medium text-primary">#TRK-0098</td>
                                <td class="px-4 py-4">
                                    <div class="flex flex-col">
                                        <span class="text-sm font-semibold">Sana Khan</span>
                                        <span class="text-[10px] text-slate-400">sana.k@design.io</span>
                                    </div>
                                </td>
                                <td class="px-4 py-4 text-sm text-slate-600 dark:text-slate-400">Digital</td>
                                <td class="px-4 py-4">
                                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-200/50 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600">GREY</span>
                                </td>
                                <td class="px-4 py-4 text-sm text-slate-600 dark:text-slate-400 font-medium">Nov 05,
                                    2023</td>
                                <td class="px-4 py-4 text-sm text-slate-500 font-mono tracking-tighter">+91 ••••••1122
                                </td>
                                <td class="px-4 py-4">
                                    <span class="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-rose-50 dark:bg-rose-500/10 text-rose-600 text-xs font-bold">
                                        <span class="size-1.5 rounded-full bg-rose-500"></span>
                                        Expired
                                    </span>
                                </td>
                                <td class="px-4 py-4 text-sm font-semibold">12</td>
                                <td class="px-4 py-4 text-right">
                                    <button class="text-slate-400 hover:text-primary transition-colors">
                                        <span class="material-symbols-outlined">edit_square</span>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- Pagination -->
                <div class="mt-6 flex items-center justify-between">
                    <p class="text-sm text-slate-500">Showing page 1 of 124</p>
                    <div class="flex items-center gap-1">
                        <button class="size-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400 hover:bg-slate-50 transition-colors">
                            <span class="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button class="size-9 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-sm">1</button>
                        <button class="size-9 flex items-center justify-center rounded-lg border border-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium">2</button>
                        <button class="size-9 flex items-center justify-center rounded-lg border border-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium">3</button>
                        <span class="px-2 text-slate-400">...</span>
                        <button class="size-9 flex items-center justify-center rounded-lg border border-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium">124</button>
                        <button class="size-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-400 hover:bg-slate-50 transition-colors">
                            <span class="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>


` }} />
    </>
  );
}
