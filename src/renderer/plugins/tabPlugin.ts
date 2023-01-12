import { Context, XCodeTab, XCodeTabWindow } from "interfaces/index";

export class TabPluginContext {
    public context: Context;

    private tabIndex;
    private setTabIndex;

    public currentTabs;
    private setCurrentTabs;

    private currentWindows;
    private setCurrentWindows;

    constructor(props: {
            tabIndex: number,
            setTabIndex: (i: number) => void,
            currentTabs: XCodeTab[],
            setCurrentTabs: (t: XCodeTab[]) => void,
            currentWindows: XCodeTabWindow[],
            setCurrentWindows: (w: XCodeTabWindow[]) => void,
        }) {

        this.tabIndex = props.tabIndex;
        this.setTabIndex = props.setTabIndex;
        this.currentTabs = props.currentTabs;
        this.setCurrentTabs = props.setCurrentTabs;

        this.currentWindows = props.currentWindows;
        this.setCurrentWindows = props.setCurrentWindows;
    }

    createWindowIfNoneExists() {
        if (this.currentWindows.length === 0) {
            this.setCurrentWindows([
                {
                    ID: 1
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
                windowID: this.currentWindows.length == 0 ? 1 : (this.currentWindows.length-1)
            },
            component: undefined,
            name: name
        }

        return tab;
    }

    createNewTab(tab: XCodeTab) {
        this.createWindowIfNoneExists();

        this.setCurrentTabs((oldArray: any) => {
            this.setTabIndex(oldArray.length);
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
