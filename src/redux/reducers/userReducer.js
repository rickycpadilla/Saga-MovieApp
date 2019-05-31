// @flow

import * as actionTypes from '../actions/actionTypes'

const initialState = {
    test: true
}

export default (state: {test: boolean} = initialState, action: any = {}) => {
    switch (action.type) {
        case actionTypes.UPDATE_USER_PROFILE:
            // const userState = action.payload
            const userState = {test: true}
            return userState
        default:
            return state
    }
}
