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
  Center,
} from "native-base";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import TextNotification from "../../components/Text/TextNotification/TextNotification";
import TextNotificationDes from "../../components/Text/TextNotification/TextNotificationDes";
import Color from "../../constants/Color";

const Notification = [
  {
    date: "วันนี้",
    description: [
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    new: true,
  },
  {
    date: "เมื่อวาน",
    description: [
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
    new: false,
  },
];

const NotificationScreen = () => {
  return (
    <View flex={1} bg="#fff">
      <VStack top="7%"alignItems="center" >
        <View borderBottomColor={Color.Primary} borderBottomWidth="0.2" w="100%" alignItems="center" pb='4%'>
          <TextNotification>แจ้งเตือน</TextNotification>
        </View>
        {Notification.map((data,index)=>{
          // console.log(data)
          return(
            <View w="90%" alignItems="stretch" key={index} mt='5%'>
            <View>
              <TextNotification>{data.date}</TextNotification>
            </View>
            {data.description.map((description,index)=>{
              // console.log(description);
              return(
                <HStack borderBottomColor={Color.Primary} borderBottomWidth="0.2" space={4} key={index}>
                <View mt="4%">
                 {data.new ? <AntDesign name="exclamationcircle" size={12} color="#FF0000" /> : null} 
                </View>
                <TextNotificationDes>
                  {description}
                </TextNotificationDes>
              </HStack>
              )
            })}
        
          </View>
          )
        })}
       
      </VStack>
    </View>
  );
};

export default NotificationScreen;
