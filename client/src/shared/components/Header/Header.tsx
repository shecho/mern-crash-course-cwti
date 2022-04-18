import React, { FC } from 'react'
import { Flex, Box, Image } from '@chakra-ui/react'
import { headerBoxContainerStyle, headerFlexContainerStyle, logoImgStyle } from './header.style'
import HeaderLinks from './header-links/header-links'
import { HEADER_LINKS } from './shared/constans/constans'

export interface HeaderProps {
  logo?: string
}
const Header: FC<HeaderProps> = ({ logo }) => {
  return (
    <Flex {...headerFlexContainerStyle}>
      <Box {...headerBoxContainerStyle}>
        <HeaderLinks linkItems={HEADER_LINKS} />
      </Box>
    </Flex>
  )
}

export default Header
