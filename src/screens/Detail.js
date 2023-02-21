import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  StatusBar,
  ScrollView,
} from 'react-native';
import Header from '../components/homeScreen/header';
import Menu2 from '../assets/Icon/Menu2.svg';
import Back from '../assets/Icon/Back.svg';

import Star from '../assets/Icon/Star.svg';
import BookMaark from '../assets/Icon/Bookmaark.svg';
import ButtonSeeMore from '../assets/Icon/ButtonSeeMore.svg';

import Mystatusbar from '../components/myStatusBar';
import MovieDetailBox from '../components/detailScreen/movieDetailBox';
import TitleBar from '../components/homeScreen/titleBar';
import HeadingText from '../components/homeScreen/headingText';
import Cast from '../components/detailScreen/cast';
import PlayBtn from '../components/detailScreen/PlayBtn';
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;
export default function DetailScreen({route, navigation}) {
  const path = `https://image.tmdb.org/t/p/w500${route.params.poster}`;
  var number = route.params.vote_average;
  var rounded = Math.round(number * 10) / 10;

  const DATA = [
    {
      id: '1',
      title: 'Tom Holland',
      src: require('../assets/Images/img1.png'),
    },
    {
      id: '2',
      title: 'Zendaya',
      src: require('../assets/Images/img2.png'),
    },
    {
      id: '3',
      title: 'Benedict      Cumberbatch',
      src: require('../assets/Images/img3.png'),
    },
    {
      id: '4',
      title: 'Jacon Batalon',
      src: require('../assets/Images/img4.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <Mystatusbar
        barStyle={'light-content'}
        color={'transparent'}
        translucent={true}
      />
      <View style={styles.img}>
        <Image style={styles.img} source={{uri: `${path}`}} />
      </View>
      <View style={styles.header}>
        <Header
          left={<Back />}
          onPressleft={() => navigation.goBack()}
          right={<Menu2 />}
        />
      </View>
      <ScrollView>
        <PlayBtn text={'Play Trailer'} />
        <View style={styles.whiteBox}>
          <View style={styles.textContainer}>
            <View style={styles.bookmarkContainer}>
              <Text style={styles.title}>{route.params.title}</Text>
              <View style={styles.BookMaark}>
                <BookMaark />
              </View>
            </View>

            <View style={styles.rating}>
              <Star />
              <Text style={styles.ratingtext}>{rounded}/10 IMDb</Text>
            </View>
            <View style={styles.movieTypeContainer}>
              <View style={styles.movieType}>
                <Text style={styles.text}>{route.params.movieType1} </Text>
              </View>
              <View style={styles.movieType}>
                <Text style={styles.text}>{route.params.movieType2} </Text>
              </View>
              <View style={styles.movieType}>
                <Text style={styles.text}>{route.params.movieType3} </Text>
              </View>
            </View>
            <MovieDetailBox
              value={route.params.MovieDuration}
              value1={route.params.MovieLanguage}
              value2={route.params.MovieRating}
            />
            <View style={styles.heading}>
              <HeadingText text={'Description'} />
              <Text style={styles.DescriptionText}>
                {route.params.Description}
              </Text>
            </View>
          </View>
          <TitleBar
            left={<HeadingText text={'Now Showing'} />}
            right={<ButtonSeeMore />}
          />
          <FlatList
            style={styles.FlatList}
            data={DATA}
            renderItem={({item}) => <Cast source={item.src} nam={item.title} />}
            keyExtractor={item => item.id}
            horizontal
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: '#fff', flex: 1},
  DescriptionText: {
    color: '#9C9C9C',
    fontFamily: 'Mulish-Regular',
    lineHeight: 22,
    fontSize: 12,
    width: W * 0.8,
    marginTop: 10,
  },
  heading: {marginVertical: 24},
  img: {
    position: 'absolute',
    top: 0,
    height: H * 0.4,
    width: W,
  },
  title: {
    fontSize: 20,
    color: '#000',
    // paddingVertical: 10,
    fontFamily: 'Mulish-Bold',
    //fontWeight: '700',
    width: W * 0.6,
  },
  header: {
    marginTop: StatusBar.currentHeight,
  },

  whiteBox: {
    backgroundColor: '#fff',
    paddingBottom: 60,
    borderRadius: 20,
  },

  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  ratingtext: {
    fontSize: 12,
    color: '#9C9C9C',
    fontFamily: 'Mulish-Regular',
    // fontWeight: '400',
  },
  textContainer: {marginLeft: 24, marginTop: 24},
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
  bookmarkContainer: {
    flexDirection: 'row',
  },
  BookMaark: {position: 'absolute', right: 24, top: 4},
  FlatList: {backgroundColor: '#fff', paddingLeft: 24},
});
