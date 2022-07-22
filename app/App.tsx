import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TilbudScreen from './screens/TilbudScreen';
import AboutScreen from './screens/AboutScreen';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Tilbud" component={TilbudScreen} />
      <Tab.Screen name="Om appen" component={AboutScreen} />
    </Tab.Navigator>
  );
};

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#2c5364',
  },
};

const App = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <BottomNav />
    </NavigationContainer>
  );
};

export default App;
