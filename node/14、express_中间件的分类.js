
// express官方将中间件分为五类：
// 1、应用级别的中间件：绑定到app实例上的中间件，如app.use/app.get()/app.post
// 2、路由级别的中间件：绑定到app.Router()身上的中间件

// 3、错误级别中间件；
// 创建服务器
const express = require('express')
const app = express()
app.listen(8080,() => {
    console.log('错误级别中间件running at localhost');
})
// 定义人为制造错误的简单路由
// app.get('/',(req,res) => {
//     // 人为制造错误
//     throw new Error('服务器内部发生了错误')
//     res.send('home page')
// })
// // 定义错误级别中间件，捕获整个项目的异常错误
// app.use((err,req,res,next) => {                        // 注意：错误级别中间件必须注册在所有中间件之后
//     console.log('发生了错误' + err.message)
//     res.send('Error:' + err.message)
// })

// 4、express内置中间件；express.static(),express.json(),express.urlencoded()共三个
app.use(express.static('./case/tech/'))
app.use(express.json())                                 // 解析json格式的请求体数据
app.use(express.urlencoded({extended:false}))           // 解析url-encoded 格式的请求体数据
// 演示请求json格式的请求体数据
app.post('/post',(req,res) => {
   const body =  req.body                              // 服务器可以用req.body接收客户端发起的请求体数据
   console.log(body)                                   // 默认情况下，如果不配置解析表单数据的中间件，则req.body默认为undefined
   console.log(body.name);
   res.send(body)
})
// 演示请求url-encoded格式的请求体数据
// 5、第三方中间件；