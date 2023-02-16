import { MainContent, TabsContainer, NavigationButton, TopNav, WorkPlaceTitle, CodeWrapper, TabContainerList, TabWindow, TabWindowWrapper, DraggedTabPreview } from "./styles"
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
import Editor from "./editors/default";
import { TabPluginContext } from "renderer/plugins/tabPlugin";

import { getTabPosition, TabPosition } from "./getTabPosition";
import { useForceUpdate } from "../../utils/forceUpdate";

export default (props: any) => {
    const forceUpdate = useForceUpdate();

    const {currentTabs, setCurrentTabs, currentWindows, setCurrentWindows} = props;
    let context: Context = React.useContext(ContextProvider);
    let pluginsManager = new TabPluginContext(props);

    let tabWindowParent = useRef(null);
    let tabPreview = useRef(null);

    useEffect(() => {
        window.electron.ipcRenderer.on(CLIENT_CREATE_TAB, (tab: any) => {

            tab.context.windowID = tab.context.windowID || (currentWindows.length == 0 ? 1 : (currentWindows.length))

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

            let win = currentWindows.find((x: XCodeTabWindow) => x.ID === tab.context.windowID) as XCodeTabWindow;

            setCurrentTabs((oldArray: any) => {

                tab.ID = oldArray.length;
                win.currentTab = oldArray.length;

                return [...oldArray, tab as XCodeTab]
            })
        })
    }, []);

    const closeTabByID = (ID: number) => {
        setCurrentTabs((oldArray: any) => {
            let tab = currentTabs.find((item: XCodeTab) => item.ID == ID);
            let win = currentWindows.find((x: XCodeTabWindow) => x.ID === tab.context.windowID);
            win.currentTab = oldArray.length-1;

            return oldArray.filter((item: XCodeTab) => !(item.ID == ID));
        })
    }

    const onTabDrag = (e: any) => {

        const addTabClass = (el: HTMLElement, active: string, remove1: string, remove2: string) => {
            el.classList.add(active);
            el.classList.add("active");

            el.classList.remove(remove1);
            el.classList.remove(remove2);
        }

        let bounds = (tabWindowParent.current as unknown as HTMLElement).getBoundingClientRect();
        let x = e.clientX - bounds.left;
        let y = e.clientY - bounds.top;

        e.target.classList.add("drag");

        let parent_width = bounds.width;
        let preview = tabPreview.current as unknown as HTMLElement;

        let pos = getTabPosition(parent_width, x, y);
        if (pos === TabPosition.left) {
            addTabClass(preview, "left", "right", "middle");
        } else if (pos === TabPosition.right) {
            addTabClass(preview, "right", "left", "middle");
        } else if (pos === TabPosition.center) {
            addTabClass(preview, "middle", "left", "right");
        } else {
            // noop
        }
    }

    const onTabDragEnd = (e: any, tab: XCodeTab) => {
        let preview = tabPreview.current as unknown as HTMLElement;

        preview.classList.remove("middle");
        preview.classList.remove("left");
        preview.classList.remove("right");

        preview.classList.remove("active");
        e.target.classList.remove("drag");

        let bounds = (tabWindowParent.current as unknown as HTMLElement).getBoundingClientRect();
        let x = e.clientX - bounds.left;
        let y = e.clientY - bounds.top;

        e.target.classList.add("drag");

        let parent_width = bounds.width;

        let pos = getTabPosition(parent_width, x, y);

        let win = currentWindows.find((x: XCodeTabWindow) => x.ID === tab.context.windowID) as XCodeTabWindow;
        let winTabLen = currentTabs.filter((x: XCodeTab) => x.context.windowID === win.ID).length - 1;

        let newID = currentWindows.length + 1;
        tab.context.windowID = newID;

        win.currentTab--;
        let newTabWin: XCodeTabWindow = {
            ID: newID,
            currentTab: 0,
        };

        if (pos === TabPosition.left) {
            setCurrentWindows((prevState: XCodeTabWindow[]) => [
                newTabWin,
                ...((winTabLen === 0) ? prevState.filter((x: XCodeTabWindow) => x.ID != win.ID)  : prevState)
            ])
        } else if (pos === TabPosition.right) {

            setCurrentWindows((prevState: XCodeTabWindow[]) => [
                ...((winTabLen === 0) ? prevState.filter((x: XCodeTabWindow) => x.ID != win.ID) : prevState),
                newTabWin,
            ])
        } else if (pos === TabPosition.center) {
            // TODO
            // addTabClass(preview, "middle", "left", "right");
        } else {
            // noop
        }
    }

    return (
        <MainContent>
            {/* <TopNav> */}
                {/* <WorkPlaceTitle>
                    {path.basename(context.workplace)}-main
                </WorkPlaceTitle> */}
            {/* </TopNav> */}
            <TabWindowWrapper ref={tabWindowParent}>
                <>
                    <DraggedTabPreview ref={tabPreview}></DraggedTabPreview>
                   {
                        currentWindows.map((win: XCodeTabWindow) => (
                            <TabWindow>
                                <Tabs selectedIndex={win.currentTab} onSelect={(index) => {win.currentTab = index; forceUpdate()}}>
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
                                                    currentTabs.map((tab: XCodeTab) => tab.context.windowID === win.ID ? (
                                                        <Tab
                                                            draggable="true"
                                                            onDrag={onTabDrag}
                                                            onDragEnd={(e) => onTabDragEnd(e, tab)}>
                                                            <img src={getIcon(tab.name, context)} alt="" />
                                                            <span>{tab.name}</span>
                                                            <img onClick={() => closeTabByID(tab.ID)} src={CLOSE_ICON} alt="Close" />
                                                        </Tab>
                                                    ) : null)
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
                </>
            </TabWindowWrapper>
        </MainContent>
    )
}
