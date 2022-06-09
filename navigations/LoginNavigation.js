import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";
import InitialScreen from "../screens/login_state/InitialScreen";
import MainState from "../screens/login_state/MainState";
const Stack = createNativeStackNavigator();
const LoginNavgation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Initial" component={InitialScreen} />
      <Stack.Screen name="State" component={MainState} />
    </Stack.Navigator>
  );
};

export default LoginNavgation;