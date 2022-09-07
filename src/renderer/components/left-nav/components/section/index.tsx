import React, { useRef, useState } from "react";
import { collapseSection, expandSection } from "./utils";
import { Wrapper, SectionTitle, SectionHeader, SectionContent } from "./styles";

export default function (props: any) {
    let {title} = props;

    const ref = useRef(null);
    const [isClosed, setClosed] = useState(false);

    return (
        <Wrapper>
            <SectionHeader onClick={() => {
                if(isClosed) {
                    expandSection(ref.current)
                } else {
                    collapseSection(ref.current)
                }

                setClosed(!isClosed);
            }} closed={isClosed}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                <SectionTitle>{title}</SectionTitle>
            </SectionHeader>
            <SectionContent ref={ref} closed={isClosed}>
                {props.children}
            </SectionContent>
        </Wrapper>
    )
}

