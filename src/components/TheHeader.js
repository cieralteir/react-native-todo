import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TheHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={{color: '#ccc'}}>REACT NATIVE TODO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#37474F',
    color: '#eee',
  },
});

export default TheHeader;
