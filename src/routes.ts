const Home = () => import('./pages/Home.vue')
const Connect = () => import('./pages/Connect.vue')

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/connect',
    name: 'Connect',
    component: Connect,
  },
]
