/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';
 import React from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
 } from 'react-native';
 import {NavigationContainer} from '@react-navigation/native';
 
 const NewsComponent = () => {
   return (
       <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
         <Text>
           News Screen
         </Text>
       </View>
   )
 }
 
 export default NewsComponent;

 
 