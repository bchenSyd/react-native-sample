//@flow
import React from 'react';
import configStore from './store/configureStore';
import { Provider } from 'react-redux';
import {
  View,
  Text,
  Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import IndexScreen from './index';
import CarDetailsScreen from './carDetails/carDetailsScreen';

const Router = StackNavigator({
  Index: {
    screen: IndexScreen,
    navigationOptions: {
      title: 'Car Catalog',
    },
  },
  CarDetails: {screen: CarDetailsScreen}
});


class SimpleApp extends React.Component{
  store = configStore();
  render(){
      return <Provider store={this.store}>
          <Router />
          </Provider>
  }
}
export default SimpleApp;