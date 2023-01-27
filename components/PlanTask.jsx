import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import List from './swipelist/List';


const DATA = [
  {id: 1, taak:'SO spelling voorbereiden', deadline: '29 januari', vak:'🇳🇱 Nederlands', docent:"mr. van Doorn"},
  {id: 2, taak:'Hoofdstuk gesteente leren', deadline: '29 januari', vak:'🗺 Aardrijkskunde', docent:"mr. van Doorn"},
  {id: 3, taak:'Opstel over aardbevingen in Japan', deadline: '29 januari', vak:'🗺 Aardrijkskunde', docent:"mr. van Doorn"},
  {id: 4, taak:'Shakespeare uitlezen', deadline: '29 januari', vak:'🇬🇧 Engels', docent:"mr. van Doorn"},
  {id: 5, taak:'Opstel schrijven over boek Shakespeare', deadline: '29 januari', vak:'🇬🇧 Engels', docent:"mr. van Doorn"},
  {id: 6, taak:'Hoofdstuk Franse Revolutie', deadline: '29 januari', vak:'🦖 Geschiedenis', docent:"mr. van Doorn"},
  {id: 7, taak:'Photosyntese hoodstuk 3 paragraaf 14', deadline: '29 januari', vak:'🌱 Biografie', docent:"mr. van Doorn"},
  {id: 8, taak:'Sommen hoofdstuk 3 stelling van Pythagoras', deadline: '29 januari', vak:'♾ Wiskunde', docent:"mr. van Doorn"},

];


function Taskplanner({ navigation }) {
    return <SafeAreaView> 
      <Text style={{textAlign: 'center', fontsize: 24, fontWeight: '600', paddingBottom: 5,}}> Jouw huiswerk</Text>
      <List data={DATA} />
      </SafeAreaView>
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

export default Taskplanner;