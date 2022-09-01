
import styled from "styled-components";

export const Wrapper = styled.section`
    width: 400px;
    height: 100%;

    position: relative;

    background: ${(props: any) => props.theme.background.secondary};
`

export const Panels = styled.div`
    height: 100%;
    background: ${(props: any) => props.theme.background.secondary};
`

export const TabsContainer = styled.div`
    height: 100%;

    background: ${(props: any) => props.theme.background.secondary};

    color: ${(props: any) => props.theme.color.primary};

    position: relative;

    & li {
        list-style: none;
    }

    & .react-tabs {
        -webkit-tap-highlight-color: transparent;
        height: 100%;
        display: flex;
    }
      
    & .react-tabs__tab-list {
        padding: 0;
        height: 100%;
        width: 30%;

        display: flex;
        flex-direction: column;
        align-items: center;

        margin-top: 0;
        border-right: 2px solid ${(props: any) => props.theme.background.primary};
    }
      
    & .react-tabs__tab {
        cursor: pointer;

        width: 30px;
        height: 30px;

        border-radius: 5px;

        padding: 10px;
        margin: 5px 0;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 15px;
        position: relative;

        opacity: .6;
    }

    & .react-tabs__tab:hover {
        opacity: 1;
    }

    & .react-tabs__tab--selected {
        opacity: 1;
    }

    & .react-tabs__tab--selected::before {
        content: '';
        display: inline-block;
        width: 5px;
        height: 20px;

        position: absolute;
        left: -30%;
        top: 50%;
        background: ${(props: any) => props.theme.color.accent};

        z-index: 2;

        transform: translate(-50%, -50%);
        border-radius: 0px 5px 5px 0px;
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
