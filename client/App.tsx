import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { RootState } from './src/redux/store';
import store from './src/redux/store';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './src/navigation/Tabs';

const Stack = createStackNavigator();

function AppNavigator() {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {!isLoggedIn ? (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={RegisterScreen} />
          </>
        ) : (
          <Stack.Screen name="Main" component={Tabs} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
