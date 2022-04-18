import { Container } from '@chakra-ui/react'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import { baseLayoutContainerStyles } from './base-layout.styles'

const BaseLayout: FC = () => {
  return (
    <>
      <Header />
      <Container {...baseLayoutContainerStyles}>
        <Outlet />
      </Container>
    </>
  )
}

export default BaseLayout
