import { View, Text } from "react-native";
import React from "react";
import Color from "../../constants/Color";
import { Button, HStack } from "native-base";
import TextHomeManuBar from "../Text/TextHome/TextHomeManuBar";
import { AntDesign } from "@expo/vector-icons";
const HomeButtonComponent = (props) => {
  console.log(`active`, props.active);
  return (
    <Button
      size="12"
      w="50%"
      colorScheme={Color.Button}
      rounded="lg"
      // key={index}
      onPress={props.PressHandler}
      // variant='ghost'
      variant={props.active ? "solid" : "ghost"}
    >
      <HStack justifyContent="center" alignItems="center" space={2}>
        <AntDesign
          name={props.icon}
          size={16}
          color={props.active ? "white" : "black"}
          // color='white'
        />
        <TextHomeManuBar color={props.active ? false : true}>
          {props.name}
        </TextHomeManuBar>
      </HStack>
    </Button>
  );
};

export default HomeButtonComponent;
