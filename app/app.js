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
import IndexNavigator from './indexRoute';
import CarDetailsScreen from './carDetails/carDetailsScreen';
import PlaygroundScreen from './playground';
import AnimationScreen from './playground/animation';

const RouteNavigator = StackNavigator({
  Index: {
    screen: IndexNavigator, //TabNavigatorScreen
    navigationOptions: {
      title: 'Car Catalog',
    },
  },
  CarDetails: {screen: CarDetailsScreen},
  Playground: {screen: PlaygroundScreen},
  Animation: {screen: AnimationScreen}
});


class SimpleApp extends React.Component{
  store = configStore();
  render(){
      return <Provider store={this.store}>
                <RouteNavigator />
          </Provider>
  }
}
export default SimpleApp;