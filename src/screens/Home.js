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

    // state = {
    //     search: ''
    // }

    // //search input changing function
    // changeSearch = () => {
    //     const {search} = this.state
    // }

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
                <TouchableOpacity onPress = {() => this.props.navigation.openDrawer()}>
                    <Image source = {require('../../assets/images/menu.png')} 
                    style={styles.menuImage}
                    />
                </TouchableOpacity>
            </View>,
        // headerTitle:
        //     <View style={styles.signupFirstInput}>
        //         <Image source={require('../../assets/images/search.png')}  style={styles.signupMailImage}/>
        //         <TextInput
        //         allowFontScaling={false}
        //         style = {{flex:1}}
        //         placeholder="Email"
        //         onChangeText = {(text) => this.setState({search: text})}
        //         value = {this.this.state.search}
        //         />
        //     </View>

    })

}



export default HomeScreen;