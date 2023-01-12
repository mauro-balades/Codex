import { Wrapper, TopNav } from "./styles"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Explorer from "./explorer";

export default (props: any) => {

    return (
        <Wrapper>
            <TopNav>TODO: search thing here</TopNav>
            <Explorer {...props} />
        </Wrapper>
    )
}
