export const Button = {
  sizes: {
    md: {
      fontSize: 'textBody.lg',
      textAlign: 'center',
      paddingLeft: 4,
      paddingRight: 4,
      height: 22,
      minWidth: 92,
      borderRadius: 20,
    },
    lg: {
      fontSize: 'textBody.lg',
      textAlign: 'center',
      paddingLeft: 4,
      paddingRight: 4,
      height: 22,
      minWidth: 86,
      borderRadius: 20,
    },
    xg: {
      fontSize: 'subtitle.lg',
      textAlign: 'center',
      paddingLeft: 4,
      paddingRight: 4,
      height: 39,
      minWidth: 184,
      borderRadius: 5,
    },
  },
  variants: {
    outline: {
      color: '',
      borderColor: '',
    },
    solid: {
      bg: 'blue.100',
      color: 'globals.white',
      _hover: {
        bgColor: 'blue.200',
      },
    },
    ghost: {
      color: 'gray.400',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
}
