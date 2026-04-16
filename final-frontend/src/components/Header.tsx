"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const [admin, setAdmin] = useState<{name: string, role: string} | null>(null);

  useEffect(() => {
    const userStr = localStorage.getItem("admin_user");
    if (userStr) {
      try {
        setAdmin(JSON.parse(userStr));
      } catch (e) {}
    }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/admin/tags?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="flex items-center justify-between mb-8">
      <form onSubmit={handleSearch} className="relative w-96">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          search
        </span>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white dark:bg-slate-800 border-none rounded-xl pl-10 py-2.5 focus:ring-2 focus:ring-primary shadow-sm text-sm"
          placeholder="Search by tag ID or user..."
          type="text"
        />
      </form>
      <div className="flex items-center gap-4">
        <button className="relative p-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-slate-600 dark:text-slate-300">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-700">
          <div className="text-right">
            <p className="text-sm font-bold capitalize">{admin ? admin.name : "Loading..."}</p>
            <p className="text-xs text-slate-500 capitalize">{admin ? admin.role : "User"}</p>
          </div>
          <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border-2 border-primary/20">
            <img
              className="w-full h-full object-cover"
              alt="User avatar"
              src={admin ? `https://ui-avatars.com/api/?name=${encodeURIComponent(admin.name)}&background=0284c7&color=fff&bold=true` : "https://ui-avatars.com/api/?name=User"}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
