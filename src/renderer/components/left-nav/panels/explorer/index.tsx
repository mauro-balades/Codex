
import React from "react";
import { useAsync } from "react-async";
import ContextProvider from "renderer/context";
import File from "./components/file";
import Structure from "./components/structure";
import { callFolder } from "./utils";

export default function (props: any) {

    let context: any = React.useContext(ContextProvider);
    return <Structure path={context.workplace} />
}
