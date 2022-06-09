import { View } from "native-base";
import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import { Ionicons } from "@expo/vector-icons";
const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  // console.log(messages)
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "ระบบบูรณาการฐานข้อมูลประชาชนและการบริการภาครัฐ Linkage Center",
        createdAt: new Date(),
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "😋 สวัสดีค่ะ",
              value: "yes",
            },
            {
              title: "📷 การลงทะเบียน",
              value: "yes_picture",
            },
          ],
        },
        user: {
          _id: 2,
          name: "React Native",
        },
      },
    ]);
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View w="100%" right={5} bottom={2}>
          <Ionicons name="send" size={24} color="#2e64e5" />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: "#2e64e5",
        },
      }}
      textStyle={{
        right: {
          color: "",
        },
      }}
    />;
  };

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      // renderBubble={renderBubble}
      // renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
    />
  );
};

export default ChatComponent;
