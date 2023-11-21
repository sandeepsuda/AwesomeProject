/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import MoviesList from './MoviesList';

import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

// const httpLink = new HttpLink({uri: 'https://api.github.com/graphql'});

// // create an apollolink middleware
// const authLink = new ApolloLink((operation, forward) => {
//   const token = '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';

//   operation.setContext(({headers = {}}) => ({
//     headers: {
//       ...headers,
//       Authorization: token ? `Bearer ${token}` : '',
//     },
//   }));
//   return forward(operation);
// });

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <MoviesList movies={[]} status={'idle'} />
      </Provider>
    </ApolloProvider>
  );
};

export default App;
