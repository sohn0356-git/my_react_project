import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = (props) => {
  console.log(props);
  return (
   <View style={{
     flex:1,
     backgroundColor:'#662288',
     alignItems:'center',
     justifyContent:'center',
   }}>
        <Text>Hello buddy</Text>
        <Button
          title="Go to user"
          onPress={()=>{
            props.navigation.navigate('User');
            console.log("pushed")
          }}
        />
   </View>
 );
}

export default HomeScreen;