import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import styles from '../styling/styles'
import Header from './Header'


class HomeScreen extends Component {

    render() {
        return (
            <View>
                <Header />
            </View>
        );
    }

    static navigationOptions ={
            header: null
            // <View>
            //     <TouchableOpacity onPress = {() => this.props.navigation.openDrawer()}>
            //         <Image source = {require('../../assets/images/menu.png')} 
            //         style={styles.menuImage}
            //         />
            //     </TouchableOpacity>
            // </View>,


    }

}



export default HomeScreen;