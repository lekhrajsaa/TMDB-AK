import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LengthBox from './length';

export default function MovieDetailBox({value, value1, value2}) {
  return (
    <View style={styles.main}>
      <LengthBox nam={'length'} value={value} />
      <LengthBox nam={'Language'} value={value1} />
      <LengthBox nam={'Rating'} value={value2} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    marginTop:10
  },
});
