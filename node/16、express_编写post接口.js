const express = require('express')
const app = express()                        // 真实路由模块中无需实例化，因为不是服务器
app.listen(8080,() => {
    console.log('post接口running at localhost:8080/');
})

const router = express.Router()
// postman测试传输的为json格式数据，所以导入json格式解析中间件
app.use(express.json())                     // 注意：jsom请求体解析中间必须放在router中间件之前
app.use(router)                             // 使用router必须将其注册为全局中间件


router.post('/post',(req,res) => {
    const body = req.body
    res.send({
        status: 0,
        msg: 'post请求成功',
        data: body,
        property: '自定义属性'
    })
})