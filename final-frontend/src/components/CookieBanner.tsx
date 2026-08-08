"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Cookie } from "lucide-react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#0B1A33] border-t border-[#1a2f55] shadow-[0_-10px_40px_rgba(0,0,0,0.5)] p-4 sm:p-6 transition-all duration-500 ease-in-out transform translate-y-0">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-4">
          <div className="hidden sm:flex bg-[#C9A84C]/20 p-3 rounded-full text-[#C9A84C]">
            <Cookie size={24} />
          </div>
          <div>
            <h3 className="text-white font-bold mb-1 flex items-center gap-2">
              <Cookie size={16} className="sm:hidden text-[#C9A84C]" />
              We value your privacy
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies as described in our{" "}
              <Link href="/privacy" className="text-[#C9A84C] hover:underline font-semibold">
                Privacy Policy
              </Link>.
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto mt-2 sm:mt-0 shrink-0">
          <button 
            onClick={acceptCookies}
            className="w-full sm:w-auto bg-[#C9A84C] hover:bg-[#b09240] text-[#0B1A33] font-bold px-6 py-2.5 rounded-lg transition-colors text-sm"
          >
            Accept
          </button>
          <button 
            onClick={() => setShow(false)}
            className="p-2.5 text-gray-400 hover:text-white bg-[#1a2f55] hover:bg-[#203659] rounded-lg transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
