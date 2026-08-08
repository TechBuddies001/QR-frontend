"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { 
  Building, Truck, Store, ArrowRight, CheckCircle2, 
  Layers, Package, RefreshCw, Send, ShieldCheck
} from "lucide-react";
import toast from "react-hot-toast";

interface Partner {
  id: string;
  name: string;
  type: string;
  state?: string;
  district?: string;
}

interface LogisticsSummary {
  stages: { warehouse: number; distributor: number; dealer: number };
  tags: { warehouse: number; distributor: number; dealer: number };
  products: { warehouse: number; distributor: number; dealer: number };
  defaultWarehouse: string;
  distributors: Partner[];
  dealers: Partner[];
}

export default function LogisticsPage() {
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState<LogisticsSummary | null>(null);

  // Dispatch Form State
  const [batchNumber, setBatchNumber] = useState("");
  const [targetStage, setTargetStage] = useState<"WAREHOUSE" | "DISTRIBUTOR" | "DEALER">("WAREHOUSE");
  const [warehouseLocation, setWarehouseLocation] = useState("Chandausi Warehouse");
  const [selectedDistributor, setSelectedDistributor] = useState("");
  const [selectedDealer, setSelectedDealer] = useState("");
  const [entityType, setEntityType] = useState<"both" | "tag" | "product">("both");
  const [submitting, setSubmitting] = useState(false);

  const fetchSummary = async () => {
    setLoading(true);
    try {
      const res = await api.get("/inventory/logistics/summary");
      setSummary(res.data);
      if (res.data.defaultWarehouse) {
        setWarehouseLocation(res.data.defaultWarehouse);
      }
    } catch {
      toast.error("Failed to load logistics summary");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSummary();
  }, []);

  const handleDispatch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!batchNumber.trim()) {
      toast.error("Please enter a Batch Number");
      return;
    }

    setSubmitting(true);
    try {
      const res = await api.post("/inventory/logistics/dispatch", {
        batchNumber: batchNumber.trim(),
        entityType,
        targetStage,
        warehouseLocation,
        distributorId: selectedDistributor || undefined,
        dealerId: selectedDealer || undefined,
      });

      toast.success(res.data.message || `Dispatched batch to ${targetStage}!`);
      setBatchNumber("");
      fetchSummary();
    } catch {
      toast.error("Failed to execute dispatch");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight flex items-center gap-3">
            <Truck className="w-8 h-8 text-indigo-600" /> Logistics & Supply Chain
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Manage product dispatch across Warehouse (Chandausi), Distributors, and Dealers/Retailers.
          </p>
        </div>
        <button
          onClick={fetchSummary}
          className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 shadow-sm transition"
        >
          <RefreshCw className="w-4 h-4" /> Refresh Summary
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-md">
              <Building className="w-6 h-6 text-white" />
            </div>
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-black uppercase tracking-wider">
              Stage 1
            </span>
          </div>
          <p className="text-indigo-100 text-xs font-bold uppercase tracking-wider">Warehouse Stock</p>
          <h3 className="text-4xl font-black mt-1">{summary?.stages.warehouse ?? "–"}</h3>
          <p className="text-indigo-200 text-xs mt-2 font-medium">
            Prefix: <span className="font-bold text-white">{warehouseLocation}</span>
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-md">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-black uppercase tracking-wider">
              Stage 2
            </span>
          </div>
          <p className="text-purple-100 text-xs font-bold uppercase tracking-wider">Distributor Stock</p>
          <h3 className="text-4xl font-black mt-1">{summary?.stages.distributor ?? "–"}</h3>
          <p className="text-purple-200 text-xs mt-2 font-medium">
            Active Distributors: <span className="font-bold text-white">{summary?.distributors.length || 0}</span>
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-teal-700 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-md">
              <Store className="w-6 h-6 text-white" />
            </div>
            <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-black uppercase tracking-wider">
              Stage 3
            </span>
          </div>
          <p className="text-emerald-100 text-xs font-bold uppercase tracking-wider">Dealer / Retailer Stock</p>
          <h3 className="text-4xl font-black mt-1">{summary?.stages.dealer ?? "–"}</h3>
          <p className="text-emerald-200 text-xs mt-2 font-medium">
            Active Dealers: <span className="font-bold text-white">{summary?.dealers.length || 0}</span>
          </p>
        </div>
      </div>

      {/* Main Dispatch Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Panel */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 shadow-xl">
          <h2 className="text-xl font-black text-slate-800 dark:text-white mb-2 flex items-center gap-2">
            <Send className="w-5 h-5 text-indigo-600" /> Dispatch Batch / Transfer Inventory
          </h2>
          <p className="text-xs text-slate-400 font-medium mb-6">
            Move batches from Warehouse prefix (e.g., Chandausi) to Distributors or Retailers.
          </p>

          <form onSubmit={handleDispatch} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Batch Number *
                </label>
                <input
                  type="text"
                  placeholder="e.g. BATCH-CHANDAUSI-2026-001"
                  value={batchNumber}
                  onChange={(e) => setBatchNumber(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Target Lifecycle Stage
                </label>
                <select
                  value={targetStage}
                  onChange={(e) => setTargetStage(e.target.value as any)}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="WAREHOUSE">🏢 Warehouse (Chandausi)</option>
                  <option value="DISTRIBUTOR">🚚 Distributor</option>
                  <option value="DEALER">🏪 Dealer / Retailer</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Warehouse Location Prefix
                </label>
                <input
                  type="text"
                  value={warehouseLocation}
                  onChange={(e) => setWarehouseLocation(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Chandausi Warehouse"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Item Category Type
                </label>
                <select
                  value={entityType}
                  onChange={(e) => setEntityType(e.target.value as any)}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="both">Both (Safety Tags & B2B Products)</option>
                  <option value="tag">Safety Tags Only</option>
                  <option value="product">B2B Products Only</option>
                </select>
              </div>
            </div>

            {targetStage === "DISTRIBUTOR" && (
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Select Distributor
                </label>
                <select
                  value={selectedDistributor}
                  onChange={(e) => setSelectedDistributor(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">-- Choose Distributor --</option>
                  {summary?.distributors.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name} ({d.district || d.state || "Partner"})
                    </option>
                  ))}
                </select>
              </div>
            )}

            {targetStage === "DEALER" && (
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Select Dealer / Retailer
                </label>
                <select
                  value={selectedDealer}
                  onChange={(e) => setSelectedDealer(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm font-bold outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">-- Choose Dealer / Retailer --</option>
                  {summary?.dealers.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name} ({d.district || d.state || "Retailer"})
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-sm uppercase tracking-wider shadow-lg shadow-indigo-500/20 transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {submitting ? (
                <RefreshCw className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  <Send className="w-4 h-4" /> Transfer / Dispatch Batch
                </>
              )}
            </button>
          </form>
        </div>

        {/* Master Lifecycle Workflow Box */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between">
          <div>
            <span className="px-3 py-1 bg-indigo-500/30 text-indigo-300 rounded-full text-[10px] font-black uppercase tracking-widest border border-indigo-500/30">
              Master Logistics Flow
            </span>
            <h3 className="text-xl font-black mt-3 mb-4">Supply Chain Lifecycle</h3>

            <div className="space-y-3 text-xs">
              {[
                { label: "1. QR Generation & Batching", icon: Layers, active: true },
                { label: "2. Printing & Stickers", icon: Package, active: true },
                { label: "3. Warehouse (Chandausi Prefix)", icon: Building, active: true },
                { label: "4. Distributor Allotment", icon: Truck, active: true },
                { label: "5. Dealer / Retailer Stock", icon: Store, active: true },
                { label: "6. Customer / Business Activation", icon: CheckCircle2, active: true },
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-2xl border border-white/10">
                  <step.icon className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="font-semibold text-slate-200">{step.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 text-center text-[11px] text-slate-400">
            Tarkshya Solution Logistics Engine v2.0
          </div>
        </div>
      </div>
    </div>
  );
}
