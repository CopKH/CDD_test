import { useNavigation } from "@react-navigation/native";
import { Button, HStack, Pressable, View, VStack } from "native-base";
import React from "react";
import InputComponent from "../../components/Input/InputComponent";
import TextLogin3 from "../../components/Text/TextLogin/TextLogin3";
import TextLogout from "../../components/Text/TextProfile/TextLogout";
import TextSubmit from "../../components/Text/TextProfile/TextSubmit";
import Color from "../../constants/Color";
import { Ionicons } from '@expo/vector-icons'; 
const ForgotComponents = [
  {
    name: "กรอกเลขประจำตัวประชาชน",
  },
  {
    name: "เลขหลังบัตรประชาชน",

  },
];

const ForgotPasswordState = () => {
    const navigation = useNavigation();
    const GoHandler = () => {
      navigation.setParams({
        state: 1,
      });
      console.log("first");
    };
  return (
    <>
      {ForgotComponents.map((data, index) => {
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
     
      <VStack
        w="100%"
        alignItems="center"
        justifyContent="center"
        top="10%"
        space={2}
      >
                <Button size="12" w="80%" colorScheme={Color.Button} onPress={GoHandler}>
                <HStack justifyContent="center" alignItems="center" space={2}>
            <TextSubmit>ถัดไป</TextSubmit>
            <Ionicons name="arrow-forward" size={24} color="white" />
          </HStack>
        </Button>
        <Button
          size="12"
          w="80%"
          colorScheme={Color.Button}
          variant="ghost"
          onPress={GoHandler}
        >
          <TextSubmit color>เข้าสู่ระบบ</TextSubmit>
        </Button>

      </VStack>
    </>
  );
};

export default ForgotPasswordState;
