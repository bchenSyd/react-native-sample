// @flow 

import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchScreen from '../components/searchScreen';
import type {SelectionItem } from '../../common/types';

type State = {
    makeList: SelectionItem[];
    modelList: SelectionItem[];
    selectedMake: number,
    selectedModel: number,
}
class SearchContainer extends Component<any, any, State> {
    state: State; // for some reason, you must declare State type again here; (checked Relay code)
    constructor() {
        super()
        this.state = {
            makeList: [{
                name: 'Please select a Make',
                value: -1
            },
            {
                name: 'mazda',
                value: 1
            }],
            selectedMake: -1,
            modelList: [{
                name: 'Plese select a Model',
                value: -1
            },
            {
                name: '3',
                value: 1
            }],
            selectedModel: -1,
        }
    }

    go2CarDetails = selectedModel => {
        const { navigate } = this.props.navigation;
        debugger;
        console.log('navigate')
        navigate('CarDetails');
    }

    onSelectionChange = (type: string, newVal: number) => {
        const newState = { ...this.state };
        const selectionKey = type === 'make' ? 'selectedMake' : 'selectedModel';
        newState[selectionKey] = newVal;
        this.setState(newState);
    }

    render() {
        const { makeList, modelList, selectedMake, selectedModel } = this.state;
        return <SearchScreen makeList={makeList}
            modelList={modelList}
            selectedMake={selectedMake}
            selectedModel={selectedModel}
            onSelectionChange={this.onSelectionChange}
            go2CarDetails={this.go2CarDetails} />
    }
}

export default connect()(SearchContainer);