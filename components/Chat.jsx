import React, {
  useState,
  useLayoutEffect,
  useCallback
} from 'react';
import { Text, SafeAreaView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot
} from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { Auth, database } from '../config/firebase';



export default function Chat() {

  const [messages, setMessages] = useState([]);

const onSignOut = () => {
    signOut(Auth).catch(error => console.log('Error logging out: ', error));
  };

  useLayoutEffect(() => {

      const collectionRef = collection(database, 'chats');
      const q = query(collectionRef, orderBy('createdAt', 'desc'));

  const unsubscribe = onSnapshot(q, querySnapshot => {
      console.log('querySnapshot unsusbscribe');
        setMessages(
          querySnapshot.docs.map(doc => ({
            _id: doc.data()._id,
            text: doc.data().text,
            user: doc.data().user
          }))
        );
      });
  return unsubscribe;
    }, []);

  const onSend = useCallback((messages = []) => {
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, messages)
      );
      // setMessages([...messages, ...messages]);
      const { _id, createdAt, text, user } = messages[0];    
      addDoc(collection(database, 'chats'), {
        _id,
        createdAt,
        text,
        user
      });
    }, []);

    return (
      <SafeAreaView style={{flex: 1, marginBottom: -35, outerHeight:'100%', backgroundColor:'white'}}>
      <Text style={{textAlign: 'center', fontSize: '24', fontWeight: '600', paddingBottom: 5,}}> Chat met je huiswerkbegeleider</Text>
      <GiftedChat
        style={{bottom: -20, position: 'absolute'}}
        messages={messages}
        showAvatarForEveryMessage={false}
        showUserAvatar={false}
        alwaysShowSend={true}
        alignTop={false}
        onSend={messages => onSend(messages)}
        messagesContainerStyle={{
          backgroundColor: '#fff'
        }}
        textInputStyle={{
          backgroundColor: '#fff',
          borderRadius: 20,
        }}
        user={{
          _id: Auth?.currentUser?.email,
          avatar: 'https://i.pravatar.cc/300'
        }}
      />
      </SafeAreaView>
    );
}
