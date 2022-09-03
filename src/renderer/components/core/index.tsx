import { MainContent, TabsContainer, NavigationButton, TopNav, WorkPlaceTitle, CodeWrapper } from "./styles"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useRef, useState } from "react";
import { getIcon } from "renderer/utils";

import CLOSE_ICON from "../../../../assets/svg/close.svg";
import React from "react";
import ContextProvider from "renderer/context";
import path from "path";
import { useEffect } from "react";
import { CLIENT_CREATE_TAB } from "constants/ipc";
import { CodeTab, Context } from "interfaces";

import Editor from "./editor";

export default (props: any) => {

    const [currentTabs, setCurrentTabs] = useState([] as Array<CodeTab>);
    const [tabIndex, setTabIndex] = useState(0);

    let context: Context = React.useContext(ContextProvider);

    useEffect(() => {
        window.electron.ipcRenderer.on(CLIENT_CREATE_TAB, (tab: any) => {

            // @ts-ignore
            setCurrentTabs((oldArray: any) => {
                console.log(oldArray.length)
                setTabIndex(oldArray.length);
                return [...oldArray, tab as CodeTab]
            })
        })
    }, []);

    return (
        <MainContent>
            <TopNav>
                <WorkPlaceTitle>
                    {path.basename(context.workplace)}-main
                </WorkPlaceTitle>
            </TopNav>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
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
                            <CodeWrapper>
                                <Editor tab={tab} />
                            </CodeWrapper>
                        </TabPanel>
                    ))
                }
            </Tabs>
        </MainContent>
    )
}
