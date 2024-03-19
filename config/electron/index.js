const { app, BrowserWindow } = require("electron");
const path = require("path");
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "#ffffff",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  });

  win.loadFile(path.join(__dirname, "..", "..", "dist", "index.html"));
};

require("electron-reload")(path.join(__dirname, "..", ".."), {
  electron: path.join(__dirname, "..", "..", "node_modules", ".bin", "electron"),
});

app.whenReady().then(() => {
  createWindow();
});