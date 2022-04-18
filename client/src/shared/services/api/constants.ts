// USERNAME;
export const GET_USER_BY_USERNAME = (userName: string): string => `/users/${userName}`

// TODOS
export const GET_HOME = '/home'
export const GET_ALL_TODOS = '/todos'
export const GET_TODO_BY_ID = (itemId: string): string => `${GET_ALL_TODOS}/${itemId}`

export const GET_TODO_WITH_QUERIES = (queryParams: string): string => `/search_by_date?query=${queryParams}`
