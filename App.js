import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MainNavigation } from "./navigations/MainNavigation";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import React, { useCallback, useEffect, useState } from "react";
import * as Fonts from "expo-font";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NativeBaseProvider } from "native-base";
// import { fetchFonts } from './util/fucntion/fectchFonts';
export default function App() {

  const [loaded] = useFonts({
    "sarabun-bold": require("./assets/fonts/Sarabun/Sarabun-Bold.ttf"),
    "sarabun-extrabold": require("./assets/fonts/Sarabun/Sarabun-ExtraBold.ttf"),
    "sarabun-medium": require("./assets/fonts/Sarabun/Sarabun-Medium.ttf"),
    "sarabun-regular": require("./assets/fonts/Sarabun/Sarabun-Regular.ttf"),
    "prompt-regular": require("./assets/fonts/Prompt/Prompt-Regular.ttf"),
    "prompt-medium": require("./assets/fonts/Prompt/Prompt-Medium.ttf"),
    "db-medium": require("./assets/fonts/DB-Helvethaica-X-Med.ttf"),
    "db-regular": require("./assets/fonts/DB-Helvethaica-X.ttf"),
    "db-bold": require("./assets/fonts/DB-HelvethaicaMon-X-Bd.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
        <NativeBaseProvider>
        <MainNavigation />
        </NativeBaseProvider>
     
    </NavigationContainer>
  );
}
