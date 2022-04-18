import { Heading, SimpleGrid } from '@chakra-ui/react'
import CardItem from '@components/card/card-item'
import { queryAllTodos } from '@src/shared/queries/todo/query'
import { FC } from 'react'
import { useQuery } from 'react-query'
import { GET_TODOS_LIST } from '../../shared/queries/constans'

const TodoListPage: FC = () => {
  const { data, isLoading } = useQuery([GET_TODOS_LIST], () => queryAllTodos(), {
    keepPreviousData: true,
  })
  console.log(data)

  return (
    <>
      {isLoading && <Heading>Loading...</Heading>}
      {!isLoading && data && data.todos && <Heading> {data.message}</Heading>}
      {!isLoading && !data.todos && <Heading> No hay tareas disponibles</Heading>}
      {!isLoading && data && data.todos && (
        <SimpleGrid height="auto" width="7xl" columns={2} spacingX="40px" spacingY="20px">
          {data && data?.todos?.map((item: any) => <CardItem todo={item} key={`${item.id}`} />)}
        </SimpleGrid>
      )}
    </>
  )
}
export default TodoListPage
