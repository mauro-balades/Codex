import React from "react"
import { TabPlugin, TabPluginContext } from "renderer/plugins/tabPlugin";
import createReactClass from 'create-react-class';

import { SectionLine, SectionLink, SectionTitle, SubTitle, Title, Wrapper } from "./styles";
import { WelcomeFolder, WelcomeNewFile, WelcomeOpenFile } from "renderer/icons";

export default class extends TabPlugin {
    override registerPlugin(ctx: TabPluginContext) {
        // TODO: check for settings
        if (ctx.currentTabs.length == 0) {
            let tab = ctx.createTabInstance("Welcome");
            tab.component = this.component();

            ctx.createNewTab(tab);
        }
    }

    component(): React.Component {
        return createReactClass({
            render: function() {return (
            <>
                <Wrapper>
                    <Title>CodeX</Title>
                    <SubTitle>Powerful Editing Tools</SubTitle>

                    <SectionTitle>Start</SectionTitle>
                    <SectionLine>
                        <WelcomeOpenFile className="link" />
                        <SectionLink>Open File</SectionLink>
                    </SectionLine>
                    <SectionLine>
                        <WelcomeNewFile className="link" />
                        <SectionLink>Create new file</SectionLink>
                    </SectionLine>
                    <SectionLine>
                        <WelcomeFolder className="link" />
                        <SectionLink>Open folder</SectionLink>
                    </SectionLine>

                    <SectionTitle>Recent</SectionTitle>
                    <SectionLine>
                        <SectionLink>Example</SectionLink>
                        <div style={{ marginLeft: '10px', fontSize: '10px', opacity: '.8' }}>~/example/folder</div>
                    </SectionLine>
                </Wrapper>
            </>
        )}})
    }
}
