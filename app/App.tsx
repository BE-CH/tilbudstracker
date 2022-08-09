import React from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TilbudScreen from './screens/TilbudScreen';
import AboutScreen from './screens/AboutScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        name="Tilbud"
        component={TilbudScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="information"
              color={color}
              size={size}
            />
          ),
        }}
        name="Om appen"
        component={AboutScreen}
      />
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
