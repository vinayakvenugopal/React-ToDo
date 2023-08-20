import React from 'react'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

import { Toaster } from 'react-hot-toast'


const App = () => {
  return (
    <div>
    <Toaster position="bottom-center" />
    <AddTodo />
    <TodoList />
  </div>
  )
}

export default App
