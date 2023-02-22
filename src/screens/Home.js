import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Dimensions, FlatList, StatusBar} from 'react-native';
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
      <View style={styles.container} testID={'HomeScreen'}>
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
          <MyActivityIndicator />
        ) : (
          <FlatList
            testID={'Popular'}
            ListHeaderComponent={
              <>
                <TitleBar
                  left={<HeadingText text={'Now Showing'} />}
                  right={<ButtonSeeMore />}
                />
                <FlatList
                  style={styles.flatList}
                  data={DATA}
                  renderItem={({item}) => (
                    <CardView
                      testID={'NowShowing'}
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
                testID={'PopularItems'}
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
  flatList: {paddingLeft: 8},
});
