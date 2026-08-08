'use client';
import { useState, useEffect, useCallback } from 'react';
import api from '@/lib/api';

type Notification = {
  id: string;
  type: string;
  title: string;
  message: string;
  isRead: boolean;
  targetUrl: string | null;
  entityId: string | null;
  metadata: string | null;
  createdAt: string;
};

const TYPE_CONFIG: Record<string, { icon: string; color: string; bg: string; border: string }> = {
  TAG_ACTIVATED: {
    icon: '🔔',
    color: 'text-emerald-700',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
  },
  PARTNER_ASSIGNED: {
    icon: '📦',
    color: 'text-blue-700',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
  },
  GO_LIVE: {
    icon: '🚀',
    color: 'text-violet-700',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
  },
  SYSTEM: {
    icon: '⚙️',
    color: 'text-slate-700',
    bg: 'bg-slate-50',
    border: 'border-slate-200',
  },
};

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  if (mins < 1) return 'Just now';
  if (mins < 60) return `${mins}m ago`;
  if (hours < 24) return `${hours}h ago`;
  return `${days}d ago`;
}

export default function ActivationFeedPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [total, setTotal] = useState(0);
  const [unreadCount, setUnreadCount] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'unread' | 'TAG_ACTIVATED' | 'PARTNER_ASSIGNED' | 'GO_LIVE'>('all');
  const [markingAll, setMarkingAll] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const params: Record<string, any> = { page, limit: 30 };
      if (filter === 'unread') params.unreadOnly = true;
      const res = await api.get('/notifications', { params });
      let notifs: Notification[] = res.data.notifications;
      // Client-side filter by type if needed
      if (filter !== 'all' && filter !== 'unread') {
        notifs = notifs.filter((n) => n.type === filter);
      }
      setNotifications(notifs);
      setTotal(res.data.total);
      setUnreadCount(res.data.unreadCount);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      console.error('Failed to load notifications', err);
    } finally {
      setLoading(false);
    }
  }, [page, filter]);

  useEffect(() => { load(); }, [load]);

  // Auto-refresh every 30 seconds
  useEffect(() => {
    const interval = setInterval(load, 30000);
    return () => clearInterval(interval);
  }, [load]);

  const markRead = async (id: string) => {
    try {
      await api.patch(`/notifications/${id}/read`);
      setNotifications((prev) =>
        prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
      );
      setUnreadCount((c) => Math.max(0, c - 1));
    } catch (err) {
      console.error('Failed to mark as read', err);
    }
  };

  const markAllRead = async () => {
    setMarkingAll(true);
    try {
      await api.patch('/notifications/mark-all-read');
      setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
      setUnreadCount(0);
    } catch (err) {
      alert('Failed to mark all as read');
    } finally {
      setMarkingAll(false);
    }
  };

  const deleteNotif = async (id: string) => {
    try {
      await api.delete(`/notifications/${id}`);
      setNotifications((prev) => prev.filter((n) => n.id !== id));
      setTotal((t) => t - 1);
    } catch (err) {
      console.error('Failed to delete', err);
    }
  };

  const FILTERS = [
    { key: 'all', label: 'All', icon: '📋' },
    { key: 'unread', label: 'Unread', icon: '🔴', badge: unreadCount },
    { key: 'TAG_ACTIVATED', label: 'Tag Activations', icon: '🔔' },
    { key: 'PARTNER_ASSIGNED', label: 'Partner Assignments', icon: '📦' },
    { key: 'GO_LIVE', label: 'Go Live Events', icon: '🚀' },
  ] as const;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 p-6">
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl shadow-lg">
              🔔
            </div>
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white text-xs font-black rounded-full flex items-center justify-center shadow-sm animate-pulse">
                {unreadCount > 99 ? '99+' : unreadCount}
              </span>
            )}
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-800">Activation Feed</h1>
            <p className="text-slate-500 text-sm mt-0.5">
              Real-time log of tag activations, partner assignments &amp; Go Live events
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={load}
            className="px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-semibold text-slate-600 hover:bg-slate-50 transition flex items-center gap-2"
          >
            🔄 Refresh
          </button>
          {unreadCount > 0 && (
            <button
              onClick={markAllRead}
              disabled={markingAll}
              className="px-4 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition disabled:opacity-60"
            >
              {markingAll ? 'Marking...' : '✅ Mark All Read'}
            </button>
          )}
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Total Events', value: total, icon: '📊', color: 'from-slate-500 to-slate-700' },
          { label: 'Unread', value: unreadCount, icon: '🔴', color: 'from-red-500 to-rose-600' },
          { label: 'Tag Activations', value: notifications.filter(n => n.type === 'TAG_ACTIVATED').length, icon: '🔔', color: 'from-emerald-500 to-teal-600' },
          { label: 'Go Live Events', value: notifications.filter(n => n.type === 'GO_LIVE').length, icon: '🚀', color: 'from-violet-500 to-purple-600' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
            <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-base mb-3 shadow-sm`}>
              {stat.icon}
            </div>
            <p className="text-2xl font-black text-slate-800">{stat.value}</p>
            <p className="text-xs font-semibold text-slate-500 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-1 p-4 border-b border-slate-100 bg-slate-50/50">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => { setFilter(f.key); setPage(1); }}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === f.key
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              {f.icon} {f.label}
              {'badge' in f && (f.badge as number) > 0 && (
                <span className={`ml-1 px-1.5 py-0.5 rounded-full text-[10px] font-black ${filter === f.key ? 'bg-white text-indigo-600' : 'bg-red-500 text-white'}`}>
                  {f.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Notification List */}
        <div className="divide-y divide-slate-50">
          {loading ? (
            Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex items-start gap-4 p-5 animate-pulse">
                <div className="w-11 h-11 rounded-2xl bg-slate-100 shrink-0" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-slate-100 rounded w-2/3" />
                  <div className="h-3 bg-slate-100 rounded w-full" />
                  <div className="h-3 bg-slate-100 rounded w-1/4" />
                </div>
              </div>
            ))
          ) : notifications.length === 0 ? (
            <div className="text-center py-20 text-slate-400">
              <div className="text-6xl mb-4">🔕</div>
              <p className="text-xl font-semibold text-slate-600">No notifications yet</p>
              <p className="text-sm mt-2 max-w-sm mx-auto">
                Notifications will appear here when customers activate tags, partners assign QRs, or B2B products go live.
              </p>
            </div>
          ) : (
            notifications.map((notif) => {
              const cfg = TYPE_CONFIG[notif.type] || TYPE_CONFIG.SYSTEM;
              return (
                <div
                  key={notif.id}
                  onClick={() => !notif.isRead && markRead(notif.id)}
                  className={`flex items-start gap-4 p-5 transition-all cursor-pointer group ${
                    !notif.isRead ? 'bg-indigo-50/30 hover:bg-indigo-50/60' : 'hover:bg-slate-50/50'
                  }`}
                >
                  {/* Unread dot */}
                  <div className="relative shrink-0 mt-1">
                    <div className={`w-11 h-11 rounded-2xl ${cfg.bg} border ${cfg.border} flex items-center justify-center text-xl shadow-sm`}>
                      {cfg.icon}
                    </div>
                    {!notif.isRead && (
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-500 rounded-full border-2 border-white" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <p className={`font-bold text-sm ${notif.isRead ? 'text-slate-600' : 'text-slate-800'}`}>
                          {notif.title}
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{notif.message}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs text-slate-400 whitespace-nowrap">{timeAgo(notif.createdAt)}</span>
                        <button
                          onClick={(e) => { e.stopPropagation(); deleteNotif(notif.id); }}
                          className="opacity-0 group-hover:opacity-100 transition-opacity w-6 h-6 flex items-center justify-center rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-400 text-xs"
                          title="Delete"
                        >
                          ✕
                        </button>
                      </div>
                    </div>

                    {/* Metadata pills */}
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${cfg.bg} ${cfg.color} border ${cfg.border}`}>
                        {notif.type.replace(/_/g, ' ')}
                      </span>
                      {!notif.isRead && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-600 border border-indigo-200">
                          UNREAD
                        </span>
                      )}
                      <span className="text-[10px] text-slate-400 px-2 py-0.5 rounded-full bg-slate-50 border border-slate-100">
                        {new Date(notif.createdAt).toLocaleString('en-IN', {
                          day: '2-digit', month: 'short', year: 'numeric',
                          hour: '2-digit', minute: '2-digit',
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between p-4 border-t border-slate-100 bg-slate-50/30">
            <p className="text-sm text-slate-500">Page {page} of {totalPages}</p>
            <div className="flex gap-2">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm disabled:opacity-40 hover:bg-slate-50"
              >← Prev</button>
              <span className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-sm font-bold">{page}</span>
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm disabled:opacity-40 hover:bg-slate-50"
              >Next →</button>
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { type: 'TAG_ACTIVATED', title: '🔔 Tag Activated', desc: 'Fired when a customer self-activates a Safety Tag via the public scan URL.' },
          { type: 'PARTNER_ASSIGNED', title: '📦 Partner Assigned', desc: 'Fired when an authorized dealer assigns a tag to a customer.' },
          { type: 'GO_LIVE', title: '🚀 Go Live', desc: 'Fired when an Admin publishes a B2B QR product and sets it live.' },
        ].map((item) => {
          const cfg = TYPE_CONFIG[item.type];
          return (
            <div key={item.type} className={`rounded-2xl p-4 border ${cfg.border} ${cfg.bg}`}>
              <p className={`font-bold text-sm ${cfg.color} mb-1`}>{item.title}</p>
              <p className="text-xs text-slate-600">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
