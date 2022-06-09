import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import DashboardScreen from "../screens/dashboard_state/DashboardScreen";


const Stack = createNativeStackNavigator();
const DashboardNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Initial" component={DashboardScreen} />
      
    </Stack.Navigator>
  );
};

export default DashboardNavigation;