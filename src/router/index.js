import { useRoutes } from 'react-router-dom'
import { lazy } from 'react'

const AuthPage = lazy(() => import('../pages/auth'))
const Home = lazy(() => import('../pages/home'))
const Chess = lazy(() => import('../pages/chess'))
const RummyRooms = lazy(() => import('../pages/rummy/rooms'))
const RummyPlayingRoom = lazy(() => import('../pages/rummy/playingRoom'))

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
    element: <RummyRooms />
  },
  {
    path: '/rummy/room',
    element: <RummyPlayingRoom />
  }
]

const Router = () => useRoutes([...allRoutes])

export default Router
