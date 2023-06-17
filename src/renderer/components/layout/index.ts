import styled, { createGlobalStyle } from "styled-components";

export const GlobalFont = createGlobalStyle`
@import url('${(props: any) => props.theme.font.url}');
`;


export const AppWrapper = styled.div`

    width: 100%;
    height: 100vh;
    max-height: 100vh;

    position: relative;
    display: flex;

    overflow: hidden;

    color: ${(props: any) => props.theme.color.primary};
    font-family: ${(props: any) => props.theme.font.family};
`
