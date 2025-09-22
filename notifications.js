// notifications-integration.js

// ====== Definisi tipe notifikasi dan fungsi notifikasi ======
const NOTIFICATION_TYPES = {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error'
};

// Konfigurasi - ubah nilai ini untuk menonaktifkan notifikasi menu
const NOTIFICATION_CONFIG = {
    enableMenuNotifications: false, // Ubah menjadi false untuk menonaktifkan
    enableAjaxNotifications: true   // Ubah menjadi false untuk menonaktifkan notifikasi AJAX
};

// Menambahkan stylesheet untuk notifikasi
function addNotificationStyles() {
    // Cek apakah stylesheet sudah ada
    if (document.querySelector('style[data-notification-styles]')) {
        return;
    }
    
    const style = document.createElement('style');
    style.setAttribute('data-notification-styles', 'true');
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
        
        .notification-container {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            display: flex;
            flex-direction: column;
            gap: 12px;
            max-width: 350px;
        }
        
        .notification {
            position: relative;
            padding: 16px 20px 16px 50px;
            border-radius: 8px;
            color: #fff;
            font-family: 'Inter', Arial, sans-serif;
            font-size: 14px;
            font-weight: 500;
            line-height: 1.5;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
            cursor: pointer;
            overflow: hidden;
        }
        
        .notification.show {
            opacity: 1;
            transform: translateX(0);
        }
        
        .notification::before {
            content: '';
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            width: 20px;
            height: 20px;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }
        
        .notification.info {
            background-color: #3498db;
            border-left: 4px solid #2980b9;
        }
        
        .notification.info::before {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'/%3E%3C/svg%3E");
        }
        
        .notification.success {
            background-color: #2ecc71;
            border-left: 4px solid #27ae60;
        }
        
        .notification.success::before {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'/%3E%3C/svg%3E");
        }
        
        .notification.warning {
            background-color: #f39c12;
            border-left: 4px solid #d35400;
            color: #fff;
        }
        
        .notification.warning::before {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z'/%3E%3C/svg%3E");
        }
        
        .notification.error {
            background-color: #e74c3c;
            border-left: 4px solid #c0392b;
        }
        
        .notification.error::before {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'/%3E%3C/svg%3E");
        }
        
        .notification-progress {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 4px;
            background-color: rgba(255, 255, 255, 0.5);
            width: 100%;
            transform-origin: left;
            animation: progress 3s linear forwards;
        }
        
        @keyframes progress {
            from { transform: scaleX(1); }
            to { transform: scaleX(0); }
        }
        
        @media (max-width: 768px) {
            .notification-container {
                right: 10px;
                left: 10px;
                max-width: none;
            }
            
            .notification {
                padding: 14px 16px 14px 45px;
            }
            
            .notification::before {
                left: 15px;
                width: 18px;
                height: 18px;
            }
        }
    `;
    
    document.head.appendChild(style);
}

// Membuat container untuk notifikasi
function createNotificationContainer() {
    const container = document.createElement('div');
    container.className = 'notification-container';
    document.body.appendChild(container);
    return container;
}

// Mendapatkan atau membuat container notifikasi
function getNotificationContainer() {
    let container = document.querySelector('.notification-container');
    if (!container) {
        container = createNotificationContainer();
    }
    return container;
}

function showNotification(message, type = NOTIFICATION_TYPES.INFO) {
    // Pastikan stylesheet sudah ditambahkan
    addNotificationStyles();
    
    // Membuat elemen notifikasi
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Tambahkan progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'notification-progress';
    notification.appendChild(progressBar);
    
    // Tambahkan ke container
    const container = getNotificationContainer();
    container.appendChild(notification);
    
    // Tampilkan dengan animasi
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Hilangkan notifikasi setelah 3 detik
    const timeout = setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
    
    // Hilangkan notifikasi saat diklik
    notification.addEventListener('click', () => {
        clearTimeout(timeout);
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });
    
    return notification;
}

// Wrapper fungsi notifikasi
function notifyInfo(msg) {
    return showNotification(msg, NOTIFICATION_TYPES.INFO);
}

function notifySuccess(msg) {
    return showNotification(msg, NOTIFICATION_TYPES.SUCCESS);
}

function notifyWarning(msg) {
    return showNotification(msg, NOTIFICATION_TYPES.WARNING);
}

function notifyError(msg) {
    return showNotification(msg, NOTIFICATION_TYPES.ERROR);
}

// ====== Fungsi utama integrasi notifikasi ======

function initializeNotificationIntegration() {
    console.log('Menginisialisasi integrasi notifikasi...');
    
    // Pastikan stylesheet sudah ditambahkan
    addNotificationStyles();
    
    integrateWithNavigation();
    integrateWithForms();
    integrateWithButtons();
    integrateWithAjax();
    createGlobalNotificationEvent();
    integrateWithPageState();
    
    console.log('Integrasi notifikasi selesai.');
}

// 1. Integrasi dengan menu navigasi - DIMODIFIKASI untuk mengabaikan sidebar
function integrateWithNavigation() {
    // Hindari elemen yang berada dalam sidebar
    const navMenuItems = document.querySelectorAll(`
        nav a:not(.sidebar a, aside a, #sidebar a, [class*="sidebar"] a, [id*="sidebar"] a), 
        .menu-item:not(.sidebar .menu-item, aside .menu-item, #sidebar .menu-item, [class*="sidebar"] .menu-item, [id*="sidebar"] .menu-item), 
        [role="menuitem"]:not(.sidebar [role="menuitem"], aside [role="menuitem"], #sidebar [role="menuitem"], [class*="sidebar"] [role="menuitem"], [id*="sidebar"] [role="menuitem"])
    `);
    
    navMenuItems.forEach(menuItem => {
        if (!menuItem.dataset.originalText) {
            menuItem.dataset.originalText = menuItem.textContent.trim();
        }
        
        menuItem.addEventListener('click', function(e) {
            // Periksa konfigurasi sebelum menampilkan notifikasi
            if (!NOTIFICATION_CONFIG.enableMenuNotifications) {
                return; // Keluar jika notifikasi menu dinonaktifkan
            }
            
            // Periksa lagi apakah elemen ini berada dalam sidebar
            if (this.closest('.sidebar, aside, #sidebar, [class*="sidebar"], [id*="sidebar"]')) {
                return; // Jangan tampilkan notifikasi untuk sidebar
            }
            
            const menuText = this.dataset.originalText;
            const isExternal = this.hostname !== window.location.hostname;
            const isHashLink = this.getAttribute('href')?.startsWith('#');
            
            if (!isExternal && !isHashLink) {
                notifyInfo(`Membuka: ${menuText}`);
            }
            
            if (!this.getAttribute('href') || this.getAttribute('href') === '#') {
                e.preventDefault();
                notifyInfo(`Menu "${menuText}" diklik`);
            }
        });
    });
    
    console.log(`Terintegrasi dengan ${navMenuItems.length} menu navigasi (sidebar diabaikan)`);
}

// 2. Integrasi dengan form
function integrateWithForms() {
    const allForms = document.querySelectorAll('form');
    
    allForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const isValid = validateForm(this);
            if (!isValid) {
                e.preventDefault();
                return false;
            }
            
            const formName = this.getAttribute('name') || this.getAttribute('id') || 'Form';
            notifyInfo(`Memproses ${formName}...`);
        });
        
        const importantFields = form.querySelectorAll('input[required], select[required], textarea[required]');
        importantFields.forEach(field => {
            field.addEventListener('blur', function() {
                if (this.value.trim() === '') {
                    notifyWarning(`Field ${this.name} harus diisi`);
                }
            });
        });
    });
    
    console.log(`Terintegrasi dengan ${allForms.length} form`);
}

// Validasi form
function validateForm(form) {
    let isValid = true;
    let firstErrorField = null;
    
    form.querySelectorAll('[required]').forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            if (!firstErrorField) {
                firstErrorField = field;
            }
            field.style.borderColor = '#dc3545';
            field.addEventListener('input', function() {
                if (this.value.trim()) {
                    this.style.borderColor = '';
                }
            });
        }
    });
    
    if (!isValid) {
        notifyError('Harap isi semua field yang diperlukan');
        if (firstErrorField) firstErrorField.focus();
    }
    
    return isValid;
}

// 3. Integrasi dengan tombol aksi
function integrateWithButtons() {
    // Hindari tombol yang berada dalam sidebar
    const actionButtons = document.querySelectorAll(`
        .btn-action:not(.sidebar .btn-action, aside .btn-action, #sidebar .btn-action, [class*="sidebar"] .btn-action, [id*="sidebar"] .btn-action), 
        [data-action]:not(.sidebar [data-action], aside [data-action], #sidebar [data-action], [class*="sidebar"] [data-action], [id*="sidebar"] [data-action])
    `);
    
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Periksa apakah tombol ini berada dalam sidebar
            if (this.closest('.sidebar, aside, #sidebar, [class*="sidebar"], [id*="sidebar"]')) {
                return; // Jangan tampilkan notifikasi untuk sidebar
            }
            
            const action = this.dataset.action || this.textContent.trim() || this.getAttribute('aria-label') || 'tindakan';
            
            notifyInfo(`Melakukan: ${action}`);
            
            if (this.dataset.async === 'true') {
                simulateAsyncAction(action);
            }
        });
    });
    
    // Hindari tombol delete yang berada dalam sidebar
    const deleteButtons = document.querySelectorAll(`
        .btn-delete:not(.sidebar .btn-delete, aside .btn-delete, #sidebar .btn-delete, [class*="sidebar"] .btn-delete, [id*="sidebar"] .btn-delete), 
        [data-type="delete"]:not(.sidebar [data-type="delete"], aside [data-type="delete"], #sidebar [data-type="delete"], [class*="sidebar"] [data-type="delete"], [id*="sidebar"] [data-type="delete"])
    `);
    
    deleteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Periksa apakah tombol ini berada dalam sidebar
            if (this.closest('.sidebar, aside, #sidebar, [class*="sidebar"], [id*="sidebar"]')) {
                return; // Jangan tampilkan notifikasi untuk sidebar
            }
            
            e.preventDefault();
            const target = this.dataset.target || 'item';
            
            if (confirm(`Apakah Anda yakin ingin menghapus ${target}?`)) {
                notifyWarning(`Menghapus ${target}...`);
                // Logika penghapusan bisa ditambahkan di sini
            } else {
                notifyInfo('Penghapusan dibatalkan');
            }
        });
    });
    
    console.log(`Terintegrasi dengan ${actionButtons.length + deleteButtons.length} tombol aksi (sidebar diabaikan)`);
}

// Simulasi aksi async
function simulateAsyncAction(action) {
    const duration = 1000 + Math.random() * 2000;
    
    setTimeout(() => {
        if (Math.random() > 0.2) {
            notifySuccess(`${action} berhasil`);
        } else {
            notifyError(`${action} gagal`);
        }
    }, duration);
}

// 4. Integrasi dengan AJAX/Fetch - DIPERBAIKI untuk mencegah notifikasi saat reload
function integrateWithAjax() {
    // Periksa konfigurasi sebelum mengintegrasikan AJAX
    if (!NOTIFICATION_CONFIG.enableAjaxNotifications) {
        console.log('Notifikasi AJAX dinonaktifkan');
        return;
    }
    
    const originalFetch = window.fetch;
    
    window.fetch = function(...args) {
        const url = args[0];
        const options = args[1] || {};
        const method = options.method || 'GET';
        
        // Jangan tampilkan notifikasi untuk request tertentu
        const skipUrls = [
            '/service-worker.js',
            '/sw.js',
            '/manifest.json',
            '/favicon.ico',
            '/api/health',
            '/health'
        ];
        
        const isSkippedUrl = skipUrls.some(skipUrl => 
            typeof url === 'string' && url.includes(skipUrl)
        );
        
        // Jangan tampilkan notifikasi untuk request internal browser atau saat halaman dimuat
        const isBrowserInternalRequest = typeof url === 'string' && (
            url.includes('chrome-extension:') ||
            url.includes('safari-extension:') ||
            url.includes('moz-extension:') ||
            url.startsWith('blob:') ||
            url.startsWith('data:')
        );
        
        if (isSkippedUrl || isBrowserInternalRequest || method === 'GET') {
            return originalFetch.apply(this, args);
        }
        
        if (method !== 'GET') {
            notifyInfo(`Memproses ${method} request...`);
        }
        
        return originalFetch.apply(this, args)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status} - ${response.statusText}`);
                }
                return response;
            })
            .then(response => {
                if (method !== 'GET') {
                    notifySuccess(`${method} request berhasil`);
                }
                return response;
            })
            .catch(error => {
                notifyError(`Request gagal: ${error.message}`);
                throw error;
            });
    };
    
    console.log('Terintegrasi dengan AJAX/Fetch operations');
}

// 5. Event global untuk notifikasi
function createGlobalNotificationEvent() {
    function dispatchNotificationEvent(message, type = NOTIFICATION_TYPES.INFO) {
        const event = new CustomEvent('showNotification', {
            detail: { message, type }
        });
        window.dispatchEvent(event);
    }

    window.addEventListener('showNotification', function(e) {
        showNotification(e.detail.message, e.detail.type);
    });
    
    window.dispatchNotification = dispatchNotificationEvent;
    
    console.log('Event global notifikasi telah dibuat');
}

// 6. Integrasi dengan state perubahan halaman (SPA)
function integrateWithPageState() {
    const originalPushState = history.pushState;
    history.pushState = function(state, title, url) {
        notifyInfo(`Navigasi ke: ${title || url}`);
        return originalPushState.apply(history, arguments);
    };
    
    const originalReplaceState = history.replaceState;
    history.replaceState = function(state, title, url) {
        notifyInfo(`Mengganti halaman: ${title || url}`);
        return originalReplaceState.apply(history, arguments);
    };
    
    window.addEventListener('popstate', function() {
        notifyInfo('Navigasi menggunakan history');
    });
    
    console.log('Terintegrasi dengan state perubahan halaman');
}

// 7. Fungsi utility tambahan
function showNotificationForDuration(message, type, duration) {
    const notification = showNotification(message, type);
    
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }, duration);
    
    return notification;
}

// 8. Fungsi untuk menghubungkan dengan element spesifik
function connectNotificationToElement(selector, eventType, message, type = NOTIFICATION_TYPES.INFO) {
    // Hindari elemen yang berada dalam sidebar
    const elements = document.querySelectorAll(`${selector}:not(.sidebar ${selector}, aside ${selector}, #sidebar ${selector}, [class*="sidebar"] ${selector}, [id*="sidebar"] ${selector})`);
    
    elements.forEach(element => {
        element.addEventListener(eventType, function() {
            // Periksa apakah elemen ini berada dalam sidebar
            if (this.closest('.sidebar, aside, #sidebar, [class*="sidebar"], [id*="sidebar"]')) {
                return; // Jangan tampilkan notifikasi untuk sidebar
            }
            
            showNotification(message, type);
        });
    });
    
    return elements.length;
}

// 9. Inisialisasi otomatis saat dokumen siap
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeNotificationIntegration, 100);
});

// 10. Ekspos fungsi ke global scope
window.initializeNotificationIntegration = initializeNotificationIntegration;
window.connectNotificationToElement = connectNotificationToElement;
window.showNotificationForDuration = showNotificationForDuration;
window.notifyInfo = notifyInfo;
window.notifySuccess = notifySuccess;
window.notifyWarning = notifyWarning;
window.notifyError = notifyError;

console.log('Sistem integrasi notifikasi telah dimuat');