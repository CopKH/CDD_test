import { useRoute } from "@react-navigation/native";
import { Center, View, Text, NativeBaseProvider } from "native-base";
import React from "react";
import Step from "../../components/Step/SteperComponent";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const MainState = () => {
  let step = 1;
  const Screens = [0, Step1, Step2, Step3, Step4];
  let ScreenState;
  const route = useRoute();
  console.log(route.params);
  if (route.params) {
    step = route.params.step;
  }
  ScreenState = Screens[step];
  return (
    <NativeBaseProvider>
      <View mt="20%">
        <Step start={1} end={4} step={step} />
        <ScreenState step={step} />
      </View>
    </NativeBaseProvider>
  );
};

export default MainState;
