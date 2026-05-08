"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import api from "@/lib/api";
import { 
  ChevronLeft, ChevronRight, Download, Edit2, Trash2,
  Filter, MoreHorizontal, Search, Loader2,
  ShieldCheck, Plus, Info, Zap
} from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

interface Product {
  id: string;
  productCode: string;
  name: string;
  brand: string;
  batchNumber: string;
  mfgDate: string;
  expDate: string;
  mrp: number;
  isActive: boolean;
  isCounterfeit: boolean;
  _count: {
    scanLogs: number;
  };
}

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialSearch = searchParams.get("search") || "";

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    totalPages: 1,
    limit: 100
  });
  const [filters, setFilters] = useState({
    search: initialSearch,
    status: "all"
  });

  const fetchProducts = async (page = 1, currentLimit = pagination.limit, currentSearch = filters.search) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: currentLimit.toString(),
        type: 'FMCG',
        ...(currentSearch && { search: currentSearch }),
      });
      
      const response = await api.get(`/products?${params.toString()}`);
      setProducts(response.data.products);
      setPagination({
        ...pagination,
        total: response.data.total,
        page: response.data.page,
        totalPages: Math.ceil(response.data.total / currentLimit),
        limit: currentLimit
      });
    } catch (error) {
      toast.error("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(1);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchProducts(1);
  };

  const handleDelete = async (id: string, name: string) => {
    if (!window.confirm(`Are you sure you want to delete "${name}"?`)) return;
    
    try {
      await api.delete(`/products/${id}`);
      toast.success("Product deleted successfully");
      fetchProducts(pagination.page);
    } catch (error) {
      toast.error("Failed to delete product");
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50/50 dark:bg-slate-950">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-[0_1px_10px_rgba(0,0,0,0.02)]">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-800 dark:text-white flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-600">
               <ShieldCheck className="w-6 h-6" />
            </div>
            FMCG Product Validation
          </h1>
          <p className="text-sm font-medium text-slate-400 mt-1">Manage and track original product verification codes.</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          <form onSubmit={handleSearch} className="relative min-w-[320px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text"
              placeholder="Search Product Code, Name, Brand..."
              className="w-full pl-12 pr-4 py-3 bg-slate-50/50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700/50 rounded-2xl text-sm font-bold outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all shadow-sm"
              value={filters.search}
              onChange={(e) => setFilters({...filters, search: e.target.value})}
            />
          </form>

          <Link 
            href="/admin/products/generate"
            className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-sm font-black transition-all shadow-xl shadow-emerald-600/20 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Zap className="w-5 h-5 fill-current" />
            Generate Product QRs
          </Link>
        </div>
      </div>

      <div className="flex-1 overflow-auto px-10 py-8 no-scrollbar">
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden relative min-h-[400px]">
          {loading ? (
             <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <Loader2 className="w-10 h-10 text-emerald-600 animate-spin" />
                <p className="text-sm font-bold text-slate-400">Loading products catalog...</p>
             </div>
          ) : (
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse table-fixed">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-800">
                    <th className="w-[180px] px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Product Code</th>
                    <th className="min-w-[250px] px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Product Info</th>
                    <th className="w-[150px] px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">Scan Count</th>
                    <th className="w-[200px] px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Batch details</th>
                    <th className="w-[180px] px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Settings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-all group">
                      <td className="px-8 py-5">
                         <span className="font-mono text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-lg w-fit">
                           {product.productCode}
                         </span>
                      </td>
                      <td className="px-8 py-5">
                        <div className="flex flex-col">
                          <span className="text-sm font-black text-slate-700 dark:text-slate-200">{product.name}</span>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{product.brand || 'No Brand'}</span>
                            {(product as any).category && (
                              <span className="text-[9px] font-black px-2 py-0.5 bg-blue-50 text-blue-600 rounded-md uppercase tracking-widest border border-blue-100">
                                {(product as any).category.name}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-5 text-center">
                        <div className="flex flex-col items-center">
                           <span className="text-xs font-black text-slate-700 dark:text-slate-200">{product._count?.scanLogs || 0}</span>
                           <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Verifications</span>
                        </div>
                      </td>
                      <td className="px-8 py-5">
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-black uppercase text-slate-500">Batch: {product.batchNumber || 'N/A'}</span>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Exp: {product.expDate ? new Date(product.expDate).toLocaleDateString() : 'N/A'}</span>
                        </div>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <div className="flex items-center justify-end gap-3">
                           <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tight flex items-center gap-2 border ${
                            product.isActive ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-red-50 text-red-600 border-red-100'
                          }`}>
                            {product.isActive ? 'Genuine' : 'Deactivated'}
                          </span>
                          <Link 
                            href={`/admin/products/${product.id}`} 
                            className="size-10 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-400 hover:text-emerald-600 transition-all"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4" />
                          </Link>
                          <button 
                            onClick={() => {
                              const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
                              window.open(`${baseUrl}/products/${product.id}/qr?design=minimal&download=true`, '_blank');
                            }}
                            className="size-10 flex items-center justify-center bg-emerald-50 dark:bg-emerald-900/20 rounded-xl text-emerald-600 hover:bg-emerald-100 transition-all"
                            title="Download Minimal QR (FMCG)"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleDelete(product.id, product.name)}
                            className="size-10 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-400 hover:text-red-600 transition-all"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {products.length === 0 && !loading && (
                    <tr>
                      <td colSpan={5} className="px-8 py-32 text-center text-slate-400 font-bold">No products found. Start by generating new Product QRs.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center"><Loader2 className="w-10 h-10 text-emerald-600 animate-spin" /></div>}>
      <ProductsContent />
    </Suspense>
  );
}
