import { useNavigation } from "@react-navigation/native";
import { Button, Checkbox, HStack, Link, Text, View, VStack } from "native-base";
import React from "react";
import TextLoginDescription from "../../components/Text/TextLogin/TextLoginDescription";
import TextLoginLabel from "../../components/Text/TextLogin/TextLoginLabel";
import TextSubmit from "../../components/Text/TextProfile/TextSubmit";
import Color from "../../constants/Color";

const Step1 = ({ step }) => {
  const navigation = useNavigation();
  const NextStep = () => {
    navigation.setParams({
      step: step + 1,
    });
  };
  
  return (
    <View w='100%'>
      <VStack ml="10%"  h="84%" w='80%'>
        <TextLoginLabel>1</TextLoginLabel>
        <TextLoginLabel>ข้อตกลง</TextLoginLabel>
        <TextLoginDescription>
          ข้อมูลส่วนบุคคลของผู้ใช้งานสำหรับการใช้งานเว็บไซต์นี้ เช่น
          ข้อมูลที่ผู้ใช้งานลงทะเบียน ข้อมูลการใช้งานเว็บไซต์ของผู้ใช้งาน
          และ/หรือข้อมูลอื่นใดของผู้ใช้งาน
          ได้รับความคุ้มครองภายใต้นโยบายคุ้มครองข้อมูลส่วนบุคคล (Privacy Policy)
          โดยผู้ใช้งานสามารถศึกษาข้อมูลเพิ่มเติมได้จาก 
         
        </TextLoginDescription>
        <Link href="https://nativebase.io">
           Privacy Policy
      </Link>

      </VStack>
      <HStack space={5} w='80%' justifyItems='center' alignSelf='center' mt='1%' alignItems='center'>
        <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />
        <Button size="12" w="90%" colorScheme={Color.Button} onPress={NextStep}>
          <TextSubmit>ยินยอม</TextSubmit>
        </Button>
       
      </HStack>

   
    
    </View>
  );
};

export default Step1;
