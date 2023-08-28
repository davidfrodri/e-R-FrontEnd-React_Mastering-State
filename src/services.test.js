import MockAdapter from 'axios-mock-adapter'
import {
  getEmployeesFromAPI,
  getEmployeeFromAPI,
  postEmailToAPI,
  deleteEmailToAPI
} from './services'

import { clientAxios } from './config/axios'

const mockAxios = new MockAdapter(clientAxios)

describe('API functions', () => {
  afterEach(() => {
    mockAxios.reset()
  })

  test('getEmployeesFromAPI returns data correctly', async () => {
    const mockEmployees = []
    mockAxios.onGet('/community').reply(200, mockEmployees)

    const employees = await getEmployeesFromAPI()
    expect(employees).toEqual(mockEmployees)
  })

  test('getEmployeeFromAPI returns data correctly', async () => {
    const mockEmployee = {}
    const id = '1'
    mockAxios.onGet(`/community/${id}`).reply(200, mockEmployee)

    const response = await getEmployeeFromAPI(id)
    expect(response.data).toEqual(mockEmployee)
  })

  test('postEmailToAPI submits data and returns response correctly', async () => {
    const responseMessage = { message: 'Email enviado' }
    const mockEmailData = { email: 'test@example.com' }
    mockAxios.onPost('/subscribe', mockEmailData).reply(200, responseMessage)

    const response = await postEmailToAPI(mockEmailData)
    expect(response.data).toEqual(responseMessage)
  })

  test('deleteEmailToAPI submits data and returns response correctly', async () => {
    const responseMessage = { message: 'Email eliminado' }
    const email = 'test@example.com'
    mockAxios.onPost('/unsubscribe', { email }).reply(200, responseMessage)

    const response = await deleteEmailToAPI({ email })
    expect(response.data).toEqual(responseMessage)
  })
})
