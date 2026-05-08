"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { 
  ShieldCheck, AlertCircle, Calendar, 
  MapPin, Package, Tag as TagIcon,
  CheckCircle2, Info, ArrowLeft,
  XCircle, Scan
} from "lucide-react";
import Link from "next/link";
import api from "@/lib/api";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function ProductVerificationPage() {
  const params = useParams();
  const productCode = params.productCode as string;
  
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const verifyProduct = async () => {
      try {
        const response = await api.get(`/products/verify/${productCode}`);
        setProduct(response.data.product);
      } catch (err: any) {
        setError(err.response?.data?.error || "Invalid Product Code");
      } finally {
        setLoading(false);
      }
    };
    verifyProduct();
  }, [productCode]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="size-20 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mb-6" />
        <h2 className="text-xl font-black text-slate-800 uppercase tracking-widest">Verifying Authenticity...</h2>
        <p className="text-slate-500 font-bold mt-2">Checking secure blockchain identity</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 text-center">
        <div className="size-24 bg-red-50 rounded-full flex items-center justify-center mb-6 text-red-500">
          <XCircle size={64} />
        </div>
        <h1 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Validation Failed!</h1>
        <div className="max-w-md bg-red-50 border-2 border-red-100 p-6 rounded-3xl mb-8">
           <p className="text-red-700 font-bold text-sm leading-relaxed">
             The product code <strong>{productCode}</strong> is not recognized by Tarkshya Validation Systems. This could indicate a counterfeit product.
           </p>
        </div>
        <Link href="/" className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest">Report Counterfeit</Link>
      </div>
    );
  }

  const dynamicData = JSON.parse(product.dynamicData || "[]");
  const photos = JSON.parse(product.photos || "[]");

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      {/* Brand Header */}
      <div className="bg-emerald-600 p-6 pt-10 text-white text-center rounded-b-[3rem] shadow-xl relative overflow-hidden">
         <div className="absolute top-0 right-0 p-10 opacity-10">
            <ShieldCheck size={200} />
         </div>
         <ShieldCheck className="mx-auto size-12 mb-4" />
         <h1 className="text-2xl font-black uppercase tracking-widest leading-none">V-KAWACH</h1>
         <p className="text-[10px] font-black tracking-[0.2em] opacity-80 mt-1 uppercase">Official Product Validation Hub</p>
      </div>

      <div className="max-w-xl mx-auto px-6 -mt-8">
         {/* Success Badge */}
         <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 border-4 border-emerald-50 relative overflow-hidden text-center mb-8">
            <div className="absolute top-4 right-4 group">
               <div className="size-10 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-600 animate-pulse">
                  <CheckCircle2 size={24} />
               </div>
            </div>
            
            <div className="size-24 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-xl shadow-emerald-600/30">
               <Package size={42} />
            </div>
            
            <h2 className="text-3xl font-black text-slate-800 tracking-tighter mb-1 uppercase">GENUINE PRODUCT</h2>
            <p className="text-emerald-600 font-black text-xs tracking-widest uppercase mb-6">Verified Authenticity</p>
            
            <div className="inline-block py-2 px-6 bg-slate-50 rounded-full border border-slate-100 mb-2">
               <span className="font-mono text-sm font-black text-slate-500">#{product.productCode}</span>
            </div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Reference Secure Key</p>
         </div>

         {/* Product Details */}
         <div className="bg-white rounded-[2rem] shadow-lg p-8 mb-6 space-y-8">
            <div className="flex items-start gap-4">
               <div className="size-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 shrink-0">
                  <Package />
               </div>
               <div>
                  <h3 className="text-xl font-black text-slate-800 leading-tight">{product.name}</h3>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-tight">{product.brand || "Authentic Product"}</p>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Batch ID</p>
                  <p className="text-sm font-black text-slate-800">{product.batchNumber || 'OFFICIAL-B1'}</p>
               </div>
               <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">MRP Price</p>
                  <p className="text-sm font-black text-slate-800">₹{product.mrp?.toFixed(2)}</p>
               </div>
               <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Mfg Date</p>
                  <p className="text-sm font-black text-slate-800">{product.mfgDate ? new Date(product.mfgDate).toLocaleDateString() : 'N/A'}</p>
               </div>
               <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Expiry Date</p>
                  <p className="text-sm font-black text-slate-800">{product.expDate ? new Date(product.expDate).toLocaleDateString() : 'N/A'}</p>
               </div>
            </div>
         </div>

         {/* Verification Metadata */}
         {dynamicData.length > 0 && (
            <div className="bg-slate-900 rounded-[2rem] p-8 mb-6 text-white overflow-hidden relative">
               <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-10">
                  <ShieldCheck size={160} />
               </div>
               <h4 className="text-xs font-black uppercase tracking-widest text-emerald-400 mb-6 flex items-center gap-2">
                  <Info size={14} /> Product Identity Specifications
               </h4>
               <div className="space-y-4 relative z-10">
                  {dynamicData.map((item: any, i: number) => (
                     <div key={i} className="flex justify-between items-center border-b border-white/10 pb-3 last:border-0">
                        <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">{item.label}</span>
                        <span className="text-sm font-black">{item.value}</span>
                     </div>
                  ))}
               </div>
            </div>
         )}

         {/* Product Gallery */}
         {photos.length > 0 && (
            <div className="space-y-4 mb-10">
               <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 pl-2">Product Inspection Photos</h4>
               <div className="grid grid-cols-2 gap-4">
                  {photos.map((url: string, i: number) => (
                    <div key={i} className="aspect-square rounded-[1.5rem] overflow-hidden shadow-md border-2 border-white">
                        <img 
                          src={url.startsWith('http') ? url : `${API_URL.replace(/\/api$/, '')}${url}`} 
                          className="w-full h-full object-cover" 
                          alt="Verification" 
                        />
                    </div>
                  ))}
               </div>
            </div>
         )}

         {/* Safety Footer */}
         <div className="text-center p-8 bg-emerald-50 rounded-[2rem] border-2 border-emerald-100">
            <Scan className="mx-auto text-emerald-600 size-6 mb-3" />
            <p className="text-[10px] font-black text-emerald-800 uppercase tracking-widest leading-loose">
               Secure product identity by Tarkshya Solution.<br/>Validation ID: {product.id.substring(0, 8).toUpperCase()}
            </p>
         </div>
      </div>
    </div>
  );
}
