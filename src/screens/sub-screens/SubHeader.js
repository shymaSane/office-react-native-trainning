import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, TouchableOpacity, Image} from 'react-native';
import styles from '../../styling/styles'

class SubHeaderScreen extends Component {
  render() {
    return (
      <View>
        <View style={styles.profileHeader}>
          <View style={styles.profileHeaderItems}>
            <TouchableOpacity
              style={styles.filterHeaderImageContainer}
              onPress={() => this.props.navigation.goBack()}>
              <Image
                source={require('../../../assets/images/goback.png')}
                style={styles.filterHeaderImage}
              />
            </TouchableOpacity>
            <View>
              <Text style={styles.filterHeaderTitle}>{this.props.title}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default SubHeaderScreen;
