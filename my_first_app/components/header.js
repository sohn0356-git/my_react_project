import React, { useState } from 'react';
import {
  Text, View, StyleSheet,TouchableOpacity,
} from 'react-native';

const header = () => {
  const [name, setName] = useState("hihi");

  const changeName = (e)=>{
    setName("hello");
  }
  return(
    <TouchableOpacity>
      <View style={styles.header}>
        <Text onPress={changeName}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  header:{
    backgroundColor:'pink',
    alignItems:'center',
    padding:5,
    width:'100%'
  }
})

export default header;