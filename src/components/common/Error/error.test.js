import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Error from './Error'

describe('error rendering test', () => {
  it('renders without crashing', () => {
    render(<Error />)
    expect(screen.getByText('There exist an error ...')).toBeInTheDocument()
  })
})
