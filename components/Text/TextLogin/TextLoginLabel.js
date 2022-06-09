import { Text, View } from "native-base";
import React from "react";
import Color from "../../../constants/Color";
import Font from "../../../constants/Font";


const TextLoginLabel = (props) => {
  return (
    <Text
    {...props}
      fontFamily={Font.PromptMedium}
      fontSize={["3xl",'10xl']}
      color='black'
    >
      {props.children}
    </Text>
  )
}

export default TextLoginLabel
