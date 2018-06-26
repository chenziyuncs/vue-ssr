const Router = require('koa-router')

/* eslint-disable */
//指定路径前缀
const apiRouter = new Router({ prefix: '/api' })

//返回前端格式，便于前端判断
const successResponse = (data) => {
  return {
    success: true,
    data
  }
}

apiRouter.get('/todo', async (ctx) => {
  const todos = await ctx.db.getAllTodos()
  ctx.body = successResponse(todos)
})

module.exports = apiRouter
