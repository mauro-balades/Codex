import React, { useEffect, useState } from 'react';

import { ThemeProvider } from "styled-components";
import { defaultTheme } from './themes';

import { AppWrapper, GlobalFont } from './components/layout';
import LeftNav from './components/left-nav';
import Core from './components/core';

import "normalize.css";
import { Context } from './interfaces/context';
import { CONTEXT_FETCH, CONTEXT_FETCH_cb } from 'constants/ipc';

function App() {

  // TODOt

  const [context, setContext] = useState({});

  useEffect(() => {
    window.electron.ipcRenderer.on(CONTEXT_FETCH_cb, (_: any, new_context: Context) => {
      console.log(new_context)
      setContext(new_context);
    })

    window.electron.ipcRenderer.send(CONTEXT_FETCH, []);
  }, []);

  const CodexContext = React.createContext(context);
  return (
    <ThemeProvider theme={defaultTheme}>
      <CodexContext.Provider value={context}>

        <GlobalFont />
        <AppWrapper>
          <LeftNav></LeftNav>
          <Core />
        </AppWrapper>
      </CodexContext.Provider>
    </ThemeProvider>
  );
}

export default App;
