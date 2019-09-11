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

        </View>
      
    );
  }
}

export default ChangeLocationScreen;
