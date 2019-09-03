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
              <View style={styles.menuProfileContainer}>
                <TouchableOpacity>
                  <Image
                    style={styles.profileImageMenu}
                    source={require('../../../assets/images/mockProfile.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuProfileTextContainer}>
                  <Text style={styles.menuProfileText1}>Profile Name</Text>
                </TouchableOpacity>
                <Text style={styles.menuProfileText2}>Location</Text>
              </View>
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
