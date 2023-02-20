import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import ButtonPlay from '../../assets/Icon/ButtonPlay.svg';
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

export default function PlayBtn({text}) {
  return (
    <View style={styles.PlayBtn}>
      <TouchableOpacity>
        <ButtonPlay />
      </TouchableOpacity>
      <Text style={styles.playText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  PlayBtn: {
    alignSelf: 'center',
    marginTop: 24,
    alignItems: 'center',
    marginBottom: H * 0.07,
  },
  playText: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'Mulish-Bold',
    marginTop: 8,
  },
});
