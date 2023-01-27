import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const RenderTask = item => {
  return (
    
    <View style={styles.itemContainer}>
      <Text style={styles.vak}>{item.vak} </Text>
      <Text>
        <Text style={styles.taak}>Dit moet je doen: </Text> 
        <Text>{item.taak}</Text>
      </Text>
      <Text>
        <Text style={styles.docent}>Docent: </Text>
        <Text>{item.docent}</Text>
      </Text>
      <View style={styles.pill}>
        <Text style={styles.pilltext}>{item.maakopdracht ? 'Maken':'Lezen'} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    safe: {
      flex: 1,
    },
    section: {
      flex: 1,
      backgroundColor: 'lightblue',
    },
    agenda: {
      flex: 10,
    },
    pill: {
      borderRadius: 10,
      backgroundColor: 'pink',
      padding: 3,
      width: '17%',
      justifyContent: "center",
      marginTop:5,
  
    },
    pilltext: {
      textAlign: 'center',
    },
    vak: {
      textAlign: 'left',
      fontsize: 20,
      fontWeight: '600',
      paddingBottom: 5,
    },
    docent: {
      textAlign: 'left',
      fontWeight: '200',
      paddingLeft: 15,
    },
    taak: {
      textAlign: 'left',
      fontWeight: '200',
      paddingLeft: 15,
    },
    itemContainer: {
      backgroundColor: 'white',
      justifyContent: 'center',
      margin: 5,
      padding: 10, 
      borderRadius: 15,
      flex: 1,
      alignContent: 'space-between',
    },
  });

export default RenderTask;