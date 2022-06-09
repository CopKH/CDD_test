import { Text, View } from "native-base";
import React from "react";
import Color from "../../../constants/Color";
import Font from "../../../constants/Font";

const TextHomeTable = (props) => {
  // console.log(props.color);
  return (
    <Text
      {...props}
      fontFamily={Font.PromptRegular}
      fontSize={["2xl", "7xl"]}
      color={Color.Primary}
    >
      {props.children}
    </Text>
  );
};

export default TextHomeTable;
