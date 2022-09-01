import { MainContent, TabsContainer } from "./styles"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default () => {

    return (
        <MainContent>
            <Tabs>
                <TabsContainer>
                    <TabList>
                        <Tab>Title 1</Tab>
                        <Tab>Title 2</Tab>
                    </TabList>
                </TabsContainer>
                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </MainContent>
    )
}
