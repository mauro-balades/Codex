import React, { Context, useRef, useState } from "react";
import { useTheme } from 'styled-components';
import Editor, { loader } from "@monaco-editor/react";
import { BottomNavIcon, EditorBottomNav } from "./styles";

loader.config({
    paths: {
      vs: '/monaco-editor/min/vs'
    }
});

export default ({tab}: any) => {
    const editorRef = useRef(null);
    let theme = useTheme();

    const [errorCount, setErrorCount] = useState(0);
    const [warningsCount, setWarningsCount] = useState(0);

    function handleEditorDidMount(editor: any, monaco: any) {
        editorRef.current = editor;
        monaco.editor.defineTheme('user-theme', theme.editor);

        editor.onDidChangeModelDecorations(() => {
            const model = editor.getModel();
            const markers = monaco.editor.getModelMarkers(model);
        
            console.log({ markers })
        })
    }

    return (
        <>
            <div style={{ height: '100%', overflow: 'hidden' }}>
                <Editor
                    theme="user-theme"
                    defaultLanguage="javascript"
                    defaultValue={tab.content}
                    onMount={handleEditorDidMount}
                />
            </div>
            <EditorBottomNav>
                <BottomNavIcon>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{warningsCount}</span>
                </BottomNavIcon>
                <BottomNavIcon>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    <span>{errorCount}</span>
                </BottomNavIcon>
                
            </EditorBottomNav>
        </>
    )
}
