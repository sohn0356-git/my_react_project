import { json } from 'body-parser';
import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native';

function App() {
    setItemStorage = async (key, value) => {
        try {
            await AsyncStorage.setItem(key,value);
        } catch (error) {
            // Error save data
            console.log("save data error")
        }
    };
    removeItemStorage = async (key) => {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            // Error remove data
            console.log("remove data error")
        }
    };
    getItemStorage = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value!==null) {
                return value
            } else {
                console.log("read data error")
            }
        } catch (error) {
            // Error read data
            console.log("read data error")
        }
    };

    saveStorage = () => {
        this.setItemStorage("LOGIN", {id:"id01", pw:"pw01"})
    }
    readStorage = () => {
        this.getItemStorage("LOGIN").then(result => {
            let jsonObject = JSON.parse(result)
            alert("username : "+jsonObject.id+" password : "+jsonObject.pw)
        })
    }
    removeStorage = () => {
        this.removeItemStorage("LOGIN")
    }
    let {container, btnStyle, txtStyle} = styles;
    return (
        <View style={container}>
            <TouchableOpacity style={btnStyle} onPress={this.saveStorage}>
                <Text>Save Data</Text>
            </TouchableOpacity>
            <TouchableOpacity style={btnStyle} onPress={this.readStorage}>
                <Text>Read Data</Text>
            </TouchableOpacity>
            <TouchableOpacity style={btnStyle} onPress={this.removeStorage}>
                <Text>Remove Data</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    btnStyle:{
        backgroundColor:'#7f7fff',
        justifyContent:'center',
        height:50,
        width:100,
        marginTop:10,
        alignItems:'center'
    },
    txtStyle:{
        color:'#fff'
    }
})

export default App;