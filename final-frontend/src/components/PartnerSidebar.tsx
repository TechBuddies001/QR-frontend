"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, LogOut, FileText, QrCode } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/partner/dashboard", icon: LayoutDashboard },
  { label: "Assign QR to Customer", href: "/partner/assign", icon: Users },
  { label: "Assigned Tags", href: "/partner/tags", icon: QrCode },
  { label: "Inventory Ledger", href: "/partner/ledger", icon: FileText },
];

export default function PartnerSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-indigo-900 text-white flex flex-col z-20 shadow-2xl">
      <div className="px-5 py-8 pb-4 flex items-center gap-3">
        <div className="size-12 shrink-0 flex items-center justify-center bg-white rounded-full">
          <img src="/images/new_logo.png" alt="Tarkshya" className="w-8 h-8 object-contain" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="font-bold text-lg leading-none uppercase">Partner Portal</h1>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-6">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-lg transition-all",
                isActive 
                  ? "bg-white text-indigo-900 shadow-md" 
                  : "text-indigo-100 hover:bg-white/10 hover:text-white"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive ? "text-indigo-900" : "")} />
              <span className="font-semibold">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-indigo-800">
        <Link
          href="/partner/login"
          onClick={() => localStorage.removeItem('partner_token')}
          className="flex items-center gap-4 px-4 py-3 rounded-lg transition-all text-red-300 hover:bg-white/10 hover:text-red-200"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-semibold">Logout</span>
        </Link>
      </div>
    </aside>
  );
}
