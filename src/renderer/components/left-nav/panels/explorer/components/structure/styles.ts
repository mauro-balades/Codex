
import styled from "styled-components";

export const StructureWrapper = styled.div`
    ${(props: any) => props.level == 0 ? '' : `
        border-right: 1px solid ${(props: any) => props.theme.borders};
    `}
`
