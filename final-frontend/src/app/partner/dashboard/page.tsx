'use client';
import { useState, useEffect } from 'react';
import api from '@/lib/api';
import { Package, Users, Activity } from 'lucide-react';

export default function PartnerDashboard() {
  const [stats, setStats] = useState({ totalAllotted: 0, assignedToCustomers: 0, availableStock: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await api.get('/partners/dashboard');
        setStats(res.data.stats);
      } catch (error) {
        console.error('Failed to fetch dashboard', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, []);

  if (loading) return <p className="p-6">Loading dashboard...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-indigo-100 flex items-center gap-4">
          <div className="p-4 bg-indigo-50 rounded-lg text-indigo-600">
            <Package className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total Allotted Tags</p>
            <h3 className="text-3xl font-bold text-gray-900">{stats.totalAllotted}</h3>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100 flex items-center gap-4">
          <div className="p-4 bg-green-50 rounded-lg text-green-600">
            <Users className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Assigned to Customers</p>
            <h3 className="text-3xl font-bold text-gray-900">{stats.assignedToCustomers}</h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-amber-100 flex items-center gap-4">
          <div className="p-4 bg-amber-50 rounded-lg text-amber-600">
            <Activity className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Available Stock</p>
            <h3 className="text-3xl font-bold text-gray-900">{stats.availableStock}</h3>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Quick Actions</h2>
        <p className="text-gray-600 mb-4">Go to the assignment page to register a new customer and give them a QR code from your available stock.</p>
        <a href="/partner/assign" className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
          Assign QR to Customer &rarr;
        </a>
      </div>
    </div>
  );
}
