import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { HeaderFooterLayout } from './HeaderFooterLayout'

describe('NotFound rendering test', () => {
  it('renders without crashing', () => {
    render(<BrowserRouter><HeaderFooterLayout /></BrowserRouter>)

    expect(screen.getByText('Your Headline Here')).toBeInTheDocument()
    expect(screen.getByText(/© 2021 Project. All rights reserved/i)).toBeInTheDocument()
  })
})
