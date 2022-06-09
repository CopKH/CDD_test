import { Text, View } from "native-base";
import React from "react";
import Color from "../../../constants/Color";
import Font from "../../../constants/Font";

const TextLoginLsit = (props) => {
  return (
    <Text
      {...props}
      fontFamily={Font.PromptRegular}
      fontSize={["2xl", "7xl"]}
      color='gray.600'
    >
      {props.children}
    </Text>
  );
};

export default TextLoginLsit;
