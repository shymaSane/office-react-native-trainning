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

    state={
        search:''
    }

    onSearch = (search) =>{
        alert(`${search}`)
    }
    render() {
        const {search} = this.state
        return (
            <View style = {styles.headerContainer}>
                <View>
                    <TouchableOpacity style={styles.menuImage}> 
                        <Image source = {require('../../assets/images/menu.png')} 
                        style={{height: 12, width: 16}}
                        onPress = {() => this.props.navigation.openDrawer()}
                        />
                    </TouchableOpacity>
                </View>
                {/* TODO: Dynamic profile pciture */}
                <View>
                    <TouchableOpacity style = {styles.profileImageHome}>
                        <Image  />
                    </TouchableOpacity>
                </View>
                {/* search input */}
                <View style={styles.searchInput}>
                    <TouchableOpacity onPress={() => this.onSearch(search)}>
                        <Image source={require('../../assets/images/search.png')}
                         style={styles.searchImage}
                         
                         />
                    </TouchableOpacity>
                    <TextInput
                    style={styles.textSearchInput}
                    placeholder="Search Masafat"
                    onChangeText = {(text) => this.setState({search: text})}
                    value = {search}
                    />
                </View>
                {/* TODO: filter Darwer */}
                <View>
                    <TouchableOpacity style={styles.filterImage}> 
                        <Image source = {require('../../assets/images/filter.png')} 
                        style={{height: 14, width: 16}}
                        // onPress = {() => alert('open filter')}
                        />
                    </TouchableOpacity>
                </View>
            
            </View>
        );
    }


}



export default Header;