import React from 'react';
import {StatusBar, View} from 'react-native';

export default function Mystatusbar({color, translucent, barStyle}) {
  return (
    <View>
      <StatusBar
        backgroundColor={color}
        barStyle={barStyle}
        translucent={translucent}
      />
    </View>
  );
}
