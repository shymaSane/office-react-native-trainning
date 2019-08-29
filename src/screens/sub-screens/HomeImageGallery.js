import React, {Component} from 'react';
import {
  View,
  Image, 
  FlatList,
} from 'react-native';
import styles from '../../styling/styles'




class HomeImageGallery extends Component {
    state = {
        data: [
            require('../../../assets/images/pic1.png'),
            require('../../../assets/images/pic2.png'),
            require('../../../assets/images/pic3.png'),
            require('../../../assets/images/pic4.png'),
            require('../../../assets/images/pic1.png'),
            require('../../../assets/images/pic2.png'),
            require('../../../assets/images/pic3.png'),
            require('../../../assets/images/pic4.png'),
            require('../../../assets/images/pic1.png'),
            require('../../../assets/images/pic2.png'),
            require('../../../assets/images/pic3.png'),
            require('../../../assets/images/pic4.png')
        ]
    }
  render() {
    return (               
        <View style={styles.imageGalleryConatiner}>
            <FlatList
            numColumns={2}
            data={this.state.data}
            renderItem = {({item}) => 
               <Image style = {styles.gallerysImage} source = {item}/>
            }
            keyExtractor={(item, index) => index}
            />
        </View>
    
    );
  }
}

export default HomeImageGallery;
