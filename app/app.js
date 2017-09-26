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
import PlaygroundScreen from './playground';


const Router = StackNavigator({
  Index: {
    screen: IndexScreen, //TabNavigatorScreen
    navigationOptions: {
      title: 'Car Catalog',
    },
  },
  CarDetails: {screen: CarDetailsScreen},
  Playground: {screen: PlaygroundScreen}
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