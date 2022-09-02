import { app } from "electron";
import path from "path";
import fs from "fs";
import fs_extra from "fs-extra";
import { Context } from "interfaces";

const DEFAULT_CONFIG = {
    iconsID: "1",
    themeID: "1"
}

export const getConfigFle = (): string => path.join(app.getPath("userData"), "config.json");
export function installDefaultPlugins() {
    let plugins_path = path.join(app.getPath("userData"), "plugins");

    if (!fs.existsSync(plugins_path)) {
        fs.mkdirSync(plugins_path);

        let icons = path.join(plugins_path, "icons");
        fs.mkdirSync(icons, { recursive: true });

        let icon_resources = path.join(path.dirname(__dirname), 'extraResources', "icons");
        fs_extra.copy(icon_resources, path.join(icons, "1"), ( (err) => {
            if (err) throw err;
            console.log('Icons has been succesfully installed to ' + icons);
        }));

        let extensions = path.join(plugins_path, "extensions");
        fs.mkdirSync(extensions, { recursive: true });

    }

    let json_config = getConfigFle();
    if (!fs.existsSync(json_config)) {
        fs.appendFile(json_config, JSON.stringify(DEFAULT_CONFIG), (err) => {
            if (err) throw err;
            console.log('configuration written to ' + json_config);
        })
    }
}

export function getSettings() {
    return JSON.parse(fs.readFileSync(getConfigFle()));
}

export function getIconPack(context: Context) {
    let id = context.config.settings.themeID;

    let plugins_path = path.join(app.getPath("userData"), "plugins");
    let icons = path.join(plugins_path, "icons", id);

    return require(path.join(icons, "index.js"));
}
