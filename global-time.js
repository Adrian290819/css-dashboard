// global-time.js

/**
 * Format dan tampilkan waktu, tanggal, dan tahun secara real-time
 */
class GlobalTimeDisplay {
    constructor() {
        this.timeElement = null;
        this.dateElement = null;
        this.updateInterval = null;
        this.timezone = 'Asia/Jakarta'; // Default timezone
        this.dateFormat = 'DD/MM/YYYY'; // Default date format
    }

    /**
     * Inisialisasi time display
     */
    init() {
        this.loadSettings();
        this.createTimeDisplay();
        this.startTimeUpdate();
        
        // Setup listener untuk perubahan pengaturan
        this.setupSettingsListener();
    }

    /**
     * Memuat pengaturan dari localStorage
     */
    loadSettings() {
        this.timezone = localStorage.getItem('timezone') || 'Asia/Jakarta';
        this.dateFormat = localStorage.getItem('dateFormat') || 'DD/MM/YYYY';
    }

    /**
     * Membuat elemen untuk menampilkan waktu
     */
    createTimeDisplay() {
        // Cari header actions
        const headerActions = document.querySelector('.header-actions');
        
        if (!headerActions) {
            console.warn('Header actions not found');
            return;
        }

        // Cari search bar
        const searchBar = headerActions.querySelector('.search-bar');
        
        // Buat container untuk time display
        const timeContainer = document.createElement('div');
        timeContainer.className = 'time-display';
        // Menyederhanakan tampilan default (hanya waktu dan tanggal)
        timeContainer.innerHTML = `
            <div class="current-time" id="currentTime">--:--:--</div>
            <div class="current-date" id="currentDate">--/--/----</div>
        `;

        // Sisipkan sebelum elemen pertama di header actions, atau sebelum search bar jika ada
        if (searchBar) {
             headerActions.insertBefore(timeContainer, searchBar);
        } else {
             headerActions.appendChild(timeContainer);
        }
       
        // Simpan referensi ke elemen
        this.timeElement = document.getElementById('currentTime');
        this.dateElement = document.getElementById('currentDate');
    }

    /**
     * Memulai pembaruan waktu secara real-time
     */
    startTimeUpdate() {
        // Update immediately
        this.updateTime();
        
        // Update every second
        this.updateInterval = setInterval(() => {
            this.updateTime();
        }, 1000);
    }

    /**
     * Memperbarui tampilan waktu
     */
    updateTime() {
        if (!this.timeElement || !this.dateElement) return;

        const now = new Date();
        
        // Format waktu dan tanggal
        const timeString = this.formatTime(now);
        const dateString = this.formatDate(now);
        
        // Update elemen
        this.timeElement.textContent = timeString;
        this.dateElement.textContent = dateString;
    }

    /**
     * Format waktu (HH:MM:SS)
     */
    formatTime(date) {
        return date.toLocaleTimeString('id-ID', {
            timeZone: this.timezone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
    }

    /**
     * Format tanggal berdasarkan pengaturan (lebih simpel)
     */
    formatDate(date) {
        let locale = 'id-ID'; // Gunakan locale ID untuk default format dan nama hari
        
        const defaultOptions = {
            timeZone: this.timezone,
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        };

        // Mengatur opsi format dasar
        let options = {...defaultOptions};

        // Format tanggal utama berdasarkan setting
        let datePart;

        switch (this.dateFormat) {
            case 'MM/DD/YYYY':
                locale = 'en-US'; 
                datePart = date.toLocaleDateString(locale, options);
                break;
            case 'YYYY-MM-DD':
                locale = 'en-CA'; 
                datePart = date.toLocaleDateString(locale, options);
                break;
            case 'DD/MM/YYYY':
            default:
                // Default DD/MM/YYYY menggunakan format Indonesia
                datePart = date.toLocaleDateString(locale, options);
                break;
        }

        // Tambahkan nama hari (simpel) di depan tanggal
        const dayName = date.toLocaleDateString('id-ID', {
            timeZone: this.timezone,
            weekday: 'short' // Gunakan 'short' untuk singkatan hari (Sen, Sel, Rab, dll.)
        });
        
        // KELUARAN SIMPEL: [Nama Hari, Tanggal]
        return `${dayName}, ${datePart}`;
    }

    /**
     * Setup listener untuk perubahan pengaturan
     */
    setupSettingsListener() {
        // Listen for storage changes (dari settings page di tab lain)
        window.addEventListener('storage', (e) => {
            if (e.key === 'timezone' || e.key === 'dateFormat') {
                this.loadSettings();
                this.updateTime();
            }
        });

        // Custom event untuk update real-time (dalam tab yang sama)
        document.addEventListener('settingsUpdated', (e) => {
            if (e.detail && (e.detail.timezone || e.detail.dateFormat)) {
                this.loadSettings();
                this.updateTime();
            }
        });
    }

    /**
     * Hentikan pembaruan waktu (cleanup)
     */
    destroy() {
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
        }
    }
}

// Buat instance global
const globalTime = new GlobalTimeDisplay();

// Inisialisasi saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
    globalTime.init();
});

// Export untuk penggunaan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GlobalTimeDisplay;
}
