import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  StatusBar,
  ImageBackground,
  Modal,
  Pressable
} from 'react-native';
import imagePath from '../utils/imagePath';
import Slider from '@react-native-community/slider';
import { AutoSizeText, ResizeTextMode } from 'react-native-auto-size-text';
// import { Picker } from '@react-native-community/picker';
import PickerEx from './ex_picker';
import Icon from 'react-native-vector-icons/FontAwesome';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Home({navigation}) {
  const [gaze, setGaze] = useState(0);
  const [modalVisible, setModalVisible] = useState(false)
  const stepSize = 10000;
  const onChangeGaze = (val) => {
    setGaze(Math.floor(val));
  }
  const [country, setCountry] = useState('canada')
  const onCountryHandler = (choice, idx) => {
    setCountry(choice);
  }

  const [posts] = useState([
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
    {
      id:Math.floor(Math.random()*31+1),
      
      name: 'John Doe',
      username: 'johndoe',
      userProfileImage: './',
      postText:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio facilis maiores iusto possimus praesentium reprehenderit, illum corrupti perspiciatis aperiam qui.',
      likes: 245,
      comments: 19,
    },
  ]);
  
  useEffect(() => {
    navigation.setOptions({
      title: 'LevelInfo',
      headerTitleStyle: { fontSize: 22 },
      headerStyle: { backgroundColor: '#f6e58d' },
      headerLeft: () => (
        <TouchableOpacity style={{ marginHorizontal: 10, flexDirection:'row' }}>
          <Icon
            name='home'
            size={28}
            onPress={()=>{navigation.goBack()}}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity style={{ flexDirection:'row', marginHorizontal: 10 }}>
          <TouchableOpacity>
          <Icon
            style={{paddingRight:20}}
            name='chevron-up'
            size={21}
            onPress={()=>{navigation.goBack()}}
          />
          <Icon
            style={{paddingRight:20}}
            name='chevron-down'
            size={21}
            onPress={()=>{navigation.goBack()}}
          />
          </TouchableOpacity>
          <Icon name='save' size={24} style={{marginRight:10}} />
          <Icon name='sliders' onPress={()=>setModalVisible(!modalVisible)} size={24} style={{marginRight:10}} />
          <Icon name='filter' size={24} style={{marginRight:10}} />
        </TouchableOpacity>
      ),
    });
  }, []);

  function Post({ post }) {
    return (
      <View style={styles.postView}>
        {/* Post Content */}
        <ImageBackground
          style={{ flex:8, resizeMode:'center' }}
          imageStyle={{borderRadius: 10}}
          source={imagePath[post.id].image}
          // source={require(`../assets/image/a_${4}.png`)}
        />
        {/* <View style={{ flex : 8, width: '100%', height:'100%', marginTop: 0, backgroundColor:'blue' }}>
          {post.postImage ? (
            <Image
              style={{ width: '100%', height: 300}}
              source={{ uri: post.postImage }}
            />
          ) : null}
        </View> */}
        {/* Post Stats */}
      
        <TouchableOpacity style={styles.postStatsOpacity}>
          <AutoSizeText
            fontSize={10}
            max_lines={3}
            numberOfLines={3}
            maxFontSize={10}
            mode={[ResizeTextMode.max_font_size, ResizeTextMode.max_lines]}>
            {imagePath[post.id].text}
          </AutoSizeText>
        </TouchableOpacity>
      
      </View>
    );
  }

  return (
    <View style={{ ...styles.container }}>
      <ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable> 
            {/* <Text style={styles.modalText}>Hello World!</Text>
            */}
            <PickerEx />
          </View>
        </View>
      </Modal>
      <View style={{alignItems:'center', justifyContent:'center', backgroundColor:'yellow'}}>
        {/* <Slider 
          minimumValue={0}
          maximumValue={stepSize*(levelRange.single.length-1)}
          value={gaze}
          step={stepSize}
          onValueChange={(val)=>onChangeGaze(val)}
          style={{height:40, width:300}}
          />
        <Text
          style={{
            fontSize:16,
            color: 'yellow'
          }}
        >{levelRange.single[Math.floor(gaze/stepSize)]}</Text> */}
        
      </View>
        {/* Search Bar View */}
        <View style={{ ...styles.searchBarView }}>
          <View style={{ ...styles.searchBar }}>
            <Icon name='search' size={22} color='#c1c1c1' />
            <TextInput
              style={{
                paddingHorizontal: 6,
                color: '#c1c1c1',
              }}
              placeholder='Search'
              placeholderTextColor='#c1c1c1'
            />
          </View>
        </View>
        {/* Posts View */}
        <View style={styles.postsView}>
          {posts.map((post, idx) => (
            <Post post={post} key={idx} />
          ))}
        </View>
        <View style={{ height: 20 }}></View>
      </ScrollView>
    </View>
  );
}

function Explore() {
  return (
    <View style={{ ...styles.container }}>
      <Text
        style={{
          color: '#fff',
          paddingHorizontal: 10,
          fontSize: 30,
        }}
      >
        Explore
      </Text>
    </View>
  );
}
function Chats() {
  return (
    <View style={{ ...styles.container }}>
      <Text
        style={{
          color: '#fff',
          paddingHorizontal: 10,
        
          fontSize: 30,
        }}
      >
        Chats
      </Text>
    </View>
  );
}
function Notifications() {
  return (
    <View style={{ ...styles.container }}>
      <Text
        style={{
          color: '#fff',
          paddingHorizontal: 10,
        
          fontSize: 30,
        }}
      >
        Notifications
      </Text>
    </View>
  );
}
function Settings() {
  return (
    <View style={{ ...styles.container }}>
      <Text
        style={{
          color: '#fff',
          paddingHorizontal: 10,
        
          fontSize: 30,
        }}
      >
        Settings
      </Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function LevelInfo() {
  // StatusBar.setBarStyle('light-content', true);
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: '#ED4C67',
        inactiveTintColor: '#fafafa',
        activeBackgroundColor: '#222',
        inactiveBackgroundColor: '#222',
        showLabel: false,
      }}
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' color={color} size={size - 4} />
          ),
        }}
      />
      <Tab.Screen
        name='Explore'
        component={Explore}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='globe' color={color} size={size - 4} />
          ),
        }}
      />
      <Tab.Screen
        name='Chats'
        component={Chats}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='comments-o' color={color} size={size - 4} />
          ),
        }}
      />
      <Tab.Screen
        name='Notifications'
        component={Notifications}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='bell' color={color} size={size - 4} />
          ),
        }}
      />
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='cog' color={color} size={size - 4} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    paddingTop: 40,
  },
  searchBarView: {
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: '#3f3f3f',
    marginRight: 10,
    borderRadius: 4,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  storiesView: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  storiesViewTitleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  storiesViewTitle: {
    color: '#fff',
    fontSize: 30,
  
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    backgroundColor:'pink',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  showAllText: {
    color: '#c1c1c1',
  
    fontSize: 18,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  storyUserProfile: {
    marginRight: 20,
    borderColor: '#B53471',
    borderWidth: 2.5,
    borderRadius: 100,
  },
  postsView: { flexDirection:'row', marginTop: 10, flexWrap: 'wrap', justifyContent:'center', },
  postView: {
    // paddingVertical: 10,
    marginTop: 10,
    marginLeft:2,
    marginRight: 2,
    backgroundColor: '#333',
    borderRadius: 10,
    shadowColor: '#1e1e1e',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 8,
    width:'18%',
    height:100
  },
  postStatsOpacity: {
    flex:4,
    paddingLeft:3,
    paddingRight:3,
    backgroundColor: '#222', 
    borderRadius: 6,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'yellow'
  },
  pickerContainer:{
    backgroundColor:'pink',
    alignItems:'center',
    padding:5,
    marginBottom:200,
  }
});