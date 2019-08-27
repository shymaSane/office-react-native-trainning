import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from '../styling/styles'


class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Text >Welcome Home</Text>
                <Button title="Products" onPress={() => this.props.navigation.navigate('Products')} /> 
            </View>
        );
    }

    static navigationOptions = ({navigation}) => ({
        headerStyle: {
            elevation: 0,
            shadowOpacity: 0
          },
          headerLeft:
            <View>
                <TouchableOpacity onPress = {() => alert('Drawer open')}>
                    <Image source = {require('../../assets/images/menu.png')} 
                    style={styles.menuImage}
                    />
                </TouchableOpacity>
            </View>
    })

}



export default HomeScreen;