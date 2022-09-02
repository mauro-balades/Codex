
import React from "react";
import ContextProvider from "renderer/context";
import Structure from "./components/structure";

export default function (props: any) {

    let context: any = React.useContext(ContextProvider);
    return <Structure path={context.workplace} />
}
