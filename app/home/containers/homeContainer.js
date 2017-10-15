//@flow
import React from 'react';
import {
    View,
    Button,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { color, fontSize } from '../../common/theme';
import { connect } from 'react-redux';
import { getCarOfTheWeek } from '../actions';
import type {
    Navigation
} from 'react-navigation';
import Splash from 'react-native-smart-splash-screen';
import HomeScreen from '../components/homeScreen';

type Props = {
    carOfTheWeek: {
        review: string;
    };
    getCarOfTheWeek: () => void;
    isFetching: boolean;
    navigation: Navigation;
}
class HomeContainer extends React.Component<any, Props, any> {
    componentDidMount() {
        // This is the actual image splash screen, not the animated one.
        if (Splash) {
            Splash.close({
                animationType: Splash.animationType.fade,
                duration: 300,
                delay: 200,
            });
        }
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


            <HomeScreen style={styles.content}
                isFetching={isFetching}
                carOfTheWeek={carOfTheWeek} />

            <View>
                {/* you are not able to change the height of a default Android Button*/}
                <Button title='goto Playground'
                    onPress={e => navigate('Playground')}
                />
                {/* if you want to change it, use a TouchableOpacity instead*/}
                <TouchableOpacity style={styles.touchable} onPress={e => navigate('Animation')}>
                    <Text style={styles.touchableText} >goto Animation</Text>
                </TouchableOpacity>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1, //manditory, equivalent of set Height: 100%
    },
    content: {
        marginBottom: 20,
        flex: 1,
        alignItems: 'flex-start',
    },
    touchable: {
        backgroundColor: color.blue,
        marginTop: 10,
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
)(HomeContainer);
export {
    HomeContainer
}