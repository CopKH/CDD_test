import { Text, View } from "native-base";
import React from "react";
import Color from "../../../constants/Color";
import Font from "../../../constants/Font";


const TextProfile3 = (props) => {
  return (
    <Text
    {...props}
      fontFamily={Font.PromptRegular}
      fontSize={["lg",'10xl']}
      color={Color.Primary}
    >
      {props.children}
    </Text>
  )
}

export default TextProfile3
