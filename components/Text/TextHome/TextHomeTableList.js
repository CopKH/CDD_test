import { Text, View } from "native-base";
import React from "react";
import Color from "../../../constants/Color";
import Font from "../../../constants/Font";

const TextHomeTableList = (props) => {
  // console.log(props.color);
  return (
    <Text
      {...props}
      fontFamily={Font.PromptRegular}
      fontSize={["xl", "7xl"]}
      color='#666666'
    >
      {props.children}
    </Text>
  );
};

export default TextHomeTableList;
