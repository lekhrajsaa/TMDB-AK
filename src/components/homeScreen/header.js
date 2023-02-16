import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Header({
  left,
  center,
  right,
  onPressleft,
  onPressright,
}) {
  return (
    <View style={styles.main}>
      <View style={styles.left}>
        <TouchableOpacity style={styles.leftTuch} onPress={onPressleft}>
          {left}
        </TouchableOpacity>
      </View>

      <View style={styles.center}>
        <Text style={styles.text}>{center}</Text>
      </View>
      <View style={styles.right}>
        <TouchableOpacity onPress={onPressright}>{right}</TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 20,
    width: '100%',
  },
  text: {
    fontSize: 16,
    color: '#110E47',
    fontFamily: 'Merriweather-Black',
    textAlign: 'center',
    fontWeight: '900',
  },
  left: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  leftTuch: {
    position: 'absolute',
    justifyContent: 'center',
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  center: {
    justifyContent: 'center',
  },
});
