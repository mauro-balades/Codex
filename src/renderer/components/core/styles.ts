
import styled from "styled-components";

export const MainContent = styled.section`
    width: 100%;
    height: 100%;

    background: ${(props: any) => props.theme.background.primary};

    & .react-tabs {
        -webkit-tap-highlight-color: transparent;
        height: 100%;
    }

    & .react-tabs__tab-panel {
        display: none;
        height: 100%;
        width: 100%;

        border-top: ${(props: any) => props.theme.borders};

    }

    & .react-tabs__tab-panel--selected {
        display: block;
    }
`

export const NavigationButton = styled.div`
    display: flex;
    align-items: center;
    opacity: .7;

    cursor: pointer;

    &:hover,
    &.active {
        opacity: 1;
    }

    & svg {
        width: 80%;
    }
`

export const TabsContainer = styled.div`
    width: 100%;
    height: 30px;
    padding: 5px;

    background: ${(props: any) => props.theme.background.secondary};

    color: ${(props: any) => props.theme.color.primary};
    border-bottom: 1px solid ${(props: any) => props.theme.borders};

    z-index: 2;
    display: flex;
    position: relative;

    align-items: center;

    & li {
        list-style: none;
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

        width: 150px;
        border-radius: 5px;

        padding: 0 10px;
        margin: 0 5px;

        font-size: 15px;
    }

    & .react-tabs__tab:hover {
        background: ${(props: any) => props.theme.borders};
    }

    & .react-tabs__tab--selected {
        background: ${(props: any) => props.theme.background.primary} !important;
    }

    & .react-tabs__tab:focus {
        outline: none;
    }
`
