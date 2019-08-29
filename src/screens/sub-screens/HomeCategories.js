import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from '../../styling/styles';

class HomeCategories extends Component {
  render() {
    return (
        <View style={styles.categoriesContainer}>
          <TouchableOpacity>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryImageShadow}>
                <Image
                  style={styles.imageCategoryStyle}
                  source={require('../../../assets/images/cars.png')}
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
                  source={require('../../../assets/images/Estates.png')}
                />
              </View>
              <Text style={styles.categoriesText}>Estates</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryContainer}>
            <View style={styles.categoryImageShadow}>
              <Image
                style={styles.imageCategoryStyle}
                source={require('../../../assets/images/jobs.png')}
              />
            </View>
            <Text style={styles.categoriesText}>Jobs</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.categoryContainer}>
              <View style={styles.categoryImageShadow}>
                <Image
                  style={styles.imageCategoryStyle}
                  source={require('../../../assets/images/electronics.png')}
                />
              </View>
              <Text style={styles.categoriesText}>Electronics</Text>
            </View>
          </TouchableOpacity>
        </View>
    );
  }
}

export default HomeCategories;
