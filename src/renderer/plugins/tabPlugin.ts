import { Context, XCodeTab } from "interfaces/index";

export class TabPluginContext {
    public context: Context;

    private tabIndex;
    private setTabIndex;

    public currentTabs;
    private setCurrentTabs;

    constructor(props: any) {
        this.tabIndex = props.tabIndex;
        this.setTabIndex = props.setTabIndex;
        this.currentTabs = props.currentTabs;
        this.setCurrentTabs = props.setCurrentTabs;
    }

    createTabInstance(name: string = "") {
        let tab: XCodeTab = {
            context: {
                path: undefined,
                content: undefined,
                isFileTab: false,
            },
            component: undefined,
            name: name
        }

        return tab;
    }

    createNewTab(tab: XCodeTab) {
        this.setCurrentTabs((oldArray: any) => {
            this.setTabIndex(oldArray.length);
            return [...oldArray, tab]
        });
    }
}

export class TabPlugin {
    registerPlugin(ctx: TabPluginContext) {
        throw Error("Tab plugin register has not been declared.");
    }
}
