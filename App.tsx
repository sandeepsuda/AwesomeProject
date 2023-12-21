/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { View, Text, Linking, TouchableOpacity } from 'react-native';
import { NavigationContainer, createNavigationContainerRef, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {Provider} from 'react-redux';
// import store from './store';
// import MoviesList from './MoviesList';
// import Counter from './Counter';
// import ContainerComp from './ContainerComp';

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

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onPress={() => navigation.navigate('Settings')}>
      <Text style={{ color: 'red', textDecorationLine: 'underline' }}>
        Home Screen
      </Text>
    </TouchableOpacity>
  );
}

const SettingsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const App = () => {

  useEffect(() => {
    const getUrl = async () => {
      const initialUrl = await Linking.getInitialURL();
      console.log(initialUrl);
      if (initialUrl === null) {
        return;
      }

      if (initialUrl.includes('Settings')) {
        navigationRef.navigate("Settings");
      }
    };

    getUrl();
  });



  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Settings' component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <ApolloProvider client={client}>
    //   <Provider store={store}>
    //     {/* <Counter /> */}
    //     <ContainerComp />
    //     {/* <MoviesList movies={[]} status={'idle'} /> */}
    //   </Provider>
    // </ApolloProvider>
  );
};

export default App;
