'use client';
import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import api from '@/lib/api';

// ─── Types ────────────────────────────────────────────────────────
type SafetyTag = {
  id: string;
  tagCode: string;
  ownerName: string | null;
  ownerPhone: string | null;
  assetType: string;
  planType: string;
  isActive: boolean;
  isDummy: boolean;
  partnerId: string | null;
  partnerName: string | null;
  userId: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
};

type B2BProduct = {
  id: string;
  productCode: string;
  name: string;
  brand: string | null;
  batchNumber: string | null;
  type: string;
  categoryName: string | null;
  isActive: boolean;
  isCounterfeit: boolean;
  qrImagePath: string | null;
  totalScans: number;
  status: string;
  mfgDate: string | null;
  expDate: string | null;
  mrp: number | null;
  createdAt: string;
  updatedAt: string;
};

type Stats = {
  safetyTags: { total: number; active: number; unassigned: number; partnerStock: number };
  b2bQr: { total: number; live: number; inactive: number };
};

// ─── Status Badge ─────────────────────────────────────────────────
function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Active: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    Live: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    Inactive: 'bg-slate-100 text-slate-500 border-slate-200',
    Unassigned: 'bg-amber-100 text-amber-700 border-amber-200',
    'Partner Stock': 'bg-blue-100 text-blue-700 border-blue-200',
    Counterfeit: 'bg-red-100 text-red-700 border-red-200',
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${map[status] || 'bg-gray-100 text-gray-500 border-gray-200'}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${status === 'Active' || status === 'Live' ? 'bg-emerald-500' : status === 'Unassigned' ? 'bg-amber-500' : status === 'Partner Stock' ? 'bg-blue-500' : 'bg-slate-400'}`} />
      {status}
    </span>
  );
}

// ─── Go Live Modal ────────────────────────────────────────────────
function GoLiveModal({
  product,
  onClose,
  onSuccess,
}: {
  product: B2BProduct | null;
  onClose: () => void;
  onSuccess: () => void;
}) {
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);

  if (!product) return null;

  const handleGoLive = async () => {
    setLoading(true);
    try {
      await api.post(`/inventory/go-live/${product.id}`, { notes });
      onSuccess();
      onClose();
    } catch (err: any) {
      alert(err.response?.data?.error || 'Failed to go live');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-white">
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-xl">🚀</div>
            <h2 className="text-xl font-bold">Go Live Confirmation</h2>
          </div>
          <p className="text-emerald-100 text-sm mt-1">This will immediately make the QR product publicly accessible.</p>
        </div>
        <div className="p-6 space-y-4">
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
            <p className="text-xs text-slate-500 mb-1">Product</p>
            <p className="font-bold text-slate-800">{product.name}</p>
            <p className="text-xs text-slate-400 font-mono mt-0.5">{product.productCode}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Notes (Optional)</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Launched for Batch B-2024..."
              className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none h-24"
            />
          </div>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleGoLive}
              disabled={loading}
              className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold hover:from-emerald-600 hover:to-teal-600 transition disabled:opacity-60"
            >
              {loading ? 'Going Live...' : '🚀 Go Live'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

type CategoryItem = {
  id: string;
  name: string;
  description: string | null;
  icon: string | null;
  color: string | null;
};

// ─── Main Page ────────────────────────────────────────────────────
export default function InventoryPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>(() => searchParams.get('tab') || 'safety-tags');
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [statsLoading, setStatsLoading] = useState(true);

  // Notifications state
  const [notifications, setNotifications] = useState<any[]>([]);
  const [notifTotal, setNotifTotal] = useState(0);
  const [notifUnread, setNotifUnread] = useState(0);
  const [notifLoading, setNotifLoading] = useState(false);

  // Safety Tags state
  const [safetyTags, setSafetyTags] = useState<SafetyTag[]>([]);
  const [safetyTotal, setSafetyTotal] = useState(0);
  const [safetyPage, setSafetyPage] = useState(1);
  const [safetySearch, setSafetySearch] = useState('');
  const [safetyStatus, setSafetyStatus] = useState('');
  const [safetyLoading, setSafetyLoading] = useState(false);

  // B2B QR state
  const [products, setProducts] = useState<B2BProduct[]>([]);
  const [b2bTotal, setB2bTotal] = useState(0);
  const [b2bPage, setB2bPage] = useState(1);
  const [b2bSearch, setB2bSearch] = useState('');
  const [b2bStatus, setB2bStatus] = useState('');
  const [b2bLoading, setB2bLoading] = useState(false);
  const [goLiveProduct, setGoLiveProduct] = useState<B2BProduct | null>(null);

  // Load stats and dynamic categories
  const loadStats = useCallback(async () => {
    try {
      setStatsLoading(true);
      const [statsRes, catRes] = await Promise.all([
        api.get('/inventory/stats'),
        api.get('/inventory/categories').catch(() => ({ data: { categories: [] } })),
      ]);
      setStats(statsRes.data);
      setCategories(catRes.data.categories || []);
    } catch (err) {
      console.error('Failed to load stats/categories', err);
    } finally {
      setStatsLoading(false);
    }
  }, []);

  // Load Notifications
  const loadNotifications = useCallback(async () => {
    setNotifLoading(true);
    try {
      const res = await api.get('/notifications', { params: { page: 1, limit: 50 } });
      setNotifications(res.data.notifications || []);
      setNotifTotal(res.data.total || 0);
      setNotifUnread(res.data.unreadCount || 0);
    } catch (err) {
      console.error('Failed to load notifications', err);
    } finally {
      setNotifLoading(false);
    }
  }, []);

  const markNotifRead = async (id: string) => {
    try {
      await api.patch(`/notifications/${id}/read`);
      setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
      setNotifUnread(c => Math.max(0, c - 1));
    } catch (err) {
      console.error('Failed to mark as read', err);
    }
  };

  const markAllNotifRead = async () => {
    try {
      await api.patch('/notifications/mark-all-read');
      setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
      setNotifUnread(0);
    } catch (err) {
      alert('Failed to mark all as read');
    }
  };

  // Load Safety Tags
  const loadSafetyTags = useCallback(async () => {
    setSafetyLoading(true);
    try {
      const res = await api.get('/inventory/safety-tags', {
        params: { page: safetyPage, limit: 20, search: safetySearch || undefined, status: safetyStatus || undefined },
      });
      setSafetyTags(res.data.tags);
      setSafetyTotal(res.data.total);
    } catch (err) {
      console.error('Failed to load safety tags', err);
    } finally {
      setSafetyLoading(false);
    }
  }, [safetyPage, safetySearch, safetyStatus]);

  // Load B2B Products (or category-filtered products)
  const loadB2bProducts = useCallback(async (catId?: string) => {
    setB2bLoading(true);
    try {
      const res = await api.get('/inventory/b2b-qr', {
        params: { page: b2bPage, limit: 20, search: b2bSearch || undefined, status: b2bStatus || undefined, categoryId: catId },
      });
      setProducts(res.data.products);
      setB2bTotal(res.data.total);
    } catch (err) {
      console.error('Failed to load B2B products', err);
    } finally {
      setB2bLoading(false);
    }
  }, [b2bPage, b2bSearch, b2bStatus]);

  useEffect(() => { loadStats(); }, [loadStats]);
  useEffect(() => {
    if (activeTab === 'safety-tags') loadSafetyTags();
    else if (activeTab === 'notifications') loadNotifications();
    else loadB2bProducts(activeTab !== 'b2b-qr' ? activeTab : undefined);
  }, [activeTab, loadSafetyTags, loadB2bProducts, loadNotifications]);

  // Sync tab to URL
  const handleTabChange = (key: string) => {
    setActiveTab(key);
    router.replace(`/admin/inventory?tab=${key}`, { scroll: false });
  };

  const handleGoLiveSuccess = () => {
    loadStats();
    loadB2bProducts(activeTab !== 'b2b-qr' && activeTab !== 'safety-tags' ? activeTab : undefined);
  };

  const handleDeactivate = async (productId: string) => {
    if (!confirm('Deactivate this product?')) return;
    try {
      await api.post(`/inventory/set-inactive/${productId}`);
      loadStats();
      loadB2bProducts(activeTab !== 'b2b-qr' && activeTab !== 'safety-tags' ? activeTab : undefined);
    } catch (err: any) {
      alert(err.response?.data?.error || 'Failed');
    }
  };

  const safetyTotalPages = Math.ceil(safetyTotal / 20);
  const b2bTotalPages = Math.ceil(b2bTotal / 20);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl shadow-lg">
            📦
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-800">Inventory Module</h1>
            <p className="text-slate-500 text-sm">Universal Inventory System for Safety Tags, B2B QR &amp; Future Products</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 mb-8">
        {[
          { label: 'Total Tags', value: stats?.safetyTags.total, icon: '🏷️', color: 'from-slate-500 to-slate-700', sub: 'Safety Tags' },
          { label: 'Active', value: stats?.safetyTags.active, icon: '✅', color: 'from-emerald-500 to-teal-600', sub: 'Safety Tags' },
          { label: 'Unassigned', value: stats?.safetyTags.unassigned, icon: '📭', color: 'from-amber-400 to-orange-500', sub: 'Safety Tags' },
          { label: 'Partner Stock', value: stats?.safetyTags.partnerStock, icon: '🤝', color: 'from-blue-500 to-indigo-600', sub: 'Safety Tags' },
          { label: 'B2B Products', value: stats?.b2bQr.total, icon: '🏭', color: 'from-purple-500 to-violet-600', sub: 'B2B QR' },
          { label: 'Live QRs', value: stats?.b2bQr.live, icon: '🚀', color: 'from-emerald-500 to-green-600', sub: 'B2B QR' },
          { label: 'Inactive QRs', value: stats?.b2bQr.inactive, icon: '⏸️', color: 'from-slate-400 to-slate-500', sub: 'B2B QR' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-base mb-3 shadow-sm`}>
              {stat.icon}
            </div>
            <p className="text-2xl font-black text-slate-800">
              {statsLoading ? <span className="inline-block w-8 h-6 bg-slate-200 rounded animate-pulse" /> : stat.value ?? '–'}
            </p>
            <p className="text-xs font-semibold text-slate-600 mt-0.5">{stat.label}</p>
            <p className="text-[10px] text-slate-400">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Dynamic Tab Navigation (Universal Architecture) */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="flex flex-wrap border-b border-slate-100 bg-slate-50/50 p-2 gap-2">
          {[
            { key: 'safety-tags', label: '🏷️ Safety Tags', count: stats?.safetyTags.total },
            { key: 'b2b-qr', label: '🏭 B2B QR Solutions', count: stats?.b2bQr.total },
            ...categories.map((c) => ({
              key: c.id,
              label: `${c.icon || '📦'} ${c.name}`,
              count: undefined,
            })),
            { key: 'notifications', label: '🔔 Activation Notifications', count: notifUnread || undefined },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === tab.key
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {tab.label}
              {tab.count !== undefined && (
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                  activeTab === tab.key
                    ? (tab.key === 'notifications' ? 'bg-red-400 text-white' : 'bg-white text-indigo-600')
                    : (tab.key === 'notifications' ? 'bg-red-500 text-white' : 'bg-slate-200 text-slate-600')
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>


        {/* ── Safety Tags Tab ── */}
        {activeTab === 'safety-tags' && (
          <div className="p-6">
            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-6">
              <input
                type="text"
                placeholder="🔍 Search by tag code or owner..."
                value={safetySearch}
                onChange={(e) => { setSafetySearch(e.target.value); setSafetyPage(1); }}
                className="flex-1 min-w-60 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <select
                value={safetyStatus}
                onChange={(e) => { setSafetyStatus(e.target.value); setSafetyPage(1); }}
                className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="">All Statuses</option>
                <option value="active">Active</option>
                <option value="unassigned">Unassigned</option>
                <option value="partner_stock">Partner Stock</option>
                <option value="inactive">Inactive</option>
              </select>
              <button
                onClick={loadSafetyTags}
                className="px-4 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 transition"
              >
                Refresh
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-100">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="text-left px-4 py-3 font-semibold text-slate-600 text-xs uppercase tracking-wide">Tag Code</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-600 text-xs uppercase tracking-wide">Owner</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-600 text-xs uppercase tracking-wide">Asset Type</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-600 text-xs uppercase tracking-wide">Plan</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-600 text-xs uppercase tracking-wide">Partner</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-600 text-xs uppercase tracking-wide">Status</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-600 text-xs uppercase tracking-wide">Updated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {safetyLoading ? (
                    Array.from({ length: 8 }).map((_, i) => (
                      <tr key={i}>
                        {Array.from({ length: 7 }).map((_, j) => (
                          <td key={j} className="px-4 py-3">
                            <div className="h-4 bg-slate-100 rounded animate-pulse" />
                          </td>
                        ))}
                      </tr>
                    ))
                  ) : safetyTags.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-4 py-12 text-center text-slate-400">
                        <div className="text-4xl mb-2">📭</div>
                        <p className="font-medium">No tags found</p>
                        <p className="text-xs mt-1">Try adjusting your filters</p>
                      </td>
                    </tr>
                  ) : (
                    safetyTags.map((tag) => (
                      <tr key={tag.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-4 py-3">
                          <span className="font-mono font-bold text-indigo-600 text-xs bg-indigo-50 px-2 py-1 rounded-lg">{tag.tagCode}</span>
                        </td>
                        <td className="px-4 py-3">
                          {tag.ownerName ? (
                            <div>
                              <p className="font-semibold text-slate-700">{tag.ownerName}</p>
                              <p className="text-xs text-slate-400">{tag.ownerPhone}</p>
                            </div>
                          ) : (
                            <span className="text-slate-400 text-xs italic">—</span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-slate-600 capitalize">{tag.assetType}</td>
                        <td className="px-4 py-3">
                          <span className="text-xs bg-violet-50 text-violet-700 px-2 py-1 rounded-lg font-medium capitalize">{tag.planType}</span>
                        </td>
                        <td className="px-4 py-3 text-slate-600 text-xs">{tag.partnerName || '—'}</td>
                        <td className="px-4 py-3"><StatusBadge status={tag.status} /></td>
                        <td className="px-4 py-3 text-xs text-slate-400">
                          {new Date(tag.updatedAt).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {safetyTotalPages > 1 && (
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm text-slate-500">
                  Showing {((safetyPage - 1) * 20) + 1}–{Math.min(safetyPage * 20, safetyTotal)} of {safetyTotal}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSafetyPage(p => Math.max(1, p - 1))}
                    disabled={safetyPage === 1}
                    className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm disabled:opacity-40 hover:bg-slate-50"
                  >← Prev</button>
                  <span className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-sm font-bold">{safetyPage}</span>
                  <button
                    onClick={() => setSafetyPage(p => Math.min(safetyTotalPages, p + 1))}
                    disabled={safetyPage === safetyTotalPages}
                    className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm disabled:opacity-40 hover:bg-slate-50"
                  >Next →</button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── B2B QR Tab ── */}
        {activeTab === 'b2b-qr' && (
          <div className="p-6">
            {/* Info Banner */}
            <div className="mb-5 flex items-start gap-3 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-4">
              <span className="text-2xl">🚀</span>
              <div>
                <p className="font-semibold text-emerald-800 text-sm">Go Live Workflow</p>
                <p className="text-xs text-emerald-700 mt-0.5">
                  After generating a B2B QR code, use the <strong>Go Live</strong> button to instantly publish it.
                  This logs the event in the Audit Trail and notifies the Super Admin.
                </p>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-6">
              <input
                type="text"
                placeholder="🔍 Search by product code or name..."
                value={b2bSearch}
                onChange={(e) => { setB2bSearch(e.target.value); setB2bPage(1); }}
                className="flex-1 min-w-60 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <select
                value={b2bStatus}
                onChange={(e) => { setB2bStatus(e.target.value); setB2bPage(1); }}
                className="border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="">All Statuses</option>
                <option value="live">Live</option>
                <option value="inactive">Inactive</option>
              </select>
              <button
                onClick={() => loadB2bProducts()}
                className="px-4 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 transition"
              >
                Refresh
              </button>
            </div>

            {/* Cards Grid */}
            {b2bLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-slate-50 rounded-2xl p-5 animate-pulse h-48" />
                ))}
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-16 text-slate-400">
                <div className="text-5xl mb-3">🏭</div>
                <p className="font-semibold text-lg">No B2B QR products found</p>
                <p className="text-sm mt-1">Generate a product QR from the Products section first</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className={`bg-white rounded-2xl border transition-all hover:shadow-md ${
                      product.isActive
                        ? 'border-emerald-200 shadow-sm shadow-emerald-50'
                        : 'border-slate-200'
                    }`}
                  >
                    <div className={`rounded-t-2xl p-4 flex items-center justify-between ${product.isActive ? 'bg-gradient-to-r from-emerald-50 to-teal-50' : 'bg-slate-50'}`}>
                      <div>
                        <span className="font-mono text-xs text-slate-500">{product.productCode}</span>
                        <h3 className="font-bold text-slate-800 text-sm mt-0.5 truncate max-w-48">{product.name}</h3>
                      </div>
                      <StatusBadge status={product.isCounterfeit ? 'Counterfeit' : product.status} />
                    </div>

                    <div className="p-4 space-y-2">
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-slate-400">Brand</span>
                          <p className="font-semibold text-slate-700">{product.brand || '—'}</p>
                        </div>
                        <div>
                          <span className="text-slate-400">Category</span>
                          <p className="font-semibold text-slate-700">{product.categoryName || '—'}</p>
                        </div>
                        <div>
                          <span className="text-slate-400">Total Scans</span>
                          <p className="font-bold text-indigo-600">{product.totalScans}</p>
                        </div>
                        <div>
                          <span className="text-slate-400">MRP</span>
                          <p className="font-semibold text-slate-700">{product.mrp ? `₹${product.mrp}` : '—'}</p>
                        </div>
                      </div>

                      <div className="pt-2 flex gap-2">
                        {!product.isActive ? (
                          <button
                            onClick={() => setGoLiveProduct(product)}
                            className="flex-1 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:from-emerald-600 hover:to-teal-600 transition shadow-sm shadow-emerald-200"
                          >
                            🚀 Go Live
                          </button>
                        ) : (
                          <button
                            onClick={() => handleDeactivate(product.id)}
                            className="flex-1 py-2 rounded-xl border border-slate-200 text-slate-500 text-xs font-semibold hover:bg-slate-50 transition"
                          >
                            ⏸ Deactivate
                          </button>
                        )}
                        {product.qrImagePath && (
                          <a
                            href={product.qrImagePath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-2 rounded-xl border border-slate-200 text-slate-500 text-xs font-semibold hover:bg-slate-50 transition"
                          >
                            🔗 QR
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {b2bTotalPages > 1 && (
              <div className="flex items-center justify-between mt-6">
                <p className="text-sm text-slate-500">
                  Showing {((b2bPage - 1) * 20) + 1}–{Math.min(b2bPage * 20, b2bTotal)} of {b2bTotal}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setB2bPage(p => Math.max(1, p - 1))}
                    disabled={b2bPage === 1}
                    className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm disabled:opacity-40 hover:bg-slate-50"
                  >← Prev</button>
                  <span className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-sm font-bold">{b2bPage}</span>
                  <button
                    onClick={() => setB2bPage(p => Math.min(b2bTotalPages, p + 1))}
                    disabled={b2bPage === b2bTotalPages}
                    className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm disabled:opacity-40 hover:bg-slate-50"
                  >Next →</button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── Activation Notifications Tab ── */}
        {activeTab === 'notifications' && (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-black text-slate-800">Activation Notifications</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Real-time log of tag activations, partner assignments &amp; Go Live events
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={loadNotifications}
                  className="px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition"
                >
                  🔄 Refresh
                </button>
                {notifUnread > 0 && (
                  <button
                    onClick={markAllNotifRead}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition"
                  >
                    ✅ Mark All Read ({notifUnread})
                  </button>
                )}
              </div>
            </div>

            {notifLoading ? (
              <div className="space-y-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-16 bg-slate-100 rounded-xl animate-pulse" />
                ))}
              </div>
            ) : notifications.length === 0 ? (
              <div className="text-center py-20 text-slate-400">
                <div className="text-5xl mb-3">🔕</div>
                <p className="text-lg font-semibold text-slate-600">No notifications yet</p>
                <p className="text-sm mt-2 max-w-sm mx-auto">
                  Notifications will appear here when customers activate tags or B2B products go live.
                </p>
              </div>
            ) : (
              <div className="divide-y divide-slate-100 rounded-xl border border-slate-100 overflow-hidden bg-white">
                {notifications.map((notif) => {
                  const typeConfig: Record<string, { icon: string; color: string; bg: string }> = {
                    TAG_ACTIVATED: { icon: '🔔', color: 'text-emerald-700', bg: 'bg-emerald-50' },
                    PARTNER_ASSIGNED: { icon: '📦', color: 'text-blue-700', bg: 'bg-blue-50' },
                    GO_LIVE: { icon: '🚀', color: 'text-violet-700', bg: 'bg-violet-50' },
                    SYSTEM: { icon: '⚙️', color: 'text-slate-700', bg: 'bg-slate-50' },
                  };
                  const cfg = typeConfig[notif.type] || typeConfig.SYSTEM;
                  return (
                    <div
                      key={notif.id}
                      onClick={() => !notif.isRead && markNotifRead(notif.id)}
                      className={`flex items-start gap-4 p-4 cursor-pointer transition-colors ${
                        !notif.isRead ? 'bg-indigo-50/40 hover:bg-indigo-50/70' : 'hover:bg-slate-50/50'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl ${cfg.bg} flex items-center justify-center text-lg shrink-0 relative`}>
                        {cfg.icon}
                        {!notif.isRead && (
                          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-indigo-500 rounded-full border border-white" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <p className={`font-bold text-sm ${notif.isRead ? 'text-slate-500' : 'text-slate-800'}`}>
                            {notif.title}
                          </p>
                          <span className="text-[10px] text-slate-400 shrink-0">
                            {new Date(notif.createdAt).toLocaleDateString('en-IN', {
                              day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
                            })}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">{notif.message}</p>
                        <div className="flex gap-2 mt-1.5">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${cfg.bg} ${cfg.color}`}>
                            {notif.type.replace(/_/g, ' ')}
                          </span>
                          {!notif.isRead && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-600">
                              UNREAD
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Go Live Modal */}
      <GoLiveModal
        product={goLiveProduct}
        onClose={() => setGoLiveProduct(null)}
        onSuccess={handleGoLiveSuccess}
      />
    </div>
  );
}
