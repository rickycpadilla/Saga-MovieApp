// @flow

import * as actionTypes from './actionTypes'

// export function updateUserProfile(user: UserProfileType) {
//     localStorage.storeUser(user)
//     return {
//         type: actionTypes.UPDATE_USER_PROFILE,
//         payload: user
//     }
// }

export function updateUserProfile() {
  return {
    type: actionTypes.UPDATE_USER_PROFILE,
    payload: 'hello'
  }
}
