import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from '../styling/styles';
import SubHeaderScreen from './sub-screens/SubHeader';

class SettingsScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style= {styles.settingsConatiner}>
        <SubHeaderScreen title={'Settings'} navigation={navigation} />
        {/* setting menu */}
        <View style={styles.settingsMenuContainer}>
          <View>
            <Text style={styles.settingsItemText3}>Profile</Text>
          </View>
          <TouchableOpacity style={styles.settingsMenuItemContainer}>
            <Image source={require('../../assets/images/mockProfile.png')}  style= {styles.settingsProfilepic} />
            <View style={styles.settingsPhotoTextContainer}>
            <Text style={styles.settingsItemText1}>Photo</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsMenuItemContainer}>
            <Image 
            source={require('../../assets/images/settings/name.png')}
            style={styles.nameIcon}
            />
            <View style={styles.settingsTextContainer}>
              <Text style={styles.settingsItemText1}>Name</Text>
              <View>
                <Text style={styles.settingsItemText2}>First Name</Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* Email */}
          <TouchableOpacity style={styles.settingsMenuItemContainer}>
            <Image 
            source={require('../../assets/images/settings/email.png')}
           style={styles.settingsEmailIcon}
            />
            <View style={styles.settingsTextContainer}>
              <Text style={styles.settingsItemText1}>Email</Text>
              <View>
                <Text style={styles.settingsItemText2}>email@email.com</Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* Location */}
          <TouchableOpacity style={styles.settingsMenuItemContainer}>
            <Image 
            source={require('../../assets/images/settings/location.png')}
            style={styles.settingsLocationIcon}
            />
            <View style={styles.settingsTextContainer}>
              <Text style={styles.settingsItemText1}>Location</Text>
              <View>
                <Text style={styles.settingsItemText2}>Amman, Jordan</Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* password */}
          <TouchableOpacity style={styles.settingsMenuItemContainer}>
            <Image 
            source={require('../../assets/images/settings/password.png')}
            style={styles.settingsPassIcon}
            />
            <View style={styles.settingsTextContainer}>
              <Text style={styles.settingsItemText1}>Password</Text>
            </View>
          </TouchableOpacity>
          {/* notifications */}
          <TouchableOpacity style={styles.settingsMenuItemContainer}>
            <Image 
            source={require('../../assets/images/settings/notification.png')}
            style={styles.settingsNoteIcon}
            />
            <View style={styles.settingsNoteTextContainer}>
              <Text style={styles.settingsItemText1}>Notification</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SettingsScreen;
