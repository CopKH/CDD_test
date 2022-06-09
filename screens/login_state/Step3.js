import { useNavigation } from "@react-navigation/native";
import { Button, Checkbox, HStack, Text, View, VStack } from "native-base";
import React from "react";
import InputComponent from "../../components/Input/InputComponent";
import TextLogin3 from "../../components/Text/TextLogin/TextLogin3";
import TextLoginLabel from "../../components/Text/TextLogin/TextLoginLabel";
import TextSubmit from "../../components/Text/TextProfile/TextSubmit";
import Color from "../../constants/Color";
import { Ionicons } from '@expo/vector-icons'; 

const Step03Components = [
  {
    name: "ชื่อ-สกุล",
  },
  {
    name: "อีเมล",
  },
  {
    name: "เบอร์โทร",
  },
];

const Step3 = ({ step }) => {
  const navigation = useNavigation();
  const NextStep = () => {
    navigation.setParams({
      step: step + 1,
    });
  };
  const Back = () => {
    navigation.setParams({
      step: step - 1,
    });
  };
  return (
    <View w="100%">
      <VStack ml="10%"  h="80%">
      <View mb='5%'> 
        <TextLoginLabel>3</TextLoginLabel>
        <TextLoginLabel>ข้อมูลส่วนตัว</TextLoginLabel >
        </View>
        {Step03Components.map((data, index) => {
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
      </VStack>
      <VStack space={2} w='90%' justifyItems='center' alignSelf='center'>
        
        <Button size="12" w="100%" colorScheme={Color.Button} onPress={NextStep}>
          <HStack justifyContent='center' alignItems='center' space={2}>
          <TextSubmit>ถัดไป</TextSubmit>
          <Ionicons name="arrow-forward" size={24} color="white" />
          </HStack>
          
        </Button>
        <Button size="12" w="100%" colorScheme={Color.Button} onPress={Back} variant="ghost">
        <HStack justifyContent='center' alignItems='center' space={2}>
        
          <Ionicons name="arrow-back" size={24} color={Color.Button} />
          <TextSubmit color>กลับ</TextSubmit>
          </HStack>
        </Button>
      </VStack>
    </View>
  );
};

export default Step3;
