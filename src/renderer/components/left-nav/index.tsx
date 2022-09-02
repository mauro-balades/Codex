import { Wrapper, TabsContainer, Panels } from "./styles"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Explorer from "./panels/explorer";

export default (props: any) => {

    return (
        <Wrapper>
            <TabsContainer>
                <Tabs>
                    <TabList>
                        <Tab>
                            <svg className="svg-icon" fill="currentColor" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M960 238c0-26.6-18.8-46-45.6-46H397.8c-5.6 0-8.6-1.2-12.2-4.8l-45-45-0.4-0.4c-9.8-9.2-17.8-13.8-34.6-13.8H113.4C85.8 128 64 148.6 64 174v147.4c0 3.2 3.4 3 6 1.4s10-2.8 14-2.8h856c4 0 11.4 1.2 14 2.8 2.6 1.6 6 1.8 6-1.4V238zM64 832.8c0 35 28.4 63.2 63.2 63.2H896c35.2 0 64-28.8 64-64V408c0-17.6-14.4-32-32-32H96c-17.6 0-32 14.4-32 32v424.8z"  /></svg>
                        </Tab>
                        <Tab>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                        </Tab>
                        <Tab>
                            <svg className="svg-icon" fill="currentColor" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M960 238c0-26.6-18.8-46-45.6-46H397.8c-5.6 0-8.6-1.2-12.2-4.8l-45-45-0.4-0.4c-9.8-9.2-17.8-13.8-34.6-13.8H113.4C85.8 128 64 148.6 64 174v147.4c0 3.2 3.4 3 6 1.4s10-2.8 14-2.8h856c4 0 11.4 1.2 14 2.8 2.6 1.6 6 1.8 6-1.4V238zM64 832.8c0 35 28.4 63.2 63.2 63.2H896c35.2 0 64-28.8 64-64V408c0-17.6-14.4-32-32-32H96c-17.6 0-32 14.4-32 32v424.8z"  /></svg>
                        </Tab>
                        <Tab>
                            <svg className="svg-icon" fill="currentColor" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M960 238c0-26.6-18.8-46-45.6-46H397.8c-5.6 0-8.6-1.2-12.2-4.8l-45-45-0.4-0.4c-9.8-9.2-17.8-13.8-34.6-13.8H113.4C85.8 128 64 148.6 64 174v147.4c0 3.2 3.4 3 6 1.4s10-2.8 14-2.8h856c4 0 11.4 1.2 14 2.8 2.6 1.6 6 1.8 6-1.4V238zM64 832.8c0 35 28.4 63.2 63.2 63.2H896c35.2 0 64-28.8 64-64V408c0-17.6-14.4-32-32-32H96c-17.6 0-32 14.4-32 32v424.8z"  /></svg>
                        </Tab>
                        <Tab>
                            <svg className="svg-icon" fill="currentColor" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M960 238c0-26.6-18.8-46-45.6-46H397.8c-5.6 0-8.6-1.2-12.2-4.8l-45-45-0.4-0.4c-9.8-9.2-17.8-13.8-34.6-13.8H113.4C85.8 128 64 148.6 64 174v147.4c0 3.2 3.4 3 6 1.4s10-2.8 14-2.8h856c4 0 11.4 1.2 14 2.8 2.6 1.6 6 1.8 6-1.4V238zM64 832.8c0 35 28.4 63.2 63.2 63.2H896c35.2 0 64-28.8 64-64V408c0-17.6-14.4-32-32-32H96c-17.6 0-32 14.4-32 32v424.8z"  /></svg>
                        </Tab>
                        <Tab>
                            <svg className="svg-icon" fill="currentColor" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M960 238c0-26.6-18.8-46-45.6-46H397.8c-5.6 0-8.6-1.2-12.2-4.8l-45-45-0.4-0.4c-9.8-9.2-17.8-13.8-34.6-13.8H113.4C85.8 128 64 148.6 64 174v147.4c0 3.2 3.4 3 6 1.4s10-2.8 14-2.8h856c4 0 11.4 1.2 14 2.8 2.6 1.6 6 1.8 6-1.4V238zM64 832.8c0 35 28.4 63.2 63.2 63.2H896c35.2 0 64-28.8 64-64V408c0-17.6-14.4-32-32-32H96c-17.6 0-32 14.4-32 32v424.8z"  /></svg>
                        </Tab>
                    </TabList>
                    <Panels>
                        <TabPanel>
                            <Explorer />
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
