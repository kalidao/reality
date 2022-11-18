import * as React from 'react'

import { cleanup, render } from '@/test'

import { Checkbox } from './Checkbox'

describe('<Checkbox />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<Checkbox label="I agree." />)
  })
})
