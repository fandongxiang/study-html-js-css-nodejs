// 安装@hapi/joi包：为每个表单携带的数据项，制定验证规则  npm i @hapi/joi@17.1.0
// 安装@escook/express-joi中间件，实现自动对表单数据进行验证功能  npm i @escook/express-joi

const express = require('express')
const app = express()
app.listen(8080,() => {
    console.log('joi密码验证服务器running at http://127.0.0.1:8080');
})

// 配置解析x-www-form-urlendoded格式表单中间件
app.use(express.urlencoded({extended:false}))

// 1、导入@hapi-joi模块和@escook/express-joi模块
const joi = require('@hapi/joi')
const expressJoi = require('@escook/express-joi')

// 2、定义验证规则
const userSchema = {
    // 2.1 校验一个 req.body 中的数据
    body : {
        username: joi.string().alphanum().min(3).max(10).required(),
        password: joi.string().pattern(/^[\S]{6,15}$/).required(),
        repassword: joi.ref('password')
    },
    // 2.2 校验一个 req.query 中的数据
    query: {
        name: joi.string().alphanum().min(3).required(),
        age: joi.number().integer().min(1).max(100).required()
    },
    // 2.3 校验 req.params 中的数据
    params: {
        id: joi.number().integer().min(0).required()
    }
}

// 3、在路由中调用expressJoi(userSchema)的方式，调用中间件进行验证
app.post('/reguser',expressJoi(userSchema),(req,res) => {
    const body = req.body
    res.send(body)
})

// 4、错误级别中间件
app.use(function(err,req,res,next) {
    // joi 参数检验失败
    if (err instanceof joi.ValidationError) {
        return res.send({status: 1,message: err.message})
    }
    // 未知错误
    res.send({status: 1,message: err.message})
})
