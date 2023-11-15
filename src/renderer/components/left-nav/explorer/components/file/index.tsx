import { getIcon } from "renderer/utils";
import { FileWrapper, StructureLine } from "./styles";

import CLOSE_ICON from "../../../../../../../../assets/svg/close.svg";
import { useState } from "react";
import Structure from "../structure";
import { FileInformation } from "interfaces";
import React from "react";
import ContextProvider from "renderer/context";
import { SERVER_CREATE_TAB } from "constants/ipc";

function File({information, level = 0}: any) {

    information = information as FileInformation;
    let context: any = React.useContext(ContextProvider);

    if (!information.isDir) {
        return (
            <FileWrapper onClick={() => {
                window.electron.ipcRenderer.send(SERVER_CREATE_TAB, information.path);
            }} information={information} level={level}>
                <img src={getIcon(information.name, context, information.isDir)} className="icon" alt="" />
                <span>{information.name}</span>
                {/* <img className="close" src={CLOSE_ICON} alt="" /> */}
            </FileWrapper>
        )
    } else {
        const [isClosed, setClosed] = useState(true);

        return (
            <>
                <FileWrapper information={information} onClick={() => setClosed(!isClosed)} closed={isClosed} level={level}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <img src={getIcon(information.name, context, information.isDir)} className="icon" alt="" />
                    <span>{information.name}</span>
                    {/* <img className="close" src={CLOSE_ICON} alt="" /> */}
                </FileWrapper>
                {!isClosed && (
                    <div style={{ position: 'relative' }}>
                        <Structure level={level + 10} path={information.path} />
                        <StructureLine level={level + 10}></StructureLine>
                    </div>
                )}
            </>
        )
    }
}

export default File;
