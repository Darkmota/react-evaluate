import {
  LOGIN_SUCCEED,
  LOGOUT
} from '../actions'

const initialState = {
  isLogin: false,
  user: {}
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCEED:
      return {
        ...state,
        isLogin: true,
        user: action.user
      }
    case LOGOUT:
      return {
        ...state,
        isLogin: false,
        user: {}
      }
    default:
      return state
  }
}

export default appReducer
