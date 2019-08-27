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


class HomeScreen extends Component {

    render() {
        return (
            <View>
                <Text >Welcome Home</Text>
                <Button title="Products" onPress={() => this.props.navigation.navigate('Products')} /> 
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