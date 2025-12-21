import { RouteRecordRaw } from 'vue-router'
import Welcome from '@/modules/welcome/views/index.vue'

const MODULE_NAME = 'Welcome'
const MODULE_PATH = '/welcome'

const ROUTES: Array<RouteRecordRaw> = [
  {
    name: MODULE_NAME,
    path: MODULE_PATH,
    component: Welcome,
    meta: {
      title: MODULE_NAME.toLowerCase(),
      middleware: [],
      moduleName: MODULE_NAME,
    },
  },
]

export const WELCOME_ROUTE = { ROUTES, MODULE_NAME, MODULE_PATH }
