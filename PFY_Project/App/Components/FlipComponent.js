import React, { Component, useState } from 'react';
import FlipComponent from 'react-native-flip-component';
import { LogBox, View, TextInput, Text, StyleSheet, Dimensions, Image , TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';

export default function FlipCard(props){
  LogBox.ignoreLogs([
    'Animated: `useNativeDriver` was not specified',
  ])
  const [isFlipped, setIsFlipped] = useState(false)
  return(
    <View>
      <View style={styles.contentView}>
        <View style={styles.postHeader}>
          <Image
            style={styles.postUserImage}
            source={{
              uri: props.cardInfo.userImg,
            }}
          />
          <View style={styles.postUsernameText}>
            <Text>{props.cardInfo.userName}</Text>
            <Text>{props.cardInfo.userBelong}</Text>
          </View>
          <Icon name='ellipsis-h' size={30}/>
        </View>
        <TouchableOpacity
          onPress={() => {
            setIsFlipped(!isFlipped)
          }}
          disabled={isFlipped}
        >
          <FlipComponent
            isFlipped={isFlipped}
            frontView={
              <View style={styles.postContent}>
                <Image
                  style={styles.postImage}
                  source={{
                    uri: props.cardInfo.postImg,
                  }}
                />
              </View>
            }
            backView={
            <TouchableWithoutFeedback>
              
              <ScrollView>
                <View style={styles.textBox}>
                  <Text style={styles.title}>4교구 김요한입니다.</Text>
                    <Text style={styles.content}>
                      저는 현재 ~~~한 상황에 있고
                      ~~~한 기도부탁을 하고 싶습니다.
                      What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                  </Text>
                </View>
              </ScrollView>
              
            </TouchableWithoutFeedback>
            }
            useNativeDriver={true}
          />
        </TouchableOpacity>
        <View style={styles.postActions}>
          <View style={styles.postActionsLeftView}>
            <TouchableOpacity
              style={[styles.postActionIcon, { paddingLeft: 0 }]}
            >
              <Icon name='heart-o' size={30} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.postActionIcon}>
              <Icon name='comment-o' size={30} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.postActionIcon}>
              <Icon
                name='paper-plane-o'
                type='font-awesome'
                size={30}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Icon name='bookmark-o' size={30} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.postDescView}>
          <Text>
            {'Liked by'}
            <Text
              style={{ fontWeight: 'bold' }}
            >{` ${props.cardInfo.likedby} `}</Text>
            {'and'}
            <Text style={{ fontWeight: 'bold' }}>{' others'}</Text>
          </Text>
          <View style={styles.postDescTextView}>
            <Text style={styles.postDescUsernameText}>
              {`${props.cardInfo.userName}`}
              <Text style={styles.postDescText}>
                {` ${props.cardInfo.desc}`}
              </Text>
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text
              style={{ color: '#333' }}
            >{`${props.cardInfo.timestamp}`}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  bottomBar: {
    height: 50,
    borderTopWidth: 1,
    borderTopColor: '#dfe4ea',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  storyView: {
    paddingVertical: 4,
    marginTop: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  storyHolder: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  storyUserTouchable: {
    position: 'relative',
  },
  storyUsernameText: {
    marginTop: 4,
  },
  storyUserImage: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
  storyPlusIcon: {
    position: 'absolute',
    bottom: -1,
    right: -1,
  },
  contentView: {
    marginTop: 15,
  },
  post: {
    borderWidth: 1,
    borderColor: '#f1f3f6',
  },
  postHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#dfe4ea',
    borderTopColor: '#dfe4ea',
    backgroundColor: '#fff',
  },
  postUserImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  postUsernameText: {
    flex: 1,
    marginLeft: 10,
  },
  postContent: {
    backgroundColor: '#fafafa',
  },
  postImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    resizeMode: 'contain',
    backgroundColor:'rgba(10,10,10,0.1)',
  },
  postActions: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#dfe4ea',
    paddingVertical: 10,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postActionsLeftView: {
    display: 'flex',
    flexDirection: 'row',
  },
  postActionIcon: {
    paddingHorizontal: 6,
  },
  postDescView: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dfe4ea',
  },
  postDescText: {
    fontSize: 16,
    fontWeight: '300',
  },
  postDescUsernameText: {
    fontWeight: 'bold',
    marginTop: 6,
    fontSize: 16,
  },
  suggestionsView: {
    marginTop: 10,
  },
  textBox:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    paddingLeft: 30,
    paddingRight:30,
    paddingTop:30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  content: {
    fontSize: 18,
    marginBottom: 6,
  },
});