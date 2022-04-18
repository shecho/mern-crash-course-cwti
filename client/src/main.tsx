import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BaseLayout from '@components/BaseLayout'
import HomePage from './pages/home'
import TodoListPage from './pages/todos'
import TodoCreatePage from './pages/todos/create'
import TodoDetailPage from './pages/todos/detail'

ReactDOM.render(
  <BrowserRouter>
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomePage />} />
          <Route path="todos">
            <Route index element={<TodoListPage />} />
            <Route path=":id" element={<TodoDetailPage />} />
            <Route path="create" element={<TodoCreatePage />} />
          </Route>
        </Route>
      </Routes>
    </ChakraProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
