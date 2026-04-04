export default function Page() {
  return (
    <>
      <div className="p-8 max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl font-black tracking-tight">Call Logs</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              Detailed overview of all communication activities.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 gap-2 shadow-sm">
              <span className="material-symbols-outlined text-slate-400 text-lg">
                calendar_today
              </span>
              <span className="text-sm font-medium">
                Oct 1, 2023 - Oct 31, 2023
              </span>
              <span className="material-symbols-outlined text-slate-400 text-lg cursor-pointer">
                expand_more
              </span>
            </div>
            <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">
                download
              </span>
              Export
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Total Calls
            </p>
            <div className="flex items-end justify-between mt-2">
              <h3 className="text-2xl font-bold">1,284</h3>
              <span className="text-emerald-500 text-sm font-bold flex items-center">
                +12%
              </span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Connected
            </p>
            <div className="flex items-end justify-between mt-2">
              <h3 className="text-2xl font-bold">942</h3>
              <span className="text-rose-500 text-sm font-bold flex items-center">
                -5%
              </span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Failed
            </p>
            <div className="flex items-end justify-between mt-2">
              <h3 className="text-2xl font-bold">156</h3>
              <span className="text-rose-500 text-sm font-bold flex items-center">
                -2%
              </span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Missed
            </p>
            <div className="flex items-end justify-between mt-2">
              <h3 className="text-2xl font-bold">120</h3>
              <span className="text-emerald-500 text-sm font-bold flex items-center">
                +8%
              </span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Busy
            </p>
            <div className="flex items-end justify-between mt-2">
              <h3 className="text-2xl font-bold">66</h3>
              <span className="text-emerald-500 text-sm font-bold flex items-center">
                +1%
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex flex-wrap gap-3 items-center justify-between">
            <div className="flex flex-1 min-w-[200px] max-w-md items-center bg-slate-100 dark:bg-slate-900 px-3 py-2 rounded-lg gap-2">
              <span className="material-symbols-outlined text-slate-400">
                search
              </span>
              <input
                className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-400"
                placeholder="Search by Call ID or Tag ID..."
                type="text"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900">
                <span className="material-symbols-outlined text-lg">
                  filter_list
                </span>
                Filter
              </button>
              <button className="flex items-center gap-2 px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900">
                <span className="material-symbols-outlined text-lg">
                  view_column
                </span>
                Columns
              </button>
            </div>
          </div>

          <div className="overflow-x-auto @container">
            <table className="w-full text-left">
              <thead className="bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Call ID
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Tag ID
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Plan
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Duration
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center">
                    Status
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Timestamp
                  </th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-primary">
                    #88291
                  </td>
                  <td className="px-6 py-4 text-sm">T-902</td>
                  <td className="px-6 py-4">
                    <span className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-full text-xs font-semibold">
                      Enterprise
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">04:12</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                      Connected
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                    Oct 24, 10:20 AM
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="material-symbols-outlined text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                      more_vert
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-primary">
                    #88290
                  </td>
                  <td className="px-6 py-4 text-sm">T-115</td>
                  <td className="px-6 py-4">
                    <span className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-full text-xs font-semibold">
                      Starter
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">00:00</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400">
                      Failed
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                    Oct 24, 10:15 AM
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="material-symbols-outlined text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                      more_vert
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-primary">
                    #88289
                  </td>
                  <td className="px-6 py-4 text-sm">T-442</td>
                  <td className="px-6 py-4">
                    <span className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-full text-xs font-semibold">
                      Professional
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">12:45</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                      Connected
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                    Oct 24, 09:50 AM
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="material-symbols-outlined text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                      more_vert
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-primary">
                    #88288
                  </td>
                  <td className="px-6 py-4 text-sm">T-902</td>
                  <td className="px-6 py-4">
                    <span className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-full text-xs font-semibold">
                      Enterprise
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">00:00</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                      Missed
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                    Oct 24, 09:42 AM
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="material-symbols-outlined text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                      more_vert
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/20 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-primary">
                    #88287
                  </td>
                  <td className="px-6 py-4 text-sm">T-221</td>
                  <td className="px-6 py-4">
                    <span className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2.5 py-1 rounded-full text-xs font-semibold">
                      Starter
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">02:30</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                      Connected
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 dark:text-slate-400">
                    Oct 24, 09:30 AM
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="material-symbols-outlined text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                      more_vert
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Showing 1 to 5 of 1,284 entries
            </p>
            <div className="flex items-center gap-1">
              <button
                className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 disabled:opacity-50"
                disabled={true}
              >
                <span className="material-symbols-outlined text-lg leading-none">
                  chevron_left
                </span>
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold">
                1
              </button>
              <button className="px-4 py-2 border border-transparent rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900">
                2
              </button>
              <button className="px-4 py-2 border border-transparent rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900">
                3
              </button>
              <span className="px-2">...</span>
              <button className="px-4 py-2 border border-transparent rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-900">
                257
              </button>
              <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900">
                <span className="material-symbols-outlined text-lg leading-none">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
