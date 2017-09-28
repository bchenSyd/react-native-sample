//@flow
import { combineReducers } from 'redux'
import { HomeReducer } from '../home'
import { SearchReducer } from '../search'

export default combineReducers({
    home: HomeReducer,
    search: SearchReducer
})