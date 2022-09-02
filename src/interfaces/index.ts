
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

export interface CodeTab {
    path: string;
    content: string;
}
