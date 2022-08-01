// 1、中间件的调用流程：当一个请求到达express后，可以连续使用多个中间件，对这次请求进行预处理
// 2、express中间件本质是function函数
// 3、与路由函数不同的是，包含next形参，函数体最后需要next()函数，流向下一个中间件或路由

// 创建服务器
const express = require('express')
const app = express()
app.listen(8080,() => {
    console.log('middle running at localhost');
})



// 定义简单中间件函数
const nw = (req,res,next) => {
    console.log('这是第一个中间件函数')
    next()
}

// 定义全局生效的中间件函数:app.use(中间件)，当客户端请求到达后都会执行
app.use(nw)
app.use((req,res,next) => {
    console.log('这是第二个中间件函数')
    next()
})

// 路由模块放到全局中间件之前时，全局中间件就不会执行
const userRouter = require('./express_router')         // 利用路由模块测试每次请求是否经过全局中间件
app.use(userRouter)