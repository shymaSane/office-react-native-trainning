import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {DrawerItems, SafeAreaView} from 'react-navigation';

import styles from '../../styling/styles';

class DrawerMenu extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView>
        <SafeAreaView
          style={{flex: 1}}
          forceInset={{top: 'always', horizontal: 'never'}}>
          {/* Profile Header */}
          <View style={styles.menuProfile}>
            <ImageBackground
              source={require('../../../assets/images/profileBackground.png')}
              style={styles.profileBackgroundImage}>
              <TouchableOpacity style={styles.menuProfileContainer}>
                <Image
                  style={styles.profileImageMenu}
                  source={require('../../../assets/images/mockProfile.png')}
                />
                <Text style={styles.menuProfileText1}>Profile Name</Text>
                <Text style={styles.menuProfileText2}>Location</Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          {/* Menu List */}
          <DrawerItems {...this.props} />
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default DrawerMenu;
