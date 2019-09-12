import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import SubHeaderScreen from './sub-screens/SubHeader';
import styles from '../styling/styles';
import MapView from 'react-native-maps'

class ChangeLocationScreen extends Component {
  state = {
    name: 'Ahmad Arabyat',
  };

  saveName = name => {
    this.setState({name: name});
    alert(`${name}`);
  };

  render() {
    const {navigation} = this.props;
    const {name} = this.state;
    return (
      <View style={{flex: 1}}>
        <SubHeaderScreen title={'Change Location'} navigation={navigation} />
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}

export default ChangeLocationScreen;
