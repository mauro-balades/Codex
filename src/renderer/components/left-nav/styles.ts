
import styled from "styled-components";

export const Wrapper = styled.section`
    max-width: 325px;
    min-width: 325px;

    position: relative;

    background: ${(props: any) => props.theme.background.secondary};
    // border-right: 1px solid ${(props: any) => props.theme.borders};
`

export const TopNav = styled.div`
    height: 35px;
    padding: 5px 10px;

    background: ${(props: any) => props.theme.background.secondary};

    color: ${(props: any) => props.theme.color.primary};
    // border-bottom: 1px solid ${(props: any) => props.theme.borders};

    display: flex;
    align-items: center;
`
