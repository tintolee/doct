import * as CONSTANTS from '../constants'

const initialState = {
  loading: false,
  userType: null,
  user: null,
  token: null,
  expires_in: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.LOGIN_USER:
      return {
        ...state,
        token: action.token,
        userType: action.userType,
        user: action.user,
        expiresIn: action.expiresIn
      }
    case CONSTANTS.LOGOUT_USER:
      return {
        ...state,
        token: action.token,
        userType: action.userType,
        user: action.user,
        expiresIn: action.expiresIn
      }
    case CONSTANTS.UPDATE_USER:
      let oldUser = state.user 
      return {
        ...state,
        user: {
          ...oldUser,
          ...action.user,
        }
      }
    default:
      return state
  }
}