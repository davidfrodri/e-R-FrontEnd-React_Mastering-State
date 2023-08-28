import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Main from './Main'

describe('Main Component', () => {
  test('renders section headline and description', () => {
    render(
      <BrowserRouter><Main /></BrowserRouter>)
    const headlineElement = screen.getByRole('heading', { level: 2 })
    const descriptionElement = screen.getByRole('heading', { level: 3 })
    const buttonElement = screen.getByRole('button', { name: 'Read more' })

    expect(headlineElement).toBeInTheDocument()
    expect(descriptionElement).toBeInTheDocument()
    expect(buttonElement).toBeInTheDocument()
  })
})
