import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import FlipComponent from './App/Components/FlipComponent';
import LoginScreen from './App/Components/LoginPage';
import RegisterScreen from './App/Components/RegisterPage';
import Usage from './App/Components/Usage';
import ModalExample from './App/Components/ModalExam';
import ModalExample2 from './App/Components/modalexam2';
import ModalExample3 from './App/Components/modalexam3';
const App = () => {
  const cardInfo = {
    name: 'Denise Rose',
    userName: '김요한',
    userBelong:'청년 4교구 OO셀',
    userImg: 'https://randomuser.me/api/portraits/women/14.jpg',
    postImg:
      'https://cdn.pixabay.com/photo/2017/03/22/02/23/seedling-2163773_1280.png',
    desc: 'This is a sample post...',
    likedby: ['alexander'],
    timestamp: '10 minutes ago',
  }
 return (
   <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      {/* <FlipComponent cardInfo={cardInfo}/> */}
      {/* <LoginScreen /> */}
      {/* <RegisterScreen /> */}
      <Usage />
      {/* <ModalExample /> */}
      {/* <ModalExample2 /> */}
      {/* <ModalExample3 /> */}
   </View>
 );
}

export default App;