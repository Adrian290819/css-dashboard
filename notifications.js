// notifications-integration.js

// ====== Definisi tipe notifikasi dan fungsi notifikasi ======
const NOTIFICATION_TYPES = {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error'
};

function showNotification(message, type = NOTIFICATION_TYPES.INFO) {
    // Membuat elemen notifikasi
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Styling dasar untuk notifikasi
    notification.style.position = 'fixed';
    notification.style.top = '10px';
    notification.style.right = '10px';
    notification.style.padding = '12px 20px';
    notification.style.borderRadius = '5px';
    notification.style.color = '#fff';
    notification.style.fontFamily = 'Arial, sans-serif';
    notification.style.fontSize = '14px';
    notification.style.zIndex = 10000;
    notification.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s ease';

    // Warna berdasarkan tipe notifikasi
    switch(type) {
        case NOTIFICATION_TYPES.SUCCESS:
            notification.style.backgroundColor = '#28a745';
            break;
        case NOTIFICATION_TYPES.WARNING:
            notification.style.backgroundColor = '#ffc107';
            notification.style.color = '#333';
            break;
        case NOTIFICATION_TYPES.ERROR:
            notification.style.backgroundColor = '#dc3545';
            break;
        default: // info dan default
            notification.style.backgroundColor = '#007bff';
    }

    document.body.appendChild(notification);

    // Tampilkan dengan animasi
    setTimeout(() => {
        notification.style.opacity = '1';
    }, 10);

    // Hilangkan notifikasi setelah 3 detik
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);

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
    
    integrateWithNavigation();
    integrateWithForms();
    integrateWithButtons();
    integrateWithAjax();
    createGlobalNotificationEvent();
    integrateWithPageState();
    
    console.log('Integrasi notifikasi selesai.');
}

// 1. Integrasi dengan menu navigasi
function integrateWithNavigation() {
    const navMenuItems = document.querySelectorAll('nav a, .menu-item, [role="menuitem"]');
    
    navMenuItems.forEach(menuItem => {
        if (!menuItem.dataset.originalText) {
            menuItem.dataset.originalText = menuItem.textContent.trim();
        }
        
        menuItem.addEventListener('click', function(e) {
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
    
    console.log(`Terintegrasi dengan ${navMenuItems.length} menu navigasi`);
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
    const actionButtons = document.querySelectorAll('.btn-action, [data-action]');
    
    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.dataset.action || this.textContent.trim() || this.getAttribute('aria-label') || 'tindakan';
            
            notifyInfo(`Melakukan: ${action}`);
            
            if (this.dataset.async === 'true') {
                simulateAsyncAction(action);
            }
        });
    });
    
    const deleteButtons = document.querySelectorAll('.btn-delete, [data-type="delete"]');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
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
    
    console.log(`Terintegrasi dengan ${actionButtons.length + deleteButtons.length} tombol aksi`);
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

// 4. Integrasi dengan AJAX/Fetch
function integrateWithAjax() {
    const originalFetch = window.fetch;
    
    window.fetch = function(...args) {
        const url = args[0];
        const options = args[1] || {};
        const method = options.method || 'GET';
        
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
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
        element.addEventListener(eventType, function() {
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

console.log('Sistem integrasi notifikasi telah dimuat');
