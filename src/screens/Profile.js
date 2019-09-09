import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import styles from '../styling/styles';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import HomeImageGallery from './sub-screens/HomeImageGallery';

const FirstRoute = () => <HomeImageGallery />;

const SecondRoute = () => <HomeImageGallery />;

const ThirdRoute = () => <HomeImageGallery />;

const FourthRoute = () => <HomeImageGallery />;

class ProfileScreen extends Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'SELLING'},
      {key: 'second', title: 'SOLD'},
      {key: 'third', title: 'FAVORITE'},
      {key: 'fourth', title: 'REVIEWS'},
    ],
  };

  renderTabBar = props => {
    return (
      <TabBar
        style={styles.profileSubHeader}
        labelStyle={styles.profileSubHeaderText}
        {...props}
        indicatorStyle={{backgroundColor: '#e65970', height: 2.5}}
      />
    );
  };

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
          <TouchableOpacity
          onPress ={() => this.props.navigation.navigate('Settings')}
          >
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
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            first: FirstRoute,
            second: SecondRoute,
            third: ThirdRoute,
            fourth: FourthRoute,
          })}
          renderTabBar={this.renderTabBar}
          onIndexChange={index => this.setState({index})}
          initialLayout={{width: Dimensions.get('window').width}}
        />
      </View>
    );
  }
}

export default ProfileScreen;
