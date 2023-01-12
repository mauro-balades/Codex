import { Context, XCodeTab, XCodeTabWindow } from "interfaces/index";

export class TabPluginContext {
    public context: Context;

    public currentTabs;
    private setCurrentTabs;

    private currentWindows;
    private setCurrentWindows;

    constructor(props: {
            currentTabs: XCodeTab[],
            setCurrentTabs: (t: XCodeTab[]) => void,
            currentWindows: XCodeTabWindow[],
            setCurrentWindows: (w: XCodeTabWindow[]) => void,
        }) {

        this.currentTabs = props.currentTabs;
        this.setCurrentTabs = props.setCurrentTabs;

        this.currentWindows = props.currentWindows;
        this.setCurrentWindows = props.setCurrentWindows;
    }

    createWindowIfNoneExists() {
        if (this.currentWindows.length <= 0) {
            this.setCurrentWindows([
                {
                    ID: 1,
                    currentTab: 0,
                }
            ])
        }
    }

    createTabInstance(name: string = "") {
        let tab: XCodeTab = {
            context: {
                path: undefined,
                content: undefined,
                isFileTab: false,
                windowID: this.currentWindows.length == 0 ? 1 : (this.currentWindows.length)
            },
            component: undefined,
            name: name
        }

        return tab;
    }

    createNewTab(tab: XCodeTab) {
        this.createWindowIfNoneExists();
        this.setCurrentTabs((oldArray: XCodeTab[]) => {
            let win = this.currentWindows.find((x: XCodeTabWindow) => x.ID === tab.context.windowID) as XCodeTabWindow;
            win.currentTab = oldArray.length;

            tab.context.windowID = win.ID;
            tab.ID = oldArray.length;

            return [...oldArray, tab]
        });
    }
}

export class TabPlugin {
    registerPlugin(ctx: TabPluginContext) {
        throw Error("Tab plugin register has not been declared.");
    }
}
