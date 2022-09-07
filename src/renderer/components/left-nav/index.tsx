import { Wrapper, TabsContainer, Panels, TopNav } from "./styles"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Explorer from "./panels/explorer";
import { DebugEmpty, DebugFull, FolderEmpty, FolderFull, PlayEmpty, PluginsEmpty, PluginStoreEmpty, SearchIcon, SettingsEmpty, SettingsFull, VersionControl } from "renderer/icons";

export default (props: any) => {

    return (
        <Wrapper>
            <TopNav></TopNav>
            <TabsContainer>
                <Tabs>
                    <TabList>
                        <Tab>
                            <FolderFull className="medium active" />
                            <FolderEmpty className="medium default" />
                        </Tab>
                        <Tab>
                            <SearchIcon />
                        </Tab>
                        <Tab>
                            <DebugFull className="medium active" />
                            <DebugEmpty className="medium default" />
                        </Tab>
                        <Tab>
                            <VersionControl className="large" />
                        </Tab>
                        <Tab>
                            <PlayEmpty />
                        </Tab>
                        <Tab>
                            <PluginStoreEmpty className="medium" />
                        </Tab>
                        <Tab>
                            <PluginsEmpty />
                        </Tab>
                        <Tab>
                            <SettingsEmpty className="large default" />
                            <SettingsFull className="large active" />
                        </Tab>
                    </TabList>
                    <Panels>
                        <TabPanel>
                            <Explorer {...props} />
                        </TabPanel>
                        <TabPanel>
                        TODO
                        </TabPanel>
                        <TabPanel>
                        TODO
                        </TabPanel>
                        <TabPanel>
                        TODO
                        </TabPanel>
                        <TabPanel>
                        TODO
                        </TabPanel>
                        <TabPanel>
                        TODO
                        </TabPanel>
                        <TabPanel>
                        TODO
                        </TabPanel>
                    </Panels>
                </Tabs>
            </TabsContainer>
        </Wrapper>
    )
}
