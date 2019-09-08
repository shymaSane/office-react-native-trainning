import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import styles from '../styling/styles';

class ProfileScreen extends Component {
  render() {
    return (
      <View style={styles.profileContainer}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.profileHeaderItems}>
            <TouchableOpacity
              style={styles.filterHeaderImageContainer}
              onPress={() => this.props.navigation.goBack()}>
              <Image
                source={require('../../assets/images/goback.png')}
                style={styles.filterHeaderImage}
              />
            </TouchableOpacity>
            <View>
              <Text style={styles.filterHeaderTitle}>My Profile</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Image
              source={require('../../assets/images/settings.png')}
              style={styles.settingsIcon}
            />
          </TouchableOpacity>
        </View>
        {/* profile main header */}
        <ImageBackground
          source={require('../../assets/images/mainProfile.png')}
          style={styles.mHBackgroundImage}>
          <View style={styles.profileMainHeaderContainer}>
            <View>
              <View>
                <Text style={styles.mHText1}>Profile Name</Text>
              </View>
              <View>
                <Text style={styles.mHText2}>City, Country</Text>
              </View>
            </View>
            <View>
              <Image
                source={require('../../assets/images/mockProfile.png')}
                style={styles.profileMHImage}
              />
              <TouchableOpacity style={styles.editIconContainer}>
                <Image
                  source={require('../../assets/images/edit.png')}
                  style={styles.editIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default ProfileScreen;
