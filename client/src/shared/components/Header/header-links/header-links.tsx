import { FC } from 'react'
import { Box, Heading, Link as ChakraLink, Text } from '@chakra-ui/react'
import { headerLinksBoxStyle, textLinksActiveStyle, textLinksStyle } from './header-links.style'
import { Link } from 'react-router-dom'
import IHeaderLinks from '../shared/types/header-links'

export interface HeaderLinksProps {
  linkItems: IHeaderLinks[]
}

const HeaderLinks: FC<HeaderLinksProps> = ({ linkItems }) => {
  return (
    <Box display="flex" {...headerLinksBoxStyle}>
      {linkItems.map(({ to, name }) => {
        const activeLinkStyle = { ...textLinksStyle, ...textLinksActiveStyle }
        return (
          <ChakraLink as={Link as any} key={name} to={to}>
            <Heading key={name} data-testid={name} {...activeLinkStyle}>
              {name}
            </Heading>
          </ChakraLink>
        )
      })}
    </Box>
  )
}

export default HeaderLinks
