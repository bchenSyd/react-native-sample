//@flow
import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    Picker,
} from 'react-native';

class SearchScreen extends Component {
    go2Details = e => {
        const { navigate } = this.props.navigation;
        debugger;
        console.log('navigate')
        navigate('CarDetails');
    }


    render() {
        return <View><Text>List of all contacts</Text>
            
            <Button
                onPress={this.go2Details}
                title="Search"
            />
        </View>
    }
}

export default SearchScreen;