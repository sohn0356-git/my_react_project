import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  Modal,
  View,
  TextInput,
  StatusBar,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';

const Usage = (props) => {
  const [modalVisible, setModalVisible] = useState(true)  
  return (
  <View>
    <Modal
      animationType='slide'
      // transparent={true}
      visible={modalVisible}
      onRequestClose={() => {setModalVisible(false)}}
    >
      <TouchableOpacity 
        style={styles.centeredView}
        activeOpacity={1} 
        onPressOut={() => {setModalVisible(false)}}
      >
        <View style={styles.modalView}>
          <TouchableWithoutFeedback>
            <View style={{width:'100%',height:200}} />
          </TouchableWithoutFeedback>
          <Swiper
            showsButtons={false}
            style={{ height: '100%' }}
            loop={false}
            showsPagination={true}
            dotColor='gray'
            activeDotColor='black'
          >
            <Text>hi</Text>
            <Text>hello</Text>
            <Text>wow</Text>
          </Swiper>
        </View>
      </TouchableOpacity>
    </Modal>
    <TouchableHighlight
        onPress={()=>{
          setModalVisible(true)
        }}
      >
        <Text>Show Modal slide</Text>
      </TouchableHighlight>
  </View>
 );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor:'black'
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 45,
    alignItems: "center",
    backgroundColor: 'rgba(255,255,255,0.94)',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    borderWidth: 3,
  },
  modalView2:{
    width: '90%',
    height: '70%',
    borderRadius: 20,
    overflow: 'hidden',
  },
})

export default Usage;