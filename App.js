import React from "react";
import {View } from 'react-native';
import Routes from './routes';

const App = () => 
{
  return (
    <View style={{flex: 1,
      paddingTop: 30
    }}>
       <Routes/>
    </View>
  )
}

export default App;