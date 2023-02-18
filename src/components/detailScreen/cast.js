import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

export default function Cast({source, nam}) {
  return (
    <View style={styles.main}>
      <Image style={styles.img} source={source} />
      <Text style={styles.text}>{nam}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginRight: 12,
  },
  img: {
    height: W * 0.192,
    width: W * 0.192,
    borderRadius: 8,
  },
  text: {
    color: '#110E47',
    fontFamily: 'Mulish-Regular',
    fontSize: 12,
    textAlign: 'center',
    paddingVertical: 6,
  },
});
