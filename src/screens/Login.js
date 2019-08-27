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
import { throwStatement } from "@babel/types";


class LoginScreen extends Component {

    state = {
        email: '',
        password: '',
        fullName: ''
    }

    login = (email, password, fullName) => {
        alert(`email: ${email}, passowrd:${password}, fullName: ${fullName}`)
    }

    render() {
        const {email, password, fullName} = this.state
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.containerLogin}>
                    <Image style={styles.logoLoginImage} source = {require('../../assets/images/logo.png')} />
                    <View>
                        <View style={styles.loginFirstInput}>
                            <Image source={require('../../assets/images/mail.png')}  style={styles.loginMailImage}/>
                            <TextInput
                            allowFontScaling={false}
                            style = {{flex:1}}
                            placeholder="Email"
                            onChangeText = {(text) => this.setState({email: text})}
                            value = {email}
                            />
                        </View>
                        <View style={styles.loginSecondInput}>
                            <Image source={require('../../assets/images/lock.png')}  style={styles.loginLockImage}/>
                            <TextInput
                            style={{flex: 1}}
                            placeholder="Password"
                            onChangeText = {(text) => this.setState({password: text})}
                            value = {password}
                            />
                        </View>
                        <View style={styles.loginThirdInput}>
                            <Image source={require('../../assets/images/person.png')}  style={styles.loginLockImage}/>
                            <TextInput
                            style = {{flex: 1}}
                            placeholder="Full Name"
                            onChangeText = {(text) => this.setState({fullName: text})}
                            value = {fullName}
                            />
                        </View>
                        
                        <TouchableOpacity
                            style = {styles.loginButton}
                            onPress = {() => this.login(email, password, fullName)}
                            >
                            <Text style={styles.loginButtonText}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.signupLoginMessage}>You Have account?
                            <Text style={styles.signupReminder} onPress={() => this.props.navigation.navigate('Signup')}> Login here</Text>
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

export default LoginScreen;