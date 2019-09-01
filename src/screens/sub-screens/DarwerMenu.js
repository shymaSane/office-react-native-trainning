import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground, Image} from 'react-native';

import styles from '../../styling/styles';

class DrawerMenu extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        {/* Profile Header */}
        <View style={styles.menuProfile}>
          <ImageBackground
            source={require('../../../assets/images/profileBackground.png')}
            style={styles.profileBackgroundImage}>
            <View style={styles.menuProfileContainer}>
              <View style={styles.profileImageMenuConatiner}>
                <Image
                  style={styles.profileImageMenu}
                  source={require('../../../assets/images/mockProfile.png')}
                />
              </View>
              <Text style={styles.menuProfileText1}>Profile Name</Text>
              <Text style={styles.menuProfileText2}>Location</Text>
            </View>
          </ImageBackground>
        </View>
        {/* Menu List */}
      </View>
    );
  }
}

export default DrawerMenu;
