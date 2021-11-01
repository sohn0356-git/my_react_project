/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import TextView from './components/Text';
import Header from './components/header'
import Generator from './components/generator';
import Ex_Picker from './components/ex_picker'
import Ex_Slider from './components/ex_slider';
import Ex_ActivityIndicator from './components/ex_ActivityIndicator';
import Slider from '@react-native-community/slider'
import Ex_Image from './components/ex_image';
import Steak from './assets/image/steak.jpg';

const App = () => {
  return(
    <View style={styles.mainView}>
      {/* <Ex_Slider></Ex_Slider>
      <Ex_Picker></Ex_Picker>
      <Ex_ActivityIndicator /> */}
      <Image 
        style={styles.image}
        source={{uri:'https://picsum.photos/id/237/200/300'}}
        resizeMode="contain"
      />
      {/* <Ex_Image /> */}
      {/* <Slider style={{height:40, width:300}}></Slider> */}
    </View>
  )
}

const styles = StyleSheet.create({
  mainView:{
    flex:1,
    backgroundColor:'yellow',
  },
  image:{
    backgroundColor:'blue'
  }
})



export default App;
