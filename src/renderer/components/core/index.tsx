import { MainContent, TabsContainer, NavigationButton } from "./styles"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from "react";
import { getIcon } from "renderer/utils";

import CLOSE_ICON from "../../../../assets/svg/close.svg";

export default () => {

    const [currentTabs, setCurrentTabs] = useState([]);

    return (
        <MainContent>
            <Tabs>
                <TabsContainer>
                    <NavigationButton>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5 4L7 11.5L14.5 19" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </NavigationButton>
                    <NavigationButton>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 4L16.5 11.5L9 19" stroke="#1B1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </NavigationButton>
                    <TabList>
                        {
                            currentTabs.map(filename => (
                                <Tab>
                                    <img src={getIcon(filename)} alt="" />
                                    <span>{filename}</span>
                                    <img src={CLOSE_ICON} alt="" />
                                </Tab>
                            ))
                        }
                    </TabList>
                </TabsContainer>
                <TabPanel>
                    Any content 1
                </TabPanel>
            </Tabs>
        </MainContent>
    )
}
