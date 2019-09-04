import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from '../styling/styles';

class CategoriesScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.cateContainer}>
          <TouchableOpacity style={styles.cateItemContainer}>
            <View>
              <Image
                resizeMode="contain"
                style={styles.cateCarImage}
                source={require('../../assets/images/car.png')}
              />
            </View>
            <View style={styles.cateTextContainer}>
              <Text style={styles.cateText}>Cars</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cateItemContainer}>
            <View>
              <Image
                resizeMode="contain"
                style={styles.cateMobileImage}
                source={require('../../assets/images/mobile.png')}
              />
            </View>
            <View style={styles.cateTextContainer}>
              <Text style={styles.cateText}>Mobiles</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.cateContainer}>
          <TouchableOpacity style={styles.cateItemContainer}>
            <View>
              <Image
                resizeMode="contain"
                style={styles.cateCarImage}
                source={require('../../assets/images/elect.png')}
              />
            </View>
            <View style={styles.cateTextContainer}>
              <Text style={styles.cateText}>Electronics</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cateItemContainer}>
            <View>
              <Image
                resizeMode="contain"
                style={styles.cateHouseIcon}
                source={require('../../assets/images/house.png')}
              />
            </View>
            <View style={styles.cateTextContainer}>
              <Text style={styles.cateText}>Estates</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/*  */}
        <View style={styles.cateContainer}>
          <TouchableOpacity style={styles.cateItemContainer}>
            <View>
              <Image
                resizeMode="contain"
                style={styles.cateCarImage}
                source={require('../../assets/images/fashion.png')}
              />
            </View>
            <View style={styles.cateTextContainer}>
              <Text style={styles.cateText}>Fashion</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cateItemContainer}>
            <View>
              <Image
                resizeMode="contain"
                style={styles.cateServiceIcon}
                source={require('../../assets/images/service.png')}
              />
            </View>
            <View style={styles.cateTextContainer}>
              <Text style={styles.cateText}>Service</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/*  */}
        <View style={styles.cateContainer}>
          <TouchableOpacity style={styles.cateItemContainer}>
            <View>
              <Image
                resizeMode="contain"
                style={styles.cateAccessIcon}
                source={require('../../assets/images/accessories.png')}
              />
            </View>
            <View style={styles.cateTextContainer}>
              <Text style={styles.cateText}>Accessories</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cateItemContainer}>
            <View>
              <Image
                resizeMode="contain"
                style={styles.cateAccessIcon}
                source={require('../../assets/images/others.png')}
              />
            </View>
            <View style={styles.cateTextContainer}>
              <Text style={styles.cateText}>Others</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default CategoriesScreen;
