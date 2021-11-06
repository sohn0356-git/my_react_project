import React from 'react';
import { View, Text, Image } from 'react-native';
import LogoImage from '../../assets/images/winthiary_login_logo.png';

const LogoComponent = () => {
 return (
   <View style={{alignItems:'center', marginBottom:30}}>
      <Image 
        source={LogoImage}
        resizeMode='contain'
        style={{
          width:300,
          height:80,
        }}
      />
   </View>
 );
}

export default LogoComponent;