export const GET_HOME_KEY = 'query-home'
export const GET_TODOS_LIST = 'query-todo-list'
export const CREATE_TODO = 'query-create-todo'
export const defaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    keepPreviousData: true,
    staleTime: 1000 * 20,
    optimisticResults: true,
  },
}
