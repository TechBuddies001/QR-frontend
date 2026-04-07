"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { 
  Phone, Calendar, Clock, CheckCircle2, 
  XCircle, AlertCircle, Loader2, Search,
  Filter, ChevronLeft, ChevronRight, Info
} from "lucide-react";
import toast from "react-hot-toast";

interface CallLog {
  id: string;
  tag: {
    tagCode: string;
    ownerName: string;
    assetType: string;
  };
  scannerPhone: string;
  status: string;
  duration: number | null;
  provider: string;
  createdAt: string;
}

export default function CallLogsPage() {
  const [loading, setLoading] = useState(true);
  const [calls, setCalls] = useState<CallLog[]>([]);
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1,
    total: 0
  });

  const fetchCalls = async (page = 1) => {
    setLoading(true);
    try {
      const response = await api.get(`/calls?page=${page}&limit=20`);
      setCalls(response.data.calls);
      setPagination({
        page: response.data.page,
        totalPages: response.data.totalPages,
        total: response.data.total
      });
    } catch (error) {
      toast.error("Failed to fetch call logs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCalls();
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50/50 dark:bg-slate-950">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm transition-all">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-800 dark:text-white flex items-center gap-3">
            <div className="p-2 bg-[#00D4D4]/10 rounded-xl text-[#00D4D4]">
               <Phone className="w-6 h-6" />
            </div>
            Call Traffic Logs
          </h1>
          <p className="text-sm font-medium text-slate-400 mt-1 uppercase tracking-widest">Powered by Exotel Voice Masking</p>
        </div>
        
        <div className="flex items-center gap-3">
           <div className="flex items-center gap-2 px-4 py-2 bg-[#00D4D4]/5 rounded-xl border border-[#00D4D4]/10">
              <img src="/images/exotel-badge.png" className="w-8 h-8" alt="Exotel" />
              <div className="flex flex-col">
                 <span className="text-[10px] font-black text-[#00D4D4] uppercase leading-none">Bridge Active</span>
                 <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">Secure Routing Layer</span>
              </div>
           </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto px-10 py-8 no-scrollbar">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden relative min-h-[400px]">
           {loading ? (
             <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <Loader2 className="w-10 h-10 text-[#00D4D4] animate-spin" />
                <p className="text-sm font-bold text-slate-400">Fetching call records...</p>
             </div>
           ) : (
             <div className="w-full overflow-x-auto">
               <table className="w-full text-left border-collapse min-w-[1000px]">
                 <thead>
                   <tr className="bg-slate-50 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-800 uppercase text-[10px] font-black tracking-widest text-slate-400">
                     <th className="px-8 py-5">Incident Info</th>
                     <th className="px-8 py-5">Participants</th>
                     <th className="px-8 py-5">Status & Duration</th>
                     <th className="px-8 py-5">Technology</th>
                     <th className="px-8 py-5 text-right">Actions</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
                   {calls.map((call) => (
                     <tr key={call.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-all font-medium">
                       <td className="px-8 py-5">
                          <div className="flex flex-col gap-1">
                             <span className="text-xs font-black text-slate-800 dark:text-white uppercase tracking-tight">{call.tag.tagCode}</span>
                             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
                                <Calendar className="w-2.5 h-2.5" />
                                {new Date(call.createdAt).toLocaleDateString()}
                                <Clock className="w-2.5 h-2.5 ml-1" />
                                {new Date(call.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                             </span>
                          </div>
                       </td>
                       <td className="px-8 py-5 text-sm">
                          <div className="flex items-center gap-4">
                             <div className="flex flex-col">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Owner</span>
                                <span className="font-bold text-slate-700 dark:text-slate-300">{call.tag.ownerName}</span>
                             </div>
                             <div className="w-[1px] h-6 bg-slate-100 dark:bg-slate-800" />
                             <div className="flex flex-col">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Scanner</span>
                                <span className="font-bold text-slate-700 dark:text-slate-300 font-mono">{call.scannerPhone || 'Anonymous'}</span>
                             </div>
                          </div>
                       </td>
                       <td className="px-8 py-5">
                         <div className="flex flex-col gap-1.5">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight w-fit flex items-center gap-1.5 ${
                               call.status === 'connected' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' :
                               call.status === 'failed' ? 'bg-red-50 text-red-600 border border-red-100' :
                               'bg-emerald-50 text-emerald-600 border border-emerald-100'
                            }`}>
                               {call.status === 'connected' ? <CheckCircle2 className="w-3 h-3" /> : (call.status === 'failed' ? <XCircle className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />)}
                               {call.status}
                            </span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">
                               {call.duration ? `${Math.floor(call.duration / 60)}m ${call.duration % 60}s` : '--:--'}
                            </span>
                         </div>
                       </td>
                       <td className="px-8 py-5">
                          <div className="flex items-center gap-2">
                             <div className="size-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                <img src="/images/exotel-badge.png" className="w-5 h-5 grayscale opacity-50" />
                             </div>
                             <div className="flex flex-col">
                                <span className="text-[10px] font-black text-slate-800 dark:text-white uppercase tracking-tighter">{call.provider} Voice</span>
                                <span className="text-[8px] font-black text-[#00D4D4] uppercase tracking-widest leading-none">Masked Bridge</span>
                             </div>
                          </div>
                       </td>
                       <td className="px-8 py-5 text-right">
                          <button className="text-slate-400 hover:text-primary transition-colors">
                             <Info className="w-5 h-5" />
                          </button>
                       </td>
                     </tr>
                   ))}
                   {calls.length === 0 && !loading && (
                      <tr>
                         <td colSpan={5} className="py-24 text-center">
                            <div className="flex flex-col items-center">
                               <div className="size-20 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
                                  <Phone className="w-8 h-8 text-slate-300" />
                               </div>
                               <h4 className="text-xl font-black text-slate-800 dark:text-white">No Call Traffic Found</h4>
                               <p className="text-sm font-bold text-slate-400 max-w-xs mx-auto">
                                  When scanners start calling owners through the secure bridge, logs will appear here.
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
      </div>
    </div>
  );
}
