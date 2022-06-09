import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";
import NotificationScreen from "../screens/notification_state/NotificationScreen";


const Stack = createNativeStackNavigator();
const NotificationNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Initial" component={NotificationScreen} />
      
    </Stack.Navigator>
  );
};

export default NotificationNavigation;