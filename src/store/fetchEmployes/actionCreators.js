import { getEmployeesFromAPI } from '../../services'
import { FETCH_EMPLOYEES_FAILURE, FETCH_EMPLOYEES_REQUEST, FETCH_EMPLOYEES_SUCCESS } from './actionTypes'

const fetchEmployeesRequest = () => ({
  type: FETCH_EMPLOYEES_REQUEST
})

const fetchEmployeesSuccess = (employees) => ({
  type: FETCH_EMPLOYEES_SUCCESS,
  payload: employees
})

const fetchEmployeesFailure = (error) => ({
  type: FETCH_EMPLOYEES_FAILURE,
  payload: error
})

export const fetchEmployees = () => {
  return async (dispatch) => {
    dispatch(fetchEmployeesRequest())

    try {
      const employeesData = await getEmployeesFromAPI()
      dispatch(fetchEmployeesSuccess(employeesData))
    } catch (error) {
      dispatch(fetchEmployeesFailure(error))
    }
  }
}
