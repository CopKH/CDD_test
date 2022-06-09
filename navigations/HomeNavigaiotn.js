import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";

import HomeScreen from "../screens/home_state/HomeScreen";
const Stack = createNativeStackNavigator();
const HomeNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Initial" component={HomeScreen} />
      
    </Stack.Navigator>
  );
};

export default HomeNavigation;