import * as React from 'react'
import * as Separator from '@radix-ui/react-separator'

import { Stack } from '../Stack'
import { Text } from '../Text'
import * as styles from './styles.css'

type Props = {
  label?: string
  orientation?: 'horizontal' | 'vertical'
}

export const Divider = ({ label, orientation = 'horizontal' }: Props) => {
  if (!label)
    return (
      <Separator.Root
        className={styles.variants({
          orientation,
        })}
        orientation={orientation}
      />
    )

  return (
    <Stack align="center" direction={orientation}>
      <Separator.Root
        className={styles.variants({
          orientation,
        })}
        orientation={orientation}
      />
      <Text>{label}</Text>
      <Separator.Root className={styles.variants()} orientation={orientation} />
    </Stack>
  )
}

Divider.displayName = 'Divider'
