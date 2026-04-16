"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  QrCode, 
  Tag, 
  Package, 
  CreditCard, 
  Users, 
  PhoneCall, 
  MessageSquare, 
  History, 
  Settings, 
  Home, 
  LogOut,
  ShieldCheck
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Generate QR", href: "/admin/qr/generate", icon: QrCode },
  { label: "Tags", href: "/admin/tags", icon: Tag },
  { label: "Plans & Packs", href: "/admin/plans", icon: Package },
  { label: "Subscriptions", href: "/admin/subscriptions", icon: CreditCard },
  { label: "Sponsors", href: "/admin/sponsors", icon: Users },
  { label: "Call Logs", href: "/admin/calls", icon: PhoneCall },
  { label: "WhatsApp Logs", href: "/admin/sms", icon: MessageSquare },
  { label: "Scan History", href: "/admin/scans", icon: History },
];

const BOTTOM_ITEMS = [
  { label: "Settings", href: "/admin/settings", icon: Settings },
  { label: "Project Hub", href: "/public-landing", icon: Home },
  { label: "Logout", href: "/admin/login", icon: LogOut, danger: true },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-primary dark:bg-slate-900 text-white flex flex-col z-20 shadow-2xl">
      {/* Brand Logo Section */}
      <div className="px-5 py-8 pb-4 flex items-center gap-3">
        <div className="size-14 shrink-0 flex items-center justify-center">
          <img src="/images/new_logo.png" alt="Tarkshya" className="w-full h-full object-contain drop-shadow-xl" />
        </div>
        <div className="flex flex-col justify-center overflow-hidden">
          <h1 className="font-black text-xl leading-none tracking-[0.15em] uppercase truncate">Tarkshya</h1>
          <p className="text-[9px] text-white/70 uppercase tracking-[0.25em] font-black mt-1 truncate">
            Solution
          </p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4 space-y-1.5 mt-6 overflow-y-auto custom-scrollbar">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 group relative",
                isActive 
                  ? "bg-white text-primary shadow-lg shadow-black/10 scale-[1.02]" 
                  : "text-white/80 hover:bg-white/15 hover:text-white hover:translate-x-1"
              )}
            >
              <Icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-white/60 group-hover:text-white")} />
              <span className="font-semibold text-sm tracking-wide">{item.label}</span>
              {isActive && (
                <div className="absolute left-0 w-1.5 h-6 bg-primary rounded-r-full" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-6 border-t border-white/15 space-y-1 bg-black/5">
        {BOTTOM_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 text-white/70 hover:bg-white/10 hover:text-white",
                item.danger && "hover:bg-red-500/20 hover:text-red-200"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium text-sm">{item.label}</span>
            </Link>
          );
        })}
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
      `}</style>
    </aside>
  );
}
