// @flow
import {
    StyleSheet,
    View,
    Text,
    Animated,
    Image,
    Easing
} from 'react-native';
import React, { Component } from 'react';
const img_source = 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png';


class AnimationScreen extends Component {
    static navigationOptions = {
        title: 'React-Native Animation Sample',
    };


    spinValue: any;
    constructor() {
        super();
        // create an instance variable spinValue
        this.spinValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.spin();
    }

    spin() {
        this.spinValue.setValue(0); // reset value to zero
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });

        return <View style={styles.container}>
            <Animated.Image
                style={{
                    width: 227,
                    height: 200,
                    transform: [{ rotate: spin }]
                }}
                source={{ uri: img_source }} />
        </View>
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default AnimationScreen;
