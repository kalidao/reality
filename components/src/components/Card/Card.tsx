import * as React from 'react'

import { Box, BoxProps } from '../Box'
import { useTheme } from '../ThemeProvider'
import * as styles from './styles.css'

type Props = {
  as?: BoxProps['as']
  shadow?: boolean
  hover?: boolean
  borderRadius?: BoxProps['borderRadius']
  padding?: BoxProps['padding']
  width?: BoxProps['width']
  backgroundColor?: BoxProps['backgroundColor']
  color?: BoxProps['color']
}

export const Card = ({
  as = 'div',
  children,
  padding,
  shadow,
  hover,
  borderRadius = { xs: '2xLarge', sm: '3xLarge' },
  width,
  backgroundColor = 'background',
  color = 'foreground',
}: React.PropsWithChildren<Props>) => {
  const { mode, forcedMode } = useTheme()
  return (
    <Box
      as={as}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      className={styles.variants({
        dark: (forcedMode ?? mode) === 'dark',
        shadow,
        hover,
      })}
      color={color}
      padding={padding}
      width={width}
    >
      {children}
    </Box>
  )
}
