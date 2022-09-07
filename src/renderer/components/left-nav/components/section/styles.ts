import styled, {css} from "styled-components";

export const Wrapper = styled.div`
    margin: 10px 0;
`

export const SectionHeader = styled.div`

    display: flex;
    align-items: center;

    user-select: none;
    cursor: pointer;

    & svg {
        width: 12px;
        margin: 0 5px 0 10px;
        transform: rotate(${(props: any) => props.closed ? '-90' : '0'}deg);
    }
`

export const SectionTitle = styled.div`
    text-transform: uppercase;
    font-size: 13px;

    font-weight: 600;

    color: ${(props: any) => props.theme.color.secondary}
`

export const SectionContent = styled.div`
    transition: height 1s ease;
    overflow: hidden;

    padding: 0 5px;

    height: auto;
`
