// @flow
import * as actionTypes from './constants'

export default (state:any = {}, action: { type: string, payload: any }) => {
    switch (action.type) {
        case actionTypes.SET_SELECTED_MAKE:
            return Object.assign({}, state, {
                selectedMake: action.payload,
                selectedModel: '',
                modelList: undefined
            })


            
        default:
            return state
    }
}