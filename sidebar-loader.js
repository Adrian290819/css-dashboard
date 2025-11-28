// sidebar-loader.js
class SidebarLoader {
    constructor() {
        this.sidebarContainer = document.getElementById('sidebar-container');
        this.translations = {
            id: {
                "dashboardTitle": "CSS Dashboard",
                "reports": "Laporan",
                "maintenance": "Pemeliharaan",
                "performance": "Kinerja",
                "daily": "Harian",
                "kpiHistory": "History KPI",
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
                "superAdmin": "Super Admin",
                "userManagement": "Manajemen Pengguna",
                "systemSettings": "Pengaturan Sistem",
                "darkMode": "Mode Gelap",
                "lightMode": "Mode Terang",
                "staffAccount": "Akun Staff"
            },
            
            en: {
                "dashboardTitle": "CSS Dashboard",
                "reports": "Reports",
                "maintenance": "Maintenance",
                "performance": "Performance",
                "daily": "Daily",
                "kpiHistory": "KPI History",
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
                "superAdmin": "Super Admin",
                "userManagement": "User Management",
                "systemSettings": "System Settings",
                "darkMode": "Dark Mode",
                "lightMode": "Light Mode",
                "staffAccount": "Staff Account"
            },
            
            ja: {
                "dashboardTitle": "CSS ダッシュボード",
                "reports": "レポート",
                "maintenance": "メンテナンス",
                "performance": "パフォーマンス",
                "daily": "日次",
                "kpiHistory": "KPI履歴",
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
                "superAdmin": "スーパー管理者",
                "userManagement": "ユーザー管理",
                "systemSettings": "システム設定",
                "darkMode": "ダークモード",
                "lightMode": "ライトモード",
                "staffAccount": "スタッフアカウント"
            },
            
            zh: {
                "dashboardTitle": "CSS 仪表板",
                "reports": "报告",
                "maintenance": "维护",
                "performance": "性能",
                "daily": "日常",
                "kpiHistory": "KPI历史",
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
                "superAdmin": "超级管理员",
                "userManagement": "用户管理",
                "systemSettings": "系统设置",
                "darkMode": "深色模式",
                "lightMode": "浅色模式",
                "staffAccount": "员工账户"
            }
        };
        
        this.currentLanguage = localStorage.getItem('language') || 'id';
        this.currentUserRole = 'user';
        this.currentUserId = null;
        this.userData = null;
        this.isInitialized = false;
        
        this.debug = localStorage.getItem('debugMode') === 'true';
        this.eventListeners = [];
        
        this.log('SidebarLoader initialized');
    }

    log(message, data = null) {
        if (this.debug) {
            console.log(`[SidebarLoader] ${message}`, data || '');
        }
    }

    error(message, error = null) {
        console.error(`[SidebarLoader] ${message}`, error || '');
    }

    async getCurrentUserId() {
        return new Promise((resolve, reject) => {
            if (typeof firebase === 'undefined') {
                reject(new Error('Firebase not loaded'));
                return;
            }

            const auth = firebase.auth();
            const unsubscribe = auth.onAuthStateChanged(user => {
                unsubscribe();
                if (user) {
                    resolve(user.uid);
                } else {
                    reject(new Error('User not authenticated'));
                }
            }, reject);
        });
    }

    async getUserDataFromFirebase(userId) {
        try {
            if (typeof firebase === 'undefined') {
                throw new Error('Firebase not loaded');
            }

            const db = firebase.firestore();
            const userDoc = await db.collection('users').doc(userId).get();
            
            if (userDoc.exists) {
                return userDoc.data();
            } else {
                throw new Error('User document not found');
            }
        } catch (error) {
            this.error('Error getting user data from Firebase:', error);
            throw error;
        }
    }

    async initializeUserData() {
        try {
            // Gunakan cached data untuk percepat loading
            const cachedRole = localStorage.getItem('userRole');
            const cachedUserId = localStorage.getItem('userId');
            
            if (cachedRole && cachedUserId) {
                this.currentUserRole = cachedRole;
                this.currentUserId = cachedUserId;
                this.log('Using cached user data', { role: cachedRole, userId: cachedUserId });
                return { role: cachedRole, userId: cachedUserId };
            }
            
            // Dapatkan user ID dari Firebase Auth
            this.currentUserId = await this.getCurrentUserId();
            
            // Dapatkan user data dari Firestore
            this.userData = await this.getUserDataFromFirebase(this.currentUserId);
            
            // Update role dari Firestore
            this.currentUserRole = this.userData?.role || 'user';
            
            // Cache data
            localStorage.setItem('userRole', this.currentUserRole);
            localStorage.setItem('userId', this.currentUserId);
            
            this.log('User data loaded from Firebase', {
                userId: this.currentUserId,
                role: this.currentUserRole
            });
            
            return this.userData;
        } catch (error) {
            this.error('Error initializing user data:', error);
            // Fallback ke cached data
            this.currentUserRole = localStorage.getItem('userRole') || 'user';
            this.currentUserId = localStorage.getItem('userId') || null;
            return { role: this.currentUserRole, userId: this.currentUserId };
        }
    }

    getTranslation(key) {
        const translation = this.translations[this.currentLanguage]?.[key] || 
                           this.translations['id']?.[key] || 
                           key;
        return translation;
    }

    applyTranslations() {
        const lang = this.translations[this.currentLanguage];
        
        if (!lang) {
            this.error('No translations found for language:', this.currentLanguage);
            return;
        }

        try {
            // Update dashboard title
            const logoText = document.querySelector('.logo-text');
            if (logoText) {
                logoText.textContent = lang.dashboardTitle;
            }

            // Update menu categories
            const categories = document.querySelectorAll('.menu-category');
            const categoryKeys = ['reports', 'maintenance', 'performance', 'daily'];
            
            categories.forEach((category, index) => {
                if (categoryKeys[index]) {
                    category.textContent = lang[categoryKeys[index]];
                }
            });

            // Update menu items
            const menuSelectors = {
                '.menu-item[data-page="summary-dashboard.html"] .menu-text': 'dashboardOverview',
                '.has-submenu:nth-child(2) .menu-text': 'reportsMenu',
                '.menu-item[data-page="pending-reports.html"] .menu-text': 'pendingReports',
                '.menu-item[data-page="solved-report.html"] .menu-text': 'solvedReports',
                '.has-submenu:nth-child(4) .menu-text': 'maintenanceMenu',
                '.menu-item[data-page="maintenance.html"] .menu-text': 'pendingMaintenance',
                '.menu-item[data-page="completed-report.html"] .menu-text': 'completedMaintenance',
                '.has-submenu:nth-child(6) .menu-text': 'releases',
                '.menu-item[data-page="releases-newfeature.html"] .menu-text': 'newFeatures',
                '.menu-item[data-page="releases-newgame.html"] .menu-text': 'newGames',
                '.has-submenu:nth-child(8) .menu-text': 'kpiPoints',
                '.menu-item[data-page="kpi-css.html"] .menu-text': 'kpiCss',
                '.menu-item[data-page="kpi-history.html"] .menu-text': 'kpiHistory',
                '.menu-item[data-page="ide-saran.html"] .menu-text': 'ideasSuggestions',
                '.menu-item[data-page="research.html"] .menu-text': 'research',
                '.menu-item[data-page="chat-response.html"] .menu-text': 'chatResponse',
                '.has-submenu:nth-child(10) .menu-text': 'dailyRoutine',
                '.menu-item[data-page="daily-tasks.html"] .menu-text': 'dailyTasks',
                '.menu-item[data-page="task-history.html"] .menu-text': 'taskHistory',
                '.menu-item[data-page="staff-account.html"] .menu-text': 'staffAccount',
                '.menu-item[data-page="topup-credit.html"] .menu-text': 'topUpCredit',
                '.menu-item[data-page="eventprovider.html"] .menu-text': 'eventProvider',
                '.menu-item[data-page="weekly-meeting.html"] .menu-text': 'weeklyMeetings',
                '.menu-item[data-page="phishing.html"] .menu-text': 'phishingAlerts',
                '.menu-item[data-page="jadwalshift.html"] .menu-text': 'shiftSchedule',
                '.menu-item[data-page="pengaturan.html"] .menu-text': 'settings',
                '.logout-btn .menu-text': 'logout'
            };

            Object.keys(menuSelectors).forEach(selector => {
                const element = document.querySelector(selector);
                const translationKey = menuSelectors[selector];
                
                if (element && lang[translationKey]) {
                    element.textContent = lang[translationKey];
                }
            });

            // Update theme text
            this.updateThemeText();

        } catch (error) {
            this.error('Error applying translations:', error);
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

    injectStyles() {
        if (document.getElementById('sidebar-styles')) {
            return; // Styles sudah diinject
        }

        const style = document.createElement('style');
        style.id = 'sidebar-styles';
        style.textContent = `
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
                text-decoration: none;
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

            @media (prefers-reduced-motion: reduce) {
                * {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                }
            }

            .menu-item:focus-visible,
            .theme-toggle:focus-visible {
                outline: 2px solid var(--primary-color);
                outline-offset: 2px;
            }
        `;
        
        document.head.appendChild(style);
    }

    generateSidebarHTML() {
        const lang = this.translations[this.currentLanguage];
        const isSuperAdmin = this.currentUserRole === 'super_admin';
        
        this.log('Generating sidebar with role:', this.currentUserRole);
        
        return `
            <div class="sidebar-overlay"></div>
            
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
                        <div class="menu-item" data-page="kpi-history.html">
                            <div class="menu-icon">
                                <i class="fas fa-history"></i>
                            </div>
                            <span class="menu-text">${lang.kpiHistory}</span>
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

                    ${isSuperAdmin ? `
                    <div class="menu-item" data-page="staff-account.html">
                        <div class="menu-icon">
                            <i class="fas fa-user-friends"></i>
                        </div>
                        <span class="menu-text">${lang.staffAccount}</span>
                    </div>
                    ` : ''}

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

                    <div class="menu-item logout-btn" id="logoutButton">
                        <div class="menu-icon">
                            <i class="fas fa-sign-out-alt"></i>
                        </div>
                        <span class="menu-text">${lang.logout}</span>
                    </div>
                </div>
        `;
    }

    async load() {
        if (!this.sidebarContainer) {
            this.error('Sidebar container not found');
            return;
        }

        try {
            // Load theme pertama
            this.loadTheme();
            
            // Inject styles
            this.injectStyles();
            
            // Initialize user data
            await this.initializeUserData();
            
            // Render sidebar
            this.sidebarContainer.innerHTML = this.generateSidebarHTML();
            
            // Setup functionality
            this.createMenuToggle();
            this.initializeSidebarFunctionality();
            this.restoreSidebarState();
            this.setActiveMenuItem();
            this.applyTranslations();
            
            this.isInitialized = true;
            this.log('Sidebar loaded successfully');
            
        } catch (error) {
            this.error('Error loading sidebar:', error);
            // Fallback rendering
            this.sidebarContainer.innerHTML = this.generateSidebarHTML();
            this.createMenuToggle();
            this.initializeSidebarFunctionality();
            this.restoreSidebarState();
            this.setActiveMenuItem();
            this.applyTranslations();
        }
    }

    createMenuToggle() {
        if (!document.querySelector('.menu-toggle')) {
            const menuToggle = document.createElement('button');
            menuToggle.className = 'menu-toggle';
            menuToggle.setAttribute('aria-label', 'Toggle menu');
            menuToggle.innerHTML = `
                <span></span>
                <span></span>
                <span></span>
            `;
            document.body.appendChild(menuToggle);
        }
    }

    initializeSidebarFunctionality() {
        this.setupMenuToggle();
        this.setupSubmenuToggle();
        this.setupMenuNavigation();
        this.setupThemeToggle();
        this.setupLanguageListener();
        this.setupResizeHandler();
    }

    setupMenuToggle() {
        const menuToggle = document.querySelector('.menu-toggle');
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        
        if (menuToggle && sidebar && overlay) {
            const toggleHandler = () => {
                sidebar.classList.toggle('active');
                overlay.classList.toggle('active');
                menuToggle.classList.toggle('active');
            };
            
            menuToggle.addEventListener('click', toggleHandler);
            overlay.addEventListener('click', toggleHandler);
            
            this.eventListeners.push({ element: menuToggle, type: 'click', handler: toggleHandler });
            this.eventListeners.push({ element: overlay, type: 'click', handler: toggleHandler });
        }
    }

    setupSubmenuToggle() {
        const hasSubmenuItems = document.querySelectorAll('.has-submenu');
        
        hasSubmenuItems.forEach((item) => {
            const handler = (e) => {
                if (e.target.classList.contains('submenu-toggle')) return;
                
                const submenu = item.nextElementSibling;
                if (submenu && submenu.classList.contains('submenu')) {
                    if (submenu.classList.contains('active')) {
                        submenu.classList.remove('active');
                        submenu.style.maxHeight = '0';
                    } else {
                        submenu.classList.add('active');
                        submenu.style.maxHeight = '500px';
                    }
                    
                    item.classList.toggle('active');
                    this.saveSidebarState();
                }
            };
            
            item.addEventListener('click', handler);
            this.eventListeners.push({ element: item, type: 'click', handler });
        });
    }

    setupMenuNavigation() {
        const menuItems = document.querySelectorAll('.menu-item[data-page]');
        const logoutButton = document.getElementById('logoutButton');
        
        // Handle regular menu items
        menuItems.forEach(item => {
            if (item === logoutButton) return; // Skip logout button
            
            const handler = () => {
                const pageUrl = item.getAttribute('data-page');
                this.handleMenuNavigation(pageUrl);
            };
            
            item.addEventListener('click', handler);
            this.eventListeners.push({ element: item, type: 'click', handler });
        });
        
        // Handle logout separately
        if (logoutButton) {
            const logoutHandler = () => {
                this.handleLogout();
            };
            
            logoutButton.addEventListener('click', logoutHandler);
            this.eventListeners.push({ element: logoutButton, type: 'click', handler: logoutHandler });
        }
    }

    handleMenuNavigation(pageUrl) {
        // Validasi page URL
        const allowedPages = [
            'summary-dashboard.html', 'pending-reports.html', 'solved-report.html',
            'maintenance.html', 'completed-report.html', 'releases-newfeature.html',
            'releases-newgame.html', 'kpi-css.html', 'kpi-history.html', 'ide-saran.html',
            'research.html', 'chat-response.html', 'daily-tasks.html', 'task-history.html',
            'staff-account.html', 'topup-credit.html', 'eventprovider.html', 
            'weekly-meeting.html', 'phishing.html', 'jadwalshift.html', 'pengaturan.html',
            'index.html'
        ];
        
        if (!allowedPages.includes(pageUrl)) {
            this.error('Invalid page navigation attempt:', pageUrl);
            return;
        }
        
        this.saveSidebarState();
        
        // Close mobile sidebar
        if (window.innerWidth <= 768) {
            this.closeMobileSidebar();
        }
        
        // Navigate
        window.location.href = pageUrl;
    }

    handleLogout() {
        // Clear sensitive data
        const sensitiveKeys = ['userRole', 'userId', 'sidebarState', 'theme', 'language'];
        sensitiveKeys.forEach(key => localStorage.removeItem(key));
        
        // Firebase logout jika available
        if (typeof firebase !== 'undefined' && firebase.auth) {
            firebase.auth().signOut().catch(error => {
                this.error('Firebase logout error:', error);
            });
        }
        
        // Navigate to login page
        window.location.href = 'index.html';
    }

    setupThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            const handler = () => this.toggleTheme();
            themeToggle.addEventListener('click', handler);
            this.eventListeners.push({ element: themeToggle, type: 'click', handler });
        }
    }

    setupLanguageListener() {
        const handler = (event) => {
            this.currentLanguage = event.detail.language;
            this.reloadSidebar();
        };
        
        window.addEventListener('languageChanged', handler);
        this.eventListeners.push({ element: window, type: 'languageChanged', handler });
    }

    setupResizeHandler() {
        let resizeTimeout;
        
        const handler = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                if (window.innerWidth > 768) {
                    this.closeMobileSidebar();
                }
            }, 250);
        };
        
        window.addEventListener('resize', handler);
        this.eventListeners.push({ element: window, type: 'resize', handler });
    }

    closeMobileSidebar() {
        const sidebar = document.querySelector('.sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        const menuToggle = document.querySelector('.menu-toggle');
        
        if (sidebar) sidebar.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        if (menuToggle) menuToggle.classList.remove('active');
    }

    async reloadSidebar() {
        await this.initializeUserData();
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

    loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.updateThemeIcon(savedTheme);
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
        try {
            const sidebarState = JSON.parse(localStorage.getItem('sidebarState') || '[]');
            document.querySelectorAll('.has-submenu').forEach((item, index) => {
                const submenu = item.nextElementSibling;
                if (sidebarState.includes(index) && submenu) {
                    submenu.classList.add('active');
                    submenu.style.maxHeight = '500px';
                    item.classList.add('active');
                }
            });
        } catch (error) {
            this.error('Error restoring sidebar state:', error);
        }
    }

    // Cleanup method
    destroy() {
        // Remove all event listeners
        this.eventListeners.forEach(({ element, type, handler }) => {
            element.removeEventListener(type, handler);
        });
        this.eventListeners = [];
        
        // Remove global reference
        window.sidebarLoader = null;
        
        this.log('SidebarLoader destroyed');
    }

    isSuperAdmin() {
        return this.currentUserRole === 'super_admin';
    }

    getUserData() {
        return this.userData;
    }
}

// Global functions
function isSuperAdmin() {
    const sidebarLoader = window.sidebarLoader;
    return sidebarLoader ? sidebarLoader.isSuperAdmin() : false;
}

function getUserData() {
    const sidebarLoader = window.sidebarLoader;
    return sidebarLoader ? sidebarLoader.getUserData() : null;
}

// Initialize with error handling
document.addEventListener('DOMContentLoaded', async function() {
    try {
        const sidebarLoader = new SidebarLoader();
        window.sidebarLoader = sidebarLoader;
        await sidebarLoader.load();
    } catch (error) {
        console.error('Failed to initialize SidebarLoader:', error);
    }
});

// Handle page unload
window.addEventListener('beforeunload', () => {
    if (window.sidebarLoader) {
        window.sidebarLoader.destroy();
    }
});
