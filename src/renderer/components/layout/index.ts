import styled, { createGlobalStyle } from "styled-components";

export const GlobalFont = createGlobalStyle`
@font-face {
    font-family: ${(props: any) => props.theme.font.family};
    src: ${(props: any) => props.theme.font.url};
}
`;


export const AppWrapper = styled.div`
    font-family: ${(props: any) => props.theme.font.family};

    width: 100%;
    height: 100vh;

    position: relative;
    display: flex;
`
