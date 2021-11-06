/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  Button,
  Linking,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
 } from '@react-navigation/drawer';
import HomeScreen from './src/home';
import UserScreen from './src/user';
import LogoTitle from './utils/logo'
import Icon from './assets/pics/home.png';
import DrawerHomeScreen from './src/home_drawer';
import DrawerUserScreen from './src/user_drawer';
import SideDrawer from './src/my_drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const LegoTitle = () =>{
  return(
    <Image
      style={{width:40, height:40}}
      source={Icon}
    />
  );
}

// const CustomDrawerContent = (props) => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Help"
//         onPress={()=>{
//           return Linking.openURL('http://www.google.com');
//         }}  
//         icon={()=><LogoTitle />}
//       >
//       </DrawerItem>
//       <DrawerItem 
//         label="Info"
//         onPress={()=>alert("Info window")}
//       >
//       </DrawerItem>
//     </DrawerContentScrollView>
//   )
// }

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator 
    //     initialRouteName="User"
    //     // screenOptions={{
    //     //   headerStyle:{
    //     //     backgroundColor:'red'
    //     //   },
    //     //   headerTintColor:'black',
    //     //   headerTitleStyle:{
    //     //     fontWeight: 'bold',
    //     //     color:'blue'
    //     //   }
    //     // }}
    //   >
    //     <Stack.Screen 
    //       name="Home"
    //       component={HomeScreen}
    //       options={{ 
    //         headerRight: () => {
    //           return (
    //             <Button 
    //               title="Info"
    //               color="orange"
    //               onPress={()=>{
    //                 alert('hihi')
    //               }}
    //             />
    //           )
    //         },
    //         // headerTitle: (props) => {
    //         // return <LogoTitle {...props} />
    //         // } 
    //       }}
    //    />
    //     <Stack.Screen 
    //       name="User"
    //       component={UserScreen}
    //       initialParams={{
    //         userIdx : 50,
    //         userName : 'gildong',
    //         userLastName : 'go'
    //       }}
    //       options={{ 
    //         title:'Uuser',
    //         headerTitle: (props) => <LegoTitle {...props} /> ,
    //         headerRight: () => (
    //           <Button
    //             onPress={() => alert('This is a button!')}
    //             title="Info"
    //             color="orange"
    //           />
    //         ),
    //       }}
    //       // options={{
    //       //   title:'user screen',
    //       //   headerStyle:{
    //       //     backgroundColor:'pink'
    //       //   },
    //       //   headerTintColor:'red',
    //       //   headerTitleStyle:{
    //       //     fontWeight: 'bold',
    //       //     color:'purple'
    //       //   }
    //       // }}
    //    />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerType:"front",
          drawerStyle:{
            backgroundColor: '#c6cbef',
            width: 200
          },
          drawerContentOptions:{
            activeTintColor:'red',
            activeBackgrouondColor:'skyblue'
          },
        }}
        // drawerContent={(props) => <CustomDrawerContent {...props} />}
        drawerContent={(props) => <SideDrawer {...props} />}
      >
        <Drawer.Screen 
          name="Home" 
          component={DrawerHomeScreen} 
          options={{
            drawerIcon:()=>{
              return (
                <Image 
                  style={{width:40, height:40}}
                  source={Icon}
                />
              )
            }
          }}
        />
        <Drawer.Screen name="User" component={DrawerUserScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;
