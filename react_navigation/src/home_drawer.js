import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import moveStack from '../utils/moveStack';

const DrawerHomeScreen = ({ navigation }) => {
  return (
   <View >
    <Text>
      Welcome home my friend
    </Text>
    <Button 
     title="go to user"
     onPress={()=>{navigation.navigate('User')}}
    />
    <Button 
      title="Change my Settings"
      onPress={()=>{navigation.setOptions({
        title:"hihi",
        drawerPosition:'right',
        drawerStyle:{
          backgroundColor: '#c6cbef',
          width: 200
        }
      })}}
    />
   </View>
 );
}

export default DrawerHomeScreen;