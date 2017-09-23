//@flow
import React from 'react';
import {
    View,
    Button,
    Text
} from 'react-native';
import {connect} from 'react-redux';
import {getCarOfTheWeek} from './actions';


class HomeScreen extends React.Component {
    componentDidMount() {
        console.log('cdm')
        const {getCarOfTheWeek} = this.props;
        getCarOfTheWeek();
    }

    render() {
        const {navigate} = this.props.navigation;
        return <View>
            <Text>Car of the week</Text>
            <Text>details</Text>
        </View>
    }
}

export default connect(
    state => ({
        isFetching: state.isFetching,
        carOfTheWeek: state.carOfTheWeek
    }),
    {
        getCarOfTheWeek
    }
)(HomeScreen);