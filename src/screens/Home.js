import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Text,
  Image,
} from 'react-native';
import Header from '../components/homeScreen/header';
import Menu from '../assets/Icon/Menu.svg';
import Notif from '../assets/Icon/Notif.svg';
import HeadingText from '../components/homeScreen/headingText';
import TitleBar from '../components/homeScreen/titleBar';
import ButtonSeeMore from '../assets/Icon/ButtonSeeMore.svg';
import CardView from '../components/homeScreen/cardView';
import axios from 'axios';
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    img: require('../assets/Images/image1.png'),
    title: 'First Item',
    rating: '8.0',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    img: require('../assets/Images/image1.png'),
    title: 'Second Item',
    rating: '8.0',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    img: require('../assets/Images/image1.png'),
    title: 'Third Item',
    rating: '8.0',
  },
];

function Home() {
  const [asd, setasd] = useState([]);
  const axiosdata = async () => {
    const response = await axios({
      method: 'get',
      url: 'https://api.themoviedb.org/3/trending/movie/day?api_key=5a284e135bd5c56338884baec64b0829',
    });
    console.log('data', response.data.results);
    setasd(response.data.results);
    return response;
  };

  const fatchdata = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=5a284e135bd5c56338884baec64b0829',
    );
    const res = await response.json();
    console.log('data', res.results);
    return res;
  };
  useEffect(() => {
    axiosdata();
  }, []);
  return (
    <View style={styles.container}>
      <Header
        left={<Menu />}
        center={<HeadingText text={'FilmKu'} />}
        right={<Notif />}
      />
      <TitleBar
        left={<HeadingText text={'Now Showing'} />}
        right={<ButtonSeeMore />}
      />
      <FlatList
        data={asd}
        renderItem={({item}) => (
          <CardView
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
          />
        )}
        keyExtractor={item => item.id}
        horizontal
      />

      <TitleBar
        left={<HeadingText text={'Populer'} />}
        right={<ButtonSeeMore />}
      />
      <FlatList
        data={asd}
        renderItem={({item}) => (
          <CardView
            title={item.title}
            poster_path={item.poster_path}
            rating={item.rating}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
export default Home;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
