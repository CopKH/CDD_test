import { Text, View } from "native-base";
import React from "react";
import Color from "../../../constants/Color";
import Font from "../../../constants/Font";


const TextLogin2 = (props) => {
  return (
    <Text
    {...props}
      fontFamily={Font.PromptRegular}
      fontSize={["3xl",'10xl']}
      color='gray.500'
    >
      {props.children}
    </Text>
  )
}

export default TextLogin2
