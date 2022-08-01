/*利用bcryptjs对存储进数据库的密码先进行加密*/
// 加密后的优点
// 1、加密之后的密码，无法逆向破解；
// 2、同一明文密码多次加密，得到的加密结果各不相同，保证了安全性；

// 步骤：
// 1、安装bcryptjs插件：npm i bcryptjs@2.4.3
// 2、导入bcryptjs模块：
const bcrypt = require('bcryptjs')
// 3、调用bcrypt.hashSync(要加密的对象，加密后的长度)
// const  password = bcrypt.hashSync(password,10)

// 新建服务器
const express = require('express')
const app = express()
app.listen(8080,() => {
    console.log('加密服务器running at http://127.0.0.1');
})

// 配置解x-wwww-form-urlencoded格式表单内置中间件
app.use(express.urlencoded({extended:false}))

// 连接数据库
const mysql = require('mysql')
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})
db.query('select 1',(err,result) => {
    if (err) return console.log(err.message);
    console.log(result);
})

// 建立路由测试
app.post('/login',(req,res) => {
    // 获取客户端发送的数据
    const userinfo = req.body
    // 加密password密码
    userPass = bcrypt.hashSync(userinfo.password,1)
    // 将用户名和密码插入数据库测试
    const sqlStr = 'insert into users set?'
    const user = {username:userinfo.username,password:userPass}
    db.query(sqlStr,user,(err,result) => {
        if (err) return console.log(err.message);
        res.send('插入成功')
    })
})