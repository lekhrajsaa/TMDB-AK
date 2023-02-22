import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from 'react-native';
import Star from '../../assets/Icon/Star.svg';
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

export default function CardView({
  title,
  poster_path,
  vote_average,
  onPress,
  testID,
}) {
  const path = `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`;
  var number = vote_average;
  var rounded = Math.round(number * 10) / 10;
  return (
    <View style={styles.item} testID={testID}>
      <View style={styles.img}>
        <TouchableOpacity onPress={onPress}>
          <Image style={styles.img} source={{uri: `${path}`}} />
        </TouchableOpacity>
      </View>

      <View style={{width: W * 0.35}}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.rating}>
          <Star />
          <Text style={styles.ratingtext}>{rounded}/10 IMDb</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    // margin: 8,
    marginLeft: 16,
    // marginBottom: H * 0.22,
  },
  title: {
    fontSize: 14,
    color: '#000',
    paddingVertical: 10,
    fontFamily: 'Mulish-Bold',
    // fontWeight: '700',
  },
  img: {
    height: H * 0.3,
    width: W * 0.3813,
    // height: 212,
    //width: 143,
    borderRadius: H * 0.01,
    shadowColor: 'black', // for ios
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    //backgroundColor: '#fff',
    elevation: 10,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingtext: {
    fontSize: 12,
    color: '#9C9C9C',
    fontFamily: 'Mulish-Regular',
    // fontWeight: '400',
  },
});
