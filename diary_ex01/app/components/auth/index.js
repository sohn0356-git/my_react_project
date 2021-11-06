/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import 'react-native-gesture-handler';
 import React, { useState } from 'react';
 import {
   ActivityIndicator,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
 } from 'react-native';
 import {NavigationContainer} from '@react-navigation/native';
import AuthForm from './authForm';
import AuthLogo from './authLogo';
 
const goWithoutLogin = (navigation) => {
  navigation.navigate("AppTabComponent")
}

const AuthComponent = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false)

  if(isLoading){
    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    )
  } else {
    return (
      <ScrollView style={styles.container}>
        <View>
          <AuthLogo />
          <AuthForm 
            goWithoutLogin={()=>{
              goWithoutLogin(navigation)
            }}
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#7487C5',
    paddingTop:130,
    paddingLeft:50,
    paddingRight:50

  },
  loading:{
    flex:1,
    backgroundColor:'#f0f0f0',
    alignItems:'center',
    justifyContent:'center'
  }
})
 
 export default AuthComponent;
 