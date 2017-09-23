//@flow
import React from 'react';
import {
  View, 
  Text
} from 'react-native';
class ChatScreen extends React.Component {
    static navigationOptions = ({navigation})=>({
      title: `Chat with ${navigation.state.params.user}`,
    });
    
    render() {
      const {user} = this.props.navigation.state.params;
      return (
        <View>
          <Text>Chat with {user}</Text>
        </View>
      );
    }
  }

  export default ChatScreen;