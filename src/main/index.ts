import { app, BrowserWindow, globalShortcut } from 'electron';
import glasstron from 'glasstron';
import path from 'path';
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit();
}

app.commandLine.appendSwitch('enable-transparent-visuals');

const createWindow = (): void => {
  // Create the browser window.
  const mainWindow = new glasstron.BrowserWindow({
    width: 1024,
    height: 410,
    minWidth: 300,
    minHeight: 410,
    backgroundColor: '#00000000',
    transparent: true,
    frame: false,
    blur: true,
    icon: path.join(__dirname, '../assets', 'app.icns'),
    blurType: 'blurbehind',
    blurGnomeSigma: 100,
    blurCornerRadius: 40,
    vibrancy: 'fullscreen-ui',
    webPreferences: {
      // enableRemoteModule: true,
      // webSecurity: false,
      nodeIntegration: true,
      nodeIntegrationInWorker: true
    }
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.setVisibleOnAllWorkspaces(true);

  const keybind = 'Control+Space';
  const ret = globalShortcut.register(keybind, () => {
    console.log('mainWindow.isVisible', mainWindow.isVisible());
    // console.log(`${keybind} is pressed`);
    if (mainWindow.isVisible()) {
      mainWindow.hide();
    } else {
      mainWindow.show();
    }
  });

  if (!ret) {
    console.log('registration failed');
  }
  // Open the DevTools.
  //   mainWindow.webContents.openDevTools();
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
