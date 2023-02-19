import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function TitleBar({
  left,
  center,
  right,
  onPressleft,
  onPressright,
  style,
}) {
  return (
    <View style={[styles.main, {style}]}>
      <View style={styles.left}>{left}</View>

      <View style={styles.right}>
        <TouchableOpacity onPress={onPressright}>{right}</TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    //backgroundColor: '#fff',
    flexDirection: 'row',
    alignContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    width: '100%',
  },

  left: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },

  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
