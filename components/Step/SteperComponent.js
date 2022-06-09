import React from "react";
import { Center, View, NativeBaseProvider, Text } from "native-base";
import StepIndicator from "react-native-step-indicator";
import Color from "../../constants/Color";
import TextSteper from "../Text/TextStep/TextSteper";
import Font from "../../constants/Font";
const Step = (props) => {
  console.log(props);
  const start = props.start - 1;
  const end = props.end;
  const dataLabels = [
    { id: "01" },
    { id: "02" },
    { id: "03" },
    {id: "04",
    },
  ];
  const data = dataLabels.slice(start, end).map((data, key) => {
    return (
      <Center key={key}>{/* <TextSteper >{data.id}</TextSteper> */}</Center>
    );
  });

  const customStyles = {
    stepIndicatorSize: 12,
    currentStepIndicatorSize: 25,
    currentStepStrokeWidth: 0,
    separatorStrokeWidth: 2,
    separatorFinishedColor: "#8dcdda",
    separatorUnFinishedColor: "#c4c4c4",
    stepIndicatorFinishedColor: "#8dcdda",
    stepIndicatorUnFinishedColor: "#c4c4c4",
    stepIndicatorCurrentColor: "#8dcdda",
    stepIndicatorLabelCurrentColor: "#8dcdda",
    stepIndicatorLabelFinishedColor: "#8dcdda",
    stepIndicatorLabelUnFinishedColor: "#c4c4c4",
    labelColor: Color.Primary,
    labelSize: 10,
    currentStepLabelColor: Color.Primary,
    labelFontFamily: Font.PromptMedium,
  };
  return (
    <>
      <View
        style={{
          borderBottomColor: "#8dcdda",
          // borderBottomWidth: 1,
          left: 0,
          top: 16,
        }}
      />
      <StepIndicator
        stepCount={4}
        customStyles={customStyles}
        currentPosition={props.step - 1}
        labels={data}
      />
    </>
  );
};

export default Step;
