import { getIcon } from "renderer/utils";
import { FileWrapper } from "./styles";

import CLOSE_ICON from "../../../../../../../../assets/svg/close.svg";
import { useState } from "react";
import Structure from "../structure";
import { FileInformation } from "interfaces";

function File({information, level = 0}: any) {

    information = information as FileInformation;

    if (!information.isDir) {
        return (
            <FileWrapper level={level}>
                <img src={getIcon(information.name, information.isDir)} className="icon" alt="" />
                <span>{information.name}</span>
                {/* <img className="close" src={CLOSE_ICON} alt="" /> */}
            </FileWrapper>
        )
    } else {

        const [isClosed, setClosed] = useState(true);

        return (
            <>
                <FileWrapper onClick={() => setClosed(!isClosed)} closed={isClosed} level={level}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <img src={getIcon(information.name, information.isDir)} className="icon" alt="" />
                    <span>{information.name}</span>
                    {/* <img className="close" src={CLOSE_ICON} alt="" /> */}
                </FileWrapper>
                {!isClosed && (
                    <Structure level={level + 10} path={information.path} />
                )}
            </>
        )
    }
}

export default File;
