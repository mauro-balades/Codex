import { MainContent, TabsContainer, NavigationButton, TopNav, WorkPlaceTitle, CodeWrapper, TabContainerList, TabWindow, TabWindowWrapper } from "./styles"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useRef, useState } from "react";
import { getIcon } from "renderer/utils";

import CLOSE_ICON from "../../../../assets/svg/close.svg";
import React, { Component } from "react";
import ContextProvider from "renderer/context";
import path from "path";
import { useEffect } from "react";
import { CLIENT_CREATE_TAB } from "constants/ipc";
import { XCodeTab, Context, XCodeTabWindow } from "interfaces";
import createReactClass from 'create-react-class';
import Editor from "./editor";
import { TabPluginContext } from "renderer/plugins/tabPlugin";

export default (props: any) => {

    const {currentTabs, setCurrentTabs, tabIndex, setTabIndex, currentWindows, setCurrentWindows} = props;
    let context: Context = React.useContext(ContextProvider);
    let pluginsManager = new TabPluginContext(props);

    useEffect(() => {
        window.electron.ipcRenderer.on(CLIENT_CREATE_TAB, (tab: any) => {

            tab.context.windowID = tab.context.windowID || (currentWindows.length == 0 ? 1 : (currentWindows.length-1))
            console.log(tab.context.windowID)

            if (tab.context.isFileTab) {
                    // @ts-ignroe
                    tab.component = createReactClass({
                        render: function() {return (
                        <CodeWrapper>
                            <Editor tab={tab} />
                        </CodeWrapper>
                    )}
                })
            }

            pluginsManager.createWindowIfNoneExists();
            setCurrentTabs((oldArray: any) => {
                console.log(oldArray.length)

                tab.ID = oldArray.length;
                setTabIndex(oldArray.length);

                return [...oldArray, tab as XCodeTab]
            })
        })
    }, []);

    const closeTabByID = (ID: number) => {
        setCurrentTabs((oldArray: any) => {
            setTabIndex(oldArray.length-1);
            return oldArray.filter((item: XCodeTab) => !(item.ID == ID));
        })
    }

    return (
        <MainContent>
            {/* <TopNav> */}
                {/* <WorkPlaceTitle>
                    {path.basename(context.workplace)}-main
                </WorkPlaceTitle> */}
            {/* </TopNav> */}
            <TabWindowWrapper>
            {
                currentWindows.map((win: XCodeTabWindow) => (
                    <TabWindow>
                        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                            <TabsContainer>
                                <NavigationButton>
                                    <svg height="25" width="25" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                </NavigationButton>
                                <NavigationButton>
                                    <svg height="25" width="25" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </NavigationButton>
                                <TabContainerList>
                                    <TabList>
                                        {
                                            currentTabs.map((tab: XCodeTab) => {console.log(tab.context.windowID); return tab.context.windowID === win.ID ? (
                                                <Tab>
                                                    <img src={getIcon(tab.name, context)} alt="" />
                                                    <span>{tab.name}</span>
                                                    <img onClick={() => closeTabByID(tab.ID)} src={CLOSE_ICON} alt="" />
                                                </Tab>
                                            ) : null})
                                        }
                                    </TabList>
                                </TabContainerList>
                            </TabsContainer>
                            {
                                currentTabs.map((tab: any) => tab.context.windowID === win.ID ? (
                                    <TabPanel>
                                        <tab.component />
                                    </TabPanel>
                                ) : null)
                            }
                        </Tabs>
                    </TabWindow>
                ))
            }
            </TabWindowWrapper>
        </MainContent>
    )
}
