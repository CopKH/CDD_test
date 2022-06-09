import {
  NativeBaseProvider,
  Text,
  Box,
  HStack,
  Image,
  VStack,
  Input,
  View,
  Pressable,
  Button,
  ScrollView,
} from "native-base";
import React, { useState } from "react";
import InputComponent from "../../components/Input/InputComponent";
import TextLogout from "../../components/Text/TextProfile/TextLogout";
import TextProfile from "../../components/Text/TextProfile/TextProfile";
import TextProfile2 from "../../components/Text/TextProfile/TextProfile2";
import TextProfile3 from "../../components/Text/TextProfile/TextProfile3";
import Font from "../../constants/Font";
import { useNavigation, useRoute } from "@react-navigation/native";
import TextLogin from "../../components/Text/TextLogin/TextLogin";
import TextLogin2 from "../../components/Text/TextLogin/TextLogin2";
import Color from "../../constants/Color";
import TextSubmit from "../../components/Text/TextProfile/TextSubmit";
import Logo from "../../assets/icon/svg/LogoLogin.svg";
import TopLogo from "../../assets/icon/svg/TopLogoLogin.svg";
import TextLogin3 from "../../components/Text/TextLogin/TextLogin3";
import LoginState from "./LoginState";
import ForgotPasswordState from "./ForgotPasswordState";
import { Dimensions } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const InitialScreen = () => {
  let state = 1;
  let ScreenState;
  const route = useRoute();
  if (route.params) {
    state = route.params.state;
  }

  const Screens = [0, LoginState, ForgotPasswordState];
  ScreenState = Screens[state];
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <View flex={1} bg="#fff">
            <KeyboardAwareScrollView
        // enableOnAndroid={true}
        contentContainerStyle={{ paddingBottom: "10%" }}
        style={{
          flex: 1,
        }}
      >
             <VStack alignItems="center" justifyContent="center" pt="15%">
          <TopLogo width={windowWidth / 5} height={windowHeight / 12} />

          <TextLogin>ระบบบูรณาการฐานข้อมูลประชาชนและการบริการภาครัฐ</TextLogin>
          <TextLogin>Linkage Center</TextLogin>
          <View mt="5%" mb="5%">
            <Logo width={windowWidth} height={windowHeight / 4} />
          </View>

          <TextLogin2>
            {state === 1 ? "เข้าสู่ระบบ" : "ลืมรหัสผ่าน ?"}
          </TextLogin2>
          <ScreenState />
          {/* {fortgot ? <ForgotPasswordState /> : <LoginState forgot={Setforgot(true)} />} */}
        </VStack>
      </KeyboardAwareScrollView>
    
       
    </View>
  );
};

export default InitialScreen;
