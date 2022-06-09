import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ProfileScreen from "../screens/profile_state/ProfileScreen";
import EditProfileScreen from "../screens/profile_state/EditProfileScreen";

import HomeNavigation from "./HomeNavigaiotn";
import NotificationNavigation from "./NotificationNavigation";
import ChatNavigation from "./ChatNavigation";
import { Ionicons } from "@expo/vector-icons";
import Color from "../constants/Color";
import { Box, Button, HStack, Text, View } from "native-base";
import TextProfile from "../components/Text/TextProfile/TextProfile";
import TextTab from "../components/Text/TextTab/TextTab";
import LoginNavgation from "./LoginNavigation";
import DashboardNavigation from "./DashboardNavigation";
import { Dimensions } from "react-native";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

const TabNavigation = () => {
  const windowHeight = Dimensions.get("window").height;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let bg = iconName = focused ?Color.Button:'';
          if (route.name === "หน้าหลัก") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "กราฟ") {
            iconName = focused ? "bar-chart" : "bar-chart-outline";
          } else if (route.name === "สนทนา") {
            iconName = focused ? "md-chatbox" : "md-chatbox-outline";
          } else if (route.name === "โปรไฟล์") {
            iconName = focused ? "person" : "person-outline";
          }
          return (
            <View
              bg={bg}
              left={8}
              w="350%"
              rounded={50}
              h="10"
              justifyContent="center"
              alignItems="center"
            >
              <HStack space={2}>
                <Ionicons
                  name={iconName}
                  size={20}
                  color={(iconName = focused ? "white" : "black")}
                />
                {(iconName = focused ? <TextTab>{route.name}</TextTab> : null)}
              </HStack>
            </View>
          );
        },
        tabBarActiveTintColor: "transparent",

        tabBarInactiveTintColor: "transparent",
        tabBarActiveBackgroundColor: () => {
          return (
            <Box alignItems="center">
              <Button onPress={() => console.log("hello world")}>
                Click Me
              </Button>
            </Box>
          );
        },
        tabBarStyle: {
          shadowColor: "red",
          borderRadius: 10,
          position:'absolute',
          overflow: "hidden",
          left: 0,
          bottom: 0,
          right: 0,
          backgroundColor: "#F8F9FB",
          height:windowHeight/9,
          borderRadius:20,
          // backgroundColor:"orange",
          // width:'90%',
        },
        tabBarLabelPosition: "beside-icon",
      })}
    >
      <Tab.Screen name="หน้าหลัก" component={HomeNavigation} />
      <Tab.Screen name="กราฟ" component={DashboardNavigation} />
      <Tab.Screen name="สนทนา" component={ChatNavigation} />
      <Tab.Screen name="โปรไฟล์" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginNavgation} />
      <Stack.Screen name="Tab" component={TabNavigation} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};
