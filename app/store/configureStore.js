// @flow
import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './combinedReducer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';


const middlewares = [thunk];
// only enable logger middleware in dev
if (process.env.NODE_ENV === 'development') {
    const loggerMiddleware = createLogger();
    middlewares.push(loggerMiddleware);
}
const createStoreWithMiddleware = compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default function configureStore(initState = {}) {
    return createStoreWithMiddleware(rootReducer, initState);
}