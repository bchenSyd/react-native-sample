//@flow
import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import IndexScreen from './index';
import CarDetailsScreen from './carDetails/carDetailsScreen';

const SimpleApp = StackNavigator({
  Index: {
    screen: IndexScreen,
    navigationOptions: {
      title: 'Car Catalog',
    },
  },
  CarDetails: {screen: CarDetailsScreen}
});
export default SimpleApp;