import APIKEY from '../secret';
export const SIGNUP = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${APIKEY}`
export const SIGNIN = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${APIKEY}`

import AsyncStorage from '@react-native-async-storage/async-storage';

export const setTokens = async (values, callBack) => {
  const firstPair = ["@diary_ex01@userId",values.userId]
  const secondPair = ["@diary_ex01@token",values.token]
  const thirdPair = ["@diary_ex01@refToken",values.refToken]
  try{
    await AsyncStorage.multiSet([firstPair, secondPair, thirdPair]).then(response=>(callBack()));
  } catch(e) {
    console.log(e);
  }
}

export const getTokens = async() => {
  let values;
  try {
    values = await AsyncStorage.multiGet([
      "@diary_ex01@userId",
      "@diary_ex01@token",
      "@diary_ex01@refToken"
    ])
  }catch(e){
    console.log(e)
  }
  console.log(values);
}