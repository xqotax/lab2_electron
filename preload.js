const { ipcRenderer } = require('electron');

window.electron = {
  ipcRenderer: ipcRenderer,
};