// @flow

import React, { PropTypes } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Picker,
} from 'react-native';
import type { SelectionItem } from './types';

type Props = {
    itemLabel: string;
    selectedValue: string;
    options: SelectionItem[];
    onSelectionChange: (selectedVal: number) => void;
}

const ItemPicker = ({ itemLabel, selectedValue, options, onSelectionChange }: Props) => {
    return (
        <View>
            <Text>{itemLabel}</Text>
            <Picker
                selectedValue={selectedValue}
                onValueChange={onSelectionChange}>
                {options.map((o, index) =>
                    <Picker.Item key={`_item_key_${index}`} label={o.name} value={o.value} />
                )}
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    base:{

    },
    label:{

    }
})

export default ItemPicker