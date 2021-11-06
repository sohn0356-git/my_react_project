import * as React from 'react';
import { View, Text, Linking, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator,DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';


// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Help"
//         onPress={() => Linking.openURL('https://mywebsite.com/help')}
//       />
//     </DrawerContentScrollView>
//   );
// }
// }
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} >
      <DrawerItemList {...props} />
        <DrawerItem
          label="hihi"
        >
          <Button
            title="Go somewhere"
            onPress={() => {
              // Navigate using the `navigation` prop that you received
              navigation.navigate('SomeScreen');
            }}
          />
        </DrawerItem>
    </DrawerContentScrollView>
  );
}

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();



function MyDrawer() {
  return (
    // <Drawer.Navigator 
    //   screenOptions={{
    //     drawerPosition:'right',
    //     drawerStyle: {
    //       backgroundColor: '#c6cbef',
    //       width: 240,
    //     },
    //   }}
    //   drawerContent={(props) => <CustomDrawerContent {...props} />}>
    //   {/* screens */}
    //   <Drawer.Screen name="Feed" component={Feed} />
    //   <Drawer.Screen name="Article" component={Article} />
    // </Drawer.Navigator>
      <Drawer.Navigator
        screenOptions={{
          drawerPosition:'right',
          drawerStyle: {
            backgroundColor: '#c6cbef',
            width: 240,
          },
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Feed" component={Feed} />
        <Drawer.Screen name="Article" component={Article} />
      </Drawer.Navigator>
    // <Drawer.Navigator
    //   screenOptions={{
    //     drawerPosition:'right',
    //     drawerStyle: {
    //       backgroundColor: '#c6cbef',
    //       width: 240,
    //     },
    //   }}
    //   drawerContent={(props) => <CustomDrawerContent {...props} />}
    // >
    //   <Drawer.Screen name="Feed" component={Feed} />
    //   <Drawer.Screen name="Article" component={Article} />
    // </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
