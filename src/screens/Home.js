import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Text,
  Image,
  StatusBar,
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
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

function Home({navigation}) {
  const dispatch = useDispatch();
  const DATA = useSelector(state => state.Reducers);
  const [loading, setLoading] = useState(true);

  const Moviedata = async () => {
    const response = await axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/trending/movie/day?api_key=5a284e135bd5c56338884baec64b0829',
    });

    dispatch(getDataMethod(response.data.results));
    setLoading(false);
    return response;
  };

  useEffect(() => {
    Moviedata();
  }, []);
  return (
    <>
      <View style={styles.container}>
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
        </View>
        {loading ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size="small" color="#88A4E8" />
          </View>
        ) : (
          <FlatList
            ListHeaderComponent={
              <>
                <TitleBar
                  left={<HeadingText text={'Now Showing'} />}
                  right={<ButtonSeeMore />}
                />
                <FlatList
                  style={{paddingLeft: 8}}
                  data={DATA}
                  renderItem={({item}) => (
                    <CardView
                      title={item.title}
                      poster_path={item.poster_path}
                      vote_average={item.vote_average}
                      onPress={() =>
                        navigation.navigate('DetailScreen', {
                          poster: item.backdrop_path,
                          title: item.title,
                          vote_average: item.vote_average,
                          Description: item.overview,
                          movieType1: 'HORROR',
                          movieType2: 'MYSTERY',
                          movieType3: 'THRILLER',
                          MovieDuration: '1h 47m',
                          MovieLanguage: 'English',
                          MovieRating: 'PG-13',
                        })
                      }
                    />
                  )}
                  keyExtractor={item => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
                <TitleBar
                  left={<HeadingText text={'Populer'} />}
                  right={<ButtonSeeMore />}
                />
              </>
            }
            data={DATA}
            renderItem={({item}) => (
              <CardViewVertical
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                movieType1={'HORROR'}
                movieType2={'MYSTERY'}
                movieType3={'THRILLER'}
                MovieDuration={'1h 47m'}
                onPress={() =>
                  navigation.navigate('DetailScreen', {
                    poster: item.backdrop_path,
                    title: item.title,
                    vote_average: item.vote_average,
                    Description: item.overview,
                    movieType1: 'HORROR',
                    movieType2: 'MYSTERY',
                    movieType3: 'THRILLER',
                    MovieDuration: '1h 47m',
                    MovieLanguage: 'English',
                    MovieRating: 'PG-13',
                  })
                }
              />
            )}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </>
  );
}
export default Home;
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
});
