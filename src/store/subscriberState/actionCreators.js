import { SUBSCRIBE_STATE } from './actionTypes'

export const subscribeStateAction = (state) => {
  return {
    type: SUBSCRIBE_STATE,
    payload: state
  }
}
