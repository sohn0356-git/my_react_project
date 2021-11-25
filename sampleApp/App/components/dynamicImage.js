import React from "react";
import {Image} from 'react-native';

export default function DynamicImage(props){
  return (
      <Image source={require('../assets/image/a_21.png')}
          resizeMode="contain"
          style={{ height: 24, width: 24 }}
      />
  ); 
}
