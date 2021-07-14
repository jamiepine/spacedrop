import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import themeDark from './theme/themeDark';
import Fonts from './theme/fonts';
import DropView from './screens/DropView';
import { useEffect } from 'react';

const Container = styled.div`
  /* background-color: ${(props) => props.theme.background + '40'}; */
  color: ${(props) => props.theme.text};
  font-family: Whitney;
  user-select: none;

  /* Required as some left and top padding is applied by the system styles on mac */
  margin: ${() => (import.meta.env.VITE_OS === 'mac' ? '-8px 0 0 -8px' : '0')};
`;

const App = () => {
  return (
    <ThemeProvider theme={themeDark}>
      <Fonts />
      <Container>
        <DropView />
      </Container>
    </ThemeProvider>
  );
};

export default App;
