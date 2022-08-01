const { application } = require('express');
const url = require('url')
const express = require('express')
const app = express()
app.listen(8080,() => {
    console.log('路径问题running at localhost:8080');
})

// 配置解析表单的全局中间件：url-encoded 格式的请求体数据
app.use(express.urlencoded({extended:false}))     

// 托管静态页面，测试接口路径问题
app.use('/public',express.static('../node/'))
app.use(express.static('./case/tech/'))

// 注册全局中间件，捕获URL地址
app.use((req,res,next) => {
    urlpath = req.url
    console.log(urlpath);
    next()
})


// 测试ajax相对根目录路径
app.get('/api/get',(req,res) => {                    // 路径直接写根目录
    const query = req.query
    console.log(query);              
    res.send(query)
    console.log(req.url);
})

app.get('/public/api/get',(req,res) => {             // 路径要拼接ajax页面的路径
    const query = req.query
    console.log(query);              
    res.send(query)
})

// 结论：
// 1、ajax中采用相对当前页面路径的方式，则服务器端也要采用url拼接的方式；
// 2、ajax中采用相对服务器根目录的方式，则服务器端直接采用根目录方式；
// 3、跨域请求只能用绝对路径；

// 挂载post请求路由测试
app.post('/api/post',(req,res) => {
    const body = req.body
    console.log(body);
    res.send(body)
})