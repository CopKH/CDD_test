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
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Chat, MessageType } from "@flyerhq/react-native-chat-ui";
import { useNavigation } from "@react-navigation/native";
import TextNotification from "../../components/Text/TextNotification/TextNotification";
import TextNotificationDes from "../../components/Text/TextNotification/TextNotificationDes";
import Color from "../../constants/Color";
import ChatComponent from "../../components/Chat/ChatComponent";

const ChatScreen = () => {
  return (
    <View flex={1} bg="#fff">
      <VStack top="7%" alignItems="center" pb="5%">
        <View
          borderBottomColor={Color.Primary}
          borderBottomWidth="0.2"
          w="100%"
          alignItems="center"
          pb="4%"
        >
          <TextNotification>สนทนา</TextNotification>
        </View>
      </VStack>
      <ChatComponent />
      <VStack pb="20%">
      </VStack>

    </View>
  );
};

export default ChatScreen;
