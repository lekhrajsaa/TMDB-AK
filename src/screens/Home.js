import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Header from '../components/homeScreen/header';
import Menu from '../assets/Icon/Menu.svg';
import Notif from '../assets/Icon/Notif.svg';
import HeadingText from '../components/homeScreen/headingText';
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

function Home() {
  return (
    <View style={styles.container}>
      <Header
        left={<Menu />}
        center={<HeadingText text={'FilmKu'} />}
        right={<Notif />}
      />
    </View>
  );
}
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
