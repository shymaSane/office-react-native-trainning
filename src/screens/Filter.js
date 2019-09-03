import React, { Component } from "react";
import {
  View,
  Text,
  Image
} from 'react-native';


class FilterScreen extends Component {
    render() {
        return (
            <View>
                <Text>Filter</Text>
            </View>
        );
    }

    static navigationOptions = {
        title: 'Filters',
        headerStyle: {
            elevation:0,
            shadowOpacity:0,
        },
        headerTintColor:'#B1B1B1',
        headerTitleStyle:{
            fontFamily: 'Montserrat-Medium',
            color: '#B1B1B1',
            fontSize: 16,
            marginLeft: -11
        },
        headerLeft: ({ goBack }) =>
           ( <Image source={require('../../assets/images/goback.png')} onPress={ () => { goBack() } } resizeMode="contain" style={{width: 16, height: 10, marginTop: 22, marginLeft: 18, marginBottom: 21 }} /> ),  
      }
}



export default FilterScreen;