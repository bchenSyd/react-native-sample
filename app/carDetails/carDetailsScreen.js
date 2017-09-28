//@flow
import React from 'react';
import {
  View, 
  Text
} from 'react-native';
class CarDetailsScreen extends React.Component {
    static navigationOptions = {
      title: 'Car Details',
    };
    
    render() {
      const { params } = this.props.navigation.state;
      return (
        <View>
          <Text>car details model:{params.model}</Text>
        </View>
      );
    }
  }

  export default CarDetailsScreen;