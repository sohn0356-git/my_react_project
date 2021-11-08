import { SIGN_IN, SIGN_UP } from '../types';
import axios from 'axios';
import { SIGNUP, SIGNIN } from '../../utils/misc'

export function signIn(data){
  const request = axios({
    method:'POST',
    url:SIGNIN,
    data:{
      email:data.email,
      password:data.password,
      returnSecureToken:true
    },
    header:{
      "Content-Type":"application/json"
    }
  }).then(response=>{
    alert("로그인 성공했습니다.")
    return response.data;
  }).catch(error=>{
    alert("error");
    console.log(error);
  });
  return {
    type:SIGN_IN,
    payload:request
  }
}

export function signUp(data){
  const request = axios({
    method:'POST',
    url:SIGNUP,
    data:{
      email:data.email,
      password:data.password,
      returnSecureToken:true
    },
    header:{
      "Content-Type":"application/json"
    }
  }).then(response=>{
    console.log(response);
    alert("회원가입이 성공했습니다.")
    return response.data;
  }).catch(error=>{
    alert("error");
    console.log(error);
  });
  return {
    type:SIGN_UP,
    payload:request
  }
}