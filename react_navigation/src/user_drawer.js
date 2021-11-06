import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import moveStack from '../utils/moveStack';
import Icon from '../assets/pics/home_icon.png';

const drawerStyle = (navigation) => {
  navigation.setOptions({
    drawerIcon : () => (
        <Image 
          style={{width:40, height:40}}
          source={Icon}
        />
      )
  })
}

const DrawerUserScreen = ({ navigation }) => {
  drawerStyle(navigation)
  return (
   <View >
     <Text>
       Hi there
     </Text>
     <Button 
     title="go to home"
     onPress={()=>{navigation.navigate('Home')}}
    />
   </View>
 );
}

export default DrawerUserScreen;