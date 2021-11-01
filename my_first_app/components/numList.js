import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const NumList = (props) => {
  const sayHello = () => {
    alert('hello')
  }
  return(
    <ScrollView style={styles.subView}>
    {props.numbers.map((items,idx)=>{
      return (
        <TouchableOpacity 
          style={styles.touchView} 
          key={idx}
          onPress={(e)=>props.deleteNumber(idx)}>
          <Text style={styles.mainText}>{items}</Text>
        </TouchableOpacity>
      )
    })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  subView:{
    backgroundColor:'blue',
    marginBottom:10,
    width:'100%',
  },
  touchView:{
    alignItems:'center',
    backgroundColor:'white',
    margin:20,
  },
  mainText:{
    fontSize:25,
    fontWeight:'bold',
    color:'red',
    marginBottom:10,
    padding:20,
  }
})

export default NumList;