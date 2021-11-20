import React, { useState } from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function PickerEx(){
  const levelRange = {
    Single:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26],
    Double:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],
    Coop:[2,3,4,5],
    SingPerf:[1,2,3,4,5,10,15],
    DoubPerf:[1,2,3,4,5,6,7,8,20,23,24]
  }
  const [mode, setMode] = useState('single');
  const [level, setLevel] = useState(4);
  const [modeLevel, setModeLevel] = useState(levelRange[mode])
  const [country, setCountry] = useState('korea');
  const onCountryHandler = (choice, idx) => {
    setCountry(choice);
  };
  return (
    <View 
      style={{
        padding:5,
        marginBottom:200,
        flexDirection:'row'
      }}
    > 
      <Picker
        style={{ height:50, width:100 }}
        selectedValue={mode}
        onValueChange={(itemValue, itemIndex) => {
          setMode(itemValue)
          setModeLevel(levelRange[itemValue])
        }}
      >
        {Object.keys(levelRange).map((val,idx)=>(<Picker.Item label={val} key={idx} value={val}/>))}
      </Picker>
      <Picker
        style={{ height:50, width:100 }}
        selectedValue={level}
        onValueChange={(itemValue, itemIndex) => setLevel(itemValue)}
      >
        { modeLevel ? Object.values(modeLevel).map((val,idx)=>(<Picker.Item label={val} key={idx} value={val}/>)):null}
      </Picker>
    </View>
  )
}