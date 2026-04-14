"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { 
  ChevronLeft, ChevronRight, Download, Edit2, 
  Filter, MoreHorizontal, Search, Loader2,
  Tag as TagIcon, Plus, Info
} from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

interface Tag {
  id: string;
  tagCode: string;
  ownerName: string;
  ownerPhone: string;
  assetType: string;
  planType: string;
  isActive: boolean;
  isLost: boolean;
  expiresAt: string;
  _count: {
    scanLogs: number;
    callLogs: number;
  };
}

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [tags, setTags] = useState<Tag[]>([]);
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    totalPages: 1,
    limit: 100
  });
  const [filters, setFilters] = useState({
    search: "",
    status: "all",
    planType: "all",
    assetType: "all"
  });
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const fetchTags = async (page = 1, currentLimit = pagination.limit) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: currentLimit.toString(),
        ...(filters.search && { search: filters.search }),
        ...(filters.status !== "all" && { status: filters.status }),
        ...(filters.planType !== "all" && { planType: filters.planType }),
        ...(filters.assetType !== "all" && { assetType: filters.assetType })
      });
      
      const response = await api.get(`/tags?${params.toString()}`);
      setTags(response.data.tags);
      setPagination({
        ...pagination,
        total: response.data.total,
        page: response.data.page,
        totalPages: response.data.totalPages,
        limit: currentLimit
      });
    } catch (error) {
      toast.error("Failed to fetch tags");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTags(1);
  }, [filters.status, filters.planType, filters.assetType]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchTags(1);
  };

  const handleLimitChange = (newLimit: number) => {
    fetchTags(1, newLimit);
  };

  const handleExportExcel = async () => {
    try {
      const params = new URLSearchParams(
        selectedIds.length > 0 
          ? { ids: selectedIds.join(',') }
          : {
              ...(filters.search && { search: filters.search }),
              ...(filters.status !== "all" && { status: filters.status }),
              ...(filters.planType !== "all" && { planType: filters.planType }),
              ...(filters.assetType !== "all" && { assetType: filters.assetType })
            }
      );
      
      const response = await api.get(`/tags/export-excel?${params.toString()}`, {
        responseType: 'blob'
      });
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `Tags_Export_${new Date().getTime()}.xlsx`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      toast.success("Excel exported successfully");
    } catch (error) {
      toast.error("Failed to export Excel");
    }
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === tags.length && tags.length > 0) {
      setSelectedIds([]);
    } else {
      setSelectedIds(tags.map(t => t.id));
    }
  };

  const toggleSelect = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50/50 dark:bg-slate-950">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-[0_1px_10px_rgba(0,0,0,0.02)]">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-800 dark:text-white flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-xl text-primary">
               <TagIcon className="w-6 h-6" />
            </div>
            Tag Management History
          </h1>
          <p className="text-sm font-medium text-slate-400 mt-1">Manage, Track, and Monitor your generated smart tags.</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          <form onSubmit={handleSearch} className="relative min-w-[320px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text"
              placeholder="Search Tag Code, Owner..."
              className="w-full pl-12 pr-4 py-3 bg-slate-50/50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700/50 rounded-2xl text-sm font-bold outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all shadow-sm"
              value={filters.search}
              onChange={(e) => setFilters({...filters, search: e.target.value})}
            />
          </form>

          <button
            onClick={handleExportExcel}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-black transition-all shadow-lg active:scale-95 border-2 ${
              selectedIds.length > 0 
                ? "bg-emerald-600 border-emerald-600 text-white hover:bg-emerald-700" 
                : "bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-emerald-600 dark:text-emerald-400 hover:border-emerald-500/30"
            }`}
          >
            <Download className="w-5 h-5" />
            {selectedIds.length > 0 ? `Export Selected (${selectedIds.length})` : 'Download Excel for Print'}
          </button>
 
          <Link 
            href="/admin/qr/generate"
            className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-orange-600 text-white rounded-2xl text-sm font-black transition-all shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Plus className="w-5 h-5" />
            Create Tags
          </Link>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="px-10 py-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-xl text-nowrap tracking-tight font-black uppercase text-[10px]">
          <span className="ml-2 text-slate-400">View</span>
          <select 
             className="bg-transparent text-[11px] font-bold outline-none px-2 py-1 pr-1 text-primary"
             value={pagination.limit}
             onChange={(e) => handleLimitChange(parseInt(e.target.value))}
           >
             <option value={10}>10</option>
             <option value={20}>20</option>
             <option value={50}>50</option>
             <option value={100}>100</option>
             <option value={200}>200</option>
           </select>
        </div>

        <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2" />

        <div className="flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-xl">
           <Filter className="w-3.5 h-3.5 text-slate-400 ml-2" />
           <select 
             className="bg-transparent text-xs font-bold outline-none px-2 py-1 pr-4"
             value={filters.planType}
             onChange={(e) => setFilters({...filters, planType: e.target.value})}
           >
             <option value="all">All Plans</option>
             <option value="basic">Basic</option>
             <option value="standard">Standard</option>
             <option value="premium">Premium</option>
           </select>
        </div>

        <div className="flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-xl">
           <select 
             className="bg-transparent text-xs font-bold outline-none px-2 py-1 pr-4"
             value={filters.status}
             onChange={(e) => setFilters({...filters, status: e.target.value})}
           >
             <option value="all">All Status</option>
             <option value="active">Active</option>
             <option value="inactive">Inactive</option>
             <option value="lost">Lost</option>
           </select>
        </div>

        <div className="flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-xl">
           <select 
             className="bg-transparent text-xs font-bold outline-none px-2 py-1 pr-4"
             value={filters.assetType}
             onChange={(e) => setFilters({...filters, assetType: e.target.value})}
           >
             <option value="all">All Assets</option>
             <option value="vehicle">Vehicle</option>
             <option value="pet">Pet</option>
             <option value="person">Person</option>
           </select>
        </div>

        <div className="h-4 w-[2px] bg-slate-200 dark:bg-slate-700 mx-2" />
        
        <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest whitespace-nowrap">
           Total: {pagination.total} tags
        </p>
      </div>

      {/* Main Table Content */}
      <div className="flex-1 overflow-auto px-10 py-8 no-scrollbar">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden relative min-h-[400px]">
          {loading ? (
             <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <Loader2 className="w-10 h-10 text-primary animate-spin" />
                <p className="text-sm font-bold text-slate-400">Loading tags history...</p>
             </div>
          ) : (
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse table-fixed">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-800">
                    <th className="w-[60px] px-8 py-5">
                      <input 
                        type="checkbox" 
                        className="size-4 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer"
                        checked={selectedIds.length === tags.length && tags.length > 0}
                        onChange={toggleSelectAll}
                      />
                    </th>
                    <th className="w-[180px] px-4 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-nowrap">Tag ID</th>
                    <th className="min-w-[250px] px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-nowrap">Primary Owner</th>
                    <th className="w-[130px] px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-center text-nowrap">Stats</th>
                    <th className="w-[200px] px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-nowrap">Plan details</th>
                    <th className="w-[220px] px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right text-nowrap">Settings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
                  {tags.map((tag) => (
                    <tr key={tag.id} className={`hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-all group ${selectedIds.includes(tag.id) ? 'bg-primary/5 dark:bg-primary/5' : ''}`}>
                      <td className="px-8 py-5">
                        <input 
                          type="checkbox" 
                          className="size-4 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer"
                          checked={selectedIds.includes(tag.id)}
                          onChange={() => toggleSelect(tag.id)}
                        />
                      </td>
                      <td className="px-4 py-5">
                         <div className="flex flex-col gap-1 truncate">
                            <span className="font-mono text-xs font-black text-primary bg-primary/5 px-2 py-0.5 rounded-lg w-fit truncate">
                              {tag.tagCode}
                            </span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight flex items-center gap-1.5 px-0.5">
                               {tag.assetType === 'vehicle' ? '🚗' : 
                                tag.assetType === 'pet' ? '🐕' : 
                                tag.assetType === 'person' ? '👤' : '📦'} {tag.assetType}
                            </span>
                         </div>
                      </td>
                      <td className="px-8 py-5">
                        <div className="flex flex-col truncate">
                          <span className="text-sm font-black text-slate-700 dark:text-slate-200 truncate">{tag.ownerName || 'Unknown Owner'}</span>
                          <span className="text-[10px] font-bold text-slate-400 group-hover:text-primary transition-colors tracking-tight">{tag.ownerPhone}</span>
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <div className="flex items-center justify-center gap-4">
                           <div className="flex flex-col items-center">
                              <span className="text-xs font-black text-slate-700 dark:text-slate-200">{tag._count?.scanLogs || 0}</span>
                              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Scans</span>
                           </div>
                           <div className="w-[1px] h-4 bg-slate-100 dark:bg-slate-800" />
                           <div className="flex flex-col items-center">
                              <span className="text-xs font-black text-slate-700 dark:text-slate-200">{tag._count?.callLogs || 0}</span>
                              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Calls</span>
                           </div>
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <div className="flex flex-col gap-2">
                          <span className={`inline-flex items-center px-4 py-1 rounded-xl text-[10px] font-black uppercase border w-fit ${
                            tag.planType === 'premium' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                            tag.planType === 'standard' ? 'bg-indigo-50 text-indigo-600 border-indigo-100' :
                            'bg-slate-100 text-slate-500 border-transparent'
                          }`}>
                            ✨ {tag.planType}
                          </span>
                          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-tight border-l-2 border-slate-100 dark:border-slate-800 pl-2">
                            Ends: {tag.expiresAt ? new Date(tag.expiresAt).toLocaleDateString() : 'Lifetime'}
                          </span>
                        </div>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <div className="flex items-center justify-end gap-3">
                          <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tight flex items-center gap-2 border ${
                            tag.isActive ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-red-50 text-red-600 border-red-100'
                          }`}>
                            <div className={`size-1.5 rounded-full ${tag.isActive ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
                            {tag.isActive ? 'Online' : 'Stopped'}
                          </span>
                          
                          <Link 
                            href={`/admin/tags/${tag.id}`} 
                            className="size-10 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-400 hover:text-primary transition-all hover:scale-110 active:scale-90"
                            title="Edit Tag / View Analytics"
                          >
                            <Edit2 className="w-4 h-4" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {tags.length === 0 && !loading && (
                     <tr>
                       <td colSpan={5} className="px-8 py-32 text-center">
                          <div className="flex flex-col items-center">
                             <div className="size-20 bg-slate-50 dark:bg-slate-800/50 rounded-full flex items-center justify-center mb-6">
                                <Info className="w-8 h-8 text-slate-300" />
                             </div>
                             <h4 className="text-xl font-black text-slate-800 dark:text-white mb-2">No Tags Found</h4>
                             <p className="text-sm font-bold text-slate-400 max-w-xs mx-auto">
                                Try adjusting your filters or creating a new tag to populate your history.
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

        {/* Pagination Controls */}
        {!loading && pagination.totalPages > 1 && (
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 pb-10">
            <div className="p-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm px-6">
               <p className="text-xs font-black text-slate-400 uppercase tracking-widest leading-none">
                 Page <span className="text-slate-800 dark:text-white ml-2">{pagination.page} / {pagination.totalPages}</span>
               </p>
            </div>
            
            <div className="flex items-center gap-2 p-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
              <button 
                onClick={() => fetchTags(pagination.page - 1)}
                disabled={pagination.page === 1}
                className="size-11 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-primary hover:bg-primary/10 disabled:opacity-30 disabled:pointer-events-none transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-1 px-2">
                {[...Array(pagination.totalPages)].map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => fetchTags(i + 1)}
                    className={`size-11 flex items-center justify-center rounded-xl font-black text-sm transition-all ${
                      pagination.page === i + 1 
                      ? "bg-primary text-white shadow-xl shadow-primary/20 scale-110" 
                      : "hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-400"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button 
                onClick={() => fetchTags(pagination.page + 1)}
                disabled={pagination.page === pagination.totalPages}
                className="size-11 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-primary hover:bg-primary/10 disabled:opacity-30 disabled:pointer-events-none transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
