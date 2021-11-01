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
} from 'react-native';
import TextView from './components/Text';
import Header from './components/header'
import Generator from './components/generator';
import Picker from './components/picker'

const App = () => {
  return(
    <View style={styles.mainView}>
      <Picker></Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  mainView:{
    flex:1,
    backgroundColor:'yellow',
    alignItems:'center',
    justifyContent:'center'
  }
})



export default App;
