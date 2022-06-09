import { Text, View } from "native-base";
import React from "react";
import Color from "../../../constants/Color";
import Font from "../../../constants/Font";


const TextLogout = (props) => {
  return (
    <Text
    {...props}
      fontFamily={Font.PromptMedium}
      fontSize={["2xl",'10xl']}
      color={Color.Secondary}
    >
      {props.children}
    </Text>
  )
}

export default TextLogout
