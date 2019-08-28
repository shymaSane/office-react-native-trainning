import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import styles from '../styling/styles'


class Header extends Component {

    render() {
        return (
            <View style = {styles.headerCntainer}>
                <View>
                    <TouchableOpacity style={styles.menuImage}> 
                        <Image source = {require('../../assets/images/menu.png')} 
                        style={{height: 12, width: 16}}
                        onPress = {() => this.props.navigation.openDrawer()}
                        />
                    </TouchableOpacity>
                </View>

            </View>
        );
    }


}



export default Header;