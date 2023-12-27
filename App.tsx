/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {View, FlatList, Text, Linking} from 'react-native';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client';
// import {Provider} from 'react-redux';
// import store from './store';
// import MoviesList from './MoviesList';
// import Counter from './Counter';
// import ContainerComp from './ContainerComp';

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();

const HomeScreen = () => {
  // const navigation = useNavigation();
  const {loading, data} = useQuery(GET_LOCATIONS);
  console.log(data);

  if (!loading) {
    return (
      <View testID="container" style={{flex: 1, justifyContent: 'center'}}>
        <FlatList
          data={Array.from(Array(200).keys())}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item, index}) => (
            <View
              key={index}
              style={{width: '100%', height: 40, justifyContent: 'center'}}>
              <Text> {item}</Text>
            </View>
          )}
        />
      </View>
    );
  }
  return <View testID="container" />;
};

const SettingsScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings Screen</Text>
    </View>
  );
};

const App = () => {
  useEffect(() => {
    const getUrl = async () => {
      const initialUrl = await Linking.getInitialURL();

      if (initialUrl === null) {
        return;
      }

      // if (initialUrl.includes('Settings')) {
      //   navigationRef.navigate("Settings");
      // }
    };
    getUrl();
  });

  return (
    <ApolloProvider client={client}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
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
