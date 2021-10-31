import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const TextView = () => {
  return(
    <View style={styles.mainView}>
      <View>
        <Text style={styles.mainText}>Hello</Text>
      </View>
      <View style={styles.subView}>
        <Text>welcome</Text>
      </View>
      <View style={styles.subView}>
        <Text style={styles.mainText}>react-native</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainView:{
    flex:1,
    backgroundColor:'green',
    paddingTop:50,
    alignItems:'center',
    justifyContent:'center'
  },
  subView:{
    backgroundColor:'yellow',
    flex:1,
    marginBottom:10,
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  mainText:{
    fontSize:50,
    fontWeight:'bold',
    color:'red',
    padding:20
  }
})

export default TextView;