import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';
import LoginScreen from "./Login";


class SignupScreen extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.heading}>Signup page!!</Text>
                <Button title="Products" onPress={() => this.props.navigation.navigate('Products')}/> 
            </View>
        );
    }

    static navigationOptions = {
        title: 'signup',
        header: null,
        headerTitleStyle: {
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white'
        },
        headerStyle: {
            backgroundColor: 'orange'
        },
        headerbackTitleStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            color: 'white'
        }
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontSize: 18,
        textAlign: 'center'
    }
})

export default SignupScreen;