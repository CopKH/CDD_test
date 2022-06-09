import { Text, View } from "native-base";
import React from "react";
import Color from "../../../constants/Color";
import Font from "../../../constants/Font";

const TextSubmit = (props) => {
  return (
    <Text
      {...props}
      fontFamily={Font.PromptRegular}
      fontSize={["2xl", "10xl"]}
      color={props.color ? Color.Button : Color.White}
    >
      {props.children}
    </Text>
  );
};

export default TextSubmit;
