export const LOGIN_SUCCEED = 'LOGIN_SUCCEED'
export const LOGOUT = 'LOGOUT'
export const UPDATE_AVATAR = 'UPDATE_AVATAR'

export const saveUser = user => ({
    type: LOGIN_SUCCEED,
    user
  })

export const updateAvatar = user => ({
    type: UPDATE_AVATAR,
    user
  })
