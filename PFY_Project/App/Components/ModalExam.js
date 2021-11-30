import React, {Component} from 'react';
import { TouchableHighlight } from 'react-native';
import { View, Text, Modal, Alert } from 'react-native';

export default class ModalExample extends Component{
  state = {
    modalVisible : false,
    animationType:'fade',
    transparentType:false,
  };

  setModalVisible_slide(visible){
    this.setState({modalVisible:visible})
    this.setState({animationType:'slide'})
  }
  setModalVisible_fade(visible){
    this.setState({modalVisible:visible})
    this.setState({animationType:'fade'})
  }
  setModalTransparent(transparent){
    this.setState({transparentType:transparent})
  }
  render(){
    return(
      <View style={{marginTop:50}}>
        <Modal
          animationType={this.state.animationType}
          transparent={this.state.transparentType}
          visible={this.state.modalVisible}
          onRequestClose={()=>{
            Alert.alert('Modal has been closed')
          }}
          onBackdropPress={() => this.closeModal()}
        >
          <View style={{marginTop:100, backgroundColor:'yellow'}}>
              <View>
                <Text>Hello World</Text>
                <TouchableHighlight
                  onPress={()=>{
                    this.setModalVisible_slide(!this.state.modalVisible)
                  }}
                >
                  <Text>Hide Modal</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={()=>{
                    this.setModalTransparent(!this.state.transparentType)
                  }}
                >
                  <Text>Control transparent</Text>
                </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <TouchableHighlight
          onPress={()=>{
            this.setModalVisible_slide(true)
          }}
        >
          <Text>Show Modal slide</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={()=>{
            this.setModalVisible_fade(true)
          }}
        >
          <Text>Show Modal fade</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
