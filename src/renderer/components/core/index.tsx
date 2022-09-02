import { MainContent, TabsContainer, NavigationButton, TopNav, WorkPlaceTitle } from "./styles"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useRef, useState } from "react";
import { getIcon } from "renderer/utils";

import CLOSE_ICON from "../../../../assets/svg/close.svg";
import React from "react";
import ContextProvider from "renderer/context";
import path from "path";
import { useEffect } from "react";
import { CLIENT_CREATE_TAB } from "constants/ipc";
import { CodeTab } from "interfaces";

import Editor, { loader } from "@monaco-editor/react";

loader.config({
    paths: {
      vs: '/monaco-editor/min/vs'
    }
});

export default (props: any) => {

    const [currentTabs, setCurrentTabs] = useState([] as Array<CodeTab>);
    const editorRef = useRef(null);

    let context: any = React.useContext(ContextProvider);

    useEffect(() => {
        window.electron.ipcRenderer.on(CLIENT_CREATE_TAB, (tab: any) => {

            // @ts-ignore
            setCurrentTabs((oldArray: any) => [...oldArray, tab as CodeTab])
        })
    }, [])

    function handleEditorDidMount(editor: any, monaco: any) {
        editorRef.current = editor;
    }


    return (
        <MainContent>
            <TopNav>
                <WorkPlaceTitle>
                    {path.basename(context.workplace)}-main
                </WorkPlaceTitle>
            </TopNav>
            <Tabs>
                <TabsContainer>
                    <NavigationButton>
                        <svg height="25" width="25" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </NavigationButton>
                    <NavigationButton>
                        <svg height="25" width="25" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </NavigationButton>
                    <TabList>
                        {
                            currentTabs.map((tab: CodeTab) => (
                                <Tab>
                                    <img src={getIcon(path.basename(tab.path), context)} alt="" />
                                    <span>{path.basename(tab.path)}</span>
                                    <img src={CLOSE_ICON} alt="" />
                                </Tab>
                            ))
                        }
                    </TabList>
                </TabsContainer>
                {
                    currentTabs.map((tab: CodeTab) => (
                        <TabPanel>
                            <Editor
                                defaultLanguage="json"
                                defaultValue={tab.content}
                                onMount={handleEditorDidMount}
                            />
                        </TabPanel>
                    ))
                }
            </Tabs>
        </MainContent>
    )
}
