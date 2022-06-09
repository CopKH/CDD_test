import { Text, View } from "native-base";
import React from "react";
import Color from "../../../constants/Color";
import Font from "../../../constants/Font";

const TextHome2 = (props) => {
  // console.log(props.color);
  return (
    <Text
      {...props}
      fontFamily={Font.PromptRegular}
      fontSize={["2xl", "7xl"]}
      color={props.color ?  Color.Primary :'white'}
    >
      {props.children}
    </Text>
  );
};

export default TextHome2;
