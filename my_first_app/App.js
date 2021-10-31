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

const App = () => {
  return(
    <View style={styles.mainView}>
      <Header />
      <Text>
        Hello World
      </Text>
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
