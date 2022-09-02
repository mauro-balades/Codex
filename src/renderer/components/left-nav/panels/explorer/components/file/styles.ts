
import styled from "styled-components";

export const FileWrapper = styled.div`
    padding: 5px ${(props: any) => props.level + 10}px;
    margin: 5px 10px;

    border-radius: 5px;

    display: flex;
    cursor: pointer;
    align-items: center;
    opacity: .9;

    position: relative;

    & svg {
        width: 12px;
        margin-right: 5px;
        transform: rotate(${(props: any) => props.closed ? '0' : '90'}deg);
    }

    & .close {
        cursor: pointer;
        display: none;

        position: absolute;
        top: 50%;
        right: 1%;

        transform: translate(-50%, -50%);
    }

    &:hover {
        background: ${(props: any) => props.theme.background.hover};
    }

    &:hover .close {
        display: block;
    }

    & img.icon {
        width: 20px;
        opacity: .6;
        margin-right: 5px;
    }
`
