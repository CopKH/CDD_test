import { Text, View } from "native-base";
import React from "react";
import Color from "../../../constants/Color";
import Font from "../../../constants/Font";


const TextLogin3 = (props) => {
  return (
    <Text
    {...props}
      fontFamily={Font.PromptRegular}
      fontSize={["xl",'10xl']}
      color='gray.400'
    >
      {props.children}
    </Text>
  )
}

export default TextLogin3
