import React, { useEffect, useState } from 'react';
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
import DropDownPicker from 'react-native-dropdown-picker';
import SelectDropdown from 'react-native-select-dropdown'

export default function RegisterScreen() {
  const [groupName, setGroupName] = useState('')
  const [cellName, setCellName] = useState('')
  const [cellNames, setCellNames] = useState('')
  const groupNames = [1,2,3,4,5,6,7,8,9,10]
  const cellList = {
    1:[],
    2:[],
    3:[],
    4:['하음셀', '열맺셀'],
    5:[],
    6:[],
    7:[],
    8:[],
    9:[],
    10:[],
  }
  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
  }, []);

  const onChangeGroup = (item) => {
    setGroupName(item)
    setCellNames(cellList[item])
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      {/* <View style={{backgroundColor:'rgb(83,156,97)', width:'100%', height:'100%', justifyContent:'center', padding:40}}> */}
      <LinearGradient colors={['rgb(100,167,107)', 'rgb(60,120,71)', 'rgb(170,110,75)']} style={styles.container}>
        <Text style={styles.welcomeText}>Pray for You</Text>
        <Text style={styles.registerText}>Register</Text>
        <TextInput
          placeholder='Email Address'
          placeholderTextColor='#707e8b'
          style={styles.input}
          autoCorrect={true}
          autoCapitalize='none'
          autoCompleteType='email'
          keyboardType='email-address'
          textContentType='emailAddress'
        />
        <TextInput
          placeholder='Password'
          placeholderTextColor='#707e8b'
          style={styles.input}
          secureTextEntry={true}
          textContentType='password'
        />
        <TextInput
          placeholder='이름'
          placeholderTextColor='#707e8b'
          style={styles.input}
          autoCorrect={true}
        />
        <View style={styles.registerWithBar}>
          <SelectDropdown
            data={groupNames}
            onSelect={(selectedItem) => {
              onChangeGroup(selectedItem)
            }}
            dropdownStyle={{width:40, backgroundColor:'rgba(200,186,140,0.7)'}}
            buttonStyle={{marginHorizontal:10,width:40, borderRadius:6, backgroundColor:'rgba(220,206,140,0.7)'}}
            defaultButtonText='1'
          />
          <Text style={styles.inputLabel} >교구</Text>
          <Text style={styles.inputLabel} >셀 이름</Text>
          <SelectDropdown
            data={cellNames}
            dropdownStyle={{width:80, backgroundColor:'rgba(200,186,140,0.7)'}}
            buttonStyle={{marginHorizontal:10,width:80, borderRadius:6, backgroundColor:'rgba(220,206,140,0.7)'}}
            defaultButtonText='셀'
            onSelect={(selectedItem) => {
              setCellName(selectedItem)
            }}
          />
          
        </View>
        <View style={{width:'100%', flexDirection:'row', justifyContent:'space-between'}}>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Back Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Register</Text>
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
  registerText: {
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
    color: '#707e8b',
  },
  inputLabel:{
    color:'rgba(220,206,140,0.7)',
    fontWeight:'bold',
    fontSize:30,
    marginHorizontal:10,
  },
  fpText: {
    alignSelf: 'flex-end',
    color: '#B33771',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  registerButton: {
    backgroundColor: 'rgba(220,206,140,0.7)',
    height:50,
    justifyContent:'center',
    borderRadius: 6,
    marginTop: 30,
    width:'45%',
    paddingHorizontal:20,
  },
  registerButtonText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fafafa',
    alignSelf: 'center',
  },
  registerWithBar: {
    height:50,
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
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