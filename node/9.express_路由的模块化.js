// express中的路由：客户端的请求与服务器之间的映射关系
// 路由由三部分组成：需求的类型，请求的URL地址，处理函数

const express = require('express');
const router = require('./express_router');
const app = express()
app.listen(8080,() => {
    console.log('routerkuai running at localhost');
})

// 客户端发起的请求，先从上到下进行请求方式和路由匹配，两者都匹配成功后执行对应的function函数

// 利用模块路由化步骤
// 1、创建路由模块对应的js
// 2、调用express.Router()函数创建路由对象
// 3、向路由对象挂载对应的路由
// 4、module.exports向外共享路由
// 5、导入路由模块
// 6、使用app.use()函数注册路由模块

// 5、导入路由模块
const userRouter = require('./express_router')

// 6、注册路由模块
// app.use(userRouter)

// 7、为路由模块添加前缀
app.use('/api',userRouter)