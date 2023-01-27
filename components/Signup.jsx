import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useReducer, useState } from 'react';
import {Alert, Button, StyleSheet, Text, View, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Auth } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';



function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onHandleSignup = () => {
    if (email !== "" && password !== ""){
      createUserWithEmailAndPassword(Auth, email, password, name)
        .then(() => console.log("Signup Success"))
        .catch((err) => Alert.alert("Login error", err.message));
    }
  };
    return <View style={styles.centered}>
          <Image source = {require('../assets/justlogo.png')}style = {{ width: '100%', height: 200 }}/>
          <Text style={styles.title}>Maak account</Text> 
          <TextInput
            style={styles.input}
            autoCapitalize='none'
            placeholder='Je naam'
            textContentType='text'
            autoFocus={false}
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.input}
            autoCapitalize='none'
            placeholder='email address'
            keyboardType='email-address'
            textContentType='emailAddress'
            autoFocus={false}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder='Wachtwoord'
            autoCapitalize='none'
            textContentType='password'
            autoCorrect={false}
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        <Button title="Maak een nieuwe account" onPress={onHandleSignup}></Button>
        </View>;
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'white',
  },
  title: {
    fontSize: 32,
    marginVertical: 2,
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
  },
  input: {
    backgroundColor: "#F6F7FB",
    height: 58,
    width: '90%',
    marginBottom: 20,
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
});

export default Signup;