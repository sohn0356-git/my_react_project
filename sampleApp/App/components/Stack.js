import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './home';
import LoginScreen from './loginScreen1';
import ChatScreen from './chatScreen1';
import RegisterScreen from './registerScreen1';
import InstagramClone from './instagramCopy';
import SearchScreen from './Search';
import SocialScreen from './socialScreen';
import LevelInfoScreen from './levelInfoScreen'
import CartScreen from './cartScreen'
import ChatScreen2 from './chatScreen2';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator
          screenOptions={{
            headerShown:false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Notifications" component={NotificationsScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="ChatList" component={ChatScreen2} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Instagram" component={InstagramClone} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Social" component={SocialScreen} />
          <Stack.Screen name="LevelInfo" component={LevelInfoScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}