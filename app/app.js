//@flow
import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import MainScreenNavigator from './mainScreenNavigator';
import ChatScreen from './chatScreen';

const SimpleApp = StackNavigator({
  Home: {
    screen: MainScreenNavigator,
    navigationOptions: {
      title: 'My Chats',
    },
  },
  Chat: {screen: ChatScreen}
});
export default SimpleApp;