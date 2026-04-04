"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import api from "@/lib/api";
import { 
  TrendingUp, TrendingDown, Tag as TagIcon, Star, 
  Timer, AlertCircle, PlusCircle, FileOutput, 
  Mail, Settings, ChevronRight, Loader2, MapPin
} from "lucide-react";

interface DashboardStats {
  totalTags: number;
  activeTags: number;
  inactiveTags: number;
  premiumTags: number;
  basicTags: number;
  standardTags: number;
  expiringTags: number;
  totalScans: number;
  totalCalls: number;
  totalSms: number;
  scansLast30Days: number;
}

interface RecentScan {
  id: string;
  tag: {
    tagCode: string;
    ownerName: string;
    assetType: string;
  };
  scannerCity: string;
  scannerIp: string;
  createdAt: string;
}

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [recentScans, setRecentScans] = useState<RecentScan[]>([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await api.get("/dashboard/stats");
        setStats(response.data.stats);
        setRecentScans(response.data.recentScans);
      } catch (error) {
        console.error("Failed to fetch dashboard stats", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
      </div>
    );
  }

  return (
    <>
      {stats && stats.expiringTags > 0 && (
        <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 rounded-xl flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3 text-red-700 dark:text-red-400">
            <AlertCircle className="text-red-600 dark:text-red-500 w-5 h-5" />
            <div>
              <p className="font-bold text-sm">Action Required: Expiring Tags</p>
              <p className="text-xs opacity-90">
                {stats.expiringTags} tags are expiring within the next 7 days. These
                accounts will lose priority support.
              </p>
            </div>
          </div>
          <Link
            href="/admin/scans"
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-semibold transition-colors"
          >
            Review Expiries
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Total Tags" 
          value={stats?.totalTags || 0} 
          icon={<TagIcon />} 
          trend="+12%" 
          trendUp={true} 
        />
        <StatCard 
          title="Premium" 
          value={stats?.premiumTags || 0} 
          icon={<Star />} 
          trend="+5%" 
          trendUp={true} 
          color="yellow"
        />
        <StatCard 
          title="Basic" 
          value={stats?.basicTags || 0} 
          icon={<TagIcon />} 
          trend="-2%" 
          trendUp={false} 
          color="blue"
        />
        <StatCard 
          title="Expiring Soon" 
          value={stats?.expiringTags || 0} 
          icon={<Timer />} 
          trend="+18%" 
          trendUp={true} 
          color="red"
        />
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Quick Actions</h2>
        </div>
        <div className="flex flex-wrap gap-4">
          <ActionButton href="/admin/tags" icon={<PlusCircle />} label="Generate QR" primary />
          <ActionButton href="/admin/tags" icon={<FileOutput />} label="Export Tags" />
          <ActionButton href="/admin/sms" icon={<Mail />} label="Bulk Notify" />
          <ActionButton href="/admin/settings" icon={<Settings />} label="Batch Update" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8">
        <div className="lg:col-span-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden">
          <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
            <h3 className="font-bold">Recent Tag Scans</h3>
            <Link className="text-blue-600 text-sm font-semibold hover:underline" href="/admin/scans">
              View All
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4 font-semibold">Tag ID</th>
                  <th className="px-6 py-4 font-semibold">Owner</th>
                  <th className="px-6 py-4 font-semibold">Location</th>
                  <th className="px-6 py-4 font-semibold">Timestamp</th>
                  <th className="px-6 py-4 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                {recentScans.map((scan) => (
                  <tr key={scan.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/40 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium">{scan.tag.tagCode}</td>
                    <td className="px-6 py-4 text-sm">{scan.tag.ownerName}</td>
                    <td className="px-6 py-4 text-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      {scan.scannerCity || "Unknown"}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {new Date(scan.createdAt).toLocaleTimeString()}
                    </td>
                    <td className="px-6 py-4 text-sm">
                       <Link href={`/admin/tags/${scan.tag.tagCode}`} className="text-blue-600 hover:text-blue-700">
                        <ChevronRight className="w-5 h-5" />
                       </Link>
                    </td>
                  </tr>
                ))}
                {recentScans.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-6 py-10 text-center text-slate-500 text-sm italic">
                      No recent scans found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="lg:col-span-4 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 p-6">
          <h3 className="font-bold mb-6">Device Activity</h3>
          <div className="space-y-4">
             <ActivityRow label="Tag Scans" count={stats?.totalScans || 0} color="bg-blue-600" />
             <ActivityRow label="Voice Calls" count={stats?.totalCalls || 0} color="bg-green-600" />
             <ActivityRow label="SMS Alerts" count={stats?.totalSms || 0} color="bg-orange-600" />
          </div>
          
          <div className="mt-10 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-900/30">
             <h4 className="text-sm font-bold text-blue-800 dark:text-blue-400 mb-1">System Health</h4>
             <p className="text-xs text-blue-600 dark:text-blue-500 mb-3">All services are operating normally.</p>
             <div className="flex gap-2">
                <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="size-2 bg-green-500 rounded-full animate-pulse delay-75"></span>
                <span className="size-2 bg-green-500 rounded-full animate-pulse delay-150"></span>
             </div>
          </div>
        </div>
      </div>
    </>
  );
}

function StatCard({ title, value, icon, trend, trendUp, color = "blue" }: any) {
  const colors: any = {
    blue: "bg-blue-600/10 text-blue-600",
    yellow: "bg-yellow-500/10 text-yellow-600",
    red: "bg-red-500/10 text-red-600",
  };
  
  return (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 rounded-lg ${colors[color] || colors.blue}`}>
          {icon}
        </div>
        <span className={`${trendUp ? 'text-green-500' : 'text-red-500'} text-xs font-bold flex items-center`}>
          {trendUp ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
          {trend}
        </span>
      </div>
      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{title}</p>
      <h3 className="text-2xl font-bold mt-1">{value.toLocaleString()}</h3>
    </div>
  );
}

function ActionButton({ href, icon, label, primary }: any) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold shadow-sm transition-all ${
        primary 
        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20" 
        : "bg-white dark:bg-slate-800 hover:bg-slate-50 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}

function ActivityRow({ label, count, color }: any) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-slate-500">{label}</span>
        <span className="font-bold">{count}</span>
      </div>
      <div className="w-full bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
        <div 
          className={`${color} h-full rounded-full transition-all duration-1000`} 
          style={{ width: `${Math.min((count / 1000) * 100, 100)}%` }}
        />
      </div>
    </div>
  );
}
