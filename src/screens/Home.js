import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from '../styling/styles';
import Header from './Header';
import {ScrollView} from 'react-native-gesture-handler';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-start'}}>
        <Header />
        {/* categories */}
        <View style={styles.categoriesContainer}>
          <TouchableOpacity>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryImageShadow}>
                <Image
                  style={styles.imageCategoryStyle}
                  source={require('../../assets/images/cars.png')}
                />
              </View>
              <Text style={styles.categoriesText}>Cars</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryImageShadow}>
                <Image
                  style={styles.imageCategoryStyle}
                  source={require('../../assets/images/Estates.png')}
                />
              </View>
              <Text style={styles.categoriesText}>Estates</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryContainer}>
            <View style={styles.categoryImageShadow}>
              <Image
                style={styles.imageCategoryStyle}
                source={require('../../assets/images/jobs.png')}
              />
            </View>
            <Text style={styles.categoriesText}>Jobs</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryImageShadow}>
                <Image
                  style={styles.imageCategoryStyle}
                  source={require('../../assets/images/electronics.png')}
                />
              </View>
              <Text style={styles.categoriesText}>Electronics</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  static navigationOptions = {
    header: null,
  };
}

export default HomeScreen;
