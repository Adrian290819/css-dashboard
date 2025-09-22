// i18n.js
const translations = {
    id: {
        admin_settings: "Pengaturan Admin",
        save_changes: "Simpan Perubahan",
        // tambahkan key lain sesuai kebutuhan
    },
    en: {
        admin_settings: "Admin Settings",
        save_changes: "Save Changes",
    },
    cn: {
        admin_settings: "管理员设置",
        save_changes: "保存更改",
    }
};

function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}
