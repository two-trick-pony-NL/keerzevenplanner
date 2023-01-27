import React from 'react';
import {StyleSheet, Text, Button, View } from 'react-native';
import { signOut } from 'firebase/auth';
import { Auth } from '../config/firebase';
import { SafeAreaView } from 'react-native-safe-area-context';



const signOutUser = () => {
  signOut(Auth).catch(error => console.log('Error logging out: ', error));
};


function Profile({ navigation }) {
    return <SafeAreaView style={styles.centered}>
        <View style={{flex:1, justifyContent: 'flex-end'}}>
          <Text style={{textAlign: 'center', fontSize: '24', fontWeight: '600', paddingBottom: 5,}}> 🙋🏻‍♂️Profiel</Text>
          <Text style={styles.subtitle}>Je bent ingelogd als:</Text> 
          <Text> {Auth.currentUser.email}</Text>
          </View>
          <View style={{flex:1, justifyContent: 'flex-end'}}>
            <Button title='Log Uit' onPress={signOutUser} ></Button>
            <Text style={styles.subtitle}> user ID:  {Auth.currentUser.uid} </Text>
          </View>
        </SafeAreaView>;
};


const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    marginVertical: 2,
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
  },
});

export default Profile;