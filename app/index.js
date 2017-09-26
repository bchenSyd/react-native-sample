//@flow
import React from 'react';
import { TabNavigator } from "react-navigation";
import HomeScreen from './home/homeScreen';
import SearchScreen from './search/searchScreen';
import PlaygroundScreen from './playground';

const IndexScreen = TabNavigator({
    Home: { screen: HomeScreen },
    Search: { screen: SearchScreen },
    Playground: {screen: PlaygroundScreen}
});

export default IndexScreen;