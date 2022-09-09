
import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 20%;
`

export const Title = styled.div`
    font-size: 35px;
    font-weight: 600;
`

export const SubTitle = styled.div`
    font-size: 25px;
    color: ${(props: any) => props.theme.color.secondary};
`

export const SectionTitle = styled.div`
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 5px;
    color: ${(props: any) => props.theme.color.secondary};
`

export const SectionLine = styled.div`
    margin-top: 5px;
    display: flex;

    padding: 0 10px;

    cursor: pointer;
    align-items: center;

    & svg {
        width: 18px;
        height: 18px;
    }

    & svg.link {
        margin-right: 5px;
        color: ${(props: any) => props.theme.color.accent};
    }
`

export const SectionLink = styled.div`
    color: ${(props: any) => props.theme.color.accent};
`
