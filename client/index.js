import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import './assets/styles/global.styl'
import createdRouter from './config/router'
import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)
// const root = document.createElement('div')
// document.body.appendChild(root)
const router = createdRouter()
const store = createStore()
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
