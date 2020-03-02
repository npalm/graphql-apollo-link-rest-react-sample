import React from 'react';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { RestLink } from 'apollo-link-rest';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import Talks from './components/Talks';

const restLink = new RestLink({
  uri: 'http://localhost:8080/',
  responseTransformer: async (response) => response.json().then((x: any) => x.content),
});
const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>

      <div className="App">

        <Talks />

      </div>
    </ApolloProvider>
  );
}

export default App;
