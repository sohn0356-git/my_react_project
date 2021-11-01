import React from 'react';
import {
  ActivityIndicator
} from 'react-native';

function ex_ActivityIndicator () {
 return (
   <ActivityIndicator
    style={{paddingTop:10, paddingBottom:20}}
    size="large"
    color="blue"
    animating={true}
   ></ActivityIndicator>
 );
}

export default ex_ActivityIndicator;