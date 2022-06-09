import { Text, View } from "native-base";
import React from "react";
import Color from "../../../constants/Color";
import Font from "../../../constants/Font";

const TextSteper = (props) => {
  return (
    <Text
      {...props}
      fontFamily={Font.PromptRegular}
      fontSize={["22", "7xl"]}
      color='black'
    >
      {props.children}
    </Text>
  );
};

export default TextSteper;
