'use client';
import { useState, useEffect } from 'react';
import api from '@/lib/api';
import { Download, ExternalLink, QrCode } from 'lucide-react';
import Link from 'next/link';

export default function PartnerTags() {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await api.get('/partners/tags');
        setTags(res.data);
      } catch (error) {
        console.error('Failed to fetch tags', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTags();
  }, []);

  const handleDownloadQR = async (tagId: string, tagCode: string) => {
    try {
      // Create a temporary link to download the standard QR Code PNG
      const downloadUrl = `https://admin.tarkshyasolution.in/uploads/qrcodes/qr_standard_${tagCode}.png`;
      const response = await fetch(downloadUrl);
      if (!response.ok) throw new Error("Image not found");
      const blob = await response.blob();
      
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `QR_${tagCode}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error('Failed to download QR code', error);
      alert('QR Code image not found or failed to download.');
    }
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg">
          <QrCode className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Assigned Tags</h1>
          <p className="text-gray-500">View and download QR codes for tags you have assigned to customers.</p>
        </div>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading tags...</p>
      ) : tags.length === 0 ? (
        <div className="bg-white p-8 text-center rounded-xl shadow-sm border border-gray-100 text-gray-500 flex flex-col items-center">
          <QrCode className="w-12 h-12 text-gray-300 mb-3" />
          <p>No tags have been assigned yet.</p>
          <Link href="/partner/assign" className="mt-4 text-indigo-600 hover:underline">
            Assign your first tag &rarr;
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">QR ID / Code</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Asset Details</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tags.map((tag: any) => (
                <tr key={tag.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-bold text-gray-900">{tag.tagId}</div>
                    <div className="text-xs text-gray-500 font-mono">{tag.tagCode}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{tag.ownerName || tag.user?.name || '-'}</div>
                    <div className="text-sm text-gray-500">{tag.ownerPhone || tag.user?.phone || '-'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{tag.assetType || '-'}</div>
                    <div className="text-xs text-gray-500">{tag.assetNumber || '-'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end gap-2">
                      <a
                        href={`https://tarkshyasolution.in/tag/${tag.tagCode}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 p-2 rounded-md transition"
                        title="View Public Link"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <button
                        onClick={() => handleDownloadQR(tag.id, tag.tagCode)}
                        className="text-indigo-600 hover:text-white bg-indigo-50 hover:bg-indigo-600 p-2 rounded-md transition flex items-center gap-1"
                        title="Download QR"
                      >
                        <Download className="w-4 h-4" />
                        <span className="text-xs font-semibold mr-1">QR</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
