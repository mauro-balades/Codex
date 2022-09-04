
import styled from "styled-components";

export const Wrapper = styled.section`
    max-width: 350px;
    min-width: 300px;

    position: relative;

    background: ${(props: any) => props.theme.background.secondary};
    border-right: 1px solid ${(props: any) => props.theme.borders};
`

export const Panels = styled.div`
    width: 100%;
    background: ${(props: any) => props.theme.background.secondary};
    border-right: 1px solid ${(props: any) => props.theme.borders};

    overflow-y: auto;
`

export const TabsContainer = styled.div`
    background: ${(props: any) => props.theme.background.secondary};

    color: ${(props: any) => props.theme.color.primary};

    position: relative;

    & li {
        list-style: none;
    }

    & .react-tabs {
        -webkit-tap-highlight-color: transparent;
        height: 100%;
    }
      
    & .react-tabs__tab-list {
        padding: 0;
        height: 30px;
        padding: 5px 0;
        width: 100%;

        display: flex;
        justify-content: space-around;
        align-items: center;
        position: relative;

        margin-top: 0;
        border-bottom: 1px solid ${(props: any) => props.theme.borders};
    }
      
    & .react-tabs__tab {
        width: 100%;
        cursor: pointer;

        width: 20px;
        height: 20px;

        justify-content: center;
        align-items: center;

        position: relative;
        opacity: .6;
    }

    & .react-tabs__tab:hover {
        color: ${(props: any) => props.theme.color.accent};
    }

    & .react-tabs__tab--selected {
        opacity: 1;
        color: ${(props: any) => props.theme.color.accent};
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

export const TopNav = styled.div`
    height: 35px;
    padding: 5px 10px;

    background: ${(props: any) => props.theme.background.secondary};

    color: ${(props: any) => props.theme.color.primary};
    border-bottom: 1px solid ${(props: any) => props.theme.borders};

    display: flex;
    align-items: center;
`
