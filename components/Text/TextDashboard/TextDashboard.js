import { Text, View } from "native-base";
import React from "react";
import Color from "../../../constants/Color";
import Font from "../../../constants/Font";


const TextDashboard = (props) => {
  return (
    <Text
    {...props}
      fontFamily={Font.PromptRegular}
      fontSize={["3xl",'10xl']}
      color={Color.Primary}
    >
      {props.children}
    </Text>
  )
}

export default TextDashboard
