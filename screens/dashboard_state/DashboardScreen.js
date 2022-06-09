import { ScrollView, View, VStack } from "native-base";
import React from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Dimensions } from "react-native";
import TextDashboard from "../../components/Text/TextDashboard/TextDashboard";
import Color from "../../constants/Color";
const DashboardScreen = () => {
  const screenWidth = Dimensions.get("window").width - 50;
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(255, 183, 3, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Rainy Days"], // optional
  };
  const data2 = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8],
  };
  const chartConfig = {
    backgroundGradientFrom: "#023047",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#023047",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(251, 133, 100, ${opacity})`,
    strokeWidth: 20, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
    barRadius:20,
  };
  return (
    <View flex={1} bg="#fff">
      <ScrollView
            contentContainerStyle={{ paddingBottom: "30%" }}
            showsVerticalScrollIndicator={false}
          >
                 <VStack top="7%" alignItems="center" pb="5%">
        <View
          borderBottomColor={Color.Primary}
          borderBottomWidth="0.2"
          w="100%"
          alignItems="center"
          pb="4%"
        >
          <TextDashboard>กราฟ</TextDashboard>
        </View>
        <View alignItems="center" mt="10%" >
          <LineChart
            data={data}
            width={screenWidth}
            height={200}
            chartConfig={chartConfig}
            bezier
            withShadow
          />
        </View>
        <View alignItems="center" mt="10%">
          <ProgressChart
            data={data2}
            width={screenWidth}
            height={220}
            strokeWidth={16}
            radius={32}
            chartConfig={chartConfig}
            hideLegend={false}
            
          />
        </View>
      </VStack>
          </ScrollView>
 
    </View>
  );
};

export default DashboardScreen;
