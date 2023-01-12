import { FOLDER_CONTENT } from "constants/ipc";
import { FileInformation } from "interfaces";

export async function callFolder({folder}: any): Promise<FileInformation[]> {
    return await window.electron.ipcRenderer.invoke(FOLDER_CONTENT, folder as string);
}