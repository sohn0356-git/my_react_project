import React from 'react';
import { View, Text, Button, Image, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from '../assets/pics/home_icon.png';

const SideDrawer = ({ navigation }) => {
  return (
   <View style={styles.container} >
     <ScrollView>
       <View>
         <View>
           <Image 
            style={{marginTop:50, width:40, height:40}}
            source = {Icon}
           />
          </View>
          <Text>Section 1</Text>
          <View>
            <Text>Home</Text>
            <Text>User</Text>
            <Text>Help</Text>
            <Text>Info</Text>
          </View>
       </View>
     </ScrollView>
    <View style={{paddingLeft:10, paddingBottom:30}}>
      <Text>Copyright @GyeongJu, 2021.</Text>
    </View>
   </View>
 );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#aad324'
  }
})

export default SideDrawer;