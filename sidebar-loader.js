// sidebar-loader.js
class SidebarLoader {
    constructor() {
        this.sidebarContainer = document.getElementById('sidebar-container');
        this.translations = {
            id: {
                // Header
                "dashboardTitle": "CSS Dashboard",
                
                // Menu Categories
                "reports": "Laporan",
                "maintenance": "Pemeliharaan",
                "performance": "Kinerja",
                "daily": "Harian",
                
                // Menu Items
                "dashboardOverview": "Dashboard Overview",
                "reportsMenu": "Laporan",
                "pendingReports": "Laporan Tertunda",
                "solvedReports": "Laporan Selesai",
                "maintenanceMenu": "Pemeliharaan",
                "pendingMaintenance": "Tertunda",
                "completedMaintenance": "Selesai",
                "releases": "Rilis",
                "newFeatures": "Fitur Baru",
                "newGames": "Game Baru",
                "kpiPoints": "Poin KPI",
                "kpiCss": "KPI CSS",
                "ideasSuggestions": "Ide & Saran",
                "research": "Riset",
                "chatResponse": "Respon Chat",
                "dailyRoutine": "Rutinitas Harian",
                "dailyTasks": "Tugas Harian",
                "taskHistory": "Riwayat Tugas",
                "topUpCredit": "Top Up Kredit",
                "eventProvider": "Penyedia Event",
                "weeklyMeetings": "Rapat Mingguan",
                "phishingAlerts": "Peringatan Phishing",
                "shiftSchedule": "Jadwal Shift",
                "settings": "Pengaturan",
                "logout": "Keluar",
                
                // Super Admin
                "superAdmin": "Super Admin",
                "userManagement": "Manajemen Pengguna",
                "systemSettings": "Pengaturan Sistem",
                
                // Theme
                "darkMode": "Mode Gelap",
                "lightMode": "Mode Terang"
            },
            
            en: {
                // Header
                "dashboardTitle": "CSS Dashboard",
                
                // Menu Categories
                "reports": "Reports",
                "maintenance": "Maintenance",
                "performance": "Performance",
                "daily": "Daily",
                
                // Menu Items
                "dashboardOverview": "Dashboard Overview",
                "reportsMenu": "Reports",
                "pendingReports": "Pending Reports",
                "solvedReports": "Solved Reports",
                "maintenanceMenu": "Maintenance",
                "pendingMaintenance": "Pending",
                "completedMaintenance": "Completed",
                "releases": "Releases",
                "newFeatures": "New Features",
                "newGames": "New Games",
                "kpiPoints": "KPI Points",
                "kpiCss": "KPI CSS",
                "ideasSuggestions": "Ideas & Suggestions",
                "research": "Research",
                "chatResponse": "Chat Response",
                "dailyRoutine": "Daily Routine",
                "dailyTasks": "Daily Tasks",
                "taskHistory": "Task History",
                "topUpCredit": "Top Up Credit",
                "eventProvider": "Event Provider",
                "weeklyMeetings": "Weekly Meetings",
                "phishingAlerts": "Phishing Alerts",
                "shiftSchedule": "Shift Schedule",
                "settings": "Settings",
                "logout": "Logout",
                
                // Super Admin
                "superAdmin": "Super Admin",
                "userManagement": "User Management",
                "systemSettings": "System Settings",
                
                // Theme
                "darkMode": "Dark Mode",
                "lightMode": "Light Mode"
            },
            
            ja: {
                // Header
                "dashboardTitle": "CSS ダッシュボード",
                
                // Menu Categories
                "reports": "レポート",
                "maintenance": "メンテナンス",
                "performance": "パフォーマンス",
                "daily": "日次",
                
                // Menu Items
                "dashboardOverview": "ダッシュボード概要",
                "reportsMenu": "レポート",
                "pendingReports": "保留中のレポート",
                "solvedReports": "解決済みレポート",
                "maintenanceMenu": "メンテナンス",
                "pendingMaintenance": "保留中",
                "completedMaintenance": "完了",
                "releases": "リリース",
                "newFeatures": "新機能",
                "newGames": "新ゲーム",
                "kpiPoints": "KPIポイント",
                "kpiCss": "KPI CSS",
                "ideasSuggestions": "アイデアと提案",
                "research": "リサーチ",
                "chatResponse": "チャット応答",
                "dailyRoutine": "日次ルーチン",
                "dailyTasks": "日次タスク",
                "taskHistory": "タスク履歴",
                "topUpCredit": "クレジットチャージ",
                "eventProvider": "イベントプロバイダー",
                "weeklyMeetings": "週次会議",
                "phishingAlerts": "フィッシング警告",
                "shiftSchedule": "シフトスケジュール",
                "settings": "設定",
                "logout": "ログアウト",
                
                // Super Admin
                "superAdmin": "スーパー管理者",
                "userManagement": "ユーザー管理",
                "systemSettings": "システム設定",
                
                // Theme
                "darkMode": "ダークモード",
                "lightMode": "ライトモード"
            },
            
            zh: {
                // Header
                "dashboardTitle": "CSS 仪表板",
                
                // Menu Categories
                "reports": "报告",
                "maintenance": "维护",
                "performance": "性能",
                "daily": "日常",
                
                // Menu Items
                "dashboardOverview": "仪表板概览",
                "reportsMenu": "报告",
                "pendingReports": "待处理报告",
                "solvedReports": "已解决报告",
                "maintenanceMenu": "维护",
                "pendingMaintenance": "待处理",
                "completedMaintenance": "已完成",
                "releases": "发布",
                "newFeatures": "新功能",
                "newGames": "新游戏",
                "kpiPoints": "KPI 积分",
                "kpiCss": "KPI CSS",
                "ideasSuggestions": "想法与建议",
                "research": "研究",
                "chatResponse": "聊天回复",
                "dailyRoutine": "日常例行",
                "dailyTasks": "日常任务",
                "taskHistory": "任务历史",
                "topUpCredit": "充值积分",
                "eventProvider": "活动提供商",
                "weeklyMeetings": "周会",
                "phishingAlerts": "网络钓鱼警报",
                "shiftSchedule": "轮班安排",
                "settings": "设置",
                "logout": "退出登录",
                
                // Super Admin
                "superAdmin": "超级管理员",
                "userManagement": "用户管理",
                "systemSettings": "系统设置",
                
                // Theme
                "darkMode": "深色模式",
                "lightMode": "浅色模式"
            }
        };
        
        this.currentLanguage = localStorage.getItem('language') || 'id';
        this.injectStyles();
    }

    getTranslation(key) {
        return this.translations[this.currentLanguage]?.[key] || this.translations['id'][key] || key;
    }

    applyTranslations() {
        const lang = this.translations[this.currentLanguage];
        
        if (!lang) return;

        // Update dashboard title
        const logoText = document.querySelector('.logo-text');
        if (logoText) {
            logoText.textContent = lang.dashboardTitle;
        }

        // Update menu categories
        const categories = document.querySelectorAll('.menu-category');
        categories.forEach((category, index) => {
            switch(index) {
                case 0: // Reports
                    category.textContent = lang.reports;
                    break;
                case 1: // Maintenance
                    category.textContent = lang.maintenance;
                    break;
                case 2: // Performance
                    category.textContent = lang.performance;
                    break;
                case 3: // Daily
                    category.textContent = lang.daily;
                    break;
            }
        });

        // Update menu items
        const menuItems = {
            '.menu-item[data-page="summary-dashboard.html"] .menu-text': lang.dashboardOverview,
            '.has-submenu:nth-child(2) .menu-text': lang.reportsMenu,
            '.menu-item[data-page="pending-reports.html"] .menu-text': lang.pendingReports,
            '.menu-item[data-page="solved-report.html"] .menu-text': lang.solvedReports,
            '.has-submenu:nth-child(4) .menu-text': lang.maintenanceMenu,
            '.menu-item[data-page="maintenance.html"] .menu-text': lang.pendingMaintenance,
            '.menu-item[data-page="completed-report.html"] .menu-text': lang.completedMaintenance,
            '.has-submenu:nth-child(6) .menu-text': lang.releases,
            '.menu-item[data-page="releases-newfeature.html"] .menu-text': lang.newFeatures,
            '.menu-item[data-page="releases-newgame.html"] .menu-text': lang.newGames,
            '.has-submenu:nth-child(8) .menu-text': lang.kpiPoints,
            '.menu-item[data-page="kpi-css.html"] .menu-text': lang.kpiCss,
            '.menu-item[data-page="ide-saran.html"] .menu-text': lang.ideasSuggestions,
            '.menu-item[data-page="research.html"] .menu-text': lang.research,
            '.menu-item[data-page="chat-response.html"] .menu-text': lang.chatResponse,
            '.has-submenu:nth-child(10) .menu-text': lang.dailyRoutine,
            '.menu-item[data-page="daily-tasks.html"] .menu-text': lang.dailyTasks,
            '.menu-item[data-page="task-history.html"] .menu-text': lang.taskHistory,
            '.menu-item[data-page="topup-credit.html"] .menu-text': lang.topUpCredit,
            '.menu-item[data-page="eventprovider.html"] .menu-text': lang.eventProvider,
            '.menu-item[data-page="weekly-meeting.html"] .menu-text': lang.weeklyMeetings,
            '.menu-item[data-page="phishing.html"] .menu-text': lang.phishingAlerts,
            '.menu-item[data-page="jadwalshift.html"] .menu-text': lang.shiftSchedule,
            '.menu-item[data-page="pengaturan.html"] .menu-text': lang.settings,
            '.logout-btn .menu-text': lang.logout
        };

        Object.keys(menuItems).forEach(selector => {
            const element = document.querySelector(selector);
            if (element && menuItems[selector]) {
                element.textContent = menuItems[selector];
            }
        });

        // Update super admin section
        const superAdminSection = document.querySelector('.super-admin-only');
        if (superAdminSection) {
            const superAdminTitle = superAdminSection.querySelector('h3');
            const userManagement = superAdminSection.querySelector('.menu-item:nth-child(2) span');
            const systemSettings = superAdminSection.querySelector('.menu-item:nth-child(3) span');
            
            if (superAdminTitle) superAdminTitle.textContent = lang.superAdmin;
            if (userManagement) userManagement.textContent = lang.userManagement;
            if (systemSettings) systemSettings.textContent = lang.systemSettings;
        }

        // Update theme toggle
        this.updateThemeText();
    }

    updateThemeText() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            const themeText = themeToggle.querySelector('.menu-text');
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            
            if (themeText) {
                themeText.textContent = currentTheme === 'dark' ? 
                    this.getTranslation('lightMode') : 
                    this.getTranslation('darkMode');
            }
        }
    }

    injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* Variabel CSS */
            :root {
                --primary-color: #4361ee;
                --secondary-color: #3f37c9;
                --accent-color: #4895ef;
                --text-color: #333;
                --text-light: #6c757d;
                --bg-color: #f8f9fa;
                --sidebar-bg: #ffffff;
                --sidebar-width: 280px;
                --border-radius: 8px;
                --transition-speed: 0.3s;
                --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                --menu-item-height: 50px;
                --category-spacing: 20px;
            }

            [data-theme="dark"] {
                --primary-color: #4895ef;
                --secondary-color: #4361ee;
                --accent-color: #3f37c9;
                --text-color: #f8f9fa;
                --text-light: #adb5bd;
                --bg-color: #121212;
                --sidebar-bg: #1e1e1e;
                --shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
            }

            /* Terapkan variabel ke elemen body */
            body {
                background-color: var(--bg-color);
                color: var(--text-color);
                transition: background-color var(--transition-speed), color var(--transition-speed);
            }

            /* CSS untuk menu toggle */
            .menu-toggle {
                display: none;
                position: fixed;
                top: 15px;
                left: 15px;
                z-index: 1100;
                background: var(--primary-color);
                color: white;
                border: none;
                border-radius: var(--border-radius);
                width: 40px;
                height: 40px;
                cursor: pointer;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                padding: 0;
            }

            .menu-toggle span {
                display: block;
                width: 24px;
                height: 2px;
                background-color: white;
                margin: 2px 0;
                transition: all 0.3s ease;
            }

            .menu-toggle.active span:nth-child(1) {
                transform: rotate(45deg) translate(5px, 5px);
            }

            .menu-toggle.active span:nth-child(2) {
                opacity: 0;
            }

            .menu-toggle.active span:nth-child(3) {
                transform: rotate(-45deg) translate(5px, -5px);
            }

            /* Sidebar Styles */
            .sidebar {
                position: fixed;
                top: 0;
                left: 0;
                height: 100vh;
                width: var(--sidebar-width);
                background: var(--sidebar-bg);
                box-shadow: var(--shadow);
                z-index: 1000;
                overflow-y: auto;
                display: flex;
                flex-direction: column;
                transition: transform var(--transition-speed) ease;
            }

            .sidebar-header {
                padding: 20px;
                border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            }

            .logo-container {
                display: flex;
                align-items: center;
                gap: 12px;
            }

            .logo-image {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                object-fit: cover;
            }

            .logo-text {
                font-size: 18px;
                font-weight: 700;
                color: var(--text-color);
                margin: 0;
            }

            .sidebar-menu {
                flex: 1;
                padding: 15px;
                display: flex;
                flex-direction: column;
                gap: 5px;
            }

            .menu-category {
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: var(--text-light);
                margin-top: var(--category-spacing);
                margin-bottom: 8px;
                padding: 0 15px;
                font-weight: 600;
            }

            .menu-item {
                display: flex;
                align-items: center;
                height: var(--menu-item-height);
                padding: 0 15px;
                border-radius: var(--border-radius);
                color: var(--text-color);
                cursor: pointer;
                transition: background-color var(--transition-speed);
            }

            .menu-item:hover {
                background-color: rgba(0, 0, 0, 0.05);
            }

            .menu-item.active {
                background-color: var(--primary-color);
                color: white;
            }

            .menu-item.active .menu-icon {
                color: white;
            }

            .menu-icon {
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-right: 15px;
                color: var(--text-light);
                transition: color var(--transition-speed);
            }

            .menu-item:hover .menu-icon {
                color: var(--primary-color);
            }

            .menu-text {
                flex: 1;
                font-size: 14px;
                font-weight: 500;
            }

            .submenu-indicator {
                transition: transform var(--transition-speed);
            }

            .has-submenu.active .submenu-indicator {
                transform: rotate(90deg);
            }

            .submenu {
                max-height: 0;
                overflow: hidden;
                transition: max-height var(--transition-speed) ease;
                padding-left: 20px;
            }

            .submenu.active {
                max-height: 500px;
            }

            .submenu .menu-item {
                height: 45px;
                padding-left: 40px;
            }

            .logout-btn {
                margin-top: 0;
                border-top: none;
                padding-top: 0;
            }

            .logout-btn .menu-icon {
                color: #e74c3c;
            }

            .logout-btn:hover {
                background-color: rgba(231, 76, 60, 0.1);
            }

            /* Theme Toggle Styles */
            .theme-toggle-container {
                margin-top: auto;
                padding: 15px 0;
                border-top: 1px solid rgba(0, 0, 0, 0.1);
            }

            .theme-toggle {
                display: flex;
                align-items: center;
                width: 100%;
                padding: 12px 15px;
                background: transparent;
                border: none;
                border-radius: var(--border-radius);
                color: var(--text-color);
                cursor: pointer;
                transition: background-color var(--transition-speed);
            }

            .theme-toggle:hover {
                background: rgba(0, 0, 0, 0.05);
            }

            /* Overlay untuk menutup sidebar saat diklik di luar */
            .sidebar-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                z-index: 999;
                display: none;
            }

            .sidebar-overlay.active {
                display: block;
            }

            .logo-image {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                object-fit: cover;
                margin-right: 10px;
            }

            /* Super Admin Section */
            .super-admin-only {
                border-top: 2px solid var(--primary-color);
                margin-top: 10px;
                padding-top: 10px;
            }

            .super-admin-only .menu-section h3 {
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: var(--primary-color);
                margin: 15px 15px 8px;
                font-weight: 600;
            }

            /* Tampilkan menu toggle hanya di mobile */
            @media (max-width: 768px) {
                .menu-toggle {
                    display: flex;
                }
                
                .sidebar {
                    transform: translateX(-100%);
                }
                
                .sidebar.active {
                    transform: translateX(0);
                }
                
                .sidebar-overlay.active {
                    display: block;
                }
            }
        `;
        
        document.head.appendChild(style);
    }

    generateSidebarHTML() {
        const lang = this.translations[this.currentLanguage];
        
        return `
            <!-- Overlay untuk mobile -->
            <div class="sidebar-overlay"></div>
            
            <!-- Menu Super Admin -->
            <div class="super-admin-only" style="display: none;">
                <div class="menu-section">
                    <h3>${lang.superAdmin}</h3>
                    <a href="#" class="menu-item" onclick="openUserManagement()">
                        <i class="fas fa-crown"></i>
                        <span>${lang.userManagement}</span>
                    </a>
                    <a href="#" class="menu-item" onclick="openSystemSettings()">
                        <i class="fas fa-cog"></i>
                        <span>${lang.systemSettings}</span>
                    </a>
                </div>
            </div>
            
            <!-- Sidebar -->
            <div class="sidebar">
                <div class="sidebar-header">
                    <div class="logo-container">
                        <img src="https://iili.io/KfDh0EN.png" alt="Logo" class="logo-image" />
                        <h2 class="logo-text">${lang.dashboardTitle}</h2>
                    </div>
                </div>
                
                <div class="sidebar-menu">
                    <div class="menu-item" data-page="summary-dashboard.html">
                        <div class="menu-icon">
                            <i class="fas fa-tachometer-alt"></i>
                        </div>
                        <span class="menu-text">${lang.dashboardOverview}</span>
                    </div>
                    
                    <div class="menu-category">${lang.reports}</div>
                    <div class="menu-item has-submenu">
                        <div class="menu-icon">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <span class="menu-text">${lang.reportsMenu}</span>
                        <div class="submenu-indicator">
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                    <div class="submenu">
                        <div class="menu-item" data-page="pending-reports.html">
                            <div class="menu-icon">
                                <i class="fas fa-file-alt"></i>
                            </div>
                            <span class="menu-text">${lang.pendingReports}</span>
                        </div>
                        <div class="menu-item" data-page="solved-report.html">
                            <div class="menu-icon">
                                <i class="fas fa-check-circle"></i>
                            </div>
                            <span class="menu-text">${lang.solvedReports}</span>
                        </div>
                    </div>
                    
                    <div class="menu-category">${lang.maintenance}</div>
                    <div class="menu-item has-submenu">
                        <div class="menu-icon">
                            <i class="fas fa-tools"></i>
                        </div>
                        <span class="menu-text">${lang.maintenanceMenu}</span>
                        <div class="submenu-indicator">
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                    <div class="submenu">
                        <div class="menu-item" data-page="maintenance.html">
                            <div class="menu-icon">
                                <i class="fas fa-clock"></i>
                            </div>
                            <span class="menu-text">${lang.pendingMaintenance}</span>
                        </div>
                        <div class="menu-item" data-page="completed-report.html">
                            <div class="menu-icon">
                                <i class="fas fa-check-double"></i>
                            </div>
                            <span class="menu-text">${lang.completedMaintenance}</span>
                        </div>
                    </div>

                    <div class="menu-item has-submenu">
                        <div class="menu-icon">
                            <i class="fas fa-rocket"></i>
                        </div>
                        <span class="menu-text">${lang.releases}</span>
                        <div class="submenu-indicator">
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                    <div class="submenu">
                        <div class="menu-item" data-page="releases-newfeature.html">
                            <div class="menu-icon">
                                <i class="fas fa-cog"></i>
                            </div>
                            <span class="menu-text">${lang.newFeatures}</span>
                        </div>
                        <div class="menu-item" data-page="releases-newgame.html">
                            <div class="menu-icon">
                                <i class="fas fa-gamepad"></i>
                            </div>
                            <span class="menu-text">${lang.newGames}</span>
                        </div>
                    </div>
                    
                    <div class="menu-category">${lang.performance}</div>
                    <div class="menu-item has-submenu">
                        <div class="menu-icon">
                            <i class="fas fa-trophy"></i>
                        </div>
                        <span class="menu-text">${lang.kpiPoints}</span>
                        <div class="submenu-indicator">
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                    <div class="submenu">
                        <div class="menu-item" data-page="kpi-css.html">
                            <div class="menu-icon">
                                <i class="fas fa-cogs"></i>
                            </div>
                            <span class="menu-text">${lang.kpiCss}</span>
                        </div>
                        <div class="menu-item" data-page="ide-saran.html">
                            <div class="menu-icon">
                                <i class="fas fa-lightbulb"></i>
                            </div>
                            <span class="menu-text">${lang.ideasSuggestions}</span>
                        </div>
                        <div class="menu-item" data-page="research.html">
                            <div class="menu-icon">
                                <i class="fas fa-chart-line"></i>
                            </div>
                            <span class="menu-text">${lang.research}</span>
                        </div>
                        <div class="menu-item" data-page="chat-response.html">
                            <div class="menu-icon">
                                <i class="fas fa-comments"></i>
                            </div>
                            <span class="menu-text">${lang.chatResponse}</span>
                        </div>
                    </div>
                    
                    <div class="menu-category">${lang.daily}</div>
                    <div class="menu-item has-submenu">
                        <div class="menu-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <span class="menu-text">${lang.dailyRoutine}</span>
                        <div class="submenu-indicator">
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                    <div class="submenu">
                        <div class="menu-item" data-page="daily-tasks.html">
                            <div class="menu-icon">
                                <i class="fas fa-tasks"></i>
                            </div>
                            <span class="menu-text">${lang.dailyTasks}</span>
                        </div>
                        <div class="menu-item" data-page="task-history.html">
                            <div class="menu-icon">
                                <i class="fas fa-clipboard-list"></i>
                            </div>
                            <span class="menu-text">${lang.taskHistory}</span>
                        </div>
                    </div>

                    <div class="menu-item" data-page="topup-credit.html">
                        <div class="menu-icon">
                            <i class="fas fa-coins"></i>
                        </div>
                        <span class="menu-text">${lang.topUpCredit}</span>
                    </div>  

                    <div class="menu-item" data-page="eventprovider.html">
                        <div class="menu-icon">
                            <i class="fas fa-trophy"></i>
                        </div>
                        <span class="menu-text">${lang.eventProvider}</span>
                    </div>

                    <div class="menu-item" data-page="weekly-meeting.html">
                        <div class="menu-icon">
                            <i class="fas fa-users"></i>
                        </div>
                        <span class="menu-text">${lang.weeklyMeetings}</span>
                    </div>

                    <div class="menu-item" data-page="phishing.html">
                        <div class="menu-icon">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                        <span class="menu-text">${lang.phishingAlerts}</span>
                    </div>

                    <div class="menu-item" data-page="jadwalshift.html">
                        <div class="menu-icon">
                            <i class="fas fa-calendar-alt"></i>
                        </div>
                        <span class="menu-text">${lang.shiftSchedule}</span>
                    </div>

                    <div class="menu-item" data-page="pengaturan.html">
                        <div class="menu-icon">
                            <i class="fas fa-cog"></i>
                        </div>
                        <span class="menu-text">${lang.settings}</span>
                    </div>

                    <div class="menu-item logout-btn" data-page="index.html">
                        <div class="menu-icon">
                            <i class="fas fa-sign-out-alt"></i>
                        </div>
                        <span class="menu-text">${lang.logout}</span>
                    </div>
                </div>
            </div>
        `;
    }

    load() {
        if (this.sidebarContainer) {
            this.sidebarContainer.innerHTML = this.generateSidebarHTML();
            this.createMenuToggle();
            this.initializeSidebarFunctionality();
            this.restoreSidebarState();
            this.setActiveMenuItem();
            this.loadTheme();
        }
    }

    createMenuToggle() {
        if (!document.querySelector('.menu-toggle')) {
            const menuToggle = document.createElement('button');
            menuToggle.className = 'menu-toggle';
            menuToggle.innerHTML = `
                <span></span>
                <span></span>
                <span></span>
            `;
            document.body.appendChild(menuToggle);
        }
    }

    initializeSidebarFunctionality() {
        // Toggle sidebar functionality
        const menuToggle = document.querySelector('.menu-toggle');
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        
        if (menuToggle && sidebar && overlay) {
            menuToggle.addEventListener('click', () => {
                sidebar.classList.toggle('active');
                overlay.classList.toggle('active');
                menuToggle.classList.toggle('active');
            });
            
            overlay.addEventListener('click', () => {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
                menuToggle.classList.remove('active');
            });
            
            // Tutup sidebar saat menu item diklik di mobile
            const menuItems = document.querySelectorAll('.menu-item[data-page]');
            menuItems.forEach(item => {
                item.addEventListener('click', () => {
                    if (window.innerWidth <= 768) {
                        sidebar.classList.remove('active');
                        overlay.classList.remove('active');
                        menuToggle.classList.remove('active');
                    }
                });
            });
        }

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                const sidebar = document.querySelector('.sidebar');
                const overlay = document.querySelector('.sidebar-overlay');
                const menuToggle = document.querySelector('.menu-toggle');
                if (sidebar) sidebar.classList.remove('active');
                if (overlay) overlay.classList.remove('active');
                if (menuToggle) menuToggle.classList.remove('active');
            }
        });

        // Submenu toggle
        const hasSubmenuItems = document.querySelectorAll('.has-submenu');
        hasSubmenuItems.forEach((item, index) => {
            item.addEventListener('click', (e) => {
                if (e.target.classList.contains('submenu-toggle')) return;
                const submenu = item.nextElementSibling;
                
                // Toggle submenu
                if (submenu.classList.contains('active')) {
                    submenu.classList.remove('active');
                    submenu.style.maxHeight = '0';
                } else {
                    submenu.classList.add('active');
                    submenu.style.maxHeight = '500px';
                }
                
                item.classList.toggle('active');
                this.saveSidebarState();
            });
        });

        // Menu navigation
        const menuItems = document.querySelectorAll('.menu-item[data-page]');
        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                const pageUrl = item.getAttribute('data-page');
                if (pageUrl === 'index.html') {
                    localStorage.removeItem('isLoggedIn');
                    localStorage.removeItem('sidebarState');
                    localStorage.removeItem('theme');
                } else {
                    this.saveSidebarState();
                }
                window.location.href = pageUrl;
            });
        });

        // Theme toggle functionality
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Setup language change listener
        this.setupLanguageListener();
    }

    setupLanguageListener() {
        window.addEventListener('languageChanged', (event) => {
            this.currentLanguage = event.detail.language;
            this.reloadSidebar();
        });
    }

    reloadSidebar() {
        this.load();
    }

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        this.updateThemeIcon(newTheme);
        this.updateThemeText();
    }

    updateThemeIcon(theme) {
        const themeIcon = document.querySelector('#themeToggle .menu-icon i');
        if (themeIcon) {
            themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }

    updateThemeText() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            const themeText = themeToggle.querySelector('.menu-text');
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            
            if (themeText) {
                themeText.textContent = currentTheme === 'dark' ? 
                    this.getTranslation('lightMode') : 
                    this.getTranslation('darkMode');
            }
        }
    }

    loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.updateThemeIcon(savedTheme);
        this.updateThemeText();
    }

    setActiveMenuItem() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const menuItems = document.querySelectorAll('.menu-item[data-page]');
        
        menuItems.forEach(item => {
            const pageUrl = item.getAttribute('data-page');
            if (pageUrl === currentPage) {
                item.classList.add('active');
                
                // Aktifkan parent submenu jika ada
                const parentSubmenu = item.closest('.submenu');
                if (parentSubmenu) {
                    parentSubmenu.classList.add('active');
                    parentSubmenu.style.maxHeight = '500px';
                    
                    const parentMenuItem = parentSubmenu.previousElementSibling;
                    if (parentMenuItem && parentMenuItem.classList.contains('has-submenu')) {
                        parentMenuItem.classList.add('active');
                    }
                }
            }
        });
    }

    saveSidebarState() {
        const sidebarState = [];
        document.querySelectorAll('.has-submenu').forEach((item, index) => {
            const submenu = item.nextElementSibling;
            if (submenu && submenu.classList.contains('active')) {
                sidebarState.push(index);
            }
        });
        localStorage.setItem('sidebarState', JSON.stringify(sidebarState));
    }

    restoreSidebarState() {
        const sidebarState = JSON.parse(localStorage.getItem('sidebarState') || '[]');
        document.querySelectorAll('.has-submenu').forEach((item, index) => {
            const submenu = item.nextElementSibling;
            if (sidebarState.includes(index)) {
                item.classList.add('active');
                if (submenu) {
                    submenu.classList.add('active');
                    submenu.style.maxHeight = '500px';
                }
            }
        });
    }
}

// Fungsi global untuk memuat sidebar
function loadSidebar() {
    const sidebarLoader = new SidebarLoader();
    sidebarLoader.load();
}

// Fungsi untuk mengubah bahasa
function changeLanguage(language) {
    localStorage.setItem('language', language);
    const sidebarLoader = new SidebarLoader();
    sidebarLoader.currentLanguage = language;
    sidebarLoader.reloadSidebar();
    
    // Dispatch event untuk memberi tahu komponen lain tentang perubahan bahasa
    window.dispatchEvent(new CustomEvent('languageChanged', { 
        detail: { language: language } 
    }));
}

// Fungsi untuk Super Admin
function openUserManagement() {
    alert('User Management akan dibuka di sini');
    // Implementasi untuk membuka modal atau halaman user management
}

function openSystemSettings() {
    alert('System Settings akan dibuka di sini');
    // Implementasi untuk membuka modal atau halaman system settings
}

// Load sidebar saat DOM siap
document.addEventListener('DOMContentLoaded', function() {
    loadSidebar();
});

// Export untuk penggunaan modul
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SidebarLoader, loadSidebar, changeLanguage };
}
