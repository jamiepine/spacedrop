import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import themeDark from './theme/themeDark';
import Fonts from './theme/fonts';
import DropView from './screens/DropView';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql
} from "@apollo/client";
import { useEffect } from 'react';

const client = new ApolloClient({
  uri: 'ws://localhost:1500/graphql',
  cache: new InMemoryCache()
});

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
    client.query({
      query: gql`
        query Test {
          TestQuery
        }
      `
    }).then(console.log)
  });
  return (
    <ThemeProvider theme={themeDark}>
      <ApolloProvider client={client} >
        <Fonts />
        <Container>
          <DropView />
        </Container>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
