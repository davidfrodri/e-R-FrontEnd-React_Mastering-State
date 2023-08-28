import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Footer from './Footer'
import logo from '../../assets/[PLACEHOLDER LOGO].png'

describe('Footer Component', () => {
  test('renders footer content correctly', () => {
    render(
      <BrowserRouter><Footer /></BrowserRouter>)

    const footerElement = screen.getByRole('contentinfo')
    const logoElement = screen.getByAltText('PLACEHOLDER LOGO')
    const projectNameElement = screen.getByText('Project')
    const addressElement = screen.getByText('123 Street, Anytown, USA 12345')
    const emailElement = screen.getByText('hello@website.com')
    const copyrightElement = screen.getByText('© 2021 Project. All rights reserved')

    expect(footerElement).toBeInTheDocument()
    expect(logoElement).toBeInTheDocument()
    expect(logoElement).toHaveAttribute('src', logo)
    expect(projectNameElement).toBeInTheDocument()
    expect(addressElement).toBeInTheDocument()
    expect(emailElement).toBeInTheDocument()
    expect(emailElement).toHaveAttribute('href', '#s')
    expect(copyrightElement).toBeInTheDocument()
  })
})
