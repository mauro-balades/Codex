
import styled from "styled-components";

export const StructureWrapper = styled.div`
    ${(props: any) => props.level == 0 ? '' : `
        user-select: none;
    `}
`
