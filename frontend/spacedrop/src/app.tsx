import React from 'react';
import ReactDOM from 'react-dom';
import styled, { ThemeProvider } from 'styled-components';
import themeDark from './theme/themeDark';
import { HashRouter as Router, Switch, Route, useLocation, Redirect } from 'react-router-dom';
import './style.css';
import DropView from './screens/DropView';

// import * as serviceWorker from './serviceWorker';

const Container = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  /* background-color: ${(props) => props.theme.background + '40'}; */
  color: ${(props) => props.theme.text};
`;

const App = () => {
  return (
    <ThemeProvider theme={themeDark}>
      <Container>
        <DropView />
      </Container>
    </ThemeProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
