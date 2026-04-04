export default function Header() {
  return (
    <header className="flex items-center justify-between mb-8">
      <div className="relative w-96">
        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          search
        </span>
        <input
          className="w-full bg-white dark:bg-slate-800 border-none rounded-xl pl-10 py-2.5 focus:ring-2 focus:ring-primary shadow-sm text-sm"
          placeholder="Search by tag ID or user..."
          type="text"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="relative p-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-slate-600 dark:text-slate-300">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-700">
          <div className="text-right">
            <p className="text-sm font-bold">Alex Rivera</p>
            <p className="text-xs text-slate-500">System Admin</p>
          </div>
          <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border-2 border-primary/20">
            <img
              className="w-full h-full object-cover"
              data-alt="User profile avatar of a professional administrator"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd5rsCT7_RxM5L7oFayhIbH_KWxefNX6clpH768rpGXIyGx6_qsJlFhgi3w46nWC7xGswFVLqVm_-R1mlScrP6fCZFSk1tZXdU5DoG0v8nus4kChwv6vHy7Aj4CDdV1riizE3BJfiwTum-CECh6lRorcNQnSlXCL0xOGoAfm_i0hJJkUVYXEBfUg-b6ei7z1jH4aAlvn93XmrIfE0_rSpLJsEg4yCGANGGH3ML6OdILRqvNTU8SswkG_KqJbVT0dQ_kMiyK_3tBTM"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
