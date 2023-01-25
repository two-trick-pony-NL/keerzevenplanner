import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import {Alert, Button, StyleSheet, Text, View, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Auth } from '../config/firebase';


function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleSignup = () => {
    if (email !== "" && password !== ""){
      signInWithEmailAndPassword(Auth, email, password)
        .then(() => console.log("Signup Success"))
        .catch((err) => Alert.alert("Signup error", err.message));
    }
  };
    return <View style={styles.centered}>
          <Image source = {require('../assets/justlogo.png')}style = {{ width: '100%', height: 200 }}/>
          
          <TextInput
            style={styles.input}
            autoCapitalize='none'
            placeholder='email address'
            keyboardType='email-address'
            textContentType='emailAddress'
            autoFocus={true}
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
        <Button title="Log in" onPress={onHandleSignup}></Button>
        <Text>of</Text>
        <Button title="Maak een account" onPress={() => navigation.navigate("Signup")}></Button>
        </View>;
};

const styles = StyleSheet.create({
  centered: {
    backgroundColor:"white",
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

export default Login;