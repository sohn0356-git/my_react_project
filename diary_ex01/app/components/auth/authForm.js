import React, { useState } from 'react';
import { View, StyleSheet, Text, Platform, Button } from 'react-native';
import Input from '../../utils/forms/input';
import ValidationRules from '../../utils/forms/validationRules';

const AuthForm = (props) => {
  const [type, setType] = useState("login");
  const [action, setAction] = useState("login");
  const [actionMode, setActionMode] = useState("register");
  const [email, setEmail] = useState({value:"",rules:{isRequired:true, isEmail:true},valid:false});
  const [password, setPassword] = useState({value:"",rules:{isRequired:true, minLength:6},valid:false});
  const [rePassword, setRePassword] = useState({value:"",rules:{isRequired:true, minLength:6, confirmPassword:false},valid:false});
  const [hasErrors, setHasErrors] = useState(false);

  const confirmPassword = () => {
    return (
      type != 'login' ?
        <Input 
          value={rePassword.value}
          type={'textInput'}
          secureTextEntry={true}
          placeholder="비밀번호 재확인"
          placeholderTextColor="#ddd"
          onChangeText={(val)=>{
            setRePassword({...rePassword, value:val, valid:ValidationRules(val, rePassword.rules, password.value)})
          }}
        />
      : null
    )
  }

  const formHasErrors = () => {
    return(
      hasErrors ?
        <View style={styles.errorContainer}>
          <Text style={styles.errorLabel}>
            로그인 정보를 다시 확인해주세요~
          </Text>
        </View>
      : null
    )
  }

  const changeForm = () => {
    setType(type==='login'?'register':'login')
    setAction(type==='login'?'register':'login')
    setActionMode(type==='login'?'go login':'register now')
    setEmail({...email, value:""})
    setPassword({...password, value:""})
    setRePassword({...rePassword, value:""})
    setHasErrors(false)
  }

  const submitUser = () => {
    let isFormValid = email.valid && password.valid;
    let submittedForm = {};
    if(type !== 'login'){
      isFormValid = isFormValid && rePassword.valid;
    }
    if(isFormValid){
      submittedForm = {'email':email.value,'password':password.value}
    } else {
      setHasErrors(true)
    }
    console.log(isFormValid, JSON.stringify(submittedForm))
  }

  return (
   <View>
      <Input 
        value={email.value}
        type={'textInput'}
        keyboardType={'email-address'}
        autoCapitalize={'none'}
        placeholder="이메일 주소"
        placeholderTextColor="#ddd"
        onChangeText={(val)=>{
          setEmail({...email, value:val, valid:ValidationRules(val, email.rules)})
          console.log(email)
        }}
      />
      <Input 
        value={password.value}
        type={'textInput'}
        secureTextEntry={true}
        placeholder="비밀번호"
        placeholderTextColor="#ddd"
        onChangeText={(val)=>{
          setPassword({...password, value:val, valid:ValidationRules(val, password.rules)})
        }}
      />
      {confirmPassword()}
      {formHasErrors()}
      <View style={{marginTop:40}}>
        <View style={styles.button}>
          <Button 
            title={action}
            color='#48567f'
            onPress={submitUser}
          />
        </View>
        <View style={styles.button}>
          <Button 
            title={actionMode}
            onPress={changeForm}
            color='#48567f'
          />
        </View>
        <View style={styles.button}>
          <Button 
            title={"비회원 로그인"}
            color='#48567f'
            onPress={props.goWithoutLogin}
          />
        </View>
      </View>
   </View>
 );
}

const styles = StyleSheet.create({
  errorContainer:{
    marginBottom:10,
    marginTop:30,
    padding:20,
    backgroundColor:'#ee3344'
  },
  errorLabel:{
    color:'#fff',
    fontSize:15,
    fontWeight:'bold',
    textAlignVertical:'center',
    textAlign:'center'
  },
  button:{
    ...Platform.select({
      ios:{
        marginTop:15
      },
      android:{
        marginTop:15,
        marginBottom:10
      }
    })
  }
})

export default AuthForm;