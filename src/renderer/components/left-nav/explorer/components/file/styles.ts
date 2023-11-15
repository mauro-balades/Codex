
import styled from "styled-components";
import { hexToCSSFilter } from 'hex-to-css-filter';

export const FileWrapper = styled.div`
    padding: 5px 5px 5px ${(props: any) => props.level + (props.information.isDir ? 10 : (
        props.level == 0 ? 5 : 30))}px;
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

    & span {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
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
        opacity: ${(props: any) => props.information.isDir ? '.6' : '1'};
        margin-right: 5px;


        ${(props: any) => `
            ${(props.information.isDir && (!props.closed)) ? `
                opacity: .9;
                filter: ${hexToCSSFilter(props.theme.color.accent).filter};
            ` : props.information.isDir && props.theme.dark ? `
                filter: invert(1);
            ` : ""}
        `}
    }
`

export const StructureLine = styled.div`
    position: absolute;
    height: 100%;
    width: 1px;
    background: ${(props: any) => props.theme.borders};

    top: 0;
    left: ${(props: any) => props.level + 15}px;
`
