import { createVar, style } from '@vanilla-extract/css'
import { CSSVarFunction } from '@vanilla-extract/private'
import { RecipeVariants, recipe } from '@vanilla-extract/recipes'

import { atoms, rgb, vars } from '../../css'

const boxShadowColorVar = createVar()
const checkboxSize = createVar()
const checkboxLabelSize = createVar()

const size = {
  small: [
    {
      vars: {
        [checkboxSize]: vars.space['8'],
        [checkboxLabelSize]: 'label',
      },
    },
    atoms({
      borderRadius: 'large',
    }),
  ],
  medium: [
    {
      vars: {
        [checkboxSize]: vars.space['10'],
        [checkboxLabelSize]: 'medium',
      },
    },
    atoms({
      borderRadius: 'large',
    }),
  ],
  large: [
    {
      vars: {
        [checkboxSize]: vars.space['12'],
        [checkboxLabelSize]: 'large',
      },
    },
    atoms({
      borderRadius: 'large',
    }),
  ],
}

export type Size = keyof typeof size

const getAccentVars = (colorVar: CSSVarFunction) => ({
  [vars.colors.accent]: rgb(colorVar),
  [vars.colors.accentText]: vars.colors.white,
  [vars.colors.accentSecondary]: rgb(colorVar, vars.mode.shades.accentSecondary),
  [vars.colors.accentSecondaryHover]: rgb(colorVar, vars.mode.shades.accentSecondaryHover),
})

const tone = {
  accent: {},
  blue: style({
    vars: getAccentVars(vars.mode.colors.blue),
  }),
  green: style({
    vars: getAccentVars(vars.mode.colors.green),
  }),
  red: style({
    vars: getAccentVars(vars.mode.colors.red),
  }),
}

export type Tone = keyof typeof tone

export const checkbox = style({
  all: 'unset',
  backgroundColor: vars.colors.background,
  width: vars.space['10'],
  height: vars.space['10'],
  borderRadius: vars.radii.large,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 0 0 1px ${vars.colors.foregroundSecondary}`,

  selectors: {
    '&[data-state="checked"]': {
      backgroundColor: vars.colors.green,
    },
    '&[data-disabled]': {
      backgroundColor: vars.colors.foregroundSecondary,
    },
  },

  ':hover': {
    backgroundColor: vars.colors.background,
  },
  ':focus': {
    boxShadow: `0 0 0 2px ${vars.colors.foregroundSecondary}`,
  },
})

export const indicator = style({
  color: vars.colors.accent,
})

const variant = {
  primary: style([
    atoms({
      backgroundColor: 'background',
    }),
    style({
      vars: {
        [boxShadowColorVar]: 'foregroundSecondary',
      },
      selectors: {
        '&[data-state="checked"]': {
          backgroundColor: vars.colors.accent,
        },
        '&:hover': {
          vars: {
            [boxShadowColorVar]: 'foregroundTertiary',
          },
        },
        '&:active': {
          vars: {
            [boxShadowColorVar]: 'foregroundTertiary',
          },
        },
      },
    }),
  ]),
  transparent: style([
    atoms({
      backgroundColor: 'transparent',
    }),
    style({
      vars: {
        [boxShadowColorVar]: 'transparent',
      },
      selectors: {
        '&[data-state="checked"]': {
          backgroundColor: vars.colors.black,
        },
        '&:hover': {
          vars: {
            [boxShadowColorVar]: 'foregroundTertiary',
          },
        },
        '&:active': {
          vars: {
            [boxShadowColorVar]: 'foregroundTertiary',
          },
        },
      },
    }),
  ]),
}

export const variants = recipe({
  base: style([
    style({
      all: 'unset',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: checkboxSize,
      height: checkboxSize,
      borderRadius: vars.radii.large,
      boxShadow: `${vars.shadows[0.5]} ${vars.colors.foregroundSecondary}`,
      selectors: {
        '&:hover': {
          boxShadow: `${vars.shadows[0.5]} ${vars.colors.foregroundSecondary}`,
        },
        '&:active': {
          boxShadow: `${vars.shadows[0.5]} ${vars.colors.foregroundSecondary}`,
        },
        '&:focus': {
          boxShadow: `${vars.shadows[1]} ${vars.colors.foregroundSecondary}`,
        },
        '&:disabled': {
          backgroundColor: vars.colors.foregroundSecondary,
          color: vars.colors.textTertiary,
          boxShadow: `${vars.shadows[0.5]} ${vars.colors.foregroundSecondary}`,
        },
      },
    }),
  ]),
  variants: {
    disabled: {
      true: atoms({
        cursor: 'not-allowed',
      }),
      false: {},
    },
    size,
    tone,
    variant,
  },
})

export const indicatorVariants = recipe({
  base: style([
    atoms({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }),
  ]),
  variants: {
    tone,
    size,
  },
})

export const labelVariants = recipe({
  base: style([
    style({
      fontSize: checkboxLabelSize,
    }),
  ]),
  variants: {
    size,
  },
})

export type Variants = RecipeVariants<typeof variants>
export type IndicatorVariant = RecipeVariants<typeof indicatorVariants>
export type LabelVariant = RecipeVariants<typeof indicatorVariants>
