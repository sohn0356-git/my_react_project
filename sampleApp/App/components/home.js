import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Icon name="bell" size={30} color="#900" />
      <Button
        title="Go to Login Page"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Go to Chat Page"
        onPress={() => navigation.navigate('Chat')}
      />
      <Button
        title="Go to Insta Page"
        onPress={() => navigation.navigate('Instagram')}
      />
      <Button
        title="Go to Search Page"
        onPress={() => navigation.navigate('Search')}
      />
      <Button
        title="Go to Social Page"
        onPress={() => navigation.navigate('Social')}
      />
      <Button
        title="Go to LevelInfo Page"
        onPress={() => navigation.navigate('LevelInfo')}
      />
    </View>
  );
}
