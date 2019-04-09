import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import App from './App';

const client = new ApolloClient({
  headers: { 'X-Api-Key': 'DEMO_KEY' },
  uri: 'http://localhost:62222/graphql',
});
const ApolloApp = (AppComponent: React.FunctionComponent) => (
  <ApolloProvider client={client}>
    <AppComponent/>
  </ApolloProvider>
);

ReactDOM.render(ApolloApp(App), document.getElementById('root'));
