import { Heading } from '@chakra-ui/react'
import { queryHome } from '@src/shared/queries/todo/query'
import { FC } from 'react'
import { useQuery } from 'react-query'
import { GET_HOME_KEY } from '../../shared/queries/constans'

const HomePage: FC = () => {
  const { data, isLoading } = useQuery([GET_HOME_KEY], () => queryHome(), {
    keepPreviousData: true,
  })
  return (
    <>
      {isLoading && <Heading>Home Page Loading...</Heading>}
      <div> {data ? <Heading> {data.message}</Heading> : ''}</div>
    </>
  )
}

export default HomePage
