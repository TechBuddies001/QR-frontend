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
  Lock,
  Eye,
  EyeOff,
  User,
  Users as UsersIcon,
  CreditCard
} from "lucide-react";

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [profile, setProfile] = useState({ name: "", email: "" });
  const [passwordForm, setPasswordForm] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" });
  const [changingPassword, setChangingPassword] = useState(false);
  const [employeeForm, setEmployeeForm] = useState({ name: "", email: "", password: "" });
  const [adminUser, setAdminUser] = useState<any>(null);

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
    
    // Load local user profile state
    const stored = localStorage.getItem("admin_user");
    if (stored) {
      const parsed = JSON.parse(stored);
      setAdminUser(parsed);
      setProfile({ name: parsed.name, email: parsed.email });
    }
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

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      toast.error("New passwords do not match");
      return;
    }
    if (passwordForm.newPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    setChangingPassword(true);
    try {
      await api.post("/auth/change-password", {
        currentPassword: passwordForm.currentPassword,
        newPassword: passwordForm.newPassword
      });
      toast.success("Password updated successfully");
      setPasswordForm({ currentPassword: "", newPassword: "", confirmPassword: "" });
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Failed to update password");
    } finally {
      setChangingPassword(false);
    }
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
          disabled={saving || activeTab === 'profile' || activeTab === 'team'}
          className={`px-8 py-3.5 rounded-2xl font-black text-sm flex items-center gap-2 shadow-xl transition-all active:scale-95 ${activeTab === 'profile' || activeTab === 'team' ? 'opacity-0 pointer-events-none' : 'bg-primary hover:bg-orange-600 text-white shadow-primary/20'}`}
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          Apply Changes
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Sidebar Nav */}
        <div className="md:col-span-3 space-y-2">
          <TabButton 
            active={activeTab === 'profile'} 
            onClick={() => setActiveTab('profile')} 
            icon={<User className="w-4 h-4" />} 
            label="My Profile" 
          />
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
          <TabButton 
            active={activeTab === 'payment'} 
            onClick={() => setActiveTab('payment')} 
            icon={<CreditCard className="w-4 h-4" />} 
            label="Payment Gateway" 
          />
          <TabButton 
            active={activeTab === 'team'} 
            onClick={() => setActiveTab('team')} 
            icon={<UsersIcon className="w-4 h-4" />} 
            label="Team / Staff" 
          />
        </div>

        {/* Content Area */}
        <div className="md:col-span-9">
          <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 p-10 shadow-2xl shadow-black/5 min-h-[400px]">
            
            {activeTab === 'profile' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="grid grid-cols-2 gap-8">
                  <SettingInput 
                    label="Full Name" 
                    value={profile.name} 
                    onChange={(v) => setProfile({...profile, name: v})} 
                    placeholder="Your Name"
                  />
                  <SettingInput 
                    label="Email Address" 
                    value={profile.email} 
                    onChange={(v) => setProfile({...profile, email: v})} 
                    placeholder="email@example.com"
                  />
                </div>
                <button 
                  onClick={async () => {
                    setSaving(true);
                    try {
                      const res = await api.put("/auth/profile", profile);
                      localStorage.setItem("admin_user", JSON.stringify(res.data.admin));
                      toast.success("Profile updated! Data syncs instantly.");
                      // Update Header automatically by triggering a small event or just reloading
                      window.location.reload(); 
                    } catch (e) {
                      toast.error("Failed to update profile");
                    } finally {
                      setSaving(false);
                    }
                  }}
                  disabled={saving}
                  className="bg-primary hover:bg-orange-600 text-white px-8 py-3.5 rounded-2xl font-black text-sm flex items-center gap-2 shadow-xl shadow-primary/20 transition-all active:scale-95"
                >
                  {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />} Update Profile
                </button>

                {/* Password Update Section */}
                <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800">
                  <h3 className="text-lg font-black text-slate-800 dark:text-white mb-6">Change Password</h3>
                  <form onSubmit={handleChangePassword} className="space-y-6 max-w-xl">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Current Password</label>
                      <input 
                        type="password" 
                        required
                        value={passwordForm.currentPassword}
                        onChange={e => setPasswordForm({...passwordForm, currentPassword: e.target.value})}
                        className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-800 rounded-xl font-bold text-sm outline-none focus:border-blue-500 transition-all"
                        placeholder="••••••••"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">New Password</label>
                        <input 
                          type="password" 
                          required
                          value={passwordForm.newPassword}
                          onChange={e => setPasswordForm({...passwordForm, newPassword: e.target.value})}
                          className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-800 rounded-xl font-bold text-sm outline-none focus:border-blue-500 transition-all"
                          placeholder="••••••••"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Confirm New Password</label>
                        <input 
                          type="password" 
                          required
                          value={passwordForm.confirmPassword}
                          onChange={e => setPasswordForm({...passwordForm, confirmPassword: e.target.value})}
                          className="w-full px-5 py-3.5 bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-800 rounded-xl font-bold text-sm outline-none focus:border-blue-500 transition-all"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>
                    <button 
                      type="submit"
                      disabled={changingPassword}
                      className="px-6 py-3 bg-blue-600 text-white rounded-xl font-black text-sm flex items-center gap-2 shadow-lg shadow-blue-600/20 active:scale-95 transition-all disabled:opacity-50"
                    >
                      {changingPassword ? <Loader2 className="w-4 h-4 animate-spin" /> : <Lock className="w-4 h-4" />}
                      Update Password
                    </button>
                  </form>
                </div>
              </div>
            )}
            
            {activeTab === 'team' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                {(adminUser?.role === 'admin' || adminUser?.role === 'superadmin') ? (
                  <>
                  <div className="flex items-center gap-4 p-6 bg-primary/5 rounded-3xl border border-primary/20 mb-4">
                     <div>
                        <h4 className="font-black text-primary text-sm uppercase">Add Office Employee</h4>
                        <p className="text-xs font-medium text-slate-500">Create login credentials for new staff members to access the dashboard.</p>
                     </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <SettingInput label="Employee Name" value={employeeForm.name} onChange={(v) => setEmployeeForm({...employeeForm, name: v})} placeholder="Staff Name" />
                    <SettingInput label="Email ID" value={employeeForm.email} onChange={(v) => setEmployeeForm({...employeeForm, email: v})} placeholder="staff@example.com" />
                    <div className="col-span-2 md:col-span-1">
                      <SettingInput label="Secure Password" isSecret value={employeeForm.password} onChange={(v) => setEmployeeForm({...employeeForm, password: v})} />
                    </div>
                  </div>
                  <button 
                    disabled={saving}
                    onClick={async () => {
                      if (!employeeForm.name || !employeeForm.email || !employeeForm.password) return toast.error("All fields are required");
                      setSaving(true);
                      try {
                        await api.post("/auth/employee", employeeForm);
                        toast.success("Employee added successfully!");
                        setEmployeeForm({ name: "", email: "", password: "" });
                      } catch (e: any) {
                        toast.error(e.response?.data?.error || "Failed to add employee");
                      } finally {
                        setSaving(false);
                      }
                    }}
                    className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 px-8 py-3.5 rounded-2xl font-black text-sm transition-all shadow-xl"
                  >
                    {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Create Employee'}
                  </button>
                  </>
                ) : (
                  <div className="text-center py-20">
                    <p className="text-slate-500 font-bold mb-4 flex justify-center"><Shield className="w-10 h-10 text-slate-300"/></p>
                    <p className="text-slate-500 font-bold">You don't have permission to add employees.</p>
                  </div>
                )}
              </div>
            )}
            
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

            {activeTab === 'payment' && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="flex items-center gap-4 p-6 bg-blue-500/5 rounded-3xl border border-blue-500/20 mb-4">
                   <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center p-2">
                     <span className="font-bold text-blue-600">RZP</span>
                   </div>
                   <div>
                      <h4 className="font-black text-blue-600 text-sm uppercase">Razorpay Integration</h4>
                      <p className="text-xs font-medium text-slate-500">Configure your Razorpay API keys for checkout payments.</p>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <SettingInput 
                    label="Razorpay Key ID" 
                    value={settings.RAZORPAY_KEY_ID || ""} 
                    onChange={(v) => handleChange('RAZORPAY_KEY_ID', v)} 
                    placeholder="rzp_test_..."
                  />
                  <SettingInput 
                    label="Razorpay Key Secret" 
                    value={settings.RAZORPAY_KEY_SECRET || ""} 
                    onChange={(v) => handleChange('RAZORPAY_KEY_SECRET', v)} 
                    placeholder="Secret Key"
                    isSecret
                  />
                </div>
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
                
                <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-2xl flex items-start gap-3 border border-amber-100 dark:border-amber-900/30 mb-8">
                   <Info className="w-5 h-5 text-amber-600 mt-0.5" />
                   <p className="text-xs text-amber-700 dark:text-amber-400 font-medium leading-relaxed">
                      <b>Security Note:</b> These credentials are encrypted at rest. For maximum security, we recommend setting these in your server's .env file. Frontend configuration will take precedence if provided.
                   </p>
                </div>

                <div className="flex items-center gap-4 p-6 bg-emerald-500/5 rounded-3xl border border-emerald-500/20 mb-4">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-10 h-10" alt="WhatsApp" />
                   <div>
                      <h4 className="font-black text-emerald-600 text-sm uppercase">Exotel WhatsApp Integration</h4>
                      <p className="text-xs font-medium text-slate-500">Configure Exotel Business WhatsApp for instant alert delivery & multimedia scanning alerts.</p>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <SettingInput 
                    label="WhatsApp Business Number" 
                    value={settings.exotelWhatsappNumber || ""} 
                    onChange={(v) => handleChange('exotelWhatsappNumber', v)} 
                    placeholder="e.g. +919876543210"
                  />
                  <SettingInput 
                    label="Scan Alert Template Name" 
                    value={settings.exotelWhatsappTemplate || ""} 
                    onChange={(v) => handleChange('exotelWhatsappTemplate', v)} 
                    placeholder="e.g. scan_alert_v1"
                  />
                </div>

                {/* CALL ESCALATION SETTINGS */}
                <div className="flex items-center gap-4 p-5 bg-blue-500/5 rounded-2xl border border-blue-200 mt-6 mb-4">
                   <Phone className="w-8 h-8 text-blue-600 shrink-0" />
                   <div>
                      <h4 className="font-black text-blue-600 text-sm uppercase">Call Escalation Settings</h4>
                      <p className="text-xs font-medium text-slate-500">Ring timeouts and QR scan alert spam protection.</p>
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-wide">Primary Ring Timeout (sec)</label>
                    <input type="number" min={5} max={60}
                      value={settings['exotel_ring_timeout_primary'] ?? '18'}
                      onChange={e => handleChange('exotel_ring_timeout_primary', e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <p className="text-[0.68rem] text-slate-400">Owner ko ring karne ka time before escalation (default: 18s)</p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-wide">Secondary Ring Timeout (sec)</label>
                    <input type="number" min={5} max={60}
                      value={settings['exotel_ring_timeout_secondary'] ?? '20'}
                      onChange={e => handleChange('exotel_ring_timeout_secondary', e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <p className="text-[0.68rem] text-slate-400">Emergency contact ring time (default: 20s)</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-wide">Scan Alert Cooldown (min)</label>
                    <input type="number" min={1} max={60}
                      value={settings['scan_alert_cooldown_minutes'] ?? '10'}
                      onChange={e => handleChange('scan_alert_cooldown_minutes', e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <p className="text-[0.68rem] text-slate-400">Ek vehicle ke liye repeat scan alert ke beech minimum gap (default: 10 min)</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-black text-slate-500 uppercase tracking-wide">Instant Scan WhatsApp Alert</label>
                    <button type="button"
                      onClick={() => handleChange('scan_alert_enabled', settings['scan_alert_enabled'] === 'false' ? 'true' : 'false')}
                      className={`w-14 h-7 rounded-full transition-all relative mt-1 ${settings['scan_alert_enabled'] === 'false' ? 'bg-slate-300' : 'bg-emerald-500'}`}
                    >
                      <span className={`absolute top-1.5 w-4 h-4 rounded-full bg-white shadow transition-all ${settings['scan_alert_enabled'] === 'false' ? 'left-1.5' : 'left-8'}`} />
                    </button>
                    <p className="text-[0.68rem] text-slate-400">
                      {settings['scan_alert_enabled'] === 'false' ? 'Disabled - no instant scan alerts' : 'Owner ko QR scan hote hi WhatsApp jayega'}
                    </p>
                  </div>
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

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

function TabButton({ active, onClick, icon, label }: TabButtonProps) {
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

interface SettingInputProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  isSecret?: boolean;
}

function SettingInput({ label, value, onChange, placeholder, isSecret }: SettingInputProps) {
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
             {show ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </button>
        )}
      </div>
    </div>
  );
}

interface SettingTextareaProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
}

function SettingTextarea({ label, value, onChange }: SettingTextareaProps) {
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

