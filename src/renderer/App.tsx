import React, { useEffect, useState } from 'react';

import { ThemeProvider } from "styled-components";
import { darkTheme, defaultTheme } from './themes';

import { AppWrapper, GlobalFont } from './components/layout';
import LeftNav from './components/left-nav';
import Core from './components/core';

import "normalize.css";
import { Context, XCodeTab } from '../interfaces';
import { CONTEXT_FETCH, CONTEXT_FETCH_CB } from 'constants/ipc';
import { ContextProvider } from './context';
import Extra from './components/extra';

function App() {

  const [context, setContext] = useState({
    correct: false
  } as Context);

  useEffect(() => {
    window.electron.ipcRenderer.on(CONTEXT_FETCH_CB, (new_context: any) => {
      setContext(new_context);
    })

    window.electron.ipcRenderer.send(CONTEXT_FETCH, []);
  }, []);

  const [currentTabs, setCurrentTabs] = useState([] as Array<XCodeTab>);
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <ThemeProvider theme={defaultTheme}>
      <ContextProvider value={context}>
        {context.correct && (
          <>
            <GlobalFont />

            <AppWrapper>
              <LeftNav></LeftNav>
              <Core {...{tabIndex, setTabIndex, currentTabs, setCurrentTabs}} />

              <Extra {...{tabIndex, setTabIndex, currentTabs, setCurrentTabs}} />
            </AppWrapper>
          </>
        )}
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
