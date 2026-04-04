import Link from "next/link";
export default function Page() {
  return (
    <>
      <div className="w-full max-w-[520px] mb-6">
        <div className="flex h-11 items-center justify-center rounded-xl bg-slate-200 dark:bg-slate-800 p-1 shadow-sm">
          <label className="flex cursor-pointer h-full grow items-center justify-center rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-sm text-slate-600 dark:text-slate-400 has-[:checked]:text-primary text-xs font-bold transition-all uppercase">
            <span>HI</span>
            <input className="hidden" name="lang" type="radio" defaultValue="HI" />
          </label>
          <label className="flex cursor-pointer h-full grow items-center justify-center rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-sm text-slate-600 dark:text-slate-400 has-[:checked]:text-primary text-xs font-bold transition-all uppercase">
            <span>EN</span>
            <input
              defaultChecked={true}
              className="hidden"
              name="lang"
              type="radio"
              defaultValue="EN"
            />
          </label>
          <label className="flex cursor-pointer h-full grow items-center justify-center rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-sm text-slate-600 dark:text-slate-400 has-[:checked]:text-primary text-xs font-bold transition-all uppercase">
            <span>KN</span>
            <input className="hidden" name="lang" type="radio" defaultValue="KN" />
          </label>
          <label className="flex cursor-pointer h-full grow items-center justify-center rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-sm text-slate-600 dark:text-slate-400 has-[:checked]:text-primary text-xs font-bold transition-all uppercase">
            <span>TE</span>
            <input className="hidden" name="lang" type="radio" defaultValue="TE" />
          </label>
          <label className="flex cursor-pointer h-full grow items-center justify-center rounded-lg px-2 has-[:checked]:bg-white dark:has-[:checked]:bg-slate-700 has-[:checked]:shadow-sm text-slate-600 dark:text-slate-400 has-[:checked]:text-primary text-xs font-bold transition-all uppercase">
            <span>MR</span>
            <input className="hidden" name="lang" type="radio" defaultValue="MR" />
          </label>
        </div>
      </div>

      <main className="w-full max-w-[520px] bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-800">
        <header className="bg-gradient-to-br from-indigo-600 to-primary p-8 text-white relative">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 bg-white/20 w-fit px-3 py-1 rounded-full backdrop-blur-md">
                <span className="material-symbols-outlined text-sm">sell</span>
                <span className="text-xs font-bold tracking-wider uppercase">
                  Verified Asset
                </span>
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight mt-2">
                Tarkshya Solution
              </h1>
              <p className="text-indigo-100 text-sm font-medium opacity-90">
                Asset ID: <span className="font-mono">TS-99210</span>
              </p>
            </div>
            <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md">
              <span className="material-symbols-outlined text-4xl">
                qr_code_2
              </span>
            </div>
          </div>
        </header>

        <div className="bg-amber-accent/10 border-y border-amber-200 dark:border-amber-900/30 px-6 py-3 flex items-center gap-3">
          <span className="material-symbols-outlined text-amber-600 dark:text-amber-500 text-xl">
            verified
          </span>
          <p className="text-amber-800 dark:text-amber-400 text-xs font-semibold uppercase tracking-wide">
            Securely Managed by Tarkshya Protocol
          </p>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4 flex items-center gap-4 border border-slate-100 dark:border-slate-800">
            <div className="relative">
              <div
                className="size-16 rounded-full bg-slate-300 dark:bg-slate-700 overflow-hidden ring-4 ring-white dark:ring-slate-900 shadow-sm"
                data-alt="Professional headshot portrait of property owner"
                style={{
                  backgroundImage: "url('https",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="absolute bottom-0 right-0 size-5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></div>
            </div>
            <div className="flex-1">
              <h3 className="text-slate-900 dark:text-white font-bold text-lg">
                Rajesh Kumar
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">
                  location_on
                </span>
                Bengaluru, Karnataka
              </p>
            </div>
            <div className="bg-white dark:bg-slate-700 p-2 rounded-xl shadow-sm border border-slate-100 dark:border-slate-600">
              <span className="material-symbols-outlined text-primary">
                contact_page
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <button className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-indigo-200 dark:shadow-none">
              <span className="material-symbols-outlined">call</span>
              CALL OWNER
            </button>
            <button className="w-full flex items-center justify-center gap-3 bg-white dark:bg-slate-800 border-2 border-emergency-red text-emergency-red hover:bg-emergency-red hover:text-white font-bold py-4 rounded-2xl transition-all">
              <span className="material-symbols-outlined">emergency_share</span>
              EMERGENCY CONTACT
            </button>
          </div>
          <hr className="border-slate-100 dark:border-slate-800" />

          <div className="space-y-4">
            <h4 className="text-slate-900 dark:text-white font-bold text-sm uppercase tracking-widest flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl">
                info
              </span>
              How It Works
            </h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="size-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-primary font-bold border border-indigo-100 dark:border-indigo-800">
                  1
                </div>
                <p className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase leading-tight">
                  Scan Asset QR
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="size-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-primary font-bold border border-indigo-100 dark:border-indigo-800">
                  2
                </div>
                <p className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase leading-tight">
                  Verify Identity
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="size-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-primary font-bold border border-indigo-100 dark:border-indigo-800">
                  3
                </div>
                <p className="text-[10px] font-bold text-slate-700 dark:text-slate-300 uppercase leading-tight">
                  Instant Connect
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="bg-slate-50 dark:bg-slate-900/80 p-6 flex flex-col items-center gap-4 text-center border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 text-slate-400 dark:text-slate-600">
            <span className="material-symbols-outlined text-lg">
              shield_with_heart
            </span>
            <span className="text-xs font-medium">
              Powered by Tarkshya Security Protocol
            </span>
          </div>
          <div className="flex gap-6">
            <Link
              className="text-primary text-xs font-bold hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-primary text-xs font-bold hover:underline underline-offset-4"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-primary text-xs font-bold hover:underline underline-offset-4"
              href="#"
            >
              Support
            </Link>
          </div>
        </footer>
      </main>

      <div
        className="w-full max-w-[520px] mt-6 rounded-3xl overflow-hidden shadow-sm h-32 relative bg-slate-200 group cursor-pointer"
        data-alt="Stylized map showing Bengaluru city center"
        data-location="Bengaluru"
        style={{
          backgroundImage: "url('https",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
            <span className="material-symbols-outlined text-primary">map</span>
            <span className="text-xs font-bold text-slate-900 dark:text-white uppercase">
              View on Map
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
