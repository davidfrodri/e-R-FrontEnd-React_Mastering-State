import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { subscribeStateAction } from '../../store/subscriberState/actionCreators'
import { deleteEmailToAPI, postEmailToAPI } from '../../services'
import { reducers } from '../../store/store'
import JoinOurProgram from './JoinOurProgram'

jest.mock('../../services', () => ({
  postEmailToAPI: jest.fn(),
  deleteEmailToAPI: jest.fn()
}))

describe('JoinOurProgram Component', () => {
  test('renders JoinOurProgram content correctly', () => {
    const initialState = {
      suscriber: {
        subscribeState: false
      }
    }

    const store = createStore(reducers, initialState)
    render(
      <Provider store={store}>
        <JoinOurProgram />
      </Provider>)

    const titleElement = screen.getByText('Join Our Program')
    const textElement = screen.getByText(
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    )
    const emailInput = screen.getByPlaceholderText('Email')
    const subscribeButton = screen.getByText('Subscribe')

    expect(titleElement).toBeInTheDocument()
    expect(textElement).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(subscribeButton).toBeInTheDocument()
  })

  test('subscribes works correctly', async () => {
    const initialState = {
      subscribeState: false
    }

    const store = createStore(reducers, initialState)
    postEmailToAPI.mockResolvedValue({ status: 200 })

    render(
      <Provider store={store}>
        <JoinOurProgram />
      </Provider>
    )

    const emailInput = screen.getByPlaceholderText('Email')
    const subscribeButton = screen.getByText('Subscribe')

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.click(subscribeButton)

    await screen.findByText('Your email has been created')
  })

  test('unsubscribes correctly', async () => {
    const initialState = {
      subscribeState: false
    }

    const store = createStore(reducers, initialState)
    deleteEmailToAPI.mockResolvedValue({ status: 200 })

    store.dispatch(subscribeStateAction(true))
    render(
      <Provider store={store}>
        <JoinOurProgram />
      </Provider>
    )

    const emailInput = screen.getByPlaceholderText('Email')
    const unsubscribeButton = screen.getByText('Unsubscribe')

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.click(unsubscribeButton)

    await screen.findByText('Your email has been deleted')
  })
})
