import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, Alert } from 'react-native';

const TestView = () => {
 
  const showAlert = () => {
    Alert.alert('View Clicked ...');
  };
 
  return (
 
    <View style={styleSheet.MainContainer}>
      <TouchableOpacity onPress={()=>{
        Alert.alert('hihi')  
      }}
        style={{ flex:1, justifyContent:'center', backgroundColor:'blue'}}
      >
        <View style={styleSheet.view}
          onStartShouldSetResponder={showAlert} >
  
          <Text style={{ fontSize: 28, color: 'white', textAlign: 'center' }}> 
            Set onPress onClick on View Component in React Native
          </Text>
  
        </View>
      </TouchableOpacity>
    </View>
  );
}
 
const styleSheet = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
 
  view: {
    width: 350,
    height: 120,
    backgroundColor: 'coral',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default TestView;