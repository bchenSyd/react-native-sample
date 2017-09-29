//@flow
import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
} from 'react-native';
import callAPI from '../common/callAPI';

type CarModel = {
  id: number;
  name: string;
  makeId: number;
  makeName: string;
  imageUrl: string;
  price: number;
}

class CarDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Car Details',
  };
  state: {
    model: CarModel | null;
  }
  constructor() {
    super();
    this.state = {
      model: null,
    }
  }
  componentDidMount() {
    const { params } = this.props.navigation.state;
    callAPI(`/models/${params.modelId}`)
      .then(res => {
        this.setState({
          model: res.model,
        });
      })
  }

  render() {
    const { model } = this.state;
    return (
      <View style={styles.main}>
        <View style={styles.title}>
          <Text style={styles.titleTxt}>Car Details</Text>
        </View>
        <View style={styles.content}>
          {
            model ? <View style={styles.carDetails}>
              <View style={ [styles.item, {flex:4}]}>
                <Image style={styles.image} source={{ uri: model.imageUrl }}
                  resizeMode="contain" />
              </View>
              <View style={styles.item}>
                <Text>Make Name</Text>
                <TextInput value={model.makeName}  editable={false}/>
              </View>
              <View style={styles.item}>
                <Text>Model name</Text>
                <TextInput value={model.name}  editable={false}/>
              </View>
              <View style={styles.item}>
                <Text>Price guide</Text>
                <TextInput value={'$' + model.price} editable={false}/>
              </View>
            </View>
              : <Text>loading car details... </Text>
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex:1, // if you delete this line, everything gets squashed into one line
    justifyContent:'center'
  },
  title: {
    flex:1,
    flexDirection:'column', // default to 'column'
    justifyContent:'center',  // column: veritcal alighment  ; row: horizental alignment
    alignItems:'center' ,     // column: horizental alignment; row: vertical alignment
  },
  titleTxt:{
    fontSize: 30,
    fontWeight: 'bold',
  },
  content: {
    flex:5,
  },
  carDetails: {
    flex:1, // if you see everything squashed into a blob, that means the container doesn't have height set;
    flexDirection: 'column',
  },
  item: {
    flex: 1,
  },
  image: {
    borderRadius: Platform.OS === 'android' ? 5 : 0,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
})


export default CarDetailsScreen;