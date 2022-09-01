
import styled from "styled-components";

export const MainContent = styled.section`
    width: 100%;
    height: 100%;

    background: ${(props: any) => props.theme.background.primary};
`

export const TabsContainer = styled.div`
    width: 100%;
    height: 35px;

    background: ${(props: any) => props.theme.background.secondary};

    color: ${(props: any) => props.theme.color.primary};

    display: flex;
    position: relative;

    align-items: center;
    padding: 10px 0;

    & li {
        list-style: none;
    }

    & .react-tabs {
        -webkit-tap-highlight-color: transparent;
        height: 100%;
    }
      
    & .react-tabs__tab-list {
        padding: 0;
        height: 100%;

        display: flex;
        align-items: center;
    }
      
    & .react-tabs__tab {
        background: ${(props: any) => props.theme.background.secondary};
        cursor: pointer;
        height: 100%;

        display: flex;
        align-items: center;

        width: 200px;
        border-radius: 5px;

        padding: 0 10px;
        margin: 0 5px;

        font-size: 15px;
    }

    & .react-tabs__tab:hover {
        background: ${(props: any) => props.theme.background.primary};
    }

    & .react-tabs__tab--selected {
        background: ${(props: any) => props.theme.background.primary};
        box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    }

    & .react-tabs__tab:focus {
        outline: none;
    }

    & .react-tabs__tab-panel {
        display: none;
    }

    & .react-tabs__tab-panel--selected {
        display: block;
    }
`
