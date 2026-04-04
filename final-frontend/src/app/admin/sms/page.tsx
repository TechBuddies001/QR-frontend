export default function Page() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">SMS Logs</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              Monitor and track all outgoing messages for your assets.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined text-lg">
                download
              </span>
              Export CSV
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl text-sm font-medium hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-lg">refresh</span>
              Refresh
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="md:col-span-2 relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              search
            </span>
            <input
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm transition-all"
              placeholder="Search by Tag ID or Recipient..."
              type="text"
            />
          </div>
          <div className="relative">
            <select className="w-full pl-3 pr-10 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl appearance-none focus:ring-2 focus:ring-primary outline-none text-sm transition-all">
              <option>All Types</option>
              <option>scan_alert</option>
              <option>sub_reminder</option>
              <option>system_auth</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
              expand_more
            </span>
          </div>
          <div className="relative">
            <select className="w-full pl-3 pr-10 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl appearance-none focus:ring-2 focus:ring-primary outline-none text-sm transition-all">
              <option>All Status</option>
              <option>Delivered</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
              expand_more
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900/50 border-bottom border-slate-200 dark:border-slate-700">
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Tag ID
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Recipient
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Message Type
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Content Preview
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Sent At
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-primary">
                    #TG-8821
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-mono">
                    +91 ******4412
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                      scan_alert
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400 max-w-xs truncate">
                    New QR scan detected in Mumbai office.
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                      <span className="material-symbols-outlined text-lg">
                        check_circle
                      </span>
                      <span className="text-sm font-medium">Delivered</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
                    Oct 27, 2:20 PM
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-primary">
                    #TG-8819
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-mono">
                    +1 ******0982
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                      sub_reminder
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400 max-w-xs truncate">
                    Your Professional plan expires in 3 days. Renew now.
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-amber-600 dark:text-amber-400">
                      <span className="material-symbols-outlined text-lg">
                        schedule
                      </span>
                      <span className="text-sm font-medium">Pending</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
                    Oct 27, 1:45 PM
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-primary">
                    #TG-8815
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-mono">
                    +44 ******2231
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                      scan_alert
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400 max-w-xs truncate">
                    Unauthorized access attempt for Asset ID 449.
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-rose-600 dark:text-rose-400">
                      <span className="material-symbols-outlined text-lg">
                        error
                      </span>
                      <span className="text-sm font-medium">Failed</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
                    Oct 27, 12:10 PM
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-primary">
                    #TG-8812
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-mono">
                    +91 ******1100
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                      system_auth
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400 max-w-xs truncate">
                    Your OTP for login is 992811. Do not share it.
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                      <span className="material-symbols-outlined text-lg">
                        check_circle
                      </span>
                      <span className="text-sm font-medium">Delivered</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
                    Oct 27, 10:30 AM
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-primary">
                    #TG-8808
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300 font-mono">
                    +61 ******5543
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                      scan_alert
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400 max-w-xs truncate">
                    Asset 'Warehouse_A' scanned at checkpoint B-4.
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                      <span className="material-symbols-outlined text-lg">
                        check_circle
                      </span>
                      <span className="text-sm font-medium">Delivered</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400 whitespace-nowrap">
                    Oct 27, 09:15 AM
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <span className="text-sm text-slate-500 dark:text-slate-400">
              Showing 1 to 5 of 248 results
            </span>
            <div className="flex items-center gap-2">
              <button
                className="p-1 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-50"
                disabled={true}
              >
                <span className="material-symbols-outlined text-xl">
                  chevron_left
                </span>
              </button>
              <button className="px-3 py-1 rounded-lg bg-primary text-white text-sm font-medium">
                1
              </button>
              <button className="px-3 py-1 rounded-lg hover:bg-white dark:hover:bg-slate-800 text-sm font-medium">
                2
              </button>
              <button className="px-3 py-1 rounded-lg hover:bg-white dark:hover:bg-slate-800 text-sm font-medium">
                3
              </button>
              <button className="p-1 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800">
                <span className="material-symbols-outlined text-xl">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-4 bg-emerald-50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-800">
            <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-1">
              Delivery Rate
            </p>
            <p className="text-2xl font-bold">98.4%</p>
          </div>
          <div className="p-4 bg-orange-50 dark:bg-orange-900/10 rounded-xl border border-orange-100 dark:border-orange-800">
            <p className="text-xs font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-1">
              Total Scan Alerts
            </p>
            <p className="text-2xl font-bold">1,240</p>
          </div>
          <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
              Messages This Month
            </p>
            <p className="text-2xl font-bold">8,432</p>
          </div>
        </div>
      </div>
    </>
  );
}
