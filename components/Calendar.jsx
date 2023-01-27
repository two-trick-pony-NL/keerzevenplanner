import React, {useState} from "react";
import { KeyboardAvoidingView, StyleSheet, SafeAreaView, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, FlatList } from 'react-native';
import { Agenda, LocaleConfig } from "react-native-calendars";
import NoTask from "./NoTasks"
import RenderTask from "./RenderTask"


LocaleConfig.locales['nl'] = {
    monthNames: [
      'Januari',
      'Februari',
      'Maart',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Augustus',
      'September',
      'Oktober',
      'November',
      'December'
    ],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
    dayNames: ['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'],
    dayNamesShort: ['Ma', 'Di', 'Wo', 'Do', 'Vrij', 'Za', 'Zo'],
    today: "Vandaag"
  };
  LocaleConfig.defaultLocale = 'nl';


const Calendar = () => {

const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [items, setItems] =  useState({
    '2023-01-20': [{taak:'SO spelling voorbereiden', maakopdracht: false, vak:'🇳🇱 Nederlands', docent:"mr. van Doorn"},{taak:'Opstel over fotosyntese', maakopdracht: true, vak:'🌱 Biologie', docent:"mr. van Doorn"},{taak:'Opstel over aardbevingen in Japan', maakopdracht: true, vak:'🗺 Aardrijkskunde', docent:"mr. van Doorn"},{taak:'Woordjes hoofdstuk 3 leren', maakopdracht: false, vak:'🇩🇪 Duits', docent:"mr. van Doorn"}],
    '2023-01-21': [{taak:'SO spelling voorbereiden', maakopdracht: false, vak:'🇳🇱 Nederlands', docent:"mr. van Doorn"}],
    '2023-01-23': [{taak:'Hoofdstuk gesteente leren', maakopdracht: false, vak:'🗺 Aardrijkskunde', docent:"mr. van Doorn"},{taak:'Woordjes hoofdstuk 3 leren', maakopdracht: false, vak:'🇩🇪 Duits', docent:"mr. van Doorn"}],
    '2023-01-24': [{taak:'Opstel over aardbevingen in Japan', maakopdracht: true, vak:'🗺 Aardrijkskunde', docent:"mr. van Doorn"},{taak:'Hoofdstuk gesteente leren', maakopdracht: false, vak:'🗺 Aardrijkskunde', docent:"mr. van Doorn"}],
    '2023-01-26': [{taak:'Lees hoofdstuk 3', maakopdracht: false, vak:'🌱 Biologie', docent:"mr. van Doorn"},{taak:'Opstel over fotosyntese', maakopdracht: true, vak:'🌱 Biologie', docent:"mr. van Doorn"}],
    '2023-01-27': [{taak:'Hoofdstuk 2 lezen', maakopdracht: true, vak:'🦖 Geschiedenis', docent:"mr. van Doorn"}],
    '2023-01-28': [{taak:'SO spelling voorbereiden', maakopdracht: false, vak:'🇳🇱 Nederlands', docent:"mr. van Doorn"},{taak:'Opstel over fotosyntese', maakopdracht: true, vak:'🌱 Biologie', docent:"mr. van Doorn"},{taak:'Opstel over aardbevingen in Japan', maakopdracht: true, vak:'🗺 Aardrijkskunde', docent:"mr. van Doorn"},{taak:'Woordjes hoofdstuk 3 leren', maakopdracht: false, vak:'🇩🇪 Duits', docent:"mr. van Doorn"}],
  });
  return (
    <SafeAreaView style={styles.agenda}>
      <Text style={{textAlign: 'center', fontsize: 24, fontWeight: '600', paddingBottom: 5,}}> Ingeplanned huiswerk</Text>
      <Agenda 
      items={items} 
      renderItem={RenderTask} 
      onDayPress={day => {console.log('selected day', day)}}
      renderEmptyData={NoTask}
      showOnlySelectedDayItems={false}
      enableSwipeMonths={true}
      showClosingKnob={true}
      onRefresh={() => console.log('refreshing...')}
      />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safe: {
      flex: 1,
    },
    agenda: {
      flex: 10,
      backgroundColor:"white"
    },
  });

export default Calendar;