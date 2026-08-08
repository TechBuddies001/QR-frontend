"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import api from "@/lib/api";
import {
  Shield, Building2, Users, Tag, Timer, AlertTriangle,
  QrCode, ScanLine, Eye, PackageSearch, LayoutTemplate,
  RefreshCw, TrendingUp, Loader2, ChevronRight, CheckCircle,
  AlertCircle, Fingerprint, Activity, Store, Layers,
} from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────
interface ConsumerStats {
  totalAssets: number;
  activeUsers: number;
  pendingActivation: number;
  renewalsDue: number;
  dealerCount: number;
  expiringTags: number;
  scansThisMonth: number;
  premiumCount: number;
  basicCount: number;
  recentActivations: {
    id: string; tagCode: string; ownerName: string;
    assetType: string; planType: string; updatedAt: string;
  }[];
}

interface BusinessStats {
  companies: number;
  totalProducts: number;
  qrGenerated: number;
  qrLive: number;
  totalScans: number;
  uniqueScans: number;
  fakeScanAlerts: number;
  landingPages: number;
  renewalsDue: number;
  scansThisMonth: number;
  batchAnalytics: { batchNumber: string; products: number; scans: number }[];
  recentScans: {
    id: string; createdAt: string; scannerCity: string | null;
    product: { productCode: string; name: string; brand: string | null; batchNumber: string | null };
  }[];
}

// ─── Reusable Stat Card ───────────────────────────────────────────
function StatCard({
  icon, label, value, sub, color, loading, href,
}: {
  icon: React.ReactNode; label: string; value: number | string | undefined;
  sub?: string; color: string; loading?: boolean; href?: string;
}) {
  const inner = (
    <div className={`relative bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-lg transition-all group overflow-hidden`}>
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity ${color} bg-current`} />
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 shadow-sm ${color}`}>
        {icon}
      </div>
      {loading ? (
        <div className="h-8 w-20 bg-slate-100 rounded-lg animate-pulse mb-1" />
      ) : (
        <p className="text-3xl font-black text-slate-800 tabular-nums leading-none mb-1">
          {value ?? "–"}
        </p>
      )}
      <p className="text-sm font-semibold text-slate-600">{label}</p>
      {sub && <p className="text-xs text-slate-400 mt-0.5">{sub}</p>}
      {href && (
        <ChevronRight size={14} className="absolute top-4 right-4 text-slate-300 group-hover:text-slate-500 transition-colors" />
      )}
    </div>
  );
  return href ? <Link href={href}>{inner}</Link> : inner;
}

// ─── Alert Banner ─────────────────────────────────────────────────
function AlertBanner({ count, label, color }: { count: number; label: string; color: string }) {
  if (!count) return null;
  return (
    <div className={`flex items-center justify-between px-5 py-4 rounded-2xl border mb-6 ${color}`}>
      <div className="flex items-center gap-3">
        <AlertCircle size={18} />
        <div>
          <p className="font-bold text-sm">{count} {label}</p>
          <p className="text-xs opacity-75">Immediate attention required</p>
        </div>
      </div>
      <Link href="/admin/subscriptions" className="text-xs font-bold underline underline-offset-2">View All →</Link>
    </div>
  );
}

// ─── Section Header ───────────────────────────────────────────────
function SectionHeader({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-xl bg-white shadow flex items-center justify-center border border-slate-100">
        {icon}
      </div>
      <div>
        <h2 className="text-base font-black text-slate-800">{title}</h2>
        <p className="text-xs text-slate-400">{sub}</p>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────
export default function DashboardPage() {
  const [tab, setTab] = useState<"consumer" | "business">("consumer");
  const [consumerData, setConsumerData] = useState<ConsumerStats | null>(null);
  const [businessData, setBusinessData] = useState<BusinessStats | null>(null);
  const [consumerLoading, setConsumerLoading] = useState(true);
  const [businessLoading, setBusinessLoading] = useState(false);
  const [businessLoaded, setBusinessLoaded] = useState(false);

  // Load consumer on mount
  const loadConsumer = useCallback(async () => {
    setConsumerLoading(true);
    try {
      const res = await api.get("/dashboard/consumer");
      setConsumerData(res.data);
    } catch {
      console.error("Failed to load consumer dashboard");
    } finally {
      setConsumerLoading(false);
    }
  }, []);

  // Load business on demand (lazy)
  const loadBusiness = useCallback(async () => {
    if (businessLoaded) return;
    setBusinessLoading(true);
    try {
      const res = await api.get("/dashboard/business");
      setBusinessData(res.data);
      setBusinessLoaded(true);
    } catch {
      console.error("Failed to load business dashboard");
    } finally {
      setBusinessLoading(false);
    }
  }, [businessLoaded]);

  useEffect(() => { loadConsumer(); }, [loadConsumer]);

  const handleTabChange = (t: "consumer" | "business") => {
    setTab(t);
    if (t === "business") loadBusiness();
  };

  const isLoading = tab === "consumer" ? consumerLoading : businessLoading;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/20 p-6">

      {/* ── Header ── */}
      <div className="mb-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">Command Dashboard</h1>
            <p className="text-slate-400 text-sm mt-0.5">
              {new Date().toLocaleDateString("en-IN", { weekday: "long", day: "2-digit", month: "long", year: "numeric" })}
            </p>
          </div>

          {/* Refresh */}
          <button
            onClick={() => tab === "consumer" ? loadConsumer() : (setBusinessLoaded(false), loadBusiness())}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl text-sm font-semibold hover:bg-slate-50 shadow-sm transition"
          >
            <RefreshCw size={14} />
            Refresh
          </button>
        </div>

        {/* ── Tab Switcher ── */}
        <div className="mt-6 inline-flex items-center bg-white border border-slate-200 rounded-2xl p-1.5 shadow-sm gap-1">
          <button
            id="consumer-tab-btn"
            onClick={() => handleTabChange("consumer")}
            className={`relative flex items-center gap-2.5 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
              tab === "consumer"
                ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-200"
                : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
            }`}
          >
            <Shield size={16} />
            Consumer Dashboard
            {consumerData?.expiringTags ? (
              <span className={`ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-black ${
                tab === "consumer" ? "bg-white/30 text-white" : "bg-red-100 text-red-600"
              }`}>
                {consumerData.expiringTags}
              </span>
            ) : null}
          </button>
          <button
            id="business-tab-btn"
            onClick={() => handleTabChange("business")}
            className={`relative flex items-center gap-2.5 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 ${
              tab === "business"
                ? "bg-gradient-to-r from-purple-600 to-orange-500 text-white shadow-lg shadow-purple-200"
                : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
            }`}
          >
            <Building2 size={16} />
            Business Dashboard
            {businessData?.fakeScanAlerts ? (
              <span className={`ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-black ${
                tab === "business" ? "bg-white/30 text-white" : "bg-orange-100 text-orange-600"
              }`}>
                {businessData.fakeScanAlerts}
              </span>
            ) : null}
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          CONSUMER DASHBOARD
      ═══════════════════════════════════════════ */}
      {tab === "consumer" && (
        <div className="animate-in fade-in duration-300">

          {/* Alert Banner */}
          {consumerData?.expiringTags ? (
            <AlertBanner
              count={consumerData.expiringTags}
              label="tags expiring within 7 days"
              color="bg-red-50 border-red-200 text-red-700"
            />
          ) : null}

          {/* KPI Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
            <StatCard
              icon={<Tag size={20} className="text-white" />}
              label="Total Safety Assets" value={consumerData?.totalAssets}
              sub="All tags ever issued"
              color="bg-gradient-to-br from-indigo-500 to-indigo-700"
              loading={consumerLoading} href="/admin/tags"
            />
            <StatCard
              icon={<Users size={20} className="text-white" />}
              label="Active Users" value={consumerData?.activeUsers}
              sub="Verified tag owners"
              color="bg-gradient-to-br from-emerald-500 to-teal-600"
              loading={consumerLoading} href="/admin/users"
            />
            <StatCard
              icon={<Timer size={20} className="text-white" />}
              label="Pending Activation" value={consumerData?.pendingActivation}
              sub="Unactivated stock tags"
              color="bg-gradient-to-br from-amber-500 to-orange-500"
              loading={consumerLoading} href="/admin/inventory"
            />
            <StatCard
              icon={<RefreshCw size={20} className="text-white" />}
              label="Renewals Due" value={consumerData?.renewalsDue}
              sub="Expiring in 30 days"
              color="bg-gradient-to-br from-rose-500 to-pink-600"
              loading={consumerLoading} href="/admin/subscriptions"
            />
            <StatCard
              icon={<Store size={20} className="text-white" />}
              label="Dealer Sales" value={consumerData?.dealerCount}
              sub="Active dealer partners"
              color="bg-gradient-to-br from-violet-500 to-purple-700"
              loading={consumerLoading} href="/admin/partners"
            />
          </div>

          {/* Secondary Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Plan Breakdown</p>
              {consumerLoading ? (
                <div className="space-y-2">
                  <div className="h-5 bg-slate-100 rounded animate-pulse" />
                  <div className="h-5 bg-slate-100 rounded animate-pulse w-3/4" />
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-indigo-700 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-indigo-500" /> Premium
                    </span>
                    <span className="font-black text-slate-800">{consumerData?.premiumCount ?? 0}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-500 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-slate-400" /> Basic
                    </span>
                    <span className="font-black text-slate-800">{consumerData?.basicCount ?? 0}</span>
                  </div>
                  {/* Bar */}
                  <div className="mt-3 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-500"
                      style={{
                        width: consumerData?.totalAssets
                          ? `${Math.round(((consumerData.premiumCount || 0) / consumerData.totalAssets) * 100)}%`
                          : "0%",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Scans This Month</p>
              {consumerLoading ? (
                <div className="h-8 w-20 bg-slate-100 rounded animate-pulse" />
              ) : (
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-black text-slate-800">{consumerData?.scansThisMonth ?? 0}</span>
                  <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold mb-1">
                    <TrendingUp size={13} /> Live Tracking
                  </div>
                </div>
              )}
              <p className="text-xs text-slate-400 mt-2">Public tag page visits</p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Quick Actions</p>
              <div className="space-y-2">
                <Link href="/admin/qr/generate" className="flex items-center gap-2 px-3 py-2 bg-indigo-50 text-indigo-700 rounded-xl text-xs font-bold hover:bg-indigo-100 transition">
                  <QrCode size={13} /> Generate QR Batch
                </Link>
                <Link href="/admin/tags" className="flex items-center gap-2 px-3 py-2 bg-slate-50 text-slate-700 rounded-xl text-xs font-bold hover:bg-slate-100 transition">
                  <Tag size={13} /> Manage Tags
                </Link>
                <Link href="/admin/subscriptions" className="flex items-center gap-2 px-3 py-2 bg-rose-50 text-rose-700 rounded-xl text-xs font-bold hover:bg-rose-100 transition">
                  <RefreshCw size={13} /> View Renewals
                </Link>
              </div>
            </div>
          </div>

          {/* Recent Activations */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <SectionHeader
              icon={<CheckCircle size={18} className="text-emerald-600" />}
              title="Recent Activations"
              sub="Latest customers who activated their safety tag"
            />
            {consumerLoading ? (
              <div className="px-6 pb-6 space-y-3">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="h-14 bg-slate-100 rounded-xl animate-pulse" />
                ))}
              </div>
            ) : consumerData?.recentActivations?.length ? (
              <div className="divide-y divide-slate-50">
                {consumerData.recentActivations.map((item) => (
                  <div key={item.id} className="flex items-center justify-between px-6 py-4 hover:bg-slate-50/50 transition">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-black text-sm">
                        {item.ownerName?.charAt(0) || "?"}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">{item.ownerName}</p>
                        <p className="text-xs text-slate-400 font-mono">{item.tagCode} · {item.assetType}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        item.planType === "premium"
                          ? "bg-indigo-100 text-indigo-700"
                          : "bg-slate-100 text-slate-600"
                      }`}>
                        {item.planType?.toUpperCase()}
                      </span>
                      <p className="text-[10px] text-slate-400 mt-1">
                        {new Date(item.updatedAt).toLocaleDateString("en-IN")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="px-6 pb-10 text-center">
                <div className="text-4xl mb-2">🛡️</div>
                <p className="text-slate-400 text-sm">No recent activations yet</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════
          BUSINESS DASHBOARD
      ═══════════════════════════════════════════ */}
      {tab === "business" && (
        <div className="animate-in fade-in duration-300">

          {/* Fake Scan Alert */}
          {businessData?.fakeScanAlerts ? (
            <AlertBanner
              count={businessData.fakeScanAlerts}
              label="products flagged as counterfeit"
              color="bg-orange-50 border-orange-200 text-orange-700"
            />
          ) : null}

          {/* KPI Grid — Row 1 */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-4">
            <StatCard
              icon={<Building2 size={20} className="text-white" />}
              label="Companies" value={businessData?.companies}
              sub="B2B partner accounts"
              color="bg-gradient-to-br from-purple-500 to-purple-700"
              loading={businessLoading} href="/admin/partners"
            />
            <StatCard
              icon={<PackageSearch size={20} className="text-white" />}
              label="Products" value={businessData?.totalProducts}
              sub="Total B2B products"
              color="bg-gradient-to-br from-slate-500 to-slate-700"
              loading={businessLoading} href="/admin/products"
            />
            <StatCard
              icon={<QrCode size={20} className="text-white" />}
              label="QR Generated" value={businessData?.qrGenerated}
              sub="Total QR codes created"
              color="bg-gradient-to-br from-blue-500 to-indigo-600"
              loading={businessLoading} href="/admin/qr/generate"
            />
            <StatCard
              icon={<Activity size={20} className="text-white" />}
              label="QR Live" value={businessData?.qrLive}
              sub="Currently active QRs"
              color="bg-gradient-to-br from-emerald-500 to-teal-600"
              loading={businessLoading} href="/admin/inventory"
            />
            <StatCard
              icon={<AlertTriangle size={20} className="text-white" />}
              label="Fake Scan Alerts" value={businessData?.fakeScanAlerts}
              sub="Counterfeit flagged"
              color="bg-gradient-to-br from-orange-500 to-red-500"
              loading={businessLoading} href="/admin/scans"
            />
          </div>

          {/* KPI Grid — Row 2 */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
            <StatCard
              icon={<ScanLine size={20} className="text-white" />}
              label="Total Scans" value={businessData?.totalScans}
              sub="All product page visits"
              color="bg-gradient-to-br from-cyan-500 to-blue-500"
              loading={businessLoading} href="/admin/scans"
            />
            <StatCard
              icon={<Eye size={20} className="text-white" />}
              label="Unique Scans" value={businessData?.uniqueScans}
              sub="Distinct IPs / devices"
              color="bg-gradient-to-br from-teal-500 to-cyan-600"
              loading={businessLoading}
            />
            <StatCard
              icon={<Layers size={20} className="text-white" />}
              label="Batch Analytics" value={businessData?.batchAnalytics?.length}
              sub="Active batches tracked"
              color="bg-gradient-to-br from-violet-500 to-purple-600"
              loading={businessLoading}
            />
            <StatCard
              icon={<LayoutTemplate size={20} className="text-white" />}
              label="Landing Pages" value={businessData?.landingPages}
              sub="Live category pages"
              color="bg-gradient-to-br from-pink-500 to-rose-500"
              loading={businessLoading} href="/admin/categories"
            />
            <StatCard
              icon={<RefreshCw size={20} className="text-white" />}
              label="Subscription Renewals" value={businessData?.renewalsDue}
              sub="Due in 30 days"
              color="bg-gradient-to-br from-amber-500 to-orange-600"
              loading={businessLoading} href="/admin/subscriptions"
            />
          </div>

          {/* Batch-wise Analytics + Recent Scans */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

            {/* Batch Analytics Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="px-6 pt-6 pb-4">
                <SectionHeader
                  icon={<Layers size={18} className="text-purple-600" />}
                  title="Batch-wise Analytics"
                  sub="Products and scan volume per batch"
                />
              </div>
              {businessLoading ? (
                <div className="px-6 pb-6 space-y-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="h-10 bg-slate-100 rounded-xl animate-pulse" />
                  ))}
                </div>
              ) : businessData?.batchAnalytics?.length ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-50 border-y border-slate-100">
                        <th className="text-left px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Batch</th>
                        <th className="text-right px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Products</th>
                        <th className="text-right px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Scans</th>
                        <th className="text-right px-6 py-3 text-xs font-bold text-slate-500 uppercase tracking-wider">Avg</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {businessData.batchAnalytics.map((row) => (
                        <tr key={row.batchNumber} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-6 py-3">
                            <span className="font-mono font-bold text-purple-700 text-xs bg-purple-50 px-2 py-1 rounded-lg">
                              {row.batchNumber}
                            </span>
                          </td>
                          <td className="px-6 py-3 text-right font-semibold text-slate-700">{row.products}</td>
                          <td className="px-6 py-3 text-right">
                            <span className="font-bold text-slate-800">{row.scans}</span>
                          </td>
                          <td className="px-6 py-3 text-right text-slate-400 text-xs">
                            {row.products > 0 ? (row.scans / row.products).toFixed(1) : "0"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="px-6 pb-10 text-center">
                  <div className="text-4xl mb-2">📦</div>
                  <p className="text-slate-400 text-sm">No batch data yet</p>
                </div>
              )}
            </div>

            {/* Recent Product Scans */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="px-6 pt-6 pb-4">
                <SectionHeader
                  icon={<ScanLine size={18} className="text-cyan-600" />}
                  title="Recent Product Scans"
                  sub="Latest B2B QR code scan events"
                />
              </div>
              {businessLoading ? (
                <div className="px-6 pb-6 space-y-3">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="h-14 bg-slate-100 rounded-xl animate-pulse" />
                  ))}
                </div>
              ) : businessData?.recentScans?.length ? (
                <div className="divide-y divide-slate-50">
                  {businessData.recentScans.map((scan) => (
                    <div key={scan.id} className="flex items-center justify-between px-6 py-4 hover:bg-slate-50/50 transition">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600">
                          <ScanLine size={16} />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800 text-sm">{scan.product?.name || "—"}</p>
                          <p className="text-xs text-slate-400 font-mono">{scan.product?.productCode} · {scan.product?.batchNumber || "–"}</p>
                        </div>
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        <p className="text-xs font-semibold text-slate-600">{scan.scannerCity || "Unknown"}</p>
                        <p className="text-[10px] text-slate-400">
                          {new Date(scan.createdAt).toLocaleDateString("en-IN")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="px-6 pb-10 text-center">
                  <div className="text-4xl mb-2">📡</div>
                  <p className="text-slate-400 text-sm">No scans recorded yet</p>
                  <p className="text-xs text-slate-300 mt-1">Scans will appear here as customers scan B2B QR codes</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
