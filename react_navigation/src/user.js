import React from 'react';
import { View, Text, Button } from 'react-native';

const UserScreen = (props) => {
 return (
   <View style={{
     flex:1,
     backgroundColor:'#335588',
     alignItems:'center',
     justifyContent:'center',
   }}>
        <Text>Hi dare</Text>
        <Button
          title="Come back home"
          onPress={()=>{
            props.navigation.navigate('Home');
          }}
        />
   </View>
 );
}

export default UserScreen;