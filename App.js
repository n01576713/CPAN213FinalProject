//There are commented out areas where we tried to implement a self made api and redux but we were unsuccessful, and ran out of time.
//There are also files alongside these such as store.js, server.js, cart.js, Games.json, that were for the api and redux.

import React from 'react';
import { Image } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import BrowseScreen from './screens/BrowseScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? require('./images/Home.png') : require('./images/Home.png');
          } else if (route.name === 'Browse') {
            iconName = focused ? require('./images/Browse.png') : require('./images/Browse.png');
          } else if (route.name === 'Favorites') {
            iconName = focused ? require('./images/Favorite.png') : require('./images/Favorite.png');
          } else if (route.name === 'Cart') {
            iconName = focused ? require('./images/Cart.png') : require('./images/Cart.png');
          }
          return <Image source={iconName} style={{ width: 25, height: 25 }} />;
        },
      })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Browse" component={BrowseScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;