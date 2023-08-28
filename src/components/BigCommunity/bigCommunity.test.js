import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { Provider } from 'react-redux'
import { reducers } from '../../store/store'
import BigCommunity from './BigCommunity'
import { fetchEmployees } from '../../store/fetchEmployes/actionCreators'

jest.mock('../../store/fetchEmployes/actionCreators', () => ({
  fetchEmployees: jest.fn()
}))

describe('BigCommunity test', () => {
  const mockEmployees = [
    {
      id: '2f1b6bf3-f23c-47e4-88f2-e4ce89409376',
      avatar: 'http://localhost:4000/avatars/avatar1.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo…',
      firstName: 'Mary',
      lastName: 'Smith',
      position: 'Lead Designer at Company Name'
    },
    {
      id: '1157fea1-8b72-4a9e-b253-c65fa1556e26',
      avatar: 'http://localhost:4000/avatars/avatar2.png',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
      firstName: 'Bill',
      lastName: 'Filler',
      position: 'Lead Engineer at Company Name'
    },
    {
      id: 'b96ac290-543c-4403-80fe-0c2d44e84ea9',
      avatar: 'http://localhost:4000/avatars/avatar3.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo…',
      firstName: 'Tim',
      lastName: 'Gates',
      position: 'CEO at Company Name'
    }
  ]

  beforeEach(() => {
    fetchEmployees.mockReturnValue(() => Promise.resolve(mockEmployees))
  })

  afterEach(() => {
    fetchEmployees.mockClear()
  })

  test('renders loading when isLoading is true', () => {
    const initialState = {
      employees: {
        employees: [],
        isLoading: true,
        error: null
      }
    }

    const store = createStore(reducers, initialState, applyMiddleware(thunk))

    render(
      <Provider store={store}>
        <BigCommunity />
      </Provider>
    )

    const loadingElement = screen.getByText('Loading...')
    expect(loadingElement).toBeInTheDocument()
  })

  test('fetches employees data and renders carousel', async () => {
    const initialState = {
      employees: {
        employees: mockEmployees,
        isLoading: false,
        error: null
      }
    }

    const store = createStore(reducers, initialState, applyMiddleware(thunk))

    render(
      <Provider store={store}>
        <BigCommunity />
      </Provider>
    )

    const titleElement = screen.getByText('Big community of People Like You')
    const buttonHideElement = screen.getByText('Hide Section')

    const userCarouselElement = screen.getByText('Mary Smith')
    const userCarouselElement2 = screen.getByText('Bill Filler')
    const userCarouselElement3 = screen.getByText('Tim Gates')

    const imgElement = screen.getByAltText('profile of Mary')
    const imgElement2 = screen.getByAltText('profile of Bill')
    const imgElement3 = screen.getByAltText('profile of Tim')

    expect(titleElement).toBeInTheDocument()
    expect(buttonHideElement).toBeInTheDocument()

    expect(userCarouselElement).toBeInTheDocument()
    expect(userCarouselElement2).toBeInTheDocument()
    expect(userCarouselElement3).toBeInTheDocument()

    expect(imgElement).toBeInTheDocument()
    expect(imgElement2).toBeInTheDocument()
    expect(imgElement3).toBeInTheDocument()
  })
})
