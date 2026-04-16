"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { Loader2, Download, RefreshCw, Search, ChevronRight, ChevronLeft, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import toast from "react-hot-toast";

export default function SmsLogsPage() {
  const [logs, setLogs] = useState<any[]>([]);
  const [stats, setStats] = useState({ total: 0, sent: 0, failed: 0 });
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);

  const fetchLogs = async () => {
    setLoading(true);
    try {
      const [logsRes, statsRes] = await Promise.all([
        api.get(`/sms?page=${page}&limit=20${search ? `&tagCode=${search}` : ''}`),
        api.get("/sms/stats")
      ]);
      
      setLogs(logsRes.data.smsLogs || []);
      setTotalPages(logsRes.data.totalPages || 1);
      setTotalRecords(logsRes.data.total || 0);
      setStats(statsRes.data || { total: 0, sent: 0, failed: 0 });
    } catch (e) {
      toast.error("Failed to load message logs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Only fetch if delay for search debounce if needed, but here simple effect
    const timeout = setTimeout(() => {
       fetchLogs();
    }, 300);
    return () => clearTimeout(timeout);
  }, [page, search]);

  const deliveryRate = stats.total > 0 ? ((stats.sent / stats.total) * 100).toFixed(1) : "0.0";

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">WhatsApp Logs</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">
            Monitor and track all outgoing WhatsApp messages for your assets.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            <Download className="w-5 h-5" />
            Export CSV
          </button>
          <button onClick={() => fetchLogs()} className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-sm font-medium hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20">
            <RefreshCw className="w-5 h-5" />
            Refresh
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="md:col-span-2 relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm transition-all"
            placeholder="Search by Tag ID..."
            type="text"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          />
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden relative min-h-[400px]">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-white/50 dark:bg-slate-900/50 z-10">
            <Loader2 className="w-10 h-10 text-primary animate-spin" />
          </div>
        ) : null}
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Tag ID</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Recipient Phone</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Message Content</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Sent At</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-black text-primary uppercase">
                    {log.tag?.tagCode || "UNKNOWN"}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-mono">
                    <div className="flex items-center gap-2">
                       <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-3.5 h-3.5" alt="WA" />
                       {log.recipient}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400 max-w-xs truncate" title={log.message}>
                    {log.message}
                  </td>
                  <td className="px-6 py-4">
                    {log.status === 'sent' ? (
                       <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                         <CheckCircle2 className="w-4 h-4" />
                         <span className="text-sm font-bold">Delivered</span>
                       </div>
                    ) : log.status === 'failed' ? (
                       <div className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400">
                         <AlertCircle className="w-4 h-4" />
                         <span className="text-sm font-bold">Failed</span>
                       </div>
                    ) : (
                       <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                         <Clock className="w-4 h-4" />
                         <span className="text-sm font-bold text-amber-500 capitalize">{log.status}</span>
                       </div>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap font-medium">
                    {new Date(log.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
              {logs.length === 0 && !loading && (
                 <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-slate-400 dark:text-slate-500 font-bold">
                       No messages found
                    </td>
                 </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">
            Showing {(page - 1) * 20 + 1} to {Math.min(page * 20, totalRecords)} of {totalRecords} results
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="p-1 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm font-bold text-slate-600 dark:text-slate-300">
              Page {page} of {totalPages}
            </span>
            <button 
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="p-1 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="p-5 bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl border border-emerald-100 dark:border-emerald-800 shadow-sm">
          <p className="text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1">
            Delivery Rate
          </p>
          <p className="text-3xl font-black text-emerald-700 dark:text-emerald-300">{deliveryRate}%</p>
        </div>
        <div className="p-5 bg-orange-50 dark:bg-orange-900/10 rounded-2xl border border-orange-100 dark:border-orange-800 shadow-sm">
          <p className="text-xs font-black text-orange-600 dark:text-orange-400 uppercase tracking-widest mb-1">
            Total Messages Sent
          </p>
          <p className="text-3xl font-black text-orange-700 dark:text-orange-300">{stats.sent}</p>
        </div>
        <div className="p-5 bg-primary/5 rounded-2xl border border-primary/10 shadow-sm">
          <p className="text-xs font-black text-primary uppercase tracking-widest mb-1">
            Total Attempts
          </p>
          <p className="text-3xl font-black text-slate-800 dark:text-white">{stats.total}</p>
        </div>
      </div>
    </div>
  );
}
