import React, { useState } from 'react';
import {
  Text, View, StyleSheet,TouchableOpacity,
} from 'react-native';
import Slider from '@react-native-community/slider';

const ex_slider = () => {
  const [gaze, setGaze] = useState(0)

  const onChangeGaze = (val) => {
    setGaze(Math.floor(val));
  }
  
  return <View style={{alignItems:'center'}}>
    <Slider 
    minimumValue={0}
    maximumValue={100}
    value={gaze}
    onValueChange={(val)=>onChangeGaze(val)}
    style={{height:40, width:300}}></Slider>
      <Text>{gaze}</Text>
    </View>
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'pink',
    alignItems:'center',
    padding:5,
    marginBottom:200
  }
})

export default ex_slider;