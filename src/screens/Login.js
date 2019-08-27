import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback, 
} from 'react-native';
import styles from '../styling/styles'


class SignupScreen extends Component {

    state = {
        email: '',
        password: '',
        fullName: ''
    }

    login = (email, password, fullName) => {
        alert(`email: ${email}, passowrd:${password}, fullName: ${fullName}`)
        //redirect to home
        this.props.navigation.navigate('Home')
    }

    render() {
        const {email, password, fullName} = this.state
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.containerSignup}>
                    <Image style={styles.loginLogoImage} source = {require('../../assets/images/logo.png')} />
                    <View>
                        <View style={styles.signupFirstInput}>
                            <Image source={require('../../assets/images/mail.png')}  style={styles.signupMailImage}/>
                            <TextInput
                            allowFontScaling={false}
                            style = {{flex:1}}
                            placeholder="Email"
                            onChangeText = {(text) => this.setState({email: text})}
                            value = {email}
                            />
                        </View>
                        <View style={styles.loginSecondInput}>
                            <Image source={require('../../assets/images/lock.png')}  style={styles.signupLockImage}/>
                            <TextInput
                            style={{flex: 1}}
                            placeholder="Password"
                            onChangeText = {(text) => this.setState({password: text})}
                            value = {password}
                            secureTextEntry={true}
                            />
                        </View>
                        <TouchableOpacity
                            style = {styles.signupButton}
                            onPress = {() => this.login(email, password, fullName)}
                            >
                            <Text style={styles.signupButtonText}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.loginMessage}>You Don't have an account?
                            <Text style={styles.loginReminder} onPress={() => this.props.navigation.navigate('Signup')}> Signup here</Text>
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    static navigationOptions={
        header: null
    }

}

export default SignupScreen;