import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Text,
  Image,
  StatusBar,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Header from '../components/homeScreen/header';
import Menu from '../assets/Icon/Menu.svg';
import Notif from '../assets/Icon/Notif.svg';
import HeadingText from '../components/homeScreen/headingText';
import TitleBar from '../components/homeScreen/titleBar';
import ButtonSeeMore from '../assets/Icon/ButtonSeeMore.svg';
import CardView from '../components/homeScreen/cardView';
import axios from 'axios';
import CardViewVertical from '../components/homeScreen/cardViewVertical';
import Mystatusbar from '../components/myStatusBar';
import {useDispatch, useSelector} from 'react-redux';
import {getDataMethod} from '../redux/Action';
import MyActivityIndicator from '../components/common/MyActivityIndicator';
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

function SearchScreen({navigation}) {
  const [loading, setLoading] = useState(true);

  const DATA = useSelector(state => state.Reducers);
  const [searchData, setSearchData] = useState([]);
  const [movieData, setMovieData] = useState([]);

  const [text, onChangeText] = useState('');

  const MovieSearchdata = async url => {
    const response = await axios({
      method: 'get',
      url: url,
    });
    setSearchData(response.data.results);
    setMovieData(DATA);
    setLoading(false);
    // dispatch(getDataMethod(response.data.results));
    return response;
  };

  useEffect(() => {
    const TimeOut = setTimeout(() => {
      MovieSearchdata(
        `https://api.themoviedb.org/3/search/movie?api_key=5a284e135bd5c56338884baec64b0829&language=en-US&&query=${text}`,
      );
    }, .800);
    return () => clearTimeout(TimeOut);
  }, [text]);
  return (
    <>
      <View style={styles.container} testID={'searchScreen'}>
        <View style={styles.left} />
        <View style={styles.Right} />
        <Mystatusbar
          color={'transparent'}
          barStyle={'dark-content'}
          translucent={true}
        />
        <View style={styles.header}>
          <Header
            left={<Menu />}
            center={<HeadingText text={'FilmKu'} />}
            right={<Notif />}
          />
          <View style={styles.searchBoxContainer}>
            <TextInput
              testID="searchBox"
              onChangeText={onChangeText}
              value={text}
              placeholder={'search movies'}
              style={styles.searchBox}
              placeholderTextColor={'#88A4E8'}
            />
          </View>
        </View>

        {loading ? (
          <MyActivityIndicator />
        ) : (
          <>
            <TitleBar
              left={<HeadingText text={'Movies'} />}
              right={<ButtonSeeMore />}
            />
            <FlatList
              data={text == '' ? movieData : searchData}
              renderItem={({item}) => (
                <CardViewVertical
                  title={item.title}
                  poster_path={item.poster_path}
                  vote_average={item.vote_average}
                  movieType1={'HORROR'}
                  movieType2={'MYSTERY'}
                  movieType3={'THRILLER'}
                  MovieDuration={'1h 47m'}
                />
              )}
              keyExtractor={item => item.id}
              onRefresh={() => MovieSearchdata()}
              refreshing={loading}
            />
          </>
        )}
      </View>
    </>
  );
}
export default SearchScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#Fff',
  },
  left: {
    position: 'absolute',
    backgroundColor: '#FAFAFA',
    top: 0,
    left: 0,
    height: H,
    width: W * 0.35,
  },
  Right: {
    position: 'absolute',
    backgroundColor: '#fff',
    top: 0,
    right: 0,
    height: H,
    width: W * 0.65,
  },
  header: {
    marginTop: StatusBar.currentHeight,
  },
  searchBox: {
    borderColor: '#88A4E8',
    borderWidth: 2,
    height: 50,

    backgroundColor: '#DBE3FF',
    marginHorizontal: 20,

    borderRadius: 25,
    color: '#88A4E8',
    paddingHorizontal: 20,
  },
  searchBoxContainer: {
    marginVertical: 30,
  },
});
