const { ipcRenderer, contextBridge } = require('electron');

let saveData = (text) => {
    console.log("Inside Render");
    console.log(text);
    ipcRenderer.send("saveData", text);
}

let bridge = {
    saveData,
}

contextBridge.exposeInMainWorld("Bridge", bridge);

// document.getElementById('poll').addEventListener('click', function() {
//     onsole.log("ads");
//     const text = 'привіт світ';
//     ipcRenderer.send('save-file', text);
//   });
