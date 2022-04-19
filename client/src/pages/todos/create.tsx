import { Button, Container, FormControl, FormLabel, Icon, Input, Link as ChakraLink } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import { FC, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useMutation } from 'react-query'
import { createTodo } from '@src/shared/queries/todo/mutation'

interface Todo {
  cliente?: string
  observaciones?: string
  prioridad?: string
  stado?: string
  tarea?: string
  tiempo?: number
  updatedAt?: Date
  _id?: string
}

const TodoCreatePage: FC = () => {
  const [newTodo, setNewTodo] = useState<Partial<Todo>>({} as Todo)
  let navigate = useNavigate()

  const handleInputChange = (e: any) => {
    setNewTodo((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
  }
  const { mutateAsync, isLoading } = useMutation(createTodo(newTodo))

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    try {
      await mutateAsync()
      e.target.reset()
      navigate('/todos')
    } catch (error) {
      console.warn(error)
    }
  }
  return (
    <Container>
      <FormControl isRequired as="form" onSubmit={handleSubmit}>
        <FormLabel htmlFor="cliente">Cliente</FormLabel>
        <Input id="cliente" name="cliente" type="text" mb="3" onChange={handleInputChange} />

        <FormLabel htmlFor="prioridad">Prioridad</FormLabel>
        <Input id="prioridad" name="prioridad" type="text" mb="3" onChange={handleInputChange} />

        <FormLabel htmlFor="estado">Estado</FormLabel>
        <Input id="estado" name="estado" type="text" mb="3" onChange={handleInputChange} />

        <FormLabel htmlFor="tarea">Tarea</FormLabel>
        <Input id="tarea" name="tarea" type="text" mb="3" onChange={handleInputChange} />

        <FormLabel htmlFor="tiempo">Tiempo en horas</FormLabel>
        <Input id="tiempo" name="tiempo" type="number" mb="3" onChange={handleInputChange} />

        <FormLabel htmlFor="observaciones">Observaciones</FormLabel>
        <Input id="observaciones" name="observaciones" type="text" mb="3" onChange={handleInputChange} />

        <ChakraLink as={Link as any} to="/todos">
          <Button leftIcon={<Icon as={FaTimes} />} loadingText="Enviando" colorScheme="red" variant="outline">
            Cancelar
          </Button>
        </ChakraLink>

        <Button type="submit" m="2" isLoading={isLoading} loadingText="Enviando" colorScheme="teal" variant="outline">
          Enviar
        </Button>
      </FormControl>
    </Container>
  )
}
export default TodoCreatePage
