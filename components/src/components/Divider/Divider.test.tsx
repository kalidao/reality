import * as React from 'react'

import { cleanup, render } from '@/test'

import { Divider } from './Divider'

describe('<Divider />', () => {
  afterEach(cleanup)

  it('renders', () => {
    render(<Divider />)
  })
})
