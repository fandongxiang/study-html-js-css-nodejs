// JWT认证步骤
// 1、安装JWT相关的包：
// npm i jsonwebtoken express-jwt@5.3.3
// 其中jsonwebtoken用于生成jwt字符串，express-jwt用于将jwt字符串解析还原称json对象 

const express = require('express')
const app = express()
app.listen(8080,() => {
    console.log('JWT running at http://127.0.0.1:8080');
})

// 配置解析 x-www.form-urlencoded 表单中间件
app.use(express.urlencoded({extended:false}))

// 2、导入JWT相关包
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')

// 3、定义 secret 密钥:
// 生成JWT字符串时进行加密，解析还原Json字符串时进行解密
const secretKey = 'i love china'

// 4、在登录成功后生成 JWT 字符串
// 调用jsonwebtoken的sign()方法，三个参数包括：
// 用户信息对象
// 加密密钥
// 配置对象
app.post('/api/login',(req,res) => {

    const userinfo = req.body
    if (userinfo.username != 'admin' || userinfo.password != '123456') {
        return res.send('登录失败！')
    }
    // 用户登录成功后，生成JWT字符串，通过token属性相应给客户端
    return res.send({
            status: 0,
            message: '登录成功',
            token: jwt.sign({username:userinfo.username},secretKey,{expiresIn: '60s'})
        })
})

// 5. 将 JWT 字符串还原为 JSON 对象
// expressJWT({secret: secretKey}) 就是用来解析 token 的中间件
// .unless({ path: [/^\api\//]}) 用来指定哪些接口不需要访问权限
app.use(expressJWT({secret: secretKey}).unless({ path: [/^\api\//]}))

// 6. 使用 req.user 获取用户信息
// 当 express-jwt 这个中间件配置成功之后，即可在那些有权限的接口中，使用 req.user 对象，来访问从 JWT 字符串
// 这是一个有权限的API接口,
app.get('/admin/getinfo',(req,res) => {
    console.log(req.user);
    res.send({
        status: 0,
        message: '获取用户信息成功！',
        data: req.user
    })
})

// 7. 捕获解析 JWT 失败后产生的错误
// 当使用 express-jwt 解析 Token 字符串时，如果客户端发送过来的 Token 字符串过期或不合法，会产生一个解析失败的错误，影响项目的正常运行。我们可以通过 Express 的错误中间件，捕获这个错误并进行相关的处理
app.use((err,req,res,next) => {
    // token 解析失败导致的错误
    if (err.name == 'UnauthorizedError') {
        return res.send({status: 401,message: '无效的token'})
    }
    // 其它原因导致的错误
    res.send({status: 500,message: '未知错误'})
})

