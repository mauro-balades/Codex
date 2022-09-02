import { resolveHtmlPath } from "./utils";

import {ipcMain, BrowserWindow, app} from 'electron';
import { CONTEXT_FETCH, CONTEXT_FETCH_CB } from '../constants/ipc';

const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow: BrowserWindow | null;
var context = {
    workspace: ""
};

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800, height: 600,
        webPreferences: {
            nodeIntegration: true,
            preload: app.isPackaged ? path.join(__dirname, 'preload.js')
                : path.join(__dirname, '../../dll/preload.js')
        }
    });

    // and load the index.html of the app.
    mainWindow.loadURL(resolveHtmlPath('index.html'));

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })

    ipcMain.on('set-title', (event, title) => {
        const webContents = event.sender
        const win = BrowserWindow.fromWebContents(webContents)
        win?.setTitle(title)
    })

    // TODO
    context.workspace = "./"

    ipcMain.on(CONTEXT_FETCH, (event) => {
        console.log(CONTEXT_FETCH_CB)
        event.sender.send(CONTEXT_FETCH_CB, context)
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
});
