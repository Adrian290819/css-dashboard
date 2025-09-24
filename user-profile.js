// user-profile.js

/**
 * Default profil pengguna
 */
const DEFAULT_PROFILE = {
    name: 'Nama Masing Masing',
    role: 'Customer Service Support',
    image: 'https://iili.io/Fpiva7S.png'
};

/**
 * Mendapatkan data profil dari Firestore atau localStorage sebagai fallback
 * @returns {Promise<Object>} - Objek profil pengguna
 */
async function getUserProfile() {
    try {
        // Cek apakah Firebase tersedia
        if (typeof firebase !== 'undefined' && firebase.auth().currentUser) {
            const user = firebase.auth().currentUser;
            const doc = await firebase.firestore().collection('users').doc(user.uid).get();
            
            if (doc.exists) {
                const profile = doc.data();
                // Simpan juga ke localStorage sebagai cache
                localStorage.setItem('adminName', profile.name || DEFAULT_PROFILE.name);
                localStorage.setItem('adminRole', profile.role || DEFAULT_PROFILE.role);
                localStorage.setItem('adminProfileImage', profile.image || DEFAULT_PROFILE.image);
                return profile;
            }
        }
    } catch (error) {
        console.error('Error getting profile from Firestore:', error);
    }
    
    // Fallback ke localStorage jika Firestore gagal
    return getUserProfileFromStorage();
}

/**
 * Mendapatkan data profil dari localStorage (fallback)
 * @returns {Object} - Objek profil pengguna
 */
function getUserProfileFromStorage() {
    return {
        name: localStorage.getItem('adminName') || DEFAULT_PROFILE.name,
        role: localStorage.getItem('adminRole') || DEFAULT_PROFILE.role,
        image: localStorage.getItem('adminProfileImage') || DEFAULT_PROFILE.image
    };
}

/**
 * Memperbarui profil di Firestore
 * @param {Object} profile - Objek berisi nama, peran, dan URL gambar
 * @returns {Promise<boolean>} - Berhasil atau tidak
 */
async function updateProfileInFirestore(profile) {
    try {
        if (typeof firebase !== 'undefined' && firebase.auth().currentUser) {
            const user = firebase.auth().currentUser;
            await firebase.firestore().collection('users').doc(user.uid).set({
                name: profile.name,
                role: profile.role,
                image: profile.image,
                lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
            }, { merge: true });
            return true;
        }
    } catch (error) {
        console.error('Error updating profile in Firestore:', error);
    }
    return false;
}

/**
 * Memperbarui elemen profil di halaman
 * @param {Object} profile - Objek berisi nama, peran, dan URL gambar
 */
function updateProfileElements(profile) {
    const { name, role, image } = profile;

    // Update gambar profil
    document.querySelectorAll('.user-profile img, .profile-img').forEach(img => {
        if (img) {
            img.src = image;
            img.alt = `${name} Profile`;
        }
    });

    // Update nama pengguna
    document.querySelectorAll('.user-info h4, .profile-name').forEach(el => {
        if (el) {
            el.textContent = name;
        }
    });

    // Update peran pengguna
    document.querySelectorAll('.user-info p, .profile-role').forEach(el => {
        if (el) {
            el.textContent = role;
        }
    });
}

/**
 * Memuat dan menampilkan profil pengguna
 */
async function loadUserProfile() {
    const profile = await getUserProfile();
    updateProfileElements(profile);
}

/**
 * Setup listener untuk perubahan data di Firestore dan localStorage
 */
function setupProfileChangeListener() {
    // Setup Firestore real-time listener jika tersedia
    if (typeof firebase !== 'undefined') {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // Listen for real-time updates from Firestore
                firebase.firestore().collection('users').doc(user.uid).onSnapshot((doc) => {
                    if (doc.exists) {
                        const profile = doc.data();
                        updateProfileElements(profile);
                        
                        // Update localStorage sebagai cache
                        localStorage.setItem('adminName', profile.name || DEFAULT_PROFILE.name);
                        localStorage.setItem('adminRole', profile.role || DEFAULT_PROFILE.role);
                        localStorage.setItem('adminProfileImage', profile.image || DEFAULT_PROFILE.image);
                    }
                });
            }
        });
    }
    
    // Tetap pertahankan localStorage listener sebagai fallback
    window.addEventListener('storage', (e) => {
        const keysToWatch = ['adminName', 'adminRole', 'adminProfileImage'];
        if (keysToWatch.includes(e.key)) {
            loadUserProfile();
        }
    });
}

// Inisialisasi saat DOM siap
document.addEventListener('DOMContentLoaded', () => {
    // Tunggu Firebase siap jika tersedia
    if (typeof firebase !== 'undefined') {
        firebase.auth().onAuthStateChanged(() => {
            loadUserProfile();
            setupProfileChangeListener();
        });
    } else {
        // Jika Firebase tidak tersedia, gunakan localStorage saja
        loadUserProfile();
        setupProfileChangeListener();
    }
});

// Export fungsi untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getUserProfile,
        updateProfileInFirestore,
        updateProfileElements,
        loadUserProfile,
        setupProfileChangeListener
    };
}
/**
 * Menambahkan event listener untuk mengalihkan ke halaman pengaturan ketika profil diklik
 */
function setupProfileClickHandler() {
    // Cari semua elemen profil yang bisa diklik
    const profileElements = document.querySelectorAll('.user-profile, .profile-picture, .profile-img-container');
    
    profileElements.forEach(element => {
        element.style.cursor = 'pointer';
        element.addEventListener('click', function(e) {
            // Cegah event bubbling jika perlu
            e.stopPropagation();
            
            // Redirect ke halaman pengaturan
            window.location.href = 'pengaturan.html';
        });
    });
    
    // Juga tambahkan handler untuk gambar profil di header
    const profileImage = document.querySelector('.user-profile img');
    const userInfo = document.querySelector('.user-info');
    
    if (profileImage) {
        profileImage.style.cursor = 'pointer';
        profileImage.addEventListener('click', function(e) {
            e.stopPropagation();
            window.location.href = 'pengaturan.html';
        });
    }
    
    if (userInfo) {
        userInfo.style.cursor = 'pointer';
        userInfo.addEventListener('click', function(e) {
            e.stopPropagation();
            window.location.href = 'pengaturan.html';
        });
    }
}

// Panggil fungsi setup dalam event DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // ... kode yang sudah ada ...
    
    // Tambahkan handler klik profil
    setupProfileClickHandler();
});

// Jika menggunakan modul, export fungsi tambahan
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        // ... ekspor yang sudah ada ...
        setupProfileClickHandler
    };
}
