//@flow
import React from 'react';
import {
    View,
    Button,
    Text
} from 'react-native';

class HomeScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return <View>
            <Text>Car of the week</Text>
           
        </View>
    }
}

export default HomeScreen;