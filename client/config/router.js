import Router from 'vue-router'

import routes from './routes'

// const router = new Router({
//   routers
// })

export default () => {
  return new Router({
    routes,
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
      /* eslint-disable */
      //记录路由跳转时，是否记录滚动条的位置
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    fallback: true
  })
}
