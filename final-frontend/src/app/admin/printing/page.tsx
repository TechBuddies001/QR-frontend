"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { 
  Printer, CheckCircle2, Clock, Download, RefreshCw, 
  Search, Layers, QrCode, FileSpreadsheet
} from "lucide-react";
import toast from "react-hot-toast";

interface PrintingBatch {
  batchNumber: string;
  total: number;
  printed: number;
  pending: number;
  type: string;
}

export default function PrintingPage() {
  const [loading, setLoading] = useState(true);
  const [batches, setBatches] = useState<PrintingBatch[]>([]);
  const [search, setSearch] = useState("");

  const fetchBatches = async () => {
    setLoading(true);
    try {
      const res = await api.get("/inventory/printing/batches");
      setBatches(res.data.batches || []);
    } catch {
      toast.error("Failed to load printing batches");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBatches();
  }, []);

  const handleUpdateStatus = async (batchNumber: string, status: "IN_PRINTING" | "PRINTED" | "PENDING") => {
    try {
      const res = await api.post("/inventory/printing/update-status", {
        batchNumber,
        printingStatus: status,
      });
      toast.success(res.data.message || `Updated batch ${batchNumber} status to ${status}`);
      fetchBatches();
    } catch {
      toast.error("Failed to update printing status");
    }
  };

  const exportCSV = (batch: PrintingBatch) => {
    const csvContent = `data:text/csv;charset=utf-8,Batch Number,Type,Total QRs,Printed,Pending\n${batch.batchNumber},${batch.type},${batch.total},${batch.printed},${batch.pending}`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Printing_Batch_${batch.batchNumber}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success(`Exported CSV for batch ${batch.batchNumber}`);
  };

  const filteredBatches = batches.filter(b =>
    b.batchNumber.toLowerCase().includes(search.toLowerCase()) ||
    b.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight flex items-center gap-3">
            <Printer className="w-8 h-8 text-indigo-600" /> Batch Printing & Production
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Manage QR batch printing status, export printable sheets, and mark batches PRINTED.
          </p>
        </div>
        <button
          onClick={fetchBatches}
          className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 shadow-sm transition"
        >
          <RefreshCw className="w-4 h-4" /> Refresh Batches
        </button>
      </div>

      {/* Top Search & Stats */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search Batch Number..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm font-bold outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
          />
        </div>
      </div>

      {/* Batches Grid / Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden">
        <div className="px-8 py-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <h2 className="text-lg font-black text-slate-800 dark:text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600" /> Active Printing Batches ({filteredBatches.length})
          </h2>
        </div>

        {loading ? (
          <div className="p-12 flex justify-center items-center">
            <RefreshCw className="w-8 h-8 text-indigo-600 animate-spin" />
          </div>
        ) : filteredBatches.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/40 text-slate-400 text-[10px] font-black uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">
                  <th className="px-8 py-4">Batch Number</th>
                  <th className="px-8 py-4">Category / Module</th>
                  <th className="px-8 py-4 text-center">Total QRs</th>
                  <th className="px-8 py-4 text-center">Printed</th>
                  <th className="px-8 py-4 text-center">Pending</th>
                  <th className="px-8 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredBatches.map((batch) => (
                  <tr key={batch.batchNumber} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition">
                    <td className="px-8 py-5">
                      <span className="font-mono text-sm font-black text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-3 py-1 rounded-xl">
                        {batch.batchNumber}
                      </span>
                    </td>
                    <td className="px-8 py-5">
                      <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        {batch.type}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-center font-black text-slate-800 dark:text-white">
                      {batch.total}
                    </td>
                    <td className="px-8 py-5 text-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-xs font-black rounded-xl">
                        <CheckCircle2 className="w-3.5 h-3.5" /> {batch.printed}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 text-xs font-black rounded-xl">
                        <Clock className="w-3.5 h-3.5" /> {batch.pending}
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => exportCSV(batch)}
                          className="p-2 text-slate-500 hover:text-indigo-600 bg-slate-100 dark:bg-slate-800 rounded-xl transition"
                          title="Export CSV"
                        >
                          <FileSpreadsheet className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleUpdateStatus(batch.batchNumber, "PRINTED")}
                          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-sm"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" /> Mark PRINTED
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-12 text-center text-slate-400">
            <QrCode className="w-12 h-12 mx-auto mb-3 text-slate-300" />
            <p className="font-bold text-sm">No batches found for printing</p>
          </div>
        )}
      </div>
    </div>
  );
}
