import React from 'react';
import { View, Button } from 'react-native';

export default function home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Login Page"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Go to Chat Page"
        onPress={() => navigation.navigate('Chat')}
      />
    </View>
  );
}
