
"use client";

import { useEffect, useState, Suspense } from "react";
import api from "@/lib/api";
import { 
  CreditCard, Search, DollarSign, 
  ArrowUpRight, ArrowDownLeft, 
  TrendingUp, ShoppingBag, 
  CheckCircle2, Clock, XCircle,
  Loader2, Filter, Calendar, 
  ChevronRight, ArrowRight
} from "lucide-react";
import toast from "react-hot-toast";

interface Transaction {
  id: string;
  userId: string;
  user: {
    name: string;
    email: string;
  };
  amount: number;
  status: string;
  type: string;
  planName?: string;
  createdAt: string;
  paymentMethod: string;
}

function SalesContent() {
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [activeView, setActiveView] = useState<'orders' | 'transactions'>('orders');
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [stats, setStats] = useState({
    totalRevenue: 0,
    activeSubscriptions: 0,
    totalOrders: 0,
    growthRate: 15
  });

  const fetchSalesData = async () => {
    setLoading(true);
    try {
      const response = await api.get("/admin/sales");
      setTransactions(response.data.transactions || []);
      setOrders(response.data.orders || []);
      setStats({
        totalRevenue: response.data.totalRevenue || 0,
        activeSubscriptions: response.data.activeSubscriptions || 0,
        totalOrders: response.data.totalOrders || 0,
        growthRate: response.data.growthRate || 12
      });
    } catch (error) {
      toast.error("Failed to load financial records");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSalesData();
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-slate-50/50 dark:bg-slate-950">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div>
          <h1 className="text-2xl font-black tracking-tight text-slate-800 dark:text-white flex items-center gap-3">
            <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-600">
               <CreditCard className="w-6 h-6" />
            </div>
            Financial Ledger
          </h1>
          <p className="text-sm font-medium text-slate-400 mt-1">Track platform revenue, active subscriptions and product sales.</p>
        </div>
        
        <div className="flex gap-4">
           <div className="flex bg-slate-100 p-1 rounded-xl">
             <button 
               onClick={() => setActiveView('orders')}
               className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${activeView === 'orders' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-400'}`}
             >
               Product Orders
             </button>
             <button 
               onClick={() => setActiveView('transactions')}
               className={`px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${activeView === 'transactions' ? 'bg-white text-emerald-600 shadow-sm' : 'text-slate-400'}`}
             >
               Subscriptions
             </button>
           </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl text-sm font-black transition-all shadow-xl shadow-black/10">
            <TrendingUp className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto px-10 py-8 no-scrollbar space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute right-[-20px] top-[-20px] size-32 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-all duration-700" />
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-2 block">Gross Revenue</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-800 dark:text-white tracking-tighter">₹{stats.totalRevenue.toLocaleString()}</span>
              <span className="text-xs font-black text-emerald-600">+{stats.growthRate}%</span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute right-[-20px] top-[-20px] size-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all duration-700" />
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-2 block">Premium Subs</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-800 dark:text-white tracking-tighter">{stats.activeSubscriptions}</span>
              <span className="text-xs font-black text-blue-600">Active</span>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden group">
            <div className="absolute right-[-20px] top-[-20px] size-32 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-all duration-700" />
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] mb-2 block">Total Orders</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-800 dark:text-white tracking-tighter">{stats.totalOrders}</span>
              <span className="text-xs font-black text-orange-600">Lifetime</span>
            </div>
          </div>
          <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute right-[-20px] top-[-20px] size-32 bg-white/5 rounded-full blur-2xl" />
            <span className="text-[10px] font-black uppercase text-white/50 tracking-[0.2em] mb-2 block">Pending Shipments</span>
            <h4 className="text-lg font-black text-white leading-tight">
              {orders.filter(o => o.status === 'PENDING').length} Orders Need Shipping <ArrowRight className="inline ml-1" />
            </h4>
          </div>
        </div>

        {/* Dynamic Table */}
        <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden relative">
          <div className="px-10 py-6 border-b border-slate-50 dark:border-slate-800 flex items-center justify-between">
            <h3 className="text-sm font-black uppercase tracking-widest text-slate-400">
              {activeView === 'orders' ? 'Product Order Master Log' : 'Subscription Transaction History'}
            </h3>
          </div>
          
          {loading ? (
            <div className="py-40 flex flex-col items-center justify-center gap-4">
              <Loader2 className="w-10 h-10 text-emerald-600 animate-spin" />
              <p className="text-sm font-bold text-slate-400">Compiling financial data...</p>
            </div>
          ) : activeView === 'orders' ? (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 dark:bg-slate-800/20">
                  <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Order #</th>
                  <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Customer</th>
                  <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Items</th>
                  <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">Amount</th>
                  <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
                {orders.map((order) => (
                  <tr key={order.id} onClick={() => setSelectedOrder(order)} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-all group">
                    <td className="px-10 py-6"><span className="font-mono text-xs font-black text-slate-500">{order.orderNumber}</span></td>
                    <td className="px-10 py-6">
                      <div className="flex flex-col">
                        <span className="text-sm font-black text-slate-800">{order.customerName}</span>
                        <span className="text-[10px] font-bold text-slate-400">{order.customerPhone}</span>
                      </div>
                    </td>
                    <td className="px-10 py-6">
                      <div className="flex flex-col gap-1">
                        {order.items.map((item: any, i: number) => (
                          <span key={i} className="text-[10px] font-bold text-slate-600">{item.productName} (x{item.quantity})</span>
                        ))}
                      </div>
                    </td>
                    <td className="px-10 py-6 text-center"><span className="text-sm font-black text-slate-800">₹{order.totalAmount}</span></td>
                    <td className="px-10 py-6 text-right">
                       <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                         order.status === 'PENDING' ? 'bg-orange-50 text-orange-600 border-orange-100' : 'bg-emerald-50 text-emerald-600 border-emerald-100'
                       }`}>
                         {order.status}
                       </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 dark:bg-slate-800/20">
                  <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Transaction ID</th>
                  <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Customer</th>
                  <th className="px-10 py-5 text-[10px) font-black uppercase tracking-widest text-slate-400">Plan</th>
                  <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">Amount</th>
                  <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
                {transactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-slate-50/50 transition-all group">
                    <td className="px-10 py-6"><span className="font-mono text-xs font-black text-slate-500">#{tx.id?.slice(-8).toUpperCase()}</span></td>
                    <td className="px-10 py-6">
                      <div className="flex flex-col">
                        <span className="text-sm font-black text-slate-800">{tx.user?.name}</span>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{tx.user?.email}</span>
                      </div>
                    </td>
                    <td className="px-10 py-6"><span className="text-xs font-black text-slate-700">{tx.planName || "Subscription"}</span></td>
                    <td className="px-10 py-6 text-center"><span className="text-sm font-black text-slate-800">₹{tx.amount.toLocaleString()}</span></td>
                    <td className="px-10 py-6 text-right">
                       <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                         tx.status === 'SUCCESS' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-red-50 text-red-600 border-red-100'
                       }`}>
                         {tx.status}
                       </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm" onClick={() => setSelectedOrder(null)}>
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 w-full max-w-2xl shadow-2xl relative border border-slate-100 dark:border-slate-800" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedOrder(null)} className="absolute top-6 right-6 p-2 bg-slate-50 dark:bg-slate-800 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
              <XCircle className="w-6 h-6 text-slate-400" />
            </button>
            
            <h2 className="text-2xl font-black text-slate-800 dark:text-white mb-8 flex items-center gap-3">
              <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-slate-500">
                 <ShoppingBag className="w-6 h-6" />
              </div>
              Order Details
            </h2>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Order Number</label>
                <div className="font-mono text-sm font-black text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 p-3 rounded-xl inline-block">{selectedOrder.orderNumber}</div>
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Order Date</label>
                <div className="text-sm font-bold text-slate-700 dark:text-slate-300 mt-2">{new Date(selectedOrder.createdAt).toLocaleString()}</div>
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Payment Status</label>
                <span className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border inline-block ${
                   selectedOrder.paymentStatus === 'PAID' || selectedOrder.status === 'DELIVERED' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-orange-50 text-orange-600 border-orange-100'
                 }`}>{selectedOrder.paymentStatus || 'UNPAID'}</span>
              </div>
              <div>
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Order Status</label>
                <span className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border inline-block ${
                   selectedOrder.status === 'PENDING' ? 'bg-orange-50 text-orange-600 border-orange-100' : 'bg-emerald-50 text-emerald-600 border-emerald-100'
                 }`}>{selectedOrder.status}</span>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 mb-8 border border-slate-100 dark:border-slate-800">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">Shipping Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm font-black text-slate-800 dark:text-slate-200 block">{selectedOrder.customerName}</span>
                  <span className="text-[10px] font-bold text-slate-500 mt-1 block">{selectedOrder.customerPhone}</span>
                  <span className="text-[10px] font-bold text-slate-500 block">{selectedOrder.customerEmail}</span>
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-600 dark:text-slate-400 leading-relaxed block">{selectedOrder.shippingAddress}</span>
                </div>
              </div>
            </div>

            <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Order Items</h3>
            <div className="border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden">
              {selectedOrder.items?.map((item: any, idx: number) => (
                <div key={idx} className="flex justify-between items-center p-4 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 last:border-0">
                  <div className="text-sm font-bold text-slate-700 dark:text-slate-300"><span className="text-slate-400 mr-2">{item.quantity}x</span> {item.productName}</div>
                  <div className="text-sm font-black text-slate-800 dark:text-white">₹{item.totalPrice}</div>
                </div>
              ))}
              <div className="flex justify-between items-center p-5 bg-slate-900 text-white">
                <div className="text-[10px] font-black uppercase tracking-widest text-white/50">Total Amount</div>
                <div className="text-xl font-black text-emerald-400">₹{selectedOrder.totalAmount}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center"><Loader2 className="w-10 h-10 text-emerald-600 animate-spin" /></div>}>
      <SalesContent />
    </Suspense>
  );
}
