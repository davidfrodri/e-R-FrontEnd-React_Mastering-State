import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducers } from '../../store/store'

import UserCommunity from './UserCommunity'
import { getEmployeeFromAPI } from '../../services'
import { BrowserRouter } from 'react-router-dom'

jest.mock('../../services', () => ({
  getEmployeeFromAPI: jest.fn()
}))

describe('UserCommunity test', () => {
  const mockEmployee = {
    id: '2f1b6bf3-f23c-47e4-88f2-e4ce89409376',
    avatar: 'http://localhost:4000/avatars/avatar1.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo…',
    firstName: 'Mary',
    lastName: 'Smith',
    position: 'Lead Designer at Company Name'
  }

  test('renders loading when isLoading is true', () => {
    getEmployeeFromAPI.mockReturnValue(new Promise(() => {}))
    render(
      <BrowserRouter>
        <UserCommunity />
      </BrowserRouter>
    )

    const loadingElement = screen.getByText(/loading/i)
    expect(loadingElement).toBeInTheDocument()
  })

  test('renders error when error occurs', async () => {
    const error = new Error('Network error')
    error.response = { data: 'User not found' }
    getEmployeeFromAPI.mockRejectedValue(error)

    render(
      <BrowserRouter>
        <UserCommunity />
      </BrowserRouter>
    )

    const errorElement = await screen.findByText(error.message)
    expect(errorElement).toBeInTheDocument()
  })

  test('renders employee when data is successfully fetched', async () => {
    getEmployeeFromAPI.mockResolvedValue({ data: mockEmployee })

    const store = createStore(reducers)

    render(
      <Provider store={store}>
        <BrowserRouter>
          <UserCommunity />
        </BrowserRouter>
      </Provider>
    )

    const firstNameElement = await screen.findByText(new RegExp(mockEmployee.firstName, 'i'))
    const lastNameElement = await screen.findByText(new RegExp(mockEmployee.lastName, 'i'))
    const positionElement = await screen.findByText(mockEmployee.position)

    expect(firstNameElement).toBeInTheDocument()
    expect(lastNameElement).toBeInTheDocument()
    expect(positionElement).toBeInTheDocument()
  })
})
