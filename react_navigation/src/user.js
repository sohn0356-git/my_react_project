import React from 'react';
import { View, Text, Button } from 'react-native';
import moveStack from '../utils/moveStack';

const headerStyle = (props) =>{
  props.navigation.setOptions({
    title:'user screen',
    headerStyle:{
      backgroundColor:'pink'
    },
    headerTintColor:'red',
    headerTitleStyle:{
      fontWeight: 'bold',
      color:'purple'
    }
  });
}

const UserScreen = (props) => {
  const {params} = props.route;
  const userIdx = params ? params.userIdx : null;
  const userName = params ? params.userName : null;
  const userLastName = params ? params.userLastName : null;
 return (
   <View style={{
     flex:1,
     backgroundColor:'#335588',
     alignItems:'center',
     justifyContent:'center',
   }}>
        <Text>Hi there</Text>
        <Button
          title="Come back home"
          onPress={()=>{moveStack(props,'Home')}}
        />
        <Text>User Idx : {JSON.stringify(userIdx)}</Text>
        <Text>User Name : {JSON.stringify(userName)}</Text>
        <Text>User Last Name : {JSON.stringify(userLastName)}</Text>
        <Button 
          title="Change setting"
          onPress={()=>{headerStyle(props)}}
        />
   </View>
 );
}

export default UserScreen;