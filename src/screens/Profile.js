import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
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
      </View>
    );
  }
}

export default ProfileScreen;
