import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import Star from '../../assets/Icon/Star.svg';
import Clock from '../../assets/Icon/clock.svg';
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;
export default function CardViewVertical({
  title,
  poster_path,
  vote_average,
  movieType1,
  movieType2,
  movieType3,
  MovieDuration,
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
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.rating}>
          <Star />
          <Text style={styles.ratingtext}>{rounded}/10 IMDb</Text>
        </View>
        <View style={styles.movieTypeContainer}>
          <View style={styles.movieType}>
            <Text style={styles.text}>{movieType1} </Text>
          </View>
          <View style={styles.movieType}>
            <Text style={styles.text}>{movieType2} </Text>
          </View>
          <View style={styles.movieType}>
            <Text style={styles.text}>{movieType3} </Text>
          </View>
        </View>
        <View style={styles.DurationContainer}>
          <Clock />
          <Text style={styles.durationTime}>{MovieDuration} </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    // margin: 8,
    marginLeft: 24,
    marginBottom: H * 0.02,
    flexDirection: 'row',
    // backgroundColor: '#fff',
  },
  title: {
    fontSize: 14,
    color: '#000',
    paddingVertical: 4,
    fontFamily: 'Mulish-Bold',
    //fontWeight: '700',
  },
  img: {
    height: H * 0.17,
    width: W * 0.22,
    //height: 120,
    //width: 85,
    borderRadius: H * 0.01,
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
  textContainer: {width: W * 0.4, marginLeft: 16},
  movieTypeContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  DurationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  movieType: {
    backgroundColor: '#DBE3FF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginRight: 10,
  },
  text: {
    fontSize: 8,
    fontFamily: 'Mulish-Bold',
    color: '#88A4E8',
  },
  durationTime: {
    fontSize: 12,
    fontFamily: 'Mulish-Regular',
    color: '#000',
    marginLeft: 4,
  },
});
