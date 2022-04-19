import { FC } from 'react'
import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import { FaPen, FaTrash } from 'react-icons/fa'
import { cardContainerStyles, cardIconsStyles, flexCardContainer, flexSectionBaseStyles } from './cards.styles'
import { useMutation, useQueryClient } from 'react-query'
import { deleteTodo } from '@src/shared/queries/todo/mutation'
import { GET_TODOS_LIST } from '@src/shared/queries/constans'

export interface ICard {
  todo: Todo
  handleClick?: (e: any) => void
}

export interface Todo {
  cliente?: string
  createdAt?: Date
  observaciones?: string
  prioridad?: string
  stado?: string
  tarea?: string
  tiempo?: number
  updatedAt?: Date
  _id: string
}
const CardItem: FC<ICard> = ({ todo }) => {
  const { cliente, tarea, observaciones, _id: id } = todo
  const queryClient = useQueryClient()
  const { mutateAsync, isLoading } = useMutation(deleteTodo(id), {
    onSuccess: () => {
      queryClient.invalidateQueries(GET_TODOS_LIST)
    },
  })

  const handleDelete = async () => {
    try {
      await mutateAsync()
    } catch (error) {
      console.warn(error)
    }
  }
  return (
    <>
      <Box {...cardContainerStyles}>
        <Flex {...flexCardContainer}>
          <Flex {...flexSectionBaseStyles} direction="column" w="80%">
            <Text fontWeight="bold"> Tarea:</Text>
            <Text> {tarea && tarea}</Text>
          </Flex>
          <Flex {...flexSectionBaseStyles} direction="column" w="80%">
            <Text fontWeight="bold"> cliente</Text>
            <Text> {cliente && cliente}</Text>
          </Flex>
          <Flex {...flexSectionBaseStyles} direction="column" w="80%">
            <Text fontWeight="bold"> Onservaciones:</Text>
            <Text> {observaciones && observaciones}</Text>
          </Flex>

          <Flex {...flexSectionBaseStyles} justify="space-evenly" w="20%" direction="column" bg="gray.100" rounded="lg">
            {id && FaPen && FaTrash ? (
              <>
                <Icon as={FaPen} {...cardIconsStyles} />

                <Icon onClick={handleDelete} as={FaTrash} {...cardIconsStyles} />
              </>
            ) : (
              ''
            )}
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
export default CardItem
