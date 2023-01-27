import React, { useState, createContext, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Auth, database } from './config/firebase';
import { Ionicons } from '@expo/vector-icons';


// Get icons from: https://icons.expo.fyi


//Importing the core components for
import Calendar from "./components/Calendar";
import Taskplanner from "./components/PlanTask";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Chat from "./components/Chat";

//import { config } from "dotenv";

const Tab = createBottomTabNavigator();
const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

function ChatStack() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
        <Tab.Screen 
        name="Planner" 
        component={Taskplanner} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen 
        name="Kalender" 
        component={Calendar}
        options={{
          tabBarLabel: 'Kalender',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen 
        name="Chat" 
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbox-ellipses" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen 
        name="Profiel" 
        component={Profile}
        options={{
          tabBarLabel: 'Profiel',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}/>
      </Tab.Navigator>
  );
}

function AuthStack() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
      <Tab.Screen 
        name='Login' 
        component={Login}
        options={{
          tabBarLabel:"Log in",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="log-in" color={color} size={size} />
          ),}}
        />
      <Tab.Screen 
        name='Signup' 
        component={Signup}
        options={{
          tabBarLabel:"Nieuw account",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-add" color={color} size={size} />
          ),}} />
      </Tab.Navigator>
  );
}

// Checks if we have a user logged in if so, we send the correct screens. 
function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = onAuthStateChanged(
      Auth,
      async authenticatedUser => {
        authenticatedUser ? setUser(authenticatedUser) : setUser(null);
        setIsLoading(false);
      }
    );
// unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, [user]);
if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

    return (
     <View style={{ flex: 1}}>
        <NavigationContainer>
          {user ? <ChatStack /> : <AuthStack />}
        </NavigationContainer>
      </View>
    );
}


export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}