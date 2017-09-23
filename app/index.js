//@flow
import React from 'react';
import {TabNavigator} from "react-navigation";
import HomeScreen from './home/homeScreen';
import SearchScreen from './search/searchScreen';

const index = TabNavigator({
    Home: {screen: HomeScreen},
    Search: {screen: SearchScreen},
});

export default index;