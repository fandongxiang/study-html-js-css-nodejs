// 创建服务器
const express = require('express')
const app = express()
app.listen(8080,() => {
    console.log('session running at 127.0.0.1');
})

// 导入session中间件
const session = require('express-session')
app.use(session({
    secret: 'fandongxiang',
    resave: false,
    saveUninitialized: true
}))

// 解析POST提交过来的表单数据
app.use(express.urlencoded({extended:false}))

// 登录的API接口
app.post('/api/login',(req,res) => {
    if (req.body.username != 'admin' || req.body.password != '000000') {
        return res.send('登录失败')
    }
    // 登录成功后的信息保存到session中，利用req.session属性必须安装session中间件
    req.session.user = req.body          // 将用户登录信息保存到session，user是自定义属性
    req.session.islogin = true           // 将用户登录状态保存到，islogin也是自定义的 
})