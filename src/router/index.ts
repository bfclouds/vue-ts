import { createRouter, createWebHashHistory, 
  RouteRecordRaw } from 'vue-router'
import { h, resolveComponent } from 'vue'
import routes from './routes'

export const RouteView = {
  render: () => h(resolveComponent('router-view')),
};

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router