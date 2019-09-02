import React, {Component} from 'react';
import {StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';

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
              <Image
                style={styles.profileImageMenu}
                source={require('../../../assets/images/mockProfile.png')}
              />
              <Text style={styles.menuProfileText1}>Profile Name</Text>
              <Text style={styles.menuProfileText2}>Location</Text>
            </View>
          </ImageBackground>
        </View>
        {/* Menu List */}
        <View style={styles.menulistContainer}>
          <TouchableOpacity style={styles.menuItemContainer}>
            <Image source={require("../../../assets/images/home.png")} style={styles.MenuItemIconHome}/>
            <Text style={styles.menuItemText}>Browse</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItemContainer}>
            <Image source={require("../../../assets/images/camera.png")} style={styles.MenuItemIconCamera}/>
            <Text style={styles.menuItemText}>Sell Your Stuff</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItemContainer}>
            <Image source={require("../../../assets/images/chat.png")} style={styles.MenuItemIconChat}/>
            <Text style={styles.menuItemText}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItemContainer}>
            <Image source={require("../../../assets/images/notification.png")} style={styles.MenuItemIconNote}/>
            <Text style={styles.menuItemText}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItemContainer}>
            <Image source={require("../../../assets/images/categories.png")} style={styles.MenuItemIconCate}/>
            <Text style={styles.menuItemText}>Categories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItemContainer}>
            <Image source={require("../../../assets/images/person.png")} style={styles.MenuItemIconProfile}/>
            <Text style={styles.menuItemText}>My Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItemContainer}>
            <Image source={require("../../../assets/images/help.png")} style={styles.MenuItemIconHelp}/>
            <Text style={styles.menuItemText}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItemContainer}>
            <Image source={require("../../../assets/images/logout.png")} style={styles.MenuItemIconHelp}/>
            <Text style={styles.menuItemText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default DrawerMenu;
