import React, { Context, useRef, useState } from "react";
import { useTheme } from 'styled-components';
import Editor, { loader, Monaco } from "@monaco-editor/react";
import { BottomInfoBtn, BottomNavIcon, BottonNavInformation, EditorBottomNav } from "./styles";

loader.config({
    paths: {
      vs: '/monaco-editor/min/vs'
    }
});

export default ({tab}: any) => {
    const editorRef = useRef(null);
    let theme = useTheme();

    const [markersCount, setMarkersCount] = useState({ warns: 0, errors: 0});
    const [tabwidth, setTabWith] = useState(4 /* best tab width */);
    const [cursorPosition, setCursorPosition] = useState({
        x: 0,
        y: 0
    });

    function handleEditorDidMount(editor: any, monaco: Monaco) {
        monaco.editor.defineTheme('user-theme', theme.editor);
        editorRef.current = editor;

        const model = monaco.editor.createModel(tab.context.content, undefined, monaco.Uri.file(tab.context.path));
        editor.setModel(model);

        let options = model.getOptions();
        setTabWith(options.indentSize)

        editor.onDidChangeModelDecorations(() => {
            const model = editor.getModel();
            const markers = monaco.editor.getModelMarkers(model);

            let warnings = 0;
            let errors = 0;

            for (let marker of markers) {
                if (marker.severity == 8) {
                    errors++;
                    continue;
                }

                warnings++;
            }

            setMarkersCount({ warns: warnings, errors })
        })

        editor.onDidChangeCursorPosition((event: /*ICursorPositionChangedEvent*/ any) => {
            return setCursorPosition({
                x: event.position.lineNumber,
                y: event.position.column
            });
        })
    }

    return (
        <>
            <div style={{ height: '100%', overflow: 'hidden' }}>
                <Editor
                    theme="user-theme"
                    defaultLanguage="text"
                    defaultValue={tab.context.content}
                    onMount={handleEditorDidMount}
                />
            </div>
            <EditorBottomNav>
                <BottomNavIcon>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{markersCount.errors}</span>
                </BottomNavIcon>
                <BottomNavIcon>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span>{markersCount.warns}</span>
                </BottomNavIcon>
                <BottonNavInformation>
                    <BottomInfoBtn>
                        <span>
                            Line {cursorPosition.x}
                        </span>
                        <span style={{ marginLeft: '5px' }}>
                            Col {cursorPosition.y}
                        </span>
                    </BottomInfoBtn>
                    <BottomInfoBtn>
                        {tabwidth} Spaces
                    </BottomInfoBtn>
                    <BottomInfoBtn>
                        UTF-8
                    </BottomInfoBtn>
                </BottonNavInformation>
            </EditorBottomNav>
        </>
    )
}
