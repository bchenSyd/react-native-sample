//@flow
import React from 'react';
import {TabNavigator} from "react-navigation";
import {
    View,
    Button,
    Text
} from 'react-native';

class RecentChatsScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return <View>
            <Text>List of recent chats</Text>
            <Button
                onPress={() => navigate('Chat', {user: 'Lucy'})}
                title="Chat with Lucy"
            />
        </View>
    }
}

class AllContactsScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return <View><Text>List of all contacts</Text>
            <Button
                onPress={() => navigate('Chat', {user: 'Lucy'})}
                title="Chat with Lucy"
            />
        </View>
    }
}

const MainScreenNavigator = TabNavigator({
    Recent: {screen: RecentChatsScreen},
    All: {screen: AllContactsScreen},
});

export default MainScreenNavigator;