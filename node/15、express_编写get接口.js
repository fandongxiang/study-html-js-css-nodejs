// 创建服务器                                          // 真实路由模块中无需实例化，因为不是服务器
app.listen(8080,() => {
const express = require('express')
const app = express()                                  
    console.log('get接口running at localhost:8080/');
})

// 创建路由对象
const router = express.Router()         
app.use('/api',router)                  // 为全局中间件路由添加访问前缀

// 在路由对象挂载get接口
router.get('/get',(req,res) => {
    res.send({                          // 在客户端相应里以对象格式输出自定义属性
        status: 0,
        ms: 'get请求成功',
        data: '调用了get请求'
    })
})