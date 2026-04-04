"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { 
  Plus, Search, Filter, Loader2, Users, IndianRupee, Clock,
  MoreVertical, CheckCircle2, XCircle, Trash2, Calendar, Tag as TagIcon,
  ChevronLeft, ChevronRight, Info
} from "lucide-react";
import toast from "react-hot-toast";

interface Subscription {
  id: string;
  tagId: string | null;
  ownerName: string;
  ownerPhone: string;
  planName: string;
  amount: number;
  status: string;
  startsAt: string;
  expiresAt: string;
}

interface Summary {
  activeCount: number;
  totalRevenue: number;
  expiringSoon: number;
}

export default function SubscriptionsPage() {
  const [loading, setLoading] = useState(true);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [summary, setSummary] = useState<Summary>({ activeCount: 0, totalRevenue: 0, expiringSoon: 0 });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const skip = (page - 1) * 20;
      const params = new URLSearchParams({
        page: page.toString(),
        limit: "20",
        ...(statusFilter !== "all" && { status: statusFilter }),
        ...(search && { search })
      });
      
      const [subsRes, summaryRes] = await Promise.all([
        api.get(`/subscriptions?${params.toString()}`),
        api.get("/subscriptions/summary")
      ]);

      setSubscriptions(subsRes.data.subscriptions);
      setTotalPages(subsRes.data.totalPages);
      setSummary(summaryRes.data);
    } catch (error) {
      toast.error("Failed to load subscription data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, statusFilter]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    fetchData();
  };

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    try {
      await api.patch(`/subscriptions/${id}/status`, { status: newStatus });
      toast.success("Status updated");
      fetchData();
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50/50 dark:bg-slate-950">
      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 pt-10">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-6 relative overflow-hidden group">
          <div className="absolute right-[-10%] top-[-10%] size-32 bg-primary/5 rounded-full blur-3xl group-hover:scale-150 transition-all duration-700" />
          <div className="size-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center flex-shrink-0">
             <Users className="w-8 h-8" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Active Accounts</p>
            <h3 className="text-3xl font-black text-slate-800 dark:text-white leading-none">
               {summary.activeCount.toLocaleString()}
            </h3>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-6 relative overflow-hidden group">
          <div className="absolute right-[-10%] top-[-10%] size-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:scale-150 transition-all duration-700" />
          <div className="size-16 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
             <IndianRupee className="w-8 h-8" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Total Revenue</p>
            <h3 className="text-3xl font-black text-slate-800 dark:text-white leading-none">
               ₹{summary.totalRevenue.toLocaleString()}
            </h3>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 flex items-center gap-6 relative overflow-hidden group">
          <div className="absolute right-[-10%] top-[-10%] size-32 bg-amber-500/5 rounded-full blur-3xl group-hover:scale-150 transition-all duration-700" />
          <div className="size-16 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center flex-shrink-0">
             <Clock className="w-8 h-8" />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Expiring (7 Days)</p>
            <h3 className="text-3xl font-black text-slate-800 dark:text-white leading-none">
               {summary.expiringSoon}
            </h3>
          </div>
        </div>
      </div>

      {/* Header & Listing Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-8">
        <div>
           <h2 className="text-2xl font-black text-slate-800 dark:text-white">Subscription History</h2>
           <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">Master logs for all recurring transactions.</p>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
           <form onSubmit={handleSearch} className="relative min-w-[300px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input 
                className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl text-sm font-bold outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                placeholder="Search Owner or ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
           </form>

           <div className="flex p-1 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl">
              <button 
                onClick={() => setStatusFilter("all")} 
                className={`px-4 py-2 text-[10px] font-black uppercase rounded-xl transition-all ${statusFilter === 'all' ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' : 'text-slate-400 hover:text-slate-600'}`}
              >
                All
              </button>
              <button 
                onClick={() => setStatusFilter("active")} 
                className={`px-4 py-2 text-[10px] font-black uppercase rounded-xl transition-all ${statusFilter === 'active' ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Active
              </button>
              <button 
                onClick={() => setStatusFilter("expired")} 
                className={`px-4 py-2 text-[10px] font-black uppercase rounded-xl transition-all ${statusFilter === 'expired' ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Expired
              </button>
           </div>
        </div>
      </div>

      {/* Table Area */}
      <div className="flex-1 overflow-auto px-10 pb-10 no-scrollbar">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden relative">
          {loading ? (
             <div className="py-20 flex flex-col items-center justify-center gap-4">
                <Loader2 className="w-10 h-10 text-primary animate-spin" />
                <p className="text-sm font-bold text-slate-400">Loading master logs...</p>
             </div>
          ) : (
            <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-800">
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Tag Reference</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Payer Details</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">Plan Info</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Validity Period</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Current Status</th>
                  <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Edit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
                {subscriptions.map((sub) => (
                  <tr key={sub.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-all font-medium">
                    <td className="px-8 py-6">
                      <div className="flex flex-col gap-1">
                        <span className="font-mono text-xs font-black text-primary bg-primary/5 px-2 py-0.5 rounded-lg w-fit">
                          {sub.tagId || 'No Link'}
                        </span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Ref: #{sub.id.slice(0, 8)}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-col">
                        <span className="text-sm font-black text-slate-800 dark:text-white uppercase">{sub.ownerName}</span>
                        <span className="text-xs font-bold text-slate-400">{sub.ownerPhone}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-center">
                       <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-800 text-[10px] font-black rounded-lg uppercase">
                          {sub.planName} (₹{sub.amount})
                       </span>
                    </td>
                    <td className="px-8 py-6">
                       <div className="flex flex-col gap-1">
                          <span className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                             <Calendar className="w-3.5 h-3.5 text-slate-400" />
                             Ends {new Date(sub.expiresAt).toLocaleDateString()}
                          </span>
                          <span className="text-[9px] font-black text-slate-400 uppercase">Started {new Date(sub.startsAt).toLocaleDateString()}</span>
                       </div>
                    </td>
                    <td className="px-8 py-6">
                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tight flex items-center gap-2 border w-fit ${
                          sub.status === 'active' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 
                          sub.status === 'expired' ? 'bg-amber-50 text-amber-600 border-amber-100' : 
                          'bg-red-50 text-red-600 border-red-100'
                        }`}>
                          <div className={`size-1.5 rounded-full ${sub.status === 'active' ? 'bg-emerald-500' : sub.status === 'expired' ? 'bg-amber-500' : 'bg-red-500'}`} />
                          {sub.status}
                        </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                       <select 
                         className="bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary px-3 py-1.5 rounded-xl text-[10px] font-black uppercase transition-all"
                         value={sub.status}
                         onChange={(e) => handleUpdateStatus(sub.id, e.target.value)}
                       >
                          <option value="active">Active</option>
                          <option value="expired">Expired</option>
                          <option value="cancelled">Cancelled</option>
                       </select>
                    </td>
                  </tr>
                ))}
                {subscriptions.length === 0 && !loading && (
                   <tr>
                     <td colSpan={6} className="px-8 py-32 text-center">
                        <div className="flex flex-col items-center">
                           <div className="size-20 bg-slate-50 dark:bg-slate-800/50 rounded-full flex items-center justify-center mb-6">
                              <Info className="w-8 h-8 text-slate-300" />
                           </div>
                           <h4 className="text-xl font-black text-slate-800 dark:text-white mb-2">No Transactions Found</h4>
                           <p className="text-sm font-bold text-slate-400 max-w-xs mx-auto">
                              Transactions will appear here once tags are activated or renewals are processed.
                           </p>
                        </div>
                     </td>
                   </tr>
                 )}
              </tbody>
            </table>
            </div>
          )}
        </div>

        {/* Pagination */}
        {!loading && totalPages > 1 && (
           <div className="mt-10 flex items-center justify-center gap-3">
              <button 
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="size-11 flex items-center justify-center rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 text-slate-400 hover:text-primary transition-all disabled:opacity-30 shadow-sm"
              >
                 <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="px-6 py-3 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-sm">
                 Page {page} / {totalPages}
              </div>

              <button 
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="size-11 flex items-center justify-center rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 text-slate-400 hover:text-primary transition-all disabled:opacity-30 shadow-sm"
              >
                 <ChevronRight className="w-5 h-5" />
              </button>
           </div>
        )}
      </div>
    </div>
  );
}
