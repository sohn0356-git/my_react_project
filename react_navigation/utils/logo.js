import React from 'react';
import { Image } from "react-native";

export default LogoTitle = () => {
  return (
    <Image 
      style={{
        width:40,
        height:40
      }}
      source={require('../assets/pics/clock.png')}
    />
  );
}