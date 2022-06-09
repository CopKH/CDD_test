import { Text, View } from "native-base";
import React from "react";
import Color from "../../../constants/Color";
import Font from "../../../constants/Font";


const TextProfile = (props) => {
  return (
    <Text
    {...props}
      fontFamily={Font.PromptMedium}
      fontSize={["4xl",'4xl']}
      color={Color.Primary}
    >
      {props.children}
    </Text>
  )
}

export default TextProfile
