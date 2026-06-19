"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { Loader2, TrendingUp, Mail, Phone, Trash2, Filter, RefreshCw, ChevronLeft, ChevronRight, Info, MessageSquare } from "lucide-react";
import toast from "react-hot-toast";

export default function LeadsPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [selectedLead, setSelectedLead] = useState<any>(null);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await api.get('/leads');
      setLeads(res.data.leads || []);
    } catch (e) {
      toast.error("Failed to load leads");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lead?")) return;
    try {
      await api.delete(`/leads/${id}`);
      toast.success("Lead deleted");
      if (selectedLead?.id === id) setSelectedLead(null);
      fetchLeads();
    } catch (e) {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tight">Leads & Enquiries</h1>
          <p className="text-slate-500 font-medium">Manage landing page inquiries and quote requests</p>
        </div>
        <button 
          onClick={fetchLeads} 
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 transition-colors font-bold text-sm shadow-sm"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden relative min-h-[400px]">
        {loading && (
          <div className="absolute inset-0 bg-white/50 dark:bg-slate-900/50 flex justify-center items-center z-10 backdrop-blur-sm">
            <Loader2 className="w-10 h-10 animate-spin text-primary" />
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Contact Info</th>
                <th className="px-6 py-4">Subject / Service</th>
                <th className="px-6 py-4">Message</th>
                <th className="px-6 py-4">Company</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50 text-sm">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-4 font-black text-slate-800 dark:text-white">
                    {lead.name}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 font-bold">
                        <Phone className="w-3.5 h-3.5 text-emerald-500" />
                        {lead.phone}
                      </div>
                      {lead.email && (
                        <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                          <Mail className="w-3.5 h-3.5 text-blue-500" />
                          {lead.email}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-lg font-black text-[10px] uppercase tracking-wide">
                      {lead.subject || "N/A"}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-slate-600 dark:text-slate-400 max-w-xs truncate cursor-pointer hover:text-primary transition-colors" onClick={() => setSelectedLead(lead)}>
                    {lead.message || "No message"}
                  </td>
                  <td className="px-6 py-4 font-bold text-slate-500">
                    {lead.company || "Individual"}
                  </td>
                  <td className="px-6 py-4 text-slate-500 font-bold text-xs uppercase tracking-tight">
                    {new Date(lead.createdAt).toLocaleString(undefined, {
                       dateStyle: "medium", timeStyle: "short"
                    })}
                  </td>
                  <td className="px-6 py-4 text-right flex items-center justify-end gap-2">
                    <button 
                      onClick={() => setSelectedLead(lead)}
                      className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                      title="View Details"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDelete(lead.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete Lead"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {leads.length === 0 && !loading && (
                 <tr>
                    <td colSpan={7} className="px-6 py-20 text-center">
                       <div className="flex flex-col items-center">
                          <div className="size-16 bg-slate-50 dark:bg-slate-800/50 rounded-full flex items-center justify-center mb-4">
                             <MessageSquare className="w-6 h-6 text-slate-300" />
                          </div>
                          <p className="text-slate-500 font-bold mb-1">No Leads Found</p>
                          <p className="text-xs text-slate-400 font-medium max-w-sm">When users fill out enquiry forms on the website, they will appear here.</p>
                       </div>
                    </td>
                 </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Lead Details Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedLead(null)}>
          <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-xl font-black text-slate-800 dark:text-white uppercase tracking-tight">Lead Details</h2>
              <button onClick={() => setSelectedLead(null)} className="text-slate-400 hover:text-slate-600 transition-colors">
                ✕
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-1">Name</p>
                  <p className="font-bold text-slate-800 dark:text-white">{selectedLead.name}</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-1">Company</p>
                  <p className="font-bold text-slate-800 dark:text-white">{selectedLead.company || "Individual"}</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-1">Phone Number</p>
                  <p className="font-bold text-emerald-600 flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> {selectedLead.phone}</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-1">Email Address</p>
                  <p className="font-bold text-blue-600 flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> {selectedLead.email || "N/A"}</p>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-2">Subject / Inquiry Type</p>
                <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg font-black text-xs uppercase tracking-wide">
                  {selectedLead.subject || "N/A"}
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl">
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-2">Complete Message</p>
                <p className="text-slate-700 dark:text-slate-300 whitespace-pre-wrap font-medium leading-relaxed">
                  {selectedLead.message || "No message provided."}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                <span>Received At</span>
                <span>{new Date(selectedLead.createdAt).toLocaleString(undefined, { dateStyle: 'full', timeStyle: 'long' })}</span>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/20 rounded-b-2xl flex justify-end gap-3">
              <button 
                onClick={() => handleDelete(selectedLead.id)}
                className="px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 rounded-xl font-bold text-sm transition-colors flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" /> Delete Lead
              </button>
              <button 
                onClick={() => setSelectedLead(null)}
                className="px-6 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl font-bold text-sm transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
