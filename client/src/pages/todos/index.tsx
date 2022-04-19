import { Button, Heading, Icon, Link as ChakraLink, SimpleGrid, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import CardItem from '@components/card/card-item'
import { queryAllTodos } from '@src/shared/queries/todo/query'
import { FC } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useQuery } from 'react-query'
import { GET_TODOS_LIST } from '../../shared/queries/constans'

const TodoListPage: FC = () => {
  const { data, isLoading } = useQuery([GET_TODOS_LIST], () => queryAllTodos(), {
    keepPreviousData: false,
  })
  console.log(data)

  return (
    <>
      <Stack flexDirection="row-reverse" direction="row" spacing={4} mb="5">
        <ChakraLink as={Link as any} to="create">
          <Button isLoading={isLoading} leftIcon={<Icon as={FaPlus} />} colorScheme="teal" variant="solid">
            New Todo
          </Button>
        </ChakraLink>
      </Stack>

      <Stack direction="row" spacing={2}>
        {isLoading && <Heading>Loading...</Heading>}
        {!isLoading && !data.todos && <Heading> No hay tareas disponibles</Heading>}
        {!isLoading && data && data.todos && (
          <SimpleGrid height="auto" width="7xl" columns={2} spacingX="40px" spacingY="15px">
            {data && data?.todos?.map((item: any) => <CardItem todo={item} key={`${item._id}`} />)}
          </SimpleGrid>
        )}
      </Stack>
    </>
  )
}
export default TodoListPage
