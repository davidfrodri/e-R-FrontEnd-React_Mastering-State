import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Nav from './Nav'

describe('Nav', () => {
  test('renders correct navigation links', () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    )

    const projectsLink = screen.getByText('Projects')
    const aboutUsLink = screen.getByText('About us')
    const storiesLink = screen.getByText('Stories')
    const contactLink = screen.getByText('Contact')

    expect(projectsLink).toBeInTheDocument()
    expect(aboutUsLink).toBeInTheDocument()
    expect(storiesLink).toBeInTheDocument()
    expect(contactLink).toBeInTheDocument()

    expect(projectsLink.getAttribute('href')).toBe('/')
    expect(aboutUsLink.getAttribute('href')).toBe('/')
    expect(storiesLink.getAttribute('href')).toBe('/community')
    expect(contactLink.getAttribute('href')).toBe('#footer')
  })
})
