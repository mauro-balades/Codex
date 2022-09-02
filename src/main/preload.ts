import { IpcRendererEvent } from "electron";

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electron', {
    ipcRenderer: {
      send(channel: string, args: unknown[]) {
          ipcRenderer.send(channel, args);
        },
        on(channel: string, func: (...args: unknown[]) => void) {
          const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
            func(...args);
          ipcRenderer.on(channel, subscription);
    
          return () => ipcRenderer.removeListener(channel, subscription);
        },
        once(channel: string, func: (...args: unknown[]) => void) {
          ipcRenderer.once(channel, (_event, ...args) => func(...args));
        },
    },
})