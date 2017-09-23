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
      return (
        <View>
          <Text>car details</Text>
        </View>
      );
    }
  }

  export default CarDetailsScreen;