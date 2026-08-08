"use client";

import PartnerSidebar from "@/components/PartnerSidebar";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import api from "@/lib/api";

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const isLoginPage = pathname === "/partner/login";
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("partner_token");
    
    if (!token && !isLoginPage) {
      router.push("/partner/login");
    } else if (token && !isLoginPage) {
      // Set default token for API calls
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setIsVerifying(false);
    } else {
      setIsVerifying(false);
    }
  }, [isLoginPage, router]);

  if (isLoginPage) {
    return <div className="min-h-screen bg-indigo-50 font-display">{children}</div>;
  }

  if (isVerifying) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-indigo-50">
        <Loader2 className="w-10 h-10 animate-spin text-indigo-600" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50 text-slate-900 font-display">
      <PartnerSidebar />
      <main className="flex-1 ml-64 p-8 min-w-0">
        <div className="flex justify-end mb-6">
          <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 font-medium text-gray-700">
            Welcome, Partner
          </div>
        </div>
        {children}
      </main>
    </div>
  );
}
