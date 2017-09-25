//@flow
import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    Picker,
    PixelRatio,
    StyleSheet,
} from 'react-native';
import { color, fontSize } from '../common/theme';

class SearchScreen extends Component {
    go2Details = e => {
        const { navigate } = this.props.navigation;
        debugger;
        console.log('navigate')
        navigate('CarDetails');
    }


    render() {
        return <View style={styles.base}>
            <View>
                <View style={[styles.mainBody]}>
                    <Text style={[styles.searchItem]}>Select Make</Text>
                    <Text style={[styles.searchItem, styles.searchOptions]}>Select Make</Text>
                </View>
                <View style={[styles.mainBody]}>
                    <Text style={[styles.searchItem]}>Select Model</Text>
                    <Text style={[styles.searchItem,styles.searchOptions]}>Select Model</Text>
                </View>
            </View>
         
            <Button
                style={styles.searchButton}
                onPress={this.go2Details}
                title="Search"
            />
        
        </View>
    }
}

const styles = StyleSheet.create({
    base: {
        backgroundColor: 'transparent',
        borderBottomColor: color.gray20,
        borderBottomWidth: 1 / PixelRatio.get(),
        justifyContent: 'space-between',
        flexDirection: 'column',
        flex:1, // same as 100%
        alignItems: 'stretch',
        marginBottom:2
    },
    mainBody:{
        alignItems: 'baseline',
        flexDirection: 'row',
        padding: fontSize.small,
        justifyContent: 'center',
    },
    searchItem: {
        height: 30,
        justifyContent: 'center',
        fontSize: fontSize.default
    },
    searchOptions:{
        width:120,
        marginLeft:10,
    },
    searchButton:{
        
    }
});

export default SearchScreen;