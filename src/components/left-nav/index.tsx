import { Wrapper, TabsContainer, Panels } from "./styles"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default () => {

    return (
        <Wrapper>
            <TabsContainer>
                <Tabs>
                    <TabList>
                        <Tab>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                        </Tab>
                    </TabList>
                    <Panels>
                        <TabPanel>
                            HOLA
                        </TabPanel>
                    </Panels>
                </Tabs>
            </TabsContainer>
        </Wrapper>
    )
}
