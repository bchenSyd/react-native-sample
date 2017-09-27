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
    selectedValue: number;
    options: SelectionItem[];
    onSelectionChange: (selectedVal: number) => void;
}

const ItemPicker = ({ itemLabel, selectedValue, options, onSelectionChange }: Props) => {
    return (
        <View style={styles.base}>
            <Text style={styles.label}>{itemLabel}</Text>
            <Picker style={styles.selection}
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
    base: {
        //flex: 1 // DO NOT PUT FLEX VALUE HERE -- all we need is display: flex
        flexDirection: 'row',  // when direction is row
        alignItems:'center', // vertical alignment
        justifyContent: 'center', // text-align (horizental alignment)
    },
    label: {
        flex: 1
    },
    selection: {
       flex: 3
    }
})

export default ItemPicker