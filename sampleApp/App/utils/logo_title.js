import React from 'react';
import { Image, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default LogoTitle = (props) => {
  return (
    <View style={{flexDirection:'row'}}>
      <Image 
        style={{
          width:40,
          height:40
        }}
        source={require('../assets/image/on_d05.png')}
      />
      <TouchableOpacity style={{paddingLeft:10}}>
        <Icon
          style={{paddingRight:15}}
          name='chevron-up'
          size={21}
          onPress={()=>{}}
        />
        <Icon
          style={{paddingRight:15}}
          name='chevron-down'
          size={21}
          onPress={()=>{}}
        />
      </TouchableOpacity>
    </View>
  );
}