import { MainContent, TabsContainer, NavigationButton, TopNav, WorkPlaceTitle, CodeWrapper } from "./styles"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useRef, useState } from "react";
import { getIcon } from "renderer/utils";

import CLOSE_ICON from "../../../../assets/svg/close.svg";
import React, { Component } from "react";
import ContextProvider from "renderer/context";
import path from "path";
import { useEffect } from "react";
import { CLIENT_CREATE_TAB } from "constants/ipc";
import { XCodeTab, Context } from "interfaces";
import createReactClass from 'create-react-class';
import Editor from "./editor";

export default (props: any) => {

    const {currentTabs, setCurrentTabs, tabIndex, setTabIndex} = props;
    let context: Context = React.useContext(ContextProvider);

    useEffect(() => {
        window.electron.ipcRenderer.on(CLIENT_CREATE_TAB, (tab: any) => {

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

            // @ts-ignore
            setCurrentTabs((oldArray: any) => {
                console.log(oldArray.length)
                setTabIndex(oldArray.length);
                return [...oldArray, tab as XCodeTab]
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
                            currentTabs.map((tab: XCodeTab) => (
                                <Tab>
                                    <img src={getIcon(tab.name, context)} alt="" />
                                    <span>{tab.name}</span>
                                    <img src={CLOSE_ICON} alt="" />
                                </Tab>
                            ))
                        }
                    </TabList>
                </TabsContainer>
                {
                    currentTabs.map((tab: any) => (
                        <TabPanel>
                            <tab.component />
                        </TabPanel>
                    ))
                }
            </Tabs>
        </MainContent>
    )
}
