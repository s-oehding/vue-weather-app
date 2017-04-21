
/**
 * Pages
 */
import IndexPage from './pages/IndexPage'
import MapPage from './pages/MapPage'
import Error404 from './pages/Error'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: IndexPage
  },
  {
    path: '/map',
    name: 'Map',
    component: MapPage
  }
]

const error = [
  {
    path: '*',
    name: 'error',
    component: Error404
  }
]

export default [].concat(routes, error)
