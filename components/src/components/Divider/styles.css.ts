import { RecipeVariants, recipe } from '@vanilla-extract/recipes'
import { style } from '@vanilla-extract/css'

import { vars } from '../../css'

export const variants = recipe({
  base: style([
    style({
      backgroundColor: vars.colors.foregroundSecondary,
    }),
  ]),
  variants: {
    orientation: {
      vertical: {
        height: '100%',
        width: '1px',
      },
      horizontal: {
        height: '1px',
        width: '100%',
      },
    },
  },
})

export type Variants = RecipeVariants<typeof variants>
