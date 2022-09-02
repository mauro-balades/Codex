import { Wrapper, TabsContainer, Panels, TopNav } from "./styles"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Explorer from "./panels/explorer";

export default (props: any) => {

    return (
        <Wrapper>
            <TopNav></TopNav>
            <TabsContainer>
                <Tabs>
                    <TabList>
                        <Tab>
                            <svg className="svg-icon" fill="currentColor" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M960 238c0-26.6-18.8-46-45.6-46H397.8c-5.6 0-8.6-1.2-12.2-4.8l-45-45-0.4-0.4c-9.8-9.2-17.8-13.8-34.6-13.8H113.4C85.8 128 64 148.6 64 174v147.4c0 3.2 3.4 3 6 1.4s10-2.8 14-2.8h856c4 0 11.4 1.2 14 2.8 2.6 1.6 6 1.8 6-1.4V238zM64 832.8c0 35 28.4 63.2 63.2 63.2H896c35.2 0 64-28.8 64-64V408c0-17.6-14.4-32-32-32H96c-17.6 0-32 14.4-32 32v424.8z"  /></svg>
                        </Tab>
                        <Tab>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z"></path><path fill-rule="evenodd" d="M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z" clip-rule="evenodd"></path></svg>
                        </Tab>
                        <Tab>
                            <svg className="svg-icon" fill="currentColor" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M960 238c0-26.6-18.8-46-45.6-46H397.8c-5.6 0-8.6-1.2-12.2-4.8l-45-45-0.4-0.4c-9.8-9.2-17.8-13.8-34.6-13.8H113.4C85.8 128 64 148.6 64 174v147.4c0 3.2 3.4 3 6 1.4s10-2.8 14-2.8h856c4 0 11.4 1.2 14 2.8 2.6 1.6 6 1.8 6-1.4V238zM64 832.8c0 35 28.4 63.2 63.2 63.2H896c35.2 0 64-28.8 64-64V408c0-17.6-14.4-32-32-32H96c-17.6 0-32 14.4-32 32v424.8z"  /></svg>
                        </Tab>
                        <Tab>
                            <svg className="svg-icon" fill="currentColor" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M960 238c0-26.6-18.8-46-45.6-46H397.8c-5.6 0-8.6-1.2-12.2-4.8l-45-45-0.4-0.4c-9.8-9.2-17.8-13.8-34.6-13.8H113.4C85.8 128 64 148.6 64 174v147.4c0 3.2 3.4 3 6 1.4s10-2.8 14-2.8h856c4 0 11.4 1.2 14 2.8 2.6 1.6 6 1.8 6-1.4V238zM64 832.8c0 35 28.4 63.2 63.2 63.2H896c35.2 0 64-28.8 64-64V408c0-17.6-14.4-32-32-32H96c-17.6 0-32 14.4-32 32v424.8z"  /></svg>
                        </Tab>
                        <Tab>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" /></svg>
                        </Tab>
                        <Tab>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"></path></svg>
                        </Tab>
                        <Tab>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>
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
