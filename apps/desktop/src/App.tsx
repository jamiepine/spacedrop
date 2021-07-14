import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import 'isomorphic-fetch';
import themeDark from './theme/themeDark';
import Fonts from './theme/fonts';
import DropView from './screens/DropView';
import { useEffect } from 'react';
import { usePulse } from '@pulsejs/react';
import { MY_CLIENT_ID } from './state';
import { sendPing } from './ping';

const Container = styled.div`
  /* background-color: ${(props) => props.theme.background + '40'}; */
  color: ${(props) => props.theme.text};
  font-family: Whitney;
  user-select: none;

  /* Required as some left and top padding is applied by the system styles on mac */
  margin: ${() => (import.meta.env.VITE_OS === 'mac' ? '-8px 0 0 -8px' : '0')};
`;

const App = () => {
  useEffect(() => {
    const interval = setInterval(sendPing, 5 * 60 * 100);
    return () => {
      clearInterval(interval);
    }
  }, []);
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
