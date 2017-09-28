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
import ItemPicker from '../../common/itemPicker';
import { color, fontSize } from '../../common/theme';
import type {SelectionItem } from '../../common/types';

type Props = {
    go2CarDetails: (model: number) => void;
    makeList: SelectionItem[];
    modelList: SelectionItem[];
    selectedMake: number,
    selectedModel: number,
    searchButtonEnabled: boolean;
    onSelectionChange: (type: string, newSelection: number) => void;
}
class SearchScreen extends Component<any, Props, any>{

    _onSelectionChange = (type: string) => (newVal: number) => {
        const { onSelectionChange } = this.props;
        onSelectionChange(type, newVal);
    }

    render() {
        const { go2CarDetails, makeList, modelList, selectedMake,
            selectedModel, onSelectionChange, searchButtonEnabled } = this.props;
        return <View style={styles.base}>
            <View style={styles.content}>
                <ItemPicker itemLabel='Make' selectedValue={selectedMake}
                    onSelectionChange={this._onSelectionChange('make')}
                    options={makeList} />
                <ItemPicker itemLabel='Model'
                    selectedValue={selectedModel}
                    onSelectionChange={this._onSelectionChange('model')}
                    options={modelList} />
            </View>

            <Button
                disabled={!searchButtonEnabled}
                onPress={e => go2CarDetails(1)}
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
        flex: 1, // same as 100%
        alignItems: 'stretch',
        marginBottom: 2
    },
    content: {
        padding: fontSize.large,
        justifyContent: 'center',
    },
    searchItem: {
        height: 30,
        justifyContent: 'center',
        fontSize: fontSize.default
    },
    searchOptions: {
        width: 120,
        marginLeft: 10,
    }
});

export default SearchScreen;