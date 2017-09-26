// @flow
import React from 'react';
import {
    View,
    Button,
    Text
} from 'react-native';
import type {
    Navigation
} from 'react-navigation'


type Props = {
    navigation: Navigation;
}
const PlaygroundScreen = (props: Props) => {
    const {navigation} = props;
    return <View>
        <Text style={{fontSize: 20, marginBottom: 20}}>Welcome to playgroud!</Text>
        <Button title="go back"
            onPress={e => navigation.goBack()}
        />
    </View>
}

PlaygroundScreen.navigationOptions = {
    title: 'Playgroud',
  };


export default PlaygroundScreen;