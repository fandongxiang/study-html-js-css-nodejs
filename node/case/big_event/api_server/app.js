// 导入express模块
const express = require('express')
// 新建服务器
const app = express()
app.listen(3007,() => {
    console.log('big_event server running at http://127.0.0.1:3007');
})

// 配置跨域中间件
const cors = require('cors');
const { urlencoded } = require('express');
app.use(cors())

// 配置解析x-www.form-urlencoded表单数据中间件
app.use(urlencoded({extended:false}))

// app.use(express.static('../api_server/tech/'))
// 导入@hapi/joi模块
const joi = require('@hapi/joi')

// 响应错误的全局中间件：自己封装一个函数
app.use((req,res,next) => {
    res.cc = function(err,status=1) {
        res.send({                                             // 利用全局中间件共享res和req
        // 状态
        status,
        // 状态判断，判断错误err是错误对象，还是字符串
        message: err instanceof Error ? err.message : err
        })
    }
    next()  
})

// 配置解析 Token 的中间件，一定要在路由模块之前
const expressJWT = require('express-jwt')
const config = require('./config')
app.use(expressJWT({secret: config.jwtSecretKey}).unless({ path: [/^\/api/]}))

// 导入并注册用户路由模块
const userRouter = require('./router/user'); 
app.use('/api',userRouter)                               // 挂在路由前缀api

// 导入并注册用户信息路由模块
const userinfoRouter = require('./router/userinfo')
app.use('/my',userinfoRouter)

// 在最后导入错误级别中间件
const Joi = require('@hapi/joi');
const { jwtSecretKey } = require('./config');
app.use(function(err,req,res,next) {
    // 验证失败导致的错误
    if (err instanceof joi.ValidationError) {return res.send({status: 1,message: err.message})}
    // 身份认证失败后的错误
    if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
    // 未知错误
    res.send({status: 1,message: err.message})
})



