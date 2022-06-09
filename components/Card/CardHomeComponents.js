import React from 'react'
import { HStack, View } from 'native-base'
import TextHomeTableList from '../Text/TextHome/TextHomeTableList'
import TextHomeTableList2 from '../Text/TextHome/TextHomeTableList2'

const CardHomeComponents = (props) => {
    const {data}= props
  return (
    <HStack pt='10%'borderBottomColor='#666666' borderBottomWidth='.2' left='5%' w='95%' pb='5%'>
    <View w="10%">
      <TextHomeTableList2>{data.no}</TextHomeTableList2>
    </View>
    <View w="20%">
      <TextHomeTableList>{data.provices}</TextHomeTableList>
    </View>
    <View w="20%">
      <TextHomeTableList>{data.district}</TextHomeTableList>
    </View>
    <View w="20%">
      <TextHomeTableList>
        {data.subDistrict}
      </TextHomeTableList>
    </View>
    <View w="20%">
      <TextHomeTableList>{data.project}</TextHomeTableList>
    </View>
  </HStack>
  )
}

export default CardHomeComponents