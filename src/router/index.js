import { useRoutes } from 'react-router-dom'
import { lazy } from 'react'

const AuthPage = lazy(() => import('../pages/auth'))
const Home = lazy(() => import('../pages/home'))
const Chess = lazy(() => import('../pages/chess'))
const Rummy = lazy(() => import('../pages/rummy'))

const allRoutes = [
  {
    path: '/',
    element: <AuthPage />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/chess',
    element: <Chess />
  },
  {
    path: '/rummy',
    element: <Rummy />
  }
]

const Router = () => useRoutes([...allRoutes])

export default Router
