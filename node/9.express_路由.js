// express中的路由：客户端的请求与服务器之间的映射关系
// 路由由三部分组成：需求的类型，请求的URL地址，处理函数

const express = require('express')
const app = express()
app.listen(8080,() => {
    console.log('router running at localhost');
})

// 客户端发起的请求，先从上到下进行请求方式和路由匹配，两者都匹配成功后执行对应的function函数

// 路由使用方法一：直接挂载到app实例上
app.get('/',(req,res) => {
    res.send('请求方式为get')
})
app.post('/',(req,res) => {                
    res.send('请求方式为post')          // 请求地址都为‘/’，但请求方式不同时，返回函数不同
})
