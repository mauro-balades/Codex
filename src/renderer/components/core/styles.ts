
import styled from "styled-components";

export const MainContent = styled.section`
    width: 100%;
    min-height: 100vh;
    max-height: 100vh;

    display: flex;
    flex-direction: column;

    background: ${(props: any) => props.theme.background.secondary};

    & .react-tabs {
        height: 100%;
        -webkit-tap-highlight-color: transparent;
    }

    & .react-tabs__tab-panel {
        display: none;
        width: 100%;

        border-top: ${(props: any) => props.theme.borders};
    }

    & .react-tabs__tab-panel--selected {
        height: calc(100% - 30px);
        display: block;
    }
`

export const NavigationButton = styled.div`
    display: flex;
    align-items: center;
    opacity: .7;

    &:first-child {
        margin-left: 10px;
    }

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

        margin: 0;

        display: flex;
        align-items: center;

        user-select: none;
    }

    & .react-tabs__tab--selected,
    & .react-tabs__tab {
        cursor: pointer;
        // height: 100%;

        display: flex;
        align-items: center;

        min-width: 150px;
        max-width: 300px;

        padding: 5px 10px;

        position: relative;
        border-radius: 5px;

        font-size: 15px;


        &:last-child {
            &::after {

                position: absolute;

                content: '';
                top: 50%;
                right: 0;

                height: 20px;
                width: 1px;
                transform: translate(0, -50%);

                background: ${(props: any) => props.theme.borders};
            }

        }

        &:hover {
            background: ${(props: any) => props.theme.background.secondary} !important;
        }

        &:hover::after,
        &:hover::before {
            display: none;
        }
    }

    & .react-tabs__tab span {
        width: 100%;
        margin-right: 5px;

        opacity: .7;

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

export const TabWindowWrapper = styled.div`
    height: 100%;

    position: relative;
    overflow: hidden;
`

export const TabWindow = styled.div`
    border: 1px solid ${(props: any) => props.theme.borders};
    margin: 20px;
    border-radius: 10px;
    overflow: hidden;

    height: 100%;
    background: ${(props: any) => props.theme.background.primary};
`

export const TopNav = styled.div`
    height: 35px;
    padding: 6px 10px;

    background: ${(props: any) => props.theme.background.secondary};

    color: ${(props: any) => props.theme.color.primary};
    // border-bottom: 1px solid ${(props: any) => props.theme.borders};

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

export const CodeWrapper = styled.div`
    width: 100%;
    height: calc(100% - 50px);

    position: relative;

    & > section {
        overflow: hidden;
    }

    & .minimap {
        border-left: 1px solid ${(props: any) => props.theme.borders};
    }

    & .monaco-editor .line-numbers.active-line-number::after {
        content: '';
        position: absolute;
        background: #000;
        width: 100%;
        height: 100%;
        left: 60%;
    }
`

export const EditorBottomNav = styled.div`
    width: 100%;
    height: 35px;
    padding: 0 20px;

    background: ${(props: any) => props.theme.background.primary};

    color: ${(props: any) => props.theme.color.primary};
    border-top: 1px solid ${(props: any) => props.theme.borders};

    display: flex;
    align-items: center;
`

export const BottomNavIcon = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
    font-weight: 500;
    opacity: .7;

    user-select: none;

    & svg {
        width: 20px;
        height: 20px;

        margin-right: 5px;
    }

    & span {
        line-height: 2;
    }
`

export const BottonNavInformation = styled.div`
    margin: 0 50px 0 auto;
    display: flex;
    align-items: center;
`

export const BottomInfoBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;

    cursor: pointer;
    user-select: none;

    font-size: 14px;

    & span {
        line-height: 2;
    }
`

export const TabContainerList = styled.div`
    width: 100%;
    height: 40px;

    overflow: overlay;

    // TODO: edit scroll bar
`
