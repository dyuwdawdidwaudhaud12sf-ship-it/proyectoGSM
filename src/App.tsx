import Login from './pages/Login'
import Home from './pages/Home'
import Reports from './pages/Reports'
import Error from './pages/Error'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: 'Home',
        element: <Home/>
      },
      {
        path: 'reports',
        element: <Reports />
      }
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
