import { Text, View } from "native-base";
import React from "react";
import Color from "../../../constants/Color";
import Font from "../../../constants/Font";


const TextTab = (props) => {
  return (
    <Text
    {...props}
      fontFamily={Font.PromptMedium}
      fontSize={["lg",'4xl']}
      color={Color.White}
    >
      {props.children}
    </Text>
  )
}

export default TextTab
