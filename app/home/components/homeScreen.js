// @flow
import {
    View,
    Button,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';


type Props = {
    isFetching: boolean;
    carOfTheWeek: { review: string };

}
const HomeScreen = (props: Props) => {
    const { isFetching, carOfTheWeek } = props;
    const review = carOfTheWeek ? carOfTheWeek.review : ''
    return <View style={styles.main} >
        <Text style={styles.title}>Car of the week</Text>
        <View style={styles.content}>
            {
                isFetching ? <Text>loading...</Text>
                        : <Text>{review}</Text>
            }
        </View>
    </View>

}

const styles = StyleSheet.create({
    main: {
        flex:1, // equivalent of  display: flex ;   height: 100%;
        justifyContent: 'flex-start',
    }, 
    title:{
        flex: 1 // equivalent of height: 10%
    },
    content:{
        flex:9 // equivalent of height: 90%
    }
});

export default HomeScreen;