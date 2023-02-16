import React from 'react';
import {StatusBar, View} from 'react-native';

export default function Mystatusbar({color}) {
  return (
    <View>
      <StatusBar backgroundColor={color} barStyle="dark-content" />
    </View>
  );
}
