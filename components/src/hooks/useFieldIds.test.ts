import { cleanup, renderHook } from '@/test'

import { useFieldIds } from './useFieldIds'

const noArgs = {
  content: {
    'aria-describedby': undefined,
    'aria-labelledby': 'reality1-label',
    id: 'reality1',
  },
  description: undefined,
  error: undefined,
  label: {
    htmlFor: 'reality1',
    id: 'reality1-label',
  },
}

const withId = {
  content: {
    'aria-describedby': undefined,
    'aria-labelledby': 'reality2-address-label',
    id: 'reality2-address',
  },
  description: undefined,
  error: undefined,
  label: {
    htmlFor: 'reality2-address',
    id: 'reality2-address-label',
  },
}

const withDescription = {
  content: {
    'aria-describedby': 'reality3-description',
    'aria-labelledby': 'reality3-label',
    id: 'reality3',
  },
  description: {
    id: 'reality3-description',
  },
  error: undefined,
  label: {
    htmlFor: 'reality3',
    id: 'reality3-label',
  },
}

const withError = {
  content: {
    'aria-describedby': 'reality4-error',
    'aria-labelledby': 'reality4-label',
    id: 'reality4',
  },
  description: undefined,
  error: {
    id: 'reality4-error',
  },
  label: {
    htmlFor: 'reality4',
    id: 'reality4-label',
  },
}

const withDescriptionAndError = {
  content: {
    'aria-describedby': 'reality5-description reality5-error',
    'aria-labelledby': 'reality5-label',
    id: 'reality5',
  },
  description: {
    id: 'reality5-description',
  },
  error: {
    id: 'reality5-error',
  },
  label: {
    htmlFor: 'reality5',
    id: 'reality5-label',
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
