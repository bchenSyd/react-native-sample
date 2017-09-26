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
        const {carOfTheWeek, getCarOfTheWeek} = this.props;
        if (!carOfTheWeek) {
            // the whole point of using redux to store carOfTheWeek is that, 
            // once you fetched it before, it's stored in store so that next time
            // page is mounted (navi back), you don't have to fetch it again
            getCarOfTheWeek();
        }
    }

    render() {
        const {navigation: {navigate}, isFetching, carOfTheWeek} = this.props;
        const review = carOfTheWeek ? carOfTheWeek.review : ''
        return <View>
            <Text style={{fontSize: 20, marginBottom: 20}}>Car of the week</Text>
            {
                isFetching ? <Text>loading...</Text>
                    : <Text>
                        {review}
                    </Text>
            }
            <Button title='goto playground'
                onPress={e => navigate('Playground')} />
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