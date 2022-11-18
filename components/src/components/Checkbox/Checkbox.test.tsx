import * as React from 'react'

import { cleanup, render, screen } from '@/test'

import { Checkbox } from './Checkbox'

describe('<Checkbox />', () => {
  afterEach(cleanup)

  it('renders with a label', () => {
    render(<Checkbox label="I agree." />)
    expect(screen.getByText('I agree.')).toBeInTheDocument()
    expect(screen.getByTitle('Agree')).toBe('Agree')
  })

  it('renders with disagree checbox', () => {
    render(<Checkbox label="I agree." tone="red" />)
    expect(screen.getByTitle('Disagree')).toBe('Disagree')
  })
})
