import BaseLayout from '@components/BaseLayout'
import HomePage from '@pages/home'
import TodoListPage from '@pages/todos'
import TodoCreatePage from '@pages/todos/create'
import TodoDetailPage from '@pages/todos/detail'
import { Route, Routes } from 'react-router-dom'

function AppRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="todos">
            <Route index element={<TodoListPage />} />
            <Route path=":id" element={<TodoDetailPage />} />
            <Route path="create" element={<TodoCreatePage />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>oops! pagina no encontrada</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </>
  )
}

export default AppRouter
