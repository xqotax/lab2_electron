const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');
const fs = require('fs');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 700,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload1.js'),
    }
  });
  win.setMenu(null)
  win.loadFile('index.html');
  win.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on('saveData', (event, fileContent) => {
  console.log("Inside Main");
  console.log(fileContent);
  const currentDate = new Date();
  const fileName = currentDate.toISOString().slice(0, 10) + ".txt";
  const filePath = path.join(__dirname, 'js/save', fileName); 
  fs.writeFileSync(filePath, fileContent);
});


