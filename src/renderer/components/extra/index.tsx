import React, { useEffect } from "react"
import { TabPluginContext } from "renderer/plugins/tabPlugin"
import Welcome from "./welcome/welcome"

export default (props: any) => {

    useEffect(() => {
        let context = new TabPluginContext(props);
        new Welcome().registerPlugin(context);
    }, [])

    return <></>
}
