import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen() {
  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      {/* <View style={{backgroundColor:'rgb(83,156,97)', width:'100%', height:'100%', justifyContent:'center', padding:40}}> */}
      <LinearGradient colors={['rgb(100,167,107)', 'rgb(60,120,71)', 'rgb(170,110,75)']} style={styles.container}>
        <Text style={styles.welcomeText}>Pray for You</Text>
        <Text style={styles.loginText}>Login</Text>
        <TextInput
          placeholder='Email Address'
          placeholderTextColor='#808e9b'
          style={styles.input}
          autoCorrect={true}
          autoCapitalize='none'
          autoCompleteType='email'
          keyboardType='email-address'
          textContentType='emailAddress'
        />
        <TextInput
          placeholder='Password'
          placeholderTextColor='#808e9b'
          style={styles.input}
          secureTextEntry={true}
          textContentType='password'
        />
        <TouchableOpacity>
          <Text style={styles.fpText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.loginWithBar}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name='google' type='font-awesome' size={30} color='#606e7b' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon
              name='facebook-square'
              type='font-awesome'
              size={30}
              color='#606e7b'
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name='apple' type='font-awesome' size={30} color='#606e7b' />
          </TouchableOpacity>
        </View>
        <View style={styles.signUpTextView}>
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={[styles.signUpText, { color: '#B53471' }]}>
              {' Sign Up'}
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      {/* </View> */}
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    paddingTop: 80,
    paddingHorizontal: 40,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: '900',
    color: '#fff',
    alignSelf: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(220,206,140,0.7)',
    borderRadius: 6,
    marginTop: 25,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#808e9b',
  },
  fpText: {
    alignSelf: 'flex-end',
    color: '#B33771',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: 'rgba(220,206,140,0.7)',
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fafafa',
    alignSelf: 'center',
  },
  loginWithBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  iconButton: {
    backgroundColor: 'rgba(220,206,140,0.7)',
    padding: 14,
    marginHorizontal: 10,
    borderRadius: 100,
  },
  signUpTextView: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    color: '#505e6b',
    fontSize: 20,
    fontWeight: '500',
  },
});