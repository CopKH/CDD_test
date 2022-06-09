import { useNavigation } from "@react-navigation/native";
import { Button, HStack, Pressable, View, VStack } from "native-base";
import React from "react";
import InputComponent from "../../components/Input/InputComponent";
import TextLogin3 from "../../components/Text/TextLogin/TextLogin3";
import TextLogout from "../../components/Text/TextProfile/TextLogout";
import TextSubmit from "../../components/Text/TextProfile/TextSubmit";
import Color from "../../constants/Color";

const LoginComponents = [
  {
    name: "เลขประจำตัวประชาชน",
  },
  {
    name: "รหัสผ่าน",
  },
];

const LoginState = ({ forgot }) => {
  const navigation = useNavigation();
  const GoHandler = () => {
    navigation.navigate("State");
    // console.log("first");
  };
  const GoHandler2 = () => {
    navigation.navigate("Tab");
    // console.log("first");
  };
  const ForgotHandler = () => {
    navigation.setParams({
      state: 2,
    });
    console.log("first");
  };
  return (
    <>
      {LoginComponents.map((data, index) => {
        return (
          <VStack w="90%" key={index}>
            <HStack ml="2%" bottom={-8}>
              <TextLogin3>{data.name}</TextLogin3>
            </HStack>
            <HStack>
              <InputComponent></InputComponent>
            </HStack>
          </VStack>
        );
      })}
      <Pressable onPress={ForgotHandler} left="30%" >
      <TextLogout>ลืมรหัสผ่าน ? </TextLogout>
      </Pressable>
      <VStack
        w="100%"
        alignItems="center"
        justifyContent="center"
        top="5%"
        space={2}
      >
        <Button
          size="12"
          w="80%"
          colorScheme={Color.Button}
          
          onPress={GoHandler2}
        >
          <TextSubmit >เข้าสู่ระบบ</TextSubmit>
        </Button>
        <Button size="12" w="80%" colorScheme={Color.Button} variant="ghost"  onPress={GoHandler}>
          <TextSubmit color>ลงทะเบียน</TextSubmit>
        </Button>
      </VStack>
    </>
  );
};

export default LoginState;
