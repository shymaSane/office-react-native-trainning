import React, {Component} from 'react';
import {
  View,
  Image, 
  FlatList,
  Dimensions
} from 'react-native';

const ITEM_WIDTH = (Dimensions.get('window').width/2)

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
        <View style={{marginBottom: 10, flex: 1}}>
            <FlatList
            numColumns={2}
            data={this.state.data}
            renderItem = {({item}) => 
               <Image style = {{width: ITEM_WIDTH, height: 200}} source = {item}/>
            }
            keyExtractor={(item, index) => index}
            />
        </View>
    
    );
  }
}

export default HomeImageGallery;
