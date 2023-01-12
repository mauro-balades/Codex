import { getFolderContent, resolveHtmlPath } from "./utils";

import {ipcMain, BrowserWindow, app, protocol} from 'electron';
import { CLIENT_CREATE_TAB, CONTEXT_FETCH, CONTEXT_FETCH_CB, FOLDER_CONTENT, SERVER_CREATE_TAB } from '../constants/ipc';
import { Context } from "interfaces/context";
import { XCodeTab, FileInformation } from "interfaces";
import { getIconPack, getSettings, installDefaultPlugins } from "./plugins";
import fs from "fs";

const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow: BrowserWindow | null;
var splash: BrowserWindow | null;
var context: Context = {
    workplace: "",
    correct: false,
    config: {
        icons: {},
        settings: {}
    }
};

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800, height: 600,
        show: false,
        transparent: true,
        frame: true,
        webPreferences: {
            nodeIntegration: true,
            preload: app.isPackaged ? path.join(__dirname, 'preload.js')
                : path.join(__dirname, '../../dll/preload.js')
        }
    });

    // and load the index.html of the app.

    splash = new BrowserWindow({width: 310, height: 410, frame: false, alwaysOnTop: true});
    console.log(__dirname)
    splash.loadURL(`file://${__dirname}/../splash/index.html`);

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

    // if main window is ready to show, then destroy the splash window and show up the main window
    mainWindow.once('ready-to-show', () => {
      splash.destroy();
      mainWindow.show();
    });


    ipcMain.on('set-title', (event, title) => {
        const webContents = event.sender
        const win = BrowserWindow.fromWebContents(webContents)
        win?.setTitle(title)
    })

    // TODO: move handlers to a different file
    ipcMain.on(CONTEXT_FETCH, (event) => {
        mainWindow?.webContents.send(CONTEXT_FETCH_CB, context)
    })

    ipcMain.on(SERVER_CREATE_TAB, (_, _path: string) => {
        let data = fs.readFileSync(_path, { encoding: 'utf8'});
        let tab: XCodeTab = {
            context: {
                path: _path,
                content: data,
                isFileTab: true,
            },
            component: undefined,
            name: path.basename(_path)
        }

        mainWindow?.webContents.send(CLIENT_CREATE_TAB, tab);
    })

    ipcMain.handle(FOLDER_CONTENT, async (_, folder): Promise<FileInformation[]> => {
        return await getFolderContent(folder);
    })

    protocol.registerFileProtocol('codex', (request, callback) => {
        console.log(request.url)
        const url = request.url.substr(7)
        callback({ path: url })
    })


    console.log(app.getPath("userData"))

    // Create default config if non exist
    installDefaultPlugins();

    context.workplace = process.cwd();
    context.config.settings = getSettings();
    context.config.icons = getIconPack(context);

    context.correct = true;
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

