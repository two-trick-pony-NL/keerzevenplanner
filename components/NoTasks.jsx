import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

const NoTask = () => {
  return <View style={styles.centered}>
          <Text style={styles.title}>🎈</Text> 
          <Text style={styles.subtitle}>Geen huiswerk meer voor vandaag!</Text> 
        </View>;
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

export default NoTask;