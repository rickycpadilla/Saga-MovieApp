// @flow

import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './reducers'

let middleware = []

if (__DEV__) {
   middleware.push(logger)
}

export default function configureStore(initialState: any) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middleware)
    )
}