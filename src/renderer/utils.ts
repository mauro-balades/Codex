
import DEFAULT_ICON from "../../assets/svg/files/default.svg";

import DEFAULT_FOLDER_ICON from "../../assets/svg/folders/default.svg";

export const getIcon = (filename: string, isDir: boolean = true) => {

    if (isDir) {
        switch (filename) {

            default:
                return DEFAULT_FOLDER_ICON;
        }
    }

    let split = filename.split(".")
    let extension = split[split.length - 1]

    switch (extension) {

        default:
            return DEFAULT_ICON;
    }
}
