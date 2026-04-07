"use client";

import { useState, useEffect } from "react";
import api from "@/lib/api";
import toast from "react-hot-toast";
import { 
  Settings as SettingsIcon, 
  Shield, 
  Phone, 
  Mail, 
  Globe, 
  Save, 
  Loader2, 
  Info,
  CheckCircle2,
  Lock
} from "lucide-react";

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("general");
  const [settings, setSettings] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("/settings");
        setSettings(response.data.settings);
      } catch (error) {
        toast.error("Failed to load settings");
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await api.put("/settings", settings);
      toast.success("Settings updated successfully");
    } catch (error) {
      toast.error("Failed to save settings");
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (key: string, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  if (loading) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-10 space-y-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black text-slate-800 dark:text-white flex items-center gap-3">
            <SettingsIcon className="w-8 h-8 text-primary" />
            System Settings
          </h1>
          <p className="text-slate-400 font-bold text-sm mt-1 uppercase tracking-widest">Global configuration & API Integrations</p>
        </div>
        <button 
          onClick={handleUpdate}
          disabled={saving}
          className="bg-primary hover:bg-orange-600 text-white px-8 py-3.5 rounded-2xl font-black text-sm flex items-center gap-2 shadow-xl shadow-primary/20 transition-all active:scale-95"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          Apply Changes
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Sidebar Nav */}
        <div className="md:col-span-3 space-y-2">
          <TabButton 
            active={activeTab === 'general'} 
            onClick={() => setActiveTab('general')} 
            icon={<Globe className="w-4 h-4" />} 
            label="General" 
          />
          <TabButton 
            active={activeTab === 'exotel'} 
            onClick={() => setActiveTab('exotel')} 
            icon={<Phone className="w-4 h-4" />} 
            label="Exotel Call" 
          />
          <TabButton 
            active={activeTab === 'security'} 
            onClick={() => setActiveTab('security')} 
            icon={<Shield className="w-4 h-4" />} 
            label="Security" 
          />
        </div>

        {/* Content Area */}
        <div className="md:col-span-9">
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 p-10 shadow-2xl shadow-black/5">
            
            {activeTab === 'general' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="grid grid-cols-2 gap-8">
                  <SettingInput 
                    label="Application Name" 
                    value={settings.appName || "QR STICH"} 
                    onChange={(v) => handleChange('appName', v)} 
                    placeholder="e.g. My QR Business"
                  />
                  <SettingInput 
                    label="Support Email" 
                    value={settings.supportEmail || ""} 
                    onChange={(v) => handleChange('supportEmail', v)} 
                    placeholder="help@example.com"
                  />
                </div>
                <SettingTextarea 
                  label="Privacy Policy URL" 
                  value={settings.privacyUrl || ""} 
                  onChange={(v) => handleChange('privacyUrl', v)} 
                />
              </div>
            )}

            {activeTab === 'exotel' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="flex items-center gap-4 p-6 bg-[#00D4D4]/5 rounded-3xl border border-[#00D4D4]/20 mb-4">
                   <img src="/images/exotel-badge.png" className="w-12 h-12" alt="Exotel" />
                   <div>
                      <h4 className="font-black text-[#00D4D4] text-sm uppercase">Exotel Integration Active</h4>
                      <p className="text-xs font-medium text-slate-500">Configure your Exotel credentials to enable secure call masking for all tags.</p>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <SettingInput 
                    label="Account SID" 
                    value={settings.exotelSid || ""} 
                    onChange={(v) => handleChange('exotelSid', v)} 
                    placeholder="Your Exotel SID"
                    isSecret
                  />
                  <SettingInput 
                    label="Caller ID" 
                    value={settings.exotelCallerId || ""} 
                    onChange={(v) => handleChange('exotelCallerId', v)} 
                    placeholder="Verified Caller ID"
                  />
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <SettingInput 
                    label="API Key" 
                    value={settings.exotelApiKey || ""} 
                    onChange={(v) => handleChange('exotelApiKey', v)} 
                    isSecret
                  />
                  <SettingInput 
                    label="API Token" 
                    value={settings.exotelApiToken || ""} 
                    onChange={(v) => handleChange('exotelApiToken', v)} 
                    isSecret
                  />
                </div>
                
                <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-2xl flex items-start gap-3 border border-amber-100 dark:border-amber-900/30">
                   <Info className="w-5 h-5 text-amber-600 mt-0.5" />
                   <p className="text-xs text-amber-700 dark:text-amber-400 font-medium leading-relaxed">
                      <b>Security Note:</b> These credentials are encrypted at rest. For maximum security, we recommend setting these in your server's .env file. Frontend configuration will take precedence if provided.
                   </p>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="space-y-8 animate-in fade-in duration-300 text-center py-20">
                 <div className="size-20 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lock className="w-8 h-8 text-slate-300" />
                 </div>
                 <h3 className="text-xl font-black text-slate-800 dark:text-white">Security Controls</h3>
                 <p className="text-slate-400 font-medium max-w-sm mx-auto text-sm italic">
                    Advanced security settings including IP Whitelisting and 2FA for administrators. 
                    <br /><span className="text-primary font-bold line-through">Coming in v2.0</span>
                 </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

function TabButton({ active, onClick, icon, label }: any) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl text-sm font-black transition-all ${
        active 
        ? "bg-white dark:bg-slate-900 text-primary shadow-xl shadow-black/5 border border-slate-100 dark:border-slate-800 scale-[1.02]" 
        : "text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function SettingInput({ label, value, onChange, placeholder, isSecret }: any) {
  const [show, setShow] = useState(!isSecret);
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">{label}</label>
      <div className="relative">
        <input 
          type={show ? 'text' : 'password'}
          className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-900 rounded-2xl text-sm font-bold transition-all outline-none"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
        {isSecret && (
          <button 
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary"
          >
             {show ? <XCircle className="w-4 h-4" /> : <div className="text-[10px] font-black uppercase">Show</div>}
          </button>
        )}
      </div>
    </div>
  );
}

function SettingTextarea({ label, value, onChange }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest px-1">{label}</label>
      <textarea 
        className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-800 border-2 border-transparent focus:border-primary focus:bg-white dark:focus:bg-slate-900 rounded-2xl text-sm font-bold transition-all outline-none min-h-[100px]"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

