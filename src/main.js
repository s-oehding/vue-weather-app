import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import App from './App'

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.http.options.xhr = {withCredentials: true}

const routes = [
  { path: '/', component: App }
]

const router = new VueRouter({
  routes // short for routes: routes
})

/* eslint-disable no-new */
new Vue({
  router
}).$mount('#app')
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
