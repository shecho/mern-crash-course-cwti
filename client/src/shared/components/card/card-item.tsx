import { FC } from 'react'
import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import { FaPen, FaTrash } from 'react-icons/fa'
import { cardContainerStyles, cardIconsStyles, flexCardContainer, flexSectionBaseStyles } from './cards.styles'

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
  _id?: string
}
const CardItem: FC<ICard> = ({ todo, handleClick }) => {
  const { cliente, tarea, observaciones, _id } = todo

  return (
    <>
      <Box {...cardContainerStyles}>
        <Flex {...flexCardContainer}>
          <Flex {...flexSectionBaseStyles} direction="column" w="80%">
            <Text> Tarea: {tarea && tarea}</Text>
          </Flex>
          <Flex {...flexSectionBaseStyles} direction="column" w="80%">
            <Text> cliente: {cliente && cliente}</Text>
          </Flex>
          <Flex {...flexSectionBaseStyles} direction="column" w="80%">
            <Text> Onservaciones: {observaciones && observaciones}</Text>
          </Flex>

          <Flex {...flexSectionBaseStyles} justify="space-evenly" w="20%" direction="column" bg="gray.100" rounded="lg">
            {_id && FaPen && FaTrash ? (
              <>
                <Icon as={FaPen} {...cardIconsStyles} />

                <Icon as={FaTrash} {...cardIconsStyles} />
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

function handleAddFavorite(todo: Todo): void {
  throw new Error('Function not implemented.')
}
