import React, { Context, useRef } from "react";
import { useTheme } from 'styled-components';
import Editor, { loader } from "@monaco-editor/react";
import { EditorBottomNav } from "./styles";

loader.config({
    paths: {
      vs: '/monaco-editor/min/vs'
    }
});

export default ({tab}: any) => {
    const editorRef = useRef(null);
    let theme = useTheme();

    function handleEditorDidMount(editor: any, monaco: any) {
        editorRef.current = editor;
        monaco.editor.defineTheme('user-theme', theme.editor);
    }

    return (
        <>
            <Editor
                theme="user-theme"
                defaultLanguage="javascript"
                defaultValue={tab.content}
                onMount={handleEditorDidMount}
            />
            <EditorBottomNav></EditorBottomNav>
        </>
    )
}
