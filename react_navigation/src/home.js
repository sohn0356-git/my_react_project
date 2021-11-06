import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import moveStack from '../utils/moveStack';

const HomeScreen = (props) => {
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
            moveStack(props,'User',{
              userIdx: 100,
              userName: 'GilDong',
              userLastName: 'Hong'
            });
          }}
        />
        <Button 
          title = "Change the title"
          // onPress={()=>{
          //   props.navigation.setOptions({
          //     // title:'Changed!!',
          //     headerStyle:{
          //       backgroundColor:'pink'
          //     },
          //     headerTintColor:'red',
          //   })
          // }}
        />
   </View>
 );
}

export default HomeScreen;