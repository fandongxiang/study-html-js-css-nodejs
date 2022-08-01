const { application } = require('express');
const express = require('express')
const app = express()
app.listen(8080,() => {
    console.log('跨域running at localhost:8080');
})

// 配置解析表单的全局中间件：url-encoded 格式的请求体数据
app.use(express.urlencoded({extended:false}))     

// 托管静态页面，测试接口路径问题
app.use('/case',express.static('./case/'))

// CORS(corss-Orign Resourse Sharing)：由一系列HTTP响应头组成，这些HTTP响应头决定浏览器是否阻止前端JS代码跨域获取资源
// 配置解决跨域问题的中间件的步骤
// 1、安装cors模块：npm i cors
// 2、导入cors模块
const cors = require('cors') 
// 3、调用cors()方法
// 4、将cors()方法注册为全局中间件
app.use(cors());

// 挂载get请求路由测试
app.get('/api/get',(req,res) => {
    const query = req.query
    console.log(query);                       // 跨域时数据可以提交到服务器，但客户端不能接受
    res.send(query)
})

// 挂载post请求路由测试
app.post('/api/post',(req,res) => {
    const body = req.body
    console.log(body);
    res.send(body)
})