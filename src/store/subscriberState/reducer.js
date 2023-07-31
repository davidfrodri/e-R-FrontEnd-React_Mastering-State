import { SUBSCRIBE_STATE } from './actionTypes'

const initialState = {
  subscribeState: false
}

export default function subscribeReducer (state = initialState, action) {
  switch (action.type) {
  case SUBSCRIBE_STATE:
    return {
      ...state,
      subscribeState: action.payload
    }
  default:
    return state
  }
}
