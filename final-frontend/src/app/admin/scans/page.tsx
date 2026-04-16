"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { Loader2, TrendingUp, TrendingDown, Smartphone, Globe, Filter, RefreshCw, ChevronLeft, ChevronRight, Info } from "lucide-react";
import toast from "react-hot-toast";

export default function ScansPage() {
  const [logs, setLogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);

  const fetchLogs = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/scan-history?page=${page}&limit=20${search ? `&tagCode=${search}` : ''}`);
      setLogs(res.data.scans || []);
      setTotalPages(res.data.totalPages || 1);
      setTotalRecords(res.data.total || 0);
    } catch (e) {
      toast.error("Failed to load scan logs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
       fetchLogs();
    }, 300);
    return () => clearTimeout(timeout);
  }, [page, search]);

  const parseDevice = (ua: string) => {
    if (!ua) return "Unknown Device";
    if (ua.includes("iPhone")) return "iPhone";
    if (ua.includes("iPad")) return "iPad";
    if (ua.includes("Android")) return "Android Device";
    if (ua.includes("Mac")) return "Mac / MacBook";
    if (ua.includes("Windows")) return "Windows PC";
    return "Unknown Browser";
  };

  return (
    <div className="p-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Lifetime Scans</p>
              <h3 className="text-3xl font-black mt-1">{totalRecords}</h3>
            </div>
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <TrendingUp className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-emerald-500 text-xs font-bold flex items-center">
              Real-time
            </span>
            <span className="text-slate-400 text-xs">database metrics</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Scan Devices</p>
              <h3 className="text-3xl font-black mt-1">Multi-device</h3>
            </div>
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <Smartphone className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-emerald-500 text-xs font-bold flex items-center">
              Active tracking
            </span>
            <span className="text-slate-400 text-xs">based on User-Agent</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">Global IPs</p>
              <h3 className="text-3xl font-black mt-1">Tracked</h3>
            </div>
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <Globe className="w-6 h-6" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <span className="text-emerald-500 text-xs font-bold flex items-center">
              Live location
            </span>
            <span className="text-slate-400 text-xs">mapping enabled</span>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden relative min-h-[400px]">
        {loading && (
          <div className="absolute inset-0 bg-white/50 dark:bg-slate-900/50 flex justify-center items-center z-10 backdrop-blur-sm">
            <Loader2 className="w-10 h-10 animate-spin text-primary" />
          </div>
        )}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <h4 className="font-black text-xl text-slate-800 dark:text-white flex items-center gap-2">Detailed Scan Logs</h4>
          <div className="flex gap-2 w-full md:w-auto">
            <input 
               type="text"
               placeholder="Search Tag ID..."
               className="px-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm outline-none focus:border-primary flex-1 min-w-[200px]"
               value={search}
               onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            />
            <button onClick={fetchLogs} className="p-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-600 dark:text-slate-300">
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">
                <th className="px-6 py-4">Tag Code</th>
                <th className="px-6 py-4">Owner Name</th>
                <th className="px-6 py-4">Location / City</th>
                <th className="px-6 py-4">Device Config</th>
                <th className="px-6 py-4">IP Address</th>
                <th className="px-6 py-4 text-right">Time of Scan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50 text-sm">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-4 font-mono font-black text-primary">
                    {log.tag?.tagCode || "UNKNOWN"}
                  </td>
                  <td className="px-6 py-4 font-bold text-slate-700 dark:text-slate-300">
                     {log.tag?.ownerName || "N/A"}
                     {log.tag?.assetType && <span className="ml-2 px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 rounded-md text-[10px] uppercase text-slate-400 tracking-widest">{log.tag.assetType}</span>}
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-600 dark:text-slate-400">
                     {log.scannerCity || "Unknown Location"}
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-500 text-xs">
                     <span className="px-2.5 py-1 bg-blue-50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400 rounded-lg font-bold">
                        {parseDevice(log.userAgent)}
                     </span>
                  </td>
                  <td className="px-6 py-4 font-mono text-slate-500 text-xs">
                     {log.scannerIp || "Hidden IP"}
                  </td>
                  <td className="px-6 py-4 text-right text-slate-500 font-bold text-xs uppercase tracking-tight">
                    {new Date(log.createdAt).toLocaleString(undefined, {
                       dateStyle: "medium", timeStyle: "short"
                    })}
                  </td>
                </tr>
              ))}
              {logs.length === 0 && !loading && (
                 <tr>
                    <td colSpan={6} className="px-6 py-20 text-center">
                       <div className="flex flex-col items-center">
                          <div className="size-16 bg-slate-50 dark:bg-slate-800/50 rounded-full flex items-center justify-center mb-4">
                             <Info className="w-6 h-6 text-slate-300" />
                          </div>
                          <p className="text-slate-500 font-bold mb-1">No Real-time Scans Yet</p>
                          <p className="text-xs text-slate-400 font-medium max-w-sm">When users scan the QR links, the logs will appear here instantly capturing location and IP data.</p>
                       </div>
                    </td>
                 </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <p className="text-xs text-slate-500 font-bold">
            Showing {(page - 1) * 20 + 1} to {Math.min(page * 20, totalRecords)} of {totalRecords} logged scans
          </p>
          <div className="flex gap-2">
            <button 
               onClick={() => setPage(p => Math.max(1, p - 1))}
               disabled={page === 1}
               className="p-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 transition-all text-slate-600 dark:text-slate-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="px-4 py-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl font-bold text-[10px] uppercase tracking-widest text-slate-500 flex items-center">
               Page {page} / {totalPages}
            </div>
            <button 
               onClick={() => setPage(p => Math.min(totalPages, p + 1))}
               disabled={page === totalPages}
               className="p-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 transition-all text-slate-600 dark:text-slate-300"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
