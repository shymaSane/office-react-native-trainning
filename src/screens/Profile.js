import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';


class ProfileScreen extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.heading}>Profile</Text>
                <Button title="profile" onPress={() => this.props.navigation.navigate('Home')} /> 
            </View>
        );
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

export default ProfileScreen;