import { app, globalShortcut } from 'electron';
import isDev from 'electron-is-dev';
import { BrowserWindow } from 'glasstron';
import path from 'path';

app.dock?.hide();

let mainWindow: BrowserWindow;

async function createWindow() {
  app.dock?.hide();
  mainWindow = new BrowserWindow({
    width: 583,
    height: 352,
    minWidth: 300,
    minHeight: 410,
    backgroundColor: '#00000000',
    transparent: true,
    frame: false,
    blur: true,
    icon: path.join(__dirname, './assets', 'app.icns'),
    blurType: 'blurbehind',
    blurGnomeSigma: 100,
    blurCornerRadius: 40,
    vibrancy: 'fullscreen-ui',
    show: false,
    skipTaskbar: true
  });
  app.dock?.hide();

  mainWindow.setVisibleOnAllWorkspaces(true);

  if (isDev) {
    mainWindow.loadURL('http://localhost:3000/index.html');
    const { default: installDevtools, REACT_DEVELOPER_TOOLS } = await import(
      'electron-devtools-installer'
    );

    await installDevtools(REACT_DEVELOPER_TOOLS.id);
  } else {
    mainWindow.loadURL(`file://${__dirname}/../index.html`);
  }

  mainWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
}

const keybind = 'Control+Space';

app.on('ready', () => {
  const ret = globalShortcut.register(keybind, async () => {
    if (!mainWindow || mainWindow.isDestroyed()) await createWindow();

    const focused = BrowserWindow.getFocusedWindow() === mainWindow;
    const visible = mainWindow.isVisible();

    if (visible && focused) mainWindow.hide();
    else mainWindow!.show();
  });
  if (!ret) console.log('registration failed');
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
