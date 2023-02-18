import React, {useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Mystatusbar from './src/components/myStatusBar';
import Menu from './src/assets/Icon/Menu.svg';
import Bookmark from './src/assets/Icon/Bookmark.svg';
import Bookmark1 from './src/assets/Icon/Bookmark Copy.svg';
import Bookmark2 from './src/assets/Icon/Bookmark Copy 2.svg';
import {SafeAreaView, View, Dimensions} from 'react-native';
const H = Dimensions.get('window').height;
const W = Dimensions.get('window').width;
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabN() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: H * 0.08,
          borderTopWidth: 12,
          borderTopColor: '#fff',
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Bookmark fill={focused ? '#110E47' : '#D8D8D8'} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Bookmark1 fill={focused ? '#110E47' : '#D8D8D8'} />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Setti"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Bookmark2 fill={focused ? '#110E47' : '#D8D8D8'} />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <>
      <Mystatusbar color={'#fff'} />

      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={TabN} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
