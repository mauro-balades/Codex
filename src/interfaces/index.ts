import React from "react";

export interface Context {
    workplace: string;
    correct: boolean;

    config: {
        icons: any;
        settings: any;
    };
}

export interface FileInformation {
    path: string;
    name: string;

    isDir: boolean;
}

export interface TabContext {
    path: string | undefined;
    content: string | undefined;
    isFileTab: boolean;
    windowID: number | undefined;
}

export interface XCodeTab {
    name: string;
    context: TabContext;
    component: React.Component | undefined;

    ID: number;
}

export interface XCodeTabWindow {
    ID: number;
    currentTab: number;
}
