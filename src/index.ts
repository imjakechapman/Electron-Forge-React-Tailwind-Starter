import { app, BrowserWindow } from "electron";

// Window Views
declare const MAIN_WINDOW_WEBPACK_ENTRY: any;
declare const SPLASH_WINDOW_WEBPACK_ENTRY: any;

// Make sure only one instance is running of the app
const instanceLock = app.requestSingleInstanceLock();

if (!instanceLock) {
  app.exit(0);
}

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

// Windows
let SplashWindow: BrowserWindow;
let ApplicationWindow: BrowserWindow;

const initApplicationWindow = (): void => {
  ApplicationWindow = new BrowserWindow({
    height: 768,
    width: 1200,
    minHeight: 768,
    minWidth: 1200,
    alwaysOnTop: false,
    show: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  ApplicationWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  ApplicationWindow.webContents.on("did-finish-load", () => {
    ApplicationWindow.show();
    // ApplicationWindow.webContents.openDevTools();
  });

  ApplicationWindow.on("close", () => {
    ApplicationWindow = null;
  });
};

const initSplashWindow = (): void => {
  SplashWindow = new BrowserWindow({
    width: 300,
    height: 300,
    minHeight: 300,
    minWidth: 300,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Load Splash Window View
  SplashWindow.loadURL(SPLASH_WINDOW_WEBPACK_ENTRY);
  SplashWindow.show();

  SplashWindow.once("close", () => {
    SplashWindow = null;
  });

  SplashWindow.webContents.once("did-finish-load", () => {
    SplashWindow.close();
    initApplicationWindow();
  });
};

// Electron Application Listeners

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", initSplashWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    initApplicationWindow();
  }
});
