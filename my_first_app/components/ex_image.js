import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Steak from '../assets/image/steak.jpg'

function ex_image () {
 return (
   <View style={styles.mainView}>
     {/* <Image source={Steak} /> */}
        <Image 
          source={Steak}
          style={styles.image}
          resizeMode='contain'
          />
   </View>
 );
}

const styles = StyleSheet.create({
  mainView:{
    flex:1,
  },
  image:{
    // width:'100%',
    height:700,
  }
})

export default ex_image;