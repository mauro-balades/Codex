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
    path: string;
    content: string;
    isFileTab: boolean;
}

export interface XCodeTab {
    name: string;
    context: TabContext;
    component: React.Component | undefined;
}
