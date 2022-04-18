export const GET_TODOS_LIST = 'query-todo-list'
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
