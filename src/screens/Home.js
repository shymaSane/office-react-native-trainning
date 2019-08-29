import React, {Component} from 'react';
import {
  View,
} from 'react-native';
import HomeCategories from './sub-screens/HomeCategories'
import Header from './sub-screens/Header';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Header />
        {/* categories */}
        <HomeCategories />
      </View>
    );
  }

  static navigationOptions = {
    header: null,
  };
}

export default HomeScreen;
