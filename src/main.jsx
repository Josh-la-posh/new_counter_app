import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './root.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TodoList from './todo_list/TodoList.jsx'
import CounterApp from './counter_app/CounterApp.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <TodoList />
      },
      {
        path: '/counter',
        element: <CounterApp />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
