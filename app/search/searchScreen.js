//@flow
import React from 'react';
import {
    View,
    Button,
    Text
} from 'react-native';

class SearchScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return <View><Text>List of all contacts</Text>
            <Button
                onPress={() => navigate('CarDetails')}
                title="Search"
            />
        </View>
    }
}

export default SearchScreen;