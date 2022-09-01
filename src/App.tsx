import React from 'react';

import { ThemeProvider } from "styled-components";
import { defaultTheme } from './themes';

import { AppWrapper, GlobalFont } from './components/layout';
import LeftNav from './components/left-nav';
import Core from './components/core';

import "normalize.css";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalFont />
      <AppWrapper>
        <LeftNav></LeftNav>
        <Core />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
