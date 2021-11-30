import React, { useEffect, useState } from 'react';
import { View, Text, Modal, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView, StyleSheet } from 'react-native';

const ModalExam3 = () => {
  const [modalVisible, setModalVisible] = useState(true)
  return (
    <View>
      <Modal 
        animationType="slide"
        // transparent={true}
        visible={modalVisible}
        onRequestClose={() => {setModalVisible(false)}}
      >
        <TouchableOpacity 
          style={styles.centeredView} 
          activeOpacity={1} 
          onPressOut={() => {setModalVisible(false)}}
        >
          <ScrollView 
            directionalLockEnabled={true} 
            contentContainerStyle={styles.scrollModal}
          >
            <TouchableWithoutFeedback>
              <View style={styles.modalContainer}>
                <Text>
                // Here you put the content of your modal.
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
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
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor:'black'
  },
  
  modalContainer: {
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
});

export default ModalExam3;