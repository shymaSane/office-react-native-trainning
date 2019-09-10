import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';


class ChangeNameScreen extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.heading}>ChangeName </Text>
                <Button title="Notificationas" onPress={() => this.props.navigation.navigate('Home')} /> 
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

export default ChangeNameScreen;