"use client";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === "/admin/login";
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    
    if (!token && !isLoginPage) {
      router.push("/admin/login");
    } else {
      setIsVerifying(false);
    }
  }, [isLoginPage, router]);

  if (isLoginPage) {
    return <div className="min-h-screen bg-[#F1F5F9] dark:bg-[#0f172a] font-display">{children}</div>;
  }

  if (isVerifying) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
          <p className="text-sm font-medium text-slate-500 animate-pulse">Authenticating...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#f8f9fc] dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 font-display">
      <Sidebar />
      <main className="flex-1 ml-64 p-8 min-w-0">
        <Header />
        {children}
      </main>
    </div>
  );
}
