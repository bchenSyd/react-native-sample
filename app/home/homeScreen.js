//@flow
import React from 'react';
import {
    View,
    Button,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { color, fontSize } from '../common/theme';
import { connect } from 'react-redux';
import { getCarOfTheWeek } from './actions';
import type {
    Navigation
} from 'react-navigation';


type Props = {
    carOfTheWeek: {
        review: string;
    };
    getCarOfTheWeek: () => void;
    isFetching: boolean;
    navigation: Navigation;
}
class HomeScreen extends React.Component<any, Props, any> {
    componentDidMount() {
        const { carOfTheWeek, getCarOfTheWeek } = this.props;
        if (!carOfTheWeek) {
            // the whole point of using redux to store carOfTheWeek is that, 
            // once you fetched it before, it's stored in store so that next time
            // page is mounted (navi back), you don't have to fetch it again
            getCarOfTheWeek();
        }
    }


    render() {
        const { navigation: { navigate }, isFetching, carOfTheWeek } = this.props;
        const review = carOfTheWeek ? carOfTheWeek.review : ''
        return <View style={styles.main}>
            <View style={styles.content } >
                <Text >Car of the week</Text>
            {
                isFetching ? <Text>loading...</Text>
                    : <Text>
                        {review}
                    </Text>
                }
            </View>
            {/* you are not able to change the height of a default Android Button*/}
            <Button title='goto Playground'
                onPress={e => navigate('Playground')}
            />
            {/* if you want to change it, use a TouchableOpacity instead*/}
            <TouchableOpacity style={styles.touchable} onPress={e => navigate('Animation')}>
                <Text style={styles.touchableText} >goto Animation</Text>
            </TouchableOpacity>

        </View>
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    content: {
        fontSize: 20,
        marginBottom: 20,
        flex: 1,
        alignItems: 'flex-start',
    },
    touchable: {
        backgroundColor: color.blue,
        marginTop:10,
        alignItems: 'center'
    },
    touchableText: {
        color: 'white',
        fontSize: fontSize.default,
        fontWeight: '500',
        padding: fontSize.large,
    }
})


export default connect(
    state => ({
        isFetching: state.home.isFetching,
        carOfTheWeek: state.home.carOfTheWeek
    }),
    {
        getCarOfTheWeek
    }
)(HomeScreen);