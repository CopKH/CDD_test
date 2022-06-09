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
} from "native-base";
import React from "react";
import InputComponent from "../../components/Input/InputComponent";
import TextLogout from "../../components/Text/TextProfile/TextLogout";
import TextProfile from "../../components/Text/TextProfile/TextProfile";
import TextProfile2 from "../../components/Text/TextProfile/TextProfile2";
import TextProfile3 from "../../components/Text/TextProfile/TextProfile3";
import Font from "../../constants/Font";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import TextSubmit from "../../components/Text/TextProfile/TextSubmit";
import Color from "../../constants/Color";
const EditProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { data } = route.params;
  const GoHandler = () => {
    navigation.goBack();

    console.log("first");
  };
  return (
    <NativeBaseProvider>
      <View flex={1} bg="#fff">
        <VStack alignItems="center" justifyContent="center" top="7%">
          <HStack>
            <TextProfile2>แก้ไข</TextProfile2>
            <View left="300%">
              <Pressable onPress={GoHandler}>
                <TextProfile2>x</TextProfile2>
              </Pressable>
            </View>
          </HStack>

          <VStack w="90%">
            <HStack ml="2%" bottom={-8}>
              <TextProfile3>{data}</TextProfile3>
            </HStack>
            <VStack>
              <InputComponent></InputComponent>
            </VStack>
          </VStack>
          {data === "รหัสผ่านใหม่" && (
            <VStack w="90%">
              <HStack ml="2%" bottom={-8}>
              <TextProfile3>ยืนยันรหัสผ่านใหม่</TextProfile3>
              </HStack>
             
              <VStack>
                <InputComponent></InputComponent>
              </VStack>
            </VStack>
          )}
          <View w="100%" alignItems="center" justifyContent="center" mt="120%">
            <Button size="12" w="80%" colorScheme={Color.Button} onPress={GoHandler}>
              <TextSubmit>บันทึก</TextSubmit>
            </Button>
          </View>
        </VStack>
      </View>
    </NativeBaseProvider>
  );
};

export default EditProfileScreen;
