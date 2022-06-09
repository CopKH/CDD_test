import React from "react";
import { HStack, Pressable, View, VStack } from "native-base";

import TextHomeCard from "../Text/TextHome/TextHomeCard";
import TextHomeCard2 from "../Text/TextHome/TextHomeCard2";
import { Dimensions } from "react-native";
const CardHomeComponentsList = (props) => {
  const windowHeight = Dimensions.get("window").height;
  const { data,onPressHandler } = props;
  return (
    
      <View bg={data.bg} w="100%" mt="5%" rounded="2xl" h='30%'>
        <Pressable onPress={onPressHandler}> 
      <HStack h='100%'>
        <View ml="5%" w="70%" mt="5%">
          <TextHomeCard>{data.name}</TextHomeCard>
          <TextHomeCard2>{data.des}</TextHomeCard2>
        </View>
        <View right='60%' >
          <data.Card
            height="100%"
            w='100%'
            // preserveAspectRatio="xMinYMin slice"

            // style={{ transform: [{ rotateY: "180deg" }] }}
          />
        </View>
      </HStack>
      </Pressable>
    </View>
   
    
  );
};

export default CardHomeComponentsList;
