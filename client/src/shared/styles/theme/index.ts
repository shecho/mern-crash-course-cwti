import { ColorModeOptions } from '@chakra-ui/system'
import { extendTheme } from '@chakra-ui/react'

import styles from './styles'
import colors from './colors'
import fontSizes from './font-sizes'
import sizes from './sizes'
import { Button } from './components/button.style'
import { Container } from './components/container.style'
import { Input } from './components/input.style'

export interface ThemeConfig extends ColorModeOptions {}

const config: ThemeConfig = {
  initialColorMode: 'light',
}

export const theme = {
  styles,
  config,
  colors,
  fontSizes,
  sizes,
  components: {
    Button,
    Container,
    Input,
  },
}

export default extendTheme(theme)
