import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function HeadingText({text}) {
  return <Text style={styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#110E47',
    fontFamily: 'Merriweather-Black',
  },
});
