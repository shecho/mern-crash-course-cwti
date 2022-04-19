import ApiService from '@services/api/api-service'
import { GET_ALL_TODOS, GET_TODO_BY_ID } from '@services/api/constants'

export const createTodo = (data: any) => async () => {
  const response = await ApiService({ method: 'POST', url: GET_ALL_TODOS, data })

  return response
}

export const updateTodo = (todoId: string) => (data: any) => {
  return ApiService({ method: 'PUT', url: GET_TODO_BY_ID(todoId), data })
}

export const deleteTodo = (todoId: string) => () => {
  return ApiService({ method: 'DELETE', url: GET_TODO_BY_ID(todoId) })
}
