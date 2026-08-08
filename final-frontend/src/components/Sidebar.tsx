"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
  ShieldCheck,
  PenTool,
  ShoppingCart,
  Image,
  FolderOpen,
  UserCheck,
  Printer,
  Truck,
  Boxes,
  FileText,
  Bell,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import api from "@/lib/api";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Generate QR", href: "/admin/qr/generate", icon: QrCode },
  { label: "Batch Printing", href: "/admin/printing", icon: Printer },
  { label: "Logistics & Supply", href: "/admin/logistics", icon: Truck },
  { label: "QR Templates", href: "/admin/qr-templates", icon: PenTool },
  { label: "Safety QR Products", href: "/admin/safety-id", icon: ShieldCheck },
  { label: "FMCG Inventory", href: "/admin/products", icon: Boxes },
  { label: "Categories", href: "/admin/categories", icon: FolderOpen },
  { label: "Tags", href: "/admin/tags", icon: Tag },
  { label: "Users", href: "/admin/users", icon: UserCheck },
  { label: "Sales & Orders", href: "/admin/sales", icon: ShoppingCart },
  { label: "Partners", href: "/admin/partners", icon: Users },
  { label: "Inventory Module", href: "/admin/inventory", icon: Boxes },
  { label: "Global Ledger", href: "/admin/ledger", icon: FileText },
  { label: "Activation Feed", href: "/admin/activation-feed", icon: Bell, badge: true },
  { label: "Case Studies", href: "/admin/case-studies", icon: Sparkles },
  { label: "Plans & Packs", href: "/admin/plans", icon: Package },
  { label: "Subscriptions", href: "/admin/subscriptions", icon: CreditCard },
  { label: "Sponsors", href: "/admin/sponsors", icon: Users },
  { label: "Banners", href: "/admin/banners", icon: Image },
  { label: "Call Logs", href: "/admin/calls", icon: PhoneCall },
  { label: "WhatsApp Logs", href: "/admin/sms", icon: MessageSquare },
  { label: "Leads & Enquiries", href: "/admin/leads", icon: MessageCircle },
  { label: "Scan History", href: "/admin/scans", icon: History },
];

const BOTTOM_ITEMS = [
  { label: "Settings", href: "/admin/settings", icon: Settings },
  { label: "Project Hub", href: "/public-landing", icon: Home },
  { label: "Logout", href: "/admin/login", icon: LogOut, danger: true },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [unreadCount, setUnreadCount] = useState(0);

  // Poll unread notifications every 30s
  useEffect(() => {
    const fetchUnread = async () => {
      try {
        const res = await api.get('/notifications/unread-count');
        setUnreadCount(res.data.count || 0);
      } catch {
        // Silently fail – don't break sidebar if API is down
      }
    };
    fetchUnread();
    const interval = setInterval(fetchUnread, 30000);
    return () => clearInterval(interval);
  }, []);

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
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
          const Icon = item.icon;
          const showBadge = 'badge' in item && item.badge && unreadCount > 0;
          
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
              <div className="relative">
                <Icon className={cn("w-5 h-5", isActive ? "text-primary" : "text-white/60 group-hover:text-white")} />
                {showBadge && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-red-500 text-white text-[9px] font-black rounded-full flex items-center justify-center border border-white/30 animate-pulse">
                    {unreadCount > 9 ? '9+' : unreadCount}
                  </span>
                )}
              </div>
              <span className="font-semibold text-sm tracking-wide flex-1">{item.label}</span>
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
