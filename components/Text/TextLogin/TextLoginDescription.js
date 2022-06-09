import { Text, View } from "native-base";
import React from "react";
import Color from "../../../constants/Color";
import Font from "../../../constants/Font";


const TextLoginDescription = (props) => {
  return (
    <Text
    {...props}
      fontFamily={Font.PromptRegular}
      fontSize={["2xl",'10xl']}
      color='black'
    >
      {props.children}
    </Text>
  )
}

export default TextLoginDescription
