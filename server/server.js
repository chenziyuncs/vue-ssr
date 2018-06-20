const Koa = require('koa')
const send = require('koa-send')
const path = require('path')
/* eslint-disable */
// const pageRouter = require('./routers/dev-ssr')
const staticRouter = require('./routers/static')
const app = new Koa()

const isDev = process.env.NODE_ENV === 'development'

app.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') {
    //发送
    await send(ctx, '/favicon.ico', { root: path.join(__dirname, '../favicon.ico') })
  } else {
    await next()
  }
})

app.use(async (ctx, next) => {
  try {
    /* eslint-disable */
    //请求的路径${ctx.path}
    console.log(`request with path ${ctx.path}`)
    await next()
  } catch (err) {
    console.log(err)
    ctx.status = 500
    if (isDev) {
      ctx.body = err.message
    } else {
      ctx.bosy = 'please try again later'
    }
  }
})

app.use(staticRouter.routes()).use(staticRouter.allowedMethods())

let pageRouter
if(isDev) {
  pageRouter = require('./routers/dev-ssr.js')
} else {
  pageRouter = require('./routers/ssr.js')
}
app.use(pageRouter.routes()).use(pageRouter.allowedMethods())

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3333

app.listen(PORT, HOST, () => {
  console.log(`server is listening on ${HOST}:${PORT}`)
})
