import Vue from 'vue'
import Router from 'vue-router'
import routesConfig from './route';

Vue.use(Router)
const routes = routesConfig;
export default new Router({
  routes,
})
