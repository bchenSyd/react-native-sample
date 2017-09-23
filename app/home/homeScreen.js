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
        const { navigation:{navigate}, isFetching, carOfTheWeek }= this.props;
        const review = carOfTheWeek ? carOfTheWeek.review : ''
        return <View>
            <Text>Car of the week</Text>
            {
                isFetching? <Text>loading...</Text>
                :<Text>
                    {review }
                </Text>
            }
        </View>
    }
}

export default connect(
    state => ({
        isFetching: state.home.isFetching,
        carOfTheWeek: state.home.carOfTheWeek
    }),
    {
        getCarOfTheWeek
    }
)(HomeScreen);