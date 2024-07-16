import React from 'react';
import {createStackNavigator, Header} from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import Otp from './Screens/Otp';
import Home from './Screens/Home';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Otp"
          component={Otp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;