import * as React from 'react'
import * as RadixCheckbox from '@radix-ui/react-checkbox'

import { IconCheck, IconClose } from '../icons/'
import { Box } from '../Box'
import * as styles from './styles.css'

type BaseProps = {
  label: string
  size?: styles.Size
  variant?: 'primary' | 'transparent'
}

type RadixCheckboxRoot = RadixCheckbox.CheckboxProps
type RadixCheckboxIndicator = RadixCheckbox.CheckboxIndicatorProps

type WithTone = {
  tone?: styles.Tone
  variant?: 'primary'
}

type WithoutTone = {
  tone?: never
  variant?: 'transparent'
}

type Props = BaseProps & (WithTone | WithoutTone) & RadixCheckboxRoot & RadixCheckboxIndicator

export const Checkbox = React.forwardRef(
  (
    {
      label,
      checked,
      defaultChecked,
      onCheckedChange,
      required,
      disabled,
      name,
      value,
      asChild,
      size = 'small',
      tone = 'accent',
      variant = 'primary',
    }: Props,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    return (
      <Box alignItems="center" display="flex" gap="2" ref={ref}>
        <RadixCheckbox.Root
          asChild={asChild}
          checked={checked}
          className={styles.variants({
            size,
            tone,
            variant,
          })}
          defaultChecked={defaultChecked}
          disabled={disabled}
          name={name}
          ref={ref}
          required={required}
          value={value}
          onCheckedChange={onCheckedChange}
        >
          <RadixCheckbox.Indicator
            className={styles.indicatorVariants({
              size,
              tone,
            })}
          >
            {tone === 'red' ? <IconClose /> : <IconCheck />}
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        <Box
          className={styles.labelVariants({
            size,
          })}
          color="foreground"
        >
          {label}
        </Box>
      </Box>
    )
  },
)

Checkbox.displayName = 'Checkbox'
