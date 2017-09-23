//@flow

import {
  AppRegistry,
} from 'react-native';
import SampleApp from './app/app';

console.disableYellowBox = true;
AppRegistry.registerComponent('SampleApp', () => SampleApp);
