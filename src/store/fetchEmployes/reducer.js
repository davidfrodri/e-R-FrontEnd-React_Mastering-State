import { FETCH_EMPLOYEES_REQUEST, FETCH_EMPLOYEES_SUCCESS, FETCH_EMPLOYEES_FAILURE } from './actionTypes'

const initialState = {
  employees: [],
  isLoading: true,
  error: null
}

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
  case FETCH_EMPLOYEES_REQUEST:
    return { ...state, isLoading: true, error: null }
  case FETCH_EMPLOYEES_SUCCESS:
    return { ...state, isLoading: false, employees: action.payload, error: null }
  case FETCH_EMPLOYEES_FAILURE:
    return { ...state, isLoading: false, error: action.payload }
  default:
    return state
  }
}

export default employeesReducer
