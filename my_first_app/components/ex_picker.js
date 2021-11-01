import React, { useState } from 'react';
import {
  Text, View, StyleSheet,TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-community/picker';

const ex_picker = () => {
  const [country, setCountry] = useState('canada')
  const onCountryHandler = (choice, idx) => {
    setCountry(choice);
  }
  return(
    <View style={styles.container}> 
      <Text>Hello dare</Text>
      <Picker 
        style={{height:50, width:250}}
        selectedValue={country}
        onValueChange={(val,idx)=>onCountryHandler(val, idx)}
        >
          <Picker.Item label="Korea" value="korea"></Picker.Item>
          <Picker.Item label="Canada" value="canada"></Picker.Item>
          <Picker.Item label="USA" value="usa"></Picker.Item>
          <Picker.Item label="China" value="china"></Picker.Item>
        </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'pink',
    alignItems:'center',
    padding:5,
    marginBottom:200,
  }
})

export default ex_picker;