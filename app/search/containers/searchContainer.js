// @flow 

import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchScreen from '../components/searchScreen';
import type {SelectionItem } from '../../common/types';
import callAPI from '../../common/callAPI';



type State = {
    makeList: SelectionItem[];
    modelList: SelectionItem[];
    selectedMake: number;
    selectedModel: number;
    searchButtonEnabled: boolean;
}
class SearchContainer extends Component<any, any, State> {
    state: State; // for some reason, you must declare State type again here; (checked Relay code)
    constructor() {
        super()
        this.state = {
            makeList: [{
                id: -1,
                name: 'Please select a Make',
            }],
            selectedMake: -1,
            modelList: [{
                id: -1,
                name: 'Select a Make first',
            }],
            selectedModel: -1,
            searchButtonEnabled: false,
        }
    }


    componentWillMount() {
        callAPI('/makes')
            .then(res => {
                const { makeList } = this.state;
                this.setState({
                    makeList: makeList.concat(res),
                })
            })
    }

    go2CarDetails = selectedModel => {
        const { navigate } = this.props.navigation;
        navigate('CarDetails');
    }

    onSelectionChange = (type: string, newVal: number) => {
        if (type === 'make') {
            const makeId = newVal;
            if (makeId === -1) {
                // user de-select make;
                this.setState({
                    selectedMake: makeId,
                    modelList: [{
                        id: -1,
                        name: 'Select a Make first',
                    }],
                    searchButtonEnabled: false,
                });
            } else {
                this.setState({
                    selectedMake: makeId,
                    searchButtonEnabled: false,
                })
                // user selects a make;
                callAPI(`/modelsByMake/${makeId}`)
                    .then(({ models }) => {
                        this.setState({
                            modelList: [{
                                id: -1,
                                name: 'Please select a Model',
                            }].concat(models)
                        })
                    })
            }
        } else {
            const modelId = newVal;
            if (modelId === -1) {
                // user de-select a model
                this.setState({
                    selectedModel: modelId,
                    searchButtonEnabled: false,
                });
            } else {
                this.setState({
                    selectedModel: modelId,
                    searchButtonEnabled: true,
                });
            }
        }
    }

    render() {
        const { makeList, modelList, selectedMake, selectedModel, searchButtonEnabled } = this.state;
        return <SearchScreen makeList={makeList}
            modelList={modelList}
            selectedMake={selectedMake}
            selectedModel={selectedModel}
            onSelectionChange={this.onSelectionChange}
            searchButtonEnabled={searchButtonEnabled}
            go2CarDetails={this.go2CarDetails} />
    }
}

export default connect()(SearchContainer);