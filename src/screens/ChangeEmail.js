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

class ChangeEmailScreen extends Component {
  state = {
    email: '',
  };

  saveName = (email) =>{
      this.setState({email: email})
      alert(`${email}`)
  }

  render() {
    const {navigation} = this.props;
    const {email} = this.state;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{flex: 1}}>
          <SubHeaderScreen title={'Email'} navigation={navigation} />
          <View style={styles.changeNameInput}>
            <Image
              source={require('../../assets/images/settings/email.png')}
              style={styles.settingsEmailIcon}
            />
            <TextInput
              allowFontScaling={false}
              style={styles.changeNameInputText}
              placeholder="Email"
              onChangeText={text => this.setState({email: text})}
              value={email}
            />
          </View>
          <TouchableOpacity
            style={styles.changeNameInputButton}
            onPress={() => this.saveName(email)}>
            <Text style={styles.signupButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default ChangeEmailScreen;
