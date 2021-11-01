import React, { useState } from 'react';
import {
  Text, View, StyleSheet,TouchableOpacity, Button,
} from 'react-native';
import NumList from './numList';



const Generator = () => {
  const [num, setNum] = useState([]);

  const deleteNumber = (position) => {
    const newArray = num.filter((v,index)=>{
      console.log(v);
      return position != index
    })
    setNum(newArray);
  }

  const buttonPressed = (e) => {
    setNum(num.concat([Math.floor(Math.random()*100)]));
  }
  return(
    <View style={styles.generator}>
      <Button 
      style={styles.buttonStyle}
      title="addNumbers"
      onPress={buttonPressed}
      >
      </Button>
      <NumList numbers={num} deleteNumber={deleteNumber}></NumList>
    </View>
  )
}

const styles = StyleSheet.create({
  generator:{
    backgroundColor:'#D197CF',
    alignItems:'center',
    padding:5,
    width:'100%'
  },
  buttonStyle:{
    backgroundColor:'black',
    padding:10
  }
})

export default Generator;