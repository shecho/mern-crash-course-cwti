import { AxiosResponse } from 'axios'
import ApiService from '../../services/api/api-service'
import { GET_ALL_TODOS, GET_TODO_WITH_QUERIES } from '../../services/api/constants'

export const queryAllTodos: () => Promise<any> = async (): Promise<any> => {
  const response: AxiosResponse<any> = await ApiService<any>({
    method: 'GET',
    url: GET_ALL_TODOS,
  })

  return response.data
}
export const queryTodoByParams = async (queryParams: string) => {
  const response = await ApiService<Array<any>>({
    method: 'GET',
    url: GET_TODO_WITH_QUERIES(queryParams),
  })

  return response.data
}
