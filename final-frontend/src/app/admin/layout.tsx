import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#f8f9fc] dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 font-display">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <Header />
        {children}
      </main>
    </div>
  );
}
