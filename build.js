const fs = require('fs');
const path = require('path');

// Target output file json di root direktori agar bisa dibaca index.html
const OUTPUT_FILE = path.join(__dirname, 'app-config.json');

// KONFIGURASI APLIKASI ANDA
// Cukup ubah bagian ini saat ada pembaruan APK / rilis versi baru di GitHub
const appConfig = {
    version: "1.0.1",
    minAndroid: "5.0+",
    downloadUrl: "https://github.com/13011976h/download/releases/download/v1.0.1/cermis.audio.v1.0.1.apk"
};

function generateConfig() {
    console.log("Menghasilkan file konfigurasi aplikasi statis...");
    
    try {
        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(appConfig, null, 2), 'utf8');
        console.log(`\n✓ Sukses! File dibuat di: ${OUTPUT_FILE}`);
        console.log(`Versi Terdaftar: ${appConfig.version}`);
        console.log("Siap di-push ke GitHub untuk auto-deploy di Cloudflare Pages!");
    } catch (error) {
        console.error("Gagal membuat file konfigurasi:", error);
    }
}

generateConfig();