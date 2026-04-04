export default function Page() {
  return (
    <>
      <div className="px-8 pb-12 flex flex-col gap-8">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
              Total Scans
            </p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold">1,284</h3>
              <span className="text-green-600 text-sm font-bold flex items-center">
                <span className="material-symbols-outlined text-xs">
                  trending_up
                </span>
                12%
              </span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
              Scans (Last 24h)
            </p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold">42</h3>
              <span className="text-green-600 text-sm font-bold flex items-center">
                <span className="material-symbols-outlined text-xs">
                  trending_up
                </span>
                5%
              </span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
              Active Alerts
            </p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold">0</h3>
              <span className="text-slate-400 text-sm font-medium italic">
                Stable
              </span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
              Unique Devices
            </p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold">18</h3>
              <span className="text-primary text-sm font-bold flex items-center">
                <span className="material-symbols-outlined text-xs">
                  devices
                </span>
              </span>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h4 className="text-xl font-bold">Scan Volume (Last 30 Days)</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Daily interaction frequency for this tag
              </p>
            </div>
            <div className="flex items-center gap-2 bg-background-light dark:bg-background-dark p-1 rounded-lg border border-slate-200 dark:border-slate-800">
              <button className="px-3 py-1 text-xs font-bold bg-white dark:bg-slate-700 rounded shadow-sm">
                30D
              </button>
              <button className="px-3 py-1 text-xs font-bold text-slate-500">
                60D
              </button>
              <button className="px-3 py-1 text-xs font-bold text-slate-500">
                90D
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="grid grid-flow-col gap-2 items-end h-48 px-2">
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "10%" }}
                title="Day 1: 12 scans"
              ></div>
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "15%" }}
                title="Day 2: 18 scans"
              ></div>
              <div
                className="bg-primary hover:bg-primary/80 transition-colors rounded-t-sm w-full"
                style={{ height: "45%" }}
                title="Day 3: 52 scans"
              ></div>
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "30%" }}
                title="Day 4: 35 scans"
              ></div>
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "25%" }}
                title="Day 5: 28 scans"
              ></div>
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "60%" }}
                title="Day 6: 72 scans"
              ></div>
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "80%" }}
                title="Day 7: 95 scans"
              ></div>
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "35%" }}
                title="Day 8: 40 scans"
              ></div>
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "20%" }}
                title="Day 9: 22 scans"
              ></div>
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "40%" }}
                title="Day 10: 48 scans"
              ></div>
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "90%" }}
                title="Day 11: 108 scans"
              ></div>
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "55%" }}
                title="Day 12: 66 scans"
              ></div>
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "30%" }}
                title="Day 13: 35 scans"
              ></div>
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "45%" }}
                title="Day 14: 52 scans"
              ></div>
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "75%" }}
                title="Day 15: 88 scans"
              ></div>
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "60%" }}
                title="Day 16: 72 scans"
              ></div>
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "25%" }}
                title="Day 17: 28 scans"
              ></div>
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "15%" }}
                title="Day 18: 18 scans"
              ></div>
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "50%" }}
                title="Day 19: 58 scans"
              ></div>
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "85%" }}
                title="Day 20: 102 scans"
              ></div>
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "40%" }}
                title="Day 21: 48 scans"
              ></div>
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "30%" }}
                title="Day 22: 35 scans"
              ></div>
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "20%" }}
                title="Day 23: 22 scans"
              ></div>
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "45%" }}
                title="Day 24: 52 scans"
              ></div>
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "65%" }}
                title="Day 25: 78 scans"
              ></div>
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "40%" }}
                title="Day 26: 48 scans"
              ></div>
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "30%" }}
                title="Day 27: 35 scans"
              ></div>
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "50%" }}
                title="Day 28: 58 scans"
              ></div>
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "70%" }}
                title="Day 29: 82 scans"
              ></div>
              <div
                className="bg-primary/20 hover:bg-primary transition-colors rounded-t-sm w-full"
                style={{ height: "95%" }}
                title="Day 30: 112 scans"
              ></div>
            </div>
            <div className="flex justify-between text-[11px] font-bold text-slate-400 uppercase tracking-widest px-1">
              <span>30 Days Ago</span>
              <span>15 Days Ago</span>
              <span>Today</span>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
            <h4 className="text-xl font-bold">Recent Activity Logs</h4>
            <div className="flex gap-2">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
                  search
                </span>
                <input
                  className="pl-10 pr-4 py-2 bg-background-light dark:bg-background-dark border-none rounded-lg text-sm focus:ring-2 focus:ring-primary w-64"
                  placeholder="Search activity..."
                  type="text"
                />
              </div>
              <button className="flex items-center gap-1 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold">
                <span className="material-symbols-outlined text-lg">
                  filter_list
                </span>
                Filter
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider">
                  <th className="px-6 py-4">Timestamp</th>
                  <th className="px-6 py-4">Device ID</th>
                  <th className="px-6 py-4">Location</th>
                  <th className="px-6 py-4">Operator</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-sm font-semibold">Oct 24, 2023</div>
                    <div className="text-xs text-slate-500">14:32:01 PM</div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    SCAN-PRO-009
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-sm">
                      <span className="material-symbols-outlined text-primary text-base">
                        location_on
                      </span>
                      Zone B-12, Warehouse A
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold">
                        JD
                      </div>
                      <span className="text-sm">John Doe</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
                      Success
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-primary">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-sm font-semibold">Oct 24, 2023</div>
                    <div className="text-xs text-slate-500">12:15:44 PM</div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    IPHONE-14-LT
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-sm">
                      <span className="material-symbols-outlined text-primary text-base">
                        location_on
                      </span>
                      Main Entry, Dock 4
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="size-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center text-[10px] font-bold">
                        SA
                      </div>
                      <span className="text-sm">Sarah Adams</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
                      Success
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-primary">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-sm font-semibold">Oct 24, 2023</div>
                    <div className="text-xs text-slate-500">09:02:11 AM</div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    SCAN-PRO-002
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-sm">
                      <span className="material-symbols-outlined text-primary text-base">
                        location_on
                      </span>
                      Staging Area, Warehouse A
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="size-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-[10px] font-bold">
                        JD
                      </div>
                      <span className="text-sm">John Doe</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300">
                      Unauthorized
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-primary">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-sm font-semibold">Oct 23, 2023</div>
                    <div className="text-xs text-slate-500">17:45:00 PM</div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">TABLET-W-04</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-sm">
                      <span className="material-symbols-outlined text-primary text-base">
                        location_on
                      </span>
                      Packaging Unit 2
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="size-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center text-[10px] font-bold">
                        MK
                      </div>
                      <span className="text-sm">Mike K.</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
                      Success
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-primary">
                      <span className="material-symbols-outlined">
                        more_vert
                      </span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center text-sm text-slate-500">
            <p>Showing 4 of 1,284 scan events</p>
            <div className="flex gap-2">
              <button
                className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-white transition-colors disabled:opacity-50"
                disabled={true}
              >
                Previous
              </button>
              <button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-white transition-colors bg-white dark:bg-slate-800">
                1
              </button>
              <button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-white transition-colors">
                2
              </button>
              <button className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-white transition-colors">
                Next
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
