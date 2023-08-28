import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { reducers } from './store/store'
import App from './App'

const store = createStore(reducers)

function renderWithRoute (route) {
  return render(
    <Provider store={store}>
      <Router initialEntries={[route]}>
        <App />
      </Router>
    </Provider>
  )
}

describe('App component', () => {
  test('debe renderizar MainPage en la ruta raíz', () => {
    renderWithRoute('/')
    expect(screen.getByText(/This is the Section Headline, Continues to Two Lines/i)).toBeInTheDocument()
  })
})
