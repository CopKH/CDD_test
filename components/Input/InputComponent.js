import React from "react";
import { Input, Text } from "native-base";
import Font from "../../constants/Font";
import Color from "../../constants/Color";
import { KeyboardAvoidingView, Platform } from "react-native";

const InputComponent = (props) => {
  return (
    <Input
    
      ml={2}
      {...props}
      shadow={props.shadow}
      fontSize={
        Platform.OS === "android"
          ? ["2xl", "2xl", "3xl", "3xl"]
          : ["2xl", "2xl", "3xl", "3xl"]
      }
      fontFamily={Font.PromptMedium}
      size={
        Platform.OS === "android"
          ? ["2xl", "2xl", "2xl", "2xl"]
          : ["2xl", "2xl", "2xl", "2xl"]
      }
      // placeholder={props.placeholder}
      placeholderTextColor="gray.500"
      color="gray.500"
      w="90%"
      variant="underlined"
    />
  );
};

export default InputComponent;
