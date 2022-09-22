import { cleanup, renderHook } from '@/test'

import { useFieldIds } from './useFieldIds'

const noArgs = {
  content: {
    'aria-describedby': undefined,
    'aria-labelledby': 'realityty1-label',
    id: 'realityty1',
  },
  description: undefined,
  error: undefined,
  label: {
    htmlFor: 'realityty1',
    id: 'realityty1-label',
  },
}

const withId = {
  content: {
    'aria-describedby': undefined,
    'aria-labelledby': 'realityty2-address-label',
    id: 'realityty2-address',
  },
  description: undefined,
  error: undefined,
  label: {
    htmlFor: 'realityty2-address',
    id: 'realityty2-address-label',
  },
}

const withDescription = {
  content: {
    'aria-describedby': 'realityty3-description',
    'aria-labelledby': 'realityty3-label',
    id: 'realityty3',
  },
  description: {
    id: 'realityty3-description',
  },
  error: undefined,
  label: {
    htmlFor: 'realityty3',
    id: 'realityty3-label',
  },
}

const withError = {
  content: {
    'aria-describedby': 'realityty4-error',
    'aria-labelledby': 'realityty4-label',
    id: 'realityty4',
  },
  description: undefined,
  error: {
    id: 'realityty4-error',
  },
  label: {
    htmlFor: 'realityty4',
    id: 'realityty4-label',
  },
}

const withDescriptionAndError = {
  content: {
    'aria-describedby': 'realityty5-descriptiorealitylity5-error',
    'aria-labelledby': 'realityty5-label',
    id: 'realityty5',
  },
  description: {
    id: 'realityty5-description',
  },
  error: {
    id: 'realityty5-error',
  },
  label: {
    htmlFor: 'realityty5',
    id: 'realityty5-label',
  },
}

describe.each`
  args                                  | expected
  ${undefined}                          | ${noArgs}
  ${{ id: 'address' }}                  | ${withId}
  ${{ description: true }}              | ${withDescription}
  ${{ error: true }}                    | ${withError}
  ${{ description: true, error: true }} | ${withDescriptionAndError}
`('useFieldIds($args)', ({ args, expected }) => {
  afterEach(cleanup)

  it(`returns ${JSON.stringify(expected)}`, () => {
    const { result } = renderHook(() => useFieldIds(args))
    expect(result.current).toStrictEqual(expected)
  })
})
