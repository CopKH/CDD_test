import { useRoute } from "@react-navigation/native";
import { HStack, ScrollView, View, VStack } from "native-base";
import React from "react";
import CardHomeComponents from "../../components/Card/CardHomeComponents";
import TextHome from "../../components/Text/TextHome/TextHome";
import TextHome2 from "../../components/Text/TextHome/TextHome2";
import TextHomeTable from "../../components/Text/TextHome/TextHomeTable";

const HomeDetailsScreen = (props) => {
  const { data } = props;
  const route = useRoute();
  const { id } = route.params;
  console.log(`id ${id}`);
  const DetailsList = data.find((data) => data.id === id);
  console.log(DetailsList);
  // console.log(`data`,data)
  return (
    <View bg={DetailsList.bg} w="100%" mt="10%" rounded="3xl" h="100%">
      <VStack mt="5%">
        <View ml="5%">
          <TextHome>{DetailsList.name} </TextHome>
          <TextHome2>รหัส : 1234</TextHome2>
          <TextHome2>สถานะการเป็นสมาชิก :</TextHome2>
        </View>
        <ScrollView
          contentContainerStyle={{ paddingBottom: "100%" }}
          showsVerticalScrollIndicator={false}
        >
          <View bg="#fff" w="90%" mt="10%" rounded="3xl" alignSelf="center">
            <VStack w="100%">
              <HStack alignContent="center" w="100%" bg="red.200"></HStack>
              {DetailsList.List.map((data, index) => {
                return <CardHomeComponents data={data} key={index} />;
              })}
            </VStack>
          </View>
        </ScrollView>
      </VStack>
    </View>
  );
};

export default HomeDetailsScreen;
