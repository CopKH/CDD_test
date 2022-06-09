import { Text, View } from "native-base";
import React from "react";
import Color from "../../../constants/Color";
import Font from "../../../constants/Font";


const TextNotificationDes = (props) => {
  return (
    <Text
    {...props}
      fontFamily={Font.PromptRegular}
      fontSize={["2xl",'10xl']}
      color={Color.Primary}
    >
      {props.children}
    </Text>
  )
}

export default TextNotificationDes
