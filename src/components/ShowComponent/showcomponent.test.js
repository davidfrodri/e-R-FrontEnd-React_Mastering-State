import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Provider } from 'react-redux'

import { createStore } from 'redux'
import { reducers } from '../../store/store'
import ShowComponent from './ShowComponent'

const customInitialState = {
  sectionVisibility: {
    sections: {
      header: true,
      main: true,
      testSection: true,
      bigCommunity: true,
      stories: true,
      joinOurProgram: true
    }
  }
}

describe('ShowComponent test', () => {
  test('renders title and button correctly', () => {
    const store = createStore(reducers, customInitialState)

    render(
      <Provider store={store}>
        <ShowComponent titleSection="Test Section" sectionName="testSection">
          <p>Test content</p>
        </ShowComponent>
      </Provider>
    )

    const titleElement = screen.getByText('Test Section')
    const buttonTextElement = screen.getByText('Hide Section')

    expect(titleElement).toBeInTheDocument()
    expect(buttonTextElement).toBeInTheDocument()
  })

  test('toggles content visibility on button click', () => {
    const store = createStore(reducers, customInitialState)

    render(
      <Provider store={store}>
        <ShowComponent titleSection="Test Section" sectionName="testSection">
          <p>Test content</p>
        </ShowComponent>
      </Provider>
    )

    const buttonElement = screen.getByRole('button')
    const contentElement = screen.getByText('Test content')

    expect(contentElement).toBeInTheDocument()

    fireEvent.click(buttonElement)

    expect(contentElement).not.toBeInTheDocument()

    fireEvent.click(buttonElement)
  })
})
