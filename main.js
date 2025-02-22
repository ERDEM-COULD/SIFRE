const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    // Yeni bir pencere oluşturuyoruz
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // Uygulamanın HTML dosyasını yüklüyoruz
    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();

    // Tüm pencereler kapatıldığında uygulamayı kapat
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
