import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  
} from 'react-native';
import styles from '../styling/styles';

class CategoriesScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, width: '100%'}}>
        <View style={styles.cateHeader}>
          <TouchableOpacity
            style={styles.filterHeaderImageContainer}
            onPress={() => this.props.navigation.goBack()}>
            <Image
              source={require('../../assets/images/goback.png')}
              style={styles.filterHeaderImage}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.filterHeaderTitle}>Categories</Text>
          </View>
        </View>
        <View style={styles.cateScrollView}>
          <ScrollView>
            <View style={styles.cateContainerTop}>
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
        </View>
      </View>
    );
  }
}

export default CategoriesScreen;
