export default function Page() {
  return (
    <>
      <div className="max-w-5xl mx-auto p-8">
        <section className="mb-8">
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50 border-bottom border-slate-200 dark:border-slate-800">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Name
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Description
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Created Date
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">
                        Primary
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                    Main category tags for core assets
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 italic">
                    Oct 01, 2023
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary hover:text-primary/80 font-bold text-sm">
                      Edit
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-slate-400"></div>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">
                        Secondary
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                    Support category tags for auxiliary data
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 italic">
                    Oct 05, 2023
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary hover:text-primary/80 font-bold text-sm">
                      Edit
                    </button>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">
                        System
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                    Internal process tags for automation
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400 italic">
                    Oct 10, 2023
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary hover:text-primary/80 font-bold text-sm">
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-stretch overflow-hidden rounded-xl border border-primary/20 bg-primary/5 dark:bg-primary/10 shadow-sm">
            <div
              className="w-full md:w-48 bg-cover bg-center min-h-[120px]"
              data-alt="Vibrant orange abstract geometric pattern"
              style={{ backgroundImage: "url('https" }}
            ></div>
            <div className="flex-1 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Add New Tag Type
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Create a new category to organize your workspace assets
                  effectively.
                </p>
              </div>
              <button className="bg-primary text-white hover:bg-primary/90 transition-all px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 whitespace-nowrap">
                <span className="material-symbols-outlined text-lg">
                  add_circle
                </span>{" "}
                Create Tag Type
              </button>
            </div>
          </div>
        </section>
        <hr className="border-slate-200 dark:border-slate-800 mb-12" />

        <section className="mb-8">
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Status Label
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Key
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Order
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                <tr>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      Draft
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-mono text-slate-500">
                    status_draft
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">1</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary hover:text-primary/80 font-bold text-sm">
                      Edit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-mono text-slate-500">
                    status_active
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">2</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary hover:text-primary/80 font-bold text-sm">
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-stretch overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <div className="w-full md:w-48 bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <span className="material-symbols-outlined text-slate-400 text-4xl">
                reorder
              </span>
            </div>
            <div className="flex-1 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                  Define New Status
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Set up custom workflow stages for your operational pipelines.
                </p>
              </div>
              <button className="bg-primary/20 text-primary hover:bg-primary/30 transition-all px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 whitespace-nowrap">
                <span className="material-symbols-outlined text-lg">add</span>{" "}
                Add Status Stage
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
