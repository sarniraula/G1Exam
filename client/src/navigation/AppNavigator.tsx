import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeScreen from "../screens/HomeScreen";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { isLoggedIn} = useSelector((state: RootState) => state.user);

  return (
    <Stack.Navigator initialRouteName={isLoggedIn ? "Home" : "Welcome"}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;