import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import styles from '../styling/styles';

class FilterScreen extends Component {
  state = {
    priceFrom: "",
    priceTo: "",
  };

  render() {
    const {priceFrom, priceTo} = this.state;
    return (
      <View style={styles.filterContainer}>
        {/* header */}
        <View style={styles.filterHeader}>
          <TouchableOpacity style={styles.filterHeaderImageContainer} onPress={() => this.props.navigation.goBack()}>
            <Image source={require('../../assets/images/goback.png')} style={styles.filterHeaderImage}/>
          </TouchableOpacity>
          <View>
            <Text style={styles.filterHeaderTitle}>Filters</Text>
          </View>
        </View>
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
            <TouchableOpacity onPress={() => alert('it works')}>
              <Image
                source={require('../../assets/images/go.png')}
                style={styles.goBackIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Distance */}
        <View style={styles.hrLine}>
          <View style={styles.filterLightTextContainer}>
            <Text style={styles.categoriesFilterText}>Distance</Text>
          </View>
          <View style={styles.cateFilterContainer}>
            <View>
              <Text style={styles.AllCategoriesText}>Deafult</Text>
            </View>
            <TouchableOpacity onPress={() => alert('it works')}>
              <Image
                source={require('../../assets/images/go.png')}
                style={styles.goBackIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Price */}
        <View style={styles.hrLine}>
          <View style={styles.priceRangeInputContainer}>
            <View>
              <Text style={styles.priceFormText}>Price:</Text>
            </View>
            <TextInput
              style={styles.priceFormInputText}
              placeholder="from"
              onChangeText={text => this.setState({priceFrom: text})}
              value={`${priceFrom}`}
              keyboardType='numeric'
            />
          </View>
          <View style={styles.priceRangeInputContainer}>
            <View>
              <Text style={styles.priceFormText}>Price:</Text>
            </View>
            <TextInput
              style={styles.priceFormInputText}
              onChangeText={text => this.setState({priceTo: text})}
              value={`${priceTo}`}
              keyboardType='numeric'
              placeholder="to"
            />
          </View>
        </View>
        {/* Relevance */}
        <View>
          <View style={styles.filterLightTextContainer}>
            <Text style={styles.categoriesFilterText}>Sort by</Text>
          </View>
          <View style={styles.cateFilterContainer}>
            <View>
              <Text style={styles.AllCategoriesText}>Relevance</Text>
            </View>
            <TouchableOpacity onPress={() => alert('it works')}>
              <Image
                source={require('../../assets/images/go.png')}
                style={styles.goBackIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default FilterScreen;
