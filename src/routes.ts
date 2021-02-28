const Jobs = () => import('./pages/Jobs.vue')
const Parts = () => import('./pages/Parts.vue')
const Feeders = () => import('./pages/Feeders.vue')
const MachineSetup = () => import('./pages/MachineSetup.vue')

export const routes = [
  {
    path: '/',
    name: 'Jobs',
    component: Jobs,
  },
  {
    path: '/parts',
    name: 'Parts',
    component: Parts,
  },
  {
    path: '/feeders',
    name: 'Feeders',
    component: Feeders,
  },
  {
    path: '/machine-setup',
    name: 'MachineSetup',
    component: MachineSetup,
  },
]
