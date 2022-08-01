// 局部中间件只有在其它中间件或路由中调用

// 创建服务器
const express = require('express')
const app = express()
app.listen(8080,() => {
    console.log('局部中间件 running at http://127.0.0.1');
})

// 定义局部中间件
const mw1 = (req,res,next)=> {
    console.log('这是第一个局部中间件');
    next()                                       // 注意：next()函数不能丢了，不然不往下执行
}

const mw2 = (req,res,next) => {
    console.log('这是第二个局部中间件')
    next()
}

// 定义不调用中间件的路由
app.get('/get',(req,res)=> {
    console.log('这是get请求');
})

// 定义调用多个中间件的路由
app.post('/post',mw1,mw2,(req,res) => {               // 在路由路径之后添加局部中间件
    console.log('这是调用中间件的post请求');
})