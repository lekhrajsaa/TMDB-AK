import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function LengthBox({nam, value}) {
  return (
    <View style={styles.main}>
      <Text style={styles.text1}>{nam}</Text>
      <Text style={styles.text2}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginRight: 50,
  },
  text1: {
    color: '#9C9C9C',
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
  },
  text2: {
    color: '#000',
    fontFamily: 'Mulish-SemiBold',
    fontSize: 12,
  },
});
