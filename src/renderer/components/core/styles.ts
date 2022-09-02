
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
    padding: 5px 10px;

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

    & .react-tabs__tab--selected,
    & .react-tabs__tab {
        background: ${(props: any) => props.theme.background.secondary};
        cursor: pointer;
        height: 100%;

        display: flex;
        align-items: center;

        min-width: 150px;
        max-width: 300px;
        border-radius: 5px;

        padding: 0 10px;
        margin: 0 5px;

        position: relative;

        font-size: 15px;
        border-right: 1px solid ${(props: any) => props.theme.borders};
    }

    & .react-tabs__tab:last-child {
        border-right: none;
    }

    & .react-tabs__tab span {
        width: 100%;
        margin-right: 5px;

        overflow: hidden;
        white-space:nowrap;
        text-overflow: ellipsis;
    }

    & .react-tabs__tab img:first-child {
        margin-right: 10px;
    }

    & .react-tabs__tab img:last-child {
        opacity: 0;
    }

    & .react-tabs__tab:hover img:last-child {
        opacity: 1;
    }

    & .react-tabs__tab img {
        width: 20px;
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

export const TopNav = styled.div`
    width: 100%;
    height: 35px;
    padding: 5px 10px;

    background: ${(props: any) => props.theme.background.secondary};

    color: ${(props: any) => props.theme.color.primary};
    border-bottom: 1px solid ${(props: any) => props.theme.borders};

    padding-left: 20px;
    // font-size: 20px;

    display: flex;
    align-items: center;
`

export const WorkPlaceTitle = styled.div`
    font-weight: bold;
    font-size: 17px;
    opacity: .8;

`
