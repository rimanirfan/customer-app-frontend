import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import Customers from './components/Customers'
import About from './components/About'
import Add from './components/Add'
import CustomerDetails from './components/CustomerDetail'
import EditCustomer from './components/Edit'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '/', component: Customers},
    {path: '/about', component: About},
    {path: '/add', component: Add},
    {path: '/customer/:id', component: CustomerDetails},
    {path: '/edit/:id', component: EditCustomer}
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
