
import React from 'react';
import Script from 'next/script';

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet">
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

      <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen" style={{minHeight: '100vh', width: '100%'}} dangerouslySetInnerHTML={{ __html: `
<div class="flex h-screen overflow-hidden">
<!-- Sidebar Navigation -->
<aside class="w-64 flex-shrink-0 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col">
<div class="p-6">
<div class="flex items-center gap-3">
<div class="bg-primary/10 rounded-lg p-2 flex items-center justify-center">
<span class="material-symbols-outlined text-primary">rocket_launch</span>
</div>
<div>
<h1 class="text-sm font-bold tracking-tight">Tarkshya Solution</h1>
<p class="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">Admin Portal</p>
</div>
</div>
</div>
<nav class="flex-1 px-4 space-y-1 overflow-y-auto">
<a class="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined text-[20px]">dashboard</span>
<span class="text-sm font-medium">Dashboard</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined text-[20px]">analytics</span>
<span class="text-sm font-medium">Analytics</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined text-[20px]">group</span>
<span class="text-sm font-medium">Users</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined text-[20px]">assignment</span>
<span class="text-sm font-medium">Projects</span>
</a>
<a class="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
<span class="material-symbols-outlined text-[20px]">inventory_2</span>
<span class="text-sm font-medium">Inventory</span>
</a>
<div class="pt-4 pb-2">
<p class="px-3 text-[10px] uppercase font-bold text-slate-400 tracking-widest">System</p>
</div>
<a class="flex items-center gap-3 px-3 py-2 bg-primary text-white rounded-lg transition-colors shadow-lg shadow-primary/20" href="/admin/settings">
<span class="material-symbols-outlined text-[20px]">settings</span>
<span class="text-sm font-medium">Settings</span>
</a>
</nav>
<div class="p-4 border-t border-slate-200 dark:border-slate-800">
<div class="flex items-center gap-3 px-2 py-2">
<div class="size-8 rounded-full bg-primary/20 overflow-hidden border border-primary/30">
<img alt="User Avatar" data-alt="Stylized human avatar icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiT6TnD0NCHdMPxUiMofvRaayJ5LqzudY4j0sOI5iOP7KkyCefxzX8wPYfIx0vcEV9EUP7WWr_TpexJrUzCctVWVruQ3hsxyKDGzprP8Q1b5A44Mpwjmu6nP_9e6rXfk4QxQ_3Z8095TxuZ9JDmCkIpANOVZwVRFLgadRCXcz3_QgluLJge9Whz2I1aB6jkVbcYK-YXtPLxOyWzlb_fLEUKJFjmgeN4OagJrJqmKk0tD8qENwjPUoELIyzfjm-CgUajI1ssa62k9g">
</div>
<div class="flex-1 min-w-0">
<p class="text-xs font-bold truncate">Alex Rivera</p>
<p class="text-[10px] text-slate-500 truncate">Super Admin</p>
</div>
<span class="material-symbols-outlined text-slate-400 text-sm cursor-pointer hover:text-slate-600">logout</span>
</div>
</div>
</aside>
<!-- Main Content -->
<main class="flex-1 flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
<!-- Top Header -->
<header class="h-16 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between px-8">
<h2 class="text-lg font-bold">Settings</h2>
<div class="flex items-center gap-4">
<div class="relative">
<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
<input class="pl-9 pr-4 py-1.5 text-sm bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg w-64 focus:ring-primary focus:border-primary" placeholder="Search settings..." type="text">
</div>
<button class="material-symbols-outlined text-slate-500 hover:text-primary transition-colors">notifications</button>
<button class="material-symbols-outlined text-slate-500 hover:text-primary transition-colors">help</button>
</div>
</header>
<!-- Content Area -->
<div class="flex-1 overflow-y-auto p-8">
<div class="max-w-6xl mx-auto space-y-8">
<!-- Section Header -->
<div>
<h3 class="text-2xl font-bold tracking-tight">System Configuration</h3>
<p class="text-slate-500 dark:text-slate-400">Manage your application metadata, custom tags, and operational statuses.</p>
</div>
<!-- Tabs -->
<div class="border-b border-slate-200 dark:border-slate-800">
<nav class="flex gap-8">
<a class="border-b-2 border-primary pb-4 px-1 text-sm font-bold text-primary flex items-center gap-2" href="#">
<span class="material-symbols-outlined text-[18px]">label</span>
                                Tag Types
                            </a>
<a class="border-b-2 border-transparent pb-4 px-1 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 flex items-center gap-2" href="#">
<span class="material-symbols-outlined text-[18px]">rule</span>
                                Statuses
                            </a>
</nav>
</div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
<!-- Left: Table (Tag Types) -->
<div class="lg:col-span-2 space-y-6">
<div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
<div class="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
<h4 class="font-bold">Existing Tag Types</h4>
<span class="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider text-slate-500">6 Total</span>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left">
<thead>
<tr class="bg-slate-50 dark:bg-slate-800/50">
<th class="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-500">ID</th>
<th class="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-500">Name</th>
<th class="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-500">Description</th>
<th class="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-500">Created At</th>
<th class="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-500 text-right">Actions</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-100 dark:divide-slate-800">
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
<td class="px-6 py-4 text-sm font-medium text-slate-400">T1</td>
<td class="px-6 py-4 text-sm font-bold">Asset</td>
<td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Physical equipment tracking</td>
<td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">2023-10-01</td>
<td class="px-6 py-4 text-right">
<button class="text-primary hover:underline text-xs font-bold">Edit</button>
</td>
</tr>
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
<td class="px-6 py-4 text-sm font-medium text-slate-400">T2</td>
<td class="px-6 py-4 text-sm font-bold">Location</td>
<td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Geographic site identifiers</td>
<td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">2023-10-05</td>
<td class="px-6 py-4 text-right">
<button class="text-primary hover:underline text-xs font-bold">Edit</button>
</td>
</tr>
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
<td class="px-6 py-4 text-sm font-medium text-slate-400">T3</td>
<td class="px-6 py-4 text-sm font-bold">Priority</td>
<td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Urgency level for tickets</td>
<td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">2023-10-10</td>
<td class="px-6 py-4 text-right">
<button class="text-primary hover:underline text-xs font-bold">Edit</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<!-- Statuses Preview Table -->
<div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
<div class="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
<h4 class="font-bold">System Statuses</h4>
<span class="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider text-slate-500">4 Active</span>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left">
<thead>
<tr class="bg-slate-50 dark:bg-slate-800/50">
<th class="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-500">Label</th>
<th class="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-500">Visual Swatch</th>
<th class="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-500">Category</th>
<th class="px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-500 text-right">Actions</th>
</tr>
</thead>
<tbody class="divide-y divide-slate-100 dark:divide-slate-800">
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
<td class="px-6 py-4 text-sm font-bold">Active</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2">
<div class="size-4 rounded bg-emerald-500 border border-emerald-600"></div>
<span class="text-xs text-slate-500">#10B981</span>
</div>
</td>
<td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Operational</td>
<td class="px-6 py-4 text-right">
<button class="text-primary hover:underline text-xs font-bold">Edit</button>
</td>
</tr>
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
<td class="px-6 py-4 text-sm font-bold">Maintenance</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2">
<div class="size-4 rounded bg-amber-500 border border-amber-600"></div>
<span class="text-xs text-slate-500">#F59E0B</span>
</div>
</td>
<td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Temporary</td>
<td class="px-6 py-4 text-right">
<button class="text-primary hover:underline text-xs font-bold">Edit</button>
</td>
</tr>
<tr class="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
<td class="px-6 py-4 text-sm font-bold">Critical</td>
<td class="px-6 py-4">
<div class="flex items-center gap-2">
<div class="size-4 rounded bg-rose-500 border border-rose-600"></div>
<span class="text-xs text-slate-500">#F43F5E</span>
</div>
</td>
<td class="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">Failure</td>
<td class="px-6 py-4 text-right">
<button class="text-primary hover:underline text-xs font-bold">Edit</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<!-- Right: Add New Forms -->
<div class="space-y-8">
<!-- Add Tag Type Form -->
<div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
<h4 class="font-bold mb-4 flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[20px]">add_circle</span>
                                    Add New Tag Type
                                </h4>
<form class="space-y-4">
<div>
<label class="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Tag Name</label>
<input class="w-full text-sm bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary" placeholder="e.g. Asset, Location" type="text">
</div>
<div>
<label class="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Description</label>
<textarea class="w-full text-sm bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary" placeholder="Explain the purpose..." rows="3"></textarea>
</div>
<button class="w-full bg-primary text-white py-2 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:brightness-110 transition-all" type="submit">Create Tag Type</button>
</form>
</div>
<!-- Add Status Form -->
<div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
<h4 class="font-bold mb-4 flex items-center gap-2">
<span class="material-symbols-outlined text-primary text-[20px]">palette</span>
                                    Add New Status
                                </h4>
<form class="space-y-4">
<div>
<label class="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Status Label</label>
<input class="w-full text-sm bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary" placeholder="e.g. Decommissioned" type="text">
</div>
<div class="grid grid-cols-2 gap-4">
<div>
<label class="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Color Code</label>
<div class="flex items-center gap-2">
<input class="size-8 rounded border-0 p-0 bg-transparent cursor-pointer" type="color" value="#4F46E5">
<input class="w-full text-[10px] py-1 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded focus:ring-primary" type="text" value="#4F46E5">
</div>
</div>
<div>
<label class="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Category</label>
<select class="w-full text-sm py-1 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded focus:ring-primary">
<option>Operational</option>
<option>Temporary</option>
<option>Failure</option>
</select>
</div>
</div>
<button class="w-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 py-2 rounded-lg font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-all" type="submit">Save Status</button>
</form>
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
