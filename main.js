var electron = require("electron");
var path = require("path");
var url = require("url");
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var mainWindow;
function createWindow () {
  mainWindow = new BrowserWindow({width: 500, height: 500});
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, "/app/index.html"),
    protocol: "file",
    slashes: true
  }))
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
};
app.on("ready", createWindow);
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", function () {
  if (mainWindow === null) {
    createWindow()
  }
});