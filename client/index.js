import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'
import Vuex from 'Vuex'
import './assets/styles/global.styl'
import createdRouter from './config/router'
import createStore from './store/store'

Vue.use(VueRouter)
Vue.use(Vuex)
// const root = document.createElement('div')
// document.body.appendChild(root)
const router = createdRouter()
const store = createStore()
store.registerModule('c', {
  /* eslint-disable */
  //创建模块c
  state: {
    text: 8626078
  }
})
//解绑C模块
// store.unregisterModule('c')
store.watch((state) => state.count + 1, (newCount)=>{
  console.log('new count Watched:' + newCount)
})
//订阅
store.subscribe((mutations, state) => {
  console.log(mutations.type)
  console.log(mutations.payload)
})
store.subscribeAction((action, state) => {
  console.log(action.type)
  console.log(action.payload)
})
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
