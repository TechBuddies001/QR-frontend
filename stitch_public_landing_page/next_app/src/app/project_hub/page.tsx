
import React from 'react';
import Script from 'next/script';

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<style>
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap');

        :root {
            --primary: #4F46E5;
            --primary-light: #818CF8;
            --accent: #F59E0B;
            --accent2: #10B981;
            --danger: #EF4444;
            --bg: #0F0F1A;
            --surface: #1A1A2E;
            --surface2: #16213E;
            --border: #2D2D4E;
            --text: #E2E8F0;
            --text-muted: #94A3B8;
            --new-badge: #F59E0B;
            --radius: 12px;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: 'Space Grotesk', sans-serif;
            background: var(--bg);
            color: var(--text);
            font-size: 14px;
            scroll-behavior: smooth;
        }

        /* ─── COVER ─────────────────────────────────────────── */
        .cover {
            background: linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #1e3a5f 100%);
            padding: 80px 40px;
            text-align: center;
            border-bottom: 4px solid var(--primary);
            position: relative;
            overflow: hidden;
        }

        .cover::before {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 70% 30%, rgba(79, 70, 229, .3) 0%, transparent 60%),
                radial-gradient(circle at 20% 80%, rgba(245, 158, 11, .15) 0%, transparent 50%);
        }

        .cover h1 {
            font-size: 42px;
            font-weight: 700;
            color: #fff;
            position: relative;
            letter-spacing: -1px;
        }

        .cover h1 span {
            color: var(--accent);
        }

        .cover p {
            color: #a5b4fc;
            margin-top: 15px;
            font-size: 18px;
            position: relative;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
            line-height: 1.4;
        }

        .cover .meta {
            display: flex;
            gap: 20px;
            justify-content: center;
            margin-top: 30px;
            position: relative;
        }

        .cover .meta span {
            background: rgba(255, 255, 255, .1);
            border: 1px solid rgba(255, 255, 255, .2);
            padding: 6px 16px;
            border-radius: 30px;
            font-size: 12px;
            color: #c7d2fe;
            backdrop-filter: blur(4px);
        }

        .new-badge {
            background: var(--new-badge);
            color: #000;
            font-size: 10px;
            font-weight: 700;
            padding: 2px 7px;
            border-radius: 5px;
            vertical-align: middle;
            margin-left: 8px;
            box-shadow: 0 2px 10px rgba(245, 158, 11, 0.3);
        }

        /* ─── NAV TABS ───────────────────────────────────────── */
        .tab-nav {
            position: sticky;
            top: 0;
            z-index: 100;
            background: rgba(26, 26, 46, 0.8);
            backdrop-filter: blur(12px);
            border-bottom: 2px solid var(--border);
            display: flex;
            gap: 5px;
            padding: 0 20px;
            overflow-x: auto;
            scrollbar-width: none;
        }

        .tab-nav::-webkit-scrollbar {
            display: none;
        }

        .tab-nav a {
            padding: 16px 18px;
            font-size: 12px;
            font-weight: 600;
            color: var(--text-muted);
            text-decoration: none;
            white-space: nowrap;
            border-bottom: 3px solid transparent;
            margin-bottom: -2px;
            transition: all .3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .tab-nav a:hover {
            color: #fff;
            background: rgba(255, 255, 255, 0.05);
        }

        .tab-nav a.active {
            color: var(--primary-light);
            border-bottom-color: var(--primary-light);
            background: rgba(79, 70, 229, 0.1);
        }

        /* ─── SECTION ────────────────────────────────────────── */
        .section {
            padding: 60px 40px;
            border-bottom: 1px solid var(--border);
            max-width: 1200px;
            margin: 0 auto;
        }

        .section-title {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 12px;
            color: #fff;
        }

        .section-title .icon {
            font-size: 28px;
            background: rgba(79, 70, 229, 0.1);
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            border: 1px solid rgba(79, 70, 229, 0.2);
        }

        .section-sub {
            color: var(--text-muted);
            font-size: 14px;
            margin-bottom: 30px;
            max-width: 800px;
        }

        /* ─── MODULE CARDS ───────────────────────────────────── */
        .grid-modules {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 24px;
        }

        .module-card {
            background: var(--surface);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            overflow: hidden;
            transition: all 0.3s ease;
            position: relative;
            text-decoration: none;
            color: inherit;
            display: flex;
            flex-direction: column;
        }

        .module-card:hover {
            transform: translateY(-8px);
            border-color: var(--primary);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4), 0 0 0 1px var(--primary);
        }

        .module-preview {
            height: 160px;
            background: var(--surface2);
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            border-bottom: 1px solid var(--border);
        }

        .module-preview i {
            font-size: 50px;
            color: var(--primary-light);
            opacity: 0.5;
        }

        .module-preview img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.7;
            transition: scale 0.5s ease;
        }

        .module-card:hover .module-preview img {
            scale: 1.05;
            opacity: 0.9;
        }

        .module-content {
            padding: 20px;
            flex: 1;
            display: flex;
            flex-direction: column;
        }

        .module-tag {
            font-size: 10px;
            font-weight: 700;
            color: var(--primary-light);
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .module-title {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 8px;
            color: #fff;
        }

        .module-desc {
            font-size: 13px;
            color: var(--text-muted);
            line-height: 1.5;
            margin-bottom: 18px;
        }

        .version-links {
            display: flex;
            gap: 8px;
            margin-top: auto;
            flex-wrap: wrap;
        }

        .v-btn {
            padding: 6px 12px;
            border-radius: 8px;
            font-size: 11px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.2s;
            background: var(--surface2);
            color: var(--text);
            border: 1px solid var(--border);
        }

        .v-btn:hover {
            background: var(--primary);
            color: #fff;
            border-color: var(--primary);
        }

        .v-btn.latest {
            background: rgba(16, 185, 129, 0.1);
            color: #10B981;
            border-color: rgba(16, 185, 129, 0.3);
        }

        .v-btn.latest:hover {
            background: #10B981;
            color: #fff;
        }

        /* ─── FOOTER ─────────────────────────────────────────── */
        footer {
            padding: 60px 40px;
            text-align: center;
            border-top: 1px solid var(--border);
            color: var(--text-muted);
            font-size: 13px;
            background: rgba(0, 0, 0, 0.2);
        }

        .footer-logo {
            font-size: 20px;
            font-weight: 700;
            color: #fff;
            margin-bottom: 10px;
        }

        .footer-logo span {
            color: var(--accent);
        }

        @media (max-width: 768px) {
            .cover h1 {
                font-size: 32px;
            }

            .section {
                padding: 40px 20px;
            }

            .grid-modules {
                grid-template-columns: 1fr;
            }
        }
    </style>
` }} />
      
      <div className="" style={{minHeight: '100vh', width: '100%'}} dangerouslySetInnerHTML={{ __html: `

    <!-- COVER -->
    <div class="cover">
        <h1>Tarkshya <span>Solution</span></h1>
        <p>Smart QR Identity &amp; Call Masking System — Interactive Design Prototypes &amp; Module Hub</p>
        <div class="meta">
            <span>Version 2.0</span>
            <span>Updated: March 2026</span>
            <span>🆕 12 New Features Integrated</span>
        </div>
    </div>

    <!-- NAV TABS -->
    <div class="tab-nav">
        <a href="#admin" class="active">Admin Modules</a>
        <a href="#public">Public Experience</a>
        <a href="#billing">Billing &amp; Plans</a>
        <a href="#logs">System Logs</a>
        <a href="#flow">Full User Flow</a>
    </div>

    <!-- ════════════════════════════════════════════════
     1. ADMIN MODULES
     ════════════════════════════════════════════════ -->
    <div class="section" id="admin">
        <div class="section-title"><span class="icon"><i class="fas fa-user-shield"></i></span> Admin Control Center
        </div>
        <div class="section-sub">Comprehensive management tools for system administrators to oversee tags, users, and
            sponsors.</div>

        <div class="grid-modules">
            <!-- DASHBOARD -->
            <div class="module-card">
                <div class="module-preview">
                    <i class="fas fa-chart-line"></i>
                </div>
                <div class="module-content">
                    <div class="module-tag">Analytics <span>Core</span></div>
                    <div class="module-title">Admin Dashboard</div>
                    <div class="module-desc">Central hub for real-time stats, expiry alerts, and system-wide activities.
                    </div>
                    <div class="version-links">
                        <a href="/all_html/admin_dashboard" class="v-btn">v1</a>
                        <a href="/all_html/admin_dashboard_v2" class="v-btn">v2</a>
                        <a href="/all_html/admin_dashboard_v3" class="v-btn latest">View Dashboard v3</a>
                    </div>
                </div>
            </div>

            <!-- LOGIN -->
            <div class="module-card">
                <div class="module-preview">
                    <i class="fas fa-lock"></i>
                </div>
                <div class="module-content">
                    <div class="module-tag">Security <span>Auth</span></div>
                    <div class="module-title">Admin Login</div>
                    <div class="module-desc">Secure gateway with 2FA, JWT authentication, and automated audit trails.
                    </div>
                    <div class="version-links">
                        <a href="/all_html/admin_login" class="v-btn">v1</a>
                        <a href="/all_html/admin_login_v2" class="v-btn">v2</a>
                        <a href="/all_html/admin_login_v3" class="v-btn latest">View Login v3</a>
                    </div>
                </div>
            </div>

            <!-- TAG MANAGEMENT -->
            <div class="module-card">
                <div class="module-preview">
                    <i class="fas fa-tags"></i>
                </div>
                <div class="module-content">
                    <div class="module-tag">Operations <span>Registry</span></div>
                    <div class="module-title">Tag Management</div>
                    <div class="module-desc">Manage individual tags, owner profiles, and vehicle/pet identities.</div>
                    <div class="version-links">
                        <a href="/all_html/tag_management" class="v-btn">v1</a>
                        <a href="/all_html/tag_management_v3" class="v-btn latest">Manage Tags v3</a>
                    </div>
                </div>
            </div>

            <!-- QR GENERATOR -->
            <div class="module-card">
                <div class="module-preview">
                    <i class="fas fa-qrcode"></i>
                </div>
                <div class="module-content">
                    <div class="module-tag">Generation <span>Production</span></div>
                    <div class="module-title">Bulk QR Generator</div>
                    <div class="module-desc">Generate single or batch QR codes with ZIP export and printer-friendly
                        Excel.</div>
                    <div class="version-links">
                        <a href="/all_html/generate_qr" class="v-btn">v1</a>
                        <a href="/all_html/generate_qr_v3" class="v-btn latest">Generate QRs v3</a>
                    </div>
                </div>
            </div>

            <!-- SPONSOR MGMT -->
            <div class="module-card">
                <div class="module-preview">
                    <i class="fas fa-handshake"></i>
                </div>
                <div class="module-content">
                    <div class="module-tag">Revenue <span>Partners</span></div>
                    <div class="module-title">Sponsor Management</div>
                    <div class="module-desc">Associate sponsors with tags to display offers on public landing pages.
                    </div>
                    <div class="version-links">
                        <a href="/all_html/sponsor_management" class="v-btn">v1</a>
                        <a href="/all_html/sponsor_management_v3" class="v-btn latest">Sponsors v3</a>
                    </div>
                </div>
            </div>

            <!-- SETTINGS -->
            <div class="module-card">
                <div class="module-preview">
                    <i class="fas fa-cog"></i>
                </div>
                <div class="module-content">
                    <div class="module-tag">Config <span>System</span></div>
                    <div class="module-title">System Settings</div>
                    <div class="module-desc">Configure API keys, Exotel masking, and global system behaviors.</div>
                    <div class="version-links">
                        <a href="/all_html/settings" class="v-btn">v1</a>
                        <a href="/all_html/settings_v3" class="v-btn latest">View Settings v3</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ════════════════════════════════════════════════
     2. PUBLIC EXPERIENCE
     ════════════════════════════════════════════════ -->
    <div class="section" id="public">
        <div class="section-title"><span class="icon"><i class="fas fa-mobile-alt"></i></span> Public User Experience
        </div>
        <div class="section-sub">The interface seen by anyone scanning a Tarkshya QR code. Focused on privacy and speed.
        </div>

        <div class="grid-modules">
            <!-- LANDING PAGE -->
            <div class="module-card">
                <div class="module-preview">
                    <i class="fas fa-id-card"></i>
                </div>
                <div class="module-content">
                    <div class="module-tag">Frontend <span>Mobile View</span></div>
                    <div class="module-title">Public Landing Page</div>
                    <div class="module-desc">Privacy-protected profile view with call masking and emergency fallback.
                    </div>
                    <div class="version-links">
                        <a href="/all_html/public_landing_page" class="v-btn">v1</a>
                        <a href="/all_html/public_landing_page_v2" class="v-btn">v2</a>
                        <a href="/all_html/public_landing_page_v3" class="v-btn latest">Landing Page v3</a>
                    </div>
                </div>
            </div>

            <!-- MOBILE VARIATIONS -->
            <div class="module-card">
                <div class="module-preview">
                    <i class="fas fa-layer-group"></i>
                </div>
                <div class="module-content">
                    <div class="module-tag">Variations <span>Mobile Only</span></div>
                    <div class="module-title">Mobile UI Layouts</div>
                    <div class="module-desc">Specific layouts optimized for accessibility and large action buttons.
                    </div>
                    <div class="version-links">
                        <a href="/all_html/public_landing_page_mobile" class="v-btn">Standard</a>
                        <a href="/all_html/public_landing_page_mobile_large_buttons" class="v-btn">Large Buttons</a>
                    </div>
                </div>
            </div>

            <!-- SEARCH VIEW -->
            <div class="module-card">
                <div class="module-preview">
                    <i class="fas fa-search-location"></i>
                </div>
                <div class="module-content">
                    <div class="module-tag">Tracking <span>Per Tag</span></div>
                    <div class="module-title">Per Tag Scan View</div>
                    <div class="module-desc">Detailed tracking view for specific tags to monitor individual scan events.
                    </div>
                    <div class="version-links">
                        <a href="/all_html/per_tag_scan_view_v3" class="v-btn latest">View Scan Detail v3</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ════════════════════════════════════════════════
     3. BILLING & PLANS
     ════════════════════════════════════════════════ -->
    <div class="section" id="billing">
        <div class="section-title"><span class="icon"><i class="fas fa-credit-card"></i></span> Plans &amp; Subscriptions
        </div>
        <div class="section-sub">Managing the revenue engine: Basic vs Premium gating and sticker pack definitions.
        </div>

        <div class="grid-modules">
            <!-- PLANS -->
            <div class="module-card">
                <div class="module-preview">
                    <i class="fas fa-box-open"></i>
                </div>
                <div class="module-content">
                    <div class="module-tag">Pricing <span>Products</span></div>
                    <div class="module-title">Plans &amp; Sticker Packs</div>
                    <div class="module-desc">Define feature sets for Basic and Premium plans including sticker counts.
                    </div>
                    <div class="version-links">
                        <a href="/all_html/plans_packs" class="v-btn">v1</a>
                        <a href="/all_html/plans_packs_v3" class="v-btn latest">Manage Packs v3</a>
                    </div>
                </div>
            </div>

            <!-- SUBSCRIPTIONS -->
            <div class="module-card">
                <div class="module-preview">
                    <i class="fas fa-sync-alt"></i>
                </div>
                <div class="module-content">
                    <div class="module-tag">Billing <span>Lifecycle</span></div>
                    <div class="module-title">Subscription Registry</div>
                    <div class="module-desc">Track active subscriptions, handle renewals, and manage auto-downgrades.
                    </div>
                    <div class="version-links">
                        <a href="/all_html/subscriptions" class="v-btn">v1</a>
                        <a href="/all_html/subscriptions_v3" class="v-btn latest">Subscriptions v3</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ════════════════════════════════════════════════
     4. SYSTEM LOGS
     ════════════════════════════════════════════════ -->
    <div class="section" id="logs">
        <div class="section-title"><span class="icon"><i class="fas fa-list-ul"></i></span> Activity &amp; Communication
            Logs</div>
        <div class="section-sub">Detailed records of calls, SMS, and scanning history for audit and analytics.</div>

        <div class="grid-modules">
            <!-- CALL LOGS -->
            <div class="module-card">
                <div class="module-preview">
                    <i class="fas fa-phone-alt"></i>
                </div>
                <div class="module-content">
                    <div class="module-tag">Communication <span>Voice</span></div>
                    <div class="module-title">Call Logs</div>
                    <div class="module-desc">History of all masked and direct calls initiated through the system.</div>
                    <div class="version-links">
                        <a href="/all_html/call_logs" class="v-btn">v1</a>
                        <a href="/all_html/call_logs_v3" class="v-btn latest">Call Logs v3</a>
                    </div>
                </div>
            </div>

            <!-- SMS LOGS -->
            <div class="module-card">
                <div class="module-preview">
                    <i class="fas fa-comment-alt"></i>
                </div>
                <div class="module-content">
                    <div class="module-tag">Communication <span>Text</span></div>
                    <div class="module-title">SMS Logs</div>
                    <div class="module-desc">Logs of expiry alerts, renewal reminders, and system notifications.</div>
                    <div class="version-links">
                        <a href="/all_html/sms_logs" class="v-btn">v1</a>
                        <a href="/all_html/sms_logs_v3" class="v-btn latest">SMS Logs v3</a>
                    </div>
                </div>
            </div>

            <!-- SCAN HISTORY -->
            <div class="module-card">
                <div class="module-preview">
                    <i class="fas fa-history"></i>
                </div>
                <div class="module-content">
                    <div class="module-tag">Analytics <span>Scans</span></div>
                    <div class="module-title">Scan History</div>
                    <div class="module-desc">Chronological log of every QR scan including IP and location data.</div>
                    <div class="version-links">
                        <a href="/all_html/scan_history" class="v-btn">v1</a>
                        <a href="/all_html/scan_history_v3" class="v-btn latest">Scan History v3</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ════════════════════════════════════════════════
     5. USER FLOW (FROM WIREFRAME)
     ════════════════════════════════════════════════ -->
    <div class="section" id="flow" style="background: rgba(255,255,255,0.02);">
        <div class="section-title"><span class="icon"><i class="fas fa-project-diagram"></i></span> System User Flow
        </div>
        <div class="section-sub">Visualization of the primary journeys within the Tarkshya ecosystem.</div>

        <div style="background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 30px; display: grid; gap: 40px;">
            <!-- Admin Flow -->
            <div>
                <h4 style="color: var(--primary-light); margin-bottom: 20px; font-size: 16px;">👨‍💼 Administrator
                    Journey</h4>
                <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
                    <div style="background: var(--surface2); padding: 15px; border-radius: 10px; border: 1px solid var(--border); font-size: 13px; text-align: center;">
                        Secure Login</div>
                    <i class="fas fa-arrow-right" style="color: var(--text-muted);"></i>
                    <div style="background: var(--surface2); padding: 15px; border-radius: 10px; border: 1px solid var(--border); font-size: 13px; text-align: center;">
                        Choose Pack</div>
                    <i class="fas fa-arrow-right" style="color: var(--text-muted);"></i>
                    <div style="background: var(--surface2); padding: 15px; border-radius: 10px; border: 1px solid var(--border); font-size: 13px; text-align: center;">
                        Bulk Generate</div>
                    <i class="fas fa-arrow-right" style="color: var(--text-muted);"></i>
                    <div style="background: var(--surface2); padding: 15px; border-radius: 10px; border: 1px solid var(--border); font-size: 13px; text-align: center;">
                        Print &amp; Distribute</div>
                </div>
            </div>

            <!-- User Flow -->
            <div>
                <h4 style="color: var(--accent2); margin-bottom: 20px; font-size: 16px;">👤 Public User Journey</h4>
                <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
                    <div style="background: var(--surface2); padding: 15px; border-radius: 10px; border: 1px solid var(--border); font-size: 13px; text-align: center;">
                        Scan QR</div>
                    <i class="fas fa-arrow-right" style="color: var(--text-muted);"></i>
                    <div style="background: var(--surface2); padding: 15px; border-radius: 10px; border: 1px solid var(--border); font-size: 13px; text-align: center;">
                        View Profile</div>
                    <i class="fas fa-arrow-right" style="color: var(--text-muted);"></i>
                    <div style="background: var(--surface2); padding: 15px; border-radius: 10px; border: 1px solid var(--border); font-size: 13px; text-align: center;">
                        Call Masking</div>
                    <i class="fas fa-arrow-right" style="color: var(--text-muted);"></i>
                    <div style="background: var(--surface2); padding: 15px; border-radius: 10px; border: 1px solid var(--border); font-size: 13px; text-align: center;">
                        Connect Safely</div>
                </div>
            </div>
        </div>
    </div>

    <footer>
        <div class="footer-logo">Tarkshya <span>Solution</span></div>
        <div>© 2026 Tarkshya Smart Systems. All rights reserved.</div>
        <div style="margin-top: 10px; color: var(--primary-light);">Designed with precision for privacy and security.
        </div>
    </footer>

    <script>
        // Simple active tab handler
        const tabs = document.querySelectorAll('.tab-nav a');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            });
        });

        // Highlight tab based on scroll
        window.addEventListener('scroll', () => {
            let current = "";
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });

            tabs.forEach(tab => {
                tab.classList.remove('active');
                if (tab.getAttribute('href').includes(current)) {
                    tab.classList.add('active');
                }
            });
        });
    </script>



` }} />
    </>
  );
}
