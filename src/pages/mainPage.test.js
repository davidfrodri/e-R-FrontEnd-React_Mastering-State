import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { reducers } from '../store/store'
import MainPage from './MainPage'

describe('<MainPage />', () => {
  test('renders Main, Stories and JoinOurProgram components', () => {
    const initialState = {
      suscriber: {
        subscribeState: false
      }
    }

    const store = createStore(reducers, initialState)

    render(
      <Provider store={store}>
        <MainPage />
      </Provider>)

    const mainComponent = screen.getByText('This is the Section Headline, Continues to Two Lines')
    const storiesComponent = screen.getByText('Learn more about our culture...')
    const joinProgramComponent = screen.getByText('Join Our Program')

    expect(mainComponent).toBeInTheDocument()
    expect(storiesComponent).toBeInTheDocument()
    expect(joinProgramComponent).toBeInTheDocument()
  })
})
