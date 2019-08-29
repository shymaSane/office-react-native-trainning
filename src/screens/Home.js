import React, {Component} from 'react';
import {
  View,
} from 'react-native';
import HomeCategories from './sub-screens/HomeCategories'
import Header from './sub-screens/Header';
import HomeImageGallery from './sub-screens/HomeImageGallery'

class HomeScreen extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Header />
        {/* categories */}
        <HomeCategories />
        <HomeImageGallery />
      </View>
    );
  }

  static navigationOptions = {
    header: null,
  };
}

export default HomeScreen;
