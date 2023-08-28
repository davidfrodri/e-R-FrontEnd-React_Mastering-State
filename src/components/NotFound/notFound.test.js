import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import NotFound from './NotFound'

describe('NotFound rendering test', () => {
  it('renders without crashing', () => {
    render(<BrowserRouter><NotFound /></BrowserRouter>)

    expect(screen.getByText('Page Not Found')).toBeInTheDocument()
    expect(screen.getByText(/Back to our site/i)).toBeInTheDocument()
  })
})
