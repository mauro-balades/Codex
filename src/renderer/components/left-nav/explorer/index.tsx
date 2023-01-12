
import React from "react";
import ContextProvider from "renderer/context";
import Structure from "./components/structure";

import Section from "../components/section";

export default function (props: any) {

    let context: any = React.useContext(ContextProvider);
    return (
        <>
            <Section title="file structure">
                <Structure path={context.workplace} />
            </Section>
        </>
    )
}
