import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

export default function MyActivityIndicator() {
  return (
    <View style={styles.main}>
      <ActivityIndicator size="small" color="#88A4E8" />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
