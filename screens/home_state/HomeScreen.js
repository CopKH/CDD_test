import {
  Box,
  Button,
  HStack,
  ScrollView,
  Text,
  View,
  VStack,
} from "native-base";
import React, { useState } from "react";
import TextHomeManuBar from "../../components/Text/TextHome/TextHomeManuBar";
import TextSubmit from "../../components/Text/TextProfile/TextSubmit";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Color from "../../constants/Color";
import HomeButtonComponent from "../../components/Button/HomeButtonComponent";
import TextHome from "../../components/Text/TextHome/TextHome";
import TextHome2 from "../../components/Text/TextHome/TextHome2";
import TextHomeTable from "../../components/Text/TextHome/TextHomeTable";
import TextHomeTableList from "../../components/Text/TextHome/TextHomeTableList";
import CardHomeComponents from "../../components/Card/CardHomeComponents";
import CardHomeComponentsList from "../../components/Card/CardHomeComponentsList";
import CardHome1 from "../../assets/icon/svg/CardHome1.svg";
import CardHome2 from "../../assets/icon/svg/CardHome2.svg";
import CardHome3 from "../../assets/icon/svg/CardHome3.svg";
import CardHome4 from "../../assets/icon/svg/CardHome4.svg";
import HomeDetailsScreen from "./HomeDetailsScreen";
import { useNavigation, useRoute } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const HomeComponent = [
  {
    name: "ข้อมูล",
    icon: "appstore1",
    active: 0,
  },
  {
    name: "ระบบ",
    icon: "creditcard",
    active: 0,
  },
];

const Card = [
  {
    name: "กองทุนฯ สตรี",
    des: "ระบบกองทุนฯ สตรี",
    bg: "#D76B9E",
    Card: CardHome1,
    id: 1,
    List: [
      {
        no: "",
        provices: "จังหวัด",
        district: "อำเภอ",
        subDistrict: "ตำบล",
        project: "โครงการ..",
      },
      {
        no: 1,
        provices: "แม่ฮ่องสอน",
        district: "ปาย",
        subDistrict: "ทุ่งยาว",
        project: "โครงการ..",
      },
      {
        no: 2,
        provices: "แม่ฮ่องสอน",
        district: "ปาย",
        subDistrict: "ทุ่งยาว",
        project: "โครงการ..",
      },
      {
        no: 3,
        provices: "แม่ฮ่องสอน",
        district: "ปาย",
        subDistrict: "ทุ่งยาว",
        project: "โครงการ..",
      },
      {
        no: 4,
        provices: "แม่ฮ่องสอน",
        district: "ปาย",
        subDistrict: "ทุ่งยาว",
        project: "โครงการ..",
      },
    ],
  },
  {
    name: "สินค้า OTOP",
    des: "ระบบสินค้า OTOP",
    bg: "#F5AF44",
    Card: CardHome2,
    id: 2,
    List: [
      {
        no: 1,
        provices: "แม่ฮ่องสอน",
        district: "ปาย",
        subDistrict: "ทุ่งยาว",
        project: "โครงการ..",
      },
      {
        no: 2,
        provices: "แม่ฮ่องสอน",
        district: "ปาย",
        subDistrict: "ทุ่งยาว",
        project: "โครงการ..",
      },
      {
        no: 3,
        provices: "แม่ฮ่องสอน",
        district: "ปาย",
        subDistrict: "ทุ่งยาว",
        project: "โครงการ..",
      },
    ],
  },
  {
    name: "ข้อมูลความจำเป็น\nพื้นฐาน (จปฐ.)",
    des: "ระบบข้อมูลความจำเป็นพื้นฐาน (จปฐ.)",
    bg: "#90B865",
    Card: CardHome3,
    id: 3,
    List: [
      {
        no: 1,
        provices: "แม่ฮ่องสอน",
        district: "ปาย",
        subDistrict: "ทุ่งยาว",
        project: "โครงการ..",
      },
      {
        no: 2,
        provices: "แม่ฮ่องสอน",
        district: "ปาย",
        subDistrict: "ทุ่งยาว",
        project: "โครงการ..",
      },
      {
        no: 3,
        provices: "แม่ฮ่องสอน",
        district: "ปาย",
        subDistrict: "ทุ่งยาว",
        project: "โครงการ..",
      },
    ],
  },
  {
    name: "เศรษฐกิจฐานราก",
    des: "ระบบเศรษฐกิจฐานราก",
    bg: "#F97E7C",
    Card: CardHome4,
    id: 4,
    List: [
      {
        no: 1,
        provices: "แม่ฮ่องสอน",
        district: "ปาย",
        subDistrict: "ทุ่งยาว",
        project: "โครงการ..",
      },
      {
        no: 2,
        provices: "แม่ฮ่องสอน",
        district: "ปาย",
        subDistrict: "ทุ่งยาว",
        project: "โครงการ..",
      },
      {
        no: 3,
        provices: "แม่ฮ่องสอน",
        district: "ปาย",
        subDistrict: "ทุ่งยาว",
        project: "โครงการ..",
      },
      {
        no: 4,
        provices: "แม่ฮ่องสอน",
        district: "ปาย",
        subDistrict: "ทุ่งยาว",
        project: "โครงการ..",
      },
    ],
  },
];

const HomeScreen = () => {
  const [click, Setclick] = useState(1);
  const navigation = useNavigation();
  const PressList = (id) => {
    navigation.setParams({
      id: id + 1,
    });
    console.log(`PressList`, id + 1);
    Setclick(0);
  };
  const route = useRoute();
  const reqId = route.params ? route.params.id : 1;
  return (
    <View flex={1} bg="#fff">
      <VStack alignItems="center" top="10%">
        <HStack w="85%" space={2}>
          {HomeComponent.map((data, index) => {
            const PressHandler = () => {
              console.log(index);
              Setclick(index);
              navigation.setParams({
                id: reqId,
              });
            };
            return (
              <HomeButtonComponent
                active={click === index ? true : false}
                key={index}
                name={data.name}
                icon={data.icon}
                PressHandler={PressHandler}
              />
            );
          })}
        </HStack>
        {click === 0 ? (
          <HomeDetailsScreen data={Card} />
        ) : (
          <ScrollView
            w="90%"
            h="100%"
            contentContainerStyle={{ paddingBottom: "100%" }}
            showsVerticalScrollIndicator={false}
          >
            {Card.map((data, index) => {
              return (
                <CardHomeComponentsList
                  data={data}
                  key={index}
                  onPressHandler={() => PressList(index)}
                />
              );
            })}
          </ScrollView>
        )}
      </VStack>
    </View>
  );
};

export default HomeScreen;
