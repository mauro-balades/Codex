import React from 'react';

import { ThemeProvider } from "styled-components";
import Core from './components/core';
import { AppWrapper } from './components/layout';
import { defaultTheme } from './themes';

import "normalize.css";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppWrapper>
        <Core />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
