import { Context } from "interfaces";
import FOLDER_DEFAULT from "../../../assets/svg/folder.svg";

import path from "path";

function getExtension(filename: string) {
    var ext = path.extname(filename||'').split('.');
    return ext[ext.length - 1];
}

export const getIcon = (filename: string, context: Context, isDir: boolean = false) => {

    if (isDir) {
        return FOLDER_DEFAULT;
    }

    let icons = context.config.icons.default;
    let icon_list = icons.icons;
    for (let icon of icon_list) {
        if ((icon.fileNames && icon.fileNames.indexOf(filename.toLowerCase()) != -1) ||
        (icon.fileExtensions && icon.fileExtensions.indexOf(getExtension(filename.toLowerCase())) != -1)) {
            return "codex://" + path.join(context.config.icons.full_path, "icons", icon.name + ".svg")
        }
    }

    return "codex://" + path.join(context.config.icons.full_path, "icons", icons.defaultIcon.name + ".svg")
}
