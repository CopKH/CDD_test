import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ChatScreen from "../screens/chat_state/ChatScreen";

const Stack = createNativeStackNavigator();
const ChatNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Initial" component={ChatScreen} />
      
    </Stack.Navigator>
  );
};

export default ChatNavigation;