import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity
} from 'react-native';
import SubHeaderScreen from './sub-screens/SubHeader';
import styles from '../styling/styles';

class ChangeNameScreen extends Component {
  state = {
    name: '',
  };

  saveName = (name) =>{
      this.setState({name: name})
      alert(`${name}`)
  }


  render() {
    const {navigation} = this.props;
    const {name} = this.state;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{flex: 1}}>
          <SubHeaderScreen title={'Name'} navigation={navigation} />
          <View style={styles.changeNameInput}>
            <Image
              source={require('../../assets/images/settings/name.png')}
              style={styles.nameIcon}
            />
            <TextInput
              allowFontScaling={false}
              style={styles.changeNameInputText}
              placeholder="Name"
              onChangeText={text => this.setState({name: text})}
              value={name}
            />
          </View>
          <TouchableOpacity
            style={styles.changeNameInputButton}
            onPress={() => this.saveName(name)}>
            <Text style={styles.signupButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default ChangeNameScreen;
