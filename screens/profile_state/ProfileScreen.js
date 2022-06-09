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
  ScrollView,
} from "native-base";
import React from "react";
import InputComponent from "../../components/Input/InputComponent";
import TextLogout from "../../components/Text/TextProfile/TextLogout";
import TextProfile from "../../components/Text/TextProfile/TextProfile";
import TextProfile2 from "../../components/Text/TextProfile/TextProfile2";
import TextProfile3 from "../../components/Text/TextProfile/TextProfile3";
import Font from "../../constants/Font";
import { useNavigation } from "@react-navigation/native";
const ProfileComponents = [
  {
    name: "ชื่อ-สกุล",
    edit: false,
    
  },
  {
    name: "เลขบัตรประชาชน",
    edit: false,
  },
  {
    name: "อีเมล",
    edit: true,
    change:"อีเมล"
  },
  {
    name: "เบอร์โทร",
    edit: true,
    change:"เบอร์โทร"
  },
  {
    name: "รหัสผ่าน",
    edit: true,
    change:"รหัสผ่านใหม่"
  },
];

const ProfileScreen = () => {
  const navigation = useNavigation();
  const GoHandler = (data) => {
    navigation.navigate("EditProfile", { data: data });

    console.log("first");
  };
  return (
      <View flex={1} bg="#fff">
        <ScrollView
            contentContainerStyle={{ paddingBottom: "30%" }}
            showsVerticalScrollIndicator={false}
          >
        <VStack alignItems="center" justifyContent="center" top="7%">
          <View>
            <TextProfile2>โปรไฟล์</TextProfile2>
          </View>
          <Image
            mt="2%"
            borderRadius={20}
            source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg",
            }}
            alt="Alternate Text"
            size="xl"
          />
          <TextProfile>ทดสอบ ระบบ</TextProfile>
          <View top={-25} mb={-10}>
            <TextProfile2>email@</TextProfile2>
          </View>

          {ProfileComponents.map((data, index) => {
            return (
              <VStack w="90%" key={index}>
                <HStack ml="2%" bottom={-8}>
                  <TextProfile3>{data.name}</TextProfile3>
                </HStack>
                <HStack>
                  <InputComponent
                    isDisabled
                    placeholder={data.name}
                  ></InputComponent>
                  <Pressable onPress={() => GoHandler(data.change)}>
                    {data.edit && <TextProfile3>แก้ไข</TextProfile3>}
                  </Pressable>
                </HStack>
              </VStack>
            );
          })}
        </VStack>
        <View mt="30%" ml="5%" align-self="flex-end" alignItems="flex-start">
          <TextLogout>ออกจากระบบ</TextLogout>
        </View>
        </ScrollView>
      </View>
  );
};

export default ProfileScreen;
