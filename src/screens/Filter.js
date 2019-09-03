import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styling/styles';

class FilterScreen extends Component {
  render() {
    return (
      <View style={styles.filterContainer}>
        {/* categories */}
        <View style={styles.hrLine}>
          <View>
            <Text style={styles.categoriesFilterText}>Categories</Text>
          </View>
          {/*  */}
          <View style={styles.cateFilterContainer}>
            <View style={styles.cateImageFilterContainer}>
              <View>
                <Image
                  style={styles.cateFilterIcon}
                  source={require('../../assets/images/cate-l.png')}
                />
              </View>
              <View style={styles.AllCategoriesTextContainer}>
                <Text style={styles.AllCategoriesText}>All Categories</Text>
              </View>
            </View>
            <TouchableOpacity onPress={()=> alert('it works')}>
              <Image
                source={require('../../assets/images/go.png')}
                style={styles.goBackIcon}
              />
            </TouchableOpacity>
          </View>
          {/*  */}
        </View>
      </View>
    );
  }
}

export default FilterScreen;
