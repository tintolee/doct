import * as CONSTANTS from '../constants'

export const loginUser = ({token, userType, user, expiresIn})  => {
  localStorage.setItem('token', token)
  return({
    type: CONSTANTS.LOGIN_USER,
    token,
    userType,
    user,
    expiresIn
  })
}

export const logoutUser = () => {
  localStorage.removeItem('token')
  return({
    type: CONSTANTS.LOGOUT_USER,
    token: null,
    userType: null,
    user: null,
    expiresIn: null
  })
}

export const updateUser = (user) => {
  return({
    type: CONSTANTS.UPDATE_USER,
    user: user
  })
}