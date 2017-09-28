//@flow
import React from 'react';
import { TabNavigator } from "react-navigation";
import HomeContainer from './home';
import SearchContainer from './search';


const IndexNavigator = TabNavigator({
    Home: { screen: HomeContainer },
    Search: { screen: SearchContainer }
});

export default IndexNavigator;