import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Headline from './Headline'

import logo from '../../assets/[PLACEHOLDER LOGO].png'

describe('Headline Component', () => {
  test('renders headline content correctly', () => {
    render(
      <BrowserRouter>
        <Headline />
      </BrowserRouter>
    )

    const headlineElement = screen.getByRole('banner')
    const projectBrandElement = screen.getByRole('link', { name: 'Project' })
    const logoElement = screen.getByAltText('PLACEHOLDER LOGO')
    const h1Element = screen.getByRole('heading', { level: 1 })
    const h2Element = screen.getByRole('heading', { level: 2 })

    expect(headlineElement).toBeInTheDocument()
    expect(projectBrandElement).toBeInTheDocument()
    expect(logoElement).toBeInTheDocument()
    expect(logoElement).toHaveAttribute('src', logo)
    expect(h1Element).toBeInTheDocument()
    expect(h2Element).toBeInTheDocument()
  })
})
