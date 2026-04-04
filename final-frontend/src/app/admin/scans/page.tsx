export default function Page() {
  return (
    <>
      <div className="p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                  Total Scans
                </p>
                <h3 className="text-3xl font-bold mt-1">12,842</h3>
              </div>
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <span className="material-symbols-outlined">analytics</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-emerald-500 text-xs font-bold flex items-center">
                <span className="material-symbols-outlined text-xs">
                  trending_up
                </span>{" "}
                +12.5%
              </span>
              <span className="text-slate-400 text-xs">from last month</span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                  Active Devices
                </p>
                <h3 className="text-3xl font-bold mt-1">156</h3>
              </div>
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <span className="material-symbols-outlined">smartphone</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-emerald-500 text-xs font-bold flex items-center">
                <span className="material-symbols-outlined text-xs">
                  trending_up
                </span>{" "}
                +5.2%
              </span>
              <span className="text-slate-400 text-xs">from last month</span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                  Unique IPs
                </p>
                <h3 className="text-3xl font-bold mt-1">892</h3>
              </div>
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <span className="material-symbols-outlined">public</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-rose-500 text-xs font-bold flex items-center">
                <span className="material-symbols-outlined text-xs">
                  trending_down
                </span>{" "}
                -2.1%
              </span>
              <span className="text-slate-400 text-xs">from last month</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h4 className="font-bold text-lg">Scan Activity</h4>
              <p className="text-slate-500 text-sm">
                Traffic over the last 7 days
              </p>
            </div>
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
              <button className="px-3 py-1 text-xs font-semibold bg-white dark:bg-slate-700 rounded-md shadow-sm">
                Last 7 Days
              </button>
              <button className="px-3 py-1 text-xs font-semibold text-slate-500">
                Last 30 Days
              </button>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-4 px-2">
            <div className="flex-1 flex flex-col items-center gap-3">
              <div
                className="w-full bg-primary/20 rounded-t-lg relative group transition-all"
                style={{ height: "45%" }}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  1,240 scans
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-lg h-2 transition-all"></div>
              </div>
              <span className="text-xs font-bold text-slate-400">MON</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-3">
              <div
                className="w-full bg-primary/20 rounded-t-lg relative group transition-all"
                style={{ height: "65%" }}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  1,820 scans
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-lg h-2 transition-all"></div>
              </div>
              <span className="text-xs font-bold text-slate-400">TUE</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-3">
              <div
                className="w-full bg-primary/20 rounded-t-lg relative group transition-all"
                style={{ height: "35%" }}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  980 scans
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-lg h-2 transition-all"></div>
              </div>
              <span className="text-xs font-bold text-slate-400">WED</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-3">
              <div
                className="w-full bg-primary/20 rounded-t-lg relative group transition-all"
                style={{ height: "85%" }}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  2,450 scans
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-lg h-2 transition-all"></div>
              </div>
              <span className="text-xs font-bold text-slate-400">THU</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-3">
              <div
                className="w-full bg-primary/20 rounded-t-lg relative group transition-all"
                style={{ height: "100%" }}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  3,120 scans
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-lg h-2 transition-all"></div>
              </div>
              <span className="text-xs font-bold text-primary">FRI</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-3">
              <div
                className="w-full bg-primary/20 rounded-t-lg relative group transition-all"
                style={{ height: "40%" }}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  1,150 scans
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-lg h-2 transition-all"></div>
              </div>
              <span className="text-xs font-bold text-slate-400">SAT</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-3">
              <div
                className="w-full bg-primary/20 rounded-t-lg relative group transition-all"
                style={{ height: "55%" }}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-2 py-1 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  1,640 scans
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-primary rounded-t-lg h-2 transition-all"></div>
              </div>
              <span className="text-xs font-bold text-slate-400">SUN</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <h4 className="font-bold text-lg">Detailed Scan Logs</h4>
            <div className="flex gap-2">
              <button className="p-2 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined text-sm">
                  filter_list
                </span>
              </button>
              <button className="p-2 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined text-sm">
                  refresh
                </span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                  <th className="px-6 py-4">Tag ID</th>
                  <th className="px-6 py-4">Owner</th>
                  <th className="px-6 py-4">Language</th>
                  <th className="px-6 py-4">Action Taken</th>
                  <th className="px-6 py-4">Device</th>
                  <th className="px-6 py-4">IP Address</th>
                  <th className="px-6 py-4 text-right">Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-sm">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-mono font-medium text-primary">
                    #TK-8921-A
                  </td>
                  <td className="px-6 py-4">Global Logistics Inc.</td>
                  <td className="px-6 py-4">English</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-bold uppercase">
                      Authorized
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">iPhone 14 Pro</td>
                  <td className="px-6 py-4 text-slate-500">192.168.1.45</td>
                  <td className="px-6 py-4 text-right text-slate-400">
                    2 mins ago
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-mono font-medium text-primary">
                    #TK-4432-B
                  </td>
                  <td className="px-6 py-4">Summit Tech Corp</td>
                  <td className="px-6 py-4">Spanish</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 rounded-full text-[10px] font-bold uppercase">
                      Redirected
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">Samsung S23</td>
                  <td className="px-6 py-4 text-slate-500">14.192.88.21</td>
                  <td className="px-6 py-4 text-right text-slate-400">
                    14 mins ago
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-mono font-medium text-primary">
                    #TK-1029-X
                  </td>
                  <td className="px-6 py-4">Vortex Solutions</td>
                  <td className="px-6 py-4">French</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 rounded-full text-[10px] font-bold uppercase">
                      Blocked
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">Pixel 7a</td>
                  <td className="px-6 py-4 text-slate-500">103.44.12.9</td>
                  <td className="px-6 py-4 text-right text-slate-400">
                    45 mins ago
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-mono font-medium text-primary">
                    #TK-7721-C
                  </td>
                  <td className="px-6 py-4">Prime Retailers</td>
                  <td className="px-6 py-4">German</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-bold uppercase">
                      Authorized
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">iPad Air 5</td>
                  <td className="px-6 py-4 text-slate-500">172.16.254.1</td>
                  <td className="px-6 py-4 text-right text-slate-400">
                    1 hour ago
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4 font-mono font-medium text-primary">
                    #TK-8921-A
                  </td>
                  <td className="px-6 py-4">Global Logistics Inc.</td>
                  <td className="px-6 py-4">English</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-bold uppercase">
                      Authorized
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">Chrome / Windows</td>
                  <td className="px-6 py-4 text-slate-500">192.168.1.45</td>
                  <td className="px-6 py-4 text-right text-slate-400">
                    2 hours ago
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <p className="text-xs text-slate-500 font-medium">
              Showing 1-5 of 12,842 results
            </p>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs border border-slate-200 dark:border-slate-800 rounded hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50">
                Previous
              </button>
              <button className="px-3 py-1 text-xs bg-primary text-white rounded transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
