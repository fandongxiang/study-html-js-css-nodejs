// 中间件的作用：共享req和res

// 新建服务器
const express = require('express')
const app = express()
app.listen(8080,() => {
    console.log('中间件共享running at localhost');
})

// 定义全局中间件
app.use((req,res,next) => {
    const time = Date.now()
    // 为req定义自定义属性time，可以让后续路由调用
    req.starTime = time
    next()
})

// 定义get请求简单路由
app.get('/get',(req,res) => {
    console.log('get到达的时间为' + req.starTime);          // 该请求也能调用全局中间件中的req.starTime属性
})

// 定义post请求简单路由
app.post('/post',(req,res) => {
    console.log('post到达的时间为' + req.starTime);        // 该请求也能调用全局中间件中的req.starTime属
})